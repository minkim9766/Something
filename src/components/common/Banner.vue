<script setup>
  import { motion } from "motion-v"
</script>

<template>
  <motion.div :initial="{ scale:0 }" :animate="{ scale:1 }" class="banner">
    <h1 class="banner-n">도마뱀 카페</h1>
  </motion.div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner'
}
</script>
