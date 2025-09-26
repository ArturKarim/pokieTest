// composables/useSchemaOrg.js
export function useSchemaOrg() {
  const injectFAQSchema = (faqs) => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    // Удаляем старый schema если есть
    const existingScript = document.getElementById('faq-schema')
    if (existingScript) {
      existingScript.remove()
    }

    // Создаем новый script
    const script = document.createElement('script')
    script.id = 'faq-schema'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }

  return { injectFAQSchema }
}
