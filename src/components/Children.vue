<template>
  <div class="container">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Children</h4></li>
          <li v-for="product in products" v-bind:key="product.id" class="collection-item">

                  {{product.name}}{{product.brand}}{{product.price }} <img :src="require(`@/assets/images/children/${product.img_url}`)"/>


              
            </li>
      </ul>

                <div id="grid">
                    <div class="row mb-5" v-for="product in products" v-bind:key="product.id">
                        <div class="card" style="width: 18rem;">
                        <img :src="require(`@/assets/images/children/${product.img_url}`)"/>
                            <div class="card-body">
                                <small>{{product.category}}</small>
                                <h5 class="card-title">{{product.price}}</h5>
                                <h6 class="card-title">{{product.title}}</h6>
                                <h6 class="card-title">{{product.brand}}</h6>
                                <p class="card-text">{{product.description}}</p>
                                <router-link to="/" class="btn btn-primary">Add to cart</router-link>
                            </div>
                        </div>
                    </div>
                </div>


  </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'children',
    data() {
        return {
            products: []
        }
    },
    created() {
        db.collection('children').orderBy('name').get().then(querySnapshot => {
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
    }

}
</script>

<style>

.card img {
    height: 100%;
    width: 100%;
}
    #grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr)
    }
</style>