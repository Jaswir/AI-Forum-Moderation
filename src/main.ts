import { createApp } from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import router from './router'

//Quasar
import {
    Quasar,
    Notify,
} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

createApp(App)
.use(Quasar, {
    plugins: {
        Notify
    },
    config: {
        notify:{}
    }
})
=======
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
>>>>>>> a5b07a0e83c2f205d771093942f9796a446dba20
.use(router)
.mount('#app')
