<template>
  <h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold overflow-hidden">Peer Reviews</h2>
    <div class="container-fluid row-cols-5 justify-content-center">
      <!-- <div class="cards">
        <div class="card overflow-hidden" id="testimonial-card" v-for="testimonial in $store.state.testimonials" :key="testimonial">
          <div>
             <div class="image animate__animated animate__fadeInUpBig animate__slower overflow-hidden"><img :src=testimonial.image></div>   
                <h3 class="card-title fs-5 animate__animated animate__fadeInUpBig animate__slower text-start">{{testimonial.name}} {{testimonial.surname}}</h3>
                  <h3 class="card-title fs-6 animate__animated animate__fadeInUpBig animate__slower text-start"></h3>
                    <p class="fw-light animate__animated animate__fadeInUpBig animate__slower text-start">{{testimonial.testimonial}}</p> -->
                    <div class="card" v-for="testimonial in $store.state.testimonials" :key="testimonial">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg> -->
                     <div class="image animate__animated animate__fadeInUpBig animate__slower overflow-hidden card-img-overlay card-img-bottom"><img :src=testimonial.image></div>   
                     <div class="card__content">
                     <p class="card__title">{{testimonial.name}} {{testimonial.surname}}</p>
                     <p class="card__description">{{testimonial.testimonial}}</p>
                     </div>
                    </div>

                </div>
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>

export default {
}
</script>

<style scoped>
h2 {
    font-size: 30px;
    margin-bottom: 1em;
    margin-top: 1em;
    color: #F1b24a;
    letter-spacing: 5px;
}
 .container-fluid {
    min-width: 100vw;
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
}

    /*
.cards {
    display: flex;
    padding: 15px 0px;
    list-style: none;
    overflow-x: scroll;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    overflow-y: hidden ;
    height: 65vh;
    width: 95vw;
}
#testimonial-card {
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 20px;
    color: #FFFFFF;
    background: linear-gradient(30deg, #4D774E, #164A41);
    transition: all 0.6s;
    border: none;
    margin-bottom: 15px;

}
#testimonial-card:hover{
    transition: all .4s ease-in-out;
    transform: scale(.9);
    box-shadow: 0px 0px 12px white;
}

#testimonial-card .card-title {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: #F1b24a;
    margin-top: 1rem;
}

#testimonial-card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
    font-size: 12px;   
}

img{
    height: 150px;
} */

.card {
  min-width: 280px;
  height: 230px;
  background-color: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 20px;
  box-shadow: 0 0 5px   #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

}

.card img {
  height: 150px;
  box-shadow: 0px 2px 10px  rgb(117, 116, 116);
  width: auto;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #d3d3d3;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
}

.card__title {
  margin: 0;
  font-size: 18px;
  color: #333;
  font-weight: 700;
}

.card:hover img {
  scale: 0;
}

.card__description {
  margin: 20px 0 0;
  font-size: 12px;
  color: #777;
  line-height: 1.4;
}
</style>