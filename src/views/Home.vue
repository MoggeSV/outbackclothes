<template>
  <div class="home">
    <Jumbotron />
    <h1>Home</h1>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
// @ is an alias to /src


export default {
  name: "home",
  components: {
    Jumbotron
  }
};
</script>
