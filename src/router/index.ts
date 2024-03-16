import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import DemoView from '../views/DemoView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: PricingView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/demo',
        name: 'Demo',
        component: DemoView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
