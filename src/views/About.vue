<template>
  <Navbar />
  <Imagen texto = "The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership."/>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Imagen from "@/components/Imagen.vue";
export default {
  name: "About",
  components: {
    Navbar,
    Imagen
  },
};
</script>