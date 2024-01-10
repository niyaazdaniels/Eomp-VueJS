<template>
 <section class="py-3 py-md-5 py-xl-8">
  <div class="container overflow-hidden">
    <div class="row gy-4 gy-lg-0">
      <div class="col-12 col-lg-6">
          <div class="card border-0">
            <img class="card-img-top img-fluid m-0 animate__animated animate__fadeInDownBig animate__slower" loading="lazy" :src=$store.state.home[0].image alt="Me">
            <div class="card-body border-0 bg-white p-4">
              <div class="entry-header border-0 ">
                <h2 class="card-title entry-title mb-0 animate__animated animate__fadeInLeftBig animate__slower ">{{$store.state.home[0].intro  }}</h2>
                <h6 class="card-title entry-title mb-0 animate__animated animate__fadeInRightBig animate__slower">{{$store.state.home[0].title  }}</h6>
              </div>
              <p class="card-text entry-summary text-secondary animate__animated animate__fadeInUpBig animate__slower ">{{ $store.state.home[0].subintro }}</p>
              <p class="card-text">
              <a href="https://github.com/niyaazdaniels" target="_blank"><i class="fa-brands fa-github animate__animated animate__rotateIn animate__slower"></i></a>
              <a href="https://twitter.com/daniels_niyaaz" target="_blank"><i class="fa-brands fa-twitter animate__animated animate__rotateIn animate__slower "></i></a>
              <a href="https://www.linkedin.com/in/niyaaz-daniels-6694a7129/" target="_blank"><i class="fa-brands fa-linkedin animate__animated animate__rotateIn animate__slower "></i></a>
              </p>
              <a href="https://drive.google.com/file/d/1VhXma-9eHWEU0Y9tS-DScq7nccc9UCsZ/view?usp=drive_link" target="_blank"><button class="btn  animate__animated animate__slideInUp animate__slower" id="btn"><i class="fa-solid fa-arrow-right-long"></i>Resume<i class="fa-solid fa-arrow-left-long"></i></button></a>
                  </div> 
            </div>
          </div>
      </div>
    </div>
</section>
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
img {
  width: 200px;
  height: 100%;
  position: relative;
  left: 190px;
}
i {
color: black;
padding: 7px;
border-radius: 45%;

}
i:hover{
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px black;
  background: #e74c3c;
} 
#btn{
  padding: 1px;
  border-radius: 5%;
}
#btn:hover{
  transform: scale(1.2);
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px black;
  outline: none;
}
.card{
text-align: center;
top: 20px;
left: 50%;
padding: 10px;
height: 100%;
}

@media screen and (max-width:768px){
  .card{
    display: flex;
    top: 2rem;
    width: 600px;
    left: 9%;
  }
  h1{
    font-size: 2rem;
  }
 

}
@media screen and (max-width:425px){
.card{
display: flex;
top: 16vh;
left: 20px;
width: 290px;
height: 500px;
}
img {
  position: relative;
  left: 90px;
  width: 100px;
  height: auto;
}
h2 {
  font-size: 16px;
}
h6 {
  font-size: 12px;
}
p {
  font-size: 10px;
}
i {
color: black;
padding: 5px;
}
}
@media screen and (max-width:375px){
.card{
display: flex;
top: 16vh;
left: 0px;
width: 360px;
height: 500px;
}
img {
  position: relative;
  left: 90px;
  width: 100px;
  height: auto;
}
h2 {
  font-size: 16px;
}
h6 {
  font-size: 12px;
}
p {
  font-size: 10px;
}
i {
color: black;
padding: 5px;
}
}
@media screen and (max-width:320px){
.card{
display: flex;
top: 16vh;
left: 4px;
width: 290px;
height: 500px;
}
img {
  position: relative;
  left: 90px;
  width: 100px;
  height: auto;
}
h2 {
  font-size: 16px;
}
h6 {
  font-size: 12px;
}
p {
  font-size: 10px;
}
i {
color: black;
padding: 5px;
}
}
@media screen and (max-width:300px){
.card{
display: flex;
top: 16vh;
left: -7px;
width: 290px;
height: 500px;
}
img {
  position: relative;
  left: 90px;
  width: 100px;
  height: auto;
}
h2 {
  font-size: 16px;
}
h6 {
  font-size: 12px;
}
p {
  font-size: 10px;
}
i {
color: black;
padding: 5px;
}
}


</style>