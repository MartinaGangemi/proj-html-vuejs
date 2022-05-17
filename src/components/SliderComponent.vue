<template>
    <div class="bg">
        <div class="container text-center">
            <VueSlickCarousel v-bind="settings">
                <img class="p-0 p-sm-4" v-for="(img, index) in slider" :src="img.src" :key="index" alt="" >
            </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name:"SliderComponent",
    
    components: {
        VueSlickCarousel,
    },
    data(){

        return{
            settings: {
            "arrows": false,
            "dots": false,
            "infinite": true,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "autoplay": true,
            "speed": 3000,
            "autoplaySpeed": 1000,
            "pauseOnHover": true
        },
            
            slider:[
                {   
                    src:require(`@/assets/img/client-logos-1.png`)
                },
                {   
                    src:require(`@/assets/img/client-logos-2.png`)
                },
                {   
                    src:require(`@/assets/img/client-logos-3.png`)
                },
                {
                    src:require(`@/assets/img/client-logos-4.png`)
                },
                {   
                    src:require(`@/assets/img/client-logos-1.png`)
                },
                {   
                    src:require(`@/assets/img/client-logos-2.png`)
                },
                {   
                    src:require(`@/assets/img/client-logos-3.png`)
                },
                {
                    src:require(`@/assets/img/client-logos-4.png`)
                },
               
            ]
        }
        
    },

   
}


</script>

<style lang="scss" scoped>
.bg{
    background-image: url(@/assets/img/rgb-gradient-bar-for-logo-carrasel.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}



</style>