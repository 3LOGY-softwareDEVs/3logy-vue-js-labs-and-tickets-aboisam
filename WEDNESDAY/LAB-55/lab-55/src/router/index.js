import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'

// Temporary state (we'll use Pinia for this tomorrow)
export const globalState = { isAuthenticated: false }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'home',
      component: HomeView 
    },
    { 
      path: '/login', 
      name: 'login',
      component: LoginView 
    },
    { 
      path: '/admin', 
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !globalState.isAuthenticated) {
    alert("Stop! You must log in first.")
    return { path: '/login' }
  }
})

export default router
