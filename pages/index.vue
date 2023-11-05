<script setup lang="ts">
import { getProducts } from '~/utilities/product';
import Card from '~/component/Card.vue';
</script>

<template>
  <div>
    <img class="w-full py-2" src="~/assets/icons/main.png" alt="main" />

    <div class="flex flex-col gap-4">
      <p class="font-bold text-base">Produtos</p>
      <Card
        v-for="(message, title) in getProducts"
        :key="title"
        :image="message.image"
        :point="message.point"
        :title="message.title"
        :description="message.description"
      />
    </div>
  </div>
</template>
