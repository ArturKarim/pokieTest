<script setup>
import Footer from '@/components/Footer.vue'
import FAQ from '@/components/FAQ.vue'
import CasinoSelector from '@/components/CasinoSelector.vue'
import Headerc from '@/components/Headerc.vue'
import Banner from '@/components/Banner.vue'
import InfoBlock from '@/components/InfoBlock.vue'
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Best Online Casinos Australia Listing | Reviews & Offers | Pokies24.io'
  setMetaTag(
    'description',
    'See what bonuses are given, which pokies are trendy on each casino, and read our expert reviews along with real user feedback.',
  )
  setCanonicalLink('https://pokies24.io/online-casinos')

  function setMetaTag(name, content, attribute = 'name') {
    let metaTag = document.querySelector(`meta[${attribute}="${name}"]`)

    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute(attribute, name)
      document.head.appendChild(metaTag)
    }

    metaTag.setAttribute('content', content)
  }

  function setCanonicalLink(url) {
    let canonicalLink = document.querySelector('link[rel="canonical"]')

    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }

    canonicalLink.href = url
  }
})
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
}
</style>
