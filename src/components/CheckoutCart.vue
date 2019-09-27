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
        <div id="checkout-price" class="shadow-inset-price">
            <div class="row mt-1">
                <div class="col-6 inline-flex justify-content-center">
                    <div class="row">
                        <h3>Har du en rabattkod?</h3>
                    </div>
                    <div class="row">
                        <div class="col" style="padding: 0px;">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Ange den här isåfall :)" aria-label="Ange koden här" aria-describedby="button-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary code-button" type="button" id="button-addon2">Aktivera</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 offset-md-3">
                    <div class="row">
                        <div class="col">
                            <span class="w-100" style="text-align: justify;">Deltotal</span>
                        </div>
                        <div class="col">
                            <span>4798 kr</span>
                        </div>
                    </div>
                    <!--  d-flex justify-content-end mr-4 -->
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
                        <div class="col"><span class="font-weight-bold">4798 kr</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="checkout-form">
            <CheckoutForm />
        </div>
    </div>
</template>

<script>
import CheckoutForm from './CheckoutForm';

export default {
    name: "CheckoutCart",
    components: {
        CheckoutForm
    }
}
</script>

<style>
    body {
        background: rgb(255, 255, 255);
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
    
    #checkout-price {
        padding: 10px;
        padding-left: 48px;
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
        border-bottom: 1px solid rgba(255,255,255, 0.3);
    }

    .code-button {
        border: .5px solid rgba(255,255,255, 0.5);
        color: white;
    }

</style>