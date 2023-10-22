<script setup lang="ts">
const mainImage = ref<string>('../assets/icons/main.png');
</script>

<template>
  <div class="w-full">
    <img :src="mainImage" alt="main" />
  </div>
</template>
