import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/layouts/style.scss'
import vWow from 'v-wow'
import './assets/js/main.min.js'


createApp(App).use(vWow).use(router).mount('#app')


