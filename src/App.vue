<template>
  <main class="app-main">
    <home-header />
    <div class="app-content">
      <home-view />
      <!-- <home-calendar /> -->
    </div>
  </main>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue'
import HomeView from './views/HomeView.vue'
// import HomeCalendar from './views/HomeCalendar.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeView,
    // HomeCalendar
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

html {
  overflow-y: overlay;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 5px;
}

/* .app-main {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
} */

.app-content {
  display: flex;
  justify-content: space-around;
  padding: 0 6vw;
}
</style>
