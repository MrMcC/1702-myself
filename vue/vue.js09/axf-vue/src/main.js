// 引入babel-polyfill解决为Babel 默认只转换新的 JavaScript 语法，而不转换新的 API的问题,不需要引入babel-runtime
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick-》解决300ms延迟的问题
import fastclick from 'fastclick'
// vuex
import store from './store'
// 引入mint ui
import {Lazyload} from 'mint-ui'
// 图片懒加载
Vue.use(Lazyload)

// rem初始化
import 'common/reset'

// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

import 'common/styles/index.less'

// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)
Vue.config.productionTip = false

// 导航钩子控制tabBar的显示隐藏
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/category' || to.path === '/cart' || to.path === '/mine') {
    store.state.tabBarShow = true
  } else {
    store.state.tabBarShow = false
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
