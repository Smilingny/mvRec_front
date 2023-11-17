<script setup>

</script>

<template>
  <div class="recode_side">
    <div class="five">
      <h3>五星</h3>
      <hr>
      <div class="move_container">
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
      </div>
    </div>
    <div class="four">
      <h3>四星</h3>
      <hr>
      <div class="move_container">
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
      </div>
    </div>
    <div class="three">
      <h3>三星</h3>
      <hr>
      <div class="move_container">
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
      </div>
    </div>
    <div class="two">
      <h3>二星</h3>
      <hr>
      <div class="move_container">
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
      </div>
    </div>
    <div class="one">
      <h3>一星</h3>
      <hr>
      <div class="move_container">
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影1</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影2</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影3</span>
        </div>
        <div class="move">
          <div><img src="../../../public/GGbond.jpg"/></div>
          <span>电影4</span>
        </div>
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
    margin-bottom: 4vh;
  }
.move_container{
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
}
.move_container img{
  width: 15vw;
  height: 15vh;
}
.move span{
  text-align: center;
}
</style>