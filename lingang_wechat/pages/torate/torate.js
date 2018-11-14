import F2 from '../../f2-canvas/lib/f2';

let chart = null;



Page({
  loadClassData() {
    return new Promise((reslove, reject) => {
      // console.log(9999);
      var that = this;
      wx.request({
        url: "https://lingang.ycode.cn/mgr/rest/lgProjectInvestmentController/getInvestmentAreaInfo",
        method: 'GET',
        data: {
          // "X-AUTH-TOKEN": "",
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          // console.log(res.data.data);
          that.setData({
            classInfo: res.data.data,
          })
          reslove(res.data.data)
        }
      });
    })

  },
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
      // onInit: initChart
    },
    title: "招商去化率",
    classInfo: {}
  },

  onReady() {
  },
  onLoad: function () {
    var that = this;
    // 

    function initChart(canvas, width, height) {

      that.loadClassData().then(d => {
        console.log(d);
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
                x: points[1].x +15, // 往上偏移 5 像素
                // y: (points[1].y + points[2].y + points[3].y + points[4].y) / 4,
                y: points[1].y - 2,
                text: origin['value'] + '%',
                fill: '#7A7980',
                textAlign: 'center',
                textBaseline: 'bottom',
                fontSize: 10 // 字体大小
              }
            });
            container.sort();
            return [intervalShape, textShape];
          }
        });

        var data = [
        ];
        for (let i = 0; i < 4; i++) {
          let j = 0
          let obj = {};
          let obj1 = {};
          let obj2 = {};
          let obj3 = {};
          obj.label = d[i].companyName;
          obj.type = '计划年度';
          obj.value = d[i].planYearLeaseRate;
          data.push(obj);
          obj1.label = d[i].companyName;
          obj1.type = '当月计划';
          obj1.value = d[i].planMonthLeaseRate;
          data.push(obj1);
          obj2.label = d[i].companyName;
          obj2.type = '当年累计';
          obj2.value = d[i].yearLeaseRate;
          data.push(obj2);
          obj3.label = d[i].companyName;
          obj3.type = '当月实际';
          obj3.value = d[i].monthLeaseRate;
          data.push(obj3);
        }
        var chart = new F2.Chart({
          el: canvas,
          width: width,
          height: height,
          padding: [70, 40, 80, 80],
          pixelRatio: F2.Global.pixelRatio
        });

        chart.source(data.reverse(), {
          value: {
            // tickInterval: 700,
            tickCount: 6,
            min: 0,
            max: 100,
            formatter: function formatter(val) {
              // console.log(val);
              return (val).toFixed(0) + '%';
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
          labelOffset: 20,
          line: null,
          grid: null,
          label: {
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
        chart.interval().size(15).position('label*value').color('type', ["#afa9ff", "#33d6c5", "#fe8081", "#ffc65d",]).shape('text').adjust({
          type: 'dodge',
          marginRatio: 0.5
        });
        chart.interval().size(15).position('label*value').color('type', ["#afa9ff", "#33d6c5", "#fe8081", "#ffc65d",]).adjust({
          type: 'dodge',
          marginRatio: 0.5
        });
        // 添加单位
        // chart.guide().text({
        //   position: ['min', 'max'],
        //   content: '单位（万元）',
        //   style: {
        //     textBaseline: 'middle',
        //     textAlign: 'center'
        //   },
        //   offsetY: -400
        // });
        // 柱状图添加文本
        // data.map(function (obj) {
        //   console.log(obj.label);
        //   chart.guide().text({
        //     position: [obj.label, obj.value],
        //     content: obj.value,
        //     style: {
        //       textBaseline: 'bottom',
        //       textAlign: 'center',
        //       fill:'#fff',
        //       fontWeight: 'lighter'
        //     },
        //     offsetY: 10
        //   });
        // });
        chart.render();
      })


    }

    this.setData({
      opts: {
        onInit: initChart
      }
    })

    // this.loadClassData();
    wx.setNavigationBarTitle({
      title: that.data.title //页面标题为路由参数
    })
  },
});