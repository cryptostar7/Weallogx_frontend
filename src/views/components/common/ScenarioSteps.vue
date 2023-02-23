<template lang="">
    <div class="reviewProgressMainDiv py-5">
        <ul class="mt-1 review-progress" id="reviewProgress">
            <li :class="scenarioDetail.class"><router-link :to="scenarioDetail.url" class="nav-link p-0">Scenario Details</router-link></li>
            <li :class="illustrationDetail.class"><router-link :to="illustrationDetail.url" class="nav-link p-0">Illustration Data</router-link></li>
            <li :class="comparativeDetail.class"><router-link :to="comparativeDetail.url" class="nav-link p-0">Comparative Vehicles</router-link></li>
            <li :class="historicalDetail.class"><router-link :to="historicalDetail.url" class="nav-link p-0">Historical Simulations</router-link></li>
        </ul>
      <router-link to="/">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" />
      </router-link>
    </div>
</template>
<script>
export default {
  computed: {
    scenario() {
      return this.$store.state.data.active_scenario || [];
    },
    scenarioId() {
      return this.$route.params.scenario;
    },
    scenarioDetail() {
      let route = this.$route.name;
      let response = {
        class: "active",
        url: `/scenario-details/${this.$route.params.scenario || ""}`,
      };
      if (this.scenario.scenerio_details && route !== "scenario-details") {
        response.class = "done";
      }
      return response;
    },
    illustrationDetail() {
      let route = this.$route.name;
      let response = { class: "", url: "" };

      if (route !== "scenario-details") {
        response.class = "active";
      }

      if (this.scenario.illustration) {
        response.class = "done";
      }

      if (response.class) {
        response.url = `/illustration-data/${this.$route.params.scenario ||
          ""}`;
      }

      return response;
    },
    comparativeDetail() {
      let route = this.$route.name;
      let response = { class: "", url: "" };
      if (this.scenario.comperative) {
        response.class = "done";
      }

      if (route === "comparative-vehicles") {
        response.class = "active";
      }

      if (response.class) {
        response.url = `/comparative-vehicles/${this.$route.params.scenario ||
          ""}`;
      }

      return response;
    },
    historicalDetail() {
      let route = this.$route.name;
      let response = { class: "", url: "" };
      if (this.scenario.historical) {
        response.class = "done";
      }

      if (route === "historical-simulations-from-scratch") {
        response.class = "active";
      }

      if (response.class === "done") {
        response.url = `/historical-simulations-from-scratch/${this.$route
          .params.scenario || ""}`;
      }

      return response;
    },
  },
};
</script>