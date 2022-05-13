<template>
    <div class="jumbo ">
        <div class="site-container jumbo-text d-flex flex-column align-items-center justify-content-center">
            <section class="w-50 text-light text-center">
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minima id ad, necessitatibus fuga blanditiis facilis dolores sit dolore quas saepe adipisci, inventore officiis tempore nulla rem dolor itaque vero!</p>
            </section>
            <form  class="w-50" action="">
                <div class="row g-4">
                    <div class="col-6"><input class="form-control" type="name"></div>
                    <div class="col-6"><input class="form-control" type="email"></div>
                    <div class="col-6"><input class="form-control" type="name"></div>
                    <div class="col-6"><input class="form-control" type="email"></div>
                                        
                    <div class="col 12">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="col-12">
                        <button class="blue w-100">Make an appointment</button>
                    </div>

                </div>
                
                
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name:"AppointmentComponent"
    
}
</script>


<style lang="scss" scoped>
.jumbo{
    background-image: url(@/assets/img/make-an-appointment.jpg);
    height: 700px;
    background-image: contain;
    background-position: center;
    .jumbo-text{
        height: 100%;
    }
}

</style>