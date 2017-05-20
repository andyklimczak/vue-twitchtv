import Vue from 'vue'
import Router from 'vue-router'
import Twitch from '@/components/Twitch'
import StreamPage from '@/components/StreamPage'

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
      name: 'StreamPage',
      component: StreamPage
    }
  ]
})
