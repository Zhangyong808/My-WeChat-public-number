import F2 from '../../f2-canvas/lib/f2';

let chart = null;

function initChart(canvas, width, height) {
  var data = [{
    label: '宝山城工',
    type: '累计已完成',
    value: 4000
  }, {
    label: '宝山城工',
    type: '当年已完成',
    value: 260
  },{
    label: '宝山城工',
    type: '当月计划',
    value: 200
  }, {
    label: '宝山城工',
    type: '当月已完成',
    value: 260
  }, {
    label: '虹口虹信',
    type: '累计已完成',
    value: 2000
  }, {
    label: '虹口虹信',
    type: '当年已完成',
    value: 260
  },{
    label: '虹口虹信',
    type: '当月计划',
    value: 200
  }, {
    label: '虹口虹信',
    type: '当月已完成',
    value: 1260
  },{
    label: '宝山宏慧',
    type: '累计已完成',
    value: 400
  }, {
    label: '宝山宏慧',
    type: '当年已完成',
    value: 260
  },{
    label: '宝山宏慧',
    type: '当月计划',
    value: 1200
  }, {
    label: '宝山宏慧',
    type: '当月已完成',
    value: 260
  },{
    label: '静安尚影',
    type: '累计已完成',
    value: 400
  }, {
    label: '静安尚影',
    type: '当年已完成',
    value: 1260
  },{
    label: '静安尚影',
    type: '当月计划',
    value: 200
  }, {
    label: '静安尚影',
    type: '当月已完成',
    value: 260
  },];
  var chart = new F2.Chart({
    el: canvas,
    width: width,
    height: height,
    padding: [80,40,80,80],
    pixelRatio: F2.Global.pixelRatio
  });
  
  chart.source(data.reverse(), {
    value: {
      tickInterval: 750
    }
  });
  chart.coord({
    transposed: true
  });
  
  
  chart.axis('label', {
    labelOffset: 30,
    line: null,
    grid: null
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
    
  })
  chart.interval().size(10).position('label*value').color('type',["#ffc65d","#33d6c5","#fe8081","#afa9ff",]).adjust({
    type: 'dodge',
    marginRatio: 1 / 32
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
    title: "123"
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
