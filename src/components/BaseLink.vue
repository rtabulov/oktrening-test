<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiLink',
  components: {},
});
</script>

<template>
  <RouterLink
    v-if="$attrs.to"
    v-bind="$attrs"
    exact-active-class="!text-white"
    class="text-slate-400 transition-colors hover:text-slate-100"
    v-on="$listeners"
  >
    <slot />
  </RouterLink>
  <a
    v-else
    v-bind="$attrs"
    class="text-slate-400 transition-colors hover:text-slate-100"
    target="_blank"
    rel="noopener noreferrer"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>
