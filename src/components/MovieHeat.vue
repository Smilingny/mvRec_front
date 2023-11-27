<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import * as echarts from "echarts";
import axios from "axios";

const heat = ref(null);

const props = defineProps(['movieId'])
const data = reactive({
  date: [],
  count: []
})
const fetchData = async () => {
  try {

    const heatResponse = await axios.get("/api/movieHistoryCounts", {
      headers: {
        'Authorization': localStorage.getItem('token')
      },
      params: {
        movieId: props.movieId
      }
    })
    // 把heatResponse.data中的对象数组中包含的date和count分别存到date和count中
    data.date = heatResponse.data.map(item => item.date);
    data.count = heatResponse.data.map(item => item.count);
  } catch (e) {
    console.log(e);
  }
}

onMounted(fetchData);

watch(data, (newVal) => {
  console.log(newVal)
  if (heat.value && newVal) {
    const heatChart = echarts.init(heat.value);
    const heatOption = {
      title: {
        text: '历史浏览活跃度统计',
        textStyle: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: newVal.date,
        axisLabel: {
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold',
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: 'white',
          fontSize: 14,
          fontWeight: 'bold',
        }
      },
      series: [{
        data: newVal.count,
        type: 'line',
        areaStyle: {
          color: '#00BFFF'
        },
      }]
    };
    heatChart.setOption(heatOption);
  }
})

</script>

<template>
  <div class="heat" ref="heat"></div>
</template>

<style scoped>
 .heat{
   width: 90vw;
   margin: 5rem auto;
   height: 400px;
   border-radius: 5px;
   color: white;
 }
</style>