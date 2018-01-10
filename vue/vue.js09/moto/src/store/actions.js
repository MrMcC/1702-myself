import Api from '../api'
import http from 'axios'
export default {
  // 初始化时获取后台的数据
  getData (context) {
    http.get(Api.host + 'cartData')
      .then(function (data) {
        context.commit('GET_DATA', data.data)
      })
  },
  addNum ({commit}, item) {
    // 判断cartData中是否存在当前点击商品
    http.get(Api.host + 'cartData?product_id=' + item.product_id)
      .then(function (data) {
        // 存在
        if (data.data.length > 0) {
          item.num++
          http.put(Api.host + 'cartData/' + item.product_id, item)
            .then(function (data) {
              commit('ADD_NUM', data.data)
            })
        } else {
          item.num = 1
          item.activeSelect = true
          http.post(Api.host + 'cartData', item)
            .then(function (data) {
              // console.log(data.data)
              commit('ADD_NUM', data.data)
            })
        }
      })
  },
  subNum ({commit}, item) {
    http.get(Api.host + 'cartData?product_id=' + item.product_id)
      .then(function (data) {
        if (data.data.length > 0 && item.num > 0) {
          item.num--
          http.put(Api.host + 'cartData/' + item.product_id, item)
            .then(function (data) {
              commit('SUB_NUM', data.data)
            })
        } else {
          http.delete(Api.host + 'cartData/' + item.product_id)
        }
      })
  },
  // 购物车页商品是否勾选
  changeSelect ({commit}, item) {
    item.activeSelect = !item.activeSelect
    http.put(Api.host + 'cartData/' + item.product_id, item)
      .then(function () {
        commit('CHANGE_SELECT', item)
      })
  }
}
