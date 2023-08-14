<template>
  <div
    class="calendar"
    :class="{'calendar__open': signalsStore.signalForCalendar}"
    @click="closeClickOnOutside"
  >
    <calendar-month />
  </div>
</template>

<script setup>
import { useSignalsStore } from '@/store/signalsStore';
import CalendarMonth from '@/components/CalendarMonth.vue';

const signalsStore = useSignalsStore();

const closeClickOnOutside = (event) => {
  if (event.target.classList.contains('calendar__open')) {
    signalsStore.changeSignalForCalendar();
  }
};
</script>

<style lang="scss">
.calendar__open {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 5;
}
</style>