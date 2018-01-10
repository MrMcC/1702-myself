// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入vue
import Vuex from 'vuex'
//在vue里使用(安装)vuex
Vue.use(Vuex)
//实例化Vuex
const store = new Vuex.Store({
    //声明状态
    state:{
        //所有商品的总数
        total: 0
    },
    //行为,异步操作
    actions: {
      //增加数量,context->就是传过来的store
        increase(context,price){
          //执行异步操作
            setTimeout(()=>{
              //第一个参数放的是mutations操作的方法
                context.commit('INCREASE',price)
            },100)
        },
        //减少数量
        decrease(context,price){
          setTimeout(()=>{
            context.commit('DECREASE',price)
          },100)
        }
    },
    //操作状态必须在这里执行->同步
    mutations: {
      //mutations里的方法用大写 state->状态
      INCREASE(state,price){
        state.total+=price
      },
      DECREASE(state,price){
        state.total-=price
      }
    }

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    //在vue实例中添加store
  store,
  template: '<App/>',
  components: { App }
})
