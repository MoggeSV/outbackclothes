<template>
  <div class="home">
    <Jumbotron />
    <Children />
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Children from '../components/Children'
// @ is an alias to /src


export default {
  name: "home",
  components: {
    Jumbotron,
    Children
  }
};
</script>
