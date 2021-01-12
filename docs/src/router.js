import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import core from '@/router/core'
import components from '@/router/components'
import layout from '@/router/layout'

const routes = [
  ...core,
  ...components,
  ...layout,

  {
    path: '*',
    name: '404',
    component: () => import('@/views/pages/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title + ' - Framework'
  else document.title = to.name + ' - Framework'
  next()
})

export default router
