<script setup>
import {onMounted, ref, watch} from "vue";
import * as echarts from "echarts";
import axios from "axios";

const roseChartRef = ref(null);
const barChartRef = ref(null);
const calenderChartRef = ref(null);

const yearData = ref([]);
const calenderData = ref([]);

let yearArray = [];
for (let i = 1920; i <= 2010; i += 10) {
  yearArray.push(i);
}

function getVirtualData(year) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      calenderData.value.find(item => item.date === echarts.time.format(time, '{yyyy}-{MM}-{dd}', false))?.count || 0
    ]);
  }
  return data;
}

onMounted(() => {
  fetchData();
})


const formattedData = ref([]);

const fetchData = async () => {
  try {
    // 获取点评类型统计数据
    const genreResponse = await axios.get("/api/getMovieCountsOfGenre", {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    formattedData.value = genreResponse.data
        .map(item => ({value: item.count, name: item.name}))
        .sort((a, b) => b.value - a.value);
    console.log(formattedData.value);


    // 获取点评电影年份统计数据
    const yearResponse = await axios.get("/api/getMovieCountByYear", {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    yearData.value = yearResponse.data;

    // 获取历史浏览活跃度统计数据
    const calenderResponse = await axios.get("/api/historyCounts", {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    calenderData.value = calenderResponse.data;

  } catch (e) {
    console.log(e);
  }
}

// onMounted(fetchData);

// 点评类型统计玫瑰图初始化
watch(formattedData, (newVal) => {
  if (roseChartRef.value && newVal.length > 0) {
    const roseChart = echarts.init(roseChartRef.value);

    const genreOption = {
      title: {
        text: '点评类型统计'
      },
      tooltip: {},
      series: [
        {
          name: '类型统计',
          type: 'pie',
          radius: [20, 130],
          center: ['50%', '50%'],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5,
            emphasis: {
              focus: 'data', // 设置每个扇形块之间的间隙
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data: newVal
        }
      ]
    };

    roseChart.setOption(genreOption);
  }
});

// 点评电影年份统计柱状图初始化
watch(yearData, (newVal) => {
  if (barChartRef.value && newVal.length > 0) {
    const barChart = echarts.init(barChartRef.value);
    const filteredData = newVal.filter((value, index) => value !== 0);
    const filteredLabels = yearArray.filter((label, index) => newVal[index] !== 0);
    const barOption = {
      title: {
        text: '年份统计'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: filteredLabels
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        itemStyle: {
          borderRadius: 3,
          emphasis: {
            focus: 'data', // 设置每个扇形块之间的间隙
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        data: filteredData,
        type: 'bar',
        label: {
          show: true,
          position: 'top'
        }
      }]
    };

    barChart.setOption(barOption);
  }
});

// 历史浏览活跃度统计日历图初始化
watch(calenderData, (newVal) => {
  if (calenderChartRef.value && newVal.length > 0) {
    const calenderChart = echarts.init(calenderChartRef.value);
    const option = {
      title: {
        top: 30,
        left: 'center',
        text: '浏览活跃度'
      },
      tooltip: {
        formatter: function (params) {
          const date = params.data[0];
          const value = params.data[1];
          return `${date}<br/>浏览量：${value}`;
        }
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        seriesIndex: 0,
        orient: 'horizontal',
        left: '45%',
        bottom: 20
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2023',
        itemStyle: {
          borderWidth: 0.5
        },
        yearLabel: {show: false}
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calenderIndex: 0,
        data: getVirtualData('2023'),
      }
    };

    calenderChart.setOption(option);

  }
});
</script>

<template>
  <div style="display: flex; justify-content: space-between; width: 90%">
    <div class="countsGenre" ref="roseChartRef"/>
    <div class="countsGenre" ref="barChartRef"/>
  </div>
  <div class="calender" ref="calenderChartRef"/>
</template>

<style scoped>
.countsGenre {
  height: 400px;
  width: 500px;
  background-color: #eeeeee;
  padding: 1rem;
  border-radius: 5px;
}

.calender {
  width: 1000px;
  height: 300px;
  background-color: #eeeeee;
  margin-top: 3rem;
  border-radius: 5px;
}
</style>