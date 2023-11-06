<script lang="ts" setup>
import { useVibrate } from '@vueuse/core';

const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] });

const user = ref({
  name: '',
  password: '',
  email: '',
});

function login() {
  const { name, password, email } = user.value;
  if (name && password && email) {
    const user = [{ name, password, email }];

    const db = window.openDatabase(
      'users-2',
      '1.0',
      'users-2',
      1 * 1024 * 1024,
    );

    db.transaction(
      (transaction) => {
        transaction.executeSql(
          'CREATE TABLE user (name TEXT,email TEXT, password TEXT)',
        );
        for (let g of user) {
          transaction.executeSql(
            'INSERT INTO user (name,email, password) VALUES (?, ?, ?)',
            [g.name, g.email, g.password],
          );
        }
      },
      (erro) => {
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
        class="m-2 bg-white border-none p-2"
        placeholder="Enter Username"
        name="uname"
        required
      />

      <label for="email"><b>E-mail</b></label>
      <input
        v-model="user.email"
        type="email"
        class="m-2 bg-white border-none p-2"
        placeholder="Enter Username"
        name="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="m-2 bg-white border-none p-2"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button @click.prevent="login" class="btn">Login</button>
    </div>
  </div>
</template>
