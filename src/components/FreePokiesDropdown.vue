<template>
  <div class="dropdown-container">
    <!-- Основная кнопка -->
    <button :class="freePokiesClasses" @click="toggleMainDropdown">FREE POKIES</button>

    <!-- Основное dropdown меню -->
    <div v-if="isMainOpen" class="dropdown-menu main-menu">
      <div
        v-for="(item, id) in list"
        :key="id"
        :class="{ 'active-item': active === id }"
        class="menu-item"
        @click="setActive(id)"
      >
        {{ item }}
      </div>

      <!-- Вложенная кнопка с подменю -->
      <!--      <div class="nested-dropdown">-->
      <!--        <button class="dropdown-btn nested-btn" @click.stop="toggleNestedDropdown">-->
      <!--          Подменю-->
      <!--          <span :class="{ 'arrow-up': isNestedOpen }" class="arrow"></span>-->
      <!--        </button>-->

      <!--        &lt;!&ndash; Вложенное dropdown меню &ndash;&gt;-->
      <!--        <div v-if="isNestedOpen" class="dropdown-menu nested-menu">-->
      <!--          <div class="menu-item">Подпункт 1</div>-->
      <!--          <div class="menu-item">Подпункт 2</div>-->
      <!--          <div class="menu-item">Подпункт 3</div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedDropdown',
  props: ['isActive'],
  data() {
    return {
      isMainOpen: false,
      isNestedOpen: false,
      active: 0,
      list: [
        'New Pokies',
        'Popular Pokies',
        'Pokies by Provider',
        'table games',
        'live dealer',
        'virtual',
        'Crash Pokies',
      ],
    }
  },
  computed: {
    freePokiesClasses() {
      let Classes = 'dropdown-btn main-btn'
      if (this.active) {
        Classes += ' active-items'
      }
      return Classes
    },
  },
  methods: {
    toggleMainDropdown() {
      this.isMainOpen = !this.isMainOpen
      // Закрываем вложенное меню при открытии основного
      if (this.isMainOpen) {
        this.isNestedOpen = false
      }
    },

    toggleNestedDropdown() {
      this.isNestedOpen = !this.isNestedOpen
    },

    // Закрытие меню при клике вне компонента
    closeAllDropdowns(event) {
      if (!this.$el.contains(event.target)) {
        this.isMainOpen = false
        this.isNestedOpen = false
      }
    },
    setActive(id) {
      this.active = id
    },
  },
  mounted() {
    document.addEventListener('click', this.closeAllDropdowns)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeAllDropdowns)
  },
}
</script>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.active-item {
  color: #ffd700;
}

.dropdown-btn {
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #06253d;
  border: 1px solid #35434e;
  border-radius: 12px;
  min-width: 241px;
  z-index: 1000;
  margin-top: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-menu {
  z-index: 1001;
}

.nested-menu {
  position: relative;
  top: 0;
  left: 100%;
  margin-top: -1px;
  margin-left: 5px;
}

.nested-dropdown {
  position: relative;
}

.menu-item {
  cursor: pointer;
  transition: background-color 0.2s;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 16px;
}

.arrow {
  transition: transform 0.3s;
  font-size: 12px;
}

.arrow-up {
  transform: rotate(180deg);
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .nested-menu {
    position: static;
    left: 0;
    margin-left: 0;
    border-left: 3px solid #007bff;
  }
}
</style>
