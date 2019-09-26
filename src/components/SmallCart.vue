<template>
    <div id="small-cart">
        <div id="small-cart-header">
            <h6>
                <span class="text-muted">
                    <i class="fas fa-mountain"></i>
                </span>
                Varukorg
            </h6>
        </div>
        <div id="small-cart-content">
          <!-- List of products here -->
            <div class="products">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="row">
                            <div class="col-2">1</div>
                            <div class="col-9">Northface</div>
                        </span>
                        <span class="row">
                            <div class="col-7"><span class="product-text">Vinterjacka</span></div>
                            <div class="col-3 price">970:-</div>
                            <div class="col-2"><i class="fas fa-minus remove-icon text-muted"></i></div>
                        </span>
                    </li>
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-2">1</div>
                            <div class="col-9">Northface</div>
                        </div>
                        <div class="row">
                            <div class="col-7"><span class="product-text">Vinterjacka</span></div>
                            <div class="col-3 price">2700:-</div>
                            <div class="col-2"><i class="fas fa-minus remove-icon text-muted"></i></div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- End of product list -->
            <!-- Small cart footer -->
            <div id="small-cart-footer">
                <div id="small-cart-total" class="row">
                    <div class="col d-flex justify-content-start mt-3">
                        <span>Total: </span>
                    </div>
                    <div class="col mt-3 d-flex justify-content-end">
                        <span style="font-weight: bold">3784:-</span>
                    </div>
                </div>
                <div id="small-cart-checkout" class="row mt-2">
                    <div class="col d-flex justify-content-end">
                        <router-link to="/checkout" class="btn checkout-btn">
                            <i class="far fa-credit-card"></i> Gå vidare
                        </router-link>
                    </div>
                </div>
            </div>  <!-- End of Footer -->
        </div>  <!-- End of Content -->
    </div> <!-- End of Cart -->
</template>

<script>
export default {
    name: "SmallCart"
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
    padding: 10px;
    background: white;
}

#small-cart-header {
    display: flex;
    justify-content: center;
    font-weight: 300 !important;
    color:rgb(84, 84, 84);
    
}
.product-text {
    color: rgb(65, 65, 65);
    text-transform: uppercase;
    font-weight: 500;
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
}

#small-cart-footer {
    background: tomato;
}

/* Används inte ATM */ 
.shadow-top-inset {
    box-shadow: inset 0 7px 9px -9px rgba(0,0,0,0.3);
    box-sizing: content-box;
    overflow: hidden;
}


</style>