<template>
  <div class="search">
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
    console.log('created search')
    this.$store.commit('initTwitch')
    this.$store.dispatch('searchStreams', this.$route.params.search_query)
  },
  updated () {
    console.log('update search')
    setTimeout(() => {
      this.$store.commit('setLoading', false)
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
    }, 3000)
  },
  methods: {
    onInfinite () {
      console.log('on inf')
      this.$store.dispatch('searchStreams', this.$route.params.search_query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-evenly;
}

.stream {
  margin: 10px;
}
</style>
