<template>
  <section class="ftco-section ">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mt-5 mb-5">
					<h2 class="heading-section animate__animated animate__fadeInDown animate__slow text-uppercase fw-semibold text-decoration-underline">Contact Me</h2>
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
			<div class="icon d-flex align-items-center justify-content-center"></div></div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
		<div class="icon d-flex align-items-center justify-content-center">
				<span class="fa fa-phone animate__animated animate__fadeInUp"></span>
		</div>
			<div class="text animate__animated animate__fadeInUp animate__slow">
         <p>{{ $store.state.about[0].cell }}</p></div></div>
									</div>
									<div class="col-md-4">
										<div class="dbox w-100 text-center">
		<div class="icon d-flex align-items-center justify-content-center">
      <i class="far fa-envelope fa-fw me-2 animate__animated animate__fadeInUp" data-fa-transform="grow-6"></i>
	</div>
		<div class="text animate__animated animate__fadeInUp animate__slow">
  <p> {{ $store.state.about[0].email }}</p></div></div>
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
                          
													<input type="text" class="form-control animate__animated animate__fadeInLeft animate__slow" name="name" id="name" placeholder="Your name" required>
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group pt-1">
													<input type="email" class="form-control animate__animated animate__fadeInRight animate__slow" name="email" id="email" placeholder="Your email" required>
												</div>
											</div>
											<div class="col-md-12 pt-1">
												<div class="form-group">
													<input type="text" class="form-control animate__animated animate__fadeInLeft animate__slower" name="subject" id="subject" placeholder="What is the subject?" required>
												</div>
											</div>
											<div class="col-md-12 pt-1">
												<div class="form-group">
													<textarea name="message" class="form-control animate__animated animate__fadeInRight animate__slower" id="message" cols="30" rows="8" placeholder="Your Message" required></textarea>
												</div>
											</div>
											<div class="col-md-12 pt-1">
												<div class="form-group">
													<input type="submit" value="SUBMIT" class="button fw-bold text-uppercase animate__animated animate__fadeInUp">
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

}
</script>

<style scoped>
.container{
  top: 20px;
  position: relative;
}
input:hover{
	box-shadow: 0px 0px 15px black;
}
textarea:hover{
	box-shadow: 0px 0px 15px black;
}
.button {
  color: #FFFFFF;
  background: #4D774E;
}
.button:hover {
  color: #F1b24a;
  background: #164A24;
}
.heading-section{
	color: #F1b24a;
}

</style>