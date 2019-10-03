<template>
  <div class="home">
    <Jumbotron />
    <Cards />
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Cards from '../components/Cards'
// @ is an alias to /src


export default {
  name: "home",
  components: {
    Jumbotron,
    Cards
  }
};
</script>
