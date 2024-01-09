<template>
<div class="container">
    <h2>Journey So Far</h2>
    <ul class="cards">
        <li class="card">
            <div>
                <h3 class="card-title">{{$store.state.testimonial[0].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[0].surname}}</h3>
                <div class="image"></div>
                <div class="card-content">
                    <p>{{$store.state.testimonial[0].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
              <h3 class="card-title">{{$store.state.testimonial[1].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[1].surname}}</h3>
                <div class="card-content">
                    <p>{{$store.state.testimonial[1].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
              <h3 class="card-title">{{$store.state.testimonial[2].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[2].surname}}</h3>
                <div class="card-content">
                    <p>{{$store.state.testimonial[2].testimonial}}</p>
                </div>
            </div>
        </li>
        <li class="card">
            <div>
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
              <h3 class="card-title">{{$store.state.testimonial[4].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[4].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[4].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
              <h3 class="card-title">{{$store.state.testimonial[5].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[5].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[5].testimonial}}</p> 
                </div>
            </div>
        </li>
        <li class="card">
            <div>
              <h3 class="card-title">{{$store.state.testimonial[6].name}}</h3>
                <h3 class="card-title">{{$store.state.testimonial[6].surname}}</h3>
                <div class="card-content">
                  <p>{{$store.state.testimonial[6].testimonial}}</p> 
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
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
    top: 100px;
    position: relative;
}
h2 {
    font-size: 32px;
    margin-bottom: 1em;
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
    background: var(--white);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
    scroll-snap-align: start;
    transition: all 0.2s;
    font-size: 12px;
}
.card .card-title {
    font-size: 1.1rem;
}

.card .card-content {
    margin: 10px 0;
    max-width: 90%;
    margin-left: 15px;
}
.cards::-webkit-scrollbar {
    height: 12px;
    background: #221D23;
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