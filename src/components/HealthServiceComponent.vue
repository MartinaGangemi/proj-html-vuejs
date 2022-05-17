<template>
    <div class="site-container mt-5 py-5">
       <div class="d-flex flex-column align-items-center">
            <section class="text-center">
                <img src="@/assets/img/icon-6.png" alt="">
                <h2 class="mt-3">Our Health Services</h2>
            <p class="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in aliquid neque corrupti animi ab porro molestias, saepe sapiente iste, asperiores voluptatem! Nesciunt dicta consectetur sint, distinctio voluptatibus omnis! Doloribus
            </p>
            </section>
        </div> 
        <div class="row mt-5 g-5 m-0">
            <!-- col -->
            <div class="col-12 col-sm-6 col-md-4 services text-center " v-for="(service, index) in services" :key="index">
                <img :src="service.src" alt="">
                <h5 class="text-uppercase mt-4">{{service.title}}</h5>
                <p class="mt-4">{{service.description}} </p>
                
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"HealthServiceComponent",
    data(){
        return{
            services:[
                {
                    title:"Rehabilitation center",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-14.png`)
                },
                {
                    title:"Dental implants",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-15.png`)
                },
                {
                    title:"Medicine research",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-16.png`)
                },
                {
                    title:"blood bank",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-11.png`)
                },
                {
                    title:"pharmaceutical advice",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-12.png`)
                },
                {
                    title:"medical counseling",
                    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, obcaecati ullam voluptatum aperiam quasi eos?",
                    src:require(`@/assets/img/icon-13.png`)
                }
            ]
        }
    }
    
}
</script>

<style lang="scss" scoped>
    section{
       width: 70%;
    }

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

    .services p{
        font-size: 1rem;
        color: gray;
    }

    h5{
         transition:color 0.2s;
    }

    .services{
         cursor: pointer;
    }

    .services:hover h5{
        color: $pelorous;
    }

    

</style>
