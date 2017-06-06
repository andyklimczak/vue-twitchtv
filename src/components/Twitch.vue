<template>
  <div class="twitch">
    <stream v-for="stream in streams" :key="stream.id" :stream="stream"></stream>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
import Twitch from 'twitch.tv-api'
import InfiniteLoading from 'vue-infinite-loading'
import Stream from './Stream'

export default {
  name: 'twitch',
  components: {
    Stream,
    InfiniteLoading
  },
  data () {
    return {
      offset: 0,
      limit: 8,
      streams: [],
      twitch: null,
      loading: false
    }
  },
  created () {
    console.log('created')
    this.twitch = new Twitch({
      id: '462kn4pnv92z2eef9e7kjphltdz5hy'
    })
    this.fetchStreams()
  },
  updated () {
    console.log('update')
    this.loading = false
    setTimeout(() => {
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
    }, 3000)
  },
  methods: {
    onInfinite () {
      console.log('on inf')
      this.fetchStreams()
    },
    fetchStreams () {
      if (!this.loading) {
        this.loading = true
        const options = {
          offset: this.offset,
          limit: this.limit
        }
        return this.twitch.getTopStreams(options)
          .then(data => {
            console.log(data)
            return data.streams
          }).then(streams => {
            console.log(streams)
            this.streams = this.streams.concat(streams)
            this.offset += 4
          }).catch(error => {
            console.error(error)
          })
      }
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
