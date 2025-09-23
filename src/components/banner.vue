<script setup></script>

<template>
  <div class="banner">
    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerLefter.png" />
    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerLeft.png" />
    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerRight.png" />
    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerRighter.png" />
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.banner-img {
  max-width: 45%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
}
</style>
