<template>
  <main class="app-main">
    <HeaderHome />
    <div class="app-content">
      <HomeView />
      <HomeCalendar />
    </div>
  </main>
</template>

<script>
import HeaderHome from './views/HeaderHome.vue'
import HomeView from './views/HomeView.vue'
import HomeCalendar from './views/HomeCalendar.vue'

export default {
  name: 'App',
  components: {
    HeaderHome,
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

html {
  overflow-y: overlay;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 5px;
}

.app-main {
  position: relative;
  max-width: 100%;
  margin: 0, auto;
}

.app-content {
  display: flex;
  height: 100%;
  padding: 0 6vw;
}
</style>
