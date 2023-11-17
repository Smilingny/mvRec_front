<script setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
 
</script>

<template>
  <div class="header">
    <div class="litem">
      <el-icon :size="30" class="icon1"><VideoCameraFilled /></el-icon>
      <span class="text-item">云推视频</span>
    </div>
    <div class="ritem">
      <el-input
      v-model="input2"
      class="input-item"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <el-icon :size="25" class="icon2"><User /></el-icon>
    </div>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  width: 90%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(239, 239, 239, 1);
  opacity: 0.72;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  position: relative;
  top: 10px;
  line-height: 30px;
  justify-content: space-between;
}
.litem{
  display: flex;
  align-items: center;
}
.ritem{
  display: flex;
  align-items: center;
}
.icon1{
  margin-left: 10px;
  color: #2980b9;
}
.icon2{
  margin-right: 10px;
  margin-left: 5px;
  color: #2980b9;
}
.text-item{
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
  display: block;
  color: #2980b9;
}
.input-item{
  border-radius: 20px;
}


</style>
