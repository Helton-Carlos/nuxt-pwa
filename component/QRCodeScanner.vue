<script setup lang="ts">
import { onMounted, defineEmits } from 'vue';
import { Html5QrcodeScanner } from 'html5-qrcode';

const emit = defineEmits();

const config = {
  fps: 20,
  qrbox: 250,
};
function onScanSuccess(decodedText: string, decodedResult: any | undefined) {
  emit('result', decodedText, decodedResult);
}

onMounted(() => {
  const html5QrcodeScanner = new Html5QrcodeScanner(
    'qr-code-full-region',
    config,
  );
  html5QrcodeScanner.render(onScanSuccess);
});
</script>

<template>
  <div>
    <div id="qr-code-full-region"></div>
  </div>
</template>
