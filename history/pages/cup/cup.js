Page({
data:{
  //建立所有衣服的数组
list:[
{
id:0,
position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo1.png",
name:'第一件衣服',
value:"clo1"
},
{
  id:1,
  position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo2.png",
  name:'第二件衣服',
  value:"clo2"
  },
  {
    id:2,
    position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo3.png",
    name:'第三件衣服',
    value:"clo3"
    },
   
      {
        id:3,
        position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo4.png",
        name:'第四件衣服',
        value:"clo4"
        },
        {
          id:4,
          position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo5.png",
          name:'第五件衣服',
          value:"clo5"
          },
          {
            id:5,
            position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo6.png",
            name:'第六件衣服',
            value:"clo6"
            },
            {
              id:6,
              position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo7.png",
              name:'第七件衣服',
              value:"clo7"
              },
              {
                id:7,
                position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo8.png",
                name:'第八件衣服',
                value:"clo8"
                },
                {
                  id:8,
                  position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo9.png",
                  name:'第九件衣服',
                  value:"clo9"
                  },
                  {
                    id:9,
                    position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo10.png",
                    name:'第十件衣服',
                    value:"clo10"
                    },
                    {
                      id:10,
                      position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo11.png",
                      name:'第十一件衣服',
                      value:"clo11"
                      },
                      {
                        id:11,
                        position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo12.png",
                        name:'第十二件衣服',
                        value:"clo12"
                        },
                        {
                          id:12,
                          position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo13.png",
                          name:'第十三件衣服',
                          value:"clo13"
                          },
                          {
                            id:13,
                            position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo14.png",
                            name:'第十四件衣服',
                            value:"clo14"
                            },
                            {
                              id:14,
                              position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo15.png",
                              name:'第十五件衣服',
                              value:"clo15"
                              },
                              {
                                id:15,
                                position:"cloud://test-0gchyt68b5577ddc.7465-test-0gchyt68b5577ddc-1303839003/clo16.png",
                                name:'第十六件衣服',
                                value:"clo16"
                                },

],
checkedList:[]
},
//复选框被选中的事件
HandleItemChange(e){
//获取被选中的复选框里的值
const checkedList=e.detail.value;
//进行赋值
this.setData({
  checkedList
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
    
  },
 

})