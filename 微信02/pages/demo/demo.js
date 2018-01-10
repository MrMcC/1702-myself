let app = getApp()
Page({
  data: {
    userInfo: {}
  },
  onLoad (options) {
    let userList = app.globalData.userList
    for (var i=0; i<userList.length; i++){
      if (userList[i].userId === Number(options.id)){
        this.setData({
          userInfo: userList[i]
        })
        break
      }
    }
  }
})