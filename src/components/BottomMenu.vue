<template>
    <div class="bottomMenu">
     <label v-for="(item,index) in menuList" :key="index">
      <img :src="item.image" alt="">
      <span>{{item.label}}</span>
     </label>
   </div>
</template>
<script>
import {menuList} from '../assets/componentData/menuList.js'
export default {
    data(){
        return{
            menuList
        }
    }
}
</script>