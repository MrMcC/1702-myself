import Vue from 'vue'
import Router from 'vue-router'

// 页面
import Home from 'pages/Home/Home'
import Category from 'pages/Category/Category'
import Cart from 'pages/Cart/Cart'
import Mine from 'pages/Mine/Mine'
import Login from 'pages/Login/Login'
import Site from 'pages/Site/Site'
import AddSite from 'pages/Add-site/Add-site'

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
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/site',
      component: Site
    },
    {
      path: '/addsite',
      component: AddSite
    }
  ]
})
