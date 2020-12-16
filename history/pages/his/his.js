// pages/his/his.js
Page({

  /**
  / * 页面的初始数据
   */
  data: {
result:[],
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
  
  formSubmit: function (e) {

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.send(e.detail.value)
    
    },
//send
send: function(e){
  console.log(e)
  let that=this
  wx.request({
    url: 'http://api.juheapi.com/japi/toh', //网页免费接口
   method:'GET',//请求方式
    data: {
      key:'2a6dbb25bb19a455e1443127186d7bbb',
      v:'1.0',
      month:e.input_content1,
      day:e.input_content2
    },//请求参数
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      console.log(res.data.result)
  that.setData({
result:res.data.result,//返回数组内的值
})
    }
  })
},

})