module.exports = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/Index.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Welcome"
    }
  },

  {
    path: '/getting-started',
    name: 'GettingStarted',
    components: {
      default: () => import(/* webpackChunkName: "page-gettingStarted" */ '@/views/pages/Getting-started.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Getting started"
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
      title: "App"
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
      title: "App"
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
      title: "Router"
    }
  }
]
