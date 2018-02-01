// pages/postDetail/postDetail.js
var postData = require("../../data/post-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shared: true,
    submited: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var detailData = postData.postData.postList[options.postId];
    this.setData({
      postData: detailData
    })
    var thisthis = this;
    wx.getStorage({
      key: 'shared',
      success: function (res) {
        // console.log("getStorage shared=>" + res)
        // console.log(res)
        thisthis.setData({
          shared: res.data
        })
      },
      fail: function (eror) {
        // console.log("error=>" + eror)
      }
    })

    wx.getStorage({
      key: 'submited',
      success: function (res) {
        // console.log("getStorage=> submited" + res)
        // console.log(res)
        thisthis.setData({
          submited: res.data
        })
      },
      fail: function (eror) {
        // console.log("error=>" + eror)
      }
    })


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

  },


  shareTap: function (e) {
    // console.log("shareTap=>"+e)
    this.setData({
      shared: !this.data.shared
    })
    wx.setStorage({
      key: 'shared',
      data: this.data.shared,
    })

    wx.showActionSheet({
      itemList: ['微信','QQ','微博','MoMO'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  submitTap: function (e) {
    this.setData({
      submited: !this.data.submited
    })
    wx.setStorage({
      key: 'submited',
      data: this.data.submited,
    }),
    //  wx.showToast({
    //   title: this.data.submited ? '收藏成功!' : '取消收藏成功!',
    // })

    wx.showModal({
      title: this.data.submited ? '收藏成功!' : '取消收藏成功!',
      content: 'ssdsdsdadsfsdfsfdsfsfwefw',
      success: function (res){
        console.log("confirmed=>" + res)
        console.log(res)
      },
      fail:function(error){
        console.log(error)
      }
    })
  },
  onMusicTap:function(e){

    var music = this.data.postData.music
    wx.playBackgroundAudio({
      dataUrl: music.url,
      coverImgUrl: music.coverImg,
      title: music.title,
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        console.log(res)
      }
    })
  }

})