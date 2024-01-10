<template>
    <NavView/>
    <FooterView/>
    <router-view/>
</template>

<script>
import FooterView from './components/FooterView.vue';
import NavView from './components/NavView.vue'

export default {
  components: { NavView, FooterView },
  computed:{
  fetchHome(){
   return this.$store.dispatch('fetchHome')
  },
  fetchAbout (){
    return this.$store.dispatch('fetchAbout')
  },
  fetchEducation (){
    return this.$store.dispatch('fetchEducation')
  },
  fetchExperience (){
    return this.$store.dispatch('fetchExperience')
  },
  fetchSkills (){
    return this.$store.dispatch('fetchSkills')
  },
  fetchProjects(){
    return this.$store.dispatch('fetchProjects')
  },
  fetchTestimonials(){
    return this.$store.dispatch('fetchTestimonials')
  }
 },
 mounted(){
  this.fetchHome,
  this.fetchAbout,
  this.fetchEducation,
  this.fetchExperience,
  this.fetchSkills,
  this.fetchProjects,
  this.fetchTestimonials
 }
}
</script>

<style >
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
nav {
  padding: 20px;
}
nav a {
  color: white;
}
nav a.router-link-exact-active {
  color:   #F1B24A;
}
body{
  background: linear-gradient(90deg,#164A41,#4D774E, #9DC88D) ;
  color: #FFFFFF;
  overflow-x: hidden;
}

</style>
