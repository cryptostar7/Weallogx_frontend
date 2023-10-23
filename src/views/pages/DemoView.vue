<template lang="">
  <div>
    Demo Page
    <button @click="testFunction">testFunction</button>
  </div>
</template>
<script>
import { getUrl } from "../../network/url";
import { post } from "../../network/requests";
import { authHeader } from "../../services/helper";
export default {
  mounted() {
    console.log(JSON.parse(localStorage.getItem("isc_calculate")));
  },
  methods: {
    testFunction: function () {
      let formData = {
        beginning_balance: 10000,
        start_year: 1960,
        end_year: 2022,
        index_vehicle: {
          type: "taxable",
          tax_rate: 10,
          fee: 2,
        },
        strategies: [
          {
            allocation: 0.34,
            index: "S&P 500",
            segment_duration: 2,
            cap_rate: 8,
            margin: 10,
            par_rate: 5,
            floor: 2,
            performance_multiplier: 50,
            performance_multiplier_start_year: 4,
            flat_credit_bonus: 1,
            flat_credit_bonus_start_year: 4,
            fee: 3,
          },
          {
            allocation: 0.33,
            index: "S&P 500",
            segment_duration: 2,
            cap_rate: 8,
            margin: 10,
            par_rate: 5,
            floor: 2,
            performance_multiplier: 50,
            performance_multiplier_start_year: 4,
            flat_credit_bonus: 1,
            flat_credit_bonus_start_year: 4,
            fee: 3,
          },
          {
            allocation: 0.33,
            index: "S&P 500",
            segment_duration: 2,
            cap_rate: 8,
            margin: 10,
            par_rate: 5,
            floor: 2,
            performance_multiplier: 50,
            performance_multiplier_start_year: 4,
            flat_credit_bonus: 1,
            flat_credit_bonus_start_year: 4,
            fee: 3,
          },
        ],
      };

      console.log(formData);

      this.$store.dispatch("loader", true);
      localStorage.removeItem("isc_calculate");
      localStorage.setItem("isc_calculate_inputs", JSON.stringify(formData));

      post(getUrl("isc_calculate"), formData, authHeader())
        .then((response) => {
          console.log(response);
          this.$store.dispatch("loader", false);
          localStorage.setItem("isc_calculate", response.data);
        })
        .catch((error) => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error("Something went wrong!");
          }
          this.$store.dispatch("loader", false);
        });
    },
  },
};
</script>
<style lang=""></style>
