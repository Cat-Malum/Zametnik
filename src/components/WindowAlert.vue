<template>
  <ModalWindow
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
  </ModalWindow>
</template>

<script setup>
import ModalWindow from './ModalWindow.vue';
import { useSignalsStore } from '@/stores/signalsStore';

const signalsStore = useSignalsStore();

const close = () => signalsStore.changeSignalForAlertWindow();
</script>

<style scoped lang="scss">
.window-alert {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 35%;
  display: flex;
  justify-content: center;
  max-width: 350px;
  padding: 20px 0;
  background-color: #292929;
  border: 1px solid #dddbdb;
  border-radius: 5px;
  z-index: 15;

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