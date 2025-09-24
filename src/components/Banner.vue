<script setup></script>

<template>
  <div class="banner">
    <img alt="bannerLeft" class="banner-img" src="../assets/images/banner_full.png" />
    <!--    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerLeft.png" />-->
    <!--    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerRight.png" />-->
    <!--    <img alt="bannerLeft" class="banner-img" src="../assets/images/bannerRighter.png" />-->
    <div class="banner-info">
      <p class="banner-path">Home > Online Casinos</p>
      <p class="banner-title">Best Online Casinos Australia</p>
      <p class="banner-text">
        The following listing only includes carefully selected Australian online casinos.<br />
        Each platform provides fair conditions for pokies fans, such as smooth gameplay,<br />
        safe transactions, and reliable licensing.
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 454px;
}

.banner-img {
  width: 100%;
  height: 454px;
  object-fit: cover;
  object-position: center;
}

.banner-info {
  display: flex;
  flex-direction: column;
  color: white;
  position: absolute;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.banner-path {
  font-size: 12px;
}

.banner-title {
  font-size: 40px;
  text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.6);
  font-weight: bold;
}

.banner-text {
  font-size: 16px;
}
</style>
