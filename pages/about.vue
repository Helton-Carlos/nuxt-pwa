<script setup lang="ts">
import { ref } from 'vue';
import { useSpeechSynthesis } from '@vueuse/core';
const { x, y } = useMouse();

const voice = ref<SpeechSynthesisVoice>(
  undefined as unknown as SpeechSynthesisVoice,
);
const text = ref('Nuxt Voucher');

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
</script>

<template>
  <div>
    <div>Pos: {{ x }}, {{ y }}</div>
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
