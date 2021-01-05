<template>
  <div class="container">
    <Form/>
  </div>
  <router-view />
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "Home",
  components: {
    Form,
  },
};
</script>
