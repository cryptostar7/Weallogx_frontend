<template lang>
  <div class="income-rider-graph-div mt-4">
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
                let value = tooltipItem.raw;
                return "$" + value.toLocaleString();
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
          },
          y: {
            ticks: {
              display: false, // Remove y-axis labels
            },
            grid: {
              drawBorder: false, // Remove default border
              // Remove grid lines
              color: (context) => {
                if ((this.$appTheme() == "light-blue") || (this.$appTheme() == "dark-blue")) {
                  return "#1660A4"; // Your desired zeroLineColor
                }else{
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

      var redioInp = document.querySelector(".dropdown-menu");
      redioInp.addEventListener("click", function(e) {
        let screenMode = localStorage.getItem("mode");
        if (screenMode == "light-blue") {
          graphData.datasets[0] ? graphData.datasets[0].pointBackgroundColor = "#1660A4" : '';
          graphData.datasets[1] ? graphData.datasets[1].pointBackgroundColor = "#0E6651" : '';
          graphData.datasets[2] ? graphData.datasets[2].pointBackgroundColor = "#147D64" : '';
          graphData.datasets[0] ? graphData.datasets[0].borderColor = "#1660A4" : '';
          graphData.datasets[1] ? graphData.datasets[1].borderColor = "#0E6651" : '';
          graphData.datasets[2] ? graphData.datasets[2].borderColor = "#147D64" : '';
          graphData.datasets[0] ? graphData.datasets[0].backgroundColor = "rgba(22, 96, 164, 0.20)" : '';
          graphData.datasets[1] ? graphData.datasets[1].backgroundColor = "rgba(14, 102, 81, 0.20)" : '';
          graphData.datasets[2] ? graphData.datasets[2].backgroundColor = "rgba(20, 125, 100, 0.20)" : '';
          config.scales.y.grid.color = (context) => "#1660A4";
        } else if (screenMode == "dark-blue") {
          graphData.datasets[0] ? graphData.datasets[0].pointBackgroundColor = "#1660A4" : '';
          graphData.datasets[1] ? graphData.datasets[1].pointBackgroundColor = "#089875" : '';
          graphData.datasets[2] ? graphData.datasets[2].pointBackgroundColor = "#147D64" : '';
          graphData.datasets[0] ? graphData.datasets[0].borderColor = "#1660A4" : '';
          graphData.datasets[1] ? graphData.datasets[1].borderColor = "#089875" : '';
          graphData.datasets[2] ? graphData.datasets[2].borderColor = "#147D64" : '';
          graphData.datasets[0] ? graphData.datasets[0].backgroundColor = "rgba(22, 96, 164, 0.20)" : '';
          graphData.datasets[1] ? graphData.datasets[1].backgroundColor = "rgba(14, 102, 81, 0.20)" : '';
          graphData.datasets[2] ? graphData.datasets[2].backgroundColor = "rgba(20, 125, 100, 0.20)" : '';
          config.scales.y.grid.color = (context) => "#1660A4";
        } else {
          graphData.datasets[0] ? graphData.datasets[0].pointBackgroundColor = "#0E6651" : '';
          graphData.datasets[1] ? graphData.datasets[1].pointBackgroundColor = "#1660A4" : '';
          graphData.datasets[2] ? graphData.datasets[2].pointBackgroundColor = "#4A8ECD" : '';
          graphData.datasets[0] ? graphData.datasets[0].borderColor = "#0E6651" : '';
          graphData.datasets[1] ? graphData.datasets[1].borderColor = "#1660A4" : '';
          graphData.datasets[2] ? graphData.datasets[2].borderColor = "#4A8ECD" : '';
          graphData.datasets[0] ? graphData.datasets[0].backgroundColor = "rgba(14, 102, 81, 0.20)" : '';          
          graphData.datasets[1] ? graphData.datasets[1].backgroundColor = "rgba(22, 96, 164, 0.20)" : '';
          graphData.datasets[2] ? graphData.datasets[2].backgroundColor = "rgba(74, 142, 205, 0.20)" : '';
          config.scales.y.grid.color = (context) => "#0E6651";
        }
        window.irLongevityGraphChart.update();
      });
    },
    updateGraph(){
      if (window.irLongevityGraphChart) {
        this.setGraph();
      }  
    },
    getDataSet() {
      let datasets = [];
      let distribution1 = this.irResult.cumulative_income_rider_distribution.map(
        (i) => Number(i.toFixed(0))
      );
      let distribution2 = this.irResult.optimization.optimal_cumulative_cv_distribution.map(
        (i) => Number(i.toFixed(0))
      );
      let distribution3 =
        this.irHistoricalResult.optimization.optimal_cumulative_cv_distribution.map((i) =>
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

      let borderColors = ["#0E6651", "#1660A4", "4A8ECD"], backgroundColors = ["rgba(14, 102, 81, 0.20)", "rgba(22, 96, 164, 0.20)", "rgba(74, 142, 205, 0.20)"];
      if ((this.$appTheme() == "light-blue")) {
        borderColors = ["#1660A4", "#0E6651", "#147D64"];
        backgroundColors = ["rgba(22, 96, 164, 0.20)", "rgba(14, 102, 81, 0.20)", "rgba(20, 125, 100, 0.20)"];
      }else if ((this.$appTheme() == "dark-blue")) {
        borderColors = ["#1660A4", "#089875", "#147D64"];
        backgroundColors = ["rgba(22, 96, 164, 0.20)", "rgba(14, 102, 81, 0.20)", "rgba(20, 125, 100, 0.20)"];
      }else {
        borderColors = ["#0E6651", "#1660A4", "#4A8ECD"];
        backgroundColors = ["rgba(14, 102, 81, 0.20)", "rgba(22, 96, 164, 0.20)", "rgba(74, 142, 205, 0.20)"];
      }

      if (this.showResult > 0) {
        datasets.push({
          label: "Longevity",
          data: distribution1.filter((item, index) => index >= minYear),
          backgroundColor: backgroundColors[0],
          borderColor: borderColors[0],
          borderWidth: 2,
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, //  dots size
          pointBackgroundColor: borderColors[0],
          lineTension: 0,
        });
      }

      if (this.showResult > 1) {
        datasets.push({
          label: "Longevity",
          data: distribution2.filter((item, index) => index >= minYear),
          backgroundColor: backgroundColors[1],
          borderColor: borderColors[1],
          borderWidth: 2,
          fill: true,
          borderDash: [5, 5], // Dashed line
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
          pointBackgroundColor: borderColors[1],
          lineTension: 0,
        });
      }

      if (this.showResult > 2) {
        datasets.push({
          label: "Longevity",
          data: distribution3.filter((item, index) => index >= minYear),
          backgroundColor: backgroundColors[2],
          borderColor: borderColors[2],
          borderDash: [5, 5], // Dashed line
          fill: true,
          tension: 0.1, // Curved line
          pointRadius: 0, // Remove dots
          pointBackgroundColor: borderColors[2],
          lineTension: 0,
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
