<script lang="ts">
import { useUserStore } from '@/store/user';
import { toRefs } from 'vue';

export default {
  name: 'UserSelect',
  setup() {
    const store = useUserStore();
    const { availableUsers, selectedUser } = toRefs(store);

    return {
      selectUser: store.selectUser,
      availableUsers,
      selectedUser,
    };
  },
};
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <article
      v-for="user in availableUsers"
      :key="user.id"
      class="group relative leading-none"
    >
      <button @click="selectUser(user.id)">
        <div class="overflow-hidden rounded-md">
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
