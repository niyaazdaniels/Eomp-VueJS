<template>
    <div class="card text-center" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4 bg-dark rounded">
    <img :src="$store.state.home[0].image" class="img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h1 class="card-title display-4">{{ $store.state.about[0].name }}</h1>
      <p class="card-text">{{ $store.state.about[0].description }}</p>
      <p class="card-text"></p>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.card{
text-align: center;
top: 160px;
left: 18%;
padding: 10px
}
img {
height: 380px;
width: auto;
}
@media (max-width:300px){
.card{
position: relative;
top: 16vh;
left: 1%;
width: 290px;
}
p {
    font-size: 10px;
}
img {
height: 200px;
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