<script setup lang="ts">
defineProps<{
  label?: string;
  modelValue: string | number;
  type: string;
  placeholder: string;
  name: string;
}>();

const emit = defineEmits<(e: 'update:modelValue', id: string | number) => void>();

function updateInput(event: any) {
  emit('update:modelValue', event.target.value);
}
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
      @input="updateInput"
      required
    />
  </div>
</template>
