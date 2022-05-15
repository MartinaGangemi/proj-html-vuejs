<template>
    <div class="jumbo">
        <div class="site-container jumbo-text d-flex flex-column align-items-center justify-content-center">
            <section class="text-light text-center">
                <h2>Make an appontment</h2>
                <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minima id ad, necessitatibus fuga blanditiis facilis dolores sit dolore quas saepe adipisci, inventore officiis tempore nulla rem dolor itaque vero!</p>
            </section>
            <form  class="mt-4" action="">
                <div class="row g-4">
                    <div class="col-6"><input class="form-control" placeholder="Name*" type="name" required></div>
                    <div class="col-6"><input class="form-control" placeholder="Email*" type="email" required></div>
                    <div class="col-6"><input class="form-control" placeholder="Phone Number*" type="tel" required></div>
                    <div class="col-6"><input class="form-control " placeholder=" Appontment date" type="date"  required></div>
                    <div class="col 12">
                        <textarea class="form-control"  rows="3" placeholder="How can we help?*" required></textarea>
                    </div>
                    <div class="col-12">
                        <button class="blue w-100 d-flex justify-content-center">Make an appointment</button>
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
    height: 900px;
    background-image: contain;
    background-position: center;
    
    .jumbo-text{
        height: 100%;
    }

    form, section{
        width: 60%;
    }
    
    .form-control{
        background-color: transparent!important;
        border-radius: 0;
        border: solid 1px #8FA0A7;
        color: #8FA0A7;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        
    }

    .form-control:focus{
       outline-offset: 0;
        box-shadow: none!important;
        border: 1px solid #8FA0A7; 
        color: #8FA0A7;
    }




input[type=date] {
    display: flex;
    flex-direction:row-reverse;
}



::-webkit-calendar-picker-indicator {
    filter: invert(1);
    margin-right: 1rem;
}



    h2{
        position: relative;
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
    
    
}

</style>