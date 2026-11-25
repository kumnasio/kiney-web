<template>
    <section class="section recomendaciones" aria-labelledby="reco-title">

        <header class="section-head">
            <span class="eyebrow">Recomendaciones</span>
            <h1 id="reco-title" class="display">Lo que recomiendo.</h1>
            <p class="lead">
                Productos que he probado o que recomendaría a un amigo, para montar
                y mejorar tu setup.
            </p>
        </header>

        <!-- FILTROS: la categoría elegida queda en la URL (?cat=audio) para poder compartirla -->
        <div v-if="categorias.length > 1" class="filtros" role="group" aria-label="Filtrar por categoría">
            <RouterLink
                :to="{ query: {} }"
                class="filtro"
                :aria-current="!catActual ? 'true' : undefined"
                replace
            >
                Todas
            </RouterLink>

            <RouterLink
                v-for="c in categorias"
                :key="c.slug"
                :to="{ query: { cat: c.slug } }"
                class="filtro"
                :aria-current="catActual === c.slug ? 'true' : undefined"
                replace
            >
                {{ c.nombre }}
                <span class="cuenta">{{ c.total }}</span>
            </RouterLink>
        </div>

        <p v-if="error" class="aviso" role="status">
            No se han podido cargar las recomendaciones. Recarga la página en un momento.
        </p>

        <div v-else class="grid" :aria-busy="cargando">
            <template v-if="cargando">
                <div v-for="n in 6" :key="n" class="esqueleto" aria-hidden="true"></div>
            </template>

            <template v-else>
                <ProductoCard
                    v-for="p in visibles"
                    :key="p.categoria + p.nombre"
                    :etiqueta="p.categoria"
                    :titulo="p.nombre"
                    :texto="p.por_que"
                    :precio="p.precio"
                    :imagen="p.imagen"
                    :enlace="p.enlace"
                    :destacado="esSi(p.destacado)"
                />

                <p v-if="!visibles.length" class="aviso vacio">
                    Aún no hay productos en esta categoría.
                    <RouterLink :to="{ query: {} }" replace>Ver todas</RouterLink>
                </p>
            </template>
        </div>

    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductoCard from '@/components/ProductoCard.vue'
import { useHoja, esSi } from '@/composables/useHoja'

const route = useRoute()
const { filas, cargando, error } = useHoja('recomendaciones')

const slug = (texto) =>
    texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// Categorías en el orden en que aparecen en la hoja
const categorias = computed(() => {
    const mapa = new Map()
    for (const p of filas.value) {
        if (!p.categoria) continue
        const s = slug(p.categoria)
        if (!mapa.has(s)) mapa.set(s, { slug: s, nombre: p.categoria, total: 0 })
        mapa.get(s).total++
    }
    return [...mapa.values()]
})

const catActual = computed(() => (typeof route.query.cat === 'string' ? route.query.cat : ''))

// Primero los destacados; dentro de cada grupo, el orden de la hoja
const visibles = computed(() => {
    const lista = catActual.value
        ? filas.value.filter((p) => slug(p.categoria ?? '') === catActual.value)
        : filas.value
    return [...lista].sort((a, b) => Number(esSi(b.destacado)) - Number(esSi(a.destacado)))
})
</script>

<style scoped>
.recomendaciones {
    margin-top: calc(var(--gutter) + 140px);
}

.filtros {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    margin: 0 auto clamp(32px, 5vw, 48px);
}

.filtro {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 9px 16px;
    border-radius: var(--r-pill);

    background: var(--glass-fill);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-edge);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);

    color: var(--cream-dim);
    font-size: 14px;
    font-weight: 500;

    transition:
        background-color var(--fast) var(--ease),
        border-color var(--fast) var(--ease),
        color var(--fast) var(--ease);
}

.filtro:hover {
    color: var(--cream);
    border-color: rgba(255, 255, 255, 0.32);
    text-decoration: none;
}

.filtro[aria-current="true"] {
    background: var(--glass-fill-strong);
    color: var(--cream);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.25);
}

.cuenta {
    min-width: 20px;
    padding: 1px 6px;
    border-radius: var(--r-pill);
    background: rgba(255, 255, 255, 0.1);
    color: var(--muted);
    font-size: 12px;
    text-align: center;
    font-variant-numeric: tabular-nums;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.esqueleto {
    aspect-ratio: 4 / 4.6;
    border-radius: var(--r-card);
    border: 1px solid var(--glass-edge);
    background: linear-gradient(100deg, rgba(255, 255, 255, 0.03) 30%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 70%);
    background-size: 300% 100%;
    animation: brillo 1.4s linear infinite;
}

@keyframes brillo {
    from { background-position: 100% 0; }
    to { background-position: 0 0; }
}

.aviso {
    text-align: center;
    color: var(--cream-dim);
}

.vacio {
    grid-column: 1 / -1;
}

@media (max-width: 900px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .recomendaciones {
        margin-top: calc(var(--gutter) + 110px);
    }
}
</style>
