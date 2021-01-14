module.exports = [
  {
    path: '/component/list',
    name: 'List',
    components: {
      default: () => import(/* webpackChunkName: "page-component-list" */ '@/views/pages/component/List.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "List"
    }
  },

  {
    path: '/component/code',
    name: 'Code',
    components: {
      default: () => import(/* webpackChunkName: "page-component-code" */ '@/views/pages/component/Code.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Code"
    }
  },

  {
    path: '/component/tabs',
    name: 'Tabs',
    components: {
      default: () => import(/* webpackChunkName: "page-component-tabs" */ '@/views/pages/component/Tabs.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Tabs"
    }
  },

  {
    path: '/component/alert',
    name: 'Alert',
    components: {
      default: () => import(/* webpackChunkName: "page-component-alert" */ '@/views/pages/component/Alert.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Alert"
    }
  }
]
