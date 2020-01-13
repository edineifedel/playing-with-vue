//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.
var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './vmSocks-green.jpg',
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
      inventory: 0,
      sizes: ['Extra Large', 'Large', 'Medium', 'Small'],
      variants: [
          {id: 1, color: 'green'},
          {id: 2, color: 'blue'}
      ],
      cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(color) {
            this.image = `./vmSocks-${color}.jpg`;
        }
    } 
  })
  