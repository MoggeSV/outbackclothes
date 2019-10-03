<template>
  <div class="container text-center my-3">
    <div id="recipeCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item row no-gutters active">
          <div class="col-md-4 float-left">
            <img class="img" src="../assets/images/men/men_2.jpg" alt="Men_1" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Vinterjacka</a>
              <p>799:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_1.jpg" class="img" alt="Woman_1" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Vinterjacka</a>
              <p>699:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img
              src="../assets/images/children/children_2.jpg"
              class="img"
              alt="Children_1"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Vinterjacka</a>
              <p>499:-</p>
            </div>
          </div>
        </div>
        <div class="carousel-item row no-gutters">
          <div class="col-md-4 float-left">
            <img src="../assets/images/men/men_6.jpg" class="img" alt="Men_2" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Vinterskor</a>
              <p>899:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_4.jpg" class="img" alt="Woman_2" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Vinterskor</a>
              <p>999:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img
              src="../assets/images/children/children_6.jpg"
              class="img"
              alt="Children_2"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Termobyxor</a>
              <p>599:-</p>
            </div>
          </div>
        </div>
        <div class="carousel-item row no-gutters">
          <div class="col-md-4 float-left">
            <img src="../assets/images/men/men_8.jpg" class="img" alt="Men_3" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Mössa</a>
              <p>299:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_9.jpg" class="img" alt="Woman_3" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Mössa</a>
              <p>299:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img
              src="../assets/images/children/children_7.jpg"
              class="img"
              alt="Children_3"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Mössa</a>
              <p>199:-</p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {};
$(document).ready(function() {
  $(".carousel").carousel({
    interval: 5000,
    pause: 'hover'
  });
});
=======
import {
  mdbMultiCarousel,
  mdbCarouselItem,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
export default {
  name: "Cards",
  components: {
    mdbMultiCarousel,
    mdbCarouselItem,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  }
};
>>>>>>> master
</script>

<style>
</style>