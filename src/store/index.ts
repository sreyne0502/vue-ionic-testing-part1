import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
    state: { //data
        products: []
    },

    getters: { // = computed proerties
        productCount () {

        }
    },

    actions: {
        fetchProducts () {
            // make the call
        }
    },

    mutations: {
        setProducts (state, products) {
            // update product
            state.products = products
        }
    }


})