<template>
  <div class="">
    <!-- Menu for large screens -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white d-none d-lg-block py-3">
      <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="col d-flex justify-content-left">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/men" class="nav-link border-end custom-left-padding">MAN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/woman" class="nav-link border-end">KVINNA</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/children" class="nav-link custom-line-height">BARN</router-link>
            </li>
          </ul>
        </div>
        <div class="col d-flex justify-content-center">
          <router-link to="/" class="navbar-brand mx-auto">
            <img src="@/assets/images/oclogo.png" class="logo" />
            <span>OutbackClothes</span>
          </router-link>
        </div>
        <div class="col d-flex justify-content-end">
          <ul class="navbar-nav custom-right-padding">
            <li v-if="isLoggedIn" class="nav-item" v-on:click="logout">
              <span class="nav-link">
                <span>{{ currentUser }} </span>
                <i class="fas fa-sign-out-alt"></i>
              </span>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link to="/about" class="nav-link">
                <i class="far fa-address-card"></i>
              </router-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item" @click="toggleLogin">
              <span class="nav-link">
                <i class="far fa-user-circle"></i>
              </span>
            </li>
            <li class="nav-item" v-on:click="toggleSmallCart">
              <span class="nav-link" href="#">
                <i class="fas fa-shopping-bag"></i>
                <span class="" id="itemsInCart"><span class="badge badge-pill badge-danger">{{ getCartLength }}</span></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <transition name="fade">
        <SmallCart @clicked="closeSmallCart()" v-click-outside="closeSmallCart" v-if="showingCart" class="small-cart"/>
      </transition>
      <transition name="fade">
        <LoginDropdown class="loginDropDown" v-if="showingLogin"/>
      </transition>
      </div>
    </nav>
    <!-- Menu for screens smaller than large -->
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white d-lg-none">
      <router-link to="/" class="navbar-brand mx-auto">
          <img src="@/assets/images/oclogo.png" class="logo" />
          <span>OutbackClothes</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/men" class="nav-link">
              Man
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/woman" class="nav-link">Kvinna</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/children" class="nav-link">Barn</router-link>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link"><i class="fas fa-sign-in-alt"></i> Logga in</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item" v-on:click="logout">
            <i class="fas fa-sign-out-alt"></i>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <router-link to="/login" class="nav-link"><i class="fas fa-user-plus"></i> Registrera</router-link>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <router-link to="/profile" class="nav-link"><i class="far fa-user-circle"></i> Profil</router-link>
            </li>
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link"><i class="fas fa-shopping-bag"></i>  Varukorg </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link"><i class="far fa-address-card"></i>  About </router-link>
        </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
 
 <script>

import SmallCart from '@/components/SmallCart'
import LoginDropdown from '@/components/Login'
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import firebase from 'firebase'

Vue.use(vClickOutside)


export default {
  name: "NavBar",
  components: {
    SmallCart,
    LoginDropdown,
  },
  data: function() {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    closeLogin() {
      this.$store.dispatch('closeLogin');
    },
    toggleLogin() {
      this.$store.dispatch('toggleLogin');
    },
    closeSmallCart() {
      this.$store.dispatch('closeCart');
    },
    toggleSmallCart() {
      this.$store.dispatch('toggleCart');
    },
     logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.go({path: this.$router.path});
      });
    }
  },
  computed: {
    showingLogin() {
      return this.$store.getters.showingLogin;
    },
    showingCart() {
      return this.$store.getters.showingCart;
    },
    getCartLength() {
      return this.$store.getters.getCartLength;
    }
  }
};
</script>
 <style>

 nav {
   position: relative;
 }
 .small-cart {
    position: absolute;
    z-index: 1000;
    right: 80px;
    top: 50px;
 }

 .loginDropDown {
    position: absolute;
    z-index: 1000;
    right: 80px;
    top: 50px;
 }

.logo {
  width: 70px;
  height: 30px;
}

.border-end {
  border: 1px solid black;
  border-width: 0 1px 0 0;
  line-height: 2px;
}

.custom-line-height {
  line-height: 2px;
}

span {
  font-weight: 100;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.custom-left-padding {
  margin-left: -23px;
}

.custom-right-padding {
   margin-right: -23px;
}

.nav-item {
  cursor: pointer;
}

#itemsInCart {

}

</style>