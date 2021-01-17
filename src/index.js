import merge from 'lodash/merge'

import Axios from './axios'
import DayJS from './dayjs'

import FIcon from './components/Icon'

import FContent from './layout/Content'
import FHeader from './layout/Header'
import FNavbar from './layout/Navbar'
import FFooter from './layout/Footer'

import FLink from './components/Link'
import FButton from './components/Button'
import FPagination from './components/Pagination'
import FCode from './components/Code'
import FAlert from './components/Alert'

import FLoading from './components/Loading'

import FFormSelect from './components/form/Select'

import FTab from './components/Tab'
import FTabs from './components/Tabs'
import FMarkdown from './components/Markdown'

import FList from './components/List'

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
