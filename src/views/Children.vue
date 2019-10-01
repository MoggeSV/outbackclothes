<template>
  <div class="container w-50">
      <input type="text" v-model="search" />
        <!-- <select v-model="products">
            <option v-for="product in products" v-bind:key="product.id">{{product}}</option>
         </select> -->
<div class="container" id="people">
	<div class="filter">
		<label><input type="radio" v-model="selectedCategory" value="All" /> All</label>
		<label><input type="radio" v-model="selectedCategory" value="Jackets" /> Jackor</label>
		<label><input type="radio" v-model="selectedCategory" value="Trousers" /> Byxor</label>
		<label><input type="radio" v-model="selectedCategory" value="Hats" /> Mössor</label>
	</div>
</div>
<span>Sök kategori</span>
<select v-model="selectedCategory">
 <option value="All">Alla</option>
  <option value="Jackets">Jackor</option>
   <option value="Trousers">Byxor</option>
    <option value="Hats">Mössor</option>
</select>

    <div class="card-group">
        <div v-for="product in filteredClothes" v-bind:key="product.id">
                    <div class="card">
                        <img :src="require(`@/assets/images/children/${product.img_url}`)" class="card-img-top"/>
                        <!-- <div class="loading-container" v-if="loading">
                            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div> -->
                        <!-- <img v-bind:src="product.img_url" class="card-img-top" /> -->
                
                        <div class="card-body">
                            <small>{{product.category}}</small>
                            <h5 class="card-title badge badge-pill badge-info">{{product.price}} kr</h5>
                            <h6 class="card-title">{{product.name}}</h6>
                            <h6 class="card-title">{{product.brand}}</h6>
                            <p class="card-text">{{product.description}}</p>
                        </div>
                        <div class="card-footer">
                            <input type="number" value="1" min="0">
                            <router-link to="/" class="btn btn-primary btn-sm">Add to cart</router-link>
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
            selectedCategory: "All",
            search: ''
        }
    },
    created() {
        db.collection('children').orderBy('brand')
        .get()
        .then(querySnapshot => {
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
        
        filteredClothes() {
            let category = this.selectedCategory;

            if(category === "All") {
                
            return this.products
                .filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase())
                })
               

        } else if (category === "Jackets") {
            return this.products
                .filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase())
                })
            
                .filter(product => {
                    return product.category === category;
                })
        }  else if (category === "Trousers") {
            return this.products
                .filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase())
                })
            
                .filter(product => {
                    return product.category === category;
                })
        }  else if (category === "Hats") {
            return this.products
                .filter(product => {
                    return product.name.toLowerCase().includes(this.search.toLowerCase())
                })
            
                .filter(product => {
                    return product.category === category;
                })
        }

        

                

        }


  }

}
</script>

<style lang="scss" scoped>






.card:hover {
    -webkit-box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
    -moz-box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
    box-shadow: 6px 6px 0px -3px rgba(0,0,0,0.2);
}

</style>