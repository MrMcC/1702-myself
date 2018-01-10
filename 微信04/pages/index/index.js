//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // 保存影片数据
    movie: []
  },
  onLoad () {
    wx.showLoading({
      title: '加载中...',
    })
    let doubanApi = 'https://api.douban.com/v2/movie/top250'
    let _this = this
    wx.request({
      url: doubanApi,
      data: {
        count: 25
      },
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        wx.hideLoading()
        _this.setData({
          movie: res.data.subjects
        })
      }
    })
  }
})
