<template>
  <div class="parallax">
    <div class="container">
      <div class="container-fluid mt-4">
        <div class="row justify-content-center">
          <div class="col-auto mb-3" v-for="staff in staffs" v-bind:key="staff.id">
            <div class="card text-center" style="width: 18rem;">
              <img :src="require(`@/assets/images/staff/${staff.img_url}`)" class="card-img-top p-1" />
              <div class="card-body">
                <h5 class="card-title">{{staff.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{staff.title}}</h6>
                <p class="card-text">{{staff.bio}}</p>
              <div class="card-footer">
                <router-link to="/" class="text-muted mr-3">Telefon</router-link>
                <router-link to="/" class="text-muted">Email</router-link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/components/firebaseInit";

export default {
  name: "staff",
  data() {
    return {
      staffs: []
    };
  },
  created() {
    db.collection("staff")
      .orderBy("name")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            alt: doc.data().alt,
            bio: doc.data().bio,
            img_url: doc.data().img_url,
            name: doc.data().name,
            staff_id: doc.data().staff_id,
            title: doc.data().title
          };
          this.staffs.push(data);
        });
      });
  }
};//export default end
</script>
<style lang="scss" scoped>
*, *::before, *::after {
    box-sizing: border-box;
}
.parallax {
  background-image: url("../assets/images/parallax.jpg");
 //filter: opacity(.5);
  min-height: 100vh; 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>