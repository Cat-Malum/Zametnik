<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious">﹤</span>
    <span @click="selectCurrent">{{ formatingCurrentDate(props.selectedDate) }}</span>
    <span @click="selectNext">﹥</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { formatingCurrentDate } from '@/common/helpers'

const props = defineProps({
  selectedDate: {
    type: Date,
    required: true
  }
})

const emit = defineEmits(['dateSelected'])

const selectPrevious = () => {
  const newSelectedDate = props.selectedDate.setMonth(props.selectedDate.getMonth() - 1)
  emit('dateSelected', newSelectedDate)
}

const selectCurrent = () => {
  const newSelectedDate = new Date()
  emit('dateSelected', newSelectedDate)
}

const selectNext = () => {
  const newSelectedDate = props.selectedDate.setMonth(props.selectedDate.getMonth() + 1)
  emit('dateSelected', newSelectedDate)
}
</script>

<style scoped lang="scss">
span {
  cursor: pointer;
}
</style>