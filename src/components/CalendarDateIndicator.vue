<template>
  <div class="calendar-date-indicator">{{ selectedMonth }}</div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  selectedDate: {
    type: Object,
    required: true
  }
})

const selectedMonth = () => {
  return props.selectedDate.format("MMMM YYYY")
}
</script>

<style scoped lang="scss">

</style>