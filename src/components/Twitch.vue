<template>
  <div class="twitch">
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
    console.log('created twitch')
    this.$store.commit('clearStreams')
  },
  methods: {
    fetchStreams () {
      this.$store.dispatch('fetchStreams')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
