const {$Toast} = require('../../dist/base/index');

import { baseUrl } from '../../utils/request';

var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "account":"",
    "password":""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp()
    app.globalData.bashUrl = baseUrl;
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
    if(wx.getStorageSync('uid')){
      wx.redirectTo({
        url: '/pages/navigation/navigation'
      })
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

  },
  bindAccount: function(e){
    this.setData({
      "account":e.detail.value
    })
  }
  ,
  bindPasswork: function(e){
    this.setData({
      "password":e.detail.value
    })
  }
  ,
  userLogin : function(e){
    var that = this;
    var value = e.detail.value;
    value.type = 2;
    console.log("用户登录!!->",value)
      wx.request({
        url: baseUrl + 'user/patriarchLogin.do',
        method: 'post', //请求方式
        header: { 
        },
        data: value,
        success: function(res){
          console.log("登录成功回显的日志->",res)
          let d = res.data;
          if(d.data.success == true){
             wx.setStorage({
              data: d.data.data.id,
              key: 'uid',
            })
            wx.redirectTo({
            url: '/pages/navigation/navigation'
          })
          } else {
            
            $Toast({
              content: '用户名或者密码错误!',
              type: 'warning'
            });
            
          }
        
        },
        fail: function() {
        
        },
      })

   

  }
})