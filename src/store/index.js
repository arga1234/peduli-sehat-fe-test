import { createStore } from 'vuex'
// import {axiosInstance} from '../helper/axios'
import axios from 'axios'
export default createStore({
  state: {
    timeNow : null,
    nextPrayTime : null,
    token: null
  },
  mutations: {
    setTimeNow(state, data){
      state.timeNow = data
    }, 
    setNextPray(state, data){
      state.nextPrayTime = data
    },
    setToken(state, data){
      state.token = data
    }
  },
  actions: {
    getTimeNow({commit}, data){
      commit('setTimeNow', data)
    }, 
    setNextPray({commit}, data){
      commit('setNextPray', data)
    }, 
    setToken({commit}, data){
      commit('setToken', data)
    },
    async notifUserToPray({commit}, data){
      console.log(commit)
      console.log("this is data", data)
      console.log("notify user actived")
      await axios.post('/fcm/send', data, {
        headers : {
          'Authorization' : process.env.VUE_APP_API_SERVER_KEY,
        }
      })
    }
  },
  modules: {
  }
})
