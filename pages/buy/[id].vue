<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { products } from '../../utilities/product';

const route = useRoute();
const nameRoute = route.params;

const getId = computed(() => {
  const { id } = nameRoute;
  const partes = id.split(/[^0-9]+/);
  const filterNumeros = partes.filter((part) => part !== '');
  const idProduct = filterNumeros.length > 0 ? filterNumeros[0] : null;
  return idProduct;
});

const getProduct = computed(() => {
  return products.filter((item) => item.id === Number(getId.value));
});
</script>

<template>
  <div v-for="product in getProduct">
    <h1 class="text-lg font-semibold text-gray capitalize py-4">
      {{ product.title }}
    </h1>
  </div>
</template>
