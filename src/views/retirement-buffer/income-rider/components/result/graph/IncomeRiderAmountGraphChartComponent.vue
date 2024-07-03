<template lang>
  <div class="income-rider-graph-div">
    <canvas id="irAmountChart"></canvas>
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
      const ctx = document.getElementById("irAmountChart").getContext("2d");

      let graphData = this.getDataSet();
      // Custom plugin to draw vertical lines at the end of each dataset
      const verticalLinePlugin = {
        id: "verticalLinePlugin",
        afterDatasetsDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, datasetIndex) => {
            const meta = chart.getDatasetMeta(datasetIndex);
            if (meta.data.length > 0) {
              const lastPoint = meta.data[meta.data.length - 1];
              const x = lastPoint.x;
              const y = lastPoint.y;
              const bottomY = chart.scales.y.bottom;

              ctx.save();
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x, bottomY);
              ctx.lineWidth = 2;
              ctx.setLineDash([5, 5]);
              ctx.strokeStyle = dataset.borderColor;
              ctx.stroke();
              ctx.restore();
            }
          });
        },
      };

      const config = {
        type: "line",
        data: graphData,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Years",
              },
              grid: {
                display: false, // Remove grid lines
              },
              border: {
                display: true,
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
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
          elements: {
            line: {
              borderJoinStyle: "miter",
              borderWidth: 2,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
        plugins: [verticalLinePlugin],
      };

      if (window.irAmountGraphChart) {
        // clear the old initialized graph
        window.irAmountGraphChart.destroy();
      }

      window.irAmountGraphChart = new Chart(ctx, config);
    },
    getDataSet() {
      let datasets = [
        {
          label: "Amount3",
          data: this.irResult.cumulative_income_rider_distribution,
          backgroundColor: "rgba(14, 102, 81, 0.20)",
          borderColor: "rgba(14, 102, 81, 1)",
          borderWidth: 2,
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
          order: 3,
        },
      ];

      if (this.showResult > 1) {
        datasets.push({
          label: "Amount2",
          data: this.irResult.cumulative_cv_distribution,
          backgroundColor: "rgba(22, 96, 164, 0.20)",
          borderColor: "#1660A4",
          borderWidth: 2,
          borderDash: [5, 5],
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
          order: 2,
        });
      }

      if (this.showResult > 2) {
        datasets.push({
          label: "Amount3",
          data: this.irHistoricalResult.cumulative_cv_distribution,
          backgroundColor: "rgba(74, 142, 205, 0.20)",
          borderColor: "#4A8ECD",
          borderWidth: 2,
          borderDash: [5, 5],
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
          order: 1,
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
      showResult: (state) => state.incomeRider.view_result,
    }),
    ...mapGetters({
      irResult: "incomeRider/irResult",
      irHistoricalResult: "incomeRider/irHistoricalResult",
    })
  },
  watch: {
    showResult(e) {
      if (window.irAmountGraphChart) {
        this.setGraph();
      }
    },
  },
};
</script>
<style lang></style>
