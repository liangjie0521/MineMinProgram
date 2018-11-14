// pages/player/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.openSocket()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      path: "/pages/mine/index",
      title: "这是一个分享~~~~"
    }
  },
  openSocket() {
    wx.connectSocket({
      url: 'wss://188.188.1.94:11001',
      success: function(res) {
        console.log("------success---------")
      },
      fail: function(res) {
        console.log("--------fail-------------")
      },
      complete: function(res) {
        console.log("--------complete-------------")
      },
    })

    wx.onSocketMessage(res => {
      console.log('socket message:', res)
    })

    wx.onSocketError(error => {
      console.log('socket error:', error)
    })

    wx.onSocketClose(() => {
      console.log('socket close:')
    })

    wx.onSocketOpen(callback=>{
      console.log('WebSocket 已连接')
    })
  }
})