<script setup>
import {computed, onMounted, ref} from 'vue'
import SearchBar from '../components/SearchBar.vue'
import { useRouter } from 'vue-router'
import MovieList from "@/components/MovieList.vue";
import axios from "axios";
const router = useRouter()

const i = "@/assets/indexview/xskdjs2.webp"


const list = ref([])
const carouselDom = ref(null)
function handleSetCarousel(index) {
  carouselDom.value.setActiveItem(index)
}

const backgroundImage = ref('/@/assets/indexview/xskdjs2.webp');

const imageList = import.meta.glob('/@/assets/indexview/*.webp'); // 使用 import.meta.glob 动态加载所有匹配的图片文件

const changeBackground = async (index) => {
  const keys = Object.keys(imageList);
  if (keys[index]) {
    const module = await imageList[keys[index]]();
    backgroundImage.value = module.default;
  }
};
const activeTab = ref('all');
const movieTabs = ref([
  {
    value: 'all',
    label: '全部',
  },
  {
    value: 'Sci-Fi',
    label: '科幻',
  },
  {
    value: 'comedy',
    label: '喜剧',
  },
  {
    value: 'horror',
    label: '恐怖',
  },
  {
    value: 'thriller',
    label: '惊悚',
  },
  {
    value: 'action',
    label: '动作',
  },
])
const movieLists = ref([]);//保存返回的电影对象
function handleClickTab(tab) {//处理电影类型
  activeTab.value = tab.value;
  axios
      .get('/api/getMoviesByGenre', {
        params: {
          pageSize: pageSize,
          pageNumber: pageNumber.value,
          genre:tab.value
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('token')
        },
      })
      .then(
          (response) => {
            //console.log(response.data)
            movieLists.value=response.data.records;
            //console.log(movieLists.value)
            for (let j = 0; j < 4; j++) {
              list.value[j]=response.data.records[j];
            }
            //console.log(list.value)
          },
          (error) => {
            console.log(error); // 打印网络错误
          },
      )
}
const currentPageIndex = ref('');
function onPageChange(pageIndex) {
  currentPageIndex.value = pageIndex;
}
const currentCarouselItemIndex = ref(0);
function onCarouselChange(index) {
  currentCarouselItemIndex.value = index
}

const isCurrentCarouselItem = computed(() => index => currentCarouselItemIndex.value === index);

const toDetail = () => {
  router.push('/moviedetail')
}
const pageSize = 32
const pageNumber = ref(1)
onMounted(() => {
  axios
      .get('/api/getMovies', {
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
            //console.log(response.data)
            movieLists.value=response.data.records;
            //console.log(movieLists.value)
            for (let j = 0; j < 4; j++) {
              list.value[j]=response.data.records[j];
            }
          },
          (error) => {
            console.log(error); // 打印网络错误
          },
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
            .get('/api/getMovies', {
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
  <div class="contain">
    <SearchBar class="search-bar"></SearchBar>
    <div class="carousel-container">
      <el-carousel ref="carouselDom" height="800px" @change="onCarouselChange">
        <el-carousel-item v-for="item in list" :key="item.title"
                          :style="{ backgroundImage: 'url(' + item.poster + ')' }">
          <div class="information">
            <div class="title">
              <h2>{{ item.title }}</h2>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="picture">
        <div v-for="(item, index) in list" :key="index" class="img">
          <img :class="['p-item', isCurrentCarouselItem(index) ? 'active' : '']" :src="item.poster" alt=""
               @click="handleSetCarousel(index)">
          <span class='img-text' :title="item.title">{{ item.title }}</span>
        </div>


        <!-- Add more elements as needed -->
      </div>
    </div>

    <div class="tabs">
      <div class="header">
        <span>电影列表</span>
        <ul>
          <li v-for="tab in movieTabs" :key="tab.value" :class="[activeTab === tab.value ? 'is-active' : '']"
              @click="handleClickTab(tab)">
            {{ tab.label }}</li>
        </ul>
      </div>
      <el-divider />
      <MovieList :mList="movieLists"></MovieList>

    </div>
  </div>
</template>

<style lang="less" scoped>
.contain {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.el-carousel {
  width: 100%;
  height: 800px;

  .el-carousel__container {
    width: 100%;

    .el-carousel__item {
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}

// .Carposter {
//     height: 100%;
//     width: 100%;
//     background-image: url('../assets/indexview/xskdjs2.webp');
//     background-size: cover;
//     background-repeat: no-repeat;
// }

.search-bar {
  position: absolute;
  top: 20px;
  z-index: 9999;
}

:deep(.information) {
  display: flex;
  justify-content: space-between;
  color: white;
  width: 76%;
  height: 300px;
  margin: 400px auto 0 auto;

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  P {
    width: 400px;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  .title {
    position: relative;

    .el-button {
      position: absolute;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.2);
      height: 48px;
      width: 140px;
      line-height: 48px !important;
      border-radius: 24px;
      color: black;
    }
  }
}
.carousel-container {
  width: 100%;
  position: relative;
  .picture {
    width: 540px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: absolute;
    right: 30px;
    bottom: 75px;
    color: white;
    .active {
      width: 140px;
      height: 200px;
      font-weight: 800;
    }
  }
}

.img {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.img span {
  position: absolute;
  top: 105%;
  left: 50%;
  width: 120px;
  transform: translateX(-50%);
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.p-item {
  display: block;
  width: 120px;
  height: 170px;
  border-radius: 10px;
}

.tabs {
  margin-top: 20px;
  width: 90%;

  .header {
    display: flex;
    align-items: center;

    span {
      color: white;
      font-size: 30px;
      font-weight: 800;
      margin-right: 40px;
    }

    ul {
      list-style: none;
      display: flex;

      li {
        color: white;
        width: 65px;
        line-height: 48px;
        text-align: center;
        cursor: pointer;
        box-sizing: border-box;

        &:hover {
          color: var(--el-color-primary);
        }
      }

      li.is-active {
        color: var(--el-color-primary);
        border-bottom: 2px solid var(--el-color-primary);
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }




}

:deep(.el-tabs) {
  width: 90%;

  .el-tabs__item {
    color: white;

    &:hover {
      color: var(--el-color-primary);
    }
  }

  .el-tabs__item.is-active {
    color: var(--el-color-primary);
  }

  .el-tabs__content {
    color: white;
  }
}

:deep(.el-pagination) {
  display: flex;
  justify-content: flex-end;
}

:deep(.el-card) {
  cursor: pointer;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}</style>

