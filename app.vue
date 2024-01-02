<script lang="ts" setup>
import Header from './layouts/header-nuxt.vue';
import Footer from './layouts/footer-nuxt.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <VitePwaManifest />
    <Header />
    <div class="container">
      <NuxtPage class="flex-1" />
    </div>
    <Footer />
  </div>
</template>
