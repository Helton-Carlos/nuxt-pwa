<script lang="ts" setup>
const openMenu = ref<boolean>(false);

const router = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'login', path: '/login' },
];
</script>

<template>
  <div>
    <header class="bg-white w-full">
      <div class="container flex justify-between">
        <div class="flex items-center gap-2">
          <img src="../assets/icons/logo.png" alt="logo" />
          <h1 class="font-semibold text-base text-primary">NuxtVoucher</h1>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <img src="../assets/icons/notification.png" alt="notification" />
        <img src="../assets/icons/menu.png" alt="menu" />
      </div>

      <ul class="p-2 gap-2" v-if="openMenu">
        <li
          v-for="(routes, index) in router"
          :key="index"
          class="font-semibold"
        >
          <nuxt-link :to="routes.path">{{ routes.name }}</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>
