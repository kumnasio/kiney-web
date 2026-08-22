<template>
    <nav class="menu">
        <ul class="menu-list">
            <li>
                <img
                    class="logo"
                    src="../assets/kiney-logo.jpg"
                    alt="Logo"
                >
            </li>

            <li v-for="item in menuItems" :key="item.name">
                <a :href="item.path">
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
                {
                    name: 'Contenido',
                    path: '/contenido'
                },
                {
                    name: 'Mi setup',
                    path: '/mi-setup'
                },
                {
                    name: 'Comunidad',
                    path: '/comunidad'
                },
                {
                    name: 'Contacto',
                    path: '/contacto'
                }
            ]
        }
    }
}
</script>

<style scoped>
.menu {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

    z-index: 1000;

    background-color: rgba(255, 255, 255, 0.5);
    border: 1px solid white;
    border-radius: 20rem;
    backdrop-filter: blur(10px);
}

.menu-list {
    display: flex;
    justify-content: center;
    align-items: center;

    list-style: none;

    height: 5vh;
    max-height: 5vh;

    margin: 0;
    padding: 0 8px;
}

.menu-list li {
    display: flex;
    align-items: center;
}

.logo {
    display: block;

    height: 4vh;
    max-height: 4vh;
    width: auto;

    aspect-ratio: 1 / 1;
    object-fit: cover;

    border-radius: 50%;
}

.menu-list li a {
    padding: 10px 20px;

    color: #f5f5f5;
    text-decoration: none;

    border-radius: 20px;

    transition:
        background-color 0.25s ease,
        color 0.25s ease;
}

.menu-list li a:hover {
    background-color: #b7b7b766;
}

</style>