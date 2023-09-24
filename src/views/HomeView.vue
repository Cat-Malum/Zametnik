<template>
  <div class="left-module">
    <left-module
      @createNote="notesStore.addNote"
    />
  </div>

  <calendar-home />
</template>

<script setup>
import { useNotesStore } from '@/stores/notesStore';
import LeftModule from './LeftModule.vue';
import CalendarHome from '@/components/calendar/CalendarHome.vue';

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