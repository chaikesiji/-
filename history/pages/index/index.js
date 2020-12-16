// pages/index/idex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //分别点击三个按钮跳转到对应页面
  gotohispage:function(){
    wx.navigateTo({
      url: '/pages/his/his',
    })
      
      },
      gotoclopage:function(){
        wx.navigateTo({
          url:'/pages/clo/clo',
        })
      },
      gotoeatpage:function(){
        wx.navigateTo({
           url:'/pages/eat/eat'
        })
 
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

  }
})