<template>
  <div class="container">
    <p class="title">Frequently Asked Questions</p>
    <div class="questions">
      <ExpandableText
        answer="The supplier landscape in Australia includes several notable names. Aristocrat is one of Australia’s most recognised gaming companies, best known for land-based pokies and an expanding digital presence. Pragmatic Play provides many online pokies and live games. Offshore casinos that take Australian players often show its games. NetEnt, Microgaming, Big Time Gaming, Red Tiger along with Evolution are other providers often present. Evolution offers live casino content. The presence of known providers is a good sign for a casino's game collection. "
        question="What are the most popular providers in Australia?"
      />
      <ExpandableText
        answer="If you notice incorrect or outdated data on pokies24.io, please contact our support team at info@pokies24.io. We try to keep all listings current. We welcome corrections. You should provide the specific page link and the data that needs updating. We then verify and correct the information quickly."
        question="What should I do if I find incorrect information about a casino on the pokies24.io website?"
      />
      <ExpandableText
        answer="To choose an online casino, if you are new to gambling, start by trying games in demo mode. On our freepokies page you can play demo versions without depositing. Demo play lets you learn game mechanics, volatility and how bonus features behave. Once you know which games you enjoy, check the online casinos page where we publish casinos that offer those games and providers. There you can compare casinos and bonuses and choose the one that best fits your style and budget. Playing demos first is a safe way to build familiarity before staking real money."
        question="How can I choose an online casino if I am new to gambling?"
      />
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 60px 0;
}

.title {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0;
  text-align: center;
  text-transform: capitalize;
}

.questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
<script lang="ts" setup>
import ExpandableText from '@/components/ExpandableText.vue'
</script>
