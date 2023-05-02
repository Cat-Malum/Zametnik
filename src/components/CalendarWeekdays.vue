<template>
  <ol class="day-of-week">
    <li
      v-for="weekday in weekdays"
      :key="weekday"
    >
      {{ weekday }}
    </li>
  </ol>
</template>

<script setup>
import { computed } from 'vue'

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const weekdays = computed(() => {
  return WEEKDAYS
})
</script>

<style scoped lang="scss">

</style>