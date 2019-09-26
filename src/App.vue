<template>
  <div id="app">
    <div id="nav">
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
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    NavBar,
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
