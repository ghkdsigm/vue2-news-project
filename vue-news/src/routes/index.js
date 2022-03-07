import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskViews.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import Test from '../views/Test.vue'
//import Fullpage from '../views/FullPage.vue'


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
    },
    {
      path: '/ask',
      name:'ask',
      component: AskView,
    },
    {
      path: '/jobs',
      name:'jobs',
      component: JobsView,
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