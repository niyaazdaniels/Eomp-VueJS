<template>
    <div class="card text-center" style="max-width: 750px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="$store.state.home[0].profile-image" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.home[0].intro }}</h5>
        <p class="card-text">{{ $store.state.home[0].subintro }}</p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
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
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50vh;
  text-align: center;
  top: 100px;
  left: 30%;
}
 </style>