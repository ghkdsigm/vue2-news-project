<template>
  <div>      
      <section>
          <UserProfile :info="fetchedItem" >
              <template v-slot:username>{{ fetchedItem.user }}</template>
              <template v-slot:time>{{ fetchedItem.time_ago }}</template>
          </UserProfile>
      </section>
      <section>
          <h2> {{fetchedItem.title}} </h2>
      </section>
      <section>
          <div v-html="fetchedItem.content">  </div>
      </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';
export default { 
    components:{
        UserProfile
    },
    computed:{
        ...mapGetters(['fetchedItem'])
    },
    created(){       
        const itemname = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemname)
    }
}
</script>

<style scope>
.user-container {
    align-items:center;
}
.user-description {padding-left:8px;}
</style>