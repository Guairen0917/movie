import Vue from 'vue'
import VueRouter from 'vue-router'

import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import detailRouter from './detail'

Vue.use(VueRouter)

const routes = [
  // 系统自带两种路由写法
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  movieRouter,
  cinemaRouter,
  mineRouter,
  detailRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
