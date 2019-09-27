<template>
  <div class="container w-50">
    <div class="card-columns text-center">
        <div v-for="product in products" v-bind:key="product.id">
            <div class="card pt-3">
                <!-- <img :src="require(`@/assets/images/children/${product.img_url}`)"/> -->
                <img v-bind:src="product.img_url" />
                <div class="card-body">
                    <small>{{product.category}}</small>
                    <h5 class="card-title">{{product.price}} kr</h5>
                    <h6 class="card-title">{{product.title}}</h6>
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
            products: []
        }
    },
    created() {
        db.collection('children').orderBy('brand').get().then(querySnapshot => {
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
        db.storage()
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
</style>