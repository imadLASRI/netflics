import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mylist',
      name: 'mylist',
      // lazy-loaded when the route is visited.
      component: () => import('../views/MyListView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movieDetails',
      component: () => import('../components/ItemDetails.vue')
    }
  ]
})

export default router
