// pages/theReservationList/theReservationList.js
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
  /**
   * 页面的初始数据
   */
  data: {
    current: 'theReservationList'
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