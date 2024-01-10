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
  background: #f8f9fa ;
}
nav {
  padding: 30px;
}
nav a {
  color: white;
}
nav a.router-link-exact-active {
  color:   black;
  border-bottom: 2px solid #e74c3c;  
}
body{
  background: #f8f9fa;
  color: #333333;
}

</style>
