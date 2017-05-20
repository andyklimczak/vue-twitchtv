<template>
  <div class="stream">
    {{ $route.params.channel_name }}
  </div>
</template>

<script>
export default {
  name: 'streampage',
  created () {
    console.log(this.$route.params)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
