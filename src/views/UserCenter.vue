<script setup>

import {UserFilled} from "@element-plus/icons-vue";
import {View} from "@element-plus/icons-vue";
import {reactive ,ref} from "vue";
import router from "@/router";

const username=ref("Mike")//存储用户名
const toUserInfo=()=>{//跳转到用户信息
  router.push('/usercenter/userinfo')
}
const toBrowsingHistory=()=>{
  router.push('/usercenter/browsinghistory')
}
const getUserInfo=()=>{
}
</script>

<template>
  <div class="common-layout" >
      <div  class="side">
        <div class="img_contain">
          <el-avatar size="large"><img src="../../public/GGbond.jpg" /></el-avatar>
          <div class="uname">{{username}}</div>
        </div>
        <el-divider />
        <div class="two_button">
          <el-button class="bt" @click="toUserInfo"  round> <el-icon ><UserFilled /></el-icon>个人信息</el-button>

          <el-button class="bt" @click="toBrowsingHistory" round><el-icon><View /></el-icon>浏览记录</el-button>
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
.main{
  background-color: white;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin-left: 20vw;
  border-left: solid 1px #E6E8EB;
}
  .common-layout{
    width: 100vw;
    height: 100vh;
    color: #606266;
    display: flex;
  }
  .side{
    background-color: #666666;
    width: 18vw;
    height: 100vh;
    position: fixed;
    border: 1px white solid;
    margin-left: 20px;

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
  .side .two_button{
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-direction: column;
  }
  .side .two_button .bt{
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
