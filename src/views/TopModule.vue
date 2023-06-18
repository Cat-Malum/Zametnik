<template>
  <main class="top-modul">
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

    <home-calendar />
  </main>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import HomeCalendar from '@/views/HomeCalendar.vue'

const emit = defineEmits(['createNote'])

const title = ref('')
const description = ref('')
let counterNotes = ref(0)

const createNote = () => {
  if (title.value !== '' && description.value !== '') {
    counterNotes.value++
    emit('createNote', {id: counterNotes.value, title: title.value, description: description.value})

    title.value = ''
    description.value = ''
  } else {
    alert('Введите все значения')
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/input_button.scss';

.top-modul {
  display: flex;
  justify-content: space-between;

  .form {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 100%;
    grid-gap: 5px;

    margin: 0 0 35px;
    width: 100%;

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
}
</style>