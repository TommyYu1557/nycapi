<script setup>
import CrimeCards from '../components/CrimeCards.vue'
import { ref, onMounted } from 'vue'

const crimed = ref('')
async function getCrime() {
  const response = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  const data = await response.json()
  crimed.value = data
  console.log(data)
}
onMounted(() => {
  getCrime()
})
</script>

<template>
  <div class="container">
    <CrimeCards
      v-for="crime in crimed"
      :key="crime"
      :arrest_key="crime.arrest_key"
      :arrest_date="crime.arrest_date"
      :ofns_desc="crime.ofns_desc"
      :perp_sex="crime.perp_sex"
      :perp_race="crime.perp_race"
    />
  </div>
</template>
