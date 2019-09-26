<template>
  <div>
    <!-- Footer -->
    <div class="page-footer font-small bg-secondary">
      <div class="container text-center text-md-left">
        <div class="row">
          <div class="col-md-3 mx-auto">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">ABOUT OC</h5>
            <div class="aboutOC">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, deleniti doloremque aliquid dignissimos aperiam debitis. Ipsam, nam eos. Ab veritatis autem, obcaecati corporis corrupti mollitia nam ipsam possimus accusamus sapiente?</p>
            </div>
          </div>

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->

          <hr class="clearfix w-100 d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 mx-auto">
            <!-- Links -->
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->

      <!-- Copyright -->
      <div class="bg-dark">
        <div class="container py-3">
          <div class="row justify-content-md-center">
            <div class="col-md-auto d-flex">
              <router-link to="/" class="">
                <img src="@/assets/images/oclogo.png" class="logoBottom" />
              </router-link>
            </div>
            <div class="col col-lg-2 d-flex text-justify">
              <p class="oCTextBottom text-white mt-5">OutbackClothes</p>
            </div>
          </div>
        </div>
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

<style lang="scss" scoped>
.logoBottom {
  width: 260px;
  height: 120px;
}

.oCTextBottom {
}
</style>