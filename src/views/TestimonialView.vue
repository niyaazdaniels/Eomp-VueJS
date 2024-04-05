<template>
  <div class="container-fluid d-flex justify-content-center align-items-center h-50 flex-column overflow-hidden">
    <h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold overflow-hidden">Peer Reviews</h2>
      <div class="cards">
        <div class="card overflow-hidden" id="testimonial-card" v-for="testimonial in $store.state.testimonials" :key="testimonial">
          <div>
             <div class="image animate__animated animate__fadeInUpBig animate__slower overflow-hidden"><img :src=testimonial.image></div>   
                <h3 class="card-title fs-5 animate__animated animate__fadeInUpBig animate__slower text-start">{{testimonial.name}} {{testimonial.surname}}</h3>
                  <h3 class="card-title fs-6 animate__animated animate__fadeInUpBig animate__slower text-start"></h3>
                    <p class="fw-light animate__animated animate__fadeInUpBig animate__slower text-start">{{testimonial.testimonial}}</p>
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
.container-fluid {
    max-width: 100vw;
    height: 100vh;
    padding: 0px 20px;
    margin: 0 auto;
    top: 100px;
    position: relative;
}
h2 {
    font-size: 30px;
    margin-bottom: 1em;
    margin-top: 1em;
    color: #F1b24a;
    letter-spacing: 5px;
}
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
    background: #174c25;
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
}
.cards::-webkit-scrollbar {
    height: 12px;
    border-radius: 30px;
    color: #000;
}
.cards::-webkit-scrollbar {
  width: 12px;
}

.cards::-webkit-scrollbar-thumb {
  background-color: #174c25;
}

.cards::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}
@media (max-width: 360px) {
    p {
        font-size: 12px;
    }
    .heading {
        font-size: 18px;
    }
}

@media (min-width: 500px) {
    #testimonial-card {
        flex-basis: calc(50% - 10px);
        font-size: 12px;
    }

    #testimonial-card:not(:last-child) {
        margin-right: 20px;
    }
}

@media (min-width: 700px) {
    p {
        font-size: 10px;
    }
    #testimonial-card {
        flex-basis: calc(calc(100% / 3) - 20px);
    }

    #testimonial-card:not(:last-child) {
        margin-right: 30px;
    }
}

@media (min-width: 1100px) {
    p {
        font-size: 12px;
    }
    #testimonial-card {
        flex-basis: calc(25% - 30px);
    }

    #testimonial-card:not(:last-child) {
        margin-right: 40px;
    }
}
</style>