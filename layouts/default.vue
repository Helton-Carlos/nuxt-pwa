<script lang="ts" setup>
import { onMounted } from 'vue';
const authenticated = true;

onMounted(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.ts')
      .then((registration) => {
        console.log(
          'Service Worker registrado com escopo:',
          registration.scope,
        );
      })
      .catch((error) => {
        console.error('Falha no registro do Service Worker:', error);
      });
  }
});
</script>
<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li v-if="!authenticated" class="loginBtn" style="float: right">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="mainContent">
      <slot />
    </div>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>
