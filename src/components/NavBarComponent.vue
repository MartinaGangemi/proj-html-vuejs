<template>
    <nav class="p-5 d-flex w-100 justify-content-between align-items-center">
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
    </nav>
</template>
<script>
    export default {
    name: 'NavBarComponent',
    }
</script>


<style lang="scss" scoped>
   nav{
       height: 80px;
        ul li{
             display: inline-block;
             margin-left: 2rem;
            
            a{
                text-decoration: none;
                color: white;
                transition: 0.2s;
                 &:hover{
                 color: $pelorous;
             }
             }

             .active{
                 color: $pelorous;
             }
         }
   }
</style>