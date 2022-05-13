<template>
    <header class="px-5 py-4 d-flex w-100 justify-content-between align-items-center">
        <div class="logo-header">
            <img src="@/assets/img/medical_logo_1x_light.png" alt="">
        </div>
        <div class="text-uppercase d-flex align-items-center">
            <ul class="mb-0">
                <li><a class ="active" href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">departments</a></li>
                <li><a href="#">articles</a></li>
            </ul>
            <button class="blue ms-5">Make appointment</button>
        </div>
    </header>
     
</template>

<script>

export default {
  name: 'HeaderComponent',
}

</script>


<style lang="scss" scoped>
    header{
       height: 100px;
       position: absolute;
       top: 0;
        ul li{
             display: inline-block;
             margin-left: 2.5rem;

            a{
                text-decoration: none;
                color: white;
             }

             .active{
                 color: $pelorousVibrant;
             }
         }

    }

    
</style>