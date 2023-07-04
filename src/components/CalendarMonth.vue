<template>
  <button
    class="calendar__open-button"
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

const changeSignal = (status) => {
  signal.value = status
}
</script>

<style scoped lang="scss">

</style>