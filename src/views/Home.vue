<template>
  <div class="home">
    <div class="pd-l-r-20 mb-15">
      <MainPage />
    </div>
    <div class="pd-l-r-20 mb-15">
      <Week />
    </div>
    <div class="pd-l-r-20  mb-15">
    <PrayerTime />
    </div>
    <BottomMenu />
  </div>
</template>

<script>
import MainPage from '../components/MainPage'
import BottomMenu from '../components/BottomMenu'
import PrayerTime from '../components/PrayerTime'
import Week from '../components/Week'
export default {
  name: 'Home',
  components : {
    BottomMenu : BottomMenu, 
    PrayerTime: PrayerTime,
    Week: Week,
    MainPage: MainPage,
  }
}
</script>
