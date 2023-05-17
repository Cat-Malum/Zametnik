<template>
  <div class="header">
    <h1 class="title title--main">Заметник</h1>
  </div>
  <main>
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
      <button @click="addNote">
        Записать
      </button>
    </div>

    <h3 class="title">Список заметок</h3>
    <div
      v-if="notes.length"
      class="note-block"
    >
      <ul class="note-block__list">
        <li
          v-for="(value, index) in notes"
          :key="index"
          class="note-block__note"
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
            <button @click="removeNote(value.title)">Удалить</button>
          </div>
        </li>
      </ul>
    </div>
    <div 
      v-else
      class="not-notes"
    >
      Заметок пока нет
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { formatingDateForNote } from '@/common/helpers'

const title = ref('')
const description = ref('')
const notes = ref([])

const addNote = () => {
  if (title.value !== '' && description.value !== '') {
    notes.value.push({title: title.value, description: description.value})

    title.value = ''
    description.value = ''
  } else {
    alert('Введите все значения')
  }
}

const removeNote = (title) => {
  const filteredNotes = notes.value.filter(item => item.title !== title)
  notes.value = filteredNotes
}

const openText = (event) => {
  const block = event.target.closest('.note-block__left-segment')
  block.classList.toggle('open')
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

main {
  max-width: 80%;
  margin: 0 auto;
}

button {
  @include button;
}

.header {
  text-align: center;
  padding: 2vh 0;
  margin-bottom: 3vh;
  background-color: lightslategrey;
  color: antiquewhite;
}

.form {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  grid-gap: 5px;
  margin: 15px 0 35px;

  input {
    @include input;

    &::placeholder {
      letter-spacing: 0.05rem;
    }
  }

  textarea {
    @include input;
    resize: vertical;
    margin-bottom: 1vh;
    min-height: 10vh;

    &::placeholder {
      letter-spacing: 0.05rem;
    }
  }
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

.open {
  h4, p {
    white-space: normal;
    overflow-wrap: break-word;
  }
}
</style>