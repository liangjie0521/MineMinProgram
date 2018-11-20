// pages/type/type.js
const requestUrl = require('../../config').typeData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let title = options.type
    this.setData({
      title: title
    })
    this.changeTitle(title)
    this.loadDta(title)
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
    wx.showToast({
      title: '页面上拉触底事件',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  loadDta(title) {
    var url = requestUrl + title + "/30"
    const that = this;
    console.log('url is:', url)
    wx.request({
      url: url,
      method: 'GET',
      data: {

      },
      success(response) {
        console.log("--------", response)
        if (response.statusCode == 200) {
          var data=response.data.results
          console.log("data start",new Date())
          for(var i=0;i<100;i++){
            data.push(response.data.results[0])
            data.push(response.data.results[1])
            data.push(response.data.results[2])
            data.push(response.data.results[3])
            data.push(response.data.results[4])
            data.push(response.data.results[5])
            data.push(response.data.results[6])
            data.push(response.data.results[7])
            data.push(response.data.results[8])
            data.push(response.data.results[9])
            data.push(response.data.results[10])
            data.push(response.data.results[11])
            data.push(response.data.results[12])
            data.push(response.data.results[13])
            data.push(response.data.results[14])
            data.push(response.data.results[15])
            data.push(response.data.results[16])
            data.push(response.data.results[17])
            data.push(response.data.results[18])
            data.push(response.data.results[19])
            data.push(response.data.results[20])
          }
          console.log("data finish",new Date())
          console.log("data is:",data)
          that.setData({
            data: data,
            hasData:true
          })
        }
      },
      fail(error) {
        console.log(error)
      }
    })
  },
  changeTitle(title){
    wx.setNavigationBarTitle({
      title: title,
    })
  }
})