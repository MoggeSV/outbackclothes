<template>

<div class="container mt-5" id="loginDropdown">
    <form>
    <div class="form-group">
      <label for="email">E-post</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ange e-postadress" v-model="email" required>
      <small id="emailHelp" class="form-text text-muted">Vi kommer inte dela din information till någon</small>
    </div>
    <div class="form-group">
      <label for="password">Lösenord</label>
      <input type="password" class="form-control" id="password" placeholder="Ange lösenord" v-model="password" required>
    </div>
    <button v-on:click="login" type="submit" class="btn btn-primary">Logga in</button>
    <a class="ml-2" href="" data-toggle="modal" data-target="#exampleModal">Har du inte ett konto?</a>
</form>
</div>

</template>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      login: function(event) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
              this.$router.go({name: "home"});
          },
          err => {
              alert(err.message)
          })
          event.preventDefault()
      }
  }
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
    padding: 10px;
}
</style>
