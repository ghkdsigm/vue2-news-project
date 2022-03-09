<template>
  <div class="tcont">
    <div class="firstChild">{{message}}</div>
    <input type="checkbox"  :value="checked" @click="toggleCheckBox">
    <input type="checkbox"  :value="checked" @click="toggleCheckBox">
  </div>
</template>

<script>
export default {
props: ['value'],
  data(){
    return{    
        message:'여기서부터 자식요소입니다.'
    }
  },
  methods:{
    toggleCheckBox(){
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>
.tcont {margin-top:25px;}
.firstChild {padding:5px 0;color:#000; font-weight:bold;}
</style>