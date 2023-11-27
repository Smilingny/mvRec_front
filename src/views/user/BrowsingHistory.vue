<script setup>
import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router'
import MovieList from "@/components/MovieList.vue";
import axios from "axios";
const router = useRouter()

const movieLists1 = ref([[], [], [], [], []]);
const pageNumber=ref(1);
const pageSize=8
onMounted(()=>{
  for (let i = 5; i >0; i--) {
    axios
        .get('/api/getMoviesByRating', {
          params: {
            pageSize: pageSize,
            pageNumber: pageNumber.value,
            rating:i
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': localStorage.getItem('token')
          },
        })
        .then(
            (response) => {
              movieLists1.value[i]=response.data.records;
              console.log(i)
              console.log(movieLists1.value[i])
            },
            (error) => {
              console.log(error); // 打印网络错误
            },
        )
  }
})
</script>

<template>
  <div class="recode_side">
    <div class="five">
      <h3>五星</h3>
      <hr>
      <div class="move_container" >
        <MovieList :m-list="movieLists1[5]" style="color: black !important;"></MovieList>
      </div>
    </div>
    <div class="four">
      <h3>四星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists1[4]"></MovieList>
      </div>
    </div>
    <div class="three">
      <h3>三星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists1[3]"></MovieList>
      </div>
    </div>
    <div class="two">
      <h3>二星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists1[2]"></MovieList>
      </div>
    </div>
    <div class="one">
      <h3>一星</h3>
      <hr>
      <div class="move_container">
        <MovieList :m-list="movieLists1[1]">
        </MovieList>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .recode_side{
    width: 100%;
    height: 100%;
    color: white;
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
