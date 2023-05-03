<template>
  <CalendarMonth />
</template>

<script setup>
import CalendarMonth from '@/components/CalendarMonth.vue';
</script>

<style lang="scss">
li {
  list-style-type: none;
}

.day-of-week,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>