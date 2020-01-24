//Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.
var app = new Vue({
    el: '#app',
    data: {
      premium: false,
      cart: []
    },
    methods: {
      addToCart(id) {
        this.cart.push(id);
      },
      removeFromCart(id) {
        this.cart.splice(this.cart.indexOf(id), 1);
      }
    },
    computed: {
      isCarEmpty() {
        return this.cart.length == 0;
      }
    }
  })
  