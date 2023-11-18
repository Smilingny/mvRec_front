<script  setup>
import {reactive, ref} from 'vue'
import router from "@/router";
// import UserInfo from "@/views/UserInfo.vue";

// do not use same name with ref
const form = reactive({
  sex: '',
  birthday:'',
  email: '',
})

const onSubmit = () => {
  console.log(form.birthday)
}
const backUserInfo=()=>{
  router.push('/usercenter/userinfo')
}
</script>

<template>
  <el-form :model="form" label-width="30%" label-position="right" class="ch">
    <el-form-item label="性别">
      <el-input  v-model="form.sex" />
    </el-form-item>

    <el-form-item label="生日">
        <el-form-item prop="date1" >
          <el-date-picker
              v-model="form.birthday"
              type="date"
              label="生日"
              placeholder="选择日期"
              style="width: 21.5vw"
          />
        </el-form-item>
    </el-form-item >

    <el-form-item label="邮箱">
      <el-input style="width: 28vw"  v-model="form.email" />
    </el-form-item>

    <el-form-item>
      <el-button style="width: 10vw" type="primary" @click="onSubmit">确认修改</el-button>
      <el-button style="width: 10vw " @click="backUserInfo">取消修改</el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped>

</style>
