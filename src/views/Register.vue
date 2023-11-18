<script setup>
  import { ref } from 'vue'
  const username = ref('')
  const password = ref('')
  const account = ref('')
  const checkpassword = ref('')
</script>

<template>
  <div>
    <div class="contain">
      <h1 style="color:aliceblue; margin-bottom: 15px;">注册</h1>
      <div class="login">
        <input class='input-item' v-model="account" type="text" placeholder="请输入账号">
        <input class='input-item' v-model="username" type="text" placeholder="请输入用户名">
        <input class='input-item' v-model="password" type="password" placeholder="请输入密码">
        <input class='input-item' v-model="checkpassword" type="password" placeholder="确认密码">
        <button class="btn" @click="register">点击注册</button>
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
.contain::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/backgroundpic.jpeg);
  filter: blur(15px);
  z-index: -1;
  background-size: cover;
}
.login{
  width: 450px;
  height: 450px;
  border: 2px solid #2980b9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  background-color: aliceblue;
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
  margin-top: 30px;
  font-size: 11px;
  color: #2980b9;
}
</style>
