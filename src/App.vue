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
  fetchResume (){
    return this.$store.dispatch('fetchResume')
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
  this.fetchResume,
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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
