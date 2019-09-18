<template>
  <div class="container-fluid">
    <header>
      <div class="overlay"></div>
      <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">


            <div class="bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            </div>

            <!-- <img src="../assets/img/outbackclotheslogo.svg" alt=""> -->
            <!-- <h1 class="display-3">Video Header</h1>
            <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p> -->
          </div>
        </div>
      </div>
    </header>

    <section class="my-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are build into Bootstrap 4.</p>
            <p>
              The overlay color can be changed by changing the
              <code>background-color</code> of the
              <code>.overlay</code> class in the CSS.
            </p>
            <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p>
            <p class="mb-0">
              Created by
              <a href="https://startbootstrap.com">Start Bootstrap</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "jumbotron"
};
</script>

<style lang="scss" scoped>
.container-fluid {
    padding: 0;
}
    header {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
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

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  header video {
    display: none;
  }
}
// .container-fluid {
//   padding: 0;

//   header {
//     position: relative;
//     background-color: black;
//     height: 75vh;
//     min-height: 25rem;
//     width: 100%;
//     overflow: hidden;

//     video {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       min-width: 100%;
//       min-height: 100%;
//       width: auto;
//       height: auto;
//       z-index: 0;
//       -ms-transform: translateX(-50%) translateY(-50%);
//       -moz-transform: translateX(-50%) translateY(-50%);
//       -webkit-transform: translateX(-50%) translateY(-50%);
//       transform: translateX(-50%) translateY(-50%);
//     }

//     .container {
//       position: relative;
//       z-index: 2;
//     }

//     .overlay {
//       position: absolute;
//       top: 0;
//       left: 0;
//       height: 100%;
//       width: 100%;
//       background-color: black;
//       opacity: 0.5;
//       z-index: 1;
//     }
//   }
// }
// @media (pointer: coarse) and (hover: none) {
//   header {
//     background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
//       no-repeat center center scroll;
//   }
//   header video {
//     display: none;
//   }
// }
</style>