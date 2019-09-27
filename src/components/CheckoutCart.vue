<template>
    <div id="checkout-cart" class="container mt-5">
        <div id="checkout-products">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 d-flex justify-content-center">
                            <img src="../assets/images/men/men_1.jpg" class="product-image" alt="">
                        </div>
                        <div class="col-10">
                            <div class="row d-inline-flex w-100">
                                <span class="product-brand">Lyle & Scott</span>
                                <span class="ml-auto">Antal: 1</span>
                            </div>
                            <div class="row d-inline-flex w-100">
                                <span class="product-name">Höstjacka</span>
                                <span class="ml-auto smaller-text">1600 kr</span>
                            </div>
                            <div class="row d-inline-flex w-100">
                                <span class="mt-2 smaller-text">Storlek: M</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2 d-flex justify-content-center">
                            <img src="../assets/images/men/men_7.jpg" class="product-image" alt="">
                        </div>
                        <div class="col-10">
                            <div class="row d-inline-flex w-100">
                                <span class="product-brand">Tiger of sweden</span>
                                <span class="ml-auto">Antal: 1</span>
                            </div>
                            <div class="row d-inline-flex w-100">
                                <span class="product-name">Mössa</span>
                                <span class="ml-auto smaller-text">399 kr</span>
                            </div>
                            <div class="row d-inline-flex w-100">
                                <span class="mt-2 smaller-text">Storlek: One size</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckoutCart"
}
</script>

<style>
    body {
        background: rgb(255, 255, 255);
    }
    #checkout-cart {
        background: white;
        -webkit-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);
        -moz-box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);
        box-shadow: 0px 0px 19px -6px rgba(0,0,0,0.30);
    }

    .list-group-item {
        background-color: white;
    }

    .bg-primary {
        background-color: #7295AD !important;
        color: white;
    }

    .product-image {
        max-height: 130px;
    }

    .product-name {
        color: rgb(82, 82, 82);
        text-transform: uppercase;
        font-weight: 500;
    }

    .smaller-text {
        font-size: .9rem;
    }
</style>