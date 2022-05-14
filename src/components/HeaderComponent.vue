<template>
    <header>
        <Nav />
        <div class="site-container">
            <div class="row jumbo-container text-light m-0 p-0 align-items-center">
                <!-- jumbotext -->
                <div class="col-7 ">
                <h1>Caring <span class="text-color">For Life</span> </h1>
                <p class="mt-3">
                    kind words can be short and easy to speak, but their echoes are truly endless. Avada Health focused on you as if it was our own family.
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
  }
}

</script>


<style lang="scss" scoped>
    header{
        background-image: url(@/assets/img/header-image-homepage.jpg);
        height: 850px;
        font-size: 1rem;
        background-size: cover;
        background-position-x: center;
        background-repeat: no-repeat;
        background-color: #bcbcbd33;;
        background-blend-mode: multiply;
    
        .jumbo-container{
            height: 850px;
            position: absolute;
            top: 0;
            font-size: 1.5rem;
            font-weight: 300;
            h1{
                font-weight: 300;
                font-size: 5rem;
            }
            .text-color{
                color: $pelorous;
            }

            button{
                font-size: 1.2rem;
            }
        }
    }

    
</style>