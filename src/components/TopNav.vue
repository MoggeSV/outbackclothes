<template>
  <div id="topNav">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex justify-content-start box">
             <span>Registrera dig för vårt nyhetsbrev och få gratis frakt</span> 
            </div>
            <div class="col-md-4 text-center  box">
              <span>100 dagars öppet köp</span>
            </div>
            <div class="col-md-4 d-flex justify-content-end box">
              
                <a class="pr-3" href="#"><i class="fab fa-facebook-square"></i></a>
                 <a class="pr-3" href="#"><i class="fab fa-twitter-square"></i></a>
              <a class="" href="#"><i class="fab fa-instagram"></i></a>
              
              
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'TopNav'
}
</script>

<style lang="scss" scoped>
#topNav {
  .container-fluid {
    background-color: #7295AD;
    
    .container {
      .row {
        .box {
         
          span {
            color: rgb(243, 243, 243);
            font-size: 0.8rem;
            font-weight: 500;
          }
          a {
              color:rgb(243, 243, 243);
            }
            a:hover {
              cursor: pointer;
              color:black;
              
            }
        }
      }
    }
  }
}
</style>