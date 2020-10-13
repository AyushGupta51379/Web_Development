const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            images: './assets/images/socks_blue.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
            { id: 1234, color: 'Green', num: 1, images:'./assets/images/socks_green.jpg'},
            { id: 1235, color: 'Blue', num: 0, images: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S','M','L','XL'],
            cart:0
        }
    },

    methods: {
        addToCart(i){
            this.cart += i
        }
    }
})
