import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home'
import Market from '../pages/market/market'
import shopCar from '../pages/shopCar/shopCar'
import Mine from '../pages/mine/mine'
import page404 from '../pages/404/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/market',
      component: Market
    },
    {
      path: '/shopCar',
      component: shopCar
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '*',
      component: page404
    }
  ]
})
