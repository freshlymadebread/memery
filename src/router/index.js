import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/index'
import Index from '@/page/index'
import Welcome from '@/page/welcome/index'
import Poetry from './poetry'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login',
    name: 'default',
    meta:{
      requiresAuth: true,
      hidden: true
    },
   },{
    path: '/login',
    name: 'default',
    component: Login,
    meta:{
      hidden: true
    },
   },{
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: '/index/welcome',
    meta:{
      requiresAuth: true,
      name: '首页',
      hidden: false
    },
    children:[{
      path: 'welcome',
      name: 'Welcome',
      component: Welcome,
      meta:{
        requiresAuth: true,
        name: '欢迎',
        hidden: true
      }},
      Poetry,
    ]
   },
  ]
})
