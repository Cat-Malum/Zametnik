<template>
  <div class="calendar-month">
    <div class="calendar-month-header">
      <CalendarDateIndicator
        :selected-date="selectedDate"
        class="calendar-month-header__selected-month"
      />
      <CalendarDateSelector
        :current-date="new Date()"
        :selected-date="selectedDate"
        @dateSelected="selectDate"
      />
    </div>

    <CalendarWeekdays />
    
    <div ref="calendarDays" class="days-grid">
      <CalendarMonthDayItem
        v-for="day in days"
        :key="day.date"
        :day="day.date"
        :dayNumber="day.dayNumber"
        :isCurrentMonth="day.isCurrentMonth"
        :is-today="day.date === today"
        :startWeekday="startWeekday"
        :firstDayPreviousMonth = "firstDayPreviousMonth"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import CalendarDateIndicator from './CalendarDateIndicator.vue'
import CalendarDateSelector from './CalendarDateSelector.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import { getNumberOfDaysInMonth, getStartWeekday} from '@/common/helpers'

const startWeekday = getStartWeekday()
const today = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
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
    ...previousMonthDays.value,
    ...currentMonthDays.value,
    ...nextMonthDays.value
  ]
})

const firstDayPreviousMonth = previousMonthDays.value[0]

const calendarDays = ref(null)
watchEffect(() => {
  const firstDayCurrentMonth = calendarDays.value.querySelector('.calendar-day__current')

  firstDayCurrentMonth.scrollIntoView({block: 'start'})
},
{
  flush: 'post'
})
</script>

<style scoped lang="scss">

</style>