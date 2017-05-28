import Vue from 'vue'
import Router from 'vue-router'
import Twitch from '@/components/Twitch'
import Channel from '@/components/Channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Twitch',
      component: Twitch
    },
    {
      path: '/:channel_name',
      name: 'Channel',
      component: Channel
    }
  ]
})
