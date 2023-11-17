<script setup>
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
  const checkpassword = ref('')
</script>

<template>
  <div>
    <div class="contain">
      <h1 style="color: #2980b9;">注册</h1>
      <div class="login">
        <input class='input-item' v-model="username" type="text" placeholder="请输入账号"> 
        <input class='input-item' v-model="password" type="password" placeholder="请输入密码"> 
        <input class='input-item' v-model="checkpassword" type="password" placeholder="确认密码"> 
        <button class="btn">点击注册</button>
        <router-link to="/" class="return">返回登录</router-link>
      </div>
  </div>
  </div>
</template>

<style scoped>
.contain{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center; 
  align-items: center; 
}
.login{
  width: 450px;
  height: 400px;
  border: 2px solid #2980b9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.input-item{
  display: block;
  width: 300px;
  height: 35px;
  border-radius: 20px;
  border: 1px #2980b9 solid;
  margin-bottom: 35px;
  padding-left: 15px;
}
.btn{
  background-color: #2980b9;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  color: white;
}
.btn:active {
  background-color: grey;
}
.return{
  margin-top: 35px;
  font-size: 10px;
  color: #2980b9;
}
</style>
