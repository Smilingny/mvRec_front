<script  setup>
import {reactive, ref} from 'vue'
import router from "@/router";
import UserInfo from "@/views/user/UserInfo.vue";
import axios from "axios";

// do not use same name with ref
const form = ref({
  oldPassword: '',
  newPassword: '',
  enturePassword: '',
})

const onSubmit = () => {
  if(form.newPassword!==form.enturePassword){
    alert("密码不一致，请重新修改")
    form.value.oldPassword="";
    form.value.enturePassword=""
    form.value.newPassword=""
  }
  const data = new URLSearchParams();
  data.append('oldPassword',form.value.oldPassword);
  data.append('newPassword', form.value.newPassword);
  axios
      .put('/api/changePassword', data, {
        headers: {
          'Authorization':localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            alert(response.data)
            router.push('/usercenter/userinfo')
            form.value.oldPassword="";
            form.value.enturePassword=""
            form.value.newPassword=""
          },
          (error) => {
            alert('修改失败，请检查旧密码是否正确')
            console.log(error); // 打印网络错误
          },
      );
}
const backUserInfo=()=>{
  router.push('/usercenter/userinfo')
}
</script>

<template>
  <div class="contain">
    <h1>修改密码</h1>
    <div class="item"><span class="text">旧密码：</span><input class="input-item" v-model="form.oldPassword" type="password" placeholder="输入旧密码"></div>
    <div class="item"><span class="text">新密码：</span><input class="input-item" v-model="form.newPassword" type="password" placeholder="输入新密码"></div>
    <div class="item"><span class="text">新密码：</span><input class="input-item" v-model="form.enturePassword" type="password" placeholder="再次输入新密码"></div>
    <div class="item">
      <el-button class="but" style="width: 10vw" type="info" @click="onSubmit">确认修改</el-button>
      <el-button class="but" style="width: 10vw " @click="backUserInfo">取消修改</el-button></div>
  </div>
</template>
<style scoped>
.contain{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.input-item{
  height: 50px;
  font-size: 25px;
  border-radius: 25px;
  text-align: center;
}
.text{
  font-size: 28px;
  margin-right: 10px;
  color: white;
}
.but{
  height: 45px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  font-size: 19px;
}
</style>
