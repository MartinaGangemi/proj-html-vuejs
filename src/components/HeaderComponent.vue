<template>
  <header id="top">
        <!-- site Header -->
        <div class=" site-header p-5 d-flex w-100 justify-content-between align-items-center">
            <div class="logo-header">
                <img src="@/assets/img/medical_logo_1x_light.png" alt="">
            </div>
            <div class=" right-header text-uppercase d-flex align-items-center">
                <nav>
                    <ul class="mb-0 p-0 ">
                        <Nav v-for="(item, index) in menuList" :key="index" :link="item.link" :text="item.text" />
                    </ul>
                </nav>
                <button class="blue ms-5" onclick="location.href='#appointment'">Make appointment</button>
            </div>
        </div>
        <!-- jumbotron -->
        <div class="site-container">
            <div class="row jumbo-container text-light m-0 p-0 align-items-center">
                <!-- jumbotext -->
                <div class="col-12 col-md-7 jumbo-text">
                <h1>Caring <span class="text-color">For Life</span> </h1>
                <p class="mt-3">
                    Kind words can be short and easy to speak, but their echoes are truly endless. Avada Health focused on you as if it was our own family.
                </p>
                <button class="blue py-4 mt-5">Learn More</button>
            </div>
            </div>
        </div>
    </header>
</template>

<script>
import Nav from '@/components/NavBarComponent.vue'
export default {
  name: 'HeaderComponent',
  components:{
      Nav
  },

  data(){
        return{
            menuList:[
                {
                    text:"home",
                    link:"#"
                },
                {
                    text:"about",
                    link:"#"
                },
                {
                    text:"departments",
                    link:"#"
                },
                {
                    text:"articles",
                    link:"#"
                }

            ]
        }
    }
}

</script>


<style lang="scss" scoped>
    .site-header{
         height: 80px;
        button{
            font-size: 1.2rem;
        }
    }
    
    header{
        background-image: url(@/assets/img/header-image-homepage.jpg);
        height: 850px;
        font-size: 1rem;
        background-size: cover;
        background-position-x: center;
        background-repeat: no-repeat;
        background-color: #bcbcbd33;;
        background-blend-mode: multiply;
    
        .site-container{
            height: 850px;
            
            .jumbo-container{
                height: calc(100% - 180px);
                font-size: 1.5rem;
                font-weight: 300;
            }
        
            h1{
                font-weight: 300;
                font-size: 5rem;
            }
            .text-color{
                color: $pelorous;
            }
        }
    }

</style>