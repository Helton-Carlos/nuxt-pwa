<script setup lang="ts">
import { getProducts } from '~/utilities/product';
import { breakpoints } from '~/utilities/useBreakpoints';
import Card from '~/component/Card.vue';

const { xs, sm, lg } = breakpoints();
</script>

<template>
  <div>
    <img
      v-if="xs || sm"
      class="w-full py-2"
      src="~/assets/icons/main.png"
      alt="main"
    />

    <img
      v-if="lg"
      class="w-full py-2"
      src="~/assets/icons/main-desktop.png"
      alt="main"
    />

    <div class="flex flex-col gap-4">
      <p class="font-bold text-base">Produtos</p>

      <div class="flex justify-between flex-wrap gap-5">
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
  </div>
</template>
