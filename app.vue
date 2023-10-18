<script lang="ts" setup>
import Header from './layouts/header-nuxt.vue';
</script>

<template>
  <div>
    <VitePwaManifest />
    <Header />
    <div class="container">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>
