<template>
  <div class="header" :style="[$route.name === 'fullpagecontents' ? {position:'absolute', zIndex :999, width:'100%'}: {position:'relative'}]">
      <router-link to="/news">뉴스</router-link> |
      <router-link to="/ask">질문</router-link> |
      <router-link to="/jobs">취업</router-link> |
      <router-link to="/test">연습</router-link> |
      <router-link to="/fullpage">풀페이지</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
.header {
    color:#fff;
    background-color:#42b883;
    display:flex;
    padding:8px;    
}
.header a {
    color: #fff;
    text-decoration: none;    
    margin: 0 5px;
    font-weight: bold;
}
.header a:hover {
    color: rgb(73, 22, 216);
}
.header .router-link-active {
    color: rgb(73, 22, 216);
}
</style>