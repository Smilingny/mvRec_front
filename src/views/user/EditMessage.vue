<script setup>
import {reactive, ref} from 'vue'
import router from "@/router";
import axios from "axios";
// import UserInfo from "@/views/UserInfo.vue";

// do not use same name with ref
const form = ref({
  name: '',
  sex: '',
  birthday: '',
  email: '',
})

const onSubmit = () => {
  //form.value.birthday=changeDate(form.value.birthday)
  console.log(form)
  axios
      .put('/api/changeInfo', form.value, {
        headers: {
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            //console.log(response.data);
            alert(response.data)
            router.push('/usercenter/userinfo')
          },
          (error) => {
            alert('修改资料失败')
            console.log(error); // 打印网络错误
          },
      );
  console.log(form.value.birthday)
}
const backUserInfo = () => {
  router.push('/usercenter/userinfo')
}
</script>

<template>
  <div>
    <div class="contain">
      <h1>修改个人信息</h1>
      <div class="item"><span class="text">姓名：</span><input class="input-item" v-model="form.name"
                                                             placeholder="请输入姓名"/></div>
      <div class="item"><span class="text">性别：</span><input class="input-item" v-model="form.sex"
                                                             placeholder="请输入性别"/></div>

      <div class="item"><span class="text">生日：</span>
        <input
            id="birthday"
            class="input-item"
            type="date"
            placeholder="选择日期"
            style="width: 300px"
            v-model="form.birthday"
        />
      </div>

      <div class="item"><span class="text">邮箱：</span><input class="input-item" v-model="form.email"
                                                             placeholder="请输入邮箱"/></div>
      <div class="item">
        <el-button class="but" style="width: 10vw" type="info" @click="onSubmit">确认修改</el-button>
        <el-button class="but" style="width: 10vw " @click="backUserInfo">取消修改</el-button>
      </div>
    </div>
    <!--  <el-form-item label="性别">-->
    <!--    <el-input  v-model="form.sex" />-->
    <!--  </el-form-item>-->

    <!--  <el-form-item label="生日">-->
    <!--    <el-form-item prop="date1" >-->
    <!--      <el-date-picker-->
    <!--          v-model="form.birthday"-->
    <!--          type="date"-->
    <!--          label="生日"-->
    <!--          placeholder="选择日期"-->
    <!--          style="width: 21.5vw"-->
    <!--      />-->
    <!--    </el-form-item>-->
    <!--  </el-form-item >-->

    <!--  <el-form-item label="邮箱">-->
    <!--    <el-input style="width: 28vw"  v-model="form.email" />-->
    <!--  </el-form-item>-->

  </div>
</template>
<style scoped>
.contain {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.input-item {
  height: 50px;
  font-size: 25px;
  border-radius: 25px;
  text-align: center;
}

.text {
  font-size: 28px;
  margin-right: 10px;
  color: white;
}

.but {
  height: 45px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  font-size: 19px;
}
</style>
