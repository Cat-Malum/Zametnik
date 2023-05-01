<template>
  <div class="calendar-date-selector">
    <span @click="selectPrevious">﹤</span>
    <span @click="selectCurrent">Сегодня</span>
    <span @click="selectNext">﹥</span>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    currentDate: {
      type: String,
      required: true
    },

    selectedDate: {
      type: Object,
      required: true
    }
  })

  const emit = defineEmits(['dateSelected'])

  const selectPrevious = () => {
    let newSelectedDate = props.currentDate + 
    emit('dateSelected', newSelectedDate)
  }

  const selectCurrent = () => {
    let newSelectedDate
    emit('dateSelected', newSelectedDate)
  }

  const selectNext = () => {
    let newSelectedDate
    emit('dateSelected', newSelectedDate)
  }
</script>

<style scoped lang="scss">

</style>