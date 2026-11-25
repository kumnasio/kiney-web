// ─────────────────────────────────────────────────────────────────────────────
//  De dónde saca la web los productos.
//
//  Pega aquí el enlace CSV de cada pestaña de tu Google Sheets
//  (Archivo → Compartir → Publicar en la web → elige la pestaña → "Valores separados por comas (.csv)").
//  Mientras un enlace esté vacío, la web usa la copia local de web/public/data/.
//
//  Guía completa: web/src/data/README.md
// ─────────────────────────────────────────────────────────────────────────────

export const FUENTES = {
    // Pestaña "setup": tu PC y tus periféricos
    setup: {
        sheet: '',
        local: '/data/setup.csv'
    },

    // Pestaña "recomendaciones": la página /recomendaciones
    recomendaciones: {
        sheet: '',
        local: '/data/recomendaciones.csv'
    }
}
