<template>
  <div class="rating-container">
    <div class="hearts-container">
      <div
        v-for="index in 5"
        :key="index"
        :class="{ 'partial-heart': isPartialHeart(index) }"
        class="heart-wrapper"
      >
        <!-- Фоновая (бардовая) сердечка -->
        <svg class="heart heart-background" height="24" viewBox="0 0 24 24" width="24">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>

        <!-- Передняя (красная) сердечка - видна только для заполненных сердечек -->
        <svg
          v-if="shouldShowForeground(index)"
          :style="getHeartStyle(index)"
          class="heart heart-foreground"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>

        <!-- Маска для частичного заполнения -->
        <div
          v-if="isPartialHeart(index)"
          :style="{ width: getPartialPercentage(index) + '%' }"
          class="partial-mask"
        ></div>
      </div>
    </div>

    <div class="rating-text">{{ formattedRating }} <span class="reg"> / 5 </span></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: [Number, String],
    required: true,
    validator: (value) => {
      const num = parseFloat(value.toString().replace(',', '.'))
      return num >= 0 && num <= 5
    },
  },
})

// Форматируем рейтинг (заменяем точку на запятую)
const formattedRating = computed(() => {
  const num = parseFloat(props.rating.toString().replace(',', '.'))
  return num.toFixed(1).replace('.', ',')
})

// Определяем, является ли сердечко частично заполненным
const isPartialHeart = (index) => {
  const rating = parseFloat(props.rating.toString().replace(',', '.'))
  return index === Math.ceil(rating) && rating % 1 !== 0
}

// Определяем, нужно ли показывать передний слой сердечки
const shouldShowForeground = (index) => {
  const rating = parseFloat(props.rating.toString().replace(',', '.'))
  return index <= rating
}

// Получаем стиль для сердечки (для частичного заполнения)
const getHeartStyle = (index) => {
  const rating = parseFloat(props.rating.toString().replace(',', '.'))

  if (index < Math.ceil(rating) || rating % 1 === 0) {
    return { width: '100%' }
  }

  return { width: '100%' } // Ширина контролируется маской
}

// Получаем процент заполнения для частичной сердечки
const getPartialPercentage = (index) => {
  const rating = parseFloat(props.rating.toString().replace(',', '.'))

  if (index === Math.ceil(rating) && rating % 1 !== 0) {
    return (rating % 1) * 100
  }

  return 100
}
</script>

<style scoped>
.rating-container {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Poppins', sans-serif;
}

.hearts-container {
  display: flex;
  gap: 4px;
}

.heart-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heart {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  transition: all 0.2s ease;
}

.heart-background {
  fill: #800020; /* Бардовый цвет для незаполненных частей */
  z-index: 1;
}

.heart-foreground {
  fill: #ff3b30; /* Красный цвет для заполненных частей */
  z-index: 2;
}

/* Контейнер для частичного заполнения */
.partial-heart {
  overflow: hidden;
  border-radius: 0; /* Убираем скругление чтобы маска работала правильно */
}

.partial-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #ff3b30;
  z-index: 3;
  pointer-events: none;
  opacity: 0; /* Невидимый, используется только для маскировки */
}

/* Альтернативная версия с clip-path для более точного частичного заполнения */
.partial-heart .heart-foreground {
  clip-path: polygon(0 0, var(--fill-percentage) 0, var(--fill-percentage) 100%, 0 100%);
}

.rating-text {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0;
  text-align: center;
}

/* Анимация при hover */
.heart-wrapper:hover .heart-foreground {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.reg {
  font-weight: 400;
}
</style>
