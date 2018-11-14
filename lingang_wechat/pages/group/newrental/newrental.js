import F2 from '../../../f2-canvas/lib/f2';

let chart = null;

function initChart(canvas, width, height) {
  var Shape = F2.Shape;
var Util = F2.Util;
var Global = F2.Global;
var data = [{
  name: '已完成',
  value: 850
},  {
  name: '未完成',
  value: 150
}];
   chart = new F2.Chart({
    el: canvas,
    width: width,
    height: height,
    padding: [80,40,80,120],
    pixelRatio: F2.Global.pixelRatio
  });
chart.source(data,{
      value: {
      // tickInterval: 700,
      tickCount: 5,
      min: 0,
      max: 1000,
      formatter: function formatter(val) {
        console.log(val);
        return (val/1000*100).toFixed(0) + '%';
      }
    },
    // date: {
    //   type: 'timeCat',
    //   range: [0, 1],
    //   tickCount: 5
    // }
});
chart.coord({
  transposed: true
});
chart.axis('name', {
     labelOffset: 20,
    line: null,
    grid: null,
    label:{
      fill: "white"
    }
});
chart.axis('value', {
      line: {
      lineWidth: 1,
      stroke: '#2d2f34',
      top: true, // 展示在最上层
    },
    grid: {
      lineWidth: 1,
      stroke: '#2d2f34',
    },
  label: function label(text, index, total) {
    var textCfg = {};
    if (index === 0) {
      textCfg.textAlign = 'left';
    } else if (index === total - 1) {
      textCfg.textAlign = 'right';
    }
    return textCfg;
  }
});
  chart.legend({
    align: 'center',
    itemWidth: null // 图例项按照实际宽度渲染
    
  })
chart.interval().size(15).color('name',["#afa9ff","#33d6c5","#fe8081","#ffc65d",]).position('name*value');

// 绘制文本
data.map(function(obj) {
  chart.guide().text({
    position: [obj.name, obj.value],
    content: (obj.value/1000*100)+"%",
    style: {
      textAlign: 'start'
    },
    offsetX: 10
  });
});
chart.render();
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      // title: 'F2 微信小程序图表组件，你值得拥有~',
      // path: '/pages/index/index',
      // success: function () { },
      // fail: function () { }
    }
  },
  data: {
    opts: {
      onInit: initChart
    },
    title: "集团关注"
  },

  onReady() {
  },
  onLoad: function(){
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title//页面标题为路由参数
    })
  }
});
