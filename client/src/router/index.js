import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/SignUp.vue'
import Signin from '../components/SignIn.vue'
import DashboardView from '../views/DashboardView.vue'
import RetailerView from '../views/RetailerView.vue'
import Manufacturer from '../views/ManufacturerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.baseURL),
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
