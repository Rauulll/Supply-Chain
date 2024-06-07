import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import store from './store' // Import the store module

const app = createApp(App)

app.use(router)
app.use(store) // Use the store module

app.mount('#app')
