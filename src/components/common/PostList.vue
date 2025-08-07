<template>
  <div class="posts">
    <h2 class="post-title">POST</h2>
    <div v-for="n in 3" :key="n">
      <div class="post-div">
        <h4 class="post-content">• 여기에 글이 표시됩니다.</h4>
        <p class="post-time">00-00</p>
        <hr />
      </div>

    </div>
    <p class="more-post" @click="goToMore">더보기&gt;</p>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  methods: {
    goToMore() {
      window.location.href = "https://www.google.com";
    }
  }
}
</script>