<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <div class="pure-u-1-5">
        <router-link :to="{ name: 'Twitch'}" class="pure-menu-heading">
          VueTwitch
        </router-link>
      </div>

      <div class="pure-u-4-5">
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <input v-model="query" @keyup.enter="search" placeholder="Search">
          </li>
          <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-menu',
    methods: {
      search () {
        console.log('in search', this.$store.state.query)
        this.$router.push({ name: 'Search', params: { search_query: this.$store.state.query } })
      }
    },
    computed: {
      query: {
        get () {
          return this.$store.state.query
        },
        set (val) {
          this.$store.commit('setQuery', val)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
