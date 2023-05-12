<template>
  <CalendarMonth />
</template>

<script setup>
import CalendarMonth from '@/components/CalendarMonth.vue'
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

.calendar-day {
  grid-column-start: var(--start-from);
  background-color: #fff;
  width: 25%;
  height: 100%;
  border: none;
  border-radius: 5px;
  text-align: center;

  &__today {
    background-color: rgb(252, 210, 1);
  }

  &__not-current {
    color: rgba($color: #000000, $alpha: 0.2);
  }
}
</style>