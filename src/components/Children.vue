<template>
  <div class="container">
      <ul class="collection with-header">
          <li class="collection-header"><h4>Children</h4></li>
          <li v-for="product in products" v-bind:key="product.id" class="collection-item">

                  {{product.name}}{{product.brand}}{{product.price }} <img v-bind:src=product.img_url>
                  <!-- <img src="../assets/images/children/children_4.jpg" alt=""> -->
                  <img src="../assets/images/children/children_4.jpg">

              
            </li>
      </ul>
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

</style>