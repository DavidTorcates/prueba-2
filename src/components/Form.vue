<template>
  <div class="row">
    <div class="col-md-12">
      <p>¿Tienes alguna consulta sobre algún partido?</p>
      <p>Escríbenos y te contactaremos a la brevedad</p>
      <form action="#" method="post">
        <div class="row">
          <div class="col-4">
            <label for="nombre">Nombre:</label>
          </div>
          <div class="col-8">
            <input type="text" name="nombre" id="nombre" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <label for="email">E-Mail:</label>
          </div>
          <div class="col-8">
            <input type="text" name="email" id="email" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <label for="consulta">Consulta:</label>
          </div>
          <div class="col-8">
            <input type="text" name="consulta" id="consulta" />
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {

  },
};
</script>