<template>
    <main>
        <JumboHeader />
        <AvadaHealth />
        <OurDoctor />
        <HealthService />
        <TourMain />
        <LearnMain />
        <MakeAppointment />
        <ImgSlider />
    </main>
</template>

<script>
import JumboHeader from '@/components/JumboComponent.vue'
import AvadaHealth from '@/components/AvadaComponent.vue'
import OurDoctor from '@/components/OurDoctorsComponent.vue'
import HealthService from '@/components/HealthServiceComponent.vue'
import TourMain from '@/components/TourMainComponent.vue'
import LearnMain from '@/components/LearnMoreComponent.vue'
import MakeAppointment from '@/components/AppointmentComponent.vue'
import ImgSlider from '@/components/SliderComponent.vue'


export default {
  name: 'MainComponent',
  components: {
   JumboHeader,
   AvadaHealth,
   OurDoctor,
   HealthService,
   TourMain,
   LearnMain,
   MakeAppointment,
   ImgSlider
  }
}
</script>
