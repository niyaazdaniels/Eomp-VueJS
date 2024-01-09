<template>
  <div class="row row-cols-1 row-cols-md-2 g-4 project-row">
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[0].image" class="card-img-top" alt="To-do List">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[0].name }}</h5>
        <p class="card-text">{{ $store.state.projects[0].description }}</p>
        <a :href= $store.state.projects[0].gitHub class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[0].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[1].image" class="card-img-top" alt="Calculator">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[1].name }}</h5>
        <p class="card-text">{{ $store.state.projects[1].description }}</p>
        <a :href= $store.state.projects[1].gitHub class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[1].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[2].image" class="card-img-top" alt="Keyboard">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[2].name }}</h5>
        <p class="card-text">{{ $store.state.projects[2].description }}</p>
        <a :href= $store.state.projects[2].gitHub class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[2].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[3].image" class="card-img-top" alt="Netflix ">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[3].name }}</h5>
        <p class="card-text">{{ $store.state.projects[3].description }}</p>
        <a :href= $store.state.projects[3].gitHub class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[3].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[4].image" class="card-img-top" alt="First Ecommerce">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[4].name }}</h5>
        <p class="card-text">{{ $store.state.projects[4].description }}</p>
        <a :href="$store.state.projects[4].gitHub" class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[4].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img :src="$store.state.projects[5].image" class="card-img-top" alt="Second Ecommerce">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[5].name }}</h5>
        <p class="card-text">{{ $store.state.projects[5].description }}</p>
        <a :href="$store.state.projects[5].hosted" class="btn" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a :href="$store.state.projects[5].hosted" class="btn" target="_blank"><i class="fa-solid fa-globe"></i></a>
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
.project-row{
  position: relative;
  top: 150px;
  left: 3%;
  width: 97%;
  
}
.card{
  width: 450px;
  background: #CC9169;
}
img{
  height: 300px;
  width: auto;
  border-radius: 30%;
}

@media (max-width:300px){
  .card {
    width: 290px;
    position: relative;
    left: 1.5%;
    background: #CC9169;
  }
  .project-row{
    top: 80px;
  }

}
</style>