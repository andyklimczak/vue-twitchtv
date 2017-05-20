<template>
  <div class="stream">
    <img :src="stream.preview.large" />
    <div>
      {{ stream.channel.name}}
      {{ stream.game }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'stream',
  props: ['stream'],
  data () {
    return {
    }
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
