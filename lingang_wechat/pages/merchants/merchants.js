// import F2 from '../../f2-canvas/lib/f2';

// let chart = null;

// function initChart(canvas, width, height) {
//   var Shape = F2.Shape;
// var Util = F2.Util;
// Shape.registerShape('interval', 'text', {
//   draw: function draw(cfg, container) {
//     var points = this.parsePoints(cfg.points);
//     // points 顶点的顺序
//     // 1 ---- 2
//     // |      |
//     // 0 ---- 3
//     var style = Util.mix({
//       fill: cfg.color,
//       z: true // 需要闭合
//     }, cfg.style);
//     var intervalShape = container.addShape('rect', {
//       attrs: Util.mix({
//         x: points[1].x,
//         y: points[1].y,
//         width: points[2].x - points[1].x,
//         height: points[0].y - points[1].y
//       }, style)
//     });

//     var origin = cfg.origin._origin; // 获取对应的原始数据记录
//     var textShape = container.addShape('text', {
//       zIndex: 1,
//       attrs: {
//         x: points[1].x - 5,// 往上偏移 5 像素
//         y: (points[1].y + points[2].y + points[3].y + points[4].y) / 4, 
//         text: origin['value'],
//         fill: 'red',
//         textAlign: 'right',
//         textBaseline: 'bottom',
//         fontSize: 10 // 字体大小
//       }
//     });
//     container.sort();
//     return [intervalShape, textShape];
//   }
// });
//   var data = [{
//     label: '宝山城工',
//     type: '累计已完成',
//     value: 4000
//   }, {
//     label: '宝山城工',
//     type: '当年已完成',
//     value: 260
//   },{
//     label: '宝山城工',
//     type: '当月计划',
//     value: 200
//   }, {
//     label: '宝山城工',
//     type: '当月已完成',
//     value: 260
//   }, {
//     label: '虹口虹信',
//     type: '累计已完成',
//     value: 2000
//   }, {
//     label: '虹口虹信',
//     type: '当年已完成',
//     value: 260
//   },{
//     label: '虹口虹信',
//     type: '当月计划',
//     value: 200
//   }, {
//     label: '虹口虹信',
//     type: '当月已完成',
//     value: 1260
//   },{
//     label: '宝山宏慧',
//     type: '累计已完成',
//     value: 400
//   }, {
//     label: '宝山宏慧',
//     type: '当年已完成',
//     value: 260
//   },{
//     label: '宝山宏慧',
//     type: '当月计划',
//     value: 1200
//   }, {
//     label: '宝山宏慧',
//     type: '当月已完成',
//     value: 260
//   },{
//     label: '静安尚影',
//     type: '累计已完成',
//     value: 400
//   }, {
//     label: '静安尚影',
//     type: '当年已完成',
//     value: 1260
//   },{
//     label: '静安尚影',
//     type: '当月计划',
//     value: 200
//   }, {
//     label: '静安尚影',
//     type: '当月已完成',
//     value: 260
//   },];
//   // var data = [{
//   //   label: '春禾',
//   //   type: '计划年度',
//   //   value: 600
//   // }, {
//   //   label: '春禾',
//   //   type: '当年累计',
//   //   value: 260
//   // },{
//   //   label: '春禾',
//   //   type: '当月计划',
//   //   value: 200
//   // }, {
//   //   label: '春禾',
//   //   type: '当月实际',
//   //   value: 260
//   // },{
//   //   label: '翎消',
//   //   type: '计划年度',
//   //   value: 600
//   // }, {
//   //   label: '翎消',
//   //   type: '当年累计',
//   //   value: 260
//   // },{
//   //   label: '翎消',
//   //   type: '当月计划',
//   //   value: 200
//   // }, {
//   //   label: '翎消',
//   //   type: '当月实际',
//   //   value: 260
//   // },{
//   //   label: '虹信',
//   //   type: '计划年度',
//   //   value: 600
//   // }, {
//   //   label: '虹信',
//   //   type: '当年累计',
//   //   value: 260
//   // },{
//   //   label: '虹信',
//   //   type: '当月计划',
//   //   value: 200
//   // }, {
//   //   label: '虹信',
//   //   type: '当月实际',
//   //   value: 260
//   // },{
//   //   label: '尚影',
//   //   type: '计划年度',
//   //   value: 600
//   // }, {
//   //   label: '尚影',
//   //   type: '当年累计',
//   //   value: 260
//   // },{
//   //   label: '尚影',
//   //   type: '当月计划',
//   //   value: 200
//   // }, {
//   //   label: '尚影',
//   //   type: '当月实际',
//   //   value: 260
//   // },,{
//   //   label: '宏慧',
//   //   type: '计划年度',
//   //   value: 600
//   // }, {
//   //   label: '宏慧',
//   //   type: '当年累计',
//   //   value: 260
//   // },{
//   //   label: '宏慧',
//   //   type: '当月计划',
//   //   value: 200
//   // }, {
//   //   label: '宏慧',
//   //   type: '当月实际',
//   //   value: 260
//   // }];
//   var chart = new F2.Chart({
//     el: canvas,
//     width: width,
//     height: height,
//     padding: [80,40,80,80],
//     pixelRatio: F2.Global.pixelRatio
//   });

//   chart.source(data.reverse(), {
//     value: {
//       // tickInterval: 700,
//       tickCount: 5,
//       min: 0,
//       max: 6000,
//       // formatter: function formatter(val) {
//       //   console.log(val);
//       //   return (val/6000*100).toFixed(0) + '%';
//       // }
//     },
//     // date: {
//     //   type: 'timeCat',
//     //   range: [0, 1],
//     //   tickCount: 5
//     // }
//   });
//   chart.coord({
//     transposed: true
//   });


//   chart.axis('label', {
//     labelOffset: 20,
//     line: null,
//     grid: null,
//     label:{
//       fill: "white"
//     }
//   });
//   chart.axis('value', {
//     line: {
//       lineWidth: 1,
//       stroke: '#2d2f34',
//       top: true, // 展示在最上层
//     },
//     grid: {
//       lineWidth: 1,
//       stroke: '#2d2f34',
//     },
//     label: function label(text, index, total) {
//       var textCfg = {};
//       if (index === 0) {
//         textCfg.textAlign = 'left';
//       } else if (index === total - 1) {
//         textCfg.textAlign = 'right';
//       }
//       return textCfg;
//     }
//   });
//   chart.legend({
//     align: 'center',
//     itemWidth: null // 图例项按照实际宽度渲染

//   })
//   chart.interval().size(15).position('label*value').color('type',["#afa9ff","#33d6c5","#fe8081","#ffc65d",]).adjust({
//     type: 'dodge',
//     marginRatio: 16 / 32
//   });
// // 添加单位
//   // chart.guide().text({
//   //   position: ['min', 'max'],
//   //   content: '单位（万元）',
//   //   style: {
//   //     textBaseline: 'middle',
//   //     textAlign: 'center'
//   //   },
//   //   offsetY: -400
//   // });
//   // 柱状图添加文本
// // data.map(function(obj) {
// //   chart.guide().text({
// //     position: [obj.type, obj.value],
// //     content: obj.value,
// //     style: {
// //       textAlign: 'center',
// //       textBaseline: 'bottom'
// //     },
// //     offsetY: 20,
// //   });
// // });
//   chart.render();
//   return chart;
// }

// Page({
//   onShareAppMessage: function (res) {
//     return {
//       // title: 'F2 微信小程序图表组件，你值得拥有~',
//       // path: '/pages/index/index',
//       // success: function () { },
//       // fail: function () { }
//     }
//   },
//   data: {
//     opts: {
//       onInit: initChart
//     },
//     title: "招商回款"
//   },

//   onReady() {
//   },
//   onLoad: function(){
//     var that = this;
//     wx.setNavigationBarTitle({
//       title: that.data.title//页面标题为路由参数
//     })
//   }
// });
import F2 from '../../f2-canvas/lib/f2';

let chart = null;



Page({
  loadClassData() {
    return new Promise((reslove, reject) => {
      // console.log(9999);
      var that = this;
      wx.request({
        url: "https://lingang.ycode.cn/mgr/rest/lgProjectInvestmentController/getInvestmentReturnInfo",
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
          // console.log(that.data.classInfo, "111");
          // wx.setStorageSync('classInfo', that.data.classInfo[0].);
          // console.log(444);
          reslove(res.data.data)
        }
      });
      // console.log(this.data.classInfo)
      // console.log(555)
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
    title: "招商回款",
    classInfo: {}
  },

  onReady() {
    // console.log(10);
    // console.log(this.data.classInfo, "222");
    // setTimeout(console.log(this.data.classInfo, "666"),1000);

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
                x: points[1].x + 15, // 往上偏移 5 像素
                // y: (points[1].y + points[2].y + points[3].y + points[4].y) / 4,
                y: points[1].y - 2,
                text: origin['value'],
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
          // {
          //   label: '宝山城工',
          //   type: '累计已完成',
          //   value: 4000
          // }, {
          //   label: '宝山城工',
          //   type: '当年已完成',
          //   value: 260
          // }, {
          //   label: '宝山城工',
          //   type: '当月计划',
          //   value: 200
          // }, {
          //   label: '宝山城工',
          //   type: '当月已完成',
          //   value: 260
          // }, {
          //   label: '虹口虹信',
          //   type: '累计已完成',
          //   value: 2000
          // }, {
          //   label: '虹口虹信',
          //   type: '当年已完成',
          //   value: 260
          // }, {
          //   label: '虹口虹信',
          //   type: '当月计划',
          //   value: 200
          // }, {
          //   label: '虹口虹信',
          //   type: '当月已完成',
          //   value: 1260
          // }, {
          //   label: '宝山宏慧',
          //   type: '累计已完成',
          //   value: 400
          // },
        ];
        for (let i = 0; i < 4; i++) {
            let j = 0
            let obj = {};
            let obj1 = {};
            let obj2 = {};
            let obj3 = {};
            obj.label = d[i].companyName;
            obj.type = '计划年度';
            obj.value = d[i].planYearReturn;
            data.push(obj);
            obj1.label = d[i].companyName;
            obj1.type = '当月计划';
            obj1.value = d[i].planMonthReturn;
            data.push(obj1);
            obj2.label = d[i].companyName;
            obj2.type = '当年累计';
            obj2.value = d[i].yearReturn;
            data.push(obj2);
            obj3.label = d[i].companyName;
            obj3.type = '当月实际';
            obj3.value = d[i].monthReturn;
            data.push(obj3);
            // console.log(data);      

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
              tickCount: 7,
              min: 0,
              max: 3000,
              formatter: function formatter(val) {
                // console.log(val);
                return (val).toFixed(0) + '';
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
          // data.map(function(obj) {
          //   chart.guide().text({
          //     position: [obj.type, obj.value],
          //     content: obj.value,
          //     style: {
          //       textAlign: 'center',
          //       textBaseline: 'bottom'
          //     },
          //     offsetY: 20,
          //   });
          // });
          chart.render();
          return chart;
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
    // console.log(this.data.classInfo, "333")
  },
});