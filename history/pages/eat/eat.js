Page({
//餐厅选项设置，建立数组
  awardsConfig: {
    chance: true,
    awards: [
      { 'index': 0, 'name': '学一' },
      { 'index': 1, 'name': '教二' },
      { 'index': 2, 'name': '学三' },
      { 'index': 3, 'name': '教三' },
      { 'index': 4, 'name': '学二' },
      { 'index': 5, 'name': '教一' },
      { 'index': 6, 'name': '教四' },
      { 'index': 7, 'name': '学五' },
      { 'index':8, 'name': '教五' },
      { 'index': 9, 'name': '学四' },
    ]
  },

  data: {
    awardsList: {},
    animationData: {},
    btnDisabled: '',
  },

  onReady: function (e) {
    this.drawAwardRoundel();

  },

  //画抽奖圆盘
  drawAwardRoundel: function () {
    var awards = this.awardsConfig.awards;
    var awardsList = [];
    var turnNum = 1 / awards.length;  // 文字旋转 turn 值

    // 奖项列表
    for (var i = 0; i < awards.length; i++) {
      awardsList.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', award: awards[i].name });
    }

    this.setData({
      btnDisabled: this.awardsConfig.chance ? '' : 'disabled',
      awardsList: awardsList
    });
  }, 


  playReward: function () {
//取随机数，做到随机抽取
    var i='awardsConfig.award.index';
    var i = (Math.random() * 10).toFixed(0);
    //i的取值范围为[0,10)的小数
    //选择最终指向的结果
    var awardIndex = i;
    var runNum = 8;//旋转8周
    var duration = 4000;//时长

    // 旋转角度
    this.runDeg = this.runDeg || 0;
    this.runDeg = this.runDeg + (360 - this.runDeg % 360) + (360 * runNum - awardIndex * (360 / 10))
    //创建动画
    var animationRun = wx.createAnimation({
      duration: duration,
      timingFunction: 'ease'
    })
    animationRun.rotate(this.runDeg).step();
    this.setData({
      animationData: animationRun.export(),
      btnDisabled: 'disabled'
    });

    //结果
    var awardsConfig = this.awardsConfig;
    setTimeout(function () {
      wx.showModal({
        title: '决定啦',
        content: '今天去' + (awardsConfig.awards[awardIndex].name+'吃饭'),
        showCancel: false
      });
      this.setData({
        btnDisabled: ''
      });
    }.bind(this), duration);
  },
})

