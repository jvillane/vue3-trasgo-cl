<template>
  <Menu/>
  <router-view />
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from "@/components/layout/Menu.vue";
import Footer from "@/components/layout/Footer.vue";

export default defineComponent({
  name: 'Layout',
  components: { Menu, Footer }
});
</script>

<style scoped>

</style>
