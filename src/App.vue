<script setup>
import Footer from '@/components/Footer.vue'
import FAQ from '@/components/FAQ.vue'
import CasinoSelector from '@/components/CasinoSelector.vue'
import Headerc from '@/components/Headerc.vue'
import Banner from '@/components/Banner.vue'
import InfoBlock from '@/components/InfoBlock.vue'
</script>

<template>
  <Headerc></Headerc>

  <Banner></Banner>

  <div class="main">
    <CasinoSelector />
    <info-block />
    <FAQ />
  </div>
  <Footer />
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00192b;
  width: 100%;
}
</style>
