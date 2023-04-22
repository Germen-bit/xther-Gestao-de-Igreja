import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store'
import axios from 'axios'
import { API_URL } from './config/config'

axios.defaults.baseURL = API_URL

axios.interceptors.request.use(config => {
    const authToken = localStorage.getItem('token')
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }
    return config
  })

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
