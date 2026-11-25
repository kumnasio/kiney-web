<template>
    <nav class="menu" aria-label="Principal">
        <ul class="menu-list">
            <li>
                <RouterLink :to="{ path: '/', hash: '#inicio' }" class="logo-link" aria-label="kiney, ir al inicio">
                    <img
                        class="logo"
                        src="../assets/kiney-logo.jpg"
                        alt=""
                        width="34"
                        height="34"
                    >
                </RouterLink>
            </li>

            <li v-for="item in menuItems" :key="item.name" :class="{ 'solo-escritorio': item.soloEscritorio }">
                <RouterLink
                    :to="item.to"
                    class="menu-link"
                    :class="{ activo: item.pagina && route.path === item.to }"
                    :aria-current="item.pagina && route.path === item.to ? 'page' : undefined"
                >
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Secciones de la portada (hash) y páginas aparte (pagina: true)
const menuItems = [
    { name: 'Vídeos', to: { path: '/', hash: '#contenido' } },
    { name: 'Mi setup', to: { path: '/', hash: '#setup' } },
    { name: 'Recomendaciones', to: '/recomendaciones', pagina: true },
    { name: 'Comunidad', to: { path: '/', hash: '#comunidad' }, soloEscritorio: true },
    { name: 'Contacto', to: { path: '/', hash: '#contacto' } }
]
</script>

<style scoped>
/* Cápsula de cristal flotante, centrada arriba (Liquid Glass) */
.menu {
    position: fixed;
    top: calc(var(--gutter) + 12px + env(safe-area-inset-top, 0px));
    left: 50%;
    z-index: 1000;

    width: min(720px, 100% - 2 * var(--gutter) - 16px);
    transform: translateX(-50%);

    border-radius: var(--r-pill);
    border: 1px solid var(--glass-edge);
    background: var(--glass-fill);
    -webkit-backdrop-filter: blur(24px) saturate(190%);
    backdrop-filter: blur(24px) saturate(190%);
    box-shadow: var(--glass-shadow);
}

/* Brillo especular en el borde superior */
.menu::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: radial-gradient(120% 140% at 50% -40%, rgba(255, 255, 255, 0.22), transparent 55%);
}

.menu-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;

    min-height: 52px;

    margin: 0;
    padding: 0 8px 0 9px;
}

.menu-list li {
    display: flex;
    align-items: center;
}

.logo-link {
    display: block;
    border-radius: 50%;
}

.logo {
    height: 34px;
    width: 34px;

    object-fit: cover;

    border-radius: 50%;
}

.menu-link {
    position: relative;
    display: inline-block;
    padding: 8px clamp(8px, 1.6vw, 18px);

    color: var(--cream-dim);
    font-size: 14px;
    letter-spacing: -0.016em;

    transition: color var(--base) var(--ease);
}

/* Subrayado que se dibuja de izquierda a derecha y se recoge hacia la derecha */
.menu-link::after {
    content: "";
    position: absolute;
    left: clamp(8px, 1.6vw, 18px);
    right: clamp(8px, 1.6vw, 18px);
    bottom: 4px;

    height: 1.5px;
    border-radius: 2px;

    background: linear-gradient(90deg, rgba(239, 232, 218, 0.4), var(--cream) 50%, rgba(239, 232, 218, 0.4));
    box-shadow: 0 0 8px rgba(239, 232, 218, 0.45);

    transform: scaleX(0);
    transform-origin: right center;
    transition: transform 420ms var(--ease);
}

.menu-link:hover,
.menu-link:focus-visible {
    color: var(--cream);
    text-decoration: none;
}

.menu-link.activo {
    color: var(--cream);
}

.menu-link:hover::after,
.menu-link:focus-visible::after,
.menu-link.activo::after {
    transform: scaleX(1);
    transform-origin: left center;
}

@media (max-width: 480px) {
    .menu-list {
        min-height: 52px;
        padding: 0 6px 0 8px;
    }

    .logo {
        height: 30px;
        width: 30px;
    }

    .menu-link {
        padding: 8px 6px;
        font-size: 12.5px;
    }

    .menu-link::after {
        left: 6px;
        right: 6px;
    }

    .solo-escritorio {
        display: none !important;
    }
}
</style>
