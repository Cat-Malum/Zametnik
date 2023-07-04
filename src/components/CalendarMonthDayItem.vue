<template>
  <div
    class="calendar-day"
    :class="{
      'calendar-day__current': props.isCurrentMonth,
      'calendar-day__not-current': !props.isCurrentMonth,
      'calendar-day__today': props.isToday,
      'previous-month': props.previousMonth,
      'next-month': props.nextMonth
    }"
    :style="{
      '--start-from': firstDayPreviousMonth.date === props.day ? startWeekday : ''
    }"
  >
    {{ props.dayNumber }}
  </div>
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
  },
  previousMonth: {
    type: Boolean,
    default: false
  },
  nextMonth: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  background-color: #292929;
  border-radius: 100%;
  grid-column-start: var(--start-from);

  &:hover {
    outline: 1px solid #dddbdb;
  }

  &__not-current {
    color: rgba($color: #dddbdb, $alpha: 0.2);
  }

  &__today {
    color: #292929;
    background-color: #dddbdb;
  }
}
</style>