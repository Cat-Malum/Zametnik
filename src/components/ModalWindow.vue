<template>
  <div
    class="modal-window__opened"
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
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  signal: {
    type: Boolean,
    required: true,
    default: false
  }
});

const emit = defineEmits(['modalClose']);

let statusWindow = true;

const close = () => {
  statusWindow = false;
  emit('modalClose', statusWindow);
};
</script>

<style scoped lang="scss">
.modal-window__opened {
  display: flex;
  justify-content: center;
}

.window__open {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 5;
}
</style>