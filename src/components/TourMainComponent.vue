<template>
    <div class="jumbo mt-5">
        <div class="site-container jumbo-text d-flex flex-column align-items-center justify-content-center">
            <section class="w-50 text-light text-center">
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minima id ad, necessitatibus fuga blanditiis facilis dolores sit dolore quas saepe adipisci, inventore officiis tempore nulla rem dolor itaque vero!</p>
            </section>
        </div>
    </div>
</template>

<script>
export default{
    name:"TourNameComponent"
    
}
</script>


<style lang="scss" scoped>
.jumbo{
    background-image: url(@/assets/img/paralax-bg-tour-facilities.jpg);
    height: 700px;
    background-image: contain;
    background-position: center;
    .jumbo-text{
        height: 100%;
    }
}

</style>