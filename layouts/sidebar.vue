<script lang="ts" setup>
const router = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'login', path: '/login' },
];
</script>
<template>
  <div class="absolute top-0 z-10 w-[330px] h-full px-1 bg-white shadow">
    <div class="container">
      <div class="flex items-center gap-2">
        <img src="../assets/icons/logo.png" alt="logo" />
        <h1 class="font-semibold text-base text-primary">NuxtVoucher</h1>
      </div>

      <ul class="text-center mt-7">
        <li
          v-for="(routes, index) in router"
          :key="index"
          class="font-semibold capitalize p-2 gap-4 text-gray hover:text-primary"
        >
          <nuxt-link :to="routes.path">{{ routes.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
