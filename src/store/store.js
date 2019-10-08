/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    showingCart: false
  },
  getters: {
    showingCart: state => {
        return state.showingCart;
    },
    getCart: state => {
        return state.cart;
    },
    getCartLength: state => {
        return state.cart.length;
    },
    getTotalPrice: state => {
        let cart = state.cart;
        let totalPrice = 0;

        for(let i = 0; cart.length > i; i++) {
            totalPrice += cart[i].price * cart[i].instock;
        }

        return totalPrice;
    }
  },
  mutations: {
    toggleCart(state) {
        state.showingCart = !state.showingCart;
    },
    openCart(state) {
        state.showingCart = true;
    },
    closeCart(state) {
        state.showingCart = false;
    },
    addItem(state, item){
        state.cart.push(item)
    },
    removeItem(state, item){
        //state.cart = state.cart.splice(2, item);
        state.cart.splice(state.cart.indexOf(item), 1)
    },
    addAmount(state, item) {
        state.cart[item].instock += 1;
    },
    removeAmount(state, item) {
        state.cart[item].instock--;
    }
    
  },
  actions: {
    toggleCart(context) {
        context.commit('toggleCart');
    },
    openCart(context) {
        context.commit('openCart');
    },
    closeCart(context) {
        context.commit('closeCart');
    },
    addItem(context, item) {
        let currentList = (this.state.cart);
        let addNew = true;
        for(let i = 0; currentList.length > i; i++) {
            if(currentList[i].id === item.id) {
                context.commit('addAmount', i);
                addNew = false;
            }
        }

        if(addNew) {
            context.commit('addItem', item);
        }

    },
    removeItem(context, item) {
        //INDEXOF
        let currentList = this.state.cart;
        let currentId = item.id;

        let removeIndex = currentList.indexOf(item);

        for(let i = 0; currentList.length > i; i++) {
            if( currentList[i].id === currentId ) {
                if(currentList[i].instock > 1) {
                    context.commit('removeAmount', removeIndex)
                } else {
                    context.commit('removeItem', item)
                }
            }
        }
    }
  }
});
