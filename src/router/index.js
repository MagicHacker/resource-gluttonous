import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/images',
        name: 'Images',
        component: () => import('../views/images.vue')
      },
      {
        path: '/audios',
        name: 'Audios',
        component: () => import('../views/audios.vue')
      },
      {
        path: '/lotties',
        name: 'Lotties',
        component: () => import('../views/lotties.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
