<template lang="">
  <div class="reviewProgressMainDiv py-5">
    <ul
      class="mt-1 review-progress d-flex justify-content-center"
      id="reviewProgress"
    >
      <li :class="simulationDetail.class">
        <router-link
          :to="`${simulationDetail.url}${
            $route.query.report ? `?report=${$route.query.report}` : ''
          }`"
          class="nav-link p-0"
          >Simulation Details</router-link
        >
      </li>
      <li :class="illustrationDetail.class">
        <router-link
          :to="`${illustrationDetail.url}${
            $route.query.report ? `?report=${$route.query.report}` : ''
          }`"
          class="nav-link p-0"
          >Illustration Data</router-link
        >
      </li>
      <li :class="historicalDetail.class">
        <router-link
          :to="`${historicalDetail.url}${
            $route.query.report ? `?report=${$route.query.report}` : ''
          }`"
          class="nav-link p-0"
          >Historical Simulations</router-link
        >
      </li>
    </ul>
    <router-link to="/">
      <img
        src="@/assets/images/icons/cross.svg"
        alt="cross"
        class="ReviewCrossBtn"
      />
    </router-link>
  </div>
</template>
<script>
export default {
  computed: {
    simulation() {
      return this.$store.state.data.active_simulation || [];
    },
    simulationDetail() {
      let route = this.$route.name;
      let response = {
        class: "active",
        url: `/historical/simulation-details/${
          this.$route.params.simulation || ""
        }`,
      };
      if (
        this.simulation.simulation_details &&
        route !== "historical-simulation-details"
      ) {
        response.class = "done";
      }
      return response;
    },
    illustrationDetail() {
      let route = this.$route.name;
      let response = { class: "", url: "" };

      if (route !== "historical-simulation-details") {
        response.class = "active";
      }

      if (this.simulation.illustration) {
        response.class = "done";
      }

      if (route === "illustration") {
        response.class = "active";
      }

      if (response.class) {
        response.url = `/historical/illustration/${
          this.$route.params.simulation || ""
        }`;
      }

      return response;
    },
    historicalDetail() {
      let route = this.$route.name;
      let response = { class: "", url: "" };
      if (this.simulation.historical) {
        response.class = "done";
      }

      if (route === "historical-parameters") {
        response.class = "active";
      }

      if (response.class === "done") {
        response.url = `/historical/parameters/${
          this.$route.params.simulation || ""
        }`;
      }

      return response;
    },
  },
};
</script>
