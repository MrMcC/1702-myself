import Vue from 'vue'
import Router from 'vue-router'

// 主页
import Home from 'pages/Home/Home'
import Category from 'pages/Category/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/category',
      component: Category
    }
  ]
})
