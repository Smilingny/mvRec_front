<script setup>

import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import SearchBar from "../components/SearchBar.vue";
const searchName=ref("444444")
const submitSearch=()=>{
  console.log(searchName.value)
}
const name=ref("肖申克的救赎")
const tag=ref([
  { type: '', label: '标签一' },
  { type: 'danger', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
const story=ref("依据具体的设计需求，我们可以通过以下步骤来设置 Element 分割线宽度： 1. 在 HTML 页面中引入 Element UI 组件库的分割线组件，并在页面中使用该组件。 2. 在分割线组件中设置分割线宽度属性值。 在 Element UI 分割线组件中，分割线宽度属性的默认值为 1 像素，可以通过传入不同的属性值来控制分割线的粗细。 例如，我们可以通过设置类似下面的代码来将分割线宽度设置为 2 像素：" +
    "依据具体的设计需求，我们可以通过以下步骤来设置 Eleme依据具体的设计需求，我们可以通过以下步骤来设置 Eleme")
</script>

<template>
  <div class="search_result">
    <SearchBar></SearchBar>
    <div class="show_box">
      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>


      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>


      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>


      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>


      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>


      <div class="move">
        <div class="picture"><img src="../../public/GGbond.jpg" height="1080" width="1416"/></div>
        <div class="introduction">
          <div class="name">{{name}}</div>
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
          <div class="story">{{story}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .search_result{
    height: 100%;
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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