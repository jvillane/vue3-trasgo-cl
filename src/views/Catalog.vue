<template>
  <h1>Catálogo {{ type }}</h1>
  <div v-if="category !== undefined" v-html="category.content"/>
  <el-divider/>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
            v-for="item in items" :key="item._id">
      <el-card :body-style="{ padding: '0px' }">
        <img alt="" :src="item.metadata.images[0].image.imgix_url + '?w=400'" class="image"/>
        <div style="padding: 14px;">
          <span>{{ item.title }}</span>
          <div class="bottom clearfix">
            <div class="item-content" v-html="item.content"/>
            <el-button type="text" class="button">Detalles</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Category, Item } from '@/service/Cosmic.model';
import { CosmicService } from '@/service/Cosmic.service';

interface Data {
  category?: Category;
  items: Item[];
}

export default defineComponent({
  name: 'Catalog',
  props: ['type'],
  data(): Data {
    return {
      category: undefined,
      items: [],
    };
  },
  mounted() {
    this.loadItems();
  },
  watch: {
    type() {
      this.loadItems();
    },
  },
  methods: {
    loadItems() {
      CosmicService.getObject<Category>(this.$props.type)
        .then((category) => {
          this.$data.category = category;
          if (category) {
            CosmicService.getObjects<Item>({ type: 'items', metadata: { category: category._id } })
              .then((items) => {
                this.$data.items = items;
              });
          }
        });
    },
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}

.item-content {
  font-size: 13px;
  color: #999;
}
</style>
