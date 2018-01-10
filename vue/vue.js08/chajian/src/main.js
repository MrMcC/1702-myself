import Vue from 'vue'
import App from './App'
// import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)
//
// // or with options
// Vue.use(VueLazyload, {
//     preLoad: 1.3,
//     error: 'assets/error.png',
//     loading: 'assets/loading.gif',
//     attempt: 1
// })
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
