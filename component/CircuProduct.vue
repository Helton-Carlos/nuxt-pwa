<script setup lang="ts">
defineProps<{
  image: string;
  nameTypes: string;
}>();

defineEmits<(e: 'onProduct') => void>();
</script>

<template>
  <div 
    class="flex items-center justify-center h-screen" 
    @click="$emit('onProduct')"
  >
    <div class="text-center">
      <img
        :src="image"
        :alt="nameTypes"
        class="mx-auto mb-4 rounded-full w-24 h-24 cursor-pointer"
      />
      
      <p class="text-lg font-semibold text-gray capitalize py-1">
        {{ nameTypes }}
      </p>
    </div>
  </div>
</template>
