<template>
    <NavView/>
    <router-view/>
      <FooterView/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #221D23;
}

nav a.router-link-exact-active {
  color: white;
}
body{
  font-family: 'Roboto', sans-serif;

}
</style>
