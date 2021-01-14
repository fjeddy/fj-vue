<template>
  <div>

    <section>
      <h1>Router</h1>
      <p>This framework requires the use of vue-router. It has no exceptional
      setup besides a standard vue-router configuration. All you do is define
      meta tags within the routes to configure the route.</p>

      <div class="alert alert-warning">
        <i class="fa-icon gg-info me-1"></i>
        You can setup the router any way you want, are used to and prefer, the
        only important factor is the <code>meta</code> object within each route.
        The way the router is displayed here, is simply just how we prefer it.</div>
    </section>

    <section>
      <f-code :value="codeRouterCoreJS" title="router/core.js" />
    </section>

    <section>
      <f-code :value="codeRouterJS" title="router.js" />
    </section>

    <section>
      <f-code :value="codeMainJS" title="main.js" />
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  name: "PageRouter",

  data: function() {
    return {
      codeRouterCoreJS: `module.exports = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/Index.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Welcome",
      navbar: {
        class: "py-5"
      },
      sidebar: {

      },
      header: {

      },
      footer: {

      }
    }
  },

  {
    path: '/example',
    name: 'ExamplePage',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/App.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue'),
      header: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/headers/MyHeader.vue')
    },
    meta: {
      title: "App",
      navbar: {
        class: "py-5"
      }
    }
  }
]`,
      codeRouterJS: `import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import core from '@/router/core'

const routes = [
  ...core,

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
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title + ' - Framework'
  else document.title = to.name + ' - Framework'
  next()
})

export default router`,
      codeMainJS: `import Vue from 'vue'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')`
    }
  }
}
</script>
