<template>
  <div class="search">
    search: {{ $route.params.search_query }}
  </div>
</template>

<script>
import Twitch from 'twitch.tv-api'
export default {
  name: 'twitch',
  data () {
    return {
      streams: []
    }
  },
  updated () {
    console.log('updated')
    const twitch = new Twitch({
      id: '462kn4pnv92z2eef9e7kjphltdz5hy'
    })
    const query = this.$route.params.search_query
    return twitch.searchStreams(query)
        .then(data => {
          console.log(data)
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
