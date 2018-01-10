let app = getApp()
Page({
  data: {
    movieDetail: {}
  },
  onLoad (options) {
    let id = options.id
    let movieDetailApi = 'https://api.douban.com/v2/movie/subject/' + id
    wx.showLoading({
      title: '加载中...',
    })
    let _this = this
    wx.request({
      url: movieDetailApi,
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        wx.hideLoading()
        _this.setData({
          movieDetail: res.data
        })
      }
    })
  }
})