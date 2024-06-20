<template>
    <div class="container-fluid d-flex flex-column justify-content-center" v-if="$store.state.projects.length > 0">
      <h1 class="heading text-uppercase animate__animated animate__fadeInDownBig animate__slow fw-semibold">Projects</h1>
      <!-- <div class="cards container-fluid m-0">
        <div class="card container-fluid"  id="project-card"  v-for="project in $store.state.projects" :key="project">
          <div>
            <div class="image animate__animated animate__fadeInUpBig"><img :src="project.image"></div>
            <div class="card-body">
              <h6 class="card-title animate__animated animate__fadeInUpBig animate__slow text-uppercase">{{ project.name }}</h6>
              <p class="card-text text-start fw-light mt-2 animate__animated animate__fadeInUpBig animate__slow">{{ project.description }}</p>
              <div class="card-text position-relative bottom-0">
                <a :href="project.gitHub" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a :href="project.hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
              </div>
            </div>
          </div>
        </div> -->
         <div class="container-fluid row-cols-6 justify-content-center column">
            <div class="card profile-card-5 me-5"  v-for="project in $store.state.projects" :key="project">
               <div class="card-img-block">
                  <img class="card-img-top" :src="project.image" alt="Card image cap">
               </div>
               <div class="card-body">
                  <h5 class="card-title">{{ project.name }}</h5>
                  <p class="card-text">{{ project.description }}</p>
                  <div class="card-text d-flex justify-content-center">
                    <a :href="project.gitHub" class="btn box" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a :href="project.hosted" class="btn box " target="_blank"><i class="fa-solid fa-globe"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div v-else>
      <SpinnerView/>
    </div>
  </template>
  

<script>
import SpinnerView from '@/components/SpinnerView.vue';
export default {
    components: { SpinnerView }
}
</script>

<style scoped>


/*Profile Card 5*/
.profile-card-5 {
   margin-top: 50px;
   min-width: 280px;
   justify-content: center;
   box-shadow: 0 4px 18px rgba(0, 0, 0, 0.63);

}

.profile-card-5 .btn {
   border-radius: 2px;
   text-transform: uppercase;
   font-size: 12px;
   padding: 7px 20px;
}

.profile-card-5 .card-img-block {
   width: 80%;
   margin: 0 auto;
   position: relative;
   top: -20px;
}
img {
  height: 130px;
}

.profile-card-5 .card-img-block img {
   border-radius: 10px;
   box-shadow: 0 0 18px rgba(0, 0, 0, 0.63);
}

.profile-card-5 h5 {
   color: #4e5e30;
   font-weight: 600;
}

.profile-card-5 p {
   font-size: 14px;
   font-weight: 300;
}

.profile-card-5 .btn-primary {
   background-color: #4e5e30;
   border-color: #4e5e30;
}

.heading{
  color: #f1b24a;
  letter-spacing: 7px;
  font-size: 35px;
}
.container-fluid {
    padding: 20px 40px;
}
.column {
  display: flex;
  flex-flow: row wrap;
}
i {
color: #4e5e30;
font-size: 1.2rem;
}
.box {
  width: 80px;
  height: auto;
  transition: .5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 5px;
  background: transparent;
}

.box:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(100%);
}

.box:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.box:hover {
  box-shadow: 0 5px 15px #F1B24A;
}

.box:hover:before {
  border-color: #F1B24A;
  height: 100%;
  transform: translateX(0);
  transition: .4s transform linear, .4s height linear .4s;
}

.box:hover:after {
  border-color: #F1B24A;
  height: 100%;
  transform: translateX(0);
  transition: .4s transform linear, .4s height linear .5s;
}

/* 

.cards {
    display: flex;
    padding: 20px 0px;
    list-style: none;
    overflow-x: scroll;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    overflow-y: hidden ;
  }
  #project-card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    height: 450px;
    background: linear-gradient(90deg, #4D774E, #164A41);
    transition: all 0.8s;
    font-size: 14px;
    border: none;
    color: #FFFFFF;
    margin-right: 15px;
    margin-bottom: 20px;
    height: 55vh;


}

#project-card:hover{
  transform: scale(1.1);
}
#project-card .card-title {
    font-size: 0.8rem;
    color: #f1b24a;
}
#project-card .card-content {
    margin: 20px 0;
    max-width: 90%;
    margin-left: 10px;
}
.cards::-webkit-scrollbar {
    height: 15px;
    border-radius: 50%;
}
img{
    height: 90px;
}

p {
  font-size: 12px;
}
i:hover{
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 12px white;
  color: #f1b24a;

} 
.cards::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.cards::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4D774E, #164A41);

}

.cards::-webkit-scrollbar-track {
  background-color: #f0f0f0;
} */



</style>