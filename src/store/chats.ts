import { defineStore } from 'pinia';
import { useUserStore, type User } from './user';
import { nanoid } from 'nanoid';

export interface Chat extends User {
  lastMessage?: Message;
}

export interface Message {
  id: string;
  from: number;
  to: number;
  text: string;
  createdAt: Date;
}

export interface MessagePayload {
  to: number;
  text: string;
}

const messages = [
  // Messages from user 1 to others
  {
    from: 1,
    to: 2,
    text: 'Hey, how are you?',
    id: 'msg_1_2',
    createdAt: new Date('2024-03-01T10:20:30Z'),
  },
  {
    from: 1,
    to: 3,
    text: 'Did you finish the task?',
    id: 'msg_1_3',
    createdAt: new Date('2024-03-02T11:30:40Z'),
  },
  {
    from: 1,
    to: 4,
    text: "Let's meet tomorrow.",
    id: 'msg_1_4',
    createdAt: new Date('2024-03-03T12:40:50Z'),
  },
  {
    from: 1,
    to: 5,
    text: 'I found a bug in the code.',
    id: 'msg_1_5',
    createdAt: new Date('2024-03-04T13:50:00Z'),
  },
  {
    from: 1,
    to: 6,
    text: 'Can you review my PR?',
    id: 'msg_1_6',
    createdAt: new Date('2024-03-05T14:00:10Z'),
  },
  {
    from: 1,
    to: 7,
    text: 'What is the status of the project?',
    id: 'msg_1_7',
    createdAt: new Date('2024-03-06T15:10:20Z'),
  },
  {
    from: 1,
    to: 8,
    text: 'Can we have a meeting tomorrow?',
    id: 'msg_1_8',
    createdAt: new Date('2024-03-07T16:20:30Z'),
  },
  {
    from: 1,
    to: 9,
    text: 'I need your help with a task.',
    id: 'msg_1_9',
    createdAt: new Date('2024-03-08T17:30:40Z'),
  },
  {
    from: 1,
    to: 10,
    text: 'Good job on the presentation!',
    id: 'msg_1_10',
    createdAt: new Date('2024-03-09T18:40:50Z'),
  },

  // Messages from user 2 to others
  {
    from: 2,
    to: 1,
    text: 'I am good, thanks!',
    id: 'msg_2_1',
    createdAt: new Date('2024-03-10T19:50:00Z'),
  },
  {
    from: 2,
    to: 3,
    text: 'Can you help me with this?',
    id: 'msg_2_3',
    createdAt: new Date('2024-03-11T20:00:10Z'),
  },
  {
    from: 2,
    to: 4,
    text: 'What is the status of the project?',
    id: 'msg_2_4',
    createdAt: new Date('2024-03-12T21:10:20Z'),
  },
  {
    from: 2,
    to: 5,
    text: "Let's meet tomorrow.",
    id: 'msg_2_5',
    createdAt: new Date('2024-03-13T22:20:30Z'),
  },
  {
    from: 2,
    to: 6,
    text: 'Did you finish the task?',
    id: 'msg_2_6',
    createdAt: new Date('2024-03-14T23:30:40Z'),
  },
  {
    from: 2,
    to: 7,
    text: 'I found a bug in the code.',
    id: 'msg_2_7',
    createdAt: new Date('2024-03-15T00:40:50Z'),
  },
  {
    from: 2,
    to: 8,
    text: 'Can you review my PR?',
    id: 'msg_2_8',
    createdAt: new Date('2024-03-16T01:50:00Z'),
  },
  {
    from: 2,
    to: 9,
    text: 'What is the status of the project?',
    id: 'msg_2_9',
    createdAt: new Date('2024-03-17T02:00:10Z'),
  },
  {
    from: 2,
    to: 10,
    text: 'Can we have a meeting tomorrow?',
    id: 'msg_2_10',
    createdAt: new Date('2024-03-18T03:10:20Z'),
  },
] as Message[];

export const useChatStore = defineStore({
  id: 'chats',
  persist: true,
  tabSync: ['messages'],

  state: () => ({
    messages,
  }),

  getters: {
    chats(): Chat[] {
      const userStore = useUserStore();
      const reversedMessages = this.messages.slice().reverse();
      return userStore.availableUsers
        .filter((user) => user.id !== userStore.selectedUserId)
        .map((user) => {
          return {
            ...user,
            lastMessage: reversedMessages.find(
              (message) =>
                (message.from === userStore.selectedUserId &&
                  message.to === user.id) ||
                (message.to === userStore.selectedUserId &&
                  message.from === user.id),
            ),
          };
        })
        .sort((c1, c2) => {
          return (
            (c2.lastMessage?.createdAt.valueOf() || 0) -
            (c1.lastMessage?.createdAt.valueOf() || 0)
          );
        });
    },
  },

  actions: {
    sendMessage({ text, to }: MessagePayload) {
      const userStore = useUserStore();
      if (!userStore.selectedUserId) {
        throw new Error('Cannot create message: User not logged in');
      }

      this.messages.push({
        id: nanoid(),
        text,
        to,
        from: userStore.selectedUserId,
        createdAt: new Date(),
      });
    },
  },
});
