<template>
  <div class="row row-cols-1 row-cols-md-2 g-4 project-row">
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[0].name }}</h5>
        <p class="card-text">{{ $store.state.projects[0].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[1].name }}</h5>
        <p class="card-text">{{ $store.state.projects[1].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[2].name }}</h5>
        <p class="card-text">{{ $store.state.projects[2].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[3].name }}</h5>
        <p class="card-text">{{ $store.state.projects[3].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[4].name }}</h5>
        <p class="card-text">{{ $store.state.projects[4].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ $store.state.projects[5].name }}</h5>
        <p class="card-text">{{ $store.state.projects[5].description }}</p>
        <a href="#" class="btn "><i class="fa-brands fa-github"></i></a>
        <a href="#" class="btn "><i class="fa-solid fa-globe"></i></a>
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