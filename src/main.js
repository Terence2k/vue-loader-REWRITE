

import { createApp } from '../modules/vue'

import App from './App.vue'

const app = createApp(App)
console.log('mainjs:', app)
app.mount('#app')