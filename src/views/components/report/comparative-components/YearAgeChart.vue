<template>

    <div class="year-age-chart">

      <div class="labels">
        <div>Year</div>
        <div>Age</div>
      </div>

      <div class="numbers-container">
        <div class="numbers">
          <div v-for="(item, index) in years" :key="index">{{ item }}</div>
        </div>
        <div class="numbers">
          <div v-for="(item, index) in ages" :key="index">{{ item }}</div>
        </div>
      </div>

    </div>

</template>

<script>
export default {
  computed: {
    years() {
      const lirp_data = this.$store.state.data.report.comparative.lirp_data
      const distributions = lirp_data.chart_output.distributions
      const firstYear = distributions.findIndex((d) => d > 0)
      return lirp_data.chart_output.year.slice(firstYear)
    },
    ages() {
      const lirp_data = this.$store.state.data.report.comparative.lirp_data
      const distributions = lirp_data.chart_output.distributions
      const firstYear = distributions.findIndex((d) => d > 0)
      return lirp_data.chart_output.Age.slice(firstYear)
    }
  }
}
</script>
