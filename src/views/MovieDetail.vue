<script setup>

import {ArrowLeftBold, ArrowRightBold, Star, StarFilled} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
const changeComment=()=>{//修改评论

}
onMounted(
    ()=>{
      console.log(4444)
    }
)
const back=()=>{

}
const items=ref([
  { type: '', label: '标签一' },
  { type: 'danger', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
const my_comment=ref(8)
const value0= ref(10)
const value=ref(value0.value/2);
const director=ref(["sssssss","wdswdswsw"])
const actor=ref(["123477","4667999","4455555"])
const story=ref("依据具体的设计需求，我们可以通过以下步骤来设置 Element 分割线宽度： 1. 在 HTML 页面中引入 Element UI 组件库的分割线组件，并在页面中使用该组件。 2. 在分割线组件中设置分割线宽度属性值。 在 Element UI 分割线组件中，分割线宽度属性的默认值为 1 像素，可以通过传入不同的属性值来控制分割线的粗细。 例如，我们可以通过设置类似下面的代码来将分割线宽度设置为 2 像素：")
</script>

<template>
  <div class="movie_detail">
    <div class="top">
      <div class="left">
        <div class="backbutton"><el-button :icon="ArrowLeftBold" @click="back"></el-button> </div>
        <div class="image"><img src="../../public/GGbond.jpg"/></div>
        <div class="tag">
          <div class="flex flex-wrap gap-2 my-2">
          <el-tag
              v-for="item in items"
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
        <div class="movie_name">肖申克的救赎</div>
        <div class="score">
          <div class="stars">
            <div class="star">
              <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value} 分"
              />
            </div>
            <div class="peoples">2500人评分</div>
          </div>
        </div>
        <div my_comment><el-button @click="changeComment" round>我的评分：{{ my_comment }}</el-button></div>
      </div>
      <div class="right">
        <div class="director">
          <div class="titleline">
            <el-divider content-position="left"><span>导演</span></el-divider>
          </div>

          <div class="content">
            <span v-for="(item,index) in director" >{{item}}、</span>
          </div>
        </div>
        <div class="actor">
          <div class="titleline">
            <el-divider  content-position="left" ><span>主演</span></el-divider>
          </div>

          <div class="content">
            <span v-for="(item,index) in actor" >{{item}}、</span>
          </div>
        </div>
        <div class="story">
          <div class="titleline">
            <el-divider  content-position="left"><span>情节</span></el-divider>
          </div>

          <div class="content">
            <span>{{story}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="movie_recomand" >
      <div class="mainline"><el-divider class="mydiver">相关推荐</el-divider></div>
      <div class="move_container">
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
        <div class="move">
          <div><img src="../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .top{
    width: 90vw;
    height: 90vh;
    border: 1px solid #c8c9cc;
    display: flex;
  }
  .left{
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #c8c9cc;
    width: 20%;
  }
  .backbutton{
    width: 100%;
  }
  .left div{
    margin-bottom: 0.5vh;
    margin-top: 0.5vh;
  }
  .movie_name{
    font-size: 1.5vw;
    color: #606266;
  }
  .image{
    /* //border: 1px solid red; */
    display: flex;
    justify-content: center;

  }
  .image img{
    width: 13vw;
    height: 18vw;
  }
  .stars{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .right{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* //border: 1px solid red; */
    width: 80%;
    height: 100%;
  }
  .director span{
    margin: 0.5vw;
  }
  .actor span{
    margin: 0.5vw;
  }
  .actor{
    border: 1px solid #c8c9cc;
    height: 20%;
    width: 80%;
  }
  .director{
    border: 1px solid #c8c9cc;
    height: 20%;
    width: 80%;
  }
  .story{
    border: 1px solid #c8c9cc;
    height: 60%;
    width: 80%;
  }
  .story div{
   margin-bottom: 3vh;
  }
  .director div{
    margin-bottom: 3vh;
  }
  .actor div{
    margin-bottom: 3vh;
  }

.titleline span{
  font-size: 1.5vw;
  font-weight: bold;
}
.content,.content span{
  font-size: 1vw;
  font-weight: bold;
  text-align: left;
}
.content span{
  margin-left: 1vw;
  line-height: 4vh;
}


.movie_recomand{
  /* //border: 1px solid red; */
  width: 90vw;
}
  .mainline div{
    border:dashed  2px #b1b3b8;
  }
  .move_container{
    flex-wrap: wrap;
    display: flex;
    padding: 0.5vw;
    justify-content:space-around;
    align-items: center;
    width: 100%;
    height: 80%;
  }
  .move{
    width: 20%;
    height: 80%;
    margin-bottom: 2vh;
  }
  .move div{
    margin-bottom: 2vh;
  }
  .move_container img{
    width: 15vw;
    height: 15vh;
  }
  .move span{
    text-align: center;
  }
</style>