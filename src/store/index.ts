import { createStore } from 'vuex'
import store from '@/api/store'
import home from './modules/home'


export default createStore({
        modules: {
            home,
        },


        
    state: { //data
        products: [],
        cart: []
    },

    getters: { // = computed proerties
        availableProducts( state , getters) {
            return state.products.filter((product:any) => product.inventory > 0)
        }
    },

    actions: {
        
        async fetchProducts ({commit}) {

            return new Promise<void>((resolve, reject)=>{

                // make the call

                // run setProducts mutation
                store.getProducts( (products: any) => {

                    commit('setProducts' , products)
                    
                    resolve()
        
                })

            })
            
        },

        addToCart(context , product) {

            if(product.inventory > 0) {

                const cartItem = context.state.cart.find((item:any) => item.id === product.id)
                // -find cartitem
    
                if(!cartItem) {
    
                
                    // pushProductToCart
                     
                    context.commit('pushProductToCart' , product.id)
    
                }else {
    
                    // -IncrementItemQuality

                    context.commit('incrementItemQuantity', cartItem)
                }

                context.commit('decrementProductInventory', product)
            }
        }
    },

    mutations: {
        setProducts (state, products) {

            // update product

            state.products = products
        },

        pushProductToCart(state, productId) {

        
            
        },

        incrementItemQuantity(state , cartItem){

            cartItem.quantity++
        },

        decrementProductInventory(state, product ) {
            product.inventory--
        }
    }

})
