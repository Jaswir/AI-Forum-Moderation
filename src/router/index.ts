import { createRouter, createWebHistory } from 'vue-router'
import SymptomSubmissionView from '../views/SymptomSubmissionView.vue'
import IncomingPatientsView from '../views/IncomingPatientsView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'SymptomSubmissionView',
        component: SymptomSubmissionView,
    },
    {
        path: '/incoming-patients',
        name: 'IncomingPatientsView',
        component: IncomingPatientsView,
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
