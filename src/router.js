import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
<<<<<<< HEAD
import Jumbotron from './components/Jumbotron'
import Boxes from './components/Boxes'
=======
import About from './views/About.vue'
import Children from './views/Children.vue'
import Men from './views/Men.vue'
import Woman from './views/Woman.vue'
import Checkout from './views/Checkout.vue'
>>>>>>> master

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/children",
      name: "Children",
      component: Children
    },
    {
      path: "/men",
      name: "Men",
      component: Men
    },
    {
      path: "/woman",
      name: "Woman",
      component: Woman
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout
    },
  ]
});
