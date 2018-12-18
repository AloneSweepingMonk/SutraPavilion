import * as echarts from '../../ec-canvas/echarts';
var color = ['#FF4500', '#3398DB', '#666'];
const app = getApp();
var count=0;
var count1=0;
var shengjiArray= [
  {
    bankName: '当月FYC',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 32,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title:'32/100',
    color: 'green'
  },
  {
    bankName: '件数',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 50,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title: '50/100',
    color: 'green'
  },
  {
    bankName: '持续率',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 100,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title: '70/100',
    color: 'green'
  }
];

var shengjiArray1= [
  {
    bankName: '当月FYC',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 26.7,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title: '32/120'
  },
  {
    bankName: '件数',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 41.2,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title: '50/120'
  },
  {
    bankName: '持续率',
    bankNode: '',
    bankNodeName: '网点1',
    bankNodeCode: '',
    data: 58.3,
    day: 1.2,
    week: 1.2,
    month: -1.2,
    data1: 120,
    day1: 1.2,
    week1: -1.2,
    month1: 1.2,
    title: '70/120'

  }];
function initChart(canvas, width, height,index) {
  //console.log(height,index);
  var chartArr = new Array();
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  for (let i = 0; i < shengjiArray.length;i++){
    
    canvas.setChart(chart);
    var option = {
      animation: false,
      backgroundColor: '#fff',
      title: {
        "text": shengjiArray[count].title,
        "top": '95%',
        "left": 'center',
        "textStyle": {
          "fontSize": 13,
          "color": "red"
        }
      },
      tooltip: {
      },

      series: [{
        name: shengjiArray[count].bankName,
        type: 'pie',
        radius: ['80%', '90%'],
        center: ['50%', '50%'],
        color: color[count],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: shengjiArray[count].data,
          name: shengjiArray[count].bankName,

          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 14
              }
            }
          },
          // tooltip: {
          //   trigger: 'item',
          //   formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 吊销注销数 : {c}"
          // }
        }, {
            value: 100 - shengjiArray[count].data,
          name: '其他类型数',
          label: {
            normal: {
              formatter: '\n'+shengjiArray[count].bankName,
              textStyle: {
                color: '#555',
                fontSize: 13
              }
            }
          },
          markPoint:{
            data:[{
              name: '10000/70000'
            }]
            
          },
          itemStyle: {
            normal: {
              color: '#aaa'
            },
            emphasis: {
              color: '#aaa'
            }
          },
        }]
      }
      ]
    };
    chart.setOption(option, true);
    chartArr.push(count);
  }
  if (count < shengjiArray.length){
    count++;
  }
  console.log("chart"+chartArr);
  return chart;
}

function initChart1(canvas, width, height) {

  //console.log(height, index);
  var chartArr = new Array();
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  for (let i = 0; i < shengjiArray1.length; i++) {

    canvas.setChart(chart);
    var option = {
      animation: false,
      backgroundColor: '#fff',
      title: {
        "text": shengjiArray1[count1].title,
        "top": '95%',
        "left": 'center',
        "textStyle": {
          "fontSize": 12,
          "color": "red"
        }
      },
      tooltip: {
      },

      series: [{
        name: shengjiArray1[count1].bankName,
        type: 'pie',
        radius: ['80%', '90%'],
        center: ['50%', '50%'],
        color: color[count1],
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: shengjiArray1[count1].data,
          name: shengjiArray1[count1].bankName,

          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 14
              }
            }
          },
          // tooltip: {
          //   trigger: 'item',
          //   formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 吊销注销数 : {c}"
          // }
        }, {
          value: 100 - shengjiArray1[count1].data,
          name: '其他类型数',
          label: {
            normal: {
              formatter: '\n' + shengjiArray1[count1].bankName,
              textStyle: {
                color: '#555',
                fontSize: 13
              }
            }
          },
          markPoint: {
            data: [{
              name: '10000/70000'
            }]

          },
          itemStyle: {
            normal: {
              color: '#aaa'
            },
            emphasis: {
              color: '#aaa'
            }
          },
        }]
      }
      ]
    };
    chart.setOption(option, true);
    chartArr.push(count);
  }
  if (count < shengjiArray.length) {
    count++;
  }
  if (count1 < shengjiArray.length) {
    count1++;
  }
  console.log("chart" + chartArr);
  return chart;
}

function initChart2(canvas, width, height) {
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var option = {
    color: ['#3398DB'],
    title: {
      text: '直接业绩五日趋势图',
      textStyle: {
        fontSize: 12,
      },
      textAlign: 'tight',
      x: 'center'
    },

    // tooltip: {
    //   trigger: 'axis',
    // },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['T-4日', 'T-3日', 'T-2日', 'T-1日', 'T日'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],

    yAxis: [{
      type: 'value'
    }],

    series: [{
      name: '直接业绩五日趋势图',
      type: 'line',
      barWidth: '40%',
      data: ['100000', '200000', '30000', '70000', '10000'],
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
    }
    ]
  }

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    scrollLeft:0,
    height: '500rpx',
   
    ec:{
      onInit: initChart
      
      },

    ec1: {
      onInit: initChart1
    },
    shengjiArray:[
      {
        bankName: '当月FYC',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 80,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '80/100',
        color: '#27C412'
      },
      {
        bankName: '件数',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 60,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '60/100',
        color: '#27C412'
      },
      {
        bankName: '持续率',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 70,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '70/100',
        color: '#27C412'
      }
    ],
    shengjiArray1:[
      {
        bankName: '当月FYC',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 67,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '80/120',
        color: '#3398DB'
      },
      {
        bankName: '件数',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 50,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '60/120',
        color: '#3398DB'
      },
      {
        bankName: '持续率',
        bankNode: '',
        bankNodeName: '网点1',
        bankNodeCode: '',
        data: 58,
        day: 1.2,
        week: 1.2,
        month: -1.2,
        data1: 120,
        day1: 1.2,
        week1: -1.2,
        month1: 1.2,
        title: '70/120',
        color: '#3398DB'

      }]

  },

  onLoad: function (options) {
    
    // var percent = 0;
    // var loading = setInterval(function () {
    //   if (percent > 100) {
    //     percent = 0;
    //     $('.circle').removeClass('clip-auto');
    //     $('.right').addClass('wth0');
    //   } else if (percent > 50) {
    //     $('.circle').addClass('clip-auto');
    //     $('.right').removeClass('wth0');
    //   }
    //   $('.left').css("-webkit-transform", "rotate(" + (18 / 5) * percent + "deg)");
    //   $('.num>span').text(percent);
    //   percent++;
    // }, 200);

  },

  onReady: function () {
    var pixelRatio = 2;
    // 页面渲染完成 
    for (let i = 0; i < this.data.shengjiArray.length;i++){
      var text = this.data.shengjiArray[i].data+'%';
      var cxt_arc = wx.createCanvasContext(this.data.shengjiArray[i].bankName);//创建并返回绘图上下文context对象。 
      cxt_arc.setFillStyle('#FFFFFF');
      cxt_arc.fillRect(0, 0, 80,80);
      
    cxt_arc.setLineWidth(10);
    cxt_arc.setStrokeStyle('#d2d2d2');
    //添加文字

    cxt_arc.setFillStyle('#000000');
    cxt_arc.setTextAlign('center');
    cxt_arc.setFontSize(15);
    cxt_arc.setTextBaseline('middle');
    cxt_arc.fillText(this.data.shengjiArray[i].bankName, 70, 40, 70);

    
 
    cxt_arc.setFillStyle('#27C412');
    cxt_arc.setTextAlign('center');
    cxt_arc.setFontSize(40);
    cxt_arc.setTextBaseline('middle');
    cxt_arc.fillText(text,75, 80,70);
    

    cxt_arc.setFillStyle('#27C412');
    cxt_arc.setTextAlign('center');
    cxt_arc.setFontSize(12);
    cxt_arc.setTextBaseline('middle');
    cxt_arc.fillText(this.data.shengjiArray[i].title, 70, 150, 70);

    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(70, 65, 60, 0, 2 * Math.PI, false);//设置一个原点(106,106)，半径为100的圆的路径到当前路径 
    cxt_arc.stroke();//对当前路径进行描边 

    cxt_arc.setLineWidth(10);
    cxt_arc.setStrokeStyle('#27C412');
    cxt_arc.setLineCap('square')
    cxt_arc.beginPath();//开始一个新的路径 
    cxt_arc.arc(70, 65, 60, -Math.PI * 1 / 2, Math.PI * this.data.shengjiArray[i].data/100, false);
   cxt_arc.stroke();//对当前路径进行描边 

   cxt_arc.draw(); 
  }

    // 页面渲染完成 
    for (let i = 0; i < this.data.shengjiArray1.length; i++) {
      var text = this.data.shengjiArray1[i].data + '%';
      var cxt_arc = wx.createCanvasContext(this.data.shengjiArray1[i].data);//创建并返回绘图上下文context对象。 
      cxt_arc.setFillStyle('#FFFFFF');
      cxt_arc.fillRect(0, 0, 80, 80);
      cxt_arc.setLineWidth(10);
      cxt_arc.setStrokeStyle('#d2d2d2');
      cxt_arc.setLineCap('square')
      cxt_arc.beginPath();//开始一个新的路径 
      cxt_arc.arc(70, 65, 60, 0, 2 * Math.PI, false);//设置一个原点(106,106)，半径为100的圆的路径到当前路径 
      cxt_arc.stroke();//对当前路径进行描边 

      cxt_arc.setLineWidth(10);
      cxt_arc.setStrokeStyle('#3398DB');
      cxt_arc.setLineCap('square')
      cxt_arc.beginPath();//开始一个新的路径 
      cxt_arc.arc(70, 65, 60, -Math.PI * 1 / 2, Math.PI * this.data.shengjiArray1[i].data / 100, false);
      cxt_arc.stroke();//对当前路径进行描边 

      //添加文字

      cxt_arc.setFillStyle('#000000');
      cxt_arc.setTextAlign('center');
      cxt_arc.setFontSize(15);
      cxt_arc.setTextBaseline('middle');
      cxt_arc.fillText(this.data.shengjiArray1[i].bankName, 70, 40, 70);
    


      cxt_arc.setFillStyle('#3398DB');
      cxt_arc.setTextAlign('center');
      
      cxt_arc.setTextBaseline('middle');
     
      if (text.length > 3) {
        cxt_arc.setFontSize(40);
        cxt_arc.fillText(text, 90, 80, 80);
      }else{
        cxt_arc.setFontSize(40);
        cxt_arc.fillText(text, 75, 80, 70);
      }

      cxt_arc.setFillStyle('#3398DB');
      cxt_arc.setTextAlign('center');
      cxt_arc.setFontSize(12);
      cxt_arc.setTextBaseline('middle');
      cxt_arc.fillText(this.data.shengjiArray1[i].title, 70, 150, 70);
      cxt_arc.draw();
    }
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

//滑动
  scroll: function (e) {
    console.log(e);
    var scrollLeft = e.detail.scrollLeft;
    this.setData({ scrollLeft: scrollLeft })
  },
})

  // , {
  //   name: '航段数',
  //   type: 'pie',
  //   radius: ['87%', '90%'],
  //   center: ['70%', '50%'],
  //   color: '#473C8B',
  //   label: {
  //     normal: {
  //       position: 'center'
  //     }
  //   },
  //   data: [{
  //     value: 54,
  //     name: '航段数',

  //     label: {
  //       normal: {
  //         formatter: '{d} %',
  //         textStyle: {
  //           fontSize: 18
  //         }
  //       }
  //     },
  //     tooltip: {
  //       trigger: 'item',
  //       formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}"
  //     }
  //   }, {
  //     value: 46,
  //     name: '其他类型数',
  //     label: {
  //       normal: {
  //         formatter: '\n航段数',
  //         textStyle: {
  //           color: '#555',
  //           fontSize: 13
  //         }
  //       }
  //     },
  //     itemStyle: {
  //       normal: {
  //         color: '#aaa'
  //       },
  //       emphasis: {
  //         color: '#aaa'
  //       }
  //     },
  //   }]
  // }