<template>
  <div class="container">
    <h2 class="text-heading fw-semibold text-uppercase text-decoration-underline">About Me</h2>
  </div>
  <div class="container">

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
padding: 10px;
background: #164A41;
color: #FFFFFF;
border: none;
border-radius: 0px;
}
.card:hover{
box-shadow: 0px 0px 12px #FFFFFF;

}
img {
height: 380px;
width: auto;
}
p {
  font-size: 1rem;
}
.text-heading{
  color: #F1B24A;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
@media (max-width: 300px){
.card{
  display: flex  !important;
  position: relative !important;
  top: -15px !important;
}
img {
height: 150px !important ;
width: auto;
}
.text-heading{
font-size: 18px !important;
top: -30px;
position: relative;
}
p {
  font-size: 8px !important;
}
}
@media (max-width: 320px){
 .card{
  display: flex !important;
  top: 60px !important;
  height: 450px;
 }
 img{
  height: 150px;
  width: auto;
 }
 h1{
  font-size: 16px !important;
 }
 p{
  font-size: 9px !important;
 }
}
@media (max-width: 768px){
  .card{
    display: flex;
    top: 30px;
  }
  img{
    height: 150px !important;
    width: auto;
}
h1{
  font-size: 24px;
}
p{
  font-size: 14px;
}
}
</style>