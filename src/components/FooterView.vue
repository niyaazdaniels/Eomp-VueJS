<template>
  <div class="container-footer">
  <footer class="d-flex justify-content-center align-items-center ">
    <div class="d-flex align-items-center bottom-0 ">
      <span class="mb-md-0 text-center" style="color: white;">&copy; Niyaaz Daniels | <span>{{ currentYear }}</span> | All rights reserved</span>
    </div>
  </footer>
</div>
</template>

<script>
export default {
data(){
  return {
    currentYear: new Date().getFullYear()
  }
}
}
</script>

<style scoped>
footer{
    position: absolute !important;
    bottom: 0 !important; 
    text-transform: uppercase;
    width: 100%;

}
span{
  color: #F1b24a;
}
</style>