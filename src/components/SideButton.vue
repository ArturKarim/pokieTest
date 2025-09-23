<template>
  <button :class="classes">
    <img :src="imageSrc" alt="img" class="btn-img" />
    <span class="btn-text">{{ text }}</span>
  </button>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  srcImg: String,
  text: String,
  isActive: Boolean,
})

const imageSrc = computed(() => {
  return new URL(props.srcImg, import.meta.url).href
})

const classes = computed(() => {
  return props.isActive ? 'side-button active' : 'side-button'
})
</script>
<style scoped>
.side-button {
  padding: 12px 20px;
  gap: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  max-width: 325px;
  width: 325px;
  text-wrap: wrap;
  height: 74px;
  background-color: #10324c;
  border: 1px solid #57626c;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0;
  text-transform: capitalize;
  border-radius: 12px;
  text-align: start;
}

.active {
  background-color: #295374;
  border: 1px solid #57626c;
}

.btn-img {
  width: 50px;
  height: 50px;
}

.btn-text {
  max-width: 220px;
}
</style>
