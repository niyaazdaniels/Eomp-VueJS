<template>
   <article class="resume-wrapper text-center position-relative">

<div class="resume-wrapper-inner mx-auto text-start bg-white shadow-lg">
  <header class="resume-header pt-4 pt-md-0">
    <div class="row">
      <div class="col-block col-md-auto resume-picture-holder text-center text-md-start">
          <img class="picture" :src="$store.state.home[0].image" alt="self-portrait">
      </div>
      <div class="col">
        <div class="row p-4 justify-content-center justify-content-md-between">
          <div class="primary-info col-auto">
            <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">{{ $store.state.about[0].name }}</h1>
            <div class="title mb-3"></div>
            <ul class="list-unstyled">
              <li class="mb-1"><a class="text-link text-black p-3" href="#"><i class="far fa-envelope fa-fw me-2" data-fa-transform="grow-1"> {{ $store.state.about[0].email }}</i></a></li>
              <li><a class="text-link text-black p-3" href="#"><i class="fas fa-mobile-alt fa-fw me-2" data-fa-transform="grow-1"> {{ $store.state.about[0].cell }}</i></a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  </header>
  <div class="resume-body p-5"> 
    <section class="resume-section summary-section mb-5">
      <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{{ $store.state.about[0].heading2 }}</h2>
      <div class="resume-section-content">
        <p class="mb-0 text-reset text-link">{{ $store.state.about[0].experience }}</p>
      </div>
    </section>
    <div class="row">
      <div class="col-lg-9">
        <section class="resume-section experience-section mb-5">
          <h2 class="resume-section-title text-uppercase pb-3 mb-3">{{ $store.state.experience[3].title }}</h2>
          <div class="resume-company-name ms-auto">{{ $store.state.experience[3].company }}</div>
          <div class="resume-section-content">
            <div class="resume-timeline position-relative">
              <article class="resume-timeline-item position-relative pb-5">
                <div class="resume-timeline-item-header mb-2">
                  <div class="d-flex flex-column flex-md-row">
                      <p class="resume-position-title mb-1">{{ $store.state.experience[3].description }}</p>
                  </div>
                  <div class="resume-position-time">{{ $store.state.experience[3].year }}</div>
                </div>
              </article>
              
              <article class="resume-timeline-item position-relative pb-5">
                
                <div class="resume-timeline-item-header mb-2">
                  <div class="d-flex flex-column flex-md-row">
                      <h3 class="resume-position-title font-weight-bold mb-1">{{ $store.state.experience[2].title }}</h3>
                      <div class="resume-company-name ms-auto">{{ $store.state.experience[2].company }}</div>
                  </div><!--//row-->
                  <div class="resume-position-time">{{ $store.state.experience[2].year }}</div>
                </div><!--//resume-timeline-item-header-->
                <div class="resume-timeline-item-desc">
                  <p>{{ $store.state.experience[0].description }}</p>
                </div>
              </article>
              
              <article class="resume-timeline-item position-relative pb-5">
                
                <div class="resume-timeline-item-header mb-2">
                  <div class="d-flex flex-column flex-md-row">
                      <h3 class="resume-position-title font-weight-bold mb-1">{{ $store.state.experience[1].title }}</h3>
                      <div class="resume-company-name ms-auto">{{ $store.state.experience[1].company }}</div>
                  </div>
                  <div class="resume-position-time">{{ $store.state.experience[1].year }}</div>
                </div>
                <div class="resume-timeline-item-desc">
                  <p>{{ $store.state.experience[1].description }}</p>
                </div>

              </article>
              
              <article class="resume-timeline-item position-relative">
                
                <div class="resume-timeline-item-header mb-2">
                  <div class="d-flex flex-column flex-md-row">
                      <h3 class="resume-position-title font-weight-bold mb-1">{{ $store.state.experience[0].title }}</h3>
                      <div class="resume-company-name ms-auto">{{ $store.state.experience[0].company }}</div>
                  </div>
                  <div class="resume-position-time">{{ $store.state.experience[0].year }}</div>
                </div>
                <div class="resume-timeline-item-desc">
                  <p>{{ $store.state.experience[0].description }}</p>
                </div>
                </article>
            </div>
          </div>
        </section>
      </div>
      <div class="col-lg-3">
        <section class="resume-section skills-section mb-5">
          <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{{ $store.state.about[0].subheading2 }}</h2>
          <div class="resume-section-content">
              <div class="resume-skill-item">
                <ul class="list-unstyled mb-4">
                  <li class="mb-2">
                      <div class="resume-skill-name">{{$store.state.skills[0].title}}</div>
                  </li>
                  <li class="mb-2">
                      <div class="resume-skill-name">{{$store.state.skills[1].title}}/</div>
                  </li>
                  <li class="mb-2">
                      <div class="resume-skill-name">{{$store.state.skills[2].title}}</div>
                  </li>
                  <li class="mb-2">
                      <div class="resume-skill-name">{{$store.state.skills[3].title}}</div>
                  </li>
                  <li class="mb-2">
                      <div class="resume-skill-name">{{$store.state.skills[4].title}}</div>
                  </li>
                </ul>
              </div>
             
          </div>
        </section>
        <section class="resume-section education-section mb-5">
          <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{{ $store.state.about[0].subheading3 }}</h2>
          <div class="resume-section-content">
            <ul class="list-unstyled">
              <li class="mb-2">
                  <div class="resume-degree font-weight-bold">{{ $store.state.education[0].description }}</div>
                  <div class="resume-degree-org">{{ $store.state.education[0].place }}</div>
                  <div class="resume-degree-time">{{ $store.state.education[0].year }}</div>
              </li>
              <li class="mb-2">
                  <div class="resume-degree font-weight-bold">{{ $store.state.education[1].description }}</div>
                  <div class="resume-degree-org">{{ $store.state.education[1].place }}</div>
                  <div class="resume-degree-time">{{ $store.state.education[1].year }}</div>
              </li>
            </ul>
          </div>
        </section>
      
        <section class="resume-section language-section mb-5">
          <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{{$store.state.about[0].subheading4}}</h2>
          <div class="resume-section-content">
            <ul class="list-unstyled resume-lang-list">
              <li class="mb-2"><span class="resume-lang-name font-weight-bold">{{$store.state.about[0].language1}}</span> </li>
              <li class="mb-2 align-middle"><span class="resume-lang-name font-weight-bold">{{$store.state.about[0].language2}}</span></li>
            </ul>
          </div>
        </section>
        <section class="resume-section interests-section mb-5">
          <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">{{$store.state.about[0].subheading1}}</h2>
          <div class="resume-section-content">
            <ul class="list-unstyled">
              <li class="mb-1">{{ $store.state.about[0].Hobbie1 }}</li>
              <li class="mb-1">{{ $store.state.about[0].Hobbie2 }}</li>
              <li class="mb-1">{{ $store.state.about[0].Hobbie3 }}</li>
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

}
</script>

<style>

</style>