<template>
  <div class="streams">
    <stream v-for="stream in streams" :key="stream.id" :stream="stream"></stream>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import Stream from './Stream'

export default {
  name: 'streams',
  props: ['streams', 'fetchStreams'],
  components: {
    InfiniteLoading,
    Stream
  },
  created () {
    console.log('created streams')
    this.$store.commit('initTwitch')
    this.fetchStreams()
  },
  updated () {
    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
    setTimeout(() => {
      this.$store.commit('setLoading', false)
    }, 3000)
  },
  methods: {
    onInfinite () {
      console.log('on inf')
      this.fetchStreams()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .streams {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-evenly;
  }
</style>
