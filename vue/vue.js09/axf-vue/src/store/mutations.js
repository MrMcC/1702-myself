export default {
  // 设置home首页的bannar数据
  SET_BANNAR (state, data) {
    state.bannar = data
  },
  // 设置classifys(全部分类)
  SET_CLASSIFYS (state, data) {
    state.classifys = data
  },
  // 保存用户信息
  SAVE_USER (state, data) {
    state.userInfo = data
  }
}
