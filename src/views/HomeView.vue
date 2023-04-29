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
          class="note"
        >
          <div>
            <h4>{{ value.title }}</h4>
            <p>{{ value.description }}</p>
          </div>
          <div>
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
</script>

<style lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

.header {
  text-align: center;
  padding: 2vh 0;
  margin-bottom: 3vh;
  background-color: lightslategrey;
  color: antiquewhite;
}

main {
  max-width: 80%;
  margin: 0 auto;
}

.form {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 100%;
  grid-gap: 5px;
  margin: 15px 0 35px;

  input {
    @include input_button;

    &::placeholder {
      letter-spacing: 0.05rem;
    }
  }

  textarea {
    @include input_button;
    resize: vertical;
    margin-bottom: 1vh;
    min-height: 10vh;

    &::placeholder {
      letter-spacing: 0.05rem;
    }
  }

  button {
    @include input_button;
    margin-bottom: 1vh;
    font-size: 0.8rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;

    &:hover {
      color: #fff;
      background-color: lightslategray;
      transform: 1s;
    }
  }
}

.note-block {
  margin: 15px 0;

  &__list {
    list-style: none;
    display: block;

    .note {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include input_button;
      margin-bottom: 5px;
    }

    button {
      @include input_button;
    }
  }
}

.not-notes {
  margin: 15px 0;
}
</style>