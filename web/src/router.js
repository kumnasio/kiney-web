import { createRouter, createWebHistory } from 'vue-router'
import InicioView from './views/InicioView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'inicio',
            component: InicioView,
            meta: { title: 'kiney · setups, tecnología y proyectos' }
        },
        {
            path: '/recomendaciones',
            name: 'recomendaciones',
            component: () => import('./views/RecomendacionesView.vue'),
            meta: { title: 'Recomendaciones · kiney' }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ],

    // Enlaces tipo /#setup: baja a la sección (dejando sitio para el navbar)
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, top: 112, behavior: 'smooth' }
        if (to.path === from.path) return false
        return { top: 0 }
    }
})

router.afterEach((to) => {
    if (to.meta.title) document.title = to.meta.title
})

export default router
