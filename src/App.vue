<template>
  <HomeView />
  <HomeCalendar />
</template>

<script>
import HomeView from './views/HomeView.vue'
import HomeCalendar from './views/HomeCalendar.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    HomeCalendar
}
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
