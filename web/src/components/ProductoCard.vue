<template>
    <article class="producto" :class="{ destacado }">
        <div class="producto-imagen">
            <img
                v-if="imagen && !imagenRota"
                :src="imagen"
                :alt="titulo"
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
                referrerpolicy="no-referrer"
                @error="imagenRota = true"
            >
            <div v-else class="sin-imagen">
                <i class="pi pi-image" aria-hidden="true"></i>
                <span>Imagen pendiente</span>
            </div>

            <span v-if="destacado" class="badge">Mi favorito</span>
        </div>

        <div class="producto-info">
            <span v-if="etiqueta" class="producto-etiqueta">{{ etiqueta }}</span>
            <h3>{{ titulo }}</h3>
            <p v-if="texto" class="producto-texto">{{ texto }}</p>

            <div class="producto-pie">
                <span class="precio">{{ precio }}</span>

                <a
                    :href="enlace"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    class="btn-ghost amazon-link"
                    :aria-label="`Ver ${titulo} en Amazon (enlace de afiliado, se abre en otra pestaña)`"
                >
                    Ver en Amazon
                    <i class="pi pi-arrow-up-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </article>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    titulo: { type: String, required: true },
    etiqueta: { type: String, default: '' },
    texto: { type: String, default: '' },
    precio: { type: String, default: '' },
    imagen: { type: String, default: '' },
    enlace: { type: String, default: '#' },
    destacado: { type: Boolean, default: false }
})

const imagenRota = ref(false)
</script>

<style scoped>
.producto {
    display: flex;
    flex-direction: column;
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

.producto:hover {
    transform: translateY(-2px);
    border-color: rgba(255, 153, 0, 0.35);
}

/* Las fotos de producto suelen venir con fondo blanco: se presentan sobre
   un panel claro dentro del cristal y el blanco se funde con multiply */
.producto-imagen {
    position: relative;
    aspect-ratio: 4 / 3;
    margin: 8px 8px 0;
    overflow: hidden;

    border-radius: calc(var(--r-card) - 8px);
    background: #f4f1ea;
}

.producto-imagen img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 9%;
    mix-blend-mode: multiply;

    transition: transform var(--base) var(--ease);
}

.producto:hover .producto-imagen img {
    transform: scale(1.03);
}

.sin-imagen {
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 8px;
    height: 100%;

    background: rgba(255, 255, 255, 0.04);
    color: var(--muted);
    font-size: 13px;
}

.producto-imagen:has(.sin-imagen) {
    background: rgba(255, 255, 255, 0.03);
}

.sin-imagen .pi {
    font-size: 24px;
}

.badge {
    position: absolute;
    top: 10px;
    left: 10px;

    padding: 5px 10px;
    border-radius: var(--r-pill);

    background: rgba(11, 10, 9, 0.55);
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    backdrop-filter: blur(12px) saturate(160%);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: var(--cream);
    font-size: 12px;
    font-weight: 500;
}

.producto-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 18px 22px 22px;
}

.producto-etiqueta {
    color: var(--muted);
    font-size: 13px;
}

.producto-info h3 {
    margin: 4px 0 0;

    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.2;
    text-wrap: balance;
}

.producto-texto {
    margin: 8px 0 0;
    color: var(--cream-dim);
    font-size: 15px;
    line-height: 1.45;
    text-wrap: pretty;
}

.producto-pie {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-top: auto;
    padding-top: 20px;
}

.precio {
    font-size: 17px;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
}

.producto-pie .btn-ghost {
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

.producto:hover .amazon-link,
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
</style>
