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
                  return '#0E6651'; // Your desired zeroLineColor
                }
                return 'transparent'; // Default color for other lines
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
    getDataSet() {
      let datasets = [
        {
          label: "Longevity",
          data: this.irResult.cumulative_income_rider_distribution,
          backgroundColor: "rgba(14, 102, 81, 0.20)",
          borderColor: "#0E6651",
          borderWidth: 2,
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
        },
      ];

      if (this.showResult > 1) {
        datasets.push({
          label: "Longevity",
          data: this.irResult.cumulative_cv_distribution,
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
          data: this.targetAnalysis == 'amount'? this.irHistoricalResult.cumulative_cv_distribution : this.irResult.optimization.optimal_cumulative_cv_distribution,
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
        labels: Array.from({ length: this.irResult.year_count }, (_, i) => i + 1), 
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
    })
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
