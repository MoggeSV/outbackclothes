<template>
  <div id="app" class="bg-light">
    <div id="nav">
      <TopNav />
      <NavBar />
    </div>
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    TopNav,
    Footer
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

body {
        font-family: 'Raleway', sans-serif;
}
</style>
