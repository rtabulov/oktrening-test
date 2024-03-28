<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<template>
  <div
    id="app"
    class="flex max-h-screen min-h-screen flex-col bg-slate-950 pb-14 font-sans text-slate-50"
  >
    <TheHeader />
    <main class="flex max-h-full min-h-0 grow">
      <RouterView />
    </main>
  </div>
</template>
