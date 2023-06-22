<template>
  <main class="left-module">
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
              v-if="!editingNote"
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
                @click="editNote(value.id)"
                v-if="!value.editingNote"
              >
                Изменить
              </button>
              <button
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
  </main>
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
  const note = notesStore.notes[id]

  note.editingNote = true
  console.log(note)
  console.log(notesStore.notes)

  currentTitle.value = note.title
  currentDescription.value = note.description
}

const endEditingNote = (id) => {
  const note = notesStore.notes[id]

  note.title = currentTitle.value
  note.description = currentDescription.value

  note.editingNote = false
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

.left-module {
  .form {
    margin: 0 0 5vh;
    width: 100%;

    input {
      @include input;
      display: block;
      
      width: 100%;
      margin-bottom: 5px;

      box-sizing: border-box;

      &::placeholder {
        letter-spacing: 0.05rem;
      }
    }

    textarea {
      @include input;
      display: block;

      width: 100%;
      min-height: 15vh;
      margin-bottom: 10px;

      resize: vertical;
      box-sizing: border-box;

      &::placeholder {
        letter-spacing: 0.05rem;
      }
    }

    button {
      width: 100%;
    }
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
}
</style>