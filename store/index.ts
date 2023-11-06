import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      console.log('1');

      const res = await fetch('https://localhost:3000/user');

      const user = await res.json();
      this.user = user;
    },
    async signUp(name, email, password) {
      console.log('2');
      const res = await fetch('https://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
    async signIn(name, email, password) {
      console.log('3');
      const res = await fetch('https://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
  },
});
