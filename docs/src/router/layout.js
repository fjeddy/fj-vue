module.exports = [
  {
    path: '/layout/header',
    name: 'LayoutHeader',
    components: {
      default: () => import(/* webpackChunkName: "page-layout-header" */ '@/views/pages/layout/Header.vue'),
      header: () => import(/* webpackChunkName: "header-example" */ '@/views/headers/Example.vue'),
      sidebar: () => import(/* webpackChunkName: "sidebar-navigation" */ '@/views/sidebars/Navigation.vue')
    },
    meta: {
      title: "Layout w/Header",
      navbar: {
        class: "py-5"
      }
    }
  },

  {
    path: '/layout/no-sidebar',
    name: 'LayoutNoSidebar',
    components: {
      default: () => import(/* webpackChunkName: "page-layout-noSidebar" */ '@/views/pages/layout/NoSidebar.vue')
    },
    meta: {
      title: "Layout w/No sidebar",
      navbar: {
        class: "py-5"
      }
    }
  }
]
