<script lang="ts" setup>
import sidebar from './sidebar.vue';
const menu = ref<boolean>(false);

function openMenu() {
  menu.value = !menu.value;
}
</script>

<template>
  <div>
    <header class="bg-white w-full">
      <div class="container flex justify-between">
        <div class="flex items-center gap-2">
          <img src="../assets/icons/logo.png" alt="logo" />
          <h1 class="font-semibold text-base text-primary">NuxtVoucher</h1>
        </div>

        <div class="flex items-center gap-2">
          <img src="../assets/icons/notification.png" alt="notification" />
          <img src="../assets/icons/menu.png" alt="menu" @click="openMenu" />
        </div>
      </div>
    </header>

    <div>
      <sidebar v-if="menu" @click="openMenu" />
    </div>
  </div>
</template>
