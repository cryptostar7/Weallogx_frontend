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
  props: ["active_all_tab", "currentStep"],
  computed: {
    simulation() {
      return this.$store.state.data.active_simulation || [];
    },
    simulationDetail() {
      let response = {
        class: "done",
        url: `/historical/simulation-details/${
          this.$route.params.simulation || ""
        }`,
      };

      if (this.$props.currentStep === 1) {
        response.class = "active";
      }

      if (this.$props.active_all_tab) {
        response.class = "done";
      }
      return response;
    },
    illustrationDetail() {
      let response = { class: "", url: "" };

      if (this.simulation.historical_illustration) {
        response.class = "done";
      }

      if (this.$props.currentStep === 2) {
        response.class = "active";
      }

      if (response.class) {
        response.url = `/historical/illustration-data/${
          this.$route.params.simulation || ""
        }`;
      }

      if (this.$props.active_all_tab) {
        response.class = "done";
      }

      return response;
    },
    historicalDetail() {
      let response = { class: "", url: "" };

      if (this.simulation.standalone_historical) {
        response.class = "done";
      }

      if (this.$props.currentStep === 3) {
        response.class = "active";
      }

      if (response.class) {
        response.url = `/historical/parameters/${
          this.$route.params.simulation || ""
        }`;
      }

      if (this.$props.active_all_tab) {
        response.class = "done";
      }

      return response;
    },
  },
};
</script>
