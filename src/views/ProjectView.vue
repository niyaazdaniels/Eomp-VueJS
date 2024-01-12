<template>
 <div class="container d-flex flex-column" v-if="$store.state.projects.length > 0" >
    <h2 class="heading text-uppercase animate__animated animate__fadeInDownBig animate__slow fw-semibold text-decoration-underline">Projects</h2>
    <div class="cards">
        <div class="card " v-for="project in $store.state.projects" :key="project">
            <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=project.image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{project.name}}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{project.description }}</p>
        <a :href= project.gitHub class="btn animate__animated animate__fadeInUpBig animate__slower " target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="project.hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
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
h2{
  font-size:28px;
  color: #f1b24a;
}
.container {
    max-width: 1500px;
    padding: 0 10px;
    margin: 0 auto;
    top: 180px;
    height: 300px;
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
    overflow-y:hidden ;
}
.card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 10px;
    background: linear-gradient(90deg, #4D774E, #164A41);
    border-radius: 5px;
    transition: all 0.4s;
    font-size: 12px;
    border: none;
    color: #FFFFFF;
}
.card:hover{
  transform: scale(1.1);
  box-shadow: 0px 0px 8px white;
}
.card .card-title {
    font-size: 1.1rem;
}
.card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
}
.cards::-webkit-scrollbar {
    height: 12px;
    border-radius: 30px;
}
img{
    height: 80px;
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

@media (min-width: 500px) {
    .card {
        flex-basis: calc(50% - 10px);
    }

    .card:not(:last-child) {
        margin-right: 20px;
    }
}

@media (min-width: 700px) {
    .card {
        flex-basis: calc(calc(100% / 3) - 20px);
    }

    .card:not(:last-child) {
        margin-right: 30px;
    }
}

@media (min-width: 1100px) {
    .card {
        flex-basis: calc(25% - 30px);
    }

    .card:not(:last-child) {
        margin-right: 40px;
    }
}
</style>