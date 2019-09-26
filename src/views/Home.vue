<template>
  <div class="home">
    <Jumbotron />
    <Boxes />
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Boxes from '../components/Boxes'
// @ is an alias to /src


export default {
  name: "home",
  components: {
    Jumbotron,
    Boxes
  }
};
</script>
