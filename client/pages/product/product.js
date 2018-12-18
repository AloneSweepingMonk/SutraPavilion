
var wxcharts = require('../../ec-canvas/wxcharts.js');
const app = getApp();
//chart = null;
var chartArr = new Array();

// function initChart(canvas, width, height) {
//   disableTouch: true;
//   //console.log(canvas,height,width,height);
//   var chart = echarts.init(canvas, null, {
//     width: width,
//     height: height
//   });
//   canvas.setChart(chart);
//   // loadOption();
//   var option = {
//     disableTouch: true,
//     color: ['#3398DB'],
//     title: {
//       text: '昨日业绩按产品分析',
//       textStyle: {
//         fontSize: 12,
//       },
//       textAlign: 'tight',
//       x: 'center'
//     },
//     tooltip:{
//       trigger:'axis',
//       axisPointer:{
//         // type: 'shadow' // 坐标轴指示器，坐标轴触发有效
//         //   // 默认为直线，可选为：'line' | 'shadow'
//       }
//     },
   
//     xAxis: [{
//       type: 'category',
//       data: ['产品A', '产品B', '产品C', '产品D', '产品E'],
//       // axisTick: {
//       //   alignWithLabel: true
//       // }
//     }],

//     yAxis: [{
//       type: 'value',
//       // data: ['50000', '100000', '150000', '200000', '250000'],
//     }],

//     series: [{
//       name: '昨日业绩按产品分析',
//       type: 'bar',
//       barWidth: '30%',
//       data: ['100000', '200000', '30000', '70000', '10000'],
//       label: {
//         normal: {
//           show: true,
//           position: 'top'
//         }
//       },
//     }]
//   }

//   // chart.setOption(option);
//   chart = loadData(chart, canvas.canvasId);
//   chartArr.push(chart);
//   return chart;
// }
function initChart(chartId){
  loadData(chartId);
} 
Page({
  data: {
    scrollLeft:0,
    height: wx.getSystemInfoSync().screenHeight,
    chartTitle:'',
    // ec: {
    //   disableTouch: true,
    //   onInit: initChart('columnChart1')
    // },

    // ec1: {
    //   disableTouch: true,
    //   onInit: initChart('columnChart2')
    // },

    // ec2: {
    //   disableTouch: true,
    //   onInit: initChart('columnChart3')
    // },
    fyc: '0',
    countno: '0'
  },


  onLoad: function(options) {
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
      url: 'https://sinosoft-yhbxsyb.com/mobile-display/achieve/achieveTrack',
      data: {
        // agentcode: '01',
        // bankCode: ''
        agentCode: agentcode
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success: function(res) {
        //console.log(res);
        that.setData({
          fyc: res.data.FMInfo[0].commision,
          countno: res.data.FMInfo[0].countno
        });
      }
    });
    var columnArr = ['columnChart1', 'columnChart2','columnChart3'];
    var titleArr = []
    for(let i=0;i<columnArr.length;i++){
      loadData(columnArr[i]);
    }
    
  },

  onReady: function() {

  },

  onShow: function() {
    if (chartArr.length > 0) {
      for (let i = 0; i < chartArr.length; i++) {
        loadData(chartArr[i], chartArr[i].canvasId);
      }
    }
    console.log(chartArr);
  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
    // wx.showToast({

    //   duration: 2000//时间
    // });
  },

  onReachBottom: function() {
  
    // wx.showToast({

    //   duration: 2000//时间
    // });
  },

  onShareAppMessage: function() {

  },

  //滑动
  scroll: function (e) {
    console.log(e);
    var scrollLeft = e.detail.scrollLeft;
    this.setData({ scrollLeft: scrollLeft })
  }
})

function loadData(chartId) {
  var chart = null;
  // console.log(canvasId);
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
    url: 'https://sinosoft-yhbxsyb.com/mobile-display/achieve/achieveTrack',
    data: {
      // agentcode: '01',
      // bankCode: ''
      agentCode: agentcode
    },
    header: {
      'content-type': 'application/json' // 默认值
    },

    success: function(res) {
      if (chartId == "columnChart1") {
        // console.log(canvasId+'dfjj');
        var riskNameArr = new Array();
        var commisonArr = new Array();
        for (let i = 0; i < res.data.product.length; i++) {
          riskNameArr.push(res.data.product[i].riskname);
          commisonArr.push(res.data.product[i].commision);
        }

        var title = '昨日业绩按产品分析';
        var optionType = 'column';
        chart= loadOption(chartId,optionType, commisonArr, riskNameArr, title);

      } else if (chartId == "columnChart2") {
        var policyyear = new Array();
        var commisionProduct = new Array();
        for (let i = 0; i < res.data.achieveOfYear.length; i++) {
          commisionProduct.push(res.data.achieveOfYear[i].commision);
          var num = '第' + res.data.achieveOfYear[i].policyyear + '次';
          policyyear.push(num);
        }
       chart = loadProductData(chartId, commisionProduct, policyyear);
        
      } else if (chartId == "columnChart3") {
        var commisionIndex = new Array();
        var commisonArr = new Array();
        for (let i = 0; i < res.data.CommisionList.length; i++) {
          // riskNameArr.push(res.data.CommisionList[i].riskname);
          var index = 'T-' + (res.data.CommisionList.length - (i + 1)) + '日';
          if ((res.data.CommisionList.length - (i + 1)) == 0) {
            index = 'T日';
          }
          commisionIndex.push(index);
        }
        commisonArr = res.data.CommisionList;
        console.log(commisonArr);
       chart = loadYejiData(chartId, commisonArr, commisionIndex);  
      }
    }
  });
  return chart;
}

function loadYejiData(chartId, commisonArr, commisionIndex) {
  var chart = null;
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
  // //发送访问请求
  // var bankList = new Array();
  // wx.request({
  //   url: 'https://sinosoft-yhbxsyb.com/mobile-display/achieve/achieveTrack',
  //   data: {
  //     // agentcode: '01',
  //     // bankCode: ''
  //     agentcode: agentcode
  //   },
  //   header: {
  //     'content-type': 'application/json' // 默认值
  //   },

  //   success: function (res) {
  //     var commisionIndex = new Array();
  //     var commisonArr = new Array();
  //     for (let i = 0; i < res.data.product.length; i++) {
  //       riskNameArr.push(res.data.product[i].riskname);
  //       var index = 'T-'+i+'日';
  //       if(i==res.data.product.length){
  //           index='T日';
  //       }
  //       commisonArr.push(res.data.product[i].commision);
  //       commisionIndex.push(index);
  //     }
  var title = '直接业绩五日趋势图';
  var optionType = 'line';
  chart = loadOption(chartId,optionType, commisonArr, commisionIndex, title);
  //   }
  // });
  return chart;

}

function loadProductData(chartId, commisionProduct, policyyear) {
  var chart = null;
  console.log(commisionProduct);
  var title = '昨日业绩按业绩缴费次数分析';
  var optionType = 'column';
  chart = loadOption(chartId,optionType, commisionProduct, policyyear, title);
  return chart;
}

function loadOption(chartId,optionType, yData, xData, title) {
  var windowWidth = 320;
  try {
    var res = wx.getSystemInfoSync();
    windowWidth = res.windowWidth;
  } catch (e) {
    console.error('getSystemInfoSync failed!');
  }
  var chart = new wxcharts({
    title:title,
 
    canvasId: chartId,
    type: optionType,
    animation: true,
    categories: xData,
    title:{
      name: title,
      fontSize:20
    },
    series: [{
      color: "#3398DB",
      name: title,
      data: yData,
      format: function (val, name) {
        fontSize: 20
        return val;
      },
      fontSize: 20
    }],
    yAxis: {
      fontSize:20,
      format: function (val) {
        fontSize: 20
        return val;
      },
      min: 0,
    },
    xAxis: {
      fontSize: 20,
      disableGrid: false,
      
      type: 'calibration'
    },
    width: windowWidth,
    height:250,
  });
  return chart;
}

