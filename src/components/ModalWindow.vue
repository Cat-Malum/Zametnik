<template>
  <div
    class="modal-window-opened"
    v-if="props.signal"
  >
    <slot />
    <button 
      class="close-window-button" 
      @click="close"
    >
      X
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  signal: {
    type: Boolean,
    required: true,
    default: false
  }
})

const emit = defineEmits(['modalOpen'])

let statusOpen = true

const close = () => {
  statusOpen = false
  emit('modalOpen', statusOpen)
}
</script>

<style scoped lang="scss">
.modal-window-opened {
  display: flex;
  justify-content: center;
  min-height: 100%;
}

.close-window-button {
  margin-left: 15px;
}
</style>