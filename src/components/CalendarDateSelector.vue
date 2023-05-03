<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious">﹤</span>
    <span @click="selectCurrent">{{ formatingCurrentDate(new Date()) }}</span>
    <span @click="selectNext">﹥</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { formatingCurrentDate } from '@/common/helpers'

const props = defineProps({
  currentDate: {
    type: Date,
    required: true
  },

  selectedDate: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['dateSelected'])

const selectPrevious = () => {
  const newSelectedDate = props.currentDate.setMonth(props.currentDate.getMonth() - 1)
  emit('dateSelected', newSelectedDate)
}

const selectCurrent = () => {
  const newSelectedDate = new Date()
  emit('dateSelected', newSelectedDate)
}

const selectNext = () => {
  const newSelectedDate = props.currentDate.setMonth(props.currentDate.getMonth() + 1)
  emit('dateSelected', newSelectedDate)
}
</script>

<style scoped lang="scss">
span {
  cursor: pointer;
}
</style>