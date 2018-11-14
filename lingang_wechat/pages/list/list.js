
// var  downImg = '../../images/down.png';
// var  rightImg = '../../images/right.png';
Page({
    data: {
        title: "数据统计",
        name: "name1",
        showGroup: true,
    },
    onLoad: function() {
        var that = this;
        wx.setNavigationBarTitle({
            title: that.data.title//页面标题为路由参数
          })
    },
    groupChange:function(){

        var that=this;
        that.setData({
            showGroup:(!that.data.showGroup)
        })
    }
    
})