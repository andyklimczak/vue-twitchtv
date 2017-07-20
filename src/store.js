import Vue from 'vue'
import Vuex from 'vuex'
import Twitch from 'twitch.tv-api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twitch: null,
    streams: [],
    loading: false,
    offset: 0,
    limit: 8
  },
  mutations: {
    initTwitch (state) {
      state.twitch = new Twitch({
        id: '462kn4pnv92z2eef9e7kjphltdz5hy'
      })
    },
    setLoading (state, val) {
      state.loading = val
    }
  },
  actions: {
    fetchStreams ({ commit, state }) {
      if (!state.loading) {
        state.loading = true
        const options = {
          offset: state.offset,
          limit: state.limit
        }
        return state.twitch.getTopStreams(options)
          .then(data => {
            console.log(data)
            return data.streams
          }).then(streams => {
            console.log('get streams', streams)
            state.streams = state.streams.concat(streams)
            state.offset += state.limit
          }).catch(error => {
            console.error(error)
          })
      }
    }
  }
})
