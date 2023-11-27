<script setup>

import {UserFilled} from "@element-plus/icons-vue";
import {View} from "@element-plus/icons-vue";
import {onMounted, reactive, ref} from "vue";
import router from "@/router";
import axios from "axios";

const username=ref("Mike")//存储用户名
const toUserInfo=()=>{//跳转到用户信息
  router.push('/usercenter/userinfo')
}
const toBrowsingHistory=()=>{
  router.push('/usercenter/browsinghistory')
}
const getUserInfo=()=>{
}
const toindex=()=>{
  router.push('/index')
}

const toStatistic=()=>{
  router.push('/usercenter/statistics')
}
onMounted(()=>{
  axios
      .get('/api/getInfo', {
        headers: {
          'Authorization':localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            username.value=response.data.name
          },
          (error) => {
            console.log(error); // 打印网络错误
          },
      );
})
</script>

<template>
  <div class="common-layout" >
      <div  class="side">
        <div class="img_contain">
          <el-avatar size="large"><img src="../../public/GGbond.jpg" /></el-avatar>
          <div class="uname">{{username}}</div>
        </div>
        <el-divider />
        <div class="three_button">
          <el-button class="bt" @click="toUserInfo"  round> <el-icon><UserFilled /></el-icon>个人信息</el-button>
          <el-button class="bt" @click="toBrowsingHistory" round><el-icon><View /></el-icon>浏览记录</el-button>
          <el-button class="bt" @click="toStatistic" round><el-icon><Histogram /></el-icon>数据统计</el-button>
          <el-button class="bt" @click="toindex" round type="danger"><el-icon><House /></el-icon>返回首页</el-button>
        </div>

      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
.main{
  background-color: black;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-left: 22vw;
  margin-top: 20px;

}
  .common-layout{
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    //background-color: ;
  }
  .side{
    background-color: #666666;
    width: 18vw;
    height: 94vh;
    position: fixed;
    border: 1px white solid;
    margin: 20px;
    border-radius: 10px;

  }

  .side .img_contain{
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5vh;
    font-size: 20px;
    background-color: #666666;
  }
  .side .three_button{
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
  }
  .side .three_button .bt{
    margin: 1vh;
    width: 90%;
    height:5vh ;
    font-size: 20px;
    border-radius: 5vw;
    text-align: center;
  }
  .uname{
    margin-top: 15px;
    color: white;
  }
</style>
