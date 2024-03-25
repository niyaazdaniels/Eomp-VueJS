<template>
  <div class="card container-fluid d-flex align-items-center border-0 overflow-hidden h-100">
  <img :src=$store.state.home[0].image class="card-img-top animate__animated animate__fadeInDownBig animate__slower  " alt="me">
  <div class="card-body">
    <h5 class="card-title fs-1 fw-semibold animate__animated animate__fadeInRightBig animate__slower text-uppercase ">{{ $store.state.home[0].title }}</h5>
    <p class="card-text fs-3 animate__animated animate__fadeInLeftBig animate__slower ">{{ $store.state.home[0].intro }}</p>
    <p class="card-text fs-4 entry-summary animate__animated animate__fadeInUpBig animate__slower ">{{ $store.state.home[0].subintro }}</p>
    <p class="card-text">
      <button onclick="window.location.href='/contact'" class="box animate__animated animate__fadeInUpBig animate__slower">
    Contact Me!
</button>

    </p>
</div>
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
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
.card{
  background-color: transparent;
  color: #FFFFFF;
  top: 200px;
}

a {
  text-decoration: none;
  color: white;
}
h5 {
  color: #F1B24A;
  letter-spacing: 10px;

}
.box {
  width: 140px;
  height: auto;
  float: left;
  transition: .5s linear;
  position: relative;
  display: block;
  overflow: hidden;
  padding: 15px;
  text-align: center;
  margin: 0 5px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 400;
}

.box:before {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  height: 4px;
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
  height: 4px;
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transform: translateX(-100%);
}

.box:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.box:hover:before {
  border-color: #262626;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .3s;
}

.box:hover:after {
  border-color: #262626;
  height: 100%;
  transform: translateX(0);
  transition: .3s transform linear, .3s height linear .5s;
}

button {
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}
@media (max-width:400px) {
  .plus{
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .container{
    width: 151vw !important;
  }
img{
  width: 280px;
  height: auto;
  position: relative;
}
h5{
  font-size: 16px;
}
p{
  font-size: 10px;
  font-weight: light;
}
}

</style>