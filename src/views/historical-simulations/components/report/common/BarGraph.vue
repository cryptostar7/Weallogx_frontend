<template lang="">
  <canvas id="comparativeValuesChart" width="400" height="150"></canvas>
  <button @click="toggleFunction()">toggle</button>
</template>
<script>
export default {
  props: ["config"],
  data() {
    return {
      comparativeValuesChart: [],
    };
  },
  mounted() {
    this.comparativeValuesChart = new Chart(
      document.getElementById("comparativeValuesChart"),
      this.config.config
    );
    var redioInp = document.querySelector(".dropdown-menu");
    redioInp.addEventListener("click", function(e) {
    let screenMode = localStorage.getItem("mode");
    if (screenMode == "light-blue" || screenMode == "dark-blue") {
        // this.config.datasets.datasets[0].borderColor = "#1660A4";
        // this.config.datasets.datasets[1].borderColor = "#0E6651";
        this.comparativeValuesChart.update();
    } else {
        // this.config.datasets.datasets[0].borderColor = "#0E6651";
        // this.config.datasets.datasets[1].borderColor = "#1660A4";
        this.comparativeValuesChart.update();
    }
    });
  },
  methods: {
    toggleFunction(){
        // this.config.plugins.hideAll(this.comparativeValuesChart, this.config.config.options);
    }
  },
};
</script>
<style lang=""></style>
