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
    path: '/app',
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
  }
]
