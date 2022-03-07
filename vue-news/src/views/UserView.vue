<template>
  <div>
        <user-profile :info="userInfo" >
            <!-- <template  slot="username">{{ userInfo.id }}</template> -->
            <!-- <router-link slot="username" :to="`/user/${userInfo.id}`">{{ userInfo.id }}</router-link>
            <template  slot="time">{{ userInfo.created }}</template> -->
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ 'Joind ' + userInfo.created }}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    components:{
        UserProfile 
    },
    computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){       
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)
    }
}
</script>

<style>

</style>