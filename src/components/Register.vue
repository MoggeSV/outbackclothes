<template>
  <div class="container">
      <form>
        <div class="form-group">
          <label for="email">E-postadress</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Ange e-postadress" required v-model="email">
          <small id="emailHelp" class="form-text text-muted">Vi kommer inte dela din information till någon</small>
        </div>
        <div class="form-group">
          <label for="password">Lösenord</label>
          <input type="password" class="form-control" id="password" placeholder="Ange lösenord" required v-model="password ">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="checkme" required>
          <label class="form-check-label" for="checkme">Jag godkänner GDPR</label>
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="register">Registrera</button>
    </form>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'register',
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
      register: function(event) {
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
              alert(`Account created for ${user.email}`);
              this.$router.go({path: this.$router.path});
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

</style>