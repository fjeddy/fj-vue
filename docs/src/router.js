import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/Index.vue'),
      header: () => import(/* webpackChunkName: "header-whatever" */ '@/views/headers/Index.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Welcome",
      navbar: {
        class: "py-5"
      }
    }
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
