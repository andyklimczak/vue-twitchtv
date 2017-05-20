<template>
  <div class="twitch">
    <stream v-for="stream in streams" :key="stream.id" :stream="stream"></stream>
    <pre>
      {{$data}}
    </pre>
  </div>
</template>

<script>
import Twitch from 'twitch.tv-api'
import Stream from './Stream'
export default {
  name: 'twitch',
  components: {
    Stream
  },
  data () {
    return {
      streams: []
    }
  },
  created () {
    console.log('created')
    const twitch = new Twitch({
      id: '462kn4pnv92z2eef9e7kjphltdz5hy'
    })
    return twitch.getTopStreams()
        .then(data => {
          console.log(data)
          return data.streams
        }).then(streams => {
          console.log(streams)
          this.streams = streams
        }).catch(error => {
          console.error(error)
        })
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
