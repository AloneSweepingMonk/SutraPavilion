//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
//
const appId = '';
const APP_SECRET = '';
var OPEN_ID = '';
var SESSION_KEY = '';
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;

        if (code) {
          console.log("获取用户登录凭证：" + code);

        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          var code = res.code// 登录凭证
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              var wechatId = res.userInfo.nickName;

              console.log(wechatId)
              // 准备数据（下面的这些参数都是必须参数，请不要问为什么，看文档去吧）  
              var data = { encryptedData: res.encryptedData, iv: res.iv, code: code }
              console.log(data)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    appId: "wxaf5d522e2c10d551",
    secret: "ea8825bcef3bfc1bc094e3f408d7f976",
    agentcode:'01',
    banknode:"",
    fromtype:"",
    bancode:"",
    fromtype:"",
    transtype:"",
    riskcode:""
  }
})