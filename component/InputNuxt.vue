<script setup lang="ts">
defineProps<{
  label?: string;
  modelValue: string | number;
  type: string;
  placeholder: string;
  name: string;
}>();
</script>

<template>
  <div>
    <label>
      {{ label }}
    </label>
    <input
      class="input-base"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      required
    />
  </div>
</template>
