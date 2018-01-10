var app = getApp()
Page({
  data: {
    userList: []
  },
  onLoad: function () {
    this.setData({
      userList: app.globalData.userList
    })
  }
})