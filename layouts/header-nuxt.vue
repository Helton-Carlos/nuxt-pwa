<script lang="ts" setup>
import sidebar from './sidebar.vue';
import { breakpoints } from '~/utilities/useBreakpoints';

const { xs, sm, lg } = breakpoints();

const router = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'recurse', path: '/recurse' },
  { name: 'login', path: '/login' },
];

const menu = ref<boolean>(false);

function openMenu() {
  menu.value = !menu.value;
}
</script>

<template>
  <div>
    <header class="bg-white w-full">
      <div class="container flex justify-between">
        <nuxt-link to="/">
          <div class="flex items-center gap-2">
            <img src="../assets/icons/logo.png" alt="logo" />
            <h1 class="font-semibold text-base text-primary">NuxtVoucher</h1>
          </div>
        </nuxt-link>

        <div class="flex items-center gap-2">
          <ul v-if="lg" class="flex items-center gap-8 text-center">
            <li
              v-for="(routes, index) in router"
              :key="index"
              class="flex font-semibold capitalize gap-2 text-gray hover:text-primary"
            >
              <nuxt-link :to="routes.path">{{ routes.name }}</nuxt-link>
            </li>
          </ul>

          <div class="flex items-center gap-2">
            <nuxt-link to="/login">
              <img src="../assets/icons/user.svg" alt="user" />
            </nuxt-link>
            <span>|</span>
          </div>

          <div class="flex items-center gap-2">
            <img src="../assets/icons/card.svg" alt="card" />
          </div>

          <img
            v-if="xs || sm"
            src="../assets/icons/menu.png"
            alt="menu"
            @click="openMenu"
          />
        </div>
      </div>
    </header>

    <div>
      <sidebar v-if="(xs || sm) && menu" @click="openMenu" />
    </div>
  </div>
</template>
