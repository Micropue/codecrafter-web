import 'sober'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/main.css'
import '@/assets/sober-theme.css'
import store from './store/store'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
document.addEventListener('gesturestart',e=>e.preventDefault())