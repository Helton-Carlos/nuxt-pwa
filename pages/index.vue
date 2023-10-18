<script setup lang="ts">
import { reactive } from 'vue';
import { useBattery } from '@vueuse/core';

const battery = reactive(useBattery());
const text = JSON.stringify(battery);
</script>

<template>
  <pre lang="yaml">{{ text }}</pre>
</template>
