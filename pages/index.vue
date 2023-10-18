<script lang="ts" setup>
const router = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'login', path: '/login' },
];
</script>
<template>
  <ul class="flex gap-2">
    <li v-for="(routes, index) in router" :key="index">
      <nuxt-link :to="routes.path"> {{ routes.name }}</nuxt-link>
    </li>
  </ul>
</template>
