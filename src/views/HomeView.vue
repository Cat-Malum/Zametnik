<template>
  <div class="left-wrapper">
    <left-module
      @createNote="notesStore.addNote"
    />
  </div>
  
  <!-- <right-module /> -->
</template>

<script setup>
import { useNotesStore } from '@/store/notesStore'
import LeftModule from './LeftModule.vue'
// import RightModule from './RightModule.vue'

const notesStore = useNotesStore()
</script>

<style lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

button {
  @include button;
}

.left-wrapper {
  width: 100%;
}
</style>