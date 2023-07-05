<template>
  <div class="header">
    <div class="header__wrapper">
      <h1 class="header__title title--main">Заметник</h1>

      <right-module class="right-module"/>
    </div>
  </div>
</template>

<script setup>
import RightModule from './RightModule.vue';
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
    padding: 2vh 10px;
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
</style>