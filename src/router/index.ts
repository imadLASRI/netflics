import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      component: () => import('../views/DetailsView.vue')
    }
  ]
})

export default router
