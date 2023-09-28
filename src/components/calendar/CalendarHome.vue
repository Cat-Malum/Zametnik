<template>
  <calendar-window
    :signal="signalsStore.signalForCalendar"
    @dropSignal="signalsStore.changeSignalForCalendar()"
  />
</template>

<script setup>
import { useSignalsStore } from '@/stores/signalsStore';
import CalendarWindow from './CalendarWindow.vue';

const signalsStore = useSignalsStore();
</script>

<style scoped lang="scss">

</style>