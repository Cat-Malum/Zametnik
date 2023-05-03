<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day__not-current': !props.isCurrentMonth,
      'calendar-day__today': props.isToday
    }"
  >
    <button>{{ props.dayNumber }}</button>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  day: {
    type: Object,
    required: true
  },

  dayNumber: {
    type: String,
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
</script>

<style scoped>

</style>