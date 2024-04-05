<template>
  <section class="ftco-section">
    <div class="container-fluid overflow-hidden d-flex justify-content-center align-items-center flex-column">
      <div class="w-50 row justify-content-center">
        <div class="col-md-6 text-center mt-5 mb-5">
          <h2 class="heading-section animate__animated animate__fadeInDown animate__slow text-uppercase fw-semibold">Contact Me</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-12">
          <div class="wrapper">
            <div class="row justify-content-center">
              <div class="col-lg-8 mb-2">
                <div class="row">
                  <div class="col-md-2">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center"></div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-phone animate__animated animate__fadeInUp"></span>
                      </div>
                      <div class="text animate__animated animate__fadeInUp animate__slow">
                        <p>{{ $store.state.about[0].cell }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="dbox w-100 text-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="far fa-envelope fa-fw me-2 animate__animated animate__fadeInUp" data-fa-transform="grow-6"></i>
                      </div>
                      <div class="text animate__animated animate__fadeInUp animate__slow">
                        <p>{{ $store.state.about[0].email }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="contact-wrap">
                  <h3 class="mb-4 text-center"></h3>
                  <div id="form-message-warning" class="w-100 text-center"></div>
                  <form action="https://formspree.io/f/xgegvwql" method="POST" id="contactForm" name="contactForm" class="contactForm" required>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input type="text" class="form-control animate__animated animate__fadeInLeft animate__slow" name="name" id="name" placeholder="Please enter your name" autocomplete="off" required>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group pt-1">
                          <input type="email" class="form-control animate__animated animate__fadeInRight animate__slow" name="email" id="email" placeholder="Please enter your email address" autocomplete="off" required>
                        </div>
                      </div>
                      <div class="col-md-12 pt-1">
                        <div class="form-group">
                          <input type="text" class="form-control animate__animated animate__fadeInLeft animate__slower" name="subject" id="subject" placeholder="What is the subject?" autocomplete="off" required>
                        </div>
                      </div>
                      <div class="col-md-12 pt-1">
                        <div class="form-group">
                          <textarea name="message" class="form-control animate__animated animate__fadeInRight animate__slower" id="message" cols="30" rows="8" placeholder="Please insert your message" autocomplete="off" required></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 pt-1">
                        <div class="form-group">
                          <!-- <input type="submit" value="SUBMIT" class="button fw-bold text-uppercase animate__animated animate__fadeInUp"> -->
                          <button class="animate__animated animate__fadeInUp animate__slower">
                            <div class="svg-wrapper-1 " >
                              <div class="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                      <path fill="none" d="M0 0h24v24H0z"></path>
                                      <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <span>Send</span>
                              </button>
                          <div class="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
  components: {
  }

}
</script>

<style scoped>
.container-fluid {
  top: 100px;
  position: relative;
}

input:hover {
  box-shadow: 0px 0px 10px #F1b24a;
}
input {
  margin-bottom: 5px ;
  border-radius: 0px;

}

textarea:hover {
  box-shadow: 0px 0px 10px #F1b24a;
}
textarea {
  border-radius: 0px;

}

.button {
  color: #FFFFFF;
  background: #4D774E;
}

.button:hover {
  color: #F1b24a;
  background: #164A24;
}

.heading-section {
  color: #F1b24a;
}

input {
  background: #f5f3f3;
}

textarea {
  background: #f5f3f3;
}
.ftco-section {
  min-height: 100vh;
}
h2 {
  font-size: 35px;
  letter-spacing: 5px;
}
.text {
  letter-spacing: 5px;
  margin-top: 2px;
}
.icon {
  font-size: 1.4rem;
}
button {
  font-family: inherit;
  font-size: 20px;
  background: #164A24;
  color: white;
  padding: 0.2em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  margin-top: 10px ;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(1.2em) rotate(45deg) scale(1.1);
  
}

button:hover span {
  transform: translateX(5em);
  box-shadow: 0px 0px 12px #F1b24a;
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}
@media (min-width: 280px) and (max-width: 1245px) {
  p {
    font-size: 10px;
  }
  .heading-section {
    font-size: 20px;
  }
}
@media (max-width: 618px) {
  .container-fluid{
    top: 50;
    position: relative;
  }
}


</style>
