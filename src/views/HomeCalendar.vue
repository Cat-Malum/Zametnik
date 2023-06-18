<template>
  <main class="calendar">
    <calendar-month />
  </main>
</template>

<script setup>
import CalendarMonth from '@/components/CalendarMonth.vue'
</script>

<style lang="scss">
.calendar {
  width: auto;
  margin: 0 0 0 15px;
}
</style>