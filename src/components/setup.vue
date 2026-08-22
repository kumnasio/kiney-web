<template>
    <section class="setup">

        <div class="setup-header">
            <h1>Mi setup</h1>

            <div class="switch-container">
                <button
                    :class="{ active: selectedCategory === 'pc' }"
                    @click="selectedCategory = 'pc'"
                >
                    PC
                </button>

                <button
                    :class="{ active: selectedCategory === 'perifericos' }"
                    @click="selectedCategory = 'perifericos'"
                >
                    Periféricos
                </button>
            </div>
        </div>


        <div class="products">

            <article
                v-for="product in currentProducts"
                :key="product.id"
                class="product"
            >

                <div class="product-image">
                    <img
                        :src="product.image"
                        :alt="product.name"
                    >
                </div>

                <div class="product-info">

                    <h2>
                        {{ product.name }}
                    </h2>

                    <p>
                        {{ product.description }}
                    </p>

                    <span class="price">
                        {{ product.price }}
                    </span>

                    <a
                        :href="product.affiliateLink"
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        class="amazon-button"
                    >
                        Ver en Amazon
                    </a>

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
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 2,
                    name: 'Tarjeta gráfica',
                    description: 'NVIDIA GeForce RTX 4080',
                    price: '999,99 €',
                    image: '',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 3,
                    name: 'Memoria RAM',
                    description: '32 GB DDR5',
                    price: '129,99 €',
                    image: '',
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
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 2,
                    name: 'Ratón',
                    description: 'Ratón gaming inalámbrico',
                    price: '79,99 €',
                    image: '',
                    affiliateLink: 'TU_LINK_DE_AFILIADO'
                },

                {
                    id: 3,
                    name: 'Auriculares',
                    description: 'Auriculares gaming',
                    price: '149,99 €',
                    image: '',
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

.setup {
    width: 80%;
    max-width: 1400px;

    margin: 100px auto;

    color: #f5f5f5;
}


/* HEADER */

.setup-header {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 40px;
}


.setup-header h1 {
    margin: 0;

    font-size: 36px;
}


/* SWITCH */

.switch-container {
    display: flex;

    padding: 4px;

    background: #181818;

    border: 1px solid #303030;

    border-radius: 30px;
}


.switch-container button {
    border: none;

    padding: 10px 20px;

    border-radius: 25px;

    background: transparent;

    color: #aaa;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    transition: 0.2s ease;
}


.switch-container button:hover {
    color: white;
}


.switch-container button.active {
    background: #f1f1f1;
    color: #111;
}


/* PRODUCTS */

.products {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}


.product {
    overflow: hidden;

    background: #151515;

    border: 1px solid #292929;

    border-radius: 15px;

    transition:
        transform 0.2s ease,
        border-color 0.2s ease;
}


.product:hover {
    transform: translateY(-5px);

    border-color: #444;
}


/* IMAGE */

.product-image {
    width: 100%;

    aspect-ratio: 16 / 10;

    display: flex;

    justify-content: center;
    align-items: center;

    background: #202020;
}


.product-image img {
    width: 80%;
    height: 80%;

    object-fit: contain;
}


/* INFO */

.product-info {
    padding: 20px;
}


.product-info h2 {
    margin: 0 0 10px;

    font-size: 20px;
}


.product-info p {
    margin: 0 0 15px;

    color: #aaa;

    line-height: 1.5;
}


.price {
    display: block;

    margin-bottom: 15px;

    font-size: 18px;
    font-weight: 700;
}


/* AMAZON */

.amazon-button {
    display: inline-block;

    padding: 10px 18px;

    border-radius: 8px;

    background: #ff9900;
    color: #111;

    text-decoration: none;

    font-weight: 600;

    transition: 0.2s ease;
}


.amazon-button:hover {
    background: #ffb52e;
}


/* RESPONSIVE */

@media (max-width: 900px) {

    .products {
        grid-template-columns: repeat(2, 1fr);
    }

}


@media (max-width: 600px) {

    .setup {
        width: 90%;
    }

    .setup-header {
        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

    .products {
        grid-template-columns: 1fr;
    }

}

</style>