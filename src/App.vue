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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
  width:100vw;
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
  max-width: 1220px;
  padding: 0 20px 40px;
  margin: 0 auto;
  height: 100%;
}

@media screen and (max-width: 470px) {
  body {
    font-size: 14px;
  }

  h3 {
    font-size: 0.9rem;
  }

  .app-content {
    padding: 0 10px 40px;
  }
}
</style>
