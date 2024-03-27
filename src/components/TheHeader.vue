<script lang="ts">
import UiLink from './ui/UiLink.vue';

export default {
  name: 'TheHeader',
  components: {
    UiLink,
  },
};
</script>

<template>
  <header class="container py-4">
    <div class="flex items-center justify-between gap-4">
      <UiLink class="text-2xl !text-white" to="/">
        Chat app for Oktrening
      </UiLink>
      <nav class="flex gap-4">
        <UiLink to="/">Home</UiLink>
        <UiLink to="/about">About</UiLink>
        <UiLink href="https://github.com/rtabulov/oktrening-test">
          Source code
        </UiLink>
        <UiLink href="https://t.me/rtabulov">Contact me</UiLink>
      </nav>
    </div>
  </header>
</template>
