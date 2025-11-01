import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'

// --- Tambahan Font Awesome ---
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faAnglesUp, faDollarSign, faSmile } from '@fortawesome/free-solid-svg-icons'

// Masukkan ikon ke library
library.add(faFacebook, faInstagram, faTiktok, faAnglesUp, faDollarSign, faSmile)


// --- Buat dan pasang app ---
createApp(App)
  .use(router)
  .use(MotionPlugin)
  .component('FontAwesomeIcon', FontAwesomeIcon) // daftar komponen FontAwesome
  .mount('#app')
