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
            <div class="buttons-block">
              <button
                class="render-button render-buttom--top"
                @click="editNote(value.id)"
                v-if="!value.editingNote"
              >
                Изменить
              </button>
              <button
                class="render-button render-buttom--top"
                @click="endEditingNote(value.id)"
                v-else  
              >
                Применить
              </button>
              <button
                class="render-button"
                @click="openWindowDel(value.id)"
              >
                Удалить
              </button>
            </div>
          </div>
        </li>
      </transition-group>
    </div>
    <div
      v-show="!notesStore.notes.length"
      class="not-notes"
    >
      Заметок пока нет
    </div>

    <window-for-delete
      :id="prop"
      v-if="signalsStore.signalForDeleteBtn"
    />

    <window-alert 
      v-if="signalsStore.signalForAlertWindow"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { formatingDateForNote } from '@/common/helpers';
import { useNotesStore } from '@/store/notesStore';
import { useSignalsStore } from '@/store/signalsStore';
import { generateId } from '@/common/helpers';
import WindowForDelete from '@/components/WindowForDelete.vue';
import WindowAlert from '@/components/WindowAlert.vue';

const notesStore = useNotesStore();
const signalsStore = useSignalsStore();

const title = ref('');
const description = ref('');
const currentTitle = ref('');
const currentDescription = ref('');
const note = ref('');
let prop = null;

const createNote = () => {
  if (title.value !== '' && description.value !== '') {
    notesStore.addNote({
      id: generateId(),
      title: title.value,
      description: description.value
    });

    title.value = '';
    description.value = '';
  } else {
    signalsStore.changeSignalForAlertWindow();
  }
};

const openText = (event) => {
  const block = event.target.closest('.note-block__left-segment');
  block.classList.toggle('open-text');
};

const editNote = (id) => {
  note.value = notesStore.notes.find(elem => elem.id === id);

  note.value.editingNote = true;

  currentTitle.value = note.value.title;
  currentDescription.value = note.value.description;
};

const endEditingNote = () => {
  note.value.title = currentTitle.value;
  note.value.description = currentDescription.value;

  note.value.editingNote = false;
};

const openWindowDel = (id) => {
  prop = id;
  signalsStore.changeSignalForDeleteBtn();
};
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
      margin-right: 15px;
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
        min-height: 100px;
      }
    }

    &__right-segment {
      display: flex;
      align-items: center;
      min-width: 316px;

      span {
        font-size: 0.8rem;
        margin-right: 2vw;
      }

      .buttons-block {
        .render-button {
          margin-right: 10px;
        }
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

  .list-enter-active {
    transition: all 0.4s ease-out;
  }

  .list-leave-active {
    transition: all 0.3s ease-out;
  }

  .list-enter-from,
  .list-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }

  @media screen and (max-width: 700px) {
    .note-block__left-segment {
      max-width: 50%;
    }

    .note-block__right-segment {
      min-width: 0;
      width: 192px;

      .buttons-block {
        flex-direction: column;
        justify-content: end;

        .render-button {
          width: 100%;
        }

        .render-buttom--top {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 470px) {
    .note-block {
      .list-item {
        display: block;
      }

      &__left-segment {
        max-width: 100%;
      }

      &__right-segment {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
      }

      span {
        display: none;
      }

      .buttons-block {
        .render-button {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>