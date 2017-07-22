<template>
  <div class="search">
    <streams :streams="$store.state.streams" :fetch-streams="fetchStreams"></streams>
  </div>
</template>

<script>
import Streams from './Streams'

export default {
  name: 'twitch',
  components: {
    Streams
  },
  created () {
    console.log('created search')
    this.$store.commit('clearStreams')
  },
  methods: {
    fetchStreams () {
      this.$store.dispatch('searchStreams', this.$route.params.search_query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
