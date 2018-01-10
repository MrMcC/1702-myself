//index.js
//获取应用实例
var app = getApp()
// console.log(app.globalData.username)

// 引入common
require('../../common/module1')
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'green',
    scrollTop: 300,
    nodes: '<view style="color: green;">走你</view>',
    scale: 14,
    controls: [{
      id: 1,
      iconPath: '/images/featured.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    },{
      id: 2,
      iconPath: '/images/featured-actived.png',
      position: {
        left: 70,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: [{
      iconPath: "/images/usbox.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  },
  requestApi () {
    /*let api = "http://m.beequick.cn/data/getCategoryProduct?lat=39.977846184473&lng=116.49718705041&simulate_mobile=true&asid=59259e1a232da5457&_r=0.49546734561235106&reflogid=598413a4b38ee5571&location_hash=090bcePSzAWDyoUJIgh0RGb%2F5tyP%2Ff2o9k9aFIZ0NcfOUh65kjrQ%2B8xZqvLjQDUi734%2BDEB%2B4qaADpXmNJgYLvzSbHba23YH61&zchtid=4378&bigids=2%2C0"*/
    let api = "https://api.douban.com/v2/movie/top250"

    wx.request({
      url: api,
      header: {
        'content-type': 'json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  controltap (e) {
    // console.log(e.controlId)
    if (e.controlId === 1) {
      this.setData({
        scale: this.data.scale - 1
      })
    }else if (e.controlId === 2){
      this.setData({
        scale: this.data.scale + 1
      })
    }
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')
  },
  play() {
    this.videoCtx.play()
  },
  pause() {
    this.videoCtx.pause()
  }
})
