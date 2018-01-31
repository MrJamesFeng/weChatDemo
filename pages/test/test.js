// pages/test/test.js


Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   id: 0,
  //   condition: false,
  //   check: true,
  //   flag:false,
  //   a: 1,
  //   b: 2,
  //   c: 3,
  //   length:3,
  //   name:"James",
  //   zero:0,
  //   obj1:{
  //     a:4,
  //     b:5
  //   },
  //   obj2:{
  //     c:6,
  //     d:7
  //   },




  //   // 列表渲染
  //   arr:[
  //     {foo:"fooo"},
  //     {foo:"barr"}
  //   ],
  //   arr1:[1,2,3,4,5,6,7,8,9],
  //   arr2: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // },

  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_0' },
      { id: 2, unique: 'unique_0' },
      { id: 1, unique: 'unique_0' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    length:2,
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    date:''
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  tapName: function (event) {
    console.log(event)
  },
  captureTap1: function (event) {
    console.log("captureTap1=>"+event)
    console.log(event)
  },
  captureTap2: function (event) {
    console.log("captureTap2=>" +event)
    console.log(event)
  },
  captureTap3: function (event) {
    console.log("captureTap3=>" +event)
    console.log(event)
  },
  handleTap1: function (event) {
    console.log("handleTap1=>" +event)
    console.log(event)
  },
  handleTap2: function (event) {
    console.log("handleTap2=>" +event)
    console.log(event)
  },
  handleTap3: function (event) {
    console.log("handleTap3=>" +event)
    console.log(event)
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

  },

})