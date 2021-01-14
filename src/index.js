import merge from 'lodash/merge'

import FContent from './layout/Content.vue'
import FHeader from './layout/Header.vue'
import FNavbar from './layout/Navbar.vue'
import FFooter from './layout/Footer.vue'

import FLink from './components/Link.vue'
import FButton from './components/Button.vue'
import FPagination from './components/Pagination.vue'
import FCode from './components/Code.vue'
import FAlert from './components/Alert.vue'

import FLoading from './components/Loading.vue'

import FFormSelect from './components/form/Select.vue'

import FTab from './components/Tab.vue'
import FTabs from './components/Tabs.vue'

import FList from './components/List.vue'

export default {
  install(Vue, app_options) {

    // Set options
    const def_options = {
      navbar: {},
      header: {},
      sidebar: {
        follow: true
      },
      footer: {
        class: 'py-5'
      }
    }
    const options = merge(def_options, app_options)
    Vue.prototype.$fj = options

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
  FCode,
  FAlert,

  FLoading,

  FFormSelect,

  FTab,
  FTabs,

  FList
}
