<template>
  <div class="left-module">
    <left-module
      @createNote="notesStore.addNote"
    />
  </div>

  <home-calendar />
</template>

<script setup>
import { useNotesStore } from '@/store/notesStore';
import LeftModule from './LeftModule.vue';
import HomeCalendar from './HomeCalendar.vue';

const notesStore = useNotesStore();
</script>

<style lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

button {
  @include button;
}

.left-module {
  width: 100%;
}
</style>