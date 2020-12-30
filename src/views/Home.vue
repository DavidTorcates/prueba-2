<template>
  <div id="nav">
    <router-link to="/"><img id = "logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png"></router-link>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/About">About</router-link> 
  </div>
  <div class="home">
     <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenidos a nuestra app en Vue.js"/>
  </div>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
