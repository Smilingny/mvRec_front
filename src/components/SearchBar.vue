<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  import { Search } from '@element-plus/icons-vue'
  import axios from "axios";
  import {useStore} from "vuex";
  const keyword=ref('')
  const searchlists=ref([])
  const toUserCenter = ()=>{
    router.push('/usercenter/userinfo')

  }

  const pageSize=50
  const pageNumber=ref(1)
  const store = useStore();
  const toSearchResult = ()=>{
    axios
        .get('/api/searchMovie', {
          params: {
            pageSize: pageSize,
            pageNumber: pageNumber.value,
            keyWord:keyword.value
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
          },
        })
        .then(
            (response) => {
              store.commit('setSearchResults', response.data.records);

              router.push('/searchresult');
            },
            (error) => {
              console.log(error); // 打印网络错误
            },
        )
  }


  const toindex=()=>{
    router.push('/index')
  }
</script>

<template>
  <div class="header">
    <div class="litem">
      <el-icon :size="30" class="icon1"><VideoCameraFilled /></el-icon>
      <span class="text-item" @click="toindex">云推视频</span>
    </div>
    <div class="ritem">
      <el-input
      v-model="keyword"
      class="input-item"
      placeholder="Please Input"
    />
    <!-- 去搜索结果 -->
    <button class="but" @click="toSearchResult">搜索</button>
    <!-- 去用户中心 -->
    <el-icon :size="25" class="icon2" @click="toUserCenter"><User /></el-icon>
    </div>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  width: 90%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(239, 239, 239, 1);
  opacity: 0.9;
  border-radius: 20px;
  text-align: center;
  align-items: center;
  position: relative;
  top: 10px;
  line-height: 30px;
  justify-content: space-between;
}
.litem{
  display: flex;
  align-items: center;
}
.ritem{
  display: flex;
  align-items: center;
}
.icon1{
  margin-left: 10px;
  color: black;
}
.icon2{
  margin-right: 10px;
  margin-left: 5px;
  color: black;
}
.text-item{
  margin-left: 5px;
  font-size: 15px;
  font-weight: 700;
  display: block;
  color: black;
}
.but{
  width: 50px;
  height: 30px;
  border: none;
  color: black;
}
.input-item{
  border-radius: 20px;
}


</style>
