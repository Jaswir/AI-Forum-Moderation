import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RepositoriesView from '../views/RepositoriesView.vue'
import IndexView from '../views/IndexView.vue'
import ManagerView from '../views/ManagerView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/repositories',
        name: 'Repositories',
        component: RepositoriesView,
    },
    {
        path: '/index',
        name: 'Index',
        component: IndexView,
    },
    {
        path: '/manager',
        name: 'Manager',
        component: ManagerView,
    },
    {
        path: '/help',
        name: 'HelpView',
        component: HelpView,
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
