//index.js
//获取应用实例
const app = getApp()

Page({
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../99/99'
    })
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        var listhei = res.windowHeight
        var listwid = res.windowWidth
        that.setData({
          list: [{
            id: 1,
            iconPath: '/imgs/list.png',
            position: {
              top: listhei - 70,
              left: listwid/2 - 30,
              width: 60,
              height: 60
            },
            clickable: true,
          }]
        })
      },
    })
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        var latitude = res.latitude
        var longitude = res.longitude
        that.setData({
          wd: latitude,
          jd: longitude,
          markers: [
            {
              id: 0
              , iconPath: "/imgs/location.png"
              , longitude: longitude
              , latitude: latitude
              , width: 20
              , height: 27
            }
          ],
          
        })
      }
    })  
  }
})
