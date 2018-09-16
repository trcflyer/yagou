Page({

  /**
   * 页面的初始数据
   */
    data: {
      imgUrls: [
      '/image/b1.jpg',
      '/image/b2.jpg',
      '/image/b3.jpg'
    ],
      // nav
      navs: [
        {
          image: '/image/ya1.png',
          text: '钢牙'
        }, {
          image: '/image/ya2.png',
          text: '瓷牙'
        }, {
          image: '/image/ya3.png',
          text: '金牙'
        }, {
          image: '/image/ya4.png',
          text: '活动'
        }
      ],
      showData: [
        {
          image:'/image/s3.jpg',
          title:'关爱他人生的每一个地方',
          desc:'专业定制，用心做起',
          price:'1980元'
        },
        {
          image: '/image/s4.jpg',
          title: '美丽刚呲牙，爱护你的美',
          desc: '专业定制，用心做起',
          price: '1080元'
        },
        {
          image: '/image/s1.jpg',
          title: '爱美雅丽套，照亮你的美',
          desc: '专业定制，用心做起',
          price: '980元'
        }
      ],
  indicatorDots: false,
  autoplay: false,
  interval: 3000,
  duration: 800,
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
  clickSwiper: function (event){
    console.log(event);
    wx.navigateTo({
      url: '../component/details/details',
    })
  },
  clickNav: function (event) {
    console.log(event);
     wx.navigateTo({
       url: '../component/list/list',
     })
  },
   clickList: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '../component/details/details',
    })
  }
})