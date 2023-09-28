<template>
  <ModalWindow
    :signal="signalsStore.signalForDeleteBtn" 
    @modalClose="close"
  >
    <div class="window-for-delete">
      <div class="window-for-delete__inner">
        <h3 class="window-for-delete__text">Вы уверены, что хотите удалить заметку?</h3>

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
    </div>
  </ModalWindow>
</template>

<script setup>
import ModalWindow from './ModalWindow.vue';
import { useNotesStore } from '@/stores/notesStore';
import { useSignalsStore } from '@/stores/signalsStore';
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const notesStore = useNotesStore();
const signalsStore = useSignalsStore();

const close = () => signalsStore.changeSignalForDeleteBtn();

const deleteNoteAndClose = (id) => {
  notesStore.removeNote(id);
  close();
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/window.scss';

.window-for-delete {
  @include window;
  top: 35%;
  text-align: center;
  max-width: 460px;
  padding: 20px 0;

  &__buttons {
    display: flex;
    justify-content: space-between;
    margin: 20px auto 0;
    max-width: 220px;

    button {
      width: 100px;
    }
  }
}

@media screen and (max-width: 470px) {
  .window-for-delete {
    max-width: 300px;
  }    
}
</style>