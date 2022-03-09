<template>  
  <div>
    <input type="text" v-model="input1">
    <div>{{input1}}</div>
    <button type="button" @click="actionInput"></button>
    <ul>
      <li v-for="user in users" :key="user">{{user}}</li>
    </ul>
    <!-- <ul>
      <li v-for="item in options" :key="item">{{item.name}}에 나이는 {{item.age}}</li>
    </ul>
    <select name="" id="">
      <option v-for="(data,index) in options" :key="index" :value="(data.age)">{{data.name}}</option>
    </select> -->
    <table id="table" v-if="tableShow">
      <tr v-for="(data,index) in options" :key="index"> 
        <td>{{data.num}}</td>
        <td>{{data.name}}</td>
        <td>{{data.age}}세</td>
      </tr>
    </table>
    <button type="button" @click="tbShow">나타내기</button>
    <button type="button" @click="countUp">{{number}}</button>

    <test-contents v-model="checked"></test-contents>
  </div>
</template>

<script>
import TestContents from '../components/TestContents.vue';
export default {  
  components:{
    TestContents
  },
  data(){
    return {
      //title:'승현이의연습장',
      input1:'',
      users:[1,2,3,4,5,6],
      options:[
        {name:'신수지',age:'34',num:1},
        {name:'노다솜',age:'34',num:3},
        {name:'윤정민',age:'33',num:2}
      ],
      tableShow:false,
      number:0,
      //sex:this.title,
      women:'females',
      man:'male',
      checked:false,
    }
  },
  methods:{
    actionInput(){
      this.input1 = 123
    },
    tbShow(){
      this.tableShow = true
    },
    countUp(){
      this.number++
    }
  },
  created(){
    this.options.sort((a,b )=> {return a.num - b.num})
  }
 
}
</script>

<style>

</style>