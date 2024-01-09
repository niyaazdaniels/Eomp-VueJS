<template>
  <div class="card text-center" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4 bg-dark rounded">
    <img :src="$store.state.home[0].image" class="img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h1 class="card-title display-4">{{ $store.state.home[0].intro }}</h1>
      <p class="card-text">{{ $store.state.home[0].subintro }}</p>
      <p class="card-text">
<a href="https://github.com/niyaazdaniels" target="_blank"><i class="fa-brands fa-github"></i></a>
<a href="https://twitter.com/daniels_niyaaz" target="_blank"><i class="fa-brands fa-twitter"></i></a>
<a href="https://www.linkedin.com/in/niyaaz-daniels-6694a7129/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
</p>
<a href="/assets/Niyaaz Daniels (Updated).pdf" target="_blank"><button class="btn btn-dark text-uppercase">Resume</button></a>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
methods: {
},
fetchHome(){
 return this.$store.dispatch('fetchHome')
},
mounted(){
this.fetchHome
}
}
</script>
<style scoped>
.card{
text-align: center;
top: 160px;
left: 19%;
padding: 10px
}
i {
color: black;
padding: 10px;
}
@media (max-width:300px){
.card{
position: relative;
top: 16vh;
left: 1.5%;
width: 290px;
}
img {
height: 350px;
width: auto;
}
i {
color: black;
padding: 5px;
}
body{
  font-family: 'Roboto', sans-serif;

}
}
</style>