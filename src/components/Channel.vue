<template>
  <div class="channel">
    {{ $route.params.channel_name }}
    <iframe
      :src="streamUrl"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'channel',
  created () {
    console.log(this.$route.params)
    console.log(this.streamUrl)
  },
  computed: {
    streamUrl () {
      return `http://player.twitch.tv/?channel=${this.$route.params.channel_name}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
