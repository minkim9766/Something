<template>
  <div>
    <Banner />
    <NavBar />
    <div class="main-stage" style="overflow-y:auto">
      <div class="upper-stage" >
        <SNS />
        <Help />
      </div>
      <div class="bottom-stage">
        <ProductList />
        <div class="information">
          <AnnounceMent />
          <PostList />

        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import '../components/common/style.css';
  @import '../components/home/style.css';
</style>

<script>
import Banner from '../components/common/Banner.vue'
import NavBar from '../components/common/NavBar.vue'
import PostList from '../components/common/PostList.vue'
import SNS from '../components/home/SNS.vue'
import Help from '../components/home/Help.vue'
import ProductList from '../components/home/ProductList.vue'
import AnnounceMent from '../components/home/AnnounceMent.vue'

export default {
  components: {NavBar, Banner, PostList, SNS, Help, ProductList , AnnounceMent: AnnounceMent}
}
</script>
