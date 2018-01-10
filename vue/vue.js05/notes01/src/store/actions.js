/**
 * Created by miaoce on 17/7/14.
 */
export default {
  // 解构 添加
  addNote ({commit}) {
    commit('ADD_NOTE')
  },
  // 点击当前的note变蓝色
  upDateactiveNote ({commit}, item) {
    commit('UPDATA_CTIVE_NOTE', item)
  },
  // 加星
  toggleFavorite ({commit}) {
    commit('TOGGLE_FAVORITE')
  },
  remove ({commit}) {
    commit('REMOVE')
  }
}

