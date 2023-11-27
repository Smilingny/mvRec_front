<script setup>
import router from "@/router";
import axios from "axios";
import {onMounted, ref} from "vue";

const toChangePassword=()=>{
  router.push('/usercenter/changepassword')
}
const toEditMessage=()=>{
  router.push('/usercenter/editmessage')
}
let user=ref({

})

const birth=ref('')
onMounted(()=>{
  axios
      .get('/api/getInfo', {
        headers: {
          'Authorization':localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            user.value=response.data
            console.log(user)
            birth.value=user.value.birthday.substring(0,10)
          },
          (error) => {
            console.log(error); // 打印网络错误
          },
      );
})
</script>

<!--<template class="main">-->
<!--    <div class="text">账号 <div>1234566</div></div>-->
<!--    <div class="text">性别<div>1234566</div></div>-->
<!--    <div class="text">生日<div>1234566</div></div>-->
<!--    <div class="text">邮箱<div>1234566</div></div>-->
<!--    <div>-->
<!--      <el-button type="info" @click="toChangePassword">修改密码</el-button>-->
<!--      <el-button type="info" @click="toEditMessage">编辑资料</el-button>-->
<!--    </div>-->
<!--  <router-view>-->
<!--  </router-view>-->
<!--</template>-->

<template>
  <div class="contain">
    <h1>用户信息</h1>
    <div class="item"><span class="text">账号：</span><input class="input-item" type="text" :value="user.account" readonly></div>
    <div class="item"><span class="text">性别：</span><input class="input-item" type="text" :value="user.sex" readonly></div>
    <div class="item"><span class="text">生日：</span><input class="input-item" type="text" :value="birth" readonly></div>
    <div class="item"><span class="text">邮箱：</span><input class="input-item" type="text" :value="user.email" readonly></div>
    <div class="item">
      <el-button class="but" style="width: 10vw" type="info" @click="toChangePassword">修改密码</el-button>
      <el-button class="but" style="width: 10vw" type="info" @click="toEditMessage">编辑资料</el-button>
    </div>
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
