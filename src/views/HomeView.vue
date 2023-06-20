<template>
  <main class="wrapper">
    <div class="left-module">
      <left-module
        :notes="notesStore.notes"
        @createNote="notesStore.addNote"
      />

      <h3 class="title">Список заметок</h3>
      <div
        v-show="notesStore.notes.length"
        class="note-block"
      >
      <transition name="list-wrapper">
        <transition-group name="list" tag="ul" class="note-block__list">
          <li
            v-for="value in notesStore.notes"
            :key="value.id"
            class="note-block__note list-item"
          >
            <div
              class="note-block__left-segment"
              @click="openText"
            >
              <h4>{{ value.title }}</h4>
              <p>{{ value.description }}</p>
            </div>
            <div class="note-block__right-segment">
              <span>{{ formatingDateForNote() }}</span>
              <button @click="notesStore.removeNote(value.id)">Удалить</button>
            </div>
          </li>
        </transition-group>
      </transition>
      </div>
      <div
        v-show="!notesStore.notes.length"
        class="not-notes"
      >
        Заметок пока нет
      </div>
    </div>
    
    <right-module />
  </main>
</template>

<script setup>
// import { ref } from 'vue'
import { formatingDateForNote } from '@/common/helpers'
import { useNotesStore } from '@/store/notesStore'
import LeftModule from './LeftModule.vue'
import RightModule from './RightModule.vue'

const notesStore = useNotesStore()

// const addNote = (note) => {
//   notesStore.notes.push(note)
// }

// const removeNote = (id) => {
//   notesStore.notes = notesStore.notes.filter(item => item.id !== id)
// }

const openText = (event) => {
  const block = event.target.closest('.note-block__left-segment')
  block.classList.toggle('open-text')
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

button {
  @include button;
}

.wrapper {
  display: grid;
  grid-template-columns: 9fr 1fr;

  .left-module {
    width: 100%;
  }

  .note-block {
    margin: 15px 0;

    &__list {
      display: block;
      list-style: none;

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