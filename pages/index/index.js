//index.js
//获取应用实例
const app = getApp()
const requestUrl = require('../../config').newDay

Page({
  data: {
    data: {},
    hasData: false
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    console.log("share data" + res)
    return {
      path: "/pages/index/index?id=123",
      title: "这是一个分享~~~~"
    }
  },
  onLoad: function(option) {
    this.loadData()
  },
  videoErrorCallBack(e){

  },
  onPullDownRefresh(){
    wx.showToast({
      title: '加载中...',
      icon:'loading'
    })
    this.loadData()
  },
  loadData(){
    const that = this;
    wx.request({
      url: requestUrl,
      data: {

      },
      method: "get",
      success(response) {
        console.log(response)
        console.log(response.data.error)
        if (response.statusCode == 200) {
          console.log(response.data.results);
          console.log(response.data.results.福利[0].url)
          that.setData({
            data: response.data.results,
            headImageUrl: response.data.results.福利[0].url,
            videoData: response.data.results.休息视频[0],
            hasData: true
          })
        }
        that.stopPullDownRefresh()
      },
      fail(errMsg) {
        that.stopPullDownRefresh()
      }
    })
  },
  stopPullDownRefresh(){
    wx.stopPullDownRefresh({
      complete(res){
        wx.hideToast()
      }
    })
  }
})