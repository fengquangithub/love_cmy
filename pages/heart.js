
// app.js
var hearts = [];
var windowWidth = '';
var windowHeight = '';
var scaleHearts = [];

wx.getSystemInfo({
  success: function (res) {
    windowWidth = res.windowWidth;
    windowHeight = res.windowHeight;
  }
});

update();
function update() {
  for (var i = 0; i < 80; i++) {
    var tmp = {};
    var px = Math.random() * windowWidth;
    var py = Math.random() * windowHeight;
    var scale = Math.random() * 10;
    tmp.x = px + 20;
    tmp.y = py + 20;
    tmp.w = scale;
    hearts.push(tmp)
  }
}

Page({
  change: function (e) {
    console.log('tap')
    hearts = [];
    var that = this;
    scaleHearts.unshift({
      x: e.touches[0].pageX - 100,
      y: e.touches[0].pageY - 100,
      w: 300
    });
    setTimeout(function () {
      scaleHearts.pop();
      that.setData({
        heartScale: scaleHearts
      });
    }, 850)
    update();
    this.setData({
      heartNum: hearts,
      heartScale: scaleHearts
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    heartNum: hearts,
    heartScale: []
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
