<template>
  <div class="pt-3">
    
    <!-- Only Visable on large-->
    <div class="bgImage d-none d-lg-block">
      <div class="bgImageChild">
        <div class="container">
          <div class="row text-white">
            <div class="col text-center">
              <div class="row">
              <h5 class="font-weight-bold mx-auto text-uppercase mt-3">Om OutbackClothes</h5>
              <p class="mx-auto smollAbout">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis tempora earum non officiis quas maiores unde consectetur, error vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <hr class="clearfix w-100 d-md-none" />
            <div class="col text-center">
              <h5 class="font-weight-bold text-uppercase mt-3">Betalsätt</h5>
              <ul class="list-inline">
                <li class="Mastercard">
                  <img src="../assets/images/MasterCard.png" alt="MasterCard" />
                </li>
                <li class="Visa">
                  <img src="../assets/images/Visa.png" alt="Visa" />
                </li>
                <li class="Amex">
                  <img src="../assets/images/Amex.png" alt="Amex" />
                </li>
              </ul>
            </div>
            <hr class="clearfix w-100 d-md-none" />
            <div class="col text-center">
              <h5 class="font-weight-bold text-uppercase mx-auto mt-3 mb-4">Länkar</h5>
              <div class="row">
                 <ul class="list-inline mx-auto text-md-left">
                <li>
                  <i class="fas mr-3 fa-male"></i>
                  <a href="#!">Man</a>
                </li>
                <li>
                  <i class="fas mr-3 fa-female"></i>
                  <a href="#!">Kvinna</a>
                </li>
                <li>
                  <i class="fas mr-3 fa-child"></i>
                  <a href="#!">Barn</a>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Only visable on medium and lower -->
    <div class="container-fluid d-sm-block d-md-block d-lg-none d-xl-none">
        <div class="col py-3 text-center">
          <ul class="list-inline d-flex justify-content-center">
            <li class="Mastercard col">
              <img src="../assets/images/MasterCardSMall.png" alt="MasterCard" />
            </li>
            <li class="Visa col">
              <img src="../assets/images/Visa.png" alt="Visa" />
            </li>
            <li class="Amex-small col">
              <img src="../assets/images/Amex-small.png" alt="Amex-small" />
            </li>
          </ul>
        </div>
    </div>
    <!-- End -->
    
    <!-- Always visable -->
    <div class="container bottomFooter">
      <div class="row">
        <hr class="clearfix w-100 d-md-none" />
        <div class="col text-center">
          <div class="footer-copyright py-3">
            © 2019 Copyright:
            <a href="#"><span class="OCO">O</span>utback<span class="OCO">C</span>lothes</a>
          </div>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col py-1 text-center">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/images/oclogo.png" class="logoBottom" />
            <span class="oCTextBottom">OutbackClothes</span>
          </router-link>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col py-3 text-center">
          <div class="faceBook p-2 d-inline">
            <a href="#" class="fa fa-facebook"></a>
          </div>
          <div class="twitter p-2 d-inline">
            <a href="#" class="fa fa-twitter"></a>
          </div>
          <div class="Reddit p-2 d-inline">
            <a href="#" class="fa fa-reddit"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      // title: 'En fin titel',
      // description: 'En ännu finare beskrivning av innehållet',
      // show: false
    };
  }
};
</script>

<style scoped>
.bgImage {
  position: relative;
  width: 100%;
  background-image: url(../assets/images/footerBG.jpg);
  height: 200px;
}

.bgImageChild {
  background: rgba(0, 0, 0, 0.788);
  height: 100%;
}

.logoBottom {
  width: 100px;
  height: 40px;
}

.oCTextBottom {
  color: rgb(46, 46, 46);
  margin-left: -20px;
  font-size: 16px;
  font-weight: 500;
}

.Mastercard img {
  width: 92px;
  height: 60px;
}

.Visa img {
  width: 60px;
  height: 60px;
}

.Amex img,
.Amex-small img {
  width: 70px;
  height: 60px;
}

.Amex {
  margin-top: -20px;
}

.smollAbout {
  color: rgb(190, 190, 190);
}

a {
  text-decoration: none;
  color: #7295AD;
}

/* Social Buttons Bottom */
.fa {
  text-decoration: none;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  color: #3b5998;
}

.fa-twitter {
  color: #55acee;
}

.fa-reddit {
  color: #ff5700;
}

.OCO {
  color: black;
  font-weight: bold;
}
</style>