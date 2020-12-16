// pages/clo/clo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   item:'',
   info:'',
   dir:'',
   pow:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  send:function(){
    let that=this;
wx.request({
  url: 'http://apis.juhe.cn/simpleWeather/query',
  method:'GET',
  data:{
   key:'62c5cb7b93b9b6af41f6dc80c75d8720',
   city:'北京'
  },//请求参数
header:{
  'content-type': 'application/json' // 默认值
},
success:function(res){
  console.log(res.data.result.realtime)
  that.setData({
    tem:res.data.result.realtime.temperature,
    info:res.data.result.realtime.info,
    dir:res.data.result.realtime.direct,
    pow:res.data.result.realtime.power
  })
}
})
},
//点击按钮后再跳转到另一个页面
gotocuppage:function(){
wx.navigateTo({
  url:'/pages/cup/cup'
})

}
})