<template>
 <div class="container">
    <h2 class="heading text-uppercase animate__animated animate__fadeInDownBig animate__slow fw-semibold">{{ $store.state.projects[6].heading }}</h2>
    <ul class="cards">
        <li class="card">
            <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[0].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[0].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[0].description }}</p>
        <a :href= $store.state.projects[0].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower " target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[0].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
            </div>
        </li>
        <li class="card">
          <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[1].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[1].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[1].description }}</p>
        <a :href= $store.state.projects[1].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[1].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      </div>
        </li>
        <li class="card">
          <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[2].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[2].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[2].description }}</p>
        <a :href= $store.state.projects[2].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[2].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      </div>
        </li>
        <li class="card">
          <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[3].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[3].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[3].description }}</p>
        <a :href= $store.state.projects[3].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[3].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      </div>
        </li>
        <li class="card">
          <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[4].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[4].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[4].description }}</p>
        <a :href= $store.state.projects[4].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[4].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      </div>
        </li>
        <li class="card">
          <div>
                <div class="image animate__animated animate__fadeInUpBig"><img :src=$store.state.projects[5].image></div>   
                <div class="card-body">
        <h5 class="card-title animate__animated animate__fadeInUpBig animate__slow fw-semibold text-uppercase">{{ $store.state.projects[5].name }}</h5>
        <p class="card-text animate__animated animate__fadeInUpBig animate__slow">{{ $store.state.projects[5].description }}</p>
        <a :href= $store.state.projects[5].gitHub class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[5].hosted" class="btn animate__animated animate__fadeInUpBig animate__slower" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      </div>
        </li>
       
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

h2{
  font-size:28px;
}
.container {
    max-width: 1300px;
    padding: 0 10px;
    margin: 0 auto;
    top: 100px;
    position: relative;
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
    background: #4D774E;
    border-radius: 12px;
    box-shadow: 0 0px 8px #F1B24a;
    scroll-snap-align: start;
    transition: all 0.4s;
    font-size: 12px;
    border: none;
    color: #FFFFFF;
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
img:hover{
  transform: rotate(360deg)
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