import { defineStore } from 'pinia';

export interface User {
  id: number;
  name: string;
  slug: string;
  avatar: string;
}

export const availableUsers = [
  {
    id: 1,
    name: 'Jane',
    slug: 'jane',
    avatar: 'https://i.pravatar.cc/400?u=jane',
  },
  {
    id: 2,
    name: 'Alice',
    slug: 'alice',
    avatar: 'https://i.pravatar.cc/400?u=alice',
  },
  {
    id: 3,
    name: 'Bob',
    slug: 'bob',
    avatar: 'https://i.pravatar.cc/400?u=bob',
  },
  {
    id: 4,
    name: 'Charlie',
    slug: 'charlie',
    avatar: 'https://i.pravatar.cc/400?u=charlie',
  },
  {
    id: 5,
    name: 'David',
    slug: 'david',
    avatar: 'https://i.pravatar.cc/400?u=david',
  },
  {
    id: 6,
    name: 'Eve',
    slug: 'eve',
    avatar: 'https://i.pravatar.cc/400?u=eve',
  },
  {
    id: 7,
    name: 'Frank',
    slug: 'frank',
    avatar: 'https://i.pravatar.cc/400?u=frank',
  },
  {
    id: 8,
    name: 'Grace',
    slug: 'grace',
    avatar: 'https://i.pravatar.cc/400?u=grace',
  },
  {
    id: 9,
    name: 'Hank',
    slug: 'hank',
    avatar: 'https://i.pravatar.cc/400?u=hank',
  },
] as User[];

export const useUserStore = defineStore({
  id: 'user',
  // tabSync: true,
  // persist: true,
  state: () => ({
    availableUsers: availableUsers.slice(),
    selectedUserId: null as number | null,
  }),
  getters: {
    selectedUser(state) {
      return state.availableUsers.find(
        (user) => user.id === state.selectedUserId,
      );
    },
  },
  actions: {
    selectUser(id: number) {
      this.selectedUserId = id;
    },
  },
});
