//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow () {
    console.log('触发前台')
  },
  onHide () {
    console.log('触发后台')
  },
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    userName: 'McC😊😡😞😊',
    userList: [
      { 'userId' : 1001, userName : '李达康', userAge : 18},
      { 'userId' : 1002, userName : '高玉良', userAge : 20},
      { 'userId' : 1003, userName : '祁同伟', userAge : 16},
      { 'userId' : 1004, userName : '侯亮平', userAge : 22},
      { 'userId' : 1005, userName : '白百何', userAge : 33}
    ]
  }
})
