<template>
   <article class="resume-wrapper text-center position-relative overflow-hidden">
<div class="resume-wrapper-inner mx-auto text-start">
  <header class="resume-header pt-4 pt-md-0">
    <div class="row">
      <div class="col-block col-md-auto resume-picture-holder text-center text-md-start">
        <div class= "picture px-5 animated__animated animate__bounceIn ">
          <img :src=$store.state.home[0].image>
        </div>
      </div>

      <div class="col">
        <div class="row p-4 justify-content-center justify-content-md-between">
          <div class="primary-info col-auto">
            <h1 class="title mb-3 animate__animated animate__backInDown animate__slower text-uppercase fw-bold">{{ $store.state.about[0].name }}</h1>
            <div class="title mb-3 animate__animated animate__fadeInRightBig animate__slower text-uppercase fw-semibold">{{ $store.state.about[0].title }}</div>
            <ul class="list-unstyled">
              <li><div class="text-link text-black animate__animated animate__fadeInRightBig animate__slow"><i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-6"></i>{{ $store.state.about[0].email }}</div></li>
              <li><div class="text-link text-black animate__animated animate__fadeInRightBig animate__slow"><i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-6"> </i>{{ $store.state.about[0].cell }}
                <li><div class="text-link text-black animate__animated animate__fadeInRightBig animate__slower"><i class="fa-solid fa-location-dot" data-fa-transform="grow-6"></i> {{ $store.state.about[0].suburb }}</div></li>
                <li><div class="text-link text-black animate__animated animate__fadeInRightBig animate__slower"><i class="fa-regular fa-calendar" data-fa-transform="grow-6"></i> {{ $store.state.about[0].dob }}</div></li>
              </div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="resume-body p-5"> 
    <section class="resume-section summary-section mb-5">
      <h2 class="resume-section-title pb-3 mb-3 animate__animated animate__fadeInLeftBig animate__slower fw-semibold">{{ $store.state.about[0].heading2 }}</h2>
      <div class="resume-section-content">
        <p class="mb-0 text-reset text-link animate__animated animate__fadeInLeftBig animate__slower">{{ $store.state.about[0].experience }}</p>
      </div>
    </section>

    <div class="row">
      <div class="col-lg-9">
        <section class="resume-section experience-section mb-5" v-for="exp in $store.state.experience" :key="exp">
          <h2 class="resume-section-title pb-3 mb-3 animate__animated animate__fadeInLeftBig animate__slower fw-semibold">{{ exp.title }}</h2>
          <div class="resume-position-time pb-2 animate__animated animate__fadeInLeftBig animate__slower fst-italic">{{ exp.year }}</div>
          <div class="resume-company-name fw-light ms-auto animate__animated animate__backInDown animate__slower fw-bold">{{ exp.company }}</div>
          <div class="resume-section-content">
            <div class="resume-timeline position-relative">
              <article class="resume-timeline-item position-relative pb-5">
                <div class="resume-timeline-item-header mb-2">
                  <div class="d-flex flex-column flex-md-row">
                      <p class="resume-position mb-1 animate__animated animate__fadeInLeftBig animate__slower">{{ exp.description }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <div class="col-lg-3">
        <section class="resume-section skills-section mb-5">
          <h2 class="resume-section-title fw-semibold pb-3 mb-3 animate__animated animate__fadeInRightBig animate__slower ">{{ $store.state.about[0].subheading2 }}</h2>
          <div class="resume-section-content">
              <div class="resume-skill-item">
                <ul class="list-unstyled mb-4">
                  <li class="mb-2" v-for="skill in $store.state.skills" :key="skill.title">
                      <div class="resume-skill-name animate__animated animate__fadeInRightBig animate__slower">{{skill.title}}</div>
                  </li>
                </ul>
              </div>
          </div>

        </section>
        <section class="resume-section education-section mb-5">
          <h2 class="resume-section-title fw-semibold pb-3 mb-3 animate__animated animate__fadeInRightBig animate__slower">{{ $store.state.about[0].subheading3 }}</h2>
          <div class="resume-section-content" v-for=" educate in $store.state.education" :key="educate">
            <ul class="list-unstyled">
              <li class="mb-2">
                  <div class="resume-degree fw-light animate__animated animate__fadeInRightBig animate__slower">{{ educate.description }}</div>
                  <div class="resume-degree-org fw-semibold animate__animated animate__fadeInRightBig animate__slower">{{ educate.place }}</div>
                  <div class="resume-degree-time fst-italic animate__animated animate__fadeInRightBig animate__slower">{{ educate.year }}</div>
              </li>
            </ul>
          </div>
        </section>
      
        <section class="resume-section language-section mb-5">
          <h2 class="resume-section-title fw-semibold pb-3 mb-3 animate__animated animate__fadeInRightBig animate__slower">{{$store.state.about[0].subheading4}}</h2>
          <div class="resume-section-content" >
            <ul class="list-unstyled resume-lang-list">
              <li class="mb-2 animate__animated animate__fadeInRightBig animate__slower"><span class="resume-lang-name">{{$store.state.about[0].language1}}</span> </li>
              <li class="mb-2 align-middle animate__animated animate__fadeInRightBig animate__slower"><span class="resume-lang-name">{{$store.state.about[0].language2}}</span></li>
            </ul>
          </div>
        </section>
        
        <section class="resume-section interests-section mb-5">
          <h2 class="resume-section-title fw-semibold pb-3 mb-3 animate__animated animate__fadeInRightBig animate__slower">{{$store.state.about[0].subheading1}}</h2>
          <div class="resume-section-content " v-for="hobbie in $store.state.about" :key="hobbie">
            <ul class="list-unstyled">
              <li class="mb-1 animate__animated animate__fadeInRightBig animate__slower">{{ hobbie.Hobbie1 }}</li>
               <li class="mb-1 animate__animated animate__fadeInRightBig animate__slower">{{ hobbie.Hobbie2 }}</li>
              <li class="mb-1 animate__animated animate__fadeInRightBig animate__slower">{{ hobbie.Hobbie3 }}</li> 
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
</article> 
</template>

<script>
export default {
components: {
}
}
</script>

<style scoped>
.resume-wrapper{
  top: 80px;
}
img{
  height: 250px;
}
i {
  padding-right: 5px;
}
.resume-section-title{
 color:  #F1B24A;
 border-bottom: 3px solid #F1B24A;
}
.resume-position-title{
 color:  #F1B24A;
 border-bottom: 3px solid #F1B24A;
 font-weight: 300;

}
.resume-section-content{
  color: #FFFFFF;
  font-weight: 300;
}
.resume-wrapper{
font-family: 'Montserrat', sans-serif;
}
</style>