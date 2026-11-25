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
                :key="selectedCategory + product.id"
                class="product"
            >
                <div class="product-image">
                    <img
                        v-if="product.image"
                        :src="product.image"
                        :alt="product.description"
                        loading="lazy"
                    >
                    <div v-else class="placeholder" aria-hidden="true">
                        <i :class="['pi', product.icon]"></i>
                    </div>
                </div>

                <div class="product-info">
                    <span class="product-kind">{{ product.name }}</span>
                    <h3>{{ product.description }}</h3>

                    <div class="product-foot">
                        <span class="price">{{ product.price }}</span>

                        <a
                            :href="product.affiliateLink"
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            class="btn-ghost"
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
export default {
    name: 'Setup',

    data() {
        return {

            selectedCategory: 'pc',

            pcComponents: [
                {
                    id: 1,
                    name: 'Procesador',
                    description: 'AMD Ryzen 7 7800X3D',
                    price: '399,99 €',
                    image: '',
                    icon: 'pi-microchip',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 2,
                    name: 'Tarjeta gráfica',
                    description: 'NVIDIA GeForce RTX 4080',
                    price: '999,99 €',
                    image: '',
                    icon: 'pi-desktop',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 3,
                    name: 'Memoria RAM',
                    description: '32 GB DDR5',
                    price: '129,99 €',
                    image: '',
                    icon: 'pi-server',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                }
            ],


            peripherals: [
                {
                    id: 1,
                    name: 'Teclado',
                    description: 'Teclado mecánico',
                    price: '99,99 €',
                    image: '',
                    icon: 'pi-th-large',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 2,
                    name: 'Ratón',
                    description: 'Ratón gaming inalámbrico',
                    price: '79,99 €',
                    image: '',
                    icon: 'pi-bolt',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 3,
                    name: 'Auriculares',
                    description: 'Auriculares gaming',
                    price: '149,99 €',
                    image: '',
                    icon: 'pi-headphones',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                }
            ]

        }
    },


    computed: {

        currentProducts() {

            return this.selectedCategory === 'pc'
                ? this.pcComponents
                : this.peripherals

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

    background: var(--surface);
    border: 1px solid var(--hairline);
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
    background: var(--cream);
    color: var(--ink);
}


/* PRODUCTS */

.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.product {
    overflow: hidden;

    background: var(--surface);
    border: 1px solid var(--hairline);
    border-radius: var(--r-card);

    transition:
        transform var(--base) var(--ease),
        border-color var(--base) var(--ease);
}

.product:hover {
    transform: translateY(-2px);
    border-color: var(--hairline-strong);
}

.product-image {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--surface-raised);
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
