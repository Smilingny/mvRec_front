import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import en from 'element-plus/dist/locale/en.mjs'

const app = createApp(App)
app.use(ElementPlus, {

    locale: en
})
app.use(ElementPlus)
app.use(store).use(router).mount('#app')
