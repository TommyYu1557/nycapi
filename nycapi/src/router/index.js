import { createRouter, createWebHistory } from 'vue-router'
import ApiData from '../views/ApiData.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ApiData',
      component: ApiData
    },
    {
      path: '/ApiData',
      name: 'ApiData',
      component: () => import('../views/ApiData.vue')
    },

    {
      path: '/pieView',
      name: 'pieView',
      component: () => import('../views/pieView.vue')
    },
    {
      path: '/barView',
      name: 'barView',
      component: () => import('../views/barView.vue')
    }
  ]
})

export default router