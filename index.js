import FContent from './layout/Content.vue'
import FHeader from './layout/Header.vue'
import FNavbar from './layout/Navbar.vue'
import FFooter from './layout/Footer.vue'

import FLink from './components/Link.vue'
import FButton from './components/Button.vue'
import FPagination from './components/Pagination.vue'

import FLoading from './components/Loading.vue'

import FList from './components/List.vue'

export default {
  install(Vue, options) {

    Vue.component(FContent)
    Vue.component(FHeader)
    Vue.component(FNavbar)
    Vue.component(FFooter)

    Vue.component(FLink)
    Vue.component(FButton)
    Vue.component(FPagination)

    Vue.component(FLoading)

    Vue.component(FList)

  }
}

export {
  FContent,
  FHeader,
  FNavbar,
  FFooter,

  FLink,
  FButton,
  FPagination,

  FLoading,

  FList
}
