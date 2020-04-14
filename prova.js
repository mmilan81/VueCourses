var app = new Vue({
    el: '#app',
    data: {
        product: 'Puzzolenti',
        brand: 'Calzini',
        image: './calzino-nero.jpeg',
        link: 'https://www.google.it',
        inventory: 30,
        visible: true,
        inStock: true,
        url: "https://www.google.it",
        details: ["cotone", "morbidi", "del colore che vuoi"],
        variants: [
        {
            variantId: 2234,
            variantColor: "black",
            variantImage: './calzino-nero.jpeg'
        },
        {
            variantId: 2235,
            variantColor: "red",
            variantImage: './calzino-rosso.jpeg'
        }
        ],
        cart: 0
    },
    methods:{
        addToCart: function (){
            this.cart += 1;
        },
        updateProduct: function (variantImage){
            this.image = variantImage
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})