// pages/correct/correct.js
Page({
  backIndex: function(e){
    console.log('backIndex', e)
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
})