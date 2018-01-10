import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from 'pages/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
