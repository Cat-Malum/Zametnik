<template>
  <div class="note-block">
    <ul
      v-if="notes.length"
      class="note-list"
    >
      <li
        v-for="(value, index) in notes"
        :key="index"
        class="note"
      >
        {{ value }}
      </li>
    </ul>

    <div 
      v-else
      class="not-notes"
    >
      Заметок пока нет...
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  notes: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss">
//test
</style>