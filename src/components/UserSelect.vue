<script lang="ts">
import { useUserStore } from '@/store/user';
import { mapStores } from 'pinia';

export default {
  name: 'UserSelect',
  computed: {
    ...mapStores(useUserStore),
  },
};
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
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
          class="absolute inset-0 z-10 flex items-center justify-center text-2xl text-transparent transition-colors group-hover:bg-slate-950/85 group-hover:text-inherit"
        >
          {{ user.name }}
        </header>
      </button>
    </article>
  </div>
</template>
