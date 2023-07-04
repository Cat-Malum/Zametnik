<template>
  <div class="header">
    <h1 class="title title--main">Заметник</h1>

    <right-module class="right-module"/>
  </div>
</template>

<script setup>
import RightModule from './RightModule.vue';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  margin-bottom: 3vh;
  background-color: #d49304;
  color: #292929;
}
</style>