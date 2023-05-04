<template>
  <div class="bruh">
    Age of Offenders
    <PieChart v-if="loaded" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import PieChart from '../components/PieChart.vue'
export default {
  name: 'PieView',
  components: {
    PieChart
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['<18', '18-24', '25-44', '45-64', '65'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#caf0f8', '#ADD8f9', '#90e0ef', '#00b4d8', '#0077b6']
      }
    }
  },

  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
      let data = await res.json()
      const baby = data.filter((crime) => crime.age_group === '<18')
      this.chartData.datasets[0].data.push(baby.length)
      const young = data.filter((crime) => crime.age_group === '18-24')
      this.chartData.datasets[0].data.push(young.length)
      const mid = data.filter((crime) => crime.age_group === '25-44')
      this.chartData.datasets[0].data.push(mid.length)
      const old = data.filter((crime) => crime.age_group === '45-64')
      this.chartData.datasets[0].data.push(old.length)
      const older = data.filter((crime) => crime.age_group === '65+')
      this.chartData.datasets[0].data.push(older.length)
      this.loaded = true
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
h2 {
  color: #7a5839;
  font-size: 2rem;
  text-align: center;
}
h2:hover {
  text-decoration: underline;
  transition: 1s;
  color: #7a5839;
  font-size: 2.5rem;
}
.chart {
  margin-left: 80%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 2%;
  height: 500;
  width: 1000px;
}
</style>

<style scoped>
h2 {
  color: #30312e;
  font-size: 25px;
  text-align: center;
}
h2:hover {
  text-decoration: underline;
  transition: 0.2s;
  color: #815429;
  font-size: 10px;
}
.bruh {
  margin-left: 75%;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 25px;
  height: 700px;
  width: 700px;
}
</style>
