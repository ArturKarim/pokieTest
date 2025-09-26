<template>
  <div class="container-card">
    <img :alt="name + ' Logo'" :src="imageSrc" class="card-img" />
    <div class="info-card">
      <p class="name-card" @click="openNewTab(url)">{{ name }}</p>
      <Rating :rating="rating" />
    </div>
    <div class="card-info-text">
      <p>{{ text1 }}</p>
      <p>{{ text2 }}</p>
    </div>
    <div class="card-info-btn">
      <button class="review-btn" @click="openNewTab(url)">Review</button>
      <button class="play-now-btn" @click="openNewTab('#')">Play Now</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Rating from '@/components/Rating.vue'

const props = defineProps({
  name: String,
  rating: Number,
  imgSrc: String,
  text1: String,
  text2: String,
  url: String,
})

const imageSrc = computed(() => {
  return new URL(props.imgSrc, import.meta.url).href
})

function openNewTab(url) {
  // Открыть в новой вкладке
  window.open(url, '_blank')
}
</script>

<style scoped>
.container-card {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-radius: 17px;
  background-color: #10324c;
  border: 1px solid #57626c;
  min-width: 1012px;
  height: 140px;
}

.card-img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 30px;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  justify-content: start;
}

.name-card {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  cursor: pointer;
}

.card-info-text {
  width: 339px;
  height: 64px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0;
  background-color: #2f5776;
  border-radius: 12px;
  padding: 12px;
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  justify-content: start;
}

.card-info-btn {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.play-now-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffc700;
  color: #280f23;
  width: 133px;
  height: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: capitalize;
  border-radius: 10px;
}

.review-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00192b;
  border-radius: 10px;
  color: white;
  width: 133px;
  height: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: capitalize;
}
</style>
