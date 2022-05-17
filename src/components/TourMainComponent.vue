<template>
    <div class="jumbo mt-5">
        <div class="site-container jumbo-text d-flex flex-column align-items-center justify-content-center">
            <section class=" text-light text-center">
                <img src="@/assets/img/icon-7.png" alt="">
                <h2 class="mt-3">Tour our facilities</h2>
                <p class="mt-5 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minima id ad, necessitatibus fuga blanditiis facilis dolores sit dolore quas saepe adipisci, inventore officiis tempore nulla rem dolor itaque vero!</p>
                <a href="#"><img  class="mt-3" src="@/assets/img/play-icon.png" alt=""></a>
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
    .site-container{
        height: 100%;
        padding: 0;
            section{
                width: 70%;
                h2{
                    position: relative;
                    text-transform: uppercase;
                }
                h2:after {
                    border-bottom: solid 2px $light;
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    width: 40%;
                    top: 80px;
                    margin: 0 auto;
                }
            }
    }
}

</style>