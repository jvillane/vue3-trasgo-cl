<template>
  <Layout/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from './components/layout/Layout.vue';

export default defineComponent({
  name: 'App',
  components: { Layout },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
