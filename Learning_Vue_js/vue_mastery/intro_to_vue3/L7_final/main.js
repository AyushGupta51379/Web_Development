const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image_blue: './assets/images/socks_blue.jpg',
            images: './assets/images/socks_blue.jpg',
            image_green: './assets/images/socks_green.jpg',
            image: 1,
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
