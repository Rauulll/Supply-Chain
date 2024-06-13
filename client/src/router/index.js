import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../components/SignUp.vue'
import Signin from '../components/SignIn.vue'
import DashboardView from '../views/DashboardView.vue'
import RetailerView from '../views/RetailerView.vue'
import Manufacturer from '../views/ManufacturerView.vue'
import Products from '../views/Products.vue'
import store from '../store'
import ErrorPage from '../components/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.baseURL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter (to, from, next) {
        if (store.state.user.role !== 'Admin') {
          next('/error')
        } else {
          next()
        }
      }
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
      component: RetailerView,
      beforeEnter (to, from, next) {
        if (store.state.user.role !== 'Admin' && store.state.user.role !== 'retailer') {
          next('/error')
        } else {
          next()
        }
      }
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '/manufacturer',
      name: 'manufacturer',
      component: Manufacturer,
      beforeEnter (to, from, next) {
        if (store.state.user.role !== 'Manufacturer') {
          next('/error')
        } else {
          next()
        }
      }
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      beforeEnter (to, from, next) {
        if (store.state.user.role !== 'Manufacturer' && store.state.user.role !== 'Admin') {
          next('/error')
        } else {
          next()
        }
      }
    }
  ]
})

export default router
