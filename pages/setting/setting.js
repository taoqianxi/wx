// pages/setting/setting.js
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
    //   this.setData({
    //     current: detail.key
    // });
  },
  editPassword: function(){
    this.setData({
      passwordView : !this.data.passwordView
    })

  },
  formSubmit: function(e){

    let value = e.detail.value;
    value.password = e.detail.value.newPassword;
    value.id = wx.getStorageSync('uid');
    console.log(value)
    if(value.newPassword.length <=0 || value.affirmPassword.length <=0) {
      $Toast({
        content: '密码不能为空!',
        type: 'warning'
      });
      return
    }
    if (value.newPassword.length < 6) {
      $Toast({
        content: '密码需要大于6位!',
        type: 'warning'
      });
      return
    }
    if (value.newPassword != value.affirmPassword) {
      $Toast({
        content: '密码不一致!',
        type: 'warning'
      });
      return
    }
    wx.request({
      url: baseUrl + 'user/updatePassWork.do',
      method: 'post', //请求方式
      data: value,
      success: function(res){
        console.log("修改密码成功->",res)
        $Toast({
          content: '修改密码成功!',
          type: 'warning'
        });

        wx.setStorageSync('uid','')
        wx.reLaunch({
          url: '/pages/index/index'
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
   * 页面的初始数据
   */
  data: {
    current: 'setting',
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    passwordView: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
     success:function(res){
      console.log(res);
      var avatarUrl = 'userInfo.avatarUrl';
      that.setData({
       [avatarUrl]: res.userInfo.avatarUrl,
      })
     }
    })
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
  handleClick: function(){
    wx.setStorageSync('uid','')
    wx.reLaunch({
      url: '/pages/index/index'
    })
  } 
})