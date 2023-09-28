<template>
  <modal-window
    :signal="signalsStore.signalForAlertWindow"
    @modalClose="close"
  >
    <div class="window-alert">
      <div class="window-alert__inner">
        <h3 class="window-alert__text">Заполните все поля</h3>
      </div>
      <button
        class="close-window-button"
        @click="close"
      >
        X
      </button>
    </div>
  </modal-window>
</template>

<script setup>
import ModalWindow from './ModalWindow.vue';
import { useSignalsStore } from '@/stores/signalsStore';

const signalsStore = useSignalsStore();

const close = () => signalsStore.changeSignalForAlertWindow();
</script>

<style scoped lang="scss">
@import '@/assets/scss/mixins/window.scss';

.window-alert {
  @include window;
  top: 35%;
  max-width: 350px;
  padding: 20px 0;

  .window-alert__inner {
    margin-right: 45px;
  }

  h3 {
    line-height: 4.5rem;
  }
}

@media screen and (max-width: 470px) {
  .window-alert {
    max-width: 270px;
  }
}
</style>