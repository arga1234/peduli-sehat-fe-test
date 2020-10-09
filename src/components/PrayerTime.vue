<template>
    <div class="prayerTime">
        <div v-for="(x, index) in prayerTimeList" :key="index" class="item">
            <div :class="x.active ? 'leftItem activeItem':'leftItem' ">
                <img :src="x.leftItem.image" class="mr-10">
                <span class="mb-5">{{x.leftItem.label}}</span>
            </div>
            <div :class="x.active ? 'rightItem activeItem':'rightItem'">
                <span class="mr-10">{{prayTime(x.rightItem.hour, x.rightItem.minute)}}</span>
                <img :src="global" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import {message} from '../helper/messageToSend'
import {mapState, mapActions} from 'vuex'
import {prayTimeNow, nextPray} from '../helper/configurePrayTime'
import {prayerTimeList, global} from '../assets/componentData/prayerTimeList'
export default {
    data(){
        return{
            prayerTimeList, 
            global, 
            messageToSend: message,
        }
    }, 
    computed: {
        ...mapState(['timeNow', 'nextPrayTime', 'token']),
    },
    async mounted(){
       await prayTimeNow(this.prayerTimeList)  
    },
    methods: {
        ...mapActions(['setNextPray', 'notifUserToPray']),
        prayTime(hour, minute){
            return `${hour < 10 ? '0'+hour:hour} : ${minute < 10 ? '0'+minute:minute}`
        },  
    },
    watch : {
        timeNow(val){
            if(val){
                prayTimeNow(this.prayerTimeList)  
                this.messageToSend.registration_ids = []
                var hour = nextPray.rightItem.hour
                var minute = nextPray.rightItem.minute
                var second = nextPray.rightItem.second
                var nextPrayTime = `${nextPray.leftItem.label}, ${hour < 10 ? '0'+hour:hour}:${minute < 10 ? '0'+minute:minute}`
                var nextPrayTimeToCompare = `${hour < 10 ? '0'+hour:hour}:${minute < 10 ? '0'+minute:minute}:${second<10?'0'+second:second}`
                if(val == nextPrayTimeToCompare){
                    this.messageToSend.notification.title = `sudah masuk waktu ${nextPray.leftItem.label}`
                    this.messageToSend.registration_ids.push(this.token)
                    this.notifUserToPray(this.messageToSend)
                }
                this.setNextPray(nextPrayTime)
            }
        }
    }
}
</script>