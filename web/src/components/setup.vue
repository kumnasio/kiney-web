<template>
    <section id="setup" class="section" aria-labelledby="setup-title">

        <header class="section-head">
            <span class="eyebrow">Mi setup</span>
            <h2 id="setup-title" class="display">Lo que uso cada día.</h2>
            <p class="lead">
                Cada pieza de mi escritorio, elegida y probada.
            </p>

            <div class="switch" role="group" aria-label="Categoría">
                <button
                    type="button"
                    :aria-pressed="selectedCategory === 'pc'"
                    @click="selectedCategory = 'pc'"
                >
                    PC
                </button>

                <button
                    type="button"
                    :aria-pressed="selectedCategory === 'perifericos'"
                    @click="selectedCategory = 'perifericos'"
                >
                    Periféricos
                </button>
            </div>
        </header>


        <p v-if="error" class="aviso" role="status">
            No se han podido cargar los productos. Recarga la página en un momento.
        </p>

        <div v-else class="products" :aria-busy="cargando">
            <template v-if="cargando">
                <div v-for="n in 3" :key="n" class="esqueleto" aria-hidden="true"></div>
            </template>

            <template v-else>
                <ProductoCard
                    v-for="p in actuales"
                    :key="p.seccion + p.modelo"
                    :etiqueta="p.tipo"
                    :titulo="p.modelo"
                    :precio="p.precio"
                    :imagen="p.imagen"
                    :enlace="p.enlace"
                />
            </template>
        </div>

        <div class="mas">
            <RouterLink to="/recomendaciones" class="btn">
                Ver todas mis recomendaciones
                <span class="btn-arrow" aria-hidden="true"><i class="pi pi-arrow-right"></i></span>
            </RouterLink>
        </div>

    </section>
</template>


<script setup>
// Los productos salen de la pestaña "setup" de tu Google Sheets (ver web/src/data/README.md)
import { computed, ref } from 'vue'
import ProductoCard from './ProductoCard.vue'
import { useHoja } from '@/composables/useHoja'

const selectedCategory = ref('pc')
const { filas, cargando, error } = useHoja('setup')

const actuales = computed(() =>
    filas.value.filter((p) => p.seccion?.toLowerCase().startsWith(selectedCategory.value === 'pc' ? 'pc' : 'perif'))
)
</script>


<style scoped>

/* SWITCH */

.switch {
    display: inline-flex;

    margin-top: 32px;
    padding: 4px;

    background: var(--glass-fill);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-edge);
    box-shadow: var(--glass-shadow);
    border-radius: var(--r-pill);
}

.switch button {
    border: none;

    padding: 9px 20px;

    border-radius: var(--r-pill);

    background: transparent;
    color: var(--muted);

    font: inherit;
    font-size: 14px;
    font-weight: 500;

    cursor: pointer;

    transition:
        background-color var(--fast) var(--ease),
        color var(--fast) var(--ease);
}

.switch button:hover {
    color: var(--cream);
}

.switch button[aria-pressed="true"] {
    background: var(--glass-fill-strong);
    color: var(--cream);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.25);
}


/* PRODUCTS */

.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.esqueleto {
    aspect-ratio: 4 / 4.4;
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

.mas {
    display: flex;
    justify-content: center;
    margin-top: 36px;
}

.aviso {
    text-align: center;
    color: var(--cream-dim);
}


/* RESPONSIVE */

@media (max-width: 900px) {
    .products {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .products {
        grid-template-columns: 1fr;
    }
}

</style>
