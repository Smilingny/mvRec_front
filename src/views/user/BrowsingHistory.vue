<script setup>
import {ref} from "vue";
import { useRouter } from 'vue-router'
import MovieList from "@/components/MovieList.vue";
const router = useRouter()

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
</script>

<template>
  <div class="recode_side">
    <div class="five">
      <h3>五星</h3>
      <hr>
      <div class="move_container">
<!--        <div class="move">-->
<!--          <div><img src="../../../public/GGbond.jpg"/></div>-->
<!--          <span>电影1</span>-->
<!--        </div>-->
<!--        <div class="move">-->
<!--          <div><img src="../../../public/GGbond.jpg"/></div>-->
<!--          <span>电影2</span>-->
<!--        </div>-->
<!--        <div class="move">-->
<!--          <div><img src="../../../public/GGbond.jpg"/></div>-->
<!--          <span>电影3</span>-->
<!--        </div>-->
<!--        <div class="move">-->
<!--          <div><img src="../../../public/GGbond.jpg"/></div>-->
<!--          <span>电影4</span>-->
<!--        </div>-->
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
    <div class="four">
      <h3>四星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
    <div class="three">
      <h3>三星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
    <div class="two">
      <h3>二星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>
    <div class="one">
      <h3>一星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists"></MovieList>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .recode_side{
    width: 100%;
    height: 100%;

  }
  .recode_side .five,.four,.three,.two,.one{
    width: 98%;
    height: 25%;
    margin-bottom: 15vh;

  }
.move_container{
  padding: 0.5vw;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  height: 80%;
}
.move{
  width: 20%;
  height: 80%;
}
.move_container img{
  width: 15vw;
  height: 15vh;
}
.move span{
  text-align: center;
}
</style>
