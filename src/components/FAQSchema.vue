<script setup>
import { onMounted, watch } from 'vue'

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every((faq) => faq.question && faq.answer)
    },
  },
})

const schemaId = 'faq-structured-data'

const getSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${window.location.href}#faq`,
  mainEntity: props.faqs.map((faq, index) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
    '@id': `${window.location.href}#faq-question-${index + 1}`,
  })),
})

const injectSchema = () => {
  const existingScript = document.getElementById(schemaId)
  if (existingScript) {
    existingScript.remove()
  }

  const script = document.createElement('script')
  script.id = schemaId
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(getSchema(), null, 2)
  document.head.appendChild(script)
}

onMounted(injectSchema)
watch(() => props.faqs, injectSchema, { deep: true, immediate: true })
</script>

<template>
  <div aria-hidden="true" style="display: none">Structured data for FAQ schema</div>
</template>
