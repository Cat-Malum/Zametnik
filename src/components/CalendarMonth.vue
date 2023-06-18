<template>
  <button
    class="calendarOpenButton"
    @click="openWindow"
    v-if="!signal"
  >
    Kалендарь
  </button>

  <CalendarWindow
    v-else
    :signal="signal"
    @dropSignal="changeSignal"
  />
</template>

<script setup>
import { ref } from 'vue'
import CalendarWindow from './CalendarWindow.vue'

const signal = ref(false)

const openWindow = () => {
  signal.value = true
}

const changeSignal = (emit) => {
  signal.value = emit
}
</script>

<style scoped lang="scss">

</style>