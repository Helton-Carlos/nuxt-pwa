<script setup lang="ts">
import { products } from '~/utilities/product';
import { highlights } from '~/utilities/highlights';
import { breakpoints } from '~/utilities/useBreakpoints';
import Card from '~/component/Card.vue';
import InputNuxt from '~/component/InputNuxt.vue';
import CircuProduct from '~/component/CircuProduct.vue';

interface IProduct {
  id: number;
  title: string;
  categories: string;
  point: number;
  description: string;
  image: string;
}

const { xs, sm } = breakpoints();
const text = ref<string>('');

function onProduct(categories: string) {
  navigateTo(`/products/${categories}`);
}

function buy(message: IProduct) {
  navigateTo(
    `/buy/${message.categories + '-' + message.title + '-' + message.id}`,
  );
}

function search() {
  let title = products.map((item) => item.title);

  return title.filter((item) =>
    item.toLowerCase().includes(text.value.toLowerCase()),
  );
}

const getProducts = computed<any>(() => {
  return search().map((searchs: string) => {
    return products.find((name: any) => name.title === searchs);
  });
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
        @update:model-value="search"
      />

      <div
        class="flex gap-4 justify-between"
        :class="xs || sm ? 'w-full' : 'w-2/4 mx-auto'"
      >
        <CircuProduct
          v-for="highlight in highlights"
          :key="highlight.nameTypes"
          :image="highlight.image"
          :nameTypes="highlight.nameTypes"
          @onProduct="onProduct(highlight.nameTypes)"
        />
      </div>

      <p class="font-bold text-base">Produtos</p>

      <div class="flex justify-between flex-wrap gap-5">
        <Card
          v-for="(message, title) in getProducts"
          :key="title"
          :image="message.image"
          :point="message.point"
          :title="message.title"
          :description="message.description"
          :categories="message.categories"
          @buy="buy(message)"
        />
      </div>
    </div>
  </div>
</template>
