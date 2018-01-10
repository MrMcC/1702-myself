// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入vue-resource
//  import Resource from 'vue-resource'
 // 使用vue-resourece
 // Vue.use(Resource)

// 引入axios
import axios from 'axios'
// 使用axios 将axios添加到vue的原型中
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
