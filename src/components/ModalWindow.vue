<template>
  <transition name="slide-fade">
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
  </transition>
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

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>