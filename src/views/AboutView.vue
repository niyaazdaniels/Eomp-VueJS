<template>
    <div class="card text-center animate__animated animate__bounceIn " style="max-width: 1000px;">
<div class="row g-0">
  <div class="col-lg-4 ">
    <img :src="$store.state.home[0].image" class="img-fluid rounded-start ">
  </div>
  <div class="col-lg-8">
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
body{
  font-family: 'Roboto', sans-serif;

}
.card{
text-align: center;
top: 80px;
left: 11%;
padding: 10px;
background: #164A41;
color: #FFFFFF;
border: none;
box-shadow: 0px 0px 8px #FFFFFF;
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

}
</style>