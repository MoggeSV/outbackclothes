import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from './views/About.vue'
import Children from './views/Children.vue'
import Men from './views/Men.vue'
import Woman from './views/Woman.vue'
import Checkout from './views/Checkout.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import firebase from 'firebase';


Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/children",
      name: "children",
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
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    }
  ]
});

//Nav guards
router.beforeEach((to, from, next) => {
  //Check required Auth guard
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //Check if NOT logged in
    if(!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    //Check if logged in
    if(firebase.auth().currentUser) {
      next({
        path: '/about',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      //proceed to route
      next();
    }
  } else {
      //proceed to route
       next();
  }
});

export default router;
