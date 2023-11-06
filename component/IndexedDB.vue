<script setup lang="ts">
import { openDB } from 'idb';

const user = ref({
  name: '',
  password: '',
  email: '',
});

async function Deus() {
  const db = await openDB('Articles', 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('articles', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('date', 'date');
    },
  });

  await db.add('articles', {
    title: 'Article 1',
    date: new Date('2019-01-01'),
    body: '…',
  });

  {
    const tx = db.transaction('articles', 'readwrite');
    await Promise.all([
      tx.store.add({
        title: 'Article 2',
        date: new Date('2019-01-01'),
        body: '…',
      }),
      tx.store.add({
        title: 'Article 3',
        date: new Date('2019-01-02'),
        body: '…',
      }),
      tx.done,
    ]);
  }

  console.log(await db.getAllFromIndex('articles', 'date'));

  {
    const tx = db.transaction('articles', 'readwrite');
    const index = tx.store.index('date');

    for await (const cursor of index.iterate(new Date('2019-01-01'))) {
      const article = { ...cursor.value };
      article.body += ' And, happy new year!';
      cursor.update(article);
    }

    await tx.done;
  }
}
</script>

<template>
  <div>
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

      <button @click.prevent="Deus" class="btn">Login</button>
    </div>
  </div>
</template>
