/**
 * Mocking client-server processing
*/
const _products = [
    {"id":1, "title":"Tulip flower", "price":500.00, "inventory":2},
    {"id":2, "title":"Rose flower", "price":500.00, "inventory":4},
    {"id":3, "title":"Romdule flower", "price":500.00, "inventory":5},
    {"id":4, "title":"Sun flower", "price":500.00, "inventory":6},
]

export default {
    getProducts(data:any) {
        setTimeout(() => data(_products), 100)
    },

    buyProducts (products:any , cb:any , errorCb:any) {
        setTimeout(()=>{
            // simulate random checkout failure
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJs') > -1)
            ? cb()
            :errorCb()
        },100)
    }
}