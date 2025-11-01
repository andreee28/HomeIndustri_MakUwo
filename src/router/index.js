import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Produk from '../views/Produk.vue'
import TentangKami from '../views/TentangKami.vue'
import Kontak from '../views/Kontak.vue'
import ProdukDetail from '../views/ProdukDetail.vue'
import SDG from '../views/SDG.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/produk', component: Produk },
  { path: '/tentang-kami', component: TentangKami },
  { path: '/kontak', component: Kontak },
  { path: '/produk/:id', name: 'ProdukDetail', component: ProdukDetail, props: true },
  { path: '/SDG', component: SDG },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})


export default router
