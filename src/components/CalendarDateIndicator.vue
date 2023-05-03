<template>
  <div class="calendar-date-indicator">{{ selectedMonth() }}</div>
</template>

<script setup>
import { defineProps } from 'vue'
import { formatingCurrentDate } from '@/common/helpers'

const props = defineProps({
  selectedDate: {
    type: Object,
    required: true
  }
})

const selectedMonth = () => {
  return formatingCurrentDate(props.selectedDate)
}
</script>

<style scoped lang="scss">

</style>