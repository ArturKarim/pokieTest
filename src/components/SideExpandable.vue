<template>
  <div :class="['side-button-container', { expanded: isExpanded, active: isActive }]">
    <button class="side-button" @click="toggleExpanded">
      <img :src="imageSrc" alt="img" class="btn-img" />
      <span class="btn-text">{{ text }}</span>
      <svg
        :class="{ rotated: isExpanded }"
        class="expand-arrow"
        height="16"
        viewBox="0 0 24 24"
        width="16"
      >
        <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z" fill="currentColor" />
      </svg>
    </button>

    <transition name="expand">
      <div v-if="isExpanded" class="expandable-content">
        <div class="content-list">
          <a
            v-for="(item, index) in items"
            :key="index"
            :href="item.url"
            class="list-item"
            @click="handleItemClick(item, $event)"
          >
            <span class="item-text">{{ item.text }}</span>
            <svg class="item-arrow" height="12" viewBox="0 0 24 24" width="12">
              <path d="M5 12h14m-7-7l7 7-7 7" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  srcImg: String,
  text: String,
  isActive: Boolean,
  items: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['item-click'])

const isExpanded = ref(false)

const imageSrc = computed(() => {
  return new URL(props.srcImg, import.meta.url).href
})

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const handleItemClick = (item, event) => {
  emit('item-click', item, event)
}
</script>

<style scoped>
.side-button-container {
  max-width: 325px;
  width: 100%;
  background-color: #10324c;
  border: 1px solid #57626c;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.side-button-container.expanded {
  background: #295374;
}

.side-button-container.active {
  background-color: #295374;
}

.side-button {
  padding: 12px 20px;
  gap: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  width: 100%;
  text-wrap: wrap;
  height: 74px;
  background: transparent;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0;
  text-transform: capitalize;
  text-align: start;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.side-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.expand-arrow {
  margin-left: auto;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  opacity: 0.7;
}

.expand-arrow.rotated {
  transform: rotate(180deg);
}

.btn-img {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.btn-text {
  max-width: 220px;
  flex: 1;
}

/* Expandable content */
.expandable-content {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.content-list {
  padding: 8px 0;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.list-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: #ffc700;
  padding-left: 25px;
}

.item-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: #e2e8f0;
}

.item-arrow {
  opacity: 0;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

.list-item:hover .item-arrow {
  opacity: 1;
}

/* Animation */
.expand-enter-active {
  transition: all 0.3s ease-out;
}

.expand-leave-active {
  transition: all 0.2s ease-in;
}

.expand-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.expand-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}

.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}

.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .side-button-container {
    max-width: 100%;
  }

  .side-button {
    padding: 10px 16px;
    height: 64px;
    font-size: 16px;
  }

  .btn-img {
    width: 40px;
    height: 40px;
  }

  .list-item {
    padding: 10px 16px;
  }

  .item-text {
    font-size: 14px;
  }
}
</style>
