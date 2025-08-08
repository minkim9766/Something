<script setup>
  import { motion } from "motion-v"
</script>

<template>
  <div class="navbar-container">
    <motion.div :initial="{ scale:0 }" :animate="{ scale:1 }" class="navbar">
      <div class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/posts">Posts</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </div>

    </motion.div>
    <div class="extra-nav">
      <router-link class="nav-link" to="/login">Login</router-link>
      <router-link class="nav-link" to="/register">Register</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>
