<template>
  <div class="thig">
    PLACEHOLDER <BarChart v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import BarChart from '../components/BarChart.vue'
import {} from 'vue'
export default {
  name: 'BarView',
  components: { BarChart },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: []
      }
    }
  },

  async onMounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
      let data = await res.json()
      const first = data.filter((crime) => crime.perp_race === 'BLACK')
      this.chartData.datasets[0].data.push(first.length)
      const second = data.filter((crime) => crime.perp_race === 'WHITE')
      this.chartData.datasets[0].data.push(second.length)
      const third = data.filter((crime) => crime.perp_race === 'AMERICAN INDIAN/ALASKAN NATIVE')
      this.chartData.datasets[0].data.push(third.length)
      const fourth = data.filter((crime) => crime.perp_race === 'WHITE')
      this.chartData.datasets[0].data.push(fourth.length)
      const fifth = data.filter((crime) => crime.perp_race === 'ASIAN/PACIFIC ISLANDER')
      this.chartData.datasets[0].data.push(fifth.length)
      const sixth = data.filter((crime) => crime.perp_race === 'WHITE HISPANIC')
      this.chartData.datasets[0].data.push(sixth.length)
      const seventh = data.filter((crime) => crime.perp_race === 'BLACK HISPANIC')
      this.chartData.datasets[0].data.push(seventh.length)
      const eighth = data.filter((crime) => crime.perp_race === 'UNKNOWN')
      this.chartData.datasets[0].data.push(eighth.length)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped></style>
