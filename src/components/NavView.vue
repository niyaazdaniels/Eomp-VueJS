<template>
  <nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">N Daniels</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                     </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                            <div class="offcanvas-body">
                                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <router-link to="/">Home</router-link> 
                                         <router-link to="/about">About</router-link> 
                                     <router-link to="/resume">Resume</router-link> 
                                <router-link to="/project">Projects</router-link> 
                            <router-link to="/testimonial">Testimonials</router-link> 
                     <router-link to="/contact">Contact</router-link>
                 </ul>
            </div>
        </div>
    </div>
 </nav>
</template>

<script>
export default {

}
</script>

<style>
nav a{
    text-decoration: none;
    color: Black;
    padding-left: 10px;
    margin-right: 0px;
}
nav{
    letter-spacing: 1px;
}
</style>