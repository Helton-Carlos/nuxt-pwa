<script setup lang="ts">
import { computed } from 'vue';
import { products } from '../../utilities/product';
import { useRoute } from 'vue-router';
import Card from '../../component/Card.vue'

const route = useRoute();
const nameRoute = route.params.id;

const getProducts = computed(()=>{
  return products.filter((item)=> item.categories === nameRoute);
})
</script>

<template>
  <div>
    <h1 class="text-lg font-semibold text-gray capitalize py-4">
      {{ nameRoute }}
    </h1>

    <div class="flex flex-col gap-4" >
      <Card
        v-if="getProducts.length"
        v-for="(message, title) in getProducts"
        :key="title"
        :image="message.image"
        :point="message.point"
        :title="message.title"
        :description="message.description"
        :categories="message.categories"
      />

      <p 
        v-else 
        class="font-extralight underline"
      >Sem itens nessa categoria.</p>
    </div>
  </div>
</template>
