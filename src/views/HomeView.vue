<template>
  <div class="container plus overflow-hidden">

    <section class="cards-home overflow-hidden py-3 py-md-5 py-xl-8 overflow-hidden d-flex justify-content-center align-items-center h-100 bg-transparent">
     <div class="container v">
       <div class="row gy-4 gy-lg-0 ">
         <div class="col-12 col-lg-6 ">
             <div class="card border-0 ">
               <img class="card-img-top img-fluid m-0 animate__animated animate__fadeInDownBig animate__slower " loading="lazy" :src=$store.state.home[0].image alt="Me">
               <div class="card-body  p-4 ">
                 <div class="entry-header border-0   ">
                   <h2 class="card-title entry-title mb-0 text-uppercase animate__animated animate__fadeInLeftBig animate__slower  ">{{$store.state.home[0].intro  }}</h2>
                   <h6 class="card-title entry-title mb-0 animate__animated animate__fadeInRightBig animate__slower">{{$store.state.home[0].title  }}</h6>
                 </div>
                 <p class="card-text entry-summary animate__animated animate__fadeInUpBig animate__slower ">{{ $store.state.home[0].subintro }}</p>
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
img {
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 170px;
}
i {
color: black;
padding: 7px;
border-radius: 45%;

}
i:hover{
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px black;
  background: #F1B24A;
} 
#btn{
  padding: 1px;
  border-radius: 5%;
}
#btn:hover{
  color: #F1B24A;
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px #333333;
  outline: none;
}
.plus{
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
  position: relative;
}

.card{
  background-color: transparent;
  color: #FFFFFF;
  width: 600px;
}

@media (max-width:300px) {
  .plus{
    position: relative;
    left: -162px !important;
  }
  .container{
    width: 151vw !important;
  }
img{
  width: 150px;
  height: auto;
  position: relative;
  left: 230px;
}
h2 {
  font-size: 16px;
}
h6{
  font-size: 12px;
}
p{
  font-size: 10px;
}
}
@media (max-width:320px) {
  .plus{
    position: relative;
    left: -150px;
  }
  .container{
    width: 141vw ;
  }
img{
  width: 150px;
  height: auto;
  position: relative;
  left: 230px;
}
h2 {
  font-size: 16px;
}
h6{
  font-size: 12px;
}
p{
  font-size: 10px;
} 
}
</style>