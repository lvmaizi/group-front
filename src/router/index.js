import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/index'
import Friends from '@/views/index/friends'
import Messages from '@/views/index/messages'
import My from '@/views/index/my'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { 
      path: '/', 
      component: Index, 
      redirect: '/friends',
      children: [
        {
          path: '/friends',
          component: Friends
        },
        {
          path: '/messages',
          component: Messages
        },
        {
          path: '/my',
          component: My
        }
      ] 
    }
  ]
})

export default router
