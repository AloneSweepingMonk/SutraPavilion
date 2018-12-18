import * as echarts from '../../ec-canvas/echarts';
var wxcharts = require('../../ec-canvas/wxcharts.js');
const app = getApp();

Page({
  data: {
    height: '500rpx',
    teamName:'XX区营销服务部',
    teamAddPerson:'16',
    teamTotalPerson:'150',
    teamQuitPerson:'10',
    teamAddManager:'6',
    teamManagerTotal:'20'
  },
  onLoad: function (options) {
    var that = this;
    var agentcode = app.globalData.agentcode;
    console.log(agentcode);
    // that.setData({
    agentcode: app.globalData.agentcode
    // });
    console.log(agentcode);
    //将数据存储在本地缓存中
    wx.setStorage({
      key: "key",
      data: "value"
    })
    //发送访问请求
    var bankList = new Array();
    wx.request({
      url: 'https://sinosoft-yhbxsyb.com/mobile-display/people/peopleTrack',
      data: {
        // agentcode: '01',
        // bankCode: ''
        agentCode: agentcode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function (res) {
        //console.log(res);
        that.setData({
          teamName: 'XX区营销服务部',
          teamAddPerson: res.data.addAndQuitPeo.addnum,
          teamTotalPerson: res.data.addAndQuitPeo.humannum,
          teamQuitPerson: res.data.addAndQuitPeo.quitnum,
          teamAddManager: '6',
          teamManagerTotal: res.data.addAndQuitPeo.agentNum
        });
      }
    });
   var columnArr = ['column1','column2'];
   for(let i=0;i<columnArr.length;i++){
     loadData(columnArr[i]);
   }
  },

  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  },


})

function loadData(canvasId) {
  var chart = null;
   console.log(canvasId);
  var agentcode = app.globalData.agentcode;
  // console.log(agentcode);
  // that.setData({
  agentcode: app.globalData.agentcode
  // });
  // console.log(agentcode);
  //将数据存储在本地缓存中
  wx.setStorage({
    key: "key",
    data: "value"
  })
  //发送访问请求
  var bankList = new Array();
  wx.request({
    url: 'https://sinosoft-yhbxsyb.com/mobile-display/people/peopleTrack',
    data: {
      // agentcode: '01',
      // bankCode: ''
      agentCode: agentcode
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      if (canvasId == "column1") {
        var currentResourceArr = new Array();
        currentResourceArr.push(res.data.addAndQuitPeo.addnum);
        currentResourceArr.push(res.data.addAndQuitPeo.quitnum);
        chart = loadCurrenResouce(canvasId,currentResourceArr);
      } else if (canvasId == "column2") {
        var allMonthsArr = new Array();
        var AreaResourceArr = new Array();
        for (let i = 0; i < res.data.peopleList.length;i++){
        allMonthsArr.push(res.data.peopleList[i].caldate);
        AreaResourceArr.push(res.data.peopleList[i].humannum);
        }
        chart = loadAreaResouce(canvasId,allMonthsArr,AreaResourceArr);
      } else if (canvasId == "mychart-bar2") {

      }
    }
  });
  return chart;
}
function loadCurrenResouce(chartId,currentResourceArr){
  var chart = null;
  var title = '当前人力变化图';
  var optionType = 'column';
  var data = ['新增人力', '脱落人力'];
  chart = loadOption(chartId,optionType, data,currentResourceArr,title);
  return chart;
}

function loadAreaResouce(chartId,allMonthsArr,AreaResourceArr){
  var chart = null;
  var title = '所辖人力变化图';
  var optionType = 'column';
  var data = ['当月', '上月', '前月'];
  chart = loadOption(chartId,optionType, data,AreaResourceArr, title);
  return chart;
}

function loadOption(chartId, optionType, xData, yData, title) {
  console.log(chartId,optionType,yData,xData,title);
  var windowWidth = 320;
  try {
    var res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    console.error('getSystemInfoSync failed!');
  }
  var chart = new wxcharts({
    title: title,
    canvasId: chartId,
    type: optionType,
    animation: true,
    categories: xData,
    series: [{
      color: "#3398DB",
      name: title,
      data: yData,
      format: function (val, name) {
        return val;
      }
    }],
    yAxis: {
      format: function (val) {
        return val;
      },

      min: 0
    },
    xAxis: {
      disableGrid: false,
      type: 'calibration'
    },
    width: windowWidth,
    height: 250,
    dataLabel: true,
    
    extra: {
      column: {
        width: windowWidth / xData.length/4 ,//柱的宽度
      },
      fontSize:20
    }
  });
  return chart;
}