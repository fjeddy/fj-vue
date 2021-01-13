module.exports = [
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
      }
    }
  },

  {
    path: '/app.vue',
    name: 'App',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/App.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "App",
      navbar: {
        class: "py-5"
      }
    }
  },

  {
    path: '/router.js',
    name: 'Router',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/Router.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Router",
      navbar: {
        class: "py-5"
      }
    }
  }
]
