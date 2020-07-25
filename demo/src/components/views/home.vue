<template>
    <div>
        <h1>欢迎光临本系统</h1>
<<<<<<< HEAD
        <div id="container"></div>
=======
>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
    </div>
</template>

<script>
<<<<<<< HEAD
//引入核心库
import eChart from 'echarts'
export default {
    data() {
        return {}
    },
    mounted() {
        //组件一加载就调取数据图表
        //初始化
        let echart = eChart.init(document.getElementById('container'))
        let option = {
            title:{
                text:'月访问量统计'
            },
            xAxis: {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [1820, 2932, 9401, 9534, 12690, 18330, 13720],
                    type: 'line'
                }
            ]
        }
        echart.setOption(option)
    }
}
</script>

<style  lang="stylus" scoped>
#container {
    width: 900px;
    height: 600px;
}
=======
export default {
    data() {
        return {

        };
    },
};
</script>

<style  lang="" scoped>

>>>>>>> e690d598025a76903db44d1bd40be9cb7c928883
</style>
