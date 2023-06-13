<template>
  <div class="days-grid">
    <CalendarMonthDayItem
      v-for="day in props.days"
      :key="day.date"
      :day="day.date"
      :dayNumber="day.dayNumber"
      :isCurrentMonth="day.isCurrentMonth"
      :is-today="day.date === today"
      :startWeekday="startWeekday"
      :firstDayPreviousMonth = "firstDayPreviousMonth"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'

const props = defineProps({
  days: {
    type: Array,
    required: true
  },
  today: {
    type: String,
    required: true
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

<style scoped lang="scss">

</style>