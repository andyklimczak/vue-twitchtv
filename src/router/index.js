import Vue from 'vue'
import Router from 'vue-router'
import Twitch from '@/components/Twitch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Twitch',
      component: Twitch
    }
  ]
})
