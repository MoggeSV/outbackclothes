<template>
  <div class="container-fluid">
    <header id="jumbotron">
      <!-- <div class="overlay"></div> -->
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">  

              <div class="row">
                <div class="col s12 m6">
                  <div class="card white darken-1 text-left">
                    <div class="card-content black-text">
                      <span class="card-title text-muted text-uppercase font-weight-bolder">Winter 2020</span>
                      <p class="font-weight-bold">The winter collection 2020 is now in stock.</p>
                    </div>
                  <div class="card-action">
                    <a href="#" class="btn btn-outline text-dark">Shop Now!</a>
                  </div>
                </div>
              </div>
            </div>

            <!--OLD CARD-->
            <!-- <div class="card-transparent mb-3 text-left shadow">
                <div class="row no-gutters">
                     <div class="col-md-4" id="boxshadow">
                        <img src="../assets/images/promo2.png" class="card-img" alt="winter collection">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title display-4 text-dark font-weight-bold">Winter 2020</h5>
                            <p class="card-text text-dark font-weight-bold">The winter collection 2020 is now in stock.</p>
                            <a href="#" class="btn text-dark">Go to collection</a>
                        </div>
                    </div>
                </div>
            </div> -->

          </div>
        </div>
      </div>
    </header>
 
<!-- <div @click="show=!show">
  <h1>{{title}}</h1>
</div>
<transition>
  <h3 v-if="show">{{description}}</h3>
</transition> -->

  </div><!-- END CONTAINER FLUID-->
</template>

<script>

export default {
  name: "jumbotron",
  data () {
    return {
      // title: 'En fin titel',
      // description: 'En ännu finare beskrivning av innehållet',
      // show: false
    }
  }
};
</script>

<style lang="scss" scoped>

// .v-enter-active {
//   animation: bounceIn 2s;
// }

// .v-leave-active {
//   animation: bounceIn 2s reverse;
// }

// @keyframes bounceIn {
//   0% {
//     transform: scale(0.1);
//     opacity: 0;
//   }
//   50% {
//     transform: scale(1.2);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1)
//   }
// }

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.container-fluid {
  padding: 0;
      header {
        position: relative;
        background-color: black;
        height: 75vh;
        min-height: 25rem;
        width: 100%;
        overflow: hidden;
          video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: 0;
            -ms-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
          }
          .container {
            position: relative;
            z-index: 2;
            margin-top: 10rem;
              .card {
                font-family: 'Raleway', sans-serif;
                max-width: 400px;
                .btn-outline:hover,
                .btn-outline:focus,
                .btn-outline:active,
                .btn-outline.active,
                .open>.dropdown-toggle.btn-primary {
                  color: #fff;
                  background-color: lightblue;
                  border-color: #78B9C4;
                }
              }
          }
  }
}



// OLD CARD CSS
// #boxshadow {
//   position: relative;
//   -moz-box-shadow: 1px 2px 4px rgba(0, 0, 0,0.5);
//   -webkit-box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
//   box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
//   padding: 10px;
//   background: white;
// }

// /* Make the image fit the box */
// #boxshadow img {
//   width: 100%;
//   border: 1px solid #78B9C4;
//   border-style: inset;
// }

// #boxshadow::after {
//   content: '';
//   position: absolute;
//   z-index: -1; /* hide shadow behind image */
//   -webkit-box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
//   -moz-box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
//   box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);        
//   width: 70%; 
//   left: 15%; /* one half of the remaining 30% */
//   height: 100px;
//   bottom: 0;
// }

// .card-transparent {
//     max-width: 540px;
// }

// .card-img {
//     box-shadow: 10px 10px 5px #aaaaaa;
// }

// .card-body h5 {
//     background: #78B9C4;
//     opacity: .7;
// }

// .card-body p {
//     background: #78B9C4;
//     opacity: .7;
// }
// .card-transparent img {
//     height: 100%;
// }

// .btn {
//     background:
//     #78B9C4;
// }





// header .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: black;
//   opacity: 0.5;
//   z-index: 1;
// }

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}
</style>