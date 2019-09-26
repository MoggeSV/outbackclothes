<template>
     <div id="small-cart">
      <div id="small-cart-header">
         <h2>Varukorg</h2>
      </div>
      <div id="small-cart-content">
         <ul class="list-group">
            <li class="list-group-item">
               <span class="row">
                   <div class="col-2">1</div>
                  <div class="col-9">Northface</div>
               </span>
               <span class="row">
                  <div class="col-8"><span class="product-text">Vinterjacka</span></div>
                  <div class="col-2 price">978:-</div>
                  <div class="col-2"><i class="fas fa-minus-circle remove-icon"></i></div>
               </span>
            </li>
            <li class="list-group-item">
               <span class="row">
                  <div class="col-2">1</div>
                  <div class="col-9">Northface</div>
               </span>
               <span class="row">
                  <div class="col-8"><span class="product-text">Vinterjacka</span></div>
                  <div class="col-2 price">978:-</div>
                  <div class="col-2"><i class="fas fa-minus-circle remove-icon"></i></div>
               </span>
            </li>
          </ul>
      </div>
   </div>
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
    color: rgb(84, 84, 84);
    text-transform: uppercase;
}

.remove-icon {
    margin-left: 3px;
}

.price {
    font-weight: 700;
    color:black;
}
</style>