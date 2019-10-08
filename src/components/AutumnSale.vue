<template>
    <div class="container-fluid p-0">
        <div class="jumbotron  ">
            <div class="container p-0 pt-3">
                <h1 class="display-2 text-white">Höstrea!</h1>
                <p class="lead text-white">Spara upp till 50%.</p>
                <router-link class="btn btn-primary btn-sm" to="/" role="button">Fynda nu!</router-link>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'autumnsale'
}
</script>

<style lang="scss" scoped>
.jumbotron {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background-image: url('../assets/images/autumn-sale.jpg');
    height: 30vh;
    .btn {
        background: red;
        border: red;
    }
    .btn:hover {
        filter: brightness(140%);
    }
}
@media (max-width: 600px) {
    .jumbotron {
        .display-2 {
            font-size: 40px;
            margin-left: 1rem;
        }
        .lead {
            margin-left: 1rem;
        }
        .btn {
            margin-left: 1rem;
        }
    }

}
</style>