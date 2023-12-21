<script setup lang="ts">
import { defineEmits } from 'vue';
import { QrStream } from 'vue3-qr-reader';

const emit = defineEmits();

function onDecode(data: any) {
  emit('result', data);
}
</script>

<template>
  <div>
    <qr-stream @decode="onDecode" class="w-full">
      <div style="color: red" class="frame"></div>
    </qr-stream>
  </div>
</template>
