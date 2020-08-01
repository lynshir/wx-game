// pages/questionGame/questionGame.js
Page({
  backIndex: function(e){
    console.log('backIndex', e)
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  checkAnswer: function(e){
    console.log('checkAnswer', e)
    wx.redirectTo({
      url: '/pages/correct/correct',
    })
  }
})