import Vue from 'vue'
import { FCode, FTabs, FAlert } from 'fj-vue'

import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

Vue.component('f-code', FCode)
Vue.component('f-tabs', FTabs)
Vue.component('f-alert', FAlert)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
