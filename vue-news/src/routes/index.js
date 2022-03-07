import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskViews.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import Test from '../views/Test.vue'
import bus from '../utils/bus.js'
import { store  } from '../store/index.js'
//import Fullpage from '../views/FullPage.vue'
//import createListView from '../views/CreateListView.js'//HOC방식


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'home',
      redirect: '/news',
    },
    {
      path: '/news',
      name:'news',
      component: NewsView,
      beforeEnter:(to, from, next) => {
        bus.$emit('start:spinner');
        
        store.dispatch('FETCH_LIST',to.name)
        .then(()=>{
            bus.$emit('end:spinner');
            next();
        })
        .catch((err)=>{
            console.log(err)
        });
        
      },
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name:'ask',
      component: AskView,
      beforeEnter:(to, from, next) => {
        bus.$emit('start:spinner');
        
        store.dispatch('FETCH_LIST',to.name)
        .then(()=>{
            //bus.$emit('end:spinner');
            next();
        })
        .catch((err)=>{
            console.log(err)
        });
        
      },
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name:'jobs',
      component: JobsView,
      beforeEnter:(to, from, next) => {
        bus.$emit('start:spinner');
        
        store.dispatch('FETCH_LIST',to.name)
        .then(()=>{
            bus.$emit('end:spinner');
            next();
        })
        .catch((err)=>{
            console.log(err)
        });
        
      },
      //component: createListView('JobsView'),
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/fullpage',
      name:'fullpagecontents',
      component: () => import('../views/FullPage.vue')

    },
    // {
    //   path: '/item/:id',
    //   component: ItemView,
    // },
    // {
    //   path: '/user/:id',
    //   component: UserView,
    // }
    
  ]
})