<template>
  <div class="body">
      <router-view/>
  </div>
</template>

<script>
import messagingService from '../src/helper/messaging-service' 
import {firebase} from '../src/helper/firebaseApp'
import {firebaseConfig} from '../src/helper/firebaseConfig'
import {mapActions} from 'vuex'
import './assets/style/style.scss'
export default {
  data(){
    return{

    }
  }, 
  created(){
    const firebaseApp = firebase.initializeApp(firebaseConfig)
    window.firebaseMessaging = firebaseApp.messaging();
    
    var vm = this;

    vm.setFbMessaging();
    window.firebaseMessaging.onMessage(function(payload) {
      console.log(payload)
      let notification = payload.notification;
      alert(notification.body);
    });
  }, 
  methods: {
    ...mapActions(['setToken']),
    async setFbMessaging() {
      let msgService = new messagingService();
      await msgService.requestPermissionAsync();
      console.log("Getting token, please wait")
      const token = await msgService.getTokenAsync();
      if(token){
        this.setToken(token)
      }
    },
  }
}
</script>
