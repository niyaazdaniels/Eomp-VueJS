<template>
  <section class="about-section">
  <div class="container-fluid d-flex justify-content-center align-items-center flex-column ">
    <h1 class="text-heading fw-semibold text-uppercase mb-5">About Me</h1>
  <div class="container">
    <div class="card text-center animate__animated animate__bounceIn">
      <div class="row g-0">
        <div class="col-lg-4">
          <img :src="$store.state.home[0].image" class="img-fluid rounded-start">
        </div>
        <div class="col-lg-8">
          <div class="card-body overflow-hidden">
            <h1 class="card-title display-4 animate__animated animate__fadeInRightBig animate__slow text-uppercase fw-bold">{{ $store.state.about[0].name }}</h1>
            <p class="card-text animate__animated animate__fadeInRightBig animate__slower">{{ $store.state.about[0].description }}</p>
            <p class="card-text">
     <a href="https://github.com/niyaazdaniels" target="_blank"><i class="fa-brands fa-github animate__animated animate__rotateIn animate__slower"></i></a>
    <a href="https://twitter.com/daniels_niyaaz" target="_blank"><i class="fa-brands fa-twitter animate__animated animate__rotateIn animate__slower "></i></a>
  <a href="https://www.linkedin.com/in/niyaaz-daniels-6694a7129/" target="_blank"><i class="fa-brands fa-linkedin animate__animated animate__rotateIn animate__slower "></i></a>
  </p>
  <a href="https://drive.google.com/uc?export=download&id=1VhXma-9eHWEU0Y9tS-DScq7nccc9UCsZ" class="button animate__animated animate__slideInUp animate__slower" target="_blank">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Download Resume</span>
    </span>
</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

</template>

<script>
export default {
  
}
</script>

<style scoped>
.about-section{
  min-height: 100vh;
}

.card{

text-align: center;
padding: 20px;
background: #164A41;
color: #FFFFFF;
border: none;
border-radius: 0px;
box-shadow: 15px 12px 12px #164A41;
}
a {
  text-decoration: none;
}

p {
  font-size: 1rem;
}
.text-heading{
  color: #F1B24A;
  letter-spacing: 8px;
}
.container-fluid{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
}
i {
color: black;
padding: 10px;
border-radius: 25%;
margin-right: 10px;
margin-top: 10px ;
font-size: 1.3rem;

}
i:hover{
  transition: all .5s ease-in-out;
  box-shadow: 0px 0px 10px black;
  background: #F1B24A;
}
  .button {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all .15s ease;
}
.button_lg {
  position: relative;
  display: block;
  padding: 10px 20px;
  color: #fff;
  background-color: #0f1923;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #0f1923;
}

.button_lg::after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  background-color: #0f1923;
  transition: all .2s ease;
}

.button_sl {
  display: block;
  position: absolute;
  top: 0;
  bottom: -1px;
  left: -8px;
  width: 0;
  background: #F1B24A;
  color: #000;
  transform: skew(-15deg);
  transition: all 1s ease;
}

.button_text {
  position: relative;
}

.button:hover {
  color: #0f1923;
}

.button:hover .button_sl {
  width: calc(100% + 15px);
}

.button:hover .button_lg::after {
  background-color: #fff;
}

@media (max-width: 2560px){
  .container{
    height: 35vh;
  }
}
@media (max-width: 768px){
  .container{
    height: 30vh;
  }
}
</style>