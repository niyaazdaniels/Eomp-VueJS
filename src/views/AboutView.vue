<template>
    <div class="card text-center animate__animated animate__bounceIn" style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-md-4 bg-dark rounded">
    <img :src="$store.state.home[0].image" class="img-fluid rounded-start">
  </div>
  <div class="col-md-8">
    <div class="card-body overflow-hidden">
      <h1 class="card-title display-4 animate__animated animate__fadeInRightBig animate__slow text-uppercase fw-bold">{{ $store.state.about[0].name }}</h1>
      <p class="card-text animate__animated animate__fadeInRightBig animate__slower">{{ $store.state.about[0].description }}</p>
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
padding: 10px;
box-shadow: 0px 0px 10px rgb(2, 90, 2);

}
img {
height: 380px;
width: auto;
}
p {
  font-size: 1rem;
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