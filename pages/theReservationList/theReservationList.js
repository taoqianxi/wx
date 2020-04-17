const { $Toast } = require('../../dist/base/index');
import { baseUrl } from '../../utils/request';

Page({
  handleChange ({ detail }) {
    if (detail.key == 'tosignup') {
      wx.redirectTo({
        url: '/pages/tosignup/tosignup?key=detail.key'
      }) 
    } else if (detail.key == 'theReservationList') {
      wx.redirectTo({
        url: '/pages/theReservationList/theReservationList?key=detail.key'
      }) 
    } else if (detail.key == 'classInfo') {
      wx.redirectTo({
        url: '/pages/classInfo/classInfo?key=detail.key'
      }) 
    }else if (detail.key == 'setting') {
      wx.redirectTo({
        url: '/pages/setting/setting?key=detail.key'
      }) 
    }

  },
  /**
   * 页面的初始数据
   */
  data: {
    current: 'theReservationList',
    pageNum:1,
    pageSize:10,
    list: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: baseUrl + 'apply/list.do',
      method: 'post', //请求方式
      data: {userId: wx.getStorageSync('uid'),pagination:{pageNum:1,pageSize:100}},
      success: function(res){
        console.log("注册成功的回显日志->",res)
           that.setData({
            list: res.data.data.data
         })
      },
      fail: function() {
        $Toast({
          content: '请求数据异常!',
          type: 'warning'
        });
      },
    })
    
  }
  ,
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
    var that = this
    wx.request({
      url: baseUrl + 'apply/list.do',
      method: 'post', //请求方式
      data: {userId: wx.getStorageSync('uid'),pagination:{pageNum:1,pageSize:100}},
      success: function(res){
        console.log("注册成功的回显日志->",res)
           that.setData({
            list: res.data.data.data
         })
      },
      fail: function() {
        $Toast({
          content: '请求数据异常!',
          type: 'warning'
        });
      },
    })
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