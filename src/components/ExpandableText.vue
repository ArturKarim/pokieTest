<template>
  <div :class="{ expanded: isExpanded }" class="faq-item">
    <div class="faq-header" @click="toggleExpanded">
      <div class="question-content">
        <h3 :class="{ expanded: isExpanded }" class="question-title">
          {{ question }}
        </h3>
      </div>

      <button :aria-expanded="isExpanded" class="toggle-btn" @click.stop="toggleExpanded">
        <img v-if="!isExpanded" alt="open" src="../assets/images/faqOpen.png" />
        <img v-else alt="close" src="../assets/images/faqClose.png" />
      </button>
    </div>

    <transition name="expand">
      <div v-if="isExpanded" class="faq-answer">
        <div class="answer-content">
          {{ answer }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FaqItem',
  props: {
    question: {
      type: String,
      required: true,
    },
    shortText: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      required: true,
    },
    initiallyExpanded: {
      type: Boolean,
      default: false,
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
  },
}
</script>

<style scoped>
.faq-item {
  width: 1012px;
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

.short-text {
  color: #a0aec0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  margin-top: 8px;
  transition: all 0.3s ease;
  max-height: 100px;
  overflow: hidden;
}

.short-text.expanded {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
  margin-bottom: 0;
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
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Анимация раскрытия ответа */
.expand-enter-active {
  transition: all 0.4s ease-out;
}

.expand-leave-active {
  transition: all 0.3s ease-in;
}

.expand-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.expand-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}

.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.faq-answer {
  overflow: hidden;
  position: relative;
  z-index: 2;
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
  margin: 0 0 16px 0;
}

.answer-content p:last-child {
  margin-bottom: 0;
}

/* Анимация появления всего элемента */
.faq-item {
  animation: slideIn 0.4s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
