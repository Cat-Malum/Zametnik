<template>
  <div
    class="window-for-delete"
    :class="{'window-for-delete__open': signalsStore.signalForDeleteBtn}"
    @click="closeClickOnOutside"
  >
    <ModalWindow
      :signal="signalsStore.signalForDeleteBtn" 
      @modalClose="close"
      class="modal-window"
    >
      <div class="window-for-delete__inner">
        <p class="window-for-delete__text">Вы уверены, что хотите удалить заметку?</p>

        <div class="window-for-delete__buttons">
          <button
            @click="deleteNoteAndClose(props.id)"
          >
            Да
          </button>
          <button
            @click="close()"
          >
            Нет
          </button>
        </div>
      </div>
    </ModalWindow>
  </div>
</template>

<script setup>
import ModalWindow from './ModalWindow.vue';
import { useNotesStore } from '@/store/notesStore';
import { useSignalsStore } from '@/store/signalsStore';
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
});

const notesStore = useNotesStore();
const signalsStore = useSignalsStore();

const close = () => signalsStore.changeSignalForDeleteBtn();

const closeClickOnOutside = (event) => {
  if (event.target.classList.contains('window-for-delete__open')) {
    close();
  }
};

const deleteNoteAndClose = (id) => {
  notesStore.removeNote(id);
  close();
}
</script>

<style scoped lang="scss">
  .window-for-delete__open {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 5;

    p {
      margin-right: 15px;
    }

    .modal-window {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 35%;
      max-width: 425px;
      height: 117px;
      padding: 20px 0;
      background-color: #292929;
      border: 1px solid #dddbdb;
      border-radius: 5px;
      z-index: 15;
    }

    .window-for-delete__buttons {
      display: flex;
      justify-content: space-between;
      margin: 25px auto 0;
      max-width: 220px;

      button {
        width: 100px;
      }
    }
  }
</style>