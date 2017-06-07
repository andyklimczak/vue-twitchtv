<template>
  <div id="app">
    <home-menu></home-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeMenu from '@/components/HomeMenu'
  export default {
    name: 'app',
    components: {
      HomeMenu
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>
