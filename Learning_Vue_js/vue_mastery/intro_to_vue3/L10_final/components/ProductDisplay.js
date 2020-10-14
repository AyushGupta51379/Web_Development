app.component('product-display', {
	props: {
		premium: {
			type: Boolean,
			required: true
		}

	},

	template:
	/*html*/

`		<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="images">
          </div>
          <div class="product-info">     
            <h1>{{ title }}</h1>
            <p v-if="sale"> is On Sale</p>          
            <p v-if="inStock > 10">In Stock</p>
            <p v-else-if="inStock <= 10 && inStock > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>

            <p v-if="inStock <= 10 && inStock > 0">Cart Limit: {{inStock}}</p>
            <p v-else-if="inStock > 10">Cart Limit: 10</p>

            <p> Shipping {{ shipping }}</p>
            
            <product-details v-bind:details="details"></product-details>

            <p>Change color by hovering on color:</p>
            
            <div 
              v-for="(variant, index) in variants" 
                :key="variant.id" 
                  v-on:mouseover="updateVariant(index)"
                    class="color-circle"
                      v-bind:style="{backgroundColor : variant.color}">
            </div>
            

            <button 
              class="button"
                v-bind:class="{disabledButton: (inStock < 1) || (inStock-cart) <= 0 || (cart >= 10)}" 
                  v-bind:disabled ="(inStock < 1) || (inStock-cart) <= 0 || (cart >= 10)"
                    v-on:click="addToCart()">
                      Add to Cart
            </button>
            
            <button 
              class="button" 
                v-bind:class="{disabledButton: cart < 1}"
                    v-bind:disabled ="cart < 1"
                  v-on:click="remfromcart()">
              Remove from Cart
            </button>

          </div>
        </div>
      </div>`

      ,

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
            sizes: ['S','M','L','XL']
        }
    },

    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id) // when clicked will emit the event
        },

        remfromcart(){
            this.$emit('rem-from-cart', this.variants[this.selectedVariant].id) // when clicked will emit the event
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
        },

        shipping(){
        	if (this.premium) {
        		return 'Free'
        	}
        	else{
        	return '1.59'
        	}

        }
    }


})