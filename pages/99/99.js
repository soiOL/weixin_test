// pages/99/99.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      id: 0,
      message: 1,
    },
    {
      id: 1,
      message: 2,
    }]
  },

  tapped: function(e){
    //console.log(e)
    var id = e.currentTarget.dataset.replytype
    //console.log(typeof(id))
    this.data.array[id].message++
    this.setData({
      array: this.data.array}
    )
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '打开',
    })
    var that = this
    var lat = options.lat
    var lon = options.lon
    //console.log(lat,lon)
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now?location='+lat+','+lon+'&key=0244c885f15d47da91eec9c7985c073a',
      data: {
      },
      success: function(res){
        //console.log(res.data)
        that.setData({
          weathernow: res.data.HeWeather6[0].basic.location + "\n" + res.data.HeWeather6[0].now.cond_txt
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})