<template>
  <footer>&copy; Copyright | Niyaaz Daniels | <span>{{ currentYear }}</span> | All rights reserved</footer>
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

<style>
footer{
    bottom: 0px;
    width: 100%;
    text-align: center;
    position: fixed;
    padding: 5px;
}
</style>