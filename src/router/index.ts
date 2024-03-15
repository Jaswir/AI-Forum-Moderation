import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
=======
import SymptomSubmissionView from '../views/SymptomSubmissionView.vue'
import IncomingPatientsView from '../views/IncomingPatientsView.vue'

>>>>>>> a5b07a0e83c2f205d771093942f9796a446dba20

const routes = [
    {
        path: '/',
<<<<<<< HEAD
        name: 'Home',
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
    }
=======
        name: 'SymptomSubmissionView',
        component: SymptomSubmissionView,
    },
    {
        path: '/incoming-patients',
        name: 'IncomingPatientsView',
        component: IncomingPatientsView,
    },
>>>>>>> a5b07a0e83c2f205d771093942f9796a446dba20
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
