<template>
  <div class="goods">
    <h1 class="goods-text">상품</h1>
    <div class="goods-list">
      <div class="goods-item" v-for="n in 4" :key="n">
        <div class="product_image" :style="{ backgroundImage: 'url(/images/default_image.jpg)' }"></div>
        <div class="product_properties">
          <h3 class="product-name">Product ID</h3>
          <h6 class="product-type">Product TYPE</h6>
          <del class="product-price_before">Price</del>
          <h2 class="product-price">$00</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList'
}
</script>
