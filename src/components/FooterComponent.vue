<template>
    <footer>
        <div class="row m-0 p-5 gy-5">
            <!-- logo -->
            <div class="col-12 col-md-4">
                <img src="@/assets/img/medical_logo_1x_dark.png" alt="">
                <p class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus totam rerum earum beatae repellat. Voluptatem debitis asperiores perferendis sint, magnam ex, adipisci laboriosam officiis itaque libero nisi ab dolor delectus.</p>
                <!-- social -->
                <h5 class="text-uppercase mb-3">learn more about us</h5>
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter-square" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-youtube-square" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram-square" /></a>
            </div>
            <!-- information -->
            <div class="col-12 col-md-4">
                <h5 class="text-uppercase info">contact information</h5>
                <ul class="mt-5 ps-0">
                    <li>
                        <font-awesome-icon icon="fa-solid fa-location-dot"/>
                        121 king Street, London United Kingdom
                    </li>
                    <li class="mt-2">
                        <font-awesome-icon icon="fa-solid fa-phone-flip" />
                        121 king Street, London United Kingdom
                    </li>
                </ul>
            </div>
            <!-- medical departments -->
            <div class="col-12 col-md-4">
                <h5 class="text-uppercase departments">medical departments</h5>
                <ul class="mt-5 ps-0">
                    <li v-for="(department, index) in departments" :key="index" class="mt-1">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-chevron-right" />{{ department.name}}</a>
                    </li>
                </ul>
                <button class="lighter fw-normal mt-5">view our departments</button>
            </div>
        </div>
        <!-- copyright -->
    <div class="px-5 py-3 copyright">
        Copyright 2012-2020 | Avada Theme by Theme Fusion | All Right Reserved | Powered by <strong>WordPress</strong>
    <div class="top rounded-top d-flex justify-content-center align-items-center"><a href="#top"><font-awesome-icon icon="fa-solid fa-chevron-up" /></a></div>
    </div>   
    </footer>
</template>

<script>
export default {
    name:"FooterComponent",

    data(){
        return{
            departments:[
                {
                    name:"Cardiology"
                },
                {
                    name:"Pediatrics"
                },
                {
                    name:"Diabetes Care"
                },
                {
                    name:"Pre-natel Care"
                },
                {
                    name:"Ultrasound Echocardiogram"
                }
            ]
        }
    }
}


</script>

<style lang="scss" scoped>

    footer {
        font-size: 1rem;
        
        p{
            padding-bottom: 1rem;
            border-bottom: 2px solid #EAE8E8;
            color: gray;
        }

        h5{
            position:relative
        }

        h5.info:after,  h5.departments:after {
        border-bottom: solid 2px $pelorous;
        content: '';
        position: absolute;
        left: 0;
        width: 35px;
        top: 40px;
        margin: 0 auto;
        }

        ul li{
            list-style: none;
            color: gray;
        }

        a{
            text-decoration: none;
            color: $riverBed;
        }
        
    }

    .copyright{
        background-color: $Gallery;
        font-size: 0.8rem;
        color: gray;
        position: relative;
    }

    .top{
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #474747;
        margin-right:2.5rem ;
        width: 40px;
        height: 30px;
    }

  
</style>
