<template>
  <div class="left-wrapper">
    <left-module
      @createNote="notesStore.addNote"
    />
  </div>
  
  <right-module />
</template>

<script setup>
import { useNotesStore } from '@/store/notesStore'
import LeftModule from './LeftModule.vue'
import RightModule from './RightModule.vue'

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

.note-block {
  margin: 15px 0;

  &__list {
    span {
      font-size: 0.8rem;
      margin-right: 2vw;
    }
  }

  &__note {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include input;
    margin-bottom: 5px;
  }

  &__left-segment {
    max-width: 70%;
    box-sizing: border-box;
    cursor: pointer;

    h4, p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.not-notes {
  margin: 15px 0;
}

.open-text {
  h4, p {
    white-space: normal;
    overflow-wrap: break-word;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(60px);
}
</style>