<template lang>
  <div class="income-rider-graph-div">
    <canvas id="irLongevityChart"></canvas>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { getIncomeRiderYearLabels } from "../../../../../../services/helper";

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
          tooltip: {
            mode: "nearest",
            intersect: false,
            callbacks: {
              title: function (tooltipItems) {
                let title = tooltipItems[0].label;
                return "Year: " + title;
              },
              label: function (tooltipItem) {
                let datasetLabel = tooltipItem.dataset.label || "";
                let value = tooltipItem.raw;
                return datasetLabel + ": " + value.toLocaleString();
              },
            },
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
    updateGraph(){
      if (window.irLongevityGraphChart) {
        this.setGraph();
      }  
    },
    getDataSet() {
      let datasets = [];
      let distribution1 = this.irResult.annual_income_rider_distribution.map(
        (i) => Number(i.toFixed(0))
      );
      let distribution2 = this.irResult.optimization.optimal_distribution.map(
        (i) => Number(i.toFixed(0))
      );
      let distribution3 =
        this.irHistoricalResult.optimization.optimal_distribution.map((i) =>
          Number(i.toFixed(0))
        );

      if (this.showResult < 1) {
        distribution1 = [];
      }

      if (this.showResult < 2) {
        distribution2 = [];
      }

      if (this.showResult < 3) {
        distribution3 = [];
      }

      let yearsLabel = getIncomeRiderYearLabels(
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
          pointRadius: 10, //  dots size
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
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
          pointRadius: 10, // Remove dots
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
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
          pointRadius: 10, // Remove dots
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
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
      resultType: (state) => state.incomeRider.result_type,
      inputs: (state) => state.incomeRider.result.inputs || [],
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    }),
  },
  watch: {
    showResult() {
      this.updateGraph();
    },
    resultType() {
      this.updateGraph();
    },
    inputs() {
      this.updateGraph();
    },
  },
};
</script>
<style lang></style>
