<template>
  <div class="calendar-month">
    <div class="calendar-month-header">
      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header__selected-month"
      />
      <CalendarDateSelector
        :current-date="today"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

    <CalendarWeekdays />
 
    <ol class="days-grid">
      <CalendarMonthDayItem
        v-for="day in days"
        :key="day.date"
        :day="day"
        :is-today="day.date === today"
      />
    </ol>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CalendarDateIndicator from './CalendarDateIndicator.vue'
import CalendarDateSelector from './CalendarDateSelector.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import { getNumberOfDaysInMonth } from '@/common/helpers'

const today = new Date()
let selectedDate = new Date()

const previousMonth = selectedDate.setMonth(selectedDate.getMonth - 1)
const nextMonth = selectedDate.setMonth(selectedDate.getMonth + 1)

const selectDate = (newSelectedDate) => {
  selectedDate = newSelectedDate
}

const currentMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(selectedDate))].map((day, index) => {
    return {
      date: `${selectedDate.getFullYear()}.${selectedDate.getMonth() + 1}.${index + 1}`,
      isCurrentMonth: true,
      fixedNotes: []
    }
  })
})

const previousMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(previousMonth))].map((day, index) => {
    return {
      date: `${selectedDate.getFullYear()}.${selectedDate.getMonth()}.${index + 1}`,
      isCurrentMonth: false,
      fixedNotes: []
    }
  })
})

const nextMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(nextMonth))].map((day, index) => {
    return {
      date: `${selectedDate.getFullYear()}.${selectedDate.getMonth() + 2}.${index + 1}`,
      isCurrentMonth: false,
      fixedNotes: []
    }
  })
})

const days = computed(() => {
  return [
    ...previousMonthDays,
    ...currentMonthDays,
    ...nextMonthDays
  ]
})
</script>

<style scoped lang="scss">

</style>