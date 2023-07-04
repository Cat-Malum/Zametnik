<template>
  <div class="left-module">
    <div class="form">
      <input
        v-model="title"
        type="text"
        placeholder="Название"
      >
      <textarea
        v-model="description"
        type="text"
        placeholder="Описание"
      ></textarea>
      <button @click="createNote">
        Записать
      </button>
    </div>

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
              v-if="!value.editingNote"
            >
              <h4>{{ value.title }}</h4>
              <p>{{ value.description }}</p>
            </div>
            <div
              class="note-block__left-segment"
              v-else
            >
              <input
                v-model="currentTitle"
                type="text"
                placeholder="Название"
              >
              <textarea
                v-model="currentDescription"
                type="text"
                placeholder="Описание"
              ></textarea>
            </div>
            <div class="note-block__right-segment">
              <span>{{ formatingDateForNote() }}</span>
              <button
                class="render-button"
                @click="editNote(value.id)"
                v-if="!value.editingNote"
              >
                Изменить
              </button>
              <button
                class="render-button"
                @click="endEditingNote(value.id)"
                v-else  
              >
                Применить
              </button>
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
</template>

<script setup>
import { ref } from 'vue'
import { formatingDateForNote } from '@/common/helpers'
import { useNotesStore } from '@/store/notesStore'

const notesStore = useNotesStore()

let title = ref('')
let description = ref('')
let counterNotes = ref(0)
let editingNote = ref(false)
let currentTitle = ref('')
let currentDescription = ref('')
let note = ref('')

const createNote = () => {
  if (title.value !== '' && description.value !== '') {
    notesStore.addNote({
      id: counterNotes.value,
      title: title.value,
      description: description.value,
      editingNote: editingNote.value
    })
    counterNotes.value++

    title.value = ''
    description.value = ''
  } else {
    alert('Введите все значения')
  }
}

const openText = (event) => {
  const block = event.target.closest('.note-block__left-segment')
  block.classList.toggle('open-text')
}

const editNote = (id) => {
  note.value = notesStore.notes.find(elem => elem.id === id)

  note.value.editingNote = true

  currentTitle.value = note.value.title
  currentDescription.value = note.value.description
}

const endEditingNote = () => {
  note.value.title = currentTitle.value
  note.value.description = currentDescription.value

  note.value.editingNote = false
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

.left-module {
  .form {
    margin: 0 0 5vh;

    input {
      @include input;
      display: block;
      width: 100%;
      margin-bottom: 1vh;

      &::placeholder {
        letter-spacing: 0.05rem;
      }
    }

    textarea {
      @include input;
      display: block;
      width: 100%;
      min-height: 15vh;
      margin-bottom: 2vh;

      &::placeholder {
        letter-spacing: 0.05rem;
      }
    }

    button {
      width: 100%;
    }
  }

  .note-block {
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
      margin: 15px 0;
      padding: 0.5rem 1rem;
      border: 1px solid #dddbdb;
      border-radius: 5px;
    }

    &__left-segment {
      min-width: 50%;
      max-width: 70%;
      cursor: pointer;

      h4 {
        margin-bottom: 10px;
      }

      h4, p {
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
      }

      input, textarea {
        @include input;
        display: block;
        width: 100%;
      }

      input {
        margin-bottom: 1vh;
      }

      textarea {
        min-height: 30px;
      }
    }

    .render-button {
      margin-right: 10px;
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
</style>