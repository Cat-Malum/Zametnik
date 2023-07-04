<template>
  <main>
    <home-header />
    <div class="app-content">
      <home-view />
    </div>
  </main>
</template>

<script>
import HomeHeader from './views/HomeHeader.vue'
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeView
}
}
</script>

<style>
*, *::before, *::after {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow-y: overlay;
}

body {
  font-size: 16px;
  color: #ededed;
  background-color: #292929;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 5px;
}

.app-content {
  display: flex;
  max-width: 1220px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
