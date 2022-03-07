<template>
  <div class="tcont">
    <div class="firstChild">{{message}}</div>
    <div>{{sex}}</div>
  </div>
</template>

<script>
export default {
props: ['title'],
  data(){
    return{    
        sex: this.title,
        message:'여기서부터 자식요소입니다.'
    }
  }
}
</script>

<style>
.tcont {margin-top:25px;}
.firstChild {padding:5px 0;color:#000; font-weight:bold;}
</style>