import Vue from 'vue'
import FJVue, { FCode, FTab, FTabs, FAlert, FIcon } from 'fj-vue'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = true

Vue.use(FJVue, {
  options: {
    navbar: {
      class: 'py-5'
    },
    header: {},
    sidebar: {},
    footer: {}
  }
})

Vue.component('f-code', FCode)
Vue.component('f-tab', FTab)
Vue.component('f-tabs', FTabs)
Vue.component('f-alert', FAlert)
Vue.component('f-icon', FIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
