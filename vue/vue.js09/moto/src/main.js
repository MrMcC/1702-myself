// 引入babel-polyfill解决为Babel 默认只转换新的 JavaScript 语法，而不转换新的 API的问题,不需要引入babel-runtime
// npm install --save babel-polyfill
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

// 引入 router
import router from './router'

// 引入fastclick-》解决300ms延迟的问题
import fastclick from 'fastclick'
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

// 引入vuex
import store from './store'

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// rem初始化
import './common/reset'
// 全局引入样式
import './common/style/index.less'

// 饿了么图片懒加载
import {Lazyload} from 'mint-ui'
Vue.use(Lazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
