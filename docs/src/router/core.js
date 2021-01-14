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
    path: '/sass-variables',
    name: 'SassVariables',
    components: {
      default: () => import(/* webpackChunkName: "page-sassVariables" */ '@/views/pages/Sass-variables.vue'),
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
    path: '/app.vue',
    name: 'App',
    components: {
      default: () => import(/* webpackChunkName: "page-app" */ '@/views/pages/App.vue'),
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
      default: () => import(/* webpackChunkName: "page-router" */ '@/views/pages/Router.vue'),
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
