// 获取主机地址
import api from '@/api'
import http from 'axios'

export default {
  // 设置bannar
  setBannar ({commit}) {
    let url = api.host + 'bannar'
    http.get(url)
      .then(function (data) {
        commit('SET_BANNAR', data.data)
      })
  },
  // 获取所有的分类数据并设置给state中的classifys
  setClassifys ({commit}) {
    let url = api.host + 'classifys'
    http.get(url)
      .then(function (data) {
        commit('SET_CLASSIFYS', data.data)
      })
  },
  // 登录
  login ({commit}, phone) {
    // 首先验证是否有这个手机号
    let url = api.host + 'users?phone=' + phone
    return http.get(url)
      .then(function (data) {
        if (data.data.length > 0) {
          // 有数据->提取数据并保存到vuex的userInfo下,并返回登录成功
          commit('SAVE_USER', data.data[0])
          return {status: true, msg: '登陆成功'}
        } else {
          // 没有数据->注册
          let url = api.host + 'users'
          // 构造用户对象
          let newUser = {
            phone: phone,
            level: 'V0',
            current_score: 0,
            dif_score: '距下一等级还需 30 成长值',
            cart: [],
            collect: [],
            site: []
          }
          // 将新创建的对象添加到数据库中
          return http.post(url, newUser)
            .then(function (data) {
              // 注册成功->保存到vuex的userInfo
              commit('SAVE_USER', data.data)
              return {status: true, msg: '注册成功'}
            })
        }
      })
      .catch(function () {
        // 如果有错误
        return {status: false, msg: '登录失败'}
      })
  }
}
