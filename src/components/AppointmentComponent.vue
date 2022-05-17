<template>
    <div class="jumbo " id="appointment">
        <div class="site-container p-0 jumbo-text d-flex flex-column align-items-center justify-content-center">
            <section class="text-light text-center">
                <h2>Make an appointment</h2>
                <p class="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus minima id ad, necessitatibus fuga blanditiis facilis dolores sit dolore quas saepe adipisci, inventore officiis tempore nulla rem dolor itaque vero!</p>
            </section>
            <form  class="mt-4" >
                <div class="row g-4">
                    <div class="col-12 col-sm-6"><input class="form-control" placeholder="Name*" type="name" required></div>
                    <div class="col-12 col-sm-6"><input class="form-control" placeholder="Email*" type="email" required></div>
                    <div class="col-12 col-sm-6"><input class="form-control" placeholder="Phone Number*" type="tel" required></div>
                    <div class="col-12 col-sm-6">
                         <font-awesome-icon icon="fa-solid fa-calendar-days" /> 
                        <date-picker   
                        :disabled-date="disabledBeforeToday"  class=" picker-class form-control" v-model="value" :default-value="new Date()" format="DD/MM/YYYY" placeholder=" Appontment date*" type="date"   required >
                        </date-picker>
                    </div>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default{
    name:"AppointmentComponent",
    components: { 
        DatePicker 
        },
   
    data() {
    return {
        value: "",
        };
    },
   methods: {
    disabledBeforeToday(date) {
        const today = new Date();
        return date < today
        }
    }
} 

</script>


<style lang="scss" scoped>
.jumbo{
    background-image: url(@/assets/img/make-an-appointment.jpg);
    height: 900px;
    background-image: contain;
    background-position: center;
    
    .site-container{
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

         &:focus{
        outline-offset: 0;
        box-shadow: none!important;
        border: 1px solid $pelorous; 
        color: #8FA0A7;
        }

        &:hover{
            border: solid 1px $pelorous;
        }
    }

    .fa-calendar-days{
        color: gray;
        position: absolute;
        padding:0.7rem
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