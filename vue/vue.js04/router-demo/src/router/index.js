/**
 * Created by miaoce on 17/7/13.
 */
//引入vue
import Vue from 'vue'
//1引入vue-router
import  Router from 'vue-router'

//引入Home组件->components是在webpack.base页面配置了别名
import Home from 'components/Home'

import Cart from 'components/Cart'

import Mine from 'components/Mine'

import userDetail from 'components/userDetail'

// 网易新闻页
import News from 'components/news/News'
// 头条
import Hot from 'components/news/Hot'
// 要闻
import Important from 'components/news/Important'
//找不到页面
import page404 from 'components/404'

//2使用vue-router
Vue.use(Router)

//3实例化Router这个类并导出
export  default new Router({
    //路由的 history 模式
    mode: 'history',
    //6配置,做映射,什么样的地址,跳转到什么样的页面
    routes:[
        {
            //路径->/根目录
            path:'/',
            //重定向 默认只要是跳转到/就会变到new页
            // redirect: '/news',
            //跳转的页面(组件)
            component: Home
        },
        {
            path:'/cart',
            component: Cart
        },
        {
            path:'/mine',
            component: Mine
        },
        {
            path:'/userDetail/:id',
            component: userDetail
        },
        {
            // 网易新闻也
            path: '/news',
            //默认跳转,设置默认的二级路由
            redirect: '/news/hot',
            component: News,
            children: [
                {
                    // /news/hot
                    // 嵌套路由路径不用加/，vue-router会自动拼接
                    path: 'hot',
                    component: Hot
                },
                {
                    // /news/important
                    path: 'important',
                    component: Important
                }
            ]

        },
        {
            path:'*',
            component: page404
        }
    ]
})