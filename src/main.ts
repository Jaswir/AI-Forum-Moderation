import { createApp } from 'vue'
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
.use(router)
.mount('#app')
