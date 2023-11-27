<script setup>

import {ArrowLeftBold, ArrowRightBold, Star, StarFilled} from "@element-plus/icons-vue";
import {inject, onMounted, ref} from "vue";
import MovieList from "@/components/MovieList.vue";
import SearchBar from "@/components/SearchBar.vue";
import axios from "axios";
import router from "@/router";
import {useRoute} from "vue-router";
import MovieHeat from "../components/MovieHeat.vue";

const form=ref({
  score:'',
  content:''
})//评价已经评分
const items=ref([])
const movieLists = ref([]);//接收返回的电影对象
const my_comment=ref('8')
const comdata=ref([])//接收评论的信息
let dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const story=ref("")
const title=ref('');
const value0= ref(10)
const value=ref();
const director=ref([])
const actors=ref([])
const poster=ref();
const releaseDate=ref();
const route = useRoute();
const summitComment=()=>{
  const data = new URLSearchParams();
  data.append('rate',form.value.score);
  data.append('comment', form.value.content);
  data.append('movieId',route.params.id)
  axios
      .put('/api/ratingMovie', data, {
        headers: {
          'Authorization':localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            alert(response.data)
          },
          (error) => {
            console.log(error); // 打印网络错误
            alert("评价失败")
          },
      );
  dialogFormVisible.value= false;
}

onMounted(()=>{
  axios
      .get('/api/getMovieInfo', {
        params: {
          movieId:route.params.id
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            console.log(response.data)
            value0.value=response.data.rating
            value.value=value0.value/2
            director.value=response.data.director
            actors.value=response.data.actors
            story.value=response.data.plot
            poster.value=response.data.poster
            title.value=response.data.title
            releaseDate.value=response.data.released.substring(0,10)
            axios.get('/api/getMovieGenres',{
              params:{
                movieId:route.params.id
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('token')
              }
            }).then(
                (response)=>{
                  console.log(response.data)
                  for (let i = 0; i < response.data.length; i++) {
                    items.value.push({type:'',label:response.data[i]})
                  }

                },
                (error)=>{
                  console.log(error)
                }
            )
          },
          (error) => {
            console.log(error); // 打印网络错误
          },
      )
})
onMounted(()=>{
  axios
      .get('/api/getRating', {
        params: {
          movieId:route.params.id
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            console.log(response.data)
            const regex = /score=([0-9\.]+)/;
            const match = response.data.match(regex);
            const score = match ? match[1] : null;
            my_comment.value=score
            console.log(my_comment)
          },
          (error)=>{
            console.log(error)
            my_comment.value='点击评分'
          }
      )
})
const pageNumber=ref(1);
const pageSize=8
onMounted(()=>{
  axios
      .get('/api/getAllRatings', {
        params: {
          movieId:route.params.id,
          pageNumber:pageNumber.value,
          pageSize:pageSize
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response)=>{
            //console.log(88888)
            console.log(response.data)
            comdata.value=response.data
          },
          (error)=>{
            console.log(error)
          }
      )
})
onMounted(()=>{
  axios
      .get('/api/getRecommend', {
        params: {
          movieId:route.params.id,
          pageNumber:pageNumber.value,
          pageSize:pageSize
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response)=>{
            movieLists.value=response.data.records
            console.log(movieLists.value)
          },
          (error)=>{
            console.log(error)
          }
      )
})

let loading = false
window.addEventListener('scroll', function () {
      const windowHeight = window.innerHeight;

      const documentHeight = document.body.offsetHeight;

      const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      // 检查是否滚动到页面底部
      if (windowHeight + scrollPosition >= documentHeight -10 && !loading) {
        loading = true
        pageNumber.value++;
        axios
            .get('/api/getRecommend', {
              params: {
                pageSize: pageSize,
                pageNumber: pageNumber.value,
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('token')
              },
            })
            .then(
                (response) => {
                  movieLists.value = movieLists.value.concat(response.data.records);
                },
                (error) => {
                  console.log(error);
                },
            ).finally(() => {
              loading = false
            }
        )
      }
    }
)
</script>

<template>
  <div class="movie_detail">
    <SearchBar></SearchBar>
    <div class="top">
      <div class="left">
        <div class="image"><img :src="poster"/></div>
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
        <div class="movie_name">{{ title }}</div>
        <div style="width: 100%;">上映日期：{{releaseDate}}</div>
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
<!--            <div class="peoples">2500人评分</div>-->
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
        <el-button type="primary" @click="summitComment">
          确认
        </el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
      </span>
        </template>
      </el-dialog>
      <div class="right">
        <div class="director">
          <div class="titleline">
            <el-divider content-position="left"><span class="info">导演</span></el-divider>
          </div>

          <div class="content">
            {{director}}
          </div>
        </div>
        <div class="actor">
          <div class="titleline">
            <el-divider  content-position="left" ><span class="info">主演</span></el-divider>
          </div>

          <div class="content">
            {{actors}}
          </div>
        </div>
        <div class="story">
          <div class="titleline">
            <el-divider content-position="left"><span class="info">情节</span></el-divider>
          </div>

          <div class="content">
            <span>{{story}}</span>
          </div>
        </div>
      </div>
    </div>

    <MovieHeat :movie-id="route.params.id"></MovieHeat>

    <el-divider content-position="left" style="margin: 20px; width: 96vw">用户评论</el-divider>
    <div class="comments" style="margin: 20px">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <p class="comsection" v-for="item in comdata">
            <div class="sectiontop" >
              <div class="uname">用户名：{{item.user}}</div>
              <div class="score">评分：{{ item.score}}分</div>
<!--              <div class="like">同意<el-button type="danger" :icon="Star" circle /></div>-->
            </div>
            <el-divider />
            <div class="sectiontbottom">{{item.comment}}</div>
          </p>
        </div>
      </el-scrollbar>
    </div>
    <div class="movie_recomand" >
      <el-divider content-position="left" style="width: 96vw">推荐</el-divider>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
  </div>

</template>

<style scoped>

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
  padding: 8px;
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
  margin: 20px;
}
.movie_recomand .move_container{
  width: 96vw;
}
  .mainline div{
    border:dashed  2px #b1b3b8;
  }


</style>
