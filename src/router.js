import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from './views/About'
import Children from './components/Children'

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
  ]
});
