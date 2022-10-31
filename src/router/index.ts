import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:"login" */ '@/views/login/index.vue')
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName:"error" */ '@/views/error/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName:'home' */ '@/views/home/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName:"user" */ '@/views/user/index.vue')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName:"advert" */ '@/views/advert/index.vue')
      },
      {
        path: '/advert-Space',
        name: 'advert-Space',
        component: () => import(/* webpackChunkName:"advertSpace" */ '@/views/advertSpace/index.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName:"course" */ '@/views/course/index.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName:"menu" */ '@/views/menu/index.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName:"role" */ '@/views/role/index.vue')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName:"resource" */ '@/views/resource/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
