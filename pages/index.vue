<script setup lang="ts">
import { products } from '~/utilities/product';
import { breakpoints } from '~/utilities/useBreakpoints';
import Card from '~/component/Card.vue';
import InputNuxt from '~/component/InputNuxt.vue';

const { xs, sm } = breakpoints();

const text = ref<string>('');

function getProducts() {
  alert(text.value);
}

const search = computed(() => {
  return text.value ? true : false;
});
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
      v-else
      class="w-full py-2"
      src="~/assets/icons/main-desktop.png"
      alt="main"
    />

    <div class="flex flex-col gap-4">
      <InputNuxt
        v-model:modelValue="text"
        type="text"
        placeholder="O que você procura? ex: produtos"
        name="input-name"
      />

      <p class="font-bold text-base">Produtos</p>

      <div class="flex justify-between flex-wrap gap-5">
        <Card
          v-for="(message, title) in products"
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
