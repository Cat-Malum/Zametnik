<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day__not-current': !props.isCurrentMonth,
      'calendar-day__today': props.isToday
    }"
    :style="{
      '--start-from': firstDayPreviousMonth.date === props.day ? startWeekday : ''
    }"
  >
    {{ props.dayNumber }}
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  day: {
    type: String,
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
  },
  startWeekday: {
    type: Number,
    required: true
  },
  firstDayPreviousMonth: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>

</style>