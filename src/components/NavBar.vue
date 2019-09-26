<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-white">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
          <div class="col d-flex justify-content-center">
                <ul class="navbar-nav">
                      <li class="nav-item">
                         <a class="nav-link border-end" href="#">MAN</a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link border-end" href="#">KVINNA</a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link custom-line-height " href="#">BARN</a>
                      </li>
                      <p>hej</p>
                   </ul>
          </div>
          <div class="col d-flex justify-content-center">
                <a class="navbar-brand mx-auto" href="#">
                 <img src="@/assets/images/oclogo.png" class="logo" />
                  <span>OutbackClothes</span>
                </a>
          </div>
          <div class="col d-flex justify-content-center">
                <ul class="navbar-nav">
                   <li class="nav-item">
                      <a class="nav-link" href="#"><i class="far fa-user-circle"></i></a>
                   </li>
                   <li class="nav-item">
                         <a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i></a>
                      </li>
                </ul>
          </div>
       </div>
       </nav>
 </template>
 
 <script>
 
 
 export default {
 name: "NavBar",
 }
 
 </script>
 <style>
 .logo {
   width: 32px;
   height: 32px;
 }
 </style>