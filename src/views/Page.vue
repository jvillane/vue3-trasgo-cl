<template>
  <h1 v-if="page !== undefined">{{ page.title }}</h1>
  <div v-if="page !== undefined" v-html="page.content"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CosmicService } from '@/service/Cosmic.service';
import { Page } from '@/service/Cosmic.model';

interface Data {
  page?: Page;
}

export default defineComponent({
  name: 'Page',
  props: ['slug'],
  data(): Data {
    return {
      page: undefined,
    };
  },
  mounted() {
    this.loadPage();
  },
  watch: {
    slug() {
      this.loadPage();
    },
  },
  methods: {
    loadPage() {
      CosmicService.getObject<Page>(this.$props.slug)
        .then((page) => {
          this.$data.page = page;
        });
    },
  },
});
</script>

<style scoped>

</style>
