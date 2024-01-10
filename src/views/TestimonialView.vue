<template>
<div class="container">
    <h2 class="heading animate__animated animate__fadeInDownBig text-uppercase fw-semibold">What others have to say about my journey so far</h2>
    <ul class="cards">
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[0].image></div>   
                <h3 class="card-title">{{$store.state.testimonial[0].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[0].surname}}</h3>
                <div class="card-content">
                    <p>{{$store.state.testimonial[0].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[1].image></div>
              <h3 class="card-title">{{$store.state.testimonial[1].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[1].surname}}</h3>
                <div class="card-content">
                    <p>{{$store.state.testimonial[1].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[2].image></div>
              <h3 class="card-title">{{$store.state.testimonial[2].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[2].surname}}</h3>
                <div class="card-content">
                    <p>{{$store.state.testimonial[2].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[3].image></div>
              <h3 class="card-title">{{$store.state.testimonial[3].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[3].surname}}</h3>
                <div class="card-content">
                 <p>
                  {{$store.state.testimonial[3].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[4].image></div>
              <h3 class="card-title">{{$store.state.testimonial[4].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[4].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[4].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[5].image></div>
              <h3 class="card-title">{{$store.state.testimonial[5].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[5].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[5].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[6].image></div>
              <h3 class="card-title">{{$store.state.testimonial[6].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[6].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[6].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
                <div class="image"><img :src=$store.state.testimonial[7].image></div>
              <h3 class="card-title">{{$store.state.testimonial[7].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[7].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[7].testimonial}}</p> 
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel {
  position:relative;
  top: 150px
}
.container {
    max-width: auto;
    padding: 0px 30px;
    margin: 0 auto;
    top: 80px;
    position: relative;
}
h2 {
    font-size: 24px;
    margin-bottom: 1em;
    text-decoration-line: underline;
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
    border-radius: 12px;
    scroll-snap-align: start;
    transition: all 0.2s;
    border: none;
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
.cards::-webkit-scrollbar {
    height: 12px;
    background: #221D23;
    border-radius: 30px;
}
img{
    height: 80px;
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