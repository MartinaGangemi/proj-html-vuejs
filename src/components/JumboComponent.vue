<template>
    <div class="jumbo ">
        <div class="container ">
            <div class="row jumbo-container d-flex align-items-center">
                <div class="col-6 ">
                <h1>Caring For Life</h1>
                <p>
                    kind words can be short and easy to speak, but their echoes are truly endless. avata Health focused on you as if it was our own family
                </p>
                <button class="blue">Learn More</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  
}

</script>

<style lang="scss" scoped>
.jumbo{
    background-image: url(@/assets/img/header-image-homepage.jpg);
    height: 850px;
    position: relative;

    .jumbo-container{
        height: 850px;
    }
}

</style>
