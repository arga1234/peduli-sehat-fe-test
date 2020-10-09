<template>
    <div>
    <div class="topMainPage">
        <p class="leftMainPage">Waktu Shalat</p>
        <p class="rightMainPage"><ul><li>Jakarta Pusat</li></ul></p>
    </div>
    <div class="mainPage">
        <div class="clock">
            <p class="clockTime">{{timeNow}}</p>
            <p class="nextPrayer">Next Prayer : {{nextPrayTime}} </p>
        </div>
        <img :src="mosque" class="mosque">
        <img :src="mekah" class="mekah">
        <img :src="question" class="question">
        <img :src="mosqueBack" style="width:100%">
    </div>
    <div class="botMainPage">
        <p class="leftMainPage">{{hijrDate}}</p>
        <p class="rightMainPage">{{masehiDate}}</p>
    </div>
    </div>
</template>
<script>
import {clock} from '../helper/configurePrayTime'
import {mapState, mapActions} from 'vuex'
import { writeIslamicDate } from '../helper/islamicDate'
import {dateNow} from '../helper/getCurrentDate'
import { mosque, mekah, question, mosqueBack} from '../assets/componentData/imageListMainPage'
export default {
    data(){
        return{
            hijrDate: writeIslamicDate(),
            masehiDate: dateNow(), 
            mosque, 
            mekah, 
            question, 
            mosqueBack, 
        }
    }, 
    mounted(){
        this.startInterval()
    }, 
    computed: {
        ...mapState(['timeNow', 'nextPrayTime']),
    },
    methods: {
        ...mapActions([
            'getTimeNow',
        ]),
        startInterval() {
            setInterval(async () => {
                var date = new Date()
                var timenow = await clock(date)
                this.getTimeNow(timenow)
            }, 1000);
          }
    }
}
</script>