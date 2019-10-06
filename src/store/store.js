/* eslint-disable no-console */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: {
    getCart: state => {
        return state.cart;
    }
  },
  mutations: {
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

        /*
        let currentId = item.id;
        let itemPos = 0;

        for(var i = 0; currentList.lenght > i++; ) {
            if(currentList[i].id === currentId) {
                itemPos = i;
                context.commit('removeAmount', itemPos);
            } else {
                alert("else");
            }
        } */
        // var a = currentList.indexOf(item);
        
    }
  }
});
