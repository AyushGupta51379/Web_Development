// in order to get the product in vue, we create a vue app
const app = Vue.createApp({ // creates vue app
	data: function(){ // with data as
		return {
			product: 'Socks', // function returning product as Socks
			product_description: 'Hey, it is a wonderful product. Wanna try it?', 
			// function returning product description
			image: './assets/images/socks_green.jpg', // Load the image in variable, 
			// return through this app
			w3schools: 'https://www.w3schools.com' // this is our boss for learning html
		}
	}
})
