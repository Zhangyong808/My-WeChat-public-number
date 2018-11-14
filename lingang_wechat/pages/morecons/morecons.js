import F2 from '../../f2-canvas/lib/f2';

let chart = null;

function initChart(canvas, width, height) {
  var Shape = F2.Shape;
  var Util = F2.Util;
  Shape.registerShape('interval', 'text', {
    draw: function draw(cfg, container) {
      var points = this.parsePoints(cfg.points);
      // points 顶点的顺序
      // 1 ---- 2
      // |      |
      // 0 ---- 3
      var style = Util.mix({
        fill: cfg.color,
        z: true // 需要闭合
      }, cfg.style);
      var intervalShape = container.addShape('rect', {
        attrs: Util.mix({
          x: points[1].x,
          y: points[1].y,
          width: points[2].x - points[1].x,
          height: points[0].y - points[1].y
        }, style)
      });

      var origin = cfg.origin._origin; // 获取对应的原始数据记录
      var textShape = container.addShape('text', {
        zIndex: 1,
        attrs: {
          x: points[1].x - 5,// 往上偏移 5 像素
          y: (points[1].y + points[2].y + points[3].y + points[4].y) / 4,
          text: origin['value'],
          fill: 'red',
          textAlign: 'right',
          textBaseline: 'bottom',
          fontSize: 20 // 字体大小
        }
      });
      container.sort();
      return [textShape, intervalShape];
    }
  });
  var data = [{
    label: '租聘面积',
    type: '计划目标',
    value: 3000
  }, {
    label: '租聘面积',
    type: '已完成数额',
    value: 2600
  }, {
    label: '销售面积',
    type: '计划目标',
    value: 2300
  }, {
    label: '销售面积',
    type: '已完成数额',
    value: 2000
  }];
  var chart = new F2.Chart({
    el: canvas,
    width: width,
    height: height,
    padding: [80, 20, 20, 100],
    // fontSize:45,
    pixelRatio: F2.Global.pixelRatio
  });

  chart.source(data.reverse(), {
    value: {
      // tickInterval: 700,
      tickCount: 5,
      min: 0,
      max: 6000,
      formatter: function formatter(val) {
        console.log(val);


        return (val / 6000 * 100).toFixed(0) + '%';
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


  chart.axis('label', {
    labelOffset: 10,
    line: null,
    grid: null,
    label: {
      fill: "white",
      fontSize: 13,
      // position:'relative'
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
  chart.interval().size(15).position('label*value').color('type', ["#FE7F83", "#30D6C5"]).adjust({
    type: 'dodge',
    marginRatio: 1 / 32
  });
  // 添加单位

  // 柱状图添加文本
  // data.map(function(obj) {
  //   chart.guide().text({
  //     position: [obj.type, obj.value],
  //     content: obj.value,
  //     style: {
  //       textAlign: 'center',
  //       textBaseline: 'bottom',
  //       fontSize:'20px'
  //     },
  //     offsetY: 100,
  //   });
  // });
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
    title: "租售面积"
  },

  onReady() {
  },
  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title//页面标题为路由参数
    })
  }
});