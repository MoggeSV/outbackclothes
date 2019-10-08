<template>
  <div id="loginDropdown" class="container">
    <form class="px-4 py-3">
      <div class="form-group">
        <label for="FormEmail">Email address</label>
        <input type="email" class="form-control" id="FormEmail" placeholder="email@example.com">
      </div>
      <div class="form-group">
        <label for="FormPassword">Lösenord</label>
        <input type="password" class="form-control" id="FormPassword" placeholder="Password">
      </div>
      <div class="form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="Check">
          <label class="form-check-label" for="Check">
            Kom ihåg mig
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Logga in</button>
      <div class="container">
        <router-link to="register">Har du inget konto? Klicka här!</router-link>
        <router-link to="register">Glömt bort lösenord?</router-link>
      </div>

    </form>
  </div>
</template>



<script>
export default {
  name: "LoginDropdown"
}
</script>

<style>
  #loginDropdown {
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    border-radius: 5px;
    width: 250px;
    min-height: 200px;
    min-width: 300px;
    background: white;
  }
</style>