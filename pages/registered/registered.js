// pages/registered/registered.js
const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /*
   表单提交
  */
  formSubmit: function (e) {
    var value = e.detail.value;
    value.type = "2";
    let b = false;
    if (value.account == '' || value.password == '' || value.oldPassword == '' || value.phone == '') {
      b = true;
    }
    if (b) {
      $Toast({
        content: '所有都需要填写',
        type: 'warning'
      });
      return;
    }
    if ( value.password != value.oldPassword) {
      $Toast({
        content: '确认密码不一致!',
        type: 'warning'
      });
      return;
    }
    if (value.account.length < 6 || value.password.length < 6 || value.oldPassword.length < 6) {
      $Toast({
        content: '用户名 密码 请都大于6位!',
        type: 'warning'
      });
      return;
    }
    if (value.phone.length != 11) {
      $Toast({
        content: '请输入正确的电话号码!',
        type: 'warning'
      });
      return;
    }
    
    console.log('form发生了submit事件，携带数据为：', value)

    wx.request({
      url: getApp().globalData.bashUrl + 'user/register.do',
      method: 'post', //请求方式
      header: { 
        'Content-Type': 'application/json',
      },
      data: value,
      success: function(res){
        console.log("注册成功的回显日志->",res)

        if(res.data.data == true){
          $Toast({
            content: '注册成功！',
            type: 'warning'
          });
          wx.redirectTo({
            url: '/pages/index/index'
          })
        } else{
          $Toast({
            content: '用户名已经被注册了!',
            type: 'warning'
          });
        }
       
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.bashUrl)
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