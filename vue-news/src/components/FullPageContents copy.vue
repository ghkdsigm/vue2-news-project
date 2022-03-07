<template>
  <div>
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <button class="next" @click="$refs.fullpage.api.moveSectionDown()">Next</button>
        Section 1
      </div>
      <div class="section">
        <button class="prev" @click="$refs.fullpage.api.moveSectionUp()">Prev</button>
        Section 2
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data(){
    return{    
        options: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          menu: '#menu',
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['green', '#ff5f45', '#0798ec'],
          afterLoad: this.afterLoad,
        },
    }
  },
  methods: {
    // Called when your components are ready. That is up to you to decide when.
    componentsReady() {
      this.$refs.fullpage.init()
    }
  }
}
</script>

<style>
/* .tcont {margin-top:25px;}
.firstChild {padding:5px 0;color:#000; font-weight:bold;} */
</style>