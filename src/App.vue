<template>
  <Navbar/>
   <!--
     <img src="assets/logo.png" alt="..." width="500px" height="500px">
   <div id="nav">
    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  -->
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  
}
</script>

<style>
@import "assets/css/main.css";
</style>
