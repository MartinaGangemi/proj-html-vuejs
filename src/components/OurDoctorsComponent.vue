<template>
    <div class="bg-doctor py-5 mt-5">
        <div class="site-container mt-5">
            <div class="d-flex flex-column align-items-center">
                <section class=" text-center">
                    <img src="@/assets/img/icon-5.png" alt="">
                    <h2 class="mt-3">Meet our doctors</h2>
                <p class="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eos rerum dolorum, incidunt sequi odit. Excepturi magni, sed modi aspernatur expedita magnam culpa consequuntur placeat?
                </p>
                </section>
            </div>
            <div class="row gx-5 my-5">
                <!-- doctor card -->
                <div class="col-4"  v-for="(doctor, index) in doctors" :key="index">
                    <div class="card bg-white rounded-0 border-0">
                        <img :src="doctor.src" alt="">
                        <div class="p-5">
                            <h5 class="text-uppercase">{{doctor.name}}</h5>
                            <h5 class="mt-3">{{doctor.mansion}}</h5>
                            <p>{{doctor.description}}</p>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter-square" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram-square" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    name:"OurDoctorsComponent",
    data(){
        return{
            doctors:[
                {
                    name: "Jon Snow",
                    mansion:"Anestheologist",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore!",
                    src: require(`@/assets/img/doctor-1.jpg`),
                },
                {
                    name: "Tony Stark",
                    mansion:"Cardiologist",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore!",
                    src: require(`@/assets/img/doctor-2.jpg`),
                },
                {
                    name: "Anna Smith",
                    mansion:"Nurse Practitioner",
                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, labore!",
                    src: require(`@/assets/img/doctor-3.jpg`),
                },
            ]
        }
    }
    
}
</script>

<style lang=scss scoped>
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

    .bg-doctor{
        background-color: $Gallery;
    }

    .card p{
       font-size: 1.1rem;
    }

    
</style>
