<template>
  <transition name="slide-fade">
    <ModalWindow
      :signal="props.signal"
      @modalClose="closeWindow"
      class="modal-window"
    >
      <div class="calendar-month">
        <div class="calendar-month-header">
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
  </transition>
</template>

<script setup>
import { computed, ref, defineProps, defineEmits } from 'vue';
import CalendarDateSelector from './CalendarDateSelector.vue';
import CalendarWeekdays from './CalendarWeekdays.vue';
import CalendarMonthDayItem from './CalendarMonthDayItem.vue';
import ModalWindow from './ModalWindow.vue';
import { getNumberOfDaysInMonth, getWeekdayIndex } from '@/common/helpers';

const props = defineProps({
  signal: {
    type: Boolean,
    required: true,
    default: false
  }
});

const emit = defineEmits(['dropSignal']);

const today = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
let selectedDate = ref(new Date());

const selectDate = (newSelectedDate) => {
  selectedDate.value = new Date(newSelectedDate);
};

const previousMonth = computed(() => {
  return new Date(new Date().setMonth(selectedDate.value.getMonth() - 1));
});

const currentMonthDays = computed(() => {
  return [...Array(getNumberOfDaysInMonth(selectedDate.value))].map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.value.getMonth() + 1}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: true
    };
  });
});

const previousMonthDays = computed(() => {
  const firstWeekdayCurrentMonth = getWeekdayIndex(new Date(new Date(selectedDate.value).setMonth(selectedDate.value.getMonth(), 1)));
  const visibleDaysPreviousMonth = [...Array(firstWeekdayCurrentMonth - 1)];
  const discardedDays = getNumberOfDaysInMonth(previousMonth.value) - firstWeekdayCurrentMonth + 1;

  return visibleDaysPreviousMonth.map((day, index) => {
    return {
      date: `${index + discardedDays + 1}.${selectedDate.value.getMonth()}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + discardedDays + 1}`,
      isCurrentMonth: false,
      previousMonth: true
    };
  });
});

const nextMonthDays = computed(() => {
  const firstWeekdayNextMonth = getWeekdayIndex(new Date(new Date(selectedDate.value).setMonth(selectedDate.value.getMonth() + 1, 1)));
  const visibleDaysNextMonth = [...Array(8 - firstWeekdayNextMonth)];

  return visibleDaysNextMonth.map((day, index) => {
    return {
      date: `${index + 1}.${selectedDate.value.getMonth() + 2}.${selectedDate.value.getFullYear()}`,
      dayNumber: `${index + 1}`,
      isCurrentMonth: false,
      nextMonth: true
    };
  });
});

const days = computed(() => {
  return [
    ...previousMonthDays.value,
    ...currentMonthDays.value,
    ...nextMonthDays.value
  ];
});

const firstDayPreviousMonth = previousMonthDays.value[0];

const closeWindow = (signal) => {
  if (!signal) {
    emit('dropSignal', false);
  }
};
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
}

.modal-window {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 25%;
  max-width: 450px;
  padding: 15px 5px 15px;
  background-color: #292929;
  border: 1px solid #dddbdb;
  border-radius: 5px;
  z-index: 15;

  .calendar-month {
    height: auto;
    margin-right: 25px;

    .day-of-week,
    .days-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      text-align: center;
      
      &::-webkit-scrollbar {
        width: 0;
      }
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>