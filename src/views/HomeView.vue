<template>
  <div class="area" >
    <ul class="circles">
      <li></li>
        <li></li>
          <li></li>
            <li></li>
              <li></li>
                <li></li>
                  <li></li>
                    <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  <div class="card container-fluid d-flex align-items-center justify-content-center border-0 overflow-hidden">
                <img :src=$store.state.home[0].image class="card-img-top animate__animated animate__fadeInDownBig animate__slower" alt="me">
             <div class="card-body">
             <h5 class="card-title fs-1 fst-italic fw-semibold animate__animated animate__fadeInRightBig animate__slower text-uppercase content">{{ $store.state.home[0].title }}</h5>
             <p class="card-text fs-3 fw-light animate__animated animate__fadeInLeftBig animate__slower ">{{ $store.state.home[0].intro }}</p>
             <p class="card-text text-intro d-flex text-wrap fw-light entry-summary animate__animated animate__fadeInUpBig animate__slower ">{{ $store.state.home[0].subintro }}</p>
             <p class="card-text button d-flex justify-content-center">
              <button onclick="window.location.href='/contact'" class="box animate__animated animate__fadeInUpBig animate__slower">
               Contact Me!
              </button>
            </p>
          </div>
        </div>
      </div >
</template>
<script>

export default {
  components: {
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

.context {
    width: 100%;
    position: absolute;
}

.context h1{
    text-align: center;
    color: #fff;
    font-size: 50px;
}
.area{
    width: 100vw;
    height:100vh;
}

.circles{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

.card {
  position: relative;
}

.card h5 {
  color: #fff;
  position: relative;
  transform: translate(-50%, -50%);
}

.card h5:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #F1B24A;
}

.card h5:nth-child(2) {
  color: #F1B24A;
  animation: wonder 4s ease-in-out infinite;
}

@keyframes wonder {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}

img {
  max-width: 300px;
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
  padding: 30px 0px;
  margin: 20px 0px;
  top: 50px;
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

h1 {
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

p {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

p:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

p:nth-child(2) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

p:nth-child(3) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

p:nth-child(4) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}



@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
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
    height: 350px;
    width: auto ;
  }
  .card-text {
    font-size: 12px;
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