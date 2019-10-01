<template>
  <div class="pt-3" id="myFooter">
    
    <!-- Footer -->
    <div class="page-footer" id="myFooterChild">
      <div class="container-fluid upperFooter">
        <div class="row">

          <!-- Grid Column -->
          <div class="col aboutContainer text-center">
            <h5 class="font-weight-bold aboutOCUpper text-uppercase mt-3 mb-4">Vilka är OC?</h5>
            <div class="aboutOC mx-auto">
              <p>Lorem, ipsum dolor sit amet Lorem ipsum dolor, Odit aliquam maxime sed perspiciatis quaerat dicta perferendis quidem tempore dolore quod? consectetur adipisicing elit. At, deleniti doloremque aliquid dignissimos aperiam debitis. Ipsam, nam eos. Ab veritatis autem, obcaecati corporis corrupti mollitia nam ipsam possimus accusamus sapiente?</p>
            </div>
          </div>
          <!-- Grid Column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
           <div class="col text-center">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Betalsätt</h5>
            <ul class="list-inline">
              <li>
                <a href="#!"><i class="fab payCards fa-cc-mastercard"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab payCards fa-cc-visa"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab payCards fa-cc-amex"></i></a>
              </li>
            </ul>
          </div>
           <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col mx-auto text-center">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Följ oss!</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"><i class="fab socialCards fa-twitter-square"></i></a>
              </li>
              <li>
                <a href="#!"><i class="fab socialCards fa-facebook-square"></i></a>
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
      
      <div class="container-fluid backgroundBottom d-flex bottomFooter justify-content-center">
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
        width: 100px;
        height: 40px;
        margin-left: 0px;
    }

    .oCTextBottom {
        color: rgb(255, 255, 255);
        margin-left: -20px;
        font-size: 16px;
    }

    .payCards,
    .socialCards {
        font-size: 40px;  
        color: white;
    }

    .payCards:hover,
    .socialCards:hover {
      color: black;
    }

    .aboutOC{
        color: white;
        text-align: center;
        width: 90%;
    }

    .upperFooter{
      background-color: #7295AD;
      color: rgb(243, 243, 243);
    }

    .bottomFooter {
      background-color: #3A4C58;
    }

   

</style>