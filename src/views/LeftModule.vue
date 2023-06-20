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
  </main>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['createNote'])

let title = ref('')
let description = ref('')
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

.left-module {
  display: flex;
  justify-content: space-between;

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
}
</style>