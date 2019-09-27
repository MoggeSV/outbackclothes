<template>
  <div id="app">
    <div id="nav">
      <TopNav />
      <NavBar />

    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import TopNav from '@/components/TopNav.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    TopNav
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

body {
        font-family: 'Raleway', sans-serif;
}
</style>
