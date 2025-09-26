<template>
  <div class="container">
    <p class="title">Best Online Casinos</p>
    <div class="main">
      <div class="side">
        <SideButton
          v-for="(btn, idx) in buttons"
          :key="idx"
          :is-active="active === idx"
          :src-img="btn.src"
          :text="btn.text"
          @click="active = idx"
        />
        <SideExpandable
          :is-active="active === 5"
          :items="servicesItems"
          :src-img="side5"
          text="Payment Methods"
          @item-click="active = 5"
        />
      </div>
      <div class="content">
        <CasinoCard
          v-for="(card, idx) in activeTab"
          :key="idx"
          :img-src="card.imgSrc"
          :name="card.name"
          :rating="card.rating"
          :text1="card.text1"
          :text2="card.text2"
          :url="card.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import SideButton from '@/components/SideButton.vue'
import SideExpandable from '@/components/SideExpandable.vue'
import CasinoCard from '@/components/CasinoCard.vue'

import side1 from '@/assets/images/side1.png'
import side2 from '@/assets/images/side2.png'
import side3 from '@/assets/images/side3.png'
import side4 from '@/assets/images/side4.png'
import side5 from '@/assets/images/side5.png'

import card1 from '@/assets/images/Caswino.svg'
import card2 from '@/assets/images/Neospin.svg'
import card3 from '@/assets/images/CrownSlots.svg'
import card4 from '@/assets/images/BDM.svg'
import card5 from '@/assets/images/RichardCasino.svg'
import card6 from '@/assets/images/AxeCasino.svg'
import card7 from '@/assets/images/OscarSpin.svg'
import card8 from '@/assets/images/SkyCrown.svg'
import card9 from '@/assets/images/HugoCasino.svg'
import card10 from '@/assets/images/RockWin.svg'

const buttons = ref([
  { src: side1, text: 'Best online casinos Australia' },
  { src: side2, text: 'Recommended casinos' },
  { src: side3, text: 'Mobile apps casino' },
  { src: side4, text: 'Best live Casinos' },
])

const active = ref(0)

const servicesItems = ref([
  { text: 'PayId', url: '#' },
  { text: 'Credit cards', url: '#' },
  { text: 'Crypto', url: '#' },
  { text: 'Neosurf', url: '#' },
])

const tab1 = [
  {
    imgSrc: card1,
    name: 'Caswino',
    rating: 5,
    text1: 'Welcome bonus: 600% up to 4800$',
    text2: '+ 255 Free spins',
    url: 'https://pokies24.io/caswino-casino-review',
  },
  {
    imgSrc: card2,
    name: 'Neospin',
    rating: 5,
    text1: 'Welcome bonus: 100% up to AU$6,000',
    text2: '+ 100 Free Spins',
    url: 'https://pokies24.io/neospin-casino-review',
  },
  {
    imgSrc: card3,
    name: 'Crown Slots',
    rating: 4.9,
    text1: 'Welcome bonus: 400% up to AU$4,000',
    text2: '+ 250 Free Spins',
    url: 'https://pokies24.io/crownslots-review',
  },
  {
    imgSrc: card4,
    name: 'BDM Bet',
    rating: 4.8,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 150 Free Spins',
    url: 'https://pokies24.io/bdm-bet-review',
  },
  {
    imgSrc: card5,
    name: 'Richard Casino',
    rating: 4.7,
    text1: 'Welcome bonus: up to AU$5,000',
    text2: '+ 500 Free Spins',
    url: 'https://pokies24.io/richard-casino-review',
  },
  {
    imgSrc: card6,
    name: 'Axe Casino',
    rating: 4.5,
    text1: 'Welcome bonus: up to AU$5,625',
    text2: '+ 200 Free Spins',
    url: 'https://pokies24.io/axe-casino-review',
  },
  {
    imgSrc: card7,
    name: 'Oscarspin',
    rating: 4.4,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 225 Free Spins',
    url: 'https://pokies24.io/oscarspin-review',
  },
  {
    imgSrc: card8,
    name: 'SkyCrown',
    rating: 4.3,
    text1: 'Welcome bonus: up to AU$8,000',
    text2: '+ 400 Free Spins',
    url: 'https://pokies24.io/skycrown-review',
  },
  {
    imgSrc: card9,
    name: 'Hugo',
    rating: 4.2,
    text1: 'Welcome bonus: 225% up to AU$1,000',
    text2: '+ 275 Free Spins',
    url: 'https://pokies24.io/hugo-casino-review',
  },
  {
    imgSrc: card10,
    name: 'Rockwin Casino',
    rating: 4,
    text1: 'Welcome bonus: up to AU$6,000',
    text2: '+ 400 Free Spins',
    url: 'https://pokies24.io/rockwin-casino-review',
  },
]

const tab2 = [
  {
    imgSrc: card1,
    name: 'Caswino ',
    rating: 5,
    text1: 'Welcome bonus: 600% up to 4800$',
    text2: '+ 255 Free spins',
    url: 'https://pokies24.io/caswino-casino-review',
  },
  {
    imgSrc: card2,
    name: 'Neospin',
    rating: 5,
    text1: 'Welcome bonus: 100% up to AU$6,000',
    text2: '+ 100 Free Spins',
    url: 'https://pokies24.io/neospin-casino-review',
  },
  {
    imgSrc: card3,
    name: 'Crown Slots',
    rating: 4.9,
    text1: 'Welcome bonus: 400% up to AU$4,000',
    text2: '+ 250 Free Spins',
    url: 'https://pokies24.io/crownslots-review',
  },
  {
    imgSrc: card4,
    name: 'BDM Bet',
    rating: 4.8,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 150 Free Spins',
    url: 'https://pokies24.io/bdm-bet-review',
  },
  {
    imgSrc: card5,
    name: 'Richard Casino',
    rating: 4.7,
    text1: 'Welcome bonus: up to AU$5,000',
    text2: '+ 500 Free Spins',
    url: 'https://pokies24.io/richard-casino-review',
  },
]

const tab3 = [
  {
    imgSrc: card2,
    name: 'Neospin',
    rating: 5,
    text1: 'Welcome bonus: 100% up to AU$6,000',
    text2: '+ 100 Free Spins',
    url: 'https://pokies24.io/neospin-casino-review',
  },
  {
    imgSrc: card3,
    name: 'Crown Slots',
    rating: 4.9,
    text1: 'Welcome bonus: 400% up to AU$4,000',
    text2: '+ 250 Free Spins',
    url: 'https://pokies24.io/crownslots-review',
  },
  {
    imgSrc: card4,
    name: 'BDM Bet',
    rating: 4.8,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 150 Free Spins',
    url: 'https://pokies24.io/bdm-bet-review',
  },
  {
    imgSrc: card7,
    name: 'Oscarspin',
    rating: 4.4,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 225 Free Spins',
    url: 'https://pokies24.io/oscarspin-review',
  },
]

const tab4 = [
  {
    imgSrc: card2,
    name: 'Neospin',
    rating: 5,
    text1: 'Welcome bonus: 100% up to AU$6,000',
    text2: '+ 100 Free Spins',
    url: 'https://pokies24.io/neospin-casino-review',
  },
  {
    imgSrc: card3,
    name: 'Crown Slots',
    rating: 4.9,
    text1: 'Welcome bonus: 400% up to AU$4,000',
    text2: '+ 250 Free Spins',
    url: 'https://pokies24.io/crownslots-review',
  },
  {
    imgSrc: card4,
    name: 'BDM Bet',
    rating: 4.8,
    text1: 'Welcome bonus: up to AU$4,000',
    text2: '+ 150 Free Spins',
    url: 'https://pokies24.io/bdm-bet-review',
  },
]

const activeTab = computed(() => {
  switch (active.value) {
    case 0:
      return tab1
    case 1:
      return tab2
    case 2:
      return tab3
    case 3:
      return tab4
    default:
      return tab1
  }
})

watch(active, () => {
  if (active.value >= buttons.value.length) {
    return
  }
})
</script>

<style scoped>
.container {
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
}

.title {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0;
  text-transform: capitalize;
}

.main {
  display: flex;
  gap: 20px;
}

.side {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
