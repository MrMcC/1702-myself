/**
 * Created by miaoce on 17/7/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios'
Vue.use(Vuex)
// 相当于组件中的data
const state = {
  // 购物车
  /*
   {
   // 这个商品在商品列表中的id
   "shop_id": 1,
   // 这个商品在购物车中的id
   "id": 1,
   "title": "得确指",
   "price": 164.86,
   "num": 1
   }
   */
  cart: []
}
// 相当于组件中的计算属性 (计算属性中不能写异步代码)
const getters = {
  // cart () {
  //   http.get('http://localhost:8081/cart')
  //     .then(function (data) {
  //
  //     })
  // }
  // 总数量
  totalNum (state) {
    let result = 0
    for (var i = 0; i < state.cart.length; i++) {
      result += state.cart[i].num
    }
    return result
  },
  // 总价格
  totalPrice () {
    let result = 0
    for (var i = 0; i < state.cart.length; i++) {
      result += (state.cart[i].num * state.cart[i].price)
    }
    return result
  }
}
const actions = {
  // 用于初始化的时候从数据库获取数据
  getCart ({commit}) {
    http.get('http://localhost:8081/cart')
      .then(function (data) {
        commit('GET_CART', data.data)
        // console.log(data.data)
      })
  },
  addCart ({commit}, item) {
    // console.log(context)
    // console.log(context.commit('ADD_CART'))
    // 判断下我的json-server数据中是否存在了当前点击项
    http.get('http://localhost:8081/cart?shop_id=' + item.shop_id)
      .then(function (data) {
        if (data.data.length > 0) {
          // 如果购物车中存在了,就给他数量++,更改用put
          // console.log(data.data)
          let obj = data.data[0]
          let newObj = {
            shop_id: obj.shop_id,
            title: obj.title,
            price: obj.price,
            num: ++obj.num
          }
          // 每次都是更新id,你写obj.shop_id也是更新id
          http.put('http://localhost:8081/cart/' + obj.id, newObj)
            .then(function (data) {
              // 调用mutations下的addcart方法,同时将修改后的数据传给mutations
              commit('ADD_CART', data.data)
              // console.log(data.data)
            })
        } else {
          // 购物车中不存在,就添加到购物车中
          let obj = {
            shop_id: item.shop_id,
            title: item.title,
            price: item.price,
            num: 1
          }
          // 添加用post
          http.post('http://localhost:8081/cart', obj)
            .then(function (data) {
              commit('ADD_CART', data.data)
            })
        }
      })
  },
  decrease ({commit}, item) {
    // 让数据库中的数量减少
    let obj = {
      shop_id: item.shop_id,
      title: item.title,
      price: item.price,
      num: --item.num
    }
    http.put('http://localhost:8081/cart/' + item.id, obj)
      .then(function (data) {
        // console.log(data.data)
        commit('DECREASE', data.data)
      })
  },
  increase ({commit}, item) {
    // 让数据库中的数量增加
    let obj = {
      shop_id: item.shop_id,
      title: item.title,
      price: item.price,
      num: ++item.num
    }
    http.put('http://localhost:8081/cart/' + item.id, obj)
      .then(function (data) {
        // console.log(data.data)
        commit('INCREASE', data.data)
      })
  },
  del ({commit}, item) {
    http.delete('http://localhost:8081/cart/' + item.id)
      .then(function () {
        // console.log(data.data)
        commit('DEL', item)
      })
  }
}
const mutations = {
  GET_CART (state, arr) {
    state.cart = arr
  },
  ADD_CART (state, obj) {
    // 更改state
    if (obj.num > 1) {
      // 修改
      // 这样写找不到,因为state.cart没有更新
      // console.log(state.cart.indexOf(obj))
      // console.log(obj)
      // console.log(state.cart)
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i].shop_id === obj.shop_id) {
          state.cart[i].num++
        }
      }
    } else {
      // 添加
      state.cart.push(obj)
    }
  },
  DECREASE (state, obj) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === obj.shop_id) {
        state.cart[i].num = obj.num
      }
    }
  },
  INCREASE (state, obj) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === obj.shop_id) {
        state.cart[i].num = obj.num
      }
    }
  },
  DEL (state, obj) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].shop_id === obj.shop_id) {
        state.cart.splice(i, 1)
      }
    }
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
