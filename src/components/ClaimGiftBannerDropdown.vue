<template>
  <div class="gift-container">
    <!-- Кнопка для показа изображения -->
    <button class="header-btn horizontal-shake" @click="toggleClaimDropdown">
      <img alt="Claim gift" class="header-claim-btn" src="../assets/images/ClaimGift.png" />
      Claim Gift
    </button>

    <!-- Изображение, которое появляется при нажатии -->
    <div v-if="showImage" class="image-wrapper">
      <a
        class="popup-link"
        href="https://pokies-cwn.com/RcQV7m"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        <img alt="Claim Your Gift" class="gift-image" src="../assets/images/ClaimGiftImage.png" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showImage = ref(false)

function toggleClaimDropdown() {
  showImage.value = !showImage.value
}
</script>

<style scoped>
.header-claim-btn {
  max-width: 100%;
  max-height: 100%;
}

.horizontal-shake {
  animation: horizontal-shaking 0.35s infinite;
}

@keyframes horizontal-shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

.header-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 148px;
  height: 46px;
  gap: 10px;
  border: 1px solid;
  border-radius: 12px;
  box-shadow: 0 0 15px #ffd700;
  background: linear-gradient(to right, #00223b, #0d6eb9);
  padding: 10px 20px;
  color: #ffd700;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
}

.gift-container {
  position: relative;
  text-align: center;
  padding: 20px;
  z-index: 100;
}

.gift-button:hover {
  background-color: #45a049;
}

.image-wrapper {
  position: absolute;
  right: 0;
  margin-top: 20px;
  animation: fadeIn 0.5s ease-in-out;
}

.gift-image {
  min-width: 630px;
  border-radius: 10px;
  z-index: 2000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
