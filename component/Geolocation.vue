<script setup lang="ts">
let startPos;

const outLat = ref<string>('');
const outLog = ref<string>('');

const geoNotFound = ref<boolean>(false);

function geoPlay() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(geoSucess, geoError, {
      enableHighAccuracy: true,
      timeout: 0,
      maximumAge: 3000,
    });
  } else {
    geoNotFound.value = true;
  }
}

function geoSucess(position: any) {
  startPos = position;
  outLat.value = startPos.coords.latitude;
  outLog.value = startPos.coords.longitude;
}

function geoError(error: any) {
  console.log('Falha!', error.code);
}
</script>

<template>
  <div class="card">
    <div>
      <button class="bg-primary p-2 px-5 rounded text-white" @click="geoPlay">
        Get Location
      </button>
    </div>
    <p>
      Lat.: <span id="out-lat">{{ outLat }}</span>
    </p>
    <p>
      Log.: <span id="out-log">{{ outLog }}</span>
    </p>

    <p class="text-red" v-if="geoNotFound">Não encontrado</p>
  </div>
</template>
