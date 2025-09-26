<template>
  <div
    :class="{ expanded: isExpanded }"
    aria-expanded="isExpanded"
    aria-labelledby="`faq-question-${index}`"
    class="faq-item"
    role="article"
  >
    <div
      :aria-controls="`faq-answer-${index}`"
      :aria-expanded="isExpanded.toString()"
      :tabindex="0"
      class="faq-header"
      role="button"
      @click="toggleExpanded"
      @keydown.enter="toggleExpanded"
      @keydown.space="toggleExpanded"
    >
      <div class="question-content">
        <h3
          :id="`faq-question-${index}`"
          :class="{ expanded: isExpanded }"
          class="question-title"
          itemprop="name"
        >
          {{ question }}
        </h3>
      </div>

      <button
        :aria-expanded="isExpanded.toString()"
        :aria-label="isExpanded ? 'Collapse answer' : 'Expand answer'"
        class="toggle-btn"
        type="button"
        @click.stop="toggleExpanded"
      >
        <img v-if="!isExpanded" alt="Expand answer" src="../assets/images/faqOpen.png" />
        <img v-else alt="Collapse answer" src="../assets/images/faqClose.png" />
      </button>
    </div>

    <transition name="expand" @enter="onEnter" @leave="onLeave" @after-enter="onAfterEnter">
      <div
        v-if="isExpanded"
        :id="`faq-answer-${index}`"
        :aria-labelledby="`faq-question-${index}`"
        class="faq-answer"
        itemprop="acceptedAnswer"
        itemscope
        itemtype="https://schema.org/Answer"
        role="region"
      >
        <div class="answer-content" itemprop="text">
          <p>{{ answer }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ExpandableText',
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    initiallyExpanded: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: this.initiallyExpanded,
    }
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
      this.$emit('toggle', this.isExpanded)
    },
    onEnter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = '0'
      setTimeout(() => {
        el.style.height = height
      })
    },
    onAfterEnter(el) {
      el.style.height = 'auto'
    },
    onLeave(el) {
      el.style.height = getComputedStyle(el).height
      setTimeout(() => {
        el.style.height = '0'
      })
    },
  },
}
</script>

<style scoped>
.faq-item {
  width: 100%;
  min-height: 70px;
  border: 1px solid #57626c;
  background: #10324c;
  border-radius: 17px;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.faq-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #10324c;
  transition: all 0.3s ease;
  z-index: 1;
}

.faq-item.expanded::before {
  background: linear-gradient(90deg, #00223b 1.44%, #0d6eb9 100%);
}

.faq-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  outline: none;
}

.faq-header:focus {
  outline: 2px solid #ffc700;
  outline-offset: 2px;
}

.question-content {
  flex: 1;
  min-width: 0;
}

.question-title {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  transition: all 0.3s ease;
}

.question-title.expanded {
  color: #ffc700;
  font-size: 18px;
  margin-bottom: 8px;
}

.toggle-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  outline: none;
}

.toggle-btn:focus {
  outline: 2px solid #ffc700;
  outline-offset: 2px;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.faq-answer {
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: height 0.3s ease;
}

.answer-content {
  padding: 0 24px 24px 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #ffffff;
}

.answer-content p {
  margin: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}
</style>
