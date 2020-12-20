<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">Inicio</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>Catálogo</template>
        <el-menu-item>
          <router-link to="/catalogo/muebles">Muebles</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link to="/catalogo/madera">Madera</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/contacto">Contacto</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  }
});
</script>

<style scoped>

</style>
