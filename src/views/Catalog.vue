<template>
  <h1>Catálogo {{ type }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Category, Item } from '@/service/Cosmic.model';
import { CosmicService } from '@/service/Cosmic.service';

interface Data {
  items: Item[];
}

export default defineComponent({
  name: 'Catalog',
  props: ['type'],
  data(): Data {
    return {
      items: [],
    };
  },
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      CosmicService.getObject<Category>(this.$props.type)
        .then((category) => {
          console.log(1, category);
          if (category) {
            CosmicService.getObjects<Item>({ type: 'items', metadata: { category: category._id } })
              .then((items) => {
                console.log(2, items);
                this.$data.items = items;
              });
          }
        });
    },
  },
});
</script>

<style scoped>

</style>
