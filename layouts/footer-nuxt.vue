<script lang="ts" setup>
import { breakpoints } from '~/utilities/useBreakpoints';

const { xs, sm, lg } = breakpoints();

const router = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'recurse', path: '/recurse' },
  { name: 'login', path: '/login' },
];
</script>

<template>
  <footer class="bg-primary w-full py-2 mt-8">
    <div class="container flex justify-between">
      <nuxt-link to="/">
        <div class="flex items-center gap-2">
          <img src="../assets/icons/logo.png" alt="logo" />
          <h1 class="font-semibold text-base text-white">NuxtVoucher</h1>
        </div>
      </nuxt-link>

      <div class="flex items-center gap-2">
        <ul class="flex flex-col items-center gap-1 text-center">
          <li
            v-for="(routes, index) in router"
            :key="index"
            class="flex font-medium capitalize gap-2 text-white hover:text-gray"
          >
            <nuxt-link :to="routes.path">{{ routes.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <hr class="text-white px-4 my-4" />
    <div
      class="flex text-center px-4 text-white"
      :class="xs || sm ? 'flex-col' : 'justify-between'"
    >
      <p>© Todos os direitos reservados.</p>
      <p>
        Desenvolvido por
        <a
          href="https://www.linkedin.com/in/helton-brito-856ba516b/"
          class="text-gray hover:text-gray-dark"
          >Helton Brito</a
        >
      </p>
    </div>
  </footer>
</template>
