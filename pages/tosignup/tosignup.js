// pages/tosignup/tosignup.js
const { $Toast } = require('../../dist/base/index');
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
  bindDateChange(e){
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function (e){
    let value = e.detail.value;
    if(value.userName && value.birthday && value.tName && value.relation && value.phone) {
    } else {
      $Toast({
        content: '所有都需要填写',
        type: 'warning'
      });
      return;
    }
    if (value.phone != 11) {
      $Toast({
        content: '请输入正确电话号码',
        type: 'warning'
      });
      return;
    }
    wx.showModal({
      title: '提示',
      content: '请确认信息,等待审核',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    current: 'tosignup',
    date:""
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