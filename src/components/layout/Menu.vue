<template>
  <div class="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">Inicio</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>Catálogo</template>
        <transition-group name="list">
          <el-menu-item v-for="category in categories" :key="category.slug">
            <router-link :to="'/catalogo/' + category.slug">{{ category.title }}</router-link>
          </el-menu-item>
        </transition-group>
      </el-submenu>
      <el-menu-item index="3">
        <router-link to="/contacto">Contacto</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CosmicService } from '@/service/Cosmic.service';
import { Category } from '@/service/Cosmic.model';

interface Data {
  categories: Category[];
}

export default defineComponent({
  name: 'Menu',
  data(): Data {
    return {
      categories: [],
    };
  },
  mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      CosmicService.getObjects<Category>({ type: 'categories', props: 'title,slug' })
        .then((categories) => {
          this.$data.categories = categories;
        });
    },
  },
});
</script>

<style scoped>

</style>
