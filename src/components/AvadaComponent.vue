<template>
    <div class="site-container mt-5">
        <div class="d-flex flex-column align-items-center">
            <!-- text -->
            <section class="text-center mt-4">
                <h2>Welcome to Avada Health</h2>
            <p class="mt-4">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam porro sunt at nobis libero nemo ipsa. Dolore vero placeat explicabo! Voluptatum ipsam nemo sequi officia.
            </p>
            </section>
        </div>
        <div class="row wrap mt-5 m-0">
            <!-- col -->
            <div class="service col-12 col-sm-6 col-md-3  m-0 text-center" v-for="(service, index) in services" :key="index" >
                <img :src="service.src" alt="">
                <h5 class="text-uppercase mt-2">{{service.title}}</h5>
                <p class="mt-3 text">{{service.text}}</p>
            </div>
            
        </div>
    </div>
</template>
<script>


export default{
    name:"AvadaComponent",

    data(){
        return{
            services:[
                {   
                    title:"same day appointments",
                    src: require(`@/assets/img/icon-1.png`),
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {   
                    title:"world class facilities",
                    src: require(`@/assets/img/icon-2.png`),
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {   
                    title:"expert doctors",
                    src: require(`@/assets/img/icon-3.png`),
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },
                {   
                    title:"complementary therapies",
                    src: require(`@/assets/img/icon-4.png`),
                    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
                },

            ]
        }
    }
}
</script>

<style  lang="scss" scoped>
   section{
       width: 70%;
    }

    .text{
       font-size: 1rem;
       color: gray;
    }

    
    h5{
         transition:color 0.2s;
    }
    .service{
        cursor: pointer;
    }
    .service:hover h5{
        color: $pelorous;
    }

</style>
