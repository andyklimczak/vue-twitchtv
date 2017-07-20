<template>
  <div class="twitch">
    <stream v-for="stream in $store.state.streams" :key="stream.id" :stream="stream"></stream>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import Stream from './Stream'

export default {
  name: 'twitch',
  components: {
    Stream,
    InfiniteLoading
  },
  created () {
    console.log('created')
    this.$store.commit('initTwitch')
    this.$store.dispatch('fetchStreams')
  },
  updated () {
    console.log('update')
    console.log('store', this.$store)
    setTimeout(() => {
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      this.$store.commit('setLoading', false)
    }, 3000)
  },
  methods: {
    onInfinite () {
      console.log('on inf')
      this.$store.dispatch('fetchStreams')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.twitch {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-evenly;
}

.stream {
  margin: 10px;
}
</style>
