<template>
  <div class="day-of-week">
    <div
      v-for="weekday in weekdays"
      :key="weekday"
    >
      {{ weekday }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const weekdays = computed(() => {
  return WEEKDAYS
})
</script>

<style scoped lang="scss">
.day-of-week {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px 0;
}
</style>