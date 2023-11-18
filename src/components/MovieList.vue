<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const props = defineProps({
  mList:Array
});
const toDetail = () => {
  router.push('/moviedetail')
}
</script>



<template>
  <el-row :gutter="20">
    <el-col :span="3" v-for="item in mList" :key="item.name">
      <el-card shadow="hover" :style="{ backgroundImage: 'url(' + item.img + ')' }" @click="toDetail()">
      </el-card>
      <p>{{ item.name }}</p>
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
}
</style>
