import merge from 'lodash/merge'

import Axios from './axios'
import DayJS from './dayjs'

import FIcon from './components/Icon.vue'

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
import FMarkdown from './components/Markdown.vue'

import FList from './components/List.vue'

export default {
  install(Vue, app_options) {

    // Set options
    const def_options = {
      options: {
        navbar: {},
        header: {},
        sidebar: {
          follow: true
        },
        footer: {
          class: 'py-5'
        },
        codeBlock: {
          forceExpandOnLine: 12
        }
      },
      language: {
        apiError: "Got an error while loading data from the API :(",
        apiFailed: "We've failed in any attempt made to process this list... We suck :(",
        listViewing: "Viewing %limit of %total items",
        pagination: {
          previous: "Previous",
          next: "Next"
        }
      }
    }
    const options = merge(def_options, app_options)

    Vue.prototype.$fj = options
    Vue.prototype.$axios = Axios
    Vue.prototype.$dayjs = DayJS

  }
}

export {
  FIcon,

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
  FMarkdown,

  FList
}
