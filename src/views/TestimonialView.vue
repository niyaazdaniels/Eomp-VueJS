<template>
  <div class="container-fluid d-flex justify-content-center align-items-center h-50 flex-column overflow-hidden">
    <h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold overflow-hidden">Testimonials</h2>
      <div class="cards">
        <div class="card overflow-hidden" v-for="testimonial in $store.state.testimonials" :key="testimonial">
          <div>
             <div class="image animate__animated animate__fadeInUpBig animate__slower overflow-hidden "><img :src=testimonial.image></div>   
                <h3 class="card-title fs-5 animate__animated animate__fadeInUpBig animate__slow">{{testimonial.name}} {{testimonial.surname}}</h3>
                  <h3 class="card-title fs-5 animate__animated animate__fadeInUpBig animate__slow"></h3>
                    <p>{{testimonial.testimonial}}</p>
                </div>
            </div>
        </div>
    </div>
<Footer/>
</template>

<script>
import Footer from '../components/FooterView.vue'

export default {
components: { Footer }
}
</script>

<style scoped>
.container-fluid {
    max-width: 100vw;
    height: 100vh;
    padding: 0px 20px;
    margin: 0 auto;
    top: 100px;
    position: relative;
}
h2 {
    font-size: 35px;
    margin-bottom: 1em;
    margin-top: 2em;
    color: #F1b24a;
    letter-spacing: 5px;
}
.cards {
    display: flex;
    padding: 20px 0px;
    list-style: none;
    overflow-x: scroll;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    overflow-y: hidden ;
    height: 50vh;
    width: 95vw;
}
.card {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 10px;
    color: #FFFFFF;
    background: #174c25;
    transition: all 0.6s;
    border: none;
}
.card:hover{
    transition: all .4s ease-in-out;
    transform: scale(.9);
    box-shadow: 0px 0px 12px white;
}

.card .card-title {
    font-size: 1.1rem;
    text-transform: uppercase;
    color: #F1b24a;
    margin-top: 2rem;
}

.card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
    font-size: 12px;   
}

img{
    height: 180px;
}
.cards::-webkit-scrollbar {
    height: 12px;
    border-radius: 30px;
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