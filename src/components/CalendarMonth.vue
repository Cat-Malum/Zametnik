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
        :firstDayPreviousMonth="firstDayPreviousMonth"
        :previousMonth="day.previousMonth"
        :nextMonth="day.nextMonth"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CalendarDateIndicator from './CalendarDateIndicator.vue'
import CalendarDateSelector from './CalendarDateSelector.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import { getNumberOfDaysInMonth, getStartWeekday, getWeekdayIndex } from '@/common/helpers'

const startWeekday = getStartWeekday()
const today = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
let selectedDate = ref(new Date())

const selectDate = (newSelectedDate) => {
  selectedDate.value = newSelectedDate
}

const previousMonth = new Date(new Date().setMonth(selectedDate.value.getMonth() - 1))

const currentMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(selectedDate.value))].map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.value.getMonth() + 1}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: true
    }
  })
})

const previousMonthDays = computed(() => {
  const firstWeekdayCurrentMonth = getWeekdayIndex(new Date(selectedDate.value.setDate(1)))
  const visibleDaysPreviousMonth = [...Array(firstWeekdayCurrentMonth - 1)]
  const discardedDays = getNumberOfDaysInMonth(previousMonth) - firstWeekdayCurrentMonth + 1

  return visibleDaysPreviousMonth.map((day, index) => {
    return {
      date: `${index + discardedDays + 1}.${selectedDate.value.getMonth()}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + discardedDays + 1}`,
      isCurrentMonth: false,
      previousMonth: true
    }
  })
})

const nextMonthDays = computed(() => {
  const firstWeekdayNextMonth = getWeekdayIndex(new Date(selectedDate.value.setMonth(selectedDate.value.getMonth() + 1, 1)))
  const visibleDaysNextMonth = [...Array(8 - firstWeekdayNextMonth)]

  return visibleDaysNextMonth.map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.value.getMonth() + 2}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: false,
      nextMonth: true
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

// const calendarDays = ref(null)
// watchEffect(() => {
//   const firstDayOfCurrentMonth = calendarDays.value.querySelector('.calendar-day__current')
//   firstDayOfCurrentMonth.scrollIntoView({block: 'start'})

//   const previousMonth = calendarDays.value.querySelectorAll('.previous-month')
//   const previousMonthArray = Array.prototype.slice.call(previousMonth) //Преобразует NodeList в Array
//   const lastDayOfPreviousMonth = previousMonthArray.at(-1)
//   const lastDayOfPreviousMonthCoor = lastDayOfPreviousMonth.getBoundingClientRect().bottom

//   const topCalendarDays = calendarDays.value.getBoundingClientRect().top
//   const bottomCalendarDays = calendarDays.value.getBoundingClientRect().bottom
//   const middleCalendarDays = bottomCalendarDays - topCalendarDays
//   console.log(middleCalendarDays)
//   console.log(lastDayOfPreviousMonthCoor)
//   if (middleCalendarDays === lastDayOfPreviousMonthCoor) {
//     console.log(selectedDate.value)
//     selectDate(selectedDate.value.setMonth(selectedDate.value.getMonth() - 1))
//     console.log(selectedDate.value)
//   }
// },
// {
//   flush: 'post'
// })

const calendarDays = ref(null)

onMounted(() => {
  const firstDayOfCurrentMonth = calendarDays.value.querySelector('.calendar-day__current')
  firstDayOfCurrentMonth.scrollIntoView({block: 'start'})
})
</script>

<style scoped lang="scss">

</style>