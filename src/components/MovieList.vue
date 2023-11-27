<script setup>
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import axios from "axios";

const router = useRouter()
const props = defineProps({
  mList: Array
});
const toDetail = id => {
  const data = new URLSearchParams();
  data.append('movieId',id);
  axios.post("/api/clickMovie", data, {
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
      .then((response) => {
        console.log("创建记录成功");
      }, (error) => {
        console.log("创建浏览记录出错");
      })
  router.push(`/moviedetail/${id}`)

}
</script>


<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="(item ,index) in mList" :key="item.id">
      <el-card shadow="hover" :style="{ backgroundImage: 'url(' + item.poster + ')' }" @click="toDetail(item.id)">
      </el-card>
      <!--      <p>{{ item.title }}</p>-->
      <p class='img-text' :title="item.title">{{ item.title }}</p>
    </el-col>
  </el-row>

</template>

<style>
.el-row {
  overflow: hidden;
}

.el-card {
  height: 200px;
  width: 100%;
  background-size: cover;
}

p {
  text-align: center;
  color: white;
  line-height: 90px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}


</style>