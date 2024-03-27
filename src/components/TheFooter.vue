<script lang="ts">
import UiLink from './ui/UiLink.vue';

export default {
  name: 'TheFooter',
  components: {
    UiLink,
  },
};
</script>

<template>
  <footer class="container py-4">
    <p class="text-end">
      Built with <br />
      <UiLink href="https://vitejs.dev/">Vite</UiLink>&nbsp;
      <UiLink href="https://v2.vuejs.org/">Vue 2.7</UiLink>&nbsp;
      <UiLink href="https://v3.router.vuejs.org/">Vue router</UiLink>&nbsp;
      <UiLink href="https://pinia.vuejs.org/">Pinia</UiLink>&nbsp;
      <UiLink href="https://tailwindcss.com/">Tailwind</UiLink>
    </p>
  </footer>
</template>
