<script setup>
import router from "@/router";

const toChangePassword=()=>{
  router.push('/usercenter/changepassword')
}
const toEditMessage=()=>{
  router.push('/usercenter/editmessage')
}
</script>

<template class="main">
    <div class="text">账号 <div>1234566</div></div>
    <div class="text">性别<div>1234566</div></div>
    <div class="text">生日<div>1234566</div></div>
    <div class="text">邮箱<div>1234566</div></div>
    <div>
      <el-button type="info" @click="toChangePassword">修改密码</el-button>
      <el-button type="info" @click="toEditMessage">编辑资料</el-button>
    </div>
  <router-view>
  </router-view>
</template>

<style scoped>
.main div{
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main div div{
  border:1px solid #DCDFE6;
  border-radius: 5vw;
  height: 80%;
  width: 80%;
  margin-left: 2.5vw;
  font-size: 20px;
}

</style>
