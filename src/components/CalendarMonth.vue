<template>
  <ModalWindow
    :signal="signal"
    @modalOpen="closeWindow"
  >
    <div class="calendar-month">
      <div class="calendar-month-header">
        <!-- <CalendarDateIndicator
          :selected-date="selectedDate"
          class="calendar-month-header__selected-month"
        /> -->
        <CalendarDateSelector
          :selected-date="selectedDate"
          @date-selected="selectDate"
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
          :startWeekday="1"
          :firstDayPreviousMonth="firstDayPreviousMonth"
          :previousMonth="day.previousMonth"
          :nextMonth="day.nextMonth"
        />
      </div>
    </div>
  </ModalWindow>

  <button
    @click="openWindow"
    v-show="!signal"
  >
    K
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'
// import CalendarDateIndicator from './CalendarDateIndicator.vue'
import CalendarDateSelector from './CalendarDateSelector.vue'
import CalendarWeekdays from './CalendarWeekdays.vue'
import CalendarMonthDayItem from './CalendarMonthDayItem.vue'
import ModalWindow from './ModalWindow.vue'
import { getNumberOfDaysInMonth, getWeekdayIndex } from '@/common/helpers'

const signal = ref(false)
const today = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
let selectedDate = ref(new Date())
// const startWeekday = getStartWeekday(selectedDate.value)

const selectDate = (newSelectedDate) => {
  selectedDate.value = new Date(newSelectedDate)
}

const previousMonth = computed(() => {
  return new Date(new Date().setMonth(selectedDate.value.getMonth() - 1))
})

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
  const firstWeekdayCurrentMonth = getWeekdayIndex(new Date(new Date(selectedDate.value).setMonth(selectedDate.value.getMonth(), 1)))
  const visibleDaysPreviousMonth = [...Array(firstWeekdayCurrentMonth - 1)]
  const discardedDays = getNumberOfDaysInMonth(previousMonth.value) - firstWeekdayCurrentMonth + 1

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
  const firstWeekdayNextMonth = getWeekdayIndex(new Date(new Date(selectedDate.value).setMonth(selectedDate.value.getMonth() + 1, 1)))
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

const openWindow = () => {
  signal.value = true
}

const closeWindow = (event) => {
  if (!event) {
    signal.value = false
  }
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
}

.calendar-month {
  padding: 10px;
  background-color: #fff;
  border: 1px solid lightslategray;
  border-right: none;
  border-radius: 5px;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  max-height: 100px;
  
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>