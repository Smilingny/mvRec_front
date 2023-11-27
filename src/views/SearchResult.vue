<script setup>

import {Search} from "@element-plus/icons-vue";
import {computed, inject, onMounted, ref} from "vue";
import { useRouter } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import axios from "axios";
import router from "@/router";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
const tag=ref([
  { type: '', label: '标签一' },
  { type: 'danger', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
const toDetailPage=id=> {
  //console.log(searchResults.value)
  router.push(`/moviedetail/${id}`);

}
const store = useStore();
const searchResults = computed(() => store.state.searchResults);//接受传递过来的搜索结果
onMounted(()=> {
      console.log(searchResults.value)
    }
)
</script>

<template>
  <div class="search_result">
    <SearchBar ></SearchBar>
    <div class="show_box">

      <div class="move" @click="toDetailPage(item.id)" v-for="(item,index) in searchResults" :key="item.id">
        <div class="picture"><img :src="item.poster" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{item.title}}</div>
          <div class="tag">
            <div class="flex flex-wrap gap-2 my-2">
              <el-tag
                  v-for="item in tag"
                  :key="item.label"
                  :type="item.type"
                  class="mx-1"
                  effect="dark"
                  round
              >
                {{ item.label }}
              </el-tag>
            </div>
          </div>
          <div class="story">{{item.plot}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .search_result{
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
  }
  .search_box{
    width: 80%;
    height: 8%;
    display: flex;
    margin: 0.5vw;
    justify-content: center;
    align-items: center;
  }
  .show_box{
  }
  .move{
    cursor: pointer;
    width: 80vw;
    height: 25vh;
    border-radius: 1vw;
    display: flex;
    align-items: center;
    margin-top: 3vh;
    border: 3px solid #CDD0D6; /* 设置边框宽度、样式和颜色 */
    background-color: #f1f1f1; /* 设置背景色 */
  }
  .picture{
    width: 20%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .picture img{
    width: 55%;
    height: 90%;
  }
  .introduction{
    width: 80%;
    height: 90%;
  }
  .name{
    width: 90%;
    height: 20%;
    font-family: 'Abril Fatface', cursive;
    font-size: 1.5em; /* em 是相对于当前字体大小的单位，2.5em = 2.5 * 当前字体大小 */
    color: #333;
    margin-bottom: 1vh;
  }
  .tag{
    width: 90%;
    height: 20%;
    margin-bottom: 1vh;
  }
  .story{
    width: 90%;
    height: 50%;
    overflow:auto;
    text-indent: 2em;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #666;
    margin-bottom: 1vh;
    scrollbar-width: none;
  }
  .story::-webkit-scrollbar {
    display: none;
  }
.mx-1{
  margin-right: 1vw;
}
</style>
