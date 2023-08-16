<template>
  <div
    class="window-alert"
    :class="{'window-alert__open': signalsStore.signalForAlertWindow}"
    @click="closeClickOnOutside"
  >
    <ModalWindow
      :signal="signalsStore.signalForAlertWindow"
      @modalClose="close"
      class="modal-window"
    >
      <div class="window-alert__inner">
        <h3 class="window-alert__text">Заполните все поля</h3>
      </div>
    </ModalWindow>
  </div>
</template>

<script setup>
import ModalWindow from './ModalWindow.vue';
import { useSignalsStore } from '@/store/signalsStore';

const signalsStore = useSignalsStore();

const close = () => signalsStore.changeSignalForAlertWindow();

const closeClickOnOutside = (event) => {
  if (event.target.classList.contains('window-alert__open')) {
    close();
  }
};
</script>

<style scoped lang="scss">
  .window-alert__open {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 5;

    .window-alert__inner {
      margin-right: 45px;
    }

    h3 {
      line-height: 4.5rem;
    }

    .modal-window {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      top: 35%;
      max-width: 350px;
      height: 117px;
      padding: 20px 0;
      background-color: #292929;
      border: 1px solid #dddbdb;
      border-radius: 5px;
      z-index: 15;
    }
  }
</style>