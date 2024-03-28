<script lang="ts">
import { defineComponent } from 'vue';
import BaseLink from '@/components/BaseLink.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    BaseLink,
  },
});
</script>

<template>
  <div class="container pt-8">
    <h1 class="text-3xl font-bold">About this project</h1>
    <p class="mt-8">
      Built with&nbsp;
      <BaseLink href="https://vitejs.dev/">Vite</BaseLink>&nbsp;
      <BaseLink href="https://v2.vuejs.org/">Vue 2.7</BaseLink>&nbsp;
      <BaseLink href="https://v3.router.vuejs.org/">Vue router</BaseLink>&nbsp;
      <BaseLink href="https://pinia.vuejs.org/">Pinia</BaseLink>&nbsp;
      <BaseLink href="https://tailwindcss.com/">Tailwind</BaseLink>
    </p>
  </div>
</template>
