module.exports = [
  {
    path: '/list',
    name: 'List',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/List.vue'),
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
