<template>
  <!-- Calling Components  -->
    <NavView/>
    <spinner-view/>
    <router-view/>
    
</template>

<script>
// Importing 
import NavView from './components/NavView.vue'
import SpinnerView from './components/SpinnerView.vue';

export default {
  components: { NavView, SpinnerView },
  computed:{
    // calling functions
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
//  Life cycle hook 
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
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: light;
  letter-spacing: 2px;
 
}
nav {
  padding: 20px;
  letter-spacing: 5px;
}
nav a {
  color: white;
}
nav a.router-link-exact-active {
  color:   #F1B24A;
}
body{
  background: linear-gradient(90deg,#164A41,#4D774E, #86bd72) ;
  background-size: 200% 100%;
  color: #FFFFFF;
  overflow-x: hidden;
}

html::-webkit-scrollbar {
  display: none;
  margin-top: 130px;
}
html {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
