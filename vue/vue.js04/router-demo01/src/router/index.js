/**
 * Created by miaoce on 17/7/13.
 */
//引入vue 引入vue-router
import Vue from 'vue'
import  Router from 'vue-router'

//自定义个组件名  文件名 (文件名.vue省略)
import Home12 from '../components/Home'
import Cart from '../components/Cart'
import Mine from '../components/Mine'

import userDetail from '../components/userDetail'
import page404 from '../components/404'

import News from '../components/news/news'
import Hot from '../components/news/Hot'
import Import from '../components/news/Import'

//使用vue-router
Vue.use(Router)

//实例化Router
export default new Router({
    routes:[
        {
            path: '/',
            component: Home12
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/mine',
            component: Mine
        },
        //新闻
        {
            path: '/news',
            redirect: '/news/Hot',
            component: News,
            children:[
                {
                    path: 'hot',
                    component: Hot
                },
                {
                    path: 'import',
                    component: Import
                }
            ]
        },
        //跳转页
        {
            path:'/userDetail/:id',
            component: userDetail
        },
        //404页
        {
            path:'*',
            component: page404
        }
    ]
})