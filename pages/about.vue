<script setup lang="ts">
import { ref } from 'vue';
import { useSpeechSynthesis } from '@vueuse/core';
import QRCodeScanner from '~/component/QRCodeScanner.vue';

const voice = ref<SpeechSynthesisVoice>(
  undefined as unknown as SpeechSynthesisVoice,
);
const text = ref<string>('Nuxt Voucher');
const openScanner = ref<boolean>(false);
const scan = ref<any>({});

const speech = useSpeechSynthesis(text, {
  lang: 'pt-BR',
  pitch: 1,
  rate: 1,
  volume: 1,
  voice,
});

function play() {
  speech.speak();
}

function onScan(decodedText: string, decodedResult: any | undefined) {
  if (scan.value.decodedText) {
    return false;
  } else {
    scan.value = {
      decodedText,
      decodedResult,
    };
  }
}
</script>

<template>
  <div>
    <button
      class="bg-primary p-2 px-5 rounded text-white"
      @click="openScanner = !openScanner"
    >
      Abrir camera
    </button>

    <QRCodeScanner v-if="openScanner" style="width: 500px" @result="onScan" />

    {{ scan }}

    <div>
      <label class="font-bold mr-2">Spoken Text</label>
      <p>{{ text }}</p>

      <div class="mt-2">
        <button class="bg-primary p-2 px-5 rounded text-white" @click="play">
          Play
        </button>
      </div>
    </div>
  </div>
</template>
