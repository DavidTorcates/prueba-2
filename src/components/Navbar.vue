<template>
  <nav class="navbar navbar-expand-lg" id="nav">
    <router-link class="navbar-brand" to="/"><img id = "logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png"></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/Home">Inicio</router-link> |
        <router-link class="nav-item nav-link" to="/Rules">Reglas y Políticas</router-link>|
        <router-link class="nav-item nav-link" to="/Info">Informacion de Juegos</router-link> |
        <router-link class="nav-item nav-link" to="/Contact">Contacto</router-link>|
        <router-link class="nav-item nav-link" to="/About">Sobre Nosotros</router-link>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
}
</script>

