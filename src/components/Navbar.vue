<template>
  <div id="nav">
    <router-link to="/"><img id = "logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png"></router-link>
    <router-link to="/Home">Inicio</router-link> |
    <router-link to="/Rules">Reglas y Políticas</router-link>|
    <router-link to="/Info">Informacion de Juegos</router-link> |
    <router-link to="/Contact">Contacto</router-link>|
    <router-link to="/About">Sobre Nosotros</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

