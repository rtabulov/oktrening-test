<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <div
    id="app"
    class="flex min-h-screen flex-col bg-slate-950 font-sans text-slate-50"
  >
    <TheHeader />
    <main class="grow">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>
