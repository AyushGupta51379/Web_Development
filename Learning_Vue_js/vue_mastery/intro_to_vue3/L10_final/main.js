const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium: false
        }
    },

    methods: {
    	updateCart(id) {
    			this.cart.push(id)
    	},
    	updateCart1(id) {
    		if(this.cart.includes(id)){
    			this.cart.pop(id)
    		}
    	}
    }
})
