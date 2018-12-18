const app = getApp()
var shwoview = false
var openIdValue = ""
var AGENTCODEValue = ""
Page({
  /**
   * 页面的初始数据
   */
  data: {
    width: wx.getSystemInfoSync().windowWidth,
    height: wx.getSystemInfoSync().windowHeight,
    showView: shwoview,
    AGENTCODE: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.getOpenId();
     // console.log("Hello ：" + showView)
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(res.userInfo);
        this.getOpenId();
      }
     
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.openSetting(OBJECT);
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.getOpenId();
        }
      })
    }
   // this.getOpenId();
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

  /**
  * 获取代理人号
  */
  phoneInput: function (e) {
    AGENTCODEValue = e.detail.value;

    console.log(AGENTCODEValue);
    this.setData({
      AGENTCODE: e.detail.value
    })
  },


  //绑定代理人编码
  bindingcode: function () {
    if (this.data.AGENTCODE.length == 0) {
      wx.showToast({
        title: '编码不能为空',
        icon: 'loading',
        duration: 1000
      })

    } else {

      console.log(openIdValue);
      console.log(AGENTCODEValue);

      if (AGENTCODEValue != '') {
      wx.request({
        url: 'https://sinosoft-yhbxsyb.com/wxChart/userInfo/addUserInfo', 
        data: {
          openId: openIdValue,
          agentCode: AGENTCODEValue
        },
        
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          app.globalData.agentcode = res.data.agentCode;
          console.log("打印openId");
          console.log(res);
          if (res.data.flag == 0) {
            that.setData({
              showView: true
            })
          } else if (res.data.flag == 1) {
            wx.showToast({
              title: '绑定成功',
              icon: 'success',
              duration: 1000,
              success: function () {
                console.log(res.data.agentCode);
                wx.switchTab({
                    
                  url: '../product/product?agentcode=' + res.data.agentCode
                  
                })
              }
            })
          }
        },
        fail: function (err) { 
          
        },//请求失败
        complete: function () { }//请求完成后执行的函数

      });
      }else{
        wx.showToast({
          title: '请输入代理人代码',
          icon: 'faile'
        })
      }

    }
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    console.log(app.globalData.userInfo);
    
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
    this.getOpenId();
  },

  getOpenId: function () {
    var code = "";
    var that = this;
    //this.data.showView=true;
    wx.login({
      success: function (res) {
        code = res.code;
        var nickName = app.globalData.userInfo.nickName;
        console.log("访问登录接口");
        console.log(app.globalData.userInfo.nickName);
        wx.request({
          url: 'https://sinosoft-yhbxsyb.com/wxChart/userInfo/getOpenId', //仅为示例，并非真实的接口地址
          data: {
            appId: '',
            secret: '',
            code: code,
            nickname: nickName,
            gender: app.globalData.userInfo.gender,
            city: app.globalData.userInfo.city,
            province: app.globalData.userInfo.province
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            console.log(res.data);
            console.log(res.data.agentCode);
            //
            if (res.data.flag == "0") {
              openIdValue = res.data.openId;
              console.log(openIdValue);
              that.setData({
                showView: true
              })
            } else if (res.data.flag == "1") {
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1000,
                success: function () {
                  app.globalData.agentcode = res.data.agentCode;
                  wx.switchTab({
                    url: '../product/product'
                  })
                }
              })
            }
          },
          fail: function (err) { },//请求失败
          complete: function () { }//请求完成后执行的函数

        });
      }
    })

  }
  
})