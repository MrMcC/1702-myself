export default {
  // 页面展示数量
  total (state) {
    if (state.cartData.length > 0) {
      var result = 0
      // console.log(state.cartData)
      for (var i = 0; i < state.cartData.length; i++) {
        result += state.cartData[i].num
      }
      return result
    }
  }
}
