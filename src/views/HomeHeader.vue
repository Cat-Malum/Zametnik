<template>
  <div class="header">
    <div class="header__wrapper">
      <h1 class="header__title title--main">Заметник</h1>

      <button
        class="calendar__open-button"
        @click="openCalendar"
      >
        Kалендарь
      </button>
    </div>
  </div>
</template>

<script setup>
import { useSignalsStore } from '@/store/signalsStore';

const signalsStore = useSignalsStore();

const openCalendar = () => {
  signalsStore.changeSignalForCalendar();
};
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 3vh;
  background-color: #343434;

  &__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 20px;
    max-width: 1220px;
    margin: 0 auto;

    .right-module {
      color: #fff;
      justify-self: end;
    }
  }

  &__title {
    justify-self: center;
  }
}

@media screen and (max-width: 470px) {
  .header__wrapper {
    padding: 2vh 10px;
  }
}
</style>