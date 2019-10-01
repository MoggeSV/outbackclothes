<template>
    <form class="container">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="firstname">Förnamn</label>
                <input type="text" class="form-control" id="firstname" placeholder="">
            </div>
            <div class="form-group col-md-6">
                <label for="lastname">Efternamn</label>
                <input type="text" class="form-control" id="lastname" placeholder="">
            </div>
            </div>
            <div class="form-group">
                <label for="address-line">Adress</label>
                <input type="text" class="form-control" id="address-line" placeholder="Stora Gatan 33B">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="city">Stad</label>
                    <input type="text" class="form-control" id="city">
            </div>
            <div class="form-group col-md-6">
                <label for="zip">Postkod</label>
                <input type="text" class="form-control" id="zip">
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>