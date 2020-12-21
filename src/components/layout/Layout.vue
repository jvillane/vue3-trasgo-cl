<template>
  <Menu/>
  <Body/>
  <Footer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from '@/components/layout/Menu.vue';
import Footer from '@/components/layout/Footer.vue';
import Body from '@/components/layout/Body.vue';

export default defineComponent({
  name: 'Layout',
  components: { Menu, Body, Footer },
});
</script>

<style scoped>

</style>
