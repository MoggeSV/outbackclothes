<template>
    <div id="checkout-cart" class="container mt-5">
        <div id="checkout-products">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="product in getCart" v-bind:key="product.id">
                    <div class="container">
                        <div class="row">
                            <div class="col-4 col-sm-3 col-md-2 col-lg-2">
                                <img :src="require(`@/assets/images/${product.type}/${product.img_url}`)" class="product-image" alt=""/>
                            </div>
                            <div class="col-8 col-sm-9 col-md-10 col-lg-10">
                                <div class="container">
                                    <div class="row d-inline-flex w-100">
                                        <span class="product-brand">{{ product.brand }}</span>
                                        <span class="ml-auto">{{ product.amount }} st</span>
                                    </div>
                                    <div class="row d-inline-flex w-100">
                                        <span class="product-name">{{ product.name }}</span>
                                        <span class="ml-auto smaller-text">{{ totalPriceItem(product.price, product.amount) }} kr</span>
                                    </div>
                                    <div class="row d-inline-flex w-100">
                                        <span class="mt-2 smaller-text">{{ product.size }}</span>
                                        <span class="ml-auto">
                                            <i class="fas fa-minus remove-icon text-muted" @click="removeItem(product)"></i>
                                        </span>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Price and promo code for larger screens -->
        <div id="checkout-price" class="container shadow-inset-price d-none d-md-block">
            <div class="row mt-1">
                <div class="col-6 inline-flex justify-content-center"> <!-- hit -->
                    <div class="container">
                        <div class="row p-3">
                            <h3>Har du en rabattkod?</h3>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Ange den här isåfall :)" aria-label="Ange koden här" aria-describedby="button-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary code-button" type="button" id="button-addon2">Aktivera</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5 offset-md-1 pt-2">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <span class="w-100" style="text-align: justify;">Deltotal</span>
                            </div>
                            <div class="col">
                                <span>{{ totalPrice }} kr</span>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center custom-muted-text">
                            <div class="col">
                                <span class="w-100 font-weight-normal" style="text-align: justify;">Moms</span>
                            </div>
                            <div class="col">
                                <span>0 kr</span>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center custom-muted-text border-bottom-faded mb-2">
                            <div class="col">
                                <span class="w-100" style="text-align: justify;">Frakt</span>
                            </div>
                            <div class="col">
                                <span class="">0 kr</span>
                            </div>   
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col">
                                <span class="w-100 font-weight-bold">Totalsumma</span>
                            </div>
                            <div class="col"><span class="font-weight-bold">{{totalPrice }} kr</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Price and promo code for larger screens END -->
        <!-- Price and promo code for smaller screens -->
        <div id="checkout-price" class="container shadow-inset-price d-md-none">
            <div class="row mt-1">
                <div class="col inline-flex justify-content-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center mt-2 mb-2">
                            <h3>Har du en rabattkod?</h3>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3 p-3">
                                <input type="text" class="form-control" placeholder="Ange den här" aria-label="Ange koden här" aria-describedby="button-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary code-button" type="button" id="button-addon2">Aktivera</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-1" style="font-size: 1.1em">
                <div class="row d-flex justify-content-between">
                    <div class="col-4 d-flex justify-content-start">
                        Deltotal:
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        {{totalPrice }} kr
                    </div>
                </div>
                <div class="row d-flex justify-content-between custom-muted-text">
                    <div class="col-4 d-flex justify-content-start">
                        Frakt:
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        0 kr
                    </div>
                </div>
                <div class="row d-flex justify-content-between custom-muted-text  border-bottom-faded">
                    <div class="col-4 d-flex justify-content-start">
                        Rabattkod:
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        0 kr
                    </div>
                </div>
                <div class="row d-flex justify-content-between font-weight-bold">
                    <div class="col-4 d-flex justify-content-start">
                        Totalsumma:
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        {{ totalPrice }}
                    </div>
                </div>
            </div>
        </div>
        <!-- Price and promo code for small screens END -->

        <div id="checkout-form" class="container mt-5">
            <div class="row">
                <div class="col-12 col-md-6 order-md-first">
                    <h3 class="p-3">Handla som gäst</h3>
                    {{ getNewPrice }}
                    <CheckoutForm />
                </div>
                <div class="col-md-6">
                    <Pay />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CheckoutForm from './CheckoutForm';
import Pay from './Pay'

export default {
    name: "CheckoutCart",
    components: {
        CheckoutForm,
        Pay
    },
    methods: {
        removeItem(item) {
            this.$store.dispatch('removeItem', item);
        },
        totalPriceItem(price, amount) {
            return price * amount;
        }
    },
    computed: {
        getCart() {
            return this.$store.state.cart
        },
        CartLength() {
            return this.$store.getters.getCartLength;
        },
        totalPrice() {
            return this.$store.getters.getTotalPrice;
        }
    }
}
</script>

<style>
    body { 
        overflow-x: hidden;
    }

    #checkout-cart {
        -webkit-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);
        -moz-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);
        box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);

        padding: 0;
    }

    .list-group-item {
        background-color: white;
    }

    .bg-primary {
        background-color: #7295AD !important;
        color: white;
    }

    .product-image {
        max-height: 100px;
    }

    .product-name {
        color: rgb(82, 82, 82);
        text-transform: uppercase;
        font-weight: 500;
    }

    .smaller-text {
        font-size: .9rem;
    }
    
    #checkout-price {
        padding: 10px;
        background-color: #7295AD;
        color: white;
    }

    .shadow-bottom-inset-price {
        box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.5);
    }

    .shadow-top-inset-price {
        box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.6);
    }

    .shadow-inset-price {
        box-shadow: inset 0 -7px 9px -7px rgba(0,0,0,0.5),
                    inset 0 7px 9px -7px rgba(0,0,0,0.6);
    }

    .custom-muted-text {
        color:rgb(206, 206, 206)
    }

    .border-bottom-faded {
        border-bottom: 1px solid rgb(225, 225, 225);
    }

    .code-button {
        border: .5px solid rgba(255,255,255, 0.5);
        color: white;
    }

    .custom-card{
        border: none; 
    }

    .custom-card img{
        width: 100%;
    }
</style>