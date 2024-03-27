<script lang="ts">
export default {
  name: 'UiLink',
  components: {},
};
</script>

<template>
  <RouterLink
    v-if="$attrs.to"
    v-bind="$attrs"
    v-on="$listeners"
    exact-active-class="!text-white"
    class="text-slate-400 transition-colors hover:text-slate-100"
  >
    <slot />
  </RouterLink>
  <a
    v-else
    v-bind="$attrs"
    v-on="$listeners"
    class="text-slate-400 transition-colors hover:text-slate-100"
  >
    <slot />
  </a>
</template>
