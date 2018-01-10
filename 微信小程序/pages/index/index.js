//index.js
//获取应用实例
var app = getApp()
console.log(app.globalData.userName)
Page({
  data: {
    motto: 'McC 最帅',
    userInfo: {}
  },
  changeMotto () {
    this.setData({
      motto: '确实很帅'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
