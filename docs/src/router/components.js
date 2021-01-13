module.exports = [
  {
    path: '/component/list',
    name: 'List',
    components: {
      default: () => import(/* webpackChunkName: "page-component-list" */ '@/views/pages/component/List.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "List",
      navbar: {
        class: "py-5"
      }
    }
  },

  {
    path: '/component/code',
    name: 'Code',
    components: {
      default: () => import(/* webpackChunkName: "page-component-list" */ '@/views/pages/component/Code.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Code",
      navbar: {
        class: "py-5"
      }
    }
  }
]
