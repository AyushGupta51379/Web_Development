// in order to get the product in vue, we create a vue app
const app = Vue.createApp({ // creates vue app
	data: function(){ // with data as
		return {
			product: 'Boots', // function returning product as Socks
			product_description: 'Hey, it is a wonderful product. Wanna try it?'
		}
	}
})
