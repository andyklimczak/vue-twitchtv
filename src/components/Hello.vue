<template>
  <div class="hello">
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
  name: 'hello',
  components: {
    Stream
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
