const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
            { id: 1234, color: 'Green', quantity:20 , images:'./assets/images/socks_green.jpg'},
            { id: 1235, color: 'Blue', quantity:10, images: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S','M','L','XL'],
            cart:0
        }
    },

    methods: {
        addToCart(i){
            this.cart += i
        },

        updateVariant(ind){
            this.selectedVariant = ind
        }
    },

    computed: { // computed property to calculate the value of title for us
        title(){
            return this.brand + ' ' + this.product
        },

        inStock(){
            return this.variants[this.selectedVariant].quantity
        },

        images(){
            return this.variants[this.selectedVariant].images
        },

        sale(){
            return this.onSale
        }
    }
})
