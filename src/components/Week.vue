<template>
    <div class="week">
        <div v-for="(item, index) in day" :key="index">
           <div :class="item.active?'activeSpan': ''">
                <span>{{item.day}}</span>
                <span>{{item.date}}</span>
                <span>{{item.number}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {getOneWeek} from '../helper/getOneWeek'
export default {
    data(){
        return{
            day :[]
        }
    }, 
    mounted(){
        this.day = getOneWeek()
    }
}
</script>