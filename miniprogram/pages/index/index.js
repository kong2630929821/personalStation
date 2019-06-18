// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:0,
    addClass:'',
    logged: false,
    avatar:'../../images/login/bg2.jpg',
    head:'',
    timer:null,
    userInfo:{},
    account:'1506069361',
    password:'',
    passwordTwo:'',
    show:2,
    spinShow: false
  },
  //账号登录
  login(){
    console.log(this.data.account, '2222=?', this.data.password);
    console.log(this.data.account == '1506069361' && this.data.password == 'sgf19960920');
    if(this.data.account=='1506069361'&&this.data.password=='sgf19960920'){
      this.setData({
        spinShow: true
      });
      setTimeout(() => {
        wx.reLaunch({
          url: '../home/home'
        });
        //  不允许返回
        // wx.redirectTo({
        //   url: '../home/home'
        // })
      }, 3000);
    }
  },
  //微信登录
  wxLogin(){
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo){
      //调用登录加载
      this.setData({
        spinShow:true
      });
      setTimeout(()=>{
        wx.reLaunch({
          url: '../home/home'
        });
        //  不允许返回
        // wx.redirectTo({
        //   url: '../home/home'
        // })
      },3000);
    }
  },
  //去微信登录
  getUserInfo(e){
    this.setData({
      show: 1,
      account: '',
      password: '',
      passwordTwo: ''
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      show: 1
    })
    console.log(this.data.userInfo);
  },
  //去注册
  toRegister(){
    this.setData({
      show:3,
      account: '',
      password: '',
      passwordTwo: ''
    })
  },
  //去账号登录
  account(){
    this.setData({
      show:2,
      account: '',
      password: '',
      passwordTwo: ''
    })
  },
  bindTwoPass() {
    this.setData({
      addClass: 'password',
      type: 3
    })
  },
  bindPass(){
    this.setData({
      addClass:'password',
      type:2
    })
  },
  //点击账号输入框
  bindButtonTap(e) {
    this.setData({
      addClass: '',
      type:1
    })
  },
  //用户输入账号
  inputAccount(e){
    console.log(e.detail.value);
    this.setData({
      account: e.detail.value
    })
  },
  //用户输入密码
  inputPassWord(e){
    this.setData({
      password: e.detail.value
    })
  },
  //用户注册时输入第二次密码
  inputPassWordTwo(e){
    this.setData({
      passwordTwo: e.detail.value
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
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
    //当页面隐藏时取消加载动画
    this.setData({
      spinShow: false
    });
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