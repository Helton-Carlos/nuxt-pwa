<script setup lang="ts">
import { useVibrate } from '@vueuse/core';
import { useUserStore } from '../store/index';

const { vibrate, stop } = useVibrate({ pattern: [300, 100, 300] });

const { signIn } = useUserStore();

const user = ref({
  name: '',
  password: '',
  email: '',
});

async function login() {
  const { name, password, email } = user.value;
  if (name && password && email) {
    await signIn(name, password, email);

    const user = [{ name, password, email }];

    const db = window.openDatabase(
      'users-3',
      '1.0',
      'users-3',
      1 * 1024 * 1024,
    );

    db.transaction(
      (transaction: {
        executeSql: (user: string, users: string[] | undefined) => void;
      }) => {
        transaction.executeSql(
          'CREATE TABLE user (name TEXT,email TEXT, password TEXT)',
          [],
        );
        for (let g of user) {
          transaction.executeSql(
            'INSERT INTO user (name,email, password) VALUES (?, ?, ?)',
            [g.name, g.email, g.password],
          );
        }
      },
      (erro: any) => {
        vibrate();
        console.error(erro);
      },
    );
  }

  setTimeout(() => {
    stop();
  }, 2000);
}
</script>

<template>
  <div>
    <div class="title">
      <h2 class="font-semibold text-xl">Login</h2>
    </div>
    <div class="flex flex-col">
      <label for="uname"><b>Username</b></label>
      <input
        v-model="user.name"
        type="text"
        class="input-base"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="email"><b>E-mail</b></label>
      <input
        v-model="user.email"
        type="email"
        class="input-base"
        placeholder="Enter Username"
        name="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input-base"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click.prevent="login" class="btn">Login</button>
    </div>
  </div>
</template>
