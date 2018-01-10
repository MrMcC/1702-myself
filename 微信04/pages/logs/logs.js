Page({
  data: {
    movie: []
  },
  search (e) {
    wx.showLoading({
      title: '搜索中...',
    })
    let val = e.detail.value
    let _this = this
    let searchApi = 'https://api.douban.com/v2/movie/search?q=' + val
    wx.request({
      url: searchApi,
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
  },
  onLoad: function () {
    wx.request({
      url: "http://localhost:8081/list",
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})
