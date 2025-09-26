<template>
  <div class="header">
    <div class="header-logo">
      <img alt="pokies24.io logo" src="../assets/images/logo.svg" title="logo Pokies24" />
    </div>
    <div class="header-menu">
      <div :class="{ 'active-item': active === 0 }" @click="active = 0">HOME</div>
      <FreePokiesDropdown :isActive="active === 1" @click="active = 1" />
      <OnlineCasinosDropdown :isActive="active === 2" @click="active = 2" />
      <div :class="{ 'active-item': active === 3 }" @click="active = 3">ABOUT US</div>
      <div :class="{ 'active-item': active === 4 }" @click="active = 4">CONTACT</div>
    </div>
    <ClaimGiftBannerDropdown></ClaimGiftBannerDropdown>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #193347;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
  padding: 12px 42px;
  z-index: 100;
}

.popup-header {
  max-width: 241px;
  background-color: #06253d;
  border: 1px solid #35434e;
}

.header-logo {
}

.header-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  color: white;
  font-size: 16px;
}

.active-item {
  color: #ffd700 !important;
}

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
</style>
<script setup>
import FreePokiesDropdown from '@/components/FreePokiesDropdown.vue'
import OnlineCasinosDropdown from '@/components/OnlineCasinosDropdown.vue'
import ClaimGiftBannerDropdown from '@/components/ClaimGiftBannerDropdown.vue'
import { ref } from 'vue'

const active = ref(0)
</script>
