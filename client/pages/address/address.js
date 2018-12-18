import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, height, width) {
  var chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  option = {
    title: {
      text: '降水量',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    visualMap: {
      min: 0,
      max: 1000,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      calculable: true
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        saveAsImage: {}
      }
    },
    animation: true,
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    series: [
      {
        name: 'a',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              var icon = params.data.value[1] ? 'up' : 'down';
              var valueType = params.data.value[1] ? 'valueUp' : 'valueDown';
              return params.name
                + '：{' + valueType + '|' + params.value + '} {' + icon + '|}';
            },
            position: 'inside',
            backgroundColor: '#fff',
            padding: [4, 5],
            borderRadius: 3,
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.5)',
            color: '#777',
            rich: {
              valueUp: {
                color: '#019D2D',
                fontSize: 14
              },
              valueDown: {
                color: 'red',
                fontSize: 14
              },
              up: {
                height: 14,
                align: 'center',
                backgroundColor: {
                  // image: weatherIcons.up
                }
              },
              down: {
                height: 14,
                align: 'center',
                backgroundColor: {
                  // image: weatherIcons.down
                }
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        data: [
          { name: '北京', value: randomData() },
          { name: '天津', value: randomData() },
          { name: '上海', value: randomData() },
          { name: '重庆', value: randomData() },
          { name: '河北', value: randomData() },
          { name: '河南', value: randomData() },
          { name: '云南', value: randomData() },
          { name: '辽宁', value: randomData() },
          { name: '黑龙江', value: randomData() },
          { name: '湖南', value: randomData() },
          { name: '安徽', value: randomData() },
          { name: '山东', value: randomData() },
          { name: '新疆', value: randomData() },
          { name: '江苏', value: randomData() },
          { name: '浙江', value: randomData() },
          { name: '江西', value: randomData() },
          { name: '湖北', value: randomData() },
          { name: '广西', value: randomData() },
          { name: '甘肃', value: randomData() },
          { name: '山西', value: randomData() },
          { name: '内蒙古', value: randomData() },
          { name: '陕西', value: randomData() },
          { name: '吉林', value: randomData() },
          { name: '福建', value: randomData() },
          { name: '贵州', value: randomData() },
          { name: '广东', value: randomData() },
          { name: '青海', value: randomData() },
          { name: '西藏', value: randomData() },
          { name: '四川', value: randomData() },
          { name: '宁夏', value: randomData() },
          { name: '海南', value: randomData() },
          { name: '台湾', value: randomData() },
          { name: '香港', value: randomData() },
          { name: '澳门', value: randomData() }
        ]
      }
    ]
  };
  chart.setOption(option);

  return chart;

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
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

  }
})