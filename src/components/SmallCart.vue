<template>
    <div id="small-cart">
        <div id="small-cart-header" class="shadow-bottom-inset">
            <h6 class="mt-2">
                <span class="text-muted">
                    <i class="fas fa-mountain"></i>
                </span>
                Varukorg
            </h6>
        </div>
        <div id="small-cart-content">
            <div id="empty-cart" v-show="CartLength == 0">
                <p class="p-2">Din varukorg är tom.</p>
            </div>
            <!-- List of products here -->
            <div class="products" v-show="CartLength > 0">
                <ul class="list-group-flush no-inline-padding">
                    <li class="list-group-item" v-for="product in getCart">
                        <span class="row">
                            <div class="col-3">{{ product.instock }} st</div>
                            <div class="col-8">{{ product.brand }}</div>
                        </span>
                        <span class="row">
                            <div class="col-6"><span class="product-text">{{ product.name }}</span></div>
                            <div class="col-4 price">{{ totalPriceItem(product.price, product.instock) }} kr</div>
                            <div class="col-2"><i class="fas fa-minus remove-icon text-muted" @click="removeItem(product)"></i></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>  <!-- End of Content -->
        <!-- End of product list -->
        <!-- Small cart footer -->
        <div id="small-cart-footer" class="shadow-top-inset" v-show="CartLength > 0">
            <div id="small-cart-total" class="row">
                <div class="col ml-4 mt-3">
                    <div class="row">
                        <span>Delsumma:</span>
                    </div>
                    <div class="row">
                        <span class="text-muted-dark">(Inkl. moms)</span>
                    </div>
                </div>
                <div class="col mt-3 d-flex justify-content-end mr-2">
                    <span style="font-weight: bold; background:">{{ totalPrice }} kr</span>
                </div>
            </div>
            <div id="small-cart-checkout" class="row mt-2" v-on:click="closeSmallCart">
                <div class="col d-flex justify-content-end">
                    <router-link to="/checkout" class="btn checkout-btn">
                        <span @click.stop="closeSmallCart()"><i class="far fa-credit-card"></i> Gå vidare</span>
                    </router-link>
                </div>
            </div>
        </div>  <!-- End of Footer -->
    </div> <!-- End of Cart -->
</template>

<script>

export default {
    name: "SmallCart",
    methods: {
        closeSmallCart:function ( event ) {
            this.$emit('clicked', false);
        },
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
#small-cart {
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.38);
    border-radius: 5px;
    width: 250px;
    min-height: 300px;
    min-width: 300px;
    background: white;
}

#small-cart-header {
    display: flex;
    justify-content: center;
    font-weight: 300 !important;
    color:rgb(84, 84, 84);
    padding: 13px;
    
}

.product-text {
    color: rgb(65, 65, 65);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.8em;
}

.remove-icon {
    margin-left: 5px;
}

.price {
    font-weight: 700;
    color:black;
}

.checkout-btn {
    background: #72BAB2;
    color: white;
    text-transform: uppercase;
}

.checkout-btn:hover {
    background: rgb(102, 167, 159);
    color: white;
}

.checkout-btn:active {
    background: rgb(88, 144, 138);
    color: white;
}

#small-cart-footer {
    background: #7295AD;
    padding: 10px;
    box-sizing: border-box;
}

#small-cart-total span {
    color: white;
}

.text-muted-dark {
    color: rgb(207, 207, 207);
    font-size: 0.8em;
}

.shadow-top-inset {
    box-shadow: inset 0 7px 9px -7px rgba(0,0,0,0.3);
    box-sizing: content-box;
    overflow: hidden;
}

.shadow-bottom-inset {
    box-shadow: inset 0 -7px 9px -9px rgba(0, 0, 0, 0.4);
}

.no-inline-padding {
    padding-inline-start: 0px;
}


</style>