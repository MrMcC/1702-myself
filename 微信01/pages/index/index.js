//index.js
//获取应用实例
var app = getApp()
// console.log(app.globalData.username)

// 引入common
require('../../common/module1')

Page({
  data: {
    motto: 'Hello tangcaiye',
    userInfo: {},
    userList: [],
    zero: 0,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    num: 2
  },
  handleTap1 (event) {
    console.log(event)
  },
  handleTap2 (event) {
    console.log(event)
  },
  handleTap3 (event) {
    // console.log(event)
    console.log(event.target.dataset.num)
  },
  toDemo () {
    wx.navigateTo({
      url: "/pages/demo/demo"
    })
  },
  changeMotto () {
    this.setData({
      motto: '你好，唐菜也'
    })
  },
  onShareAppMessage () {
    return {
      title: '分享到朋友',
      path: '/page/user?id=123',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },
  onPageScroll (event) {
    console.log(event)
  },
  onReachBottom () {
    console.log("啊，到底啦")
  },
  onPullDownRefresh () {
    console.log('啊，下拉刷新啦')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log('onLoad')
    var that = this
    this.setData({
      userList: app.globalData.userList
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
