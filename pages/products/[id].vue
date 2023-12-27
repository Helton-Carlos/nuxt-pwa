<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const valor = route.params.id
</script>

<template>
  <div>
    <h1 class="text-lg font-semibold text-gray capitalize py-1">
      {{ valor }}
    </h1>
  </div>
</template>
