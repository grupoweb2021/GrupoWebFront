import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import SignIn from "@/components/SignIn";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/home',
    name: 'home',
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
    path: '/myPublications',
    name: 'myPublications',
    component:()=>import ('../components/ViewMyPublications')
  },
  {
    path: '/myPets',
    name: 'myPets',
    component:()=>import ('../components/viewMyPets')
  },
  {
    path: '/allPublications',
    name: 'viewAllPublications',
    component:()=>import ('../components/viewAllPublications')
  },
  {
    path: '/myUserProfile',
    name: 'viewMyUserProfile',
    component:()=>import ('../components/viewMyUserProfile')
  },
  {
    path: '/createAD',
    name: 'CreateAdd-Vet',
    component:()=>import ('../components/createAd')
  },
  {
    path: '/discountedAdds',
    name: 'discountedAdd',
    component:()=>import ('../components/viewAddswithDiscount')
  },
  {
    path: '/myAds',
    name: 'myAds',
    component:()=>import ('../components/viewMyAds')
  },
  {
    path: '/myNotifications',
    name: 'myNotifications',
    component:()=>import ('../components/viewNotifications')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
