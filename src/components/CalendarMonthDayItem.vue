<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day__not-current': !props.isCurrentMonth,
      'calendar-day__today': props.isToday
    }"
  >
    <span>{{ label }}</span>
  </li>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  day: {
    type: Object,
    required: true
  },

  isCurrentMonth: {
    type: Boolean,
    default: false
  },

  isToday: {
    type: Boolean,
    default: false
  }
})

const label = computed(() => {
  return new Date().getDay()
})
</script>

<style scoped>

</style>