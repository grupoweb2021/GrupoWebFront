import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createpublication',
    name: 'createpublication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/createpublication')
  },
  {
    path: '/generalview',
    name: 'generalview',
    component:()=>import ('../components/GeneralView')
  },
  {
    path: '/editPublication',
    name: 'editPublication',
    component:()=>import ('../components/editPublication')
  },
  {
    path: '/main',
    name: 'Main',
    component:()=>import ('../views/Main')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
