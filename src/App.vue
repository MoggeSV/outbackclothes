<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/children">Children</router-link> |
      <router-link to="/men">Men</router-link> |
      <router-link to="/woman">Woman</router-link> |
      <router-link to="/checkout">Checkout</router-link>

    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss" scoped>


</style>
