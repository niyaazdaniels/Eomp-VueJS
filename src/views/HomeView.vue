<template>
  <div class="card container-fluid d-flex align-items-center border-0 overflow-hidden h-100">
  <img :src=$store.state.home[0].image class="card-img-top animate__animated animate__fadeInDownBig animate__slower" alt="me">
  <div class="card-body">
    <h5 class="card-title fs-1 fst-italic fw-semibold animate__animated animate__fadeInRightBig animate__slower text-uppercase ">{{ $store.state.home[0].title }}</h5>
    <p class="card-text fs-3 fw-light animate__animated animate__fadeInLeftBig animate__slower ">{{ $store.state.home[0].intro }}</p>
    <p class="card-text text-intro d-flex text-wrap fw-light entry-summary animate__animated animate__fadeInUpBig animate__slower ">{{ $store.state.home[0].subintro }}</p>
    <p class="card-text button d-flex justify-content-center ">
      <button onclick="window.location.href='/contact'" class="box animate__animated animate__fadeInUpBig animate__slower">
    Contact Me!
</button>

    </p>
</div>
</div>
<Footer/>
</template>
<script>

import Footer from '../components/FooterView.vue'
export default {
  components: {
    Footer
  },
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
  max-width: 350px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0px;
}
#btn{
  padding: 1px;
}
#btn:hover{
  color: #F1B24A;
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px #F1B24A;
  outline: none;
}
.card{
  background-color: transparent;
  color: #FFFFFF;
  top: 120px;
}

a {
  text-decoration: none;
  color: white;
}
h5 {
  color: #F1B24A;
  letter-spacing: 10px;

}
.text-intro {
  font-size: 12px;
  max-width: 632px;
  justify-content: center;
  display: flex;
  
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

button {
  color: white;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
}

@media (max-width: 1280px) {
  img {
    height: 380px;
    width: auto;
  }
}
@media(max-width: 1024px){
  img {
    height: 350px;
    width: auto;
  }
}
@media (max-width: 853px){
  img {
    height: 400px;
    width: auto;
  }
}
@media (max-width: 540px) {
  img {
    height: 400px;
    width: auto ;
  }
}
@media (max-width:400px) {
img{
  width: 250px;
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
@media (max-width: 375px) {
  img {
    height: 280px;
    width: auto;
  }
  h5 {
    font-size: 12px;
  }
  p {
    font-size: 12px;
  }
}



</style>