<template lang>
  <div class="income-rider-graph-div">
    <canvas id="irLongevityChart"></canvas>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  mounted() {
    this.setGraph();
  },
  methods: {
    setGraph() {
      const ctx = document.getElementById("irLongevityChart").getContext("2d");

      let graphData = this.getDataSet();

      // Chart options
      const config = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false, // Show legend
          },
        },
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: "Years",
            },
            grid: {
              display: false, // Remove grid lines
            },
            border: {
              display: false,
              color: "rgba(14, 102, 81, 1)",
              width: 2,
            },
          },
          y: {
            ticks: {
              display: false, // Remove y-axis labels
            },
            grid: {
              drawBorder: false, // Remove default border
              // Remove grid lines
              color: (context) => {
                if (context.tick.value === 0) {
                  return "#0E6651"; // Your desired zeroLineColor
                }
                return "transparent"; // Default color for other lines
              },
              lineWidth: (context) => {
                // Set line width for zero line
                if (context.tick.value === 0) {
                  return 2; // Your desired zero line width
                }
                return 0; // Hide other grid lines
              },
            },
          },
        },
        layout: {
          padding: {
            right: 10, // Adjust this padding to create a space for the right border outline
          },
        },
      };

      if (window.irLongevityGraphChart) {
        // clear the old initialized graph
        window.irLongevityGraphChart.destroy();
      }

      window.irLongevityGraphChart = new Chart(ctx, {
        type: "line",
        data: graphData,
        options: config,
      });
    },
    generateLabel(distribution1, distribution2 = [], distribution3 = []) {
      if (!this.showResult) {
        return [];
      }

      let maxYear = this.irResult.year_count;
      let minYear = 1;
      let yearsLabel = [];
      let nonZeroFirstIndex = [];
      if (this.showResult < 1) {
        distribution1 = [];
      }

      if (this.showResult < 2) {
        distribution2 = [];
      }

      if (this.showResult < 3) {
        distribution3 = [];
      }

      for (let i = 0; i < maxYear; i++) {
        if (distribution1[i] && !nonZeroFirstIndex.length) {
          nonZeroFirstIndex.push(i + 1);
        }

        if (distribution2[i] && nonZeroFirstIndex.length < 2) {
          nonZeroFirstIndex.push(i + 1);
        }

        if (distribution3[i] && nonZeroFirstIndex.length < 3) {
          nonZeroFirstIndex.push(i + 1);
        }
      }
      minYear = Math.min(...nonZeroFirstIndex) || 0;

      for (let index = minYear; index <= maxYear; index++) {
        yearsLabel.push(index);
      }

      return yearsLabel;
    },
    getDataSet() {
      let datasets = [];
      let distribution1 = this.irResult.annual_income_rider_distribution;
      let distribution2 = this.irResult.optimization.optimal_distribution;
      let distribution3 = this.irHistoricalResult.optimization.optimal_distribution;
      
      let yearsLabel = this.generateLabel(
        distribution1,
        distribution2,
        distribution3
      );

      let minYear = this.irResult.year_count - yearsLabel.length;

      if (this.showResult > 0) {
        datasets.push({
          label: "Longevity",
          data: distribution1.filter((item, index) => index >= minYear),
          backgroundColor: "rgba(14, 102, 81, 0.20)",
          borderColor: "#0E6651",
          borderWidth: 2,
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
        });
      }

      if (this.showResult > 1) {
        datasets.push({
          label: "Longevity",
          data: distribution2.filter((item, index) => index >= minYear),
          backgroundColor: "rgba(22, 96, 164, 0.20)",
          borderColor: "#1660A4",
          borderWidth: 2,
          fill: true,
          borderDash: [5, 5], // Dashed line
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
        });
      }

      if (this.showResult > 2) {
        datasets.push({
          label: "Longevity",
          data: distribution3.filter((item, index) => index >= minYear),
          backgroundColor: "rgba(14, 102, 81, 0.20)",
          borderColor: "#0E6651",
          borderDash: [5, 5], // Dashed line
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
        });
      }

      // Initialize chart data with empty datasets array
      let data = {
        labels: yearsLabel,
        datasets: datasets,
      };

      return data;
    },
  },
  computed: {
    ...mapState({
      targetAnalysis: (state) => state.incomeRider.target_analysis_type,
      showResult: (state) => state.incomeRider.view_result,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),
  },
  watch: {
    showResult(e) {
      if (window.irLongevityGraphChart) {
        this.setGraph();
      }
    },
  },
};
</script>
<style lang></style>
