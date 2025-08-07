<template>
  <Banner />
<!--  <h1>게시물 목록</h1>-->
  <div class="main-stage">
    <PostList />
  </div>

</template>

<style>
  @import '../components/common/style.css';
  @import '../components/posts/style.css';

</style>

<script>
import Banner from '../components/common/Banner.vue'
import PostList from '../components/posts/PostList.vue'

export default {
  components: { Banner, PostList }
}
</script>
