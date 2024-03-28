<script lang="ts">
import { defineComponent } from 'vue';
import BaseLink from './BaseLink.vue';

export default defineComponent({
  name: 'TheFooter',
  components: {
    BaseLink,
  },
});
</script>

<template>
  <footer class="container py-4">
    <p class="text-end">
      Built with <br />
      <BaseLink href="https://vitejs.dev/">Vite</BaseLink>&nbsp;
      <BaseLink href="https://v2.vuejs.org/">Vue 2.7</BaseLink>&nbsp;
      <BaseLink href="https://v3.router.vuejs.org/">Vue router</BaseLink>&nbsp;
      <BaseLink href="https://pinia.vuejs.org/">Pinia</BaseLink>&nbsp;
      <BaseLink href="https://tailwindcss.com/">Tailwind</BaseLink>
    </p>
  </footer>
</template>
