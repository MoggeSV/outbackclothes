<template>
  <div class="container w-50">
      <input type="text" v-model="search" placeholder="Sök varumärke.."/>
    <div class="card-columns text-center">
        <div v-for="product in filteredList" v-bind:key="product.id">
            <div class="card pt-3">
                <!-- <img :src="require(`@/assets/images/children/${product.img_url}`)"/> -->
                <!-- <div class="loading-container" v-if="loading">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div> -->
                <img v-bind:src="product.img_url" />
                <div class="card-body">
                    <small>{{product.category}}</small>
                    <h5 class="card-title">{{product.price}} kr</h5>
                    <h6 class="card-title">{{product.name}}</h6>
                    <h6 class="card-title">{{product.brand}}</h6>
                    <p class="card-text">{{product.description}}</p>
                    <input type="number" value="1" min="0">
                    <router-link to="/" class="btn btn-primary">Add to cart</router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import db from '@/components/firebaseInit'
export default {
    name: 'children',
    data() {
        return {
            products: [],
            search: ''
            //loading: false
        }
    },
    created() {
        //this.loading = true
        db.collection('children').orderBy('brand')
        .get()
        .then(querySnapshot => {
            //this.loading = false
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'brand': doc.data().brand,
                    'category': doc.data().category,
                    'children_id': doc.data().children_id,
                    'description': doc.data().description,
                    'img_url': doc.data().img_url,
                    'instock': doc.data().instock,
                    'name': doc.data().name,
                    'price': doc.data().price,
                    'size': doc.data().size
                }
                this.products.push(data)
            })
        })
    },
    computed: {
        filteredList() {
        return this.products.filter(product => {
            return product.name.toLowerCase().includes(this.search.toLowerCase())
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.card-body {
    display: flex;
    flex-direction: column;
    input {
        height: 20px;
        width: 50px;
    }
}

.card img {
    width: 200px;
}

img {
    max-width:100%;
    height:auto;
}


.card:hover {
    -webkit-box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
    -moz-box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
    box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
}


/* @media screen and (max-width: 500px) {
        #grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 10px; 
    }
} */

.lds-ring {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>