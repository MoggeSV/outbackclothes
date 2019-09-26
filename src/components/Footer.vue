<template>
  <div>
    <!-- Footer -->
    <div class="page-footer bg-secondary">
      <div class="container">
        <div class="row">

          <!-- Grid Column -->
          <div class="col text-center">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">ABOUT OC</h5>
            <div class="aboutOC">
              <p>Lorem, ipsum dolor sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aliquam maxime sed perspiciatis quaerat dicta perferendis quidem tempore dolore quod? consectetur adipisicing elit. At, deleniti doloremque aliquid dignissimos aperiam debitis. Ipsam, nam eos. Ab veritatis autem, obcaecati corporis corrupti mollitia nam ipsam possimus accusamus sapiente?</p>
            </div>
          </div>
          <!-- Grid Column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col text-center">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Betalsätt</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"><i class="fab payCards fa-cc-mastercard"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab payCards fa-cc-visa"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab payCards fa-cc-amex"></i></a>
              </li>
              <h5 class="fontweight-bold text-uppercase mt-3 mb-4">Vi skickar med</h5>
              <li>
                <img src="https://www.postnord.com/UI/gfx/logo-white.svg" alt="postnord" class="postNordIMG">
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col text-center">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Socials</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"><i class="fab socialCards fa-twitter-square"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab socialCards fa-facebook-square"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab socialCards fa-google-plus-square"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab socialCards fa-instagram"></i></a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      
      <div class="col container-fluid py-3 d-flex bg-dark justify-content-center">
        <router-link to="/" class="navbar-brand ">
          <img src="@/assets/images/oclogo.png" class="logoBottom" />
          <span class="oCTextBottom">OutbackClothes</span>
        </router-link>
      </div>
    </div>
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

<style>
    .logoBottom {
        width: 260px;
        height: 120px;
        margin-left: 100px;
    }

    .oCTextBottom {
        color: black;
        margin-left: -40px;
    }

    .payCards,
    .socialCards {
        font-size: 60px;  
        color: white;
    }

    .aboutOC{
        color: white;
    }

</style>