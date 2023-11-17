<script  setup>
import {reactive, ref} from 'vue'
import router from "@/router";
import UserInfo from "@/views/user/UserInfo.vue";

// do not use same name with ref
const form = reactive({
  oldPassword: '',
  newPassword: '',
  enturePassword: '',
})

const onSubmit = () => {
  if(form.newPassword!==form.enturePassword){
    alert("密码不一致，请重新修改")
    form.oldPassword="";
    form.enturePassword=""
    form.newPassword=""
  }
}
const backUserInfo=()=>{
  router.push('/usercenter/userinfo')
}
</script>

<template>
  <el-form :model="form" label-width="30%" label-position="right" class="ch">
    <el-form-item label="旧密码">
      <el-input show-password v-model="form.oldPassword" />
    </el-form-item>

    <el-form-item label="新密码">
      <el-input show-password v-model="form.newPassword" />
    </el-form-item>

    <el-form-item label="确认新密码">
      <el-input style="width: 28vw ;border-radius:10vw" show-password v-model="form.enturePassword" />
    </el-form-item>

    <el-form-item>
      <el-button style="width: 10vw" type="primary" @click="onSubmit">确认修改</el-button>
      <el-button style="width: 10vw " @click="backUserInfo">取消修改</el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped>

</style>
