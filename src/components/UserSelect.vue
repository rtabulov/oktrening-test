<script lang="ts">
import { useUserStore } from '@/store/user';
import { mapStores } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserSelect',
  computed: {
    ...mapStores(useUserStore),
  },
});
</script>

<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-5">
    <article
      v-for="user in userStore.availableUsers"
      :key="user.id"
      class="group relative overflow-hidden rounded-full border-4 border-slate-800 leading-none transition-colors hover:border-slate-500"
    >
      <button @click="userStore.selectUser(user.id)">
        <div class="">
          <img
            :src="user.avatar"
            alt="avatar"
            width="400"
            class="scale-105 transition group-hover:scale-100"
          />
        </div>
        <header
          class="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/85 text-2xl transition-colors sm:bg-transparent sm:text-transparent sm:group-hover:bg-slate-950/85 sm:group-hover:text-inherit"
        >
          {{ user.name }}
        </header>
      </button>
    </article>
  </div>
</template>
