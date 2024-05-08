import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/Signup.vue'
import Signin from '../components/Signin.vue'
import DashboardView from '../views/DashboardView.vue'
import RetailerView from '../views/RetailerView.vue'
import Manufacturer from '../views/ManufacturerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/retailer',
      name: 'retailer',
      component: RetailerView
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: Manufacturer
    }
  ]
})

export default router
