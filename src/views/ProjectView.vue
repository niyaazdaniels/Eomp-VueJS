<template>
    <div class="container d-flex flex-column" v-if="$store.state.projects.length > 0">
      <h1 class="heading text-uppercase animate__animated animate__fadeInDownBig animate__slow fw-semibold">Projects</h1>
      <div class="cards container-fluid m-0">
        <div class="card container-fluid"  id="project-card"  v-for="project in $store.state.projects" :key="project">
          <div>
            <div class="image animate__animated animate__fadeInUpBig"><img :src="project.image"></div>
            <div class="card-body">
              <h6 class="card-title animate__animated animate__fadeInUpBig animate__slow text-uppercase">{{ project.name }}</h6>
              <p class="card-text fw-light mt-2 animate__animated animate__fadeInUpBig animate__slow">{{ project.description }}</p>
              <div class="card-text position-relative bottom-0">
                <a :href="project.gitHub" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a :href="project.hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
              </div>
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
.heading{
  color: #f1b24a;
  letter-spacing: 7px;
  font-size: 35px;
  margin-bottom: 50px;
}
.container {
    max-width: 100vw;
    padding: 20px 30px;
    margin: 0 auto;
    top: 100px;
    height: 100vh;
    position: relative;
    height: max-content;
}
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
    height: 100px;
}
i {
color: black;
padding: 7px;
border-radius: 15%;
margin-top: 15px;
font-size: 1.2rem;
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
  width: 12px;
}

.cards::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #4D774E, #164A41);

}

.cards::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}

@media (max-width: 300px) {
  #project-card {
    height: auto;
  }
  .heading {
    margin: 0;
    font-size: 20px;
  }
}
@media (min-width: 500px) {
  p {
  font-size: 10px; 
  }
  #project-card {
        flex-basis: calc(50% - 10px);
    }
    #project-card:not(:last-child) {
        margin-right: 20px;
    }
    .heading {
      margin: 15px;
    }
}

@media (min-width: 700px) {
  #project-card {
        flex-basis: calc(calc(100% / 3) - 20px);
    }

    #project-card:not(:last-child) {
        margin-right: 30px;
    }
}

@media (min-width: 1100px) {
  #project-card {
        flex-basis: calc(25% - 30px);
    }

    p {
    font-size: 12px;
    }
    #project-card:not(:last-child) {
        margin-right: 40px;
    }
}
</style>