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


        <div class="products">
            <article
                v-for="product in currentProducts"
                :key="selectedCategory + product.modelo"
                class="product"
            >
                <div class="product-image">
                    <img
                        v-if="product.imagen"
                        :src="product.imagen"
                        :alt="product.modelo"
                        width="400"
                        height="300"
                        loading="lazy"
                    >
                    <div v-else class="placeholder" aria-hidden="true">
                        <i :class="['pi', product.icono || 'pi-box']"></i>
                    </div>
                </div>

                <div class="product-info">
                    <span class="product-kind">{{ product.tipo }}</span>
                    <h3>{{ product.modelo }}</h3>

                    <div class="product-foot">
                        <span class="price">{{ product.precio }}</span>

                        <a
                            :href="product.enlace"
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            class="btn-ghost amazon-link"
                            :aria-label="`Ver ${product.modelo} en Amazon (enlace de afiliado, se abre en otra pestaña)`"
                        >
                            Ver en Amazon
                            <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </article>
        </div>

    </section>
</template>


<script>
// Los productos se editan en web/src/data/setup.json (ver web/src/data/README.md)
import setupData from '@/data/setup.json'

export default {
    name: 'Setup',

    data() {
        return {
            selectedCategory: 'pc',
            pc: setupData.pc,
            perifericos: setupData.perifericos
        }
    },

    computed: {
        currentProducts() {
            return this.selectedCategory === 'pc'
                ? this.pc
                : this.perifericos
        }
    }
}
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

.product {
    overflow: hidden;

    background: var(--glass-fill);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-edge);
    box-shadow: var(--glass-shadow);
    border-radius: var(--r-card);

    transition:
        transform var(--base) var(--ease),
        border-color var(--base) var(--ease);
}

.product:hover {
    transform: translateY(-2px);
}

.product-image {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 10%;

    transition: transform var(--base) var(--ease);
}

.product:hover .product-image img {
    transform: scale(1.03);
}

.product-info {
    padding: 20px 22px 22px;
}

.product-kind {
    color: var(--muted);
    font-size: 13px;
}

.product-info h3 {
    margin: 4px 0 20px;

    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.2;
}

.product-foot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
}

.price {
    font-size: 17px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
}

.product-foot .btn-ghost {
    padding: 8px 14px;
    font-size: 14px;
}

/* Naranja Amazon al pasar por el producto o por el enlace */
.amazon-link {
    transition:
        background-color var(--fast) var(--ease),
        border-color var(--fast) var(--ease),
        color var(--fast) var(--ease),
        box-shadow var(--fast) var(--ease);
}

.product:hover .amazon-link,
.amazon-link:hover,
.amazon-link:focus-visible {
    background: var(--amazon);
    border-color: var(--amazon);
    color: var(--ink);
    box-shadow: 0 6px 20px rgba(255, 153, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.amazon-link:hover {
    background: var(--amazon-hover);
}

.product:hover {
    border-color: rgba(255, 153, 0, 0.35);
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
