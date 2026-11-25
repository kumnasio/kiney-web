import { ref } from 'vue'
import { FUENTES } from '@/data/fuentes'

// Caché en memoria: cada hoja se descarga una sola vez por visita
const cache = new Map()

/**
 * Lee una pestaña de Google Sheets publicada como CSV (o su copia local)
 * y devuelve sus filas como objetos { columna: valor }.
 *
 *   const { filas, cargando, error } = useHoja('setup')
 */
export function useHoja(nombre) {
    const fuente = FUENTES[nombre]
    const filas = ref([])
    const cargando = ref(true)
    const error = ref(null)

    if (!fuente) throw new Error(`useHoja: no hay ninguna fuente llamada "${nombre}" en data/fuentes.js`)

    if (!cache.has(nombre)) cache.set(nombre, cargar(fuente))

    cache.get(nombre)
        .then((datos) => { filas.value = datos })
        .catch((e) => {
            error.value = e
            cache.delete(nombre)
        })
        .finally(() => { cargando.value = false })

    return { filas, cargando, error }
}

async function cargar({ sheet, local }) {
    if (sheet) {
        try {
            return aObjetos(parseCSV(await descargar(sheet)))
        } catch (e) {
            console.warn('[useHoja] No se pudo leer Google Sheets, uso la copia local.', e)
        }
    }
    return aObjetos(parseCSV(await descargar(local)))
}

async function descargar(url) {
    const res = await fetch(url, { cache: 'no-cache' })
    if (!res.ok) throw new Error(`HTTP ${res.status} al leer ${url}`)
    return res.text()
}

// Convierte la tabla en objetos usando la primera fila como cabecera.
// Cabeceras sin tildes ni mayúsculas ("Precio" → "precio", "Categoría" → "categoria").
// Se saltan filas vacías y las que tengan visible = no.
function aObjetos(tabla) {
    const [cabecera = [], ...resto] = tabla
    const claves = cabecera.map(normalizar)

    return resto
        .filter((fila) => fila.some((celda) => celda.trim() !== ''))
        .map((fila) => Object.fromEntries(claves.map((k, i) => [k, (fila[i] ?? '').trim()])))
        .filter((obj) => !/^(no|false|0)$/i.test(obj.visible ?? ''))
}

function normalizar(texto) {
    return texto.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '_')
}

// Lector de CSV (RFC 4180): comillas, comas y saltos de línea dentro de celdas
function parseCSV(texto) {
    const filas = []
    let fila = []
    let celda = ''
    let entreComillas = false

    texto = texto.replace(/^﻿/, '')

    for (let i = 0; i < texto.length; i++) {
        const c = texto[i]

        if (entreComillas) {
            if (c === '"' && texto[i + 1] === '"') { celda += '"'; i++ }
            else if (c === '"') entreComillas = false
            else celda += c
        } else if (c === '"') {
            entreComillas = true
        } else if (c === ',') {
            fila.push(celda); celda = ''
        } else if (c === '\n' || c === '\r') {
            if (c === '\r' && texto[i + 1] === '\n') i++
            fila.push(celda); filas.push(fila)
            fila = []; celda = ''
        } else {
            celda += c
        }
    }

    if (celda !== '' || fila.length) { fila.push(celda); filas.push(fila) }
    return filas
}

/** "sí", "si", "x", "true", "1" → true */
export function esSi(valor) {
    return /^(s[ií]|x|true|1|yes)$/i.test((valor ?? '').trim())
}
