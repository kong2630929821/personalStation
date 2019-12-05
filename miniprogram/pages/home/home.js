// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLeft1: false,//左边抽屉显示隐藏
    userInfo: {},
    touchStartX : 0,//触摸时的原点  
    touchStartY : 0,//触摸时的原点  
    time : 0,// 时间记录，用于滑动时且时间小于1s则执行左右滑动  
    interval : "",// 记录/清理时间记录  
    touchMoveX : 0, // x轴方向移动的距离
    touchMoveY : 0, // y轴方向移动的距离
  },
  //展开抽屉
  toggleLeft1() {
    console.log(1);
    this.setData({
      showLeft1: !this.data.showLeft1
    });
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
    wx.setTabBarBadge({
      index: 1,
      text: '99+'
    });
    this.setData({
      userInfo: getApp().globalData.userInfo
    });
    console.log(this.data.userInfo.gender==1)
  },
  // 触摸开始事件  
  touchStart (e) {
    this.setData({
      touchStartX :e.touches[0].pageX, // 获取触摸时的原点  
      touchStartY : e.touches[0].pageY // 获取触摸时的原点  
    })
    
    // 使用js计时器记录时间    
   
  },
  // 触摸移动事件  
  touchMove(e) {
    this.setData({
      touchMoveX : e.touches[0].pageX,
      touchMoveY : e.touches[0].pageY
    })
  },
  // 触摸结束事件  
  touchEnd(e) {
    var moveX = this.data.touchMoveX - this.data.touchStartX
    var moveY = this.data.touchMoveY - this.data.touchStartY
    if (Math.sign(moveX) == -1) {
      moveX = moveX * -1
    }
    if (Math.sign(moveY) == -1) {
      moveY = moveY * -1
    }
    if (moveX <= moveY) {// 上下
      // 向上滑动
      if (this.data.touchMoveY - this.data.touchStartY <= -30) {
        console.log("向上滑动")
      }
      // 向下滑动  
      if (this.data.touchMoveY - this.data.touchStartY >= 30) {
        console.log('向下滑动 ');
      }
    } else {// 左右
      // 向左滑动
      if (this.data.touchMoveX - this.data.touchStartX <= -30) {
        console.log("左滑页面");
        this.setData({
          showLeft1: false
        });
      }
      // 向右滑动  
      if (this.data.touchMoveX - this.data.touchStartX >= 30) {
        console.log('向右滑动');
        this.setData({
          showLeft1: true
        });
      }
    }
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