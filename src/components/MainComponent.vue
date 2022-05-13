<template>
    <main>
        <JumboHeader />
        <AvadaHealth />
        <OurDoctor />
        <HealthService />
        <JumboMain />
    </main>
</template>

<script>
import JumboHeader from '@/components/JumboComponent.vue'
import AvadaHealth from '@/components/AvadaComponent.vue'
import OurDoctor from '@/components/OurDoctorsComponent.vue'
import HealthService from '@/components/HealthServiceComponent.vue'
import JumboMain from '@/components/Jumbo2Component.vue'


export default {
  name: 'MainComponent',
  components: {
   JumboHeader,
   AvadaHealth,
   OurDoctor,
   HealthService,
   JumboMain
  }
}
</script>
