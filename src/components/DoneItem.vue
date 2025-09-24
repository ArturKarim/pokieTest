<script setup></script>

<template>
  <div class="list-item">
    <img alt="check mark" class="check-mark-icon" src="../assets/icons/check-mark.png" />
    <p class="reliability-text">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped>
.check-mark-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.reliability-text {
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: 150%;
}

.list-item {
  display: flex;
  align-items: start;
  gap: 4px;
  padding: 0;
}
</style>
