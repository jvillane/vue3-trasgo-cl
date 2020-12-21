<template>
  <div class="body">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Body',
});
</script>

<style scoped>
.body {
  min-height: calc(100vh - 150px);
}
</style>
