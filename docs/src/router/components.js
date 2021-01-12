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
  }
]
