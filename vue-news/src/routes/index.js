import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskViews.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import Test from '../views/Test.vue'
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
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name:'ask',
      component: AskView
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name:'jobs',
      component: JobsView
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