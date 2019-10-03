export const localStorage = {
    name: "localStorage",
    data:function () {
        return {
            cart: []
        }
    },
    methods: {
        getCart() {
            if( localStorage.cart ) {
                this.cart = localStorage.cart
            } else {
                localStorage.cart = this.cart;
            }
        },
        addItem(item) {
            var vm = this;
            let cartEn = this.cart;
            console.log(cartEn);
        }
    },
    mounted() {

    }
}