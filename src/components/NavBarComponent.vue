<template>
    <li ><a :href="link">{{ text }}</a></li>
</template>
<script>
    export default {
    name: 'NavBarComponent',
        props:{
            link:String,
            text:String
        }
    }
</script>
<style lang="scss" scoped>
  
        li{
             display: inline-block;
             margin-left: 2rem;
            
            a{
                color: white;
                transition: 0.2s;
                 &:hover{
                 color: $pelorous;
             }
             }
         }
   
</style>