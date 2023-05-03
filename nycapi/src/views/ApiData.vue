<script setup>
import { ref, onMounted } from 'vue'
import CrimeCards from './components/CrimeCards.vue'

const crime = ref('')
async function getCrime() {
  const response = await fetch('https://data.cityofnewyorhttps://data.cityofnewyork.us/resource/uip8-fykc.jsonk.us/https://data.cityofnewyork.us/resource/qb7u-rbmr.json/ia2d-e54m.json')
  const data = await response.json()
  crime.value = data
  console.log(data);
}
onMounted(() => {
  getCrime()
})
</script>

<template>
  <div class="container">
    <CrimeCards v-for="(title, index) in crime" :key="title.date" :id="index + 1" :crime="title" />
  </div>
</template>