import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '@/views/RecipeView.vue'
import RecipeDetailView from '@/views/RecipeDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipeView,
    },
    {
      path: '/recipes/:slug',
      name: 'recipe',
      component: RecipeDetailView,
    },
  ],
})

export default router
