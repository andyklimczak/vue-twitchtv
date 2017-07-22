import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Channel from '@/components/Channel'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/:channel_name',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/search/:search_query',
      name: 'Search',
      component: Search
    }
  ]
})
