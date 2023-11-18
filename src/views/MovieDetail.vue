<script setup>

import {ArrowLeftBold, ArrowRightBold, Star, StarFilled} from "@element-plus/icons-vue";
import {onMounted, ref} from "vue";
import MovieList from "@/components/MovieList.vue";
import SearchBar from "@/components/SearchBar.vue";
onMounted(
    ()=>{
      console.log(4444)
    }
)
const back=()=>{

}
const form=ref({
  score:'',
  content:''
})
const items=ref([
  { type: '', label: '标签一' },
  { type: 'danger', label: '标签四' },
  { type: 'warning', label: '标签五' }
])
const movieLists = ref([
  {
    name: 'movie1',
    kind: 'comedy',
    img: '/src/assets/indexview/agzz1.webp'
  },
  {
    name: 'movie2',
    kind: 'science',
    img: '/src/assets/indexview/agzz1.webp'
  },
  {
    name: 'movie3',
    kind: 'horror',
    img: 'agzz2.webp'
  },
  {
    name: 'movie11',
    kind: 'comedy',
    img: 'agzz2.webp'
  },
  {
    name: 'movie12',
    kind: 'science',
    img: 'agzz2.webp'
  },
  {
    name: 'movie13',
    kind: 'horror',
    img: 'agzz2.webp'
  },
]);
const my_comment=ref(8)
const value0= ref(10)
const value=ref(value0.value/2);
const director=ref(["sssssss","wdswdswsw"])
const actor=ref(["123477","4667999","4455555"])
const comdata=ref([
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhssssssssssssssssssssssssssssssssssssssshsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'},
  {uname:'username',score:'四星',content:'很不错hhhhhhhhhhhhhhhhhhsssss'}
])
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const story=ref("依据具体的设计需求，我们可以通过以下步骤来设置 Element 分割线宽度： 1. 在 HTML 页面中引入 Element UI 组件库的分割线组件，并在页面中使用该组件。 2. 在分割线组件中设置分割线宽度属性值。 在 Element UI 分割线组件中，分割线宽度属性的默认值为 1 像素，可以通过传入不同的属性值来控制分割线的粗细。 例如，我们可以通过设置类似下面的代码来将分割线宽度设置为 2 像素：")
</script>

<template>
  <div class="movie_detail">
    <SearchBar></SearchBar>
    <div class="top">
      <div class="left">
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
        <div my_comment @click="dialogFormVisible = true"><el-button round>我的评分：{{ my_comment }}</el-button></div>
      </div>
      <el-dialog v-model="dialogFormVisible" title="电影评分及评价">
        <el-form :model="form">
          <el-form-item label="评价" :label-width="formLabelWidth">
            <el-input v-model="form.content" autocomplete="off"  placeholder="请给出您的评价"/>
          </el-form-item>
          <el-form-item label="评分" :label-width="formLabelWidth">
            <el-select v-model="form.score" placeholder="选择您的评分">
              <el-option label="0" value="0" />
              <el-option label="1" value="1" />
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
              <el-option label="4" value="4" />
              <el-option label="5" value="5" />
              <el-option label="6" value="6" />
              <el-option label="7" value="7" />
              <el-option label="8" value="8" />
              <el-option label="9" value="9" />
              <el-option label="10" value="10" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </span>
        </template>
      </el-dialog>
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
    <el-divider content-position="left">用户评论</el-divider>
    <div class="comments">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <p class="comsection" v-for="item in comdata">
            <div class="sectiontop" >
              <div class="uname">{{item.uname}}</div>
              <div class="score">{{ item.score}}</div>
              <div class="like"><el-button type="danger" :icon="Star" circle /></div>
            </div>
            <el-divider />
            <div class="sectiontbottom">{{item.content}}</div>
          </p>
        </div>
      </el-scrollbar>
    </div>
    <div class="movie_recomand" >
      <el-divider content-position="left">电影列表</el-divider>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
  </div>

</template>

<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.mx-1{
  margin-left: 3px;
}
.user .like .score{
  width: 30px;
}
.scrollbar-flex-content {
  display: flex;
}
.comsection{
  width: 400px;
  height: 300px;
  display: flex;
  border: 1px solid white;
  flex-shrink: 0;
  //align-items: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: #606266;
  color: white;
}
.sectiontop{
  display: flex;
  justify-content: space-around;

}
.sectiontbottom{

  word-wrap: break-word;
  white-space: pre-line;
  line-height: 1.5;

}

  .movie_detail{
    color: aliceblue;
    background-color: black;
  }
  .top{
    width: 90vw;
    height: 90vh;
    display: flex;
    padding-top: 50px;
    padding-left: 100px;
  }
  .left{
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

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
    font-size: 2vw;
    color: white;
  }
  .image{
    /* //border: 1px solid red; */
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
    //border: 1px solid #c8c9cc;
    height: 20%;
    width: 80%;
  }
  .director{
    //border: 1px solid #c8c9cc;
    height: 20%;
    width: 80%;
  }
  .story{
    //border: 1px solid #c8c9cc;
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
  width: 100%;
}
  .mainline div{
    border:dashed  2px #b1b3b8;
  }


</style>
