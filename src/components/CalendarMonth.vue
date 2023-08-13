<template>
  <CalendarWindow
    :signal="signalsStore.signalForCalendar"
    @dropSignal="signalsStore.changeSignalForCalendar()"
  />
</template>

<script setup>
import { useSignalsStore } from '@/store/signalsStore';
import CalendarWindow from './CalendarWindow.vue';

const signalsStore = useSignalsStore();
</script>

<style scoped lang="scss">

</style>