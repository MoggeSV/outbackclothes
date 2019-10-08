<template>
  <div class="pt-3">
    <!-- Only Visable on large-->
    <div class="bgImage d-none d-lg-block">
      <div class="bgImageChild">
        <div class="container">
          <div class="row text-white">
            <div class="col-4 about-bottom text-left">
              <h5 class="font-weight-bold mx-auto text-uppercase mt-3">Om OutbackClothes</h5>
              <p
                class="mx-auto smollAbout"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis tempora earum non officiis quas maiores unde consectetur, error vel. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <hr class="clearfix w-100 d-md-none" />
            <div class="col-4 text-center">
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
            <div class="col-4">
              <div class="d-flex justify-content-end links-bottom">
                <div class="text-right">
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-2">kontakta oss</h5>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i class="fas fa-home mr-3"></i> Västerås, 123 56, Västmanland
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Only visable on small devices -->
    <div class="container borderMobile pt-2 d-sm-block d-md-block d-lg-none d-xl-none">
      <div class="row">
        <div class="col text-center">
          <h1 class="text-uppercase">Betalsätt</h1>
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

      <hr class="clearfix w-100 d-md-none" />

      <div class="col">
        <div class="logoMobile text-center">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/images/oclogo.png" class="logoBottom-M" />
            <span class="oCTextBottom-M">OutbackClothes</span>
          </router-link>
          <div class="col">
            <div class="text-center mobileSocials">
              <div class="d-flex justify-content-between">
                <div class="faceBook p-2 d-inline">
                  <a href="#" class="fa fa-facebook"></a>
                </div>
                <div class="twitter p-2 d-inline">
                  <a href="#" class="fa fa-twitter"></a>
                </div>
                <div class="Reddit p-2 d-inline">
                  <a href="#" class="fa fa-reddit"></a>
                </div>
                <div class="Google p-2 d-inline">
                  <a href="#" class="fab fa-google-plus-g"></a>
                </div>
                <div class="linkedIn p-2 d-inline">
                  <a href="#" class="fa fa-linkedin"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="clearfix w-100 d-md-none" />

      <div class="col py-2 mt-1">
        <div class="text-center footer-copyright py-3">
          © 2019 Copyright:
          <a class="OCO" href="#">OutbackClothes</a>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Only Visable on large -->
    <div class="container d-none d-lg-block bottomFooter">
      <div class="row">
        <div class="col py-1">
          <div class="d-flex justify-content-start footer-copyright py-3">
            © 2019 Copyright:
            <a class="OCO" href="#">OutbackClothes</a>
          </div>
        </div>

        <div class="col py-1 text-center">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/images/oclogo.png" class="logoBottom" />
            <span class="oCTextBottom">OutbackClothes</span>
          </router-link>
        </div>

        <div class="col py-2">
          <div class="d-flex justify-content-end">
            <div class="faceBook p-2 d-inline">
              <a href="#" class="fa fa-facebook"></a>
            </div>
            <div class="twitter p-2 d-inline">
              <a href="#" class="fa fa-twitter"></a>
            </div>
            <div class="Reddit p-2 d-inline">
              <a href="#" class="fa fa-reddit"></a>
            </div>
            <div class="Google p-2 d-inline">
              <a href="#" class="fab fa-google-plus-g"></a>
            </div>
            <div class="linkedIn p-2 d-inline">
              <a href="#" class="fa fa-linkedin"></a>
            </div>
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

.oCTextBottom-M {
  color: black;
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
  color: #7295ad;
}

/* Social Buttons Bottom */
.fa {
  text-decoration: none;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook,
.fa-facebook-M {
  color: #3b5998;
}

.fa-twitter,
.fa-twitter-M {
  color: #55acee;
}

.fa-reddit,
.fa-reddit-M {
  color: #ff5700;
}

.fa-google-plus-g,
.fa-google-plus-g-M {
  color: #d34836;
}

.fa-linkedin,
.fa-linkedin-M {
  color: #007bb5;
}

.mobileSocials a {
  font-size: 2em;
}

.fa-child,
.fa-envelope {
  font-size: 14px;
}

.fa-phone-alt {
  font-size: 12px;
}

.OCO {
  color: black;
  font-weight: bold;
}


</style>