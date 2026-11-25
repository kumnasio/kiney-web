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
/* Pestaña que cuelga del borde superior: parece una muesca recortada en el marco del hero */
.menu {
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1000;

    width: min(680px, 100% - 2 * var(--gutter));
    transform: translateX(-50%);

    padding-top: var(--gutter);

    background-color: var(--canvas);
    border-radius: 0 0 22px 22px;
}

/* Curvas invertidas en las esquinas de arriba, como en la referencia */
.menu::before,
.menu::after {
    content: "";
    position: absolute;
    top: var(--gutter);
    width: 22px;
    height: 22px;
    pointer-events: none;
}

.menu::before {
    right: 100%;
    background: radial-gradient(circle at 0 100%, transparent 21.5px, var(--canvas) 22px);
}

.menu::after {
    left: 100%;
    background: radial-gradient(circle at 100% 100%, transparent 21.5px, var(--canvas) 22px);
}

.menu-list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    list-style: none;

    min-height: 56px;

    margin: 0;
    padding: 0 10px 0 12px;
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

    color: var(--cream-dim);
    font-size: 14px;
    letter-spacing: -0.016em;

    border-radius: var(--r-pill);

    transition:
        background-color var(--fast) var(--ease),
        color var(--fast) var(--ease);
}

.menu-link:hover {
    color: var(--cream);
    background-color: var(--surface-raised);
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
