<script setup>
import { motion } from "motion-v"
</script>

<template>
  <div class="sns">
    <h1 class="SNS-Text">SNS</h1>
    <motion.div :initial="{ scale: 0 }" :animate="{ scale: 1 }" class="SNS-Icon">
      <a  href="https://www.youtube.com" class="youtube-link">
        <img src="https://cdn-icons-png.freepik.com/256/1384/1384060.png?semt=ais_hybrid" class="youtube" alt="Youtube">
      </a>
      <a href="https://www.instagram.com" class="instagram-link">
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA5MTlfMjUg/MDAxNjMyMDE3OTA4NTA0.dhHpehPf66HwINvBr6OijefwiqeXdPcbcdCU1m1nZ1Ig.3R8X4ori4uDAxmc535BOc6_M8zQHWSfotX-gO8YX4Mwg.PNG.brotherm1n/SE-5c4e2eac-5093-4df9-9626-2bf8df6eb194.png?type=w800" class="instagram" alt="Instagram">
      </a>
      <a href="https://www.twitter.com" class="twitter-link">
        <img src="https://cdn-icons-png.flaticon.com/512/3938/3938028.png" class="twitter" alt="twitter">
      </a>
    </motion.div>
  </div>
  <div class="logo">
    <img class="logo-image" src="https://raw.githubusercontent.com/minkim9766/Something/refs/heads/master/docs/images/logo.png" alt="도마뱀 카페 로고">
  </div>
</template>

<script>
export default {
  name: 'SNS'
}
</script>

<style scoped>
.logo-image {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}
</style>
