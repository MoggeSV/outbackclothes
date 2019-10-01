<template>
  <div class="row">
    <div class="col-lg-12 mx-auto">
      <div class="bg-white rounded-lg shadow-sm p-5">
        <!-- Credit card form tabs -->
        <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3">
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                <i class="fa fa-credit-card"></i>
                Kortbetalning
            </a>
          </li>
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                <i class="fa fa-paypal"></i>
                Paypal
            </a>
          </li>
          <li class="nav-item">
            <a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill">
                <i class="fa fa-university"></i>
                Banköverföring
            </a>
          </li>
        </ul>
        <!-- End -->

        <!-- Credit card form content -->
        <div class="tab-content">

          <!-- credit card info-->
          <div id="nav-tab-card" class="tab-pane fade show active">
            <form role="form" class="p-4">
              <div class="form-group">
                <label for="username">Namn <span class="text-muted">(Samma som på kortet)</span></label>
                <input type="text" name="username" placeholder="För- och efternamn" required class="form-control">
              </div>
              <div class="form-group">
                <label for="cardNumber">Kortnummer</label>
                <div class="input-group">
                  <input type="text" name="cardNumber" placeholder="Ange ditt kortnummer" class="form-control" required>
                  <div class="input-group-append">
                    <span class="input-group-text text-muted">
                        <i class="fa fa-cc-visa mx-1"></i>
                        <i class="fa fa-cc-amex mx-1"></i>
                        <i class="fa fa-cc-mastercard mx-1"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <div class="form-group">
                    <label><span class="hidden-xs">Gilltighetstid</span></label>
                    <div class="input-group">
                      <input type="number" placeholder="MM" name="" class="form-control" required>
                      <input type="number" placeholder="YY" name="" class="form-control" required>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group mb-4">
                    <label data-toggle="tooltip" title="Den tresiffriga koden på baksidan">CVV
                        <i class="fa fa-question-circle"></i>
                    </label>
                    <input type="text" required class="form-control">
                  </div>
                </div>
              </div>
              <button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Fortsätt  </button>
            </form>
          </div>
          <!-- End -->

          <!-- Paypal info -->
          <div id="nav-tab-paypal" class="tab-pane fade p-4">
            <p>Paypal är det enklaste sättet att betala säkert online</p>
            <p>
              <button type="button" class="btn btn-primary rounded-pill"><i class="fa fa-paypal mr-2"></i> Logga in på PayPal </button>
            </p>
            <p class="text-muted">
                Betala på nätet med ditt PayPal-lösenord, så slipper du knappa in dina betalningsuppgifter varje gång du handlar.
            </p>
          </div>
          <!-- End -->

          <!-- bank transfer info -->
          <div id="nav-tab-bank" class="tab-pane fade p-4">
            <h6>Bankinformation</h6>
            <dl>
              <dt> Bank </dt>
              <dd> NORDEA </dd>
            </dl>
            <dl>
              <dt> Kontonummer </dt>
              <dd> 7775877975 </dd>
            </dl>
            <dl>
              <dt> IBAN </dt>
              <dd> CZ7775877975656 </dd>
            </dl>
            <dd><button type="button" class="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Fortsätt  </button></dd>
            <p class="text-muted">Betala som en gammal dinosaurie med banköverföring, otroligt långsamt och osmidigt. Du gör som du vill. 
            </p>
          </div>
          <!-- End -->
        </div>
        <!-- End -->

      </div>
    </div>
  </div>

</template>

<script>
export default {
    name: "Pay"
}
</script>

<style lang="css" scoped>

form  { 
    padding: 0px;
}

.rounded-lg {
  border-radius: 1rem;
}

.nav-pills .nav-link {
  color: #555;
}

.nav-pills .nav-link.active {
  color: #fff;
}

</style>