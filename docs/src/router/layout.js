module.exports = [
  {
    path: '/layout/header',
    name: 'LayoutHeader',
    components: {
      default: () => import(/* webpackChunkName: "page-index" */ '@/views/pages/Index.vue')
    },
    meta: {
      title: "Header",
      navbar: {
        class: "py-5"
      }
    }
  }
]
