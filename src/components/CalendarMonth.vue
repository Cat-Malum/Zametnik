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
        :dayNumber="day.dayNumber"
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

const selectDate = (newSelectedDate) => {
  selectedDate = newSelectedDate
}

const previousMonth = new Date(new Date().setMonth(selectedDate.getMonth() - 1))
const nextMonth = new Date(new Date().setMonth(selectedDate.getMonth() + 1))

const currentMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(selectedDate))].map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.getMonth() + 1}.${selectedDate.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: true,
      fixedNotes: []
    }
  })
})

const previousMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(previousMonth))].map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.getMonth()}.${selectedDate.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: false,
      fixedNotes: []
    }
  })
})

const nextMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(nextMonth))].map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.getMonth() + 2}.${selectedDate.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: false,
      fixedNotes: []
    }
  })
})

const days = computed(() => {
  return [
    ...Array(previousMonthDays),
    ...Array(currentMonthDays),
    ...Array(nextMonthDays)
  ]
})
</script>

<style scoped lang="scss">

</style>