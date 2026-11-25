<template>
    <nav class="menu" aria-label="Principal">
        <ul class="menu-list">
            <li>
                <a href="#inicio" class="logo-link" aria-label="kiney, ir al inicio">
                    <img
                        class="logo"
                        src="../assets/kiney-logo.jpg"
                        alt=""
                    >
                </a>
            </li>

            <li v-for="item in menuItems" :key="item.name">
                <a :href="item.path" class="menu-link">
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {
            menuItems: [
                { name: 'Contenido', path: '#contenido' },
                { name: 'Mi setup', path: '#setup' },
                { name: 'Comunidad', path: '#comunidad' },
                { name: 'Contacto', path: '#contacto' }
            ]
        }
    }
}
</script>

<style scoped>
/* Cápsula de cristal flotante, centrada arriba (Liquid Glass) */
.menu {
    position: fixed;
    top: calc(var(--gutter) + 12px);
    left: 50%;
    z-index: 1000;

    width: min(640px, 100% - 2 * var(--gutter) - 16px);
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
    padding: 8px clamp(8px, 1.6vw, 18px);

    color: var(--cream);
    font-size: 14px;
    letter-spacing: -0.016em;

    border-radius: var(--r-pill);

    transition:
        background-color var(--fast) var(--ease),
        color var(--fast) var(--ease);
}

.menu-link:hover {
    color: var(--cream);
    background-color: rgba(255, 255, 255, 0.14);
    text-decoration: none;
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
        padding: 8px 7px;
        font-size: 12.5px;
    }
}
</style>
