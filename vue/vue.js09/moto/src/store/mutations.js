export default {
  // 页面刷新时获取后台数据
  GET_DATA (state, data) {
    // 把后台数据赋给页面数据
    state.cartData = data
    for (var i = 0; i < state.cartData.length; i++) {
      // 购物车页默认勾选状态都勾选
      state.cartData[i].activeSelect = true
    }
  },
  SAVE_CLASSFIYS (state, classfiys) {
    // 所有数据
    state.classfiys = classfiys
  },
  ADD_NUM (state, item) {
    // 更新页面数据,使其和后台数据同步变化
    // 定义一个变量,判断追加还是添加
    let itemExist = false
    for (var j = 0; j < state.cartData.length; j++) {
      if (state.cartData[j].product_id === item.product_id) {
        state.cartData[j].num++
        itemExist = true
      }
    }
    if (!itemExist) {
      state.cartData.push(item)
      // console.log(item)
    }
    // 购物车动画
    state.numActive = true
    setTimeout(() => {
      state.numActive = false
    }, 200)
  },
  SUB_NUM (state, item) {
    // 更新页面数据,使其和后台数据同步变化
    for (var j = 0; j < state.cartData.length; j++) {
      if (state.cartData[j].product_id === item.product_id) {
        state.cartData[j].num--
        if (state.cartData[j].num <= 0) {
          state.cartData.splice(j, 1)
        }
      }
    }
    // 购物车动画
    state.numActive = true
    setTimeout(() => {
      state.numActive = false
    }, 200)
  },
  // 改变勾选状态
  CHANGE_SELECT (state, data) {
    if (!data.activeSelect) {
      state.allSelect = false
    }
    var lengths = 0
    for (var i = 0; i < state.cartData.length; i++) {
      if (state.cartData[i].activeSelect) {
        lengths++
      }
      lengths === state.cartData.length ? state.allSelect = true : state.allSelect = false
    }
  }
}
