<template>
<div class="container">
    <h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold">Testimonials</h2>
    <div class="cards" >
        <div class="card overflow-hidden" v-for="testimonial in $store.state.testimonials" :key="testimonial">
            <div>
                <div class="image animate__animated animate__fadeInUpBig animate__slower "><img :src=testimonial.image></div>   
                <h3 class="card-title animate__animated animate__fadeInUpBig animate__slow">{{testimonial.name}}</h3>
                <h3 class="card-title animate__animated animate__fadeInUpBig animate__slow">{{testimonial.surname}}</h3>
                <div class="card-content animate__animated animate__fadeInUpBig ">
                    <p>{{testimonial.testimonial}}</p>
                </div>
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
.container {
    max-width: 1600px;
    padding: 0px 30px;
    margin: 0 auto;
    top: 100px;
    position: relative;
}
h2 {
    font-size: 24px;
    margin-bottom: 1em;
    text-decoration-line: underline;
    color: #F1b24a;
}
.cards {
    display: flex;
    padding: 20px 0px;
    list-style: none;
    overflow-x: scroll;
    -ms-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
}
.card {
    display: flex;
    flex-direction: column;
    flex: 0 0 100%;
    padding: 10px;
    color: #FFFFFF;
    background: #333333;
    border-radius: 5px;
    transition: all 0.2s;
    border: none;
}
.card:hover{
    transform: scale(1.1);
    transition: all .4s ease-in-out;
}

.card .card-title {
    font-size: 1.1rem;
    text-transform: uppercase;
}

.card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
    font-size: 12px;
}

img{
    height: 90px;
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