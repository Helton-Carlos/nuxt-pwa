<script setup lang="ts">
import { useSpeechSynthesis } from '@vueuse/core';

defineProps<{
  image: string;
  title: string;
  point: number;
  description: string;
  categories: string;
}>();

const voice = ref<SpeechSynthesisVoice>(
  undefined as unknown as SpeechSynthesisVoice,
);
const text = ref<string>('Nuxt Voucher');
const showDescription = ref<boolean>(false);
const info = ref<string>('Para alcançar esses prêmios você precisa ter:');

const speech = useSpeechSynthesis(text, {
  lang: 'pt-BR',
  pitch: 1,
  rate: 1,
  volume: 1,
  voice,
});

function play(
  title: string,
  info: string,
  point: number,
  description: string,
  categories: string,
) {
  const desc = showDescription.value
    ? description + 'categoria' + categories
    : '';
  text.value = title + info + point + 'pontos' + desc;

  speech.speak();
}
function openDecription() {
  showDescription.value = !showDescription.value;
}

const rotateChevron = computed(() => {
  if (showDescription.value) return 'rotate-90';

  return 'rotate-0';
});
</script>

<template>
  <div class="card">
    <div class="flex justify-between items-center">
      <div class="flex gap-2">
        <div class="w-[250px]">
          <img class="img-product" :src="image" :alt="title" />
        </div>

        <div class="pl-4">
          <p class="font-bold capitalize underline">
            {{ title }}
          </p>

          <p class="font-normal text-sm">
            {{ info }}
          </p>

          <p class="font-bold text-xs">{{ point }} pontos.</p>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <img
          class="cursor-pointer"
          src="~/assets/icons/audio.svg"
          alt="audio"
          @click="play(title, info, point, description, categories)"
        />

        <img
          class="cursor-pointer"
          :class="rotateChevron"
          src="~/assets/icons/chevron.svg"
          alt="chevron"
          @click="openDecription"
        />
      </div>
    </div>

    <ul v-if="showDescription" class="pl-10 pt-5 text-sm capitalize">
      <li>- {{ description }}</li>
      <li>- {{ categories }}</li>
    </ul>
  </div>
</template>
