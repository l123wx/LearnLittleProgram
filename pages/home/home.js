// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:0
  },
  miss: function(){
    this.setData({
      number:this.data.number + 1
    })
    if(this.data.number >= 5){
      wx.showModal({
        title: '来自你的🐖',
        content: '我好喜欢你啊，可以做我的女朋友吗',
        cancelText:'可能不行',
        confirmText:'当然可以',
        success: function (res) {
          if (res.confirm) {  
            wx.showToast({
              title: '啊啊啊啊啊哈哈哈哈哈太好了，我真的超超超超超超超超喜欢你啊',
              icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
              duration: 2000     
            })
          } else {   
            wx.showToast({
              title: '咩咩咩咩咩.....你居然敢拒绝我，我要在上学的路上把你拦下来，拖到没人的角落把你亲到晕！哼',
              icon: 'none',    //如果要纯文本，不要icon，将值设为'none'
              duration: 2000     
            })
          }
        }
      })
    }
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