<template lang="">
  <div :class="`container large my-5 darkbgClrDiv ${data ? '' : 'd-none'}`">
    <div class="summary-heading">
      <p><span>4 </span>Historical Simulations</p>
      <router-link
        :to="`/historical-simulations/${$route.params.scenario}?review=true`"
        class="editbtnCommonAncor"
      >
        <button class="btn editBtnCommon">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.5"
              y="3.5"
              width="14"
              height="14"
              rx="1"
              fill="transparent"
              stroke="#0E6651"
              stroke-width="2"
            />
            <path
              d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
              fill="#0E6651"
              stroke="#0E6651"
              stroke-width="1.5"
            />
            <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
          </svg>
        </button>
      </router-link>
    </div>

    <div class="container-fluid summary-editBox py-4">
      <div class="row">
        <div class="col-md-12 mb-4">
          <div class="compVehcleCol pb-0">
            <div
              class="historyHead2 row justify-content-between align-items-center"
            >
              <div class="col-md-4">
                <div
                  class="historyHead2 mb-1 d-flex justify-content-between align-items-center"
                >
                  <p class="fs-24">Global Parameters</p>

                  <router-link
                    :to="`/historical-simulations/${$route.params.scenario}?tab=1&amp;review=true`"
                    class="editbtnCommonAncor"
                  >
                    <button class="btn editBtnCommon">
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.5"
                          y="3.5"
                          width="14"
                          height="14"
                          rx="1"
                          fill="transparent"
                          stroke="#0E6651"
                          stroke-width="2"
                        ></rect>
                        <path
                          d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                          fill="#0E6651"
                          stroke="#0E6651"
                          stroke-width="1.5"
                        ></path>
                        <path
                          d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z"
                          fill="#0E6651"
                        ></path>
                      </svg>
                    </button>
                  </router-link>
                </div>
                <p class="hisBorder"></p>
              </div>
            </div>

            <form action="">
              <div class="row gx-5 global-parameter-row flex-wrap">
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Rolling Time Period</label>
                  <p class="summaryVehiclePara pt-1">
                    {{ data.rolling_time_period_years }}
                  </p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Analyze</label>
                  <p class="summaryVehiclePara pt-1">{{ data.analyze }}</p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Credit Base Method</label>
                  <p class="summaryVehiclePara pt-1">
                    {{ data.credit_base_method }}
                  </p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Distributions </label>
                  <p class="summaryVehiclePara pt-1">
                    {{ data.distributions }}
                  </p>
                </div>

                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Premium Charge</label>
                  <p
                    class="summaryVehiclePara pt-1"
                    v-if="data.premium_same_in_all_years"
                  >
                    {{ Number(data.premium_charge) }}%
                  </p>
                  <p
                    v-else
                    class="Schedule-para"
                    data-bs-toggle="modal"
                    data-bs-target="#showHistoricalScheduleModal"
                    @click="
                      setSchedule(
                        data.premium_charges_same_in_all_years,
                        'rate',
                        'Premium Charge'
                      )
                    "
                  >
                    Scheduled
                    <button type="button" class="schedule-icon-btn">
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.375"
                          y="0.375"
                          width="14.25"
                          height="12.25"
                          rx="0.625"
                          stroke="#0E6651"
                          stroke-width="0.75"
                        />
                        <rect
                          x="7.3125"
                          y="3.1875"
                          width="0.375"
                          height="9.625"
                          rx="0.1875"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="3.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 3.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="6.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 6.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="9.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 9.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name"
                    >Premium Charge Same in All Years?</label
                  >
                  <p class="summaryVehiclePara pt-1">
                    {{ data.premium_same_in_all_years ? "Yes" : "No" }}
                  </p>
                </div>

                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Loan Interest</label>
                  <p
                    class="summaryVehiclePara pt-1"
                    v-if="data.loan_same_in_all_years"
                  >
                    {{ Number(data.loan_intrest_rate) }}%
                  </p>
                  <p
                    v-else
                    class="Schedule-para"
                    data-bs-toggle="modal"
                    data-bs-target="#showHistoricalScheduleModal"
                    @click="
                      setSchedule(
                        data.loan_intrest_rate_same_in_all_years,
                        'rate',
                        'Loan Interest'
                      )
                    "
                  >
                    Scheduled
                    <button type="button" class="schedule-icon-btn">
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.375"
                          y="0.375"
                          width="14.25"
                          height="12.25"
                          rx="0.625"
                          stroke="#0E6651"
                          stroke-width="0.75"
                        />
                        <rect
                          x="7.3125"
                          y="3.1875"
                          width="0.375"
                          height="9.625"
                          rx="0.1875"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="3.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 3.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="6.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 6.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                        <rect
                          x="14.8125"
                          y="9.1875"
                          width="0.375"
                          height="14.625"
                          rx="0.1875"
                          transform="rotate(90 14.8125 9.1875)"
                          stroke="#0E6651"
                          stroke-width="0.375"
                        />
                      </svg>
                    </button>
                  </p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name"
                    >Loan Interest Same in All Years?</label
                  >
                  <p class="summaryVehiclePara pt-1">
                    {{ data.loan_same_in_all_years ? "Yes" : "No" }}
                  </p>
                </div>
                <div class="col-20 summaryInputsDiv mb-30">
                  <label for="client name">Loan Interest Charged</label>
                  <p class="summaryVehiclePara pt-1">
                    {{
                      data.loan_intrest_charged_in_advanced
                        ? "In Advance"
                        : "In Arrears"
                    }}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <historical-index-component
          tab="1"
          :data="data.index_strategy_1"
          :weighting="weighting.weight_1"
          @setSchedule="setSchedule"
          :col="column"
        />
        <historical-index-component
          tab="2"
          :data="data.index_strategy_2"
          :weighting="weighting.weight_2"
          @setSchedule="setSchedule"
          :col="column"
        />
        <historical-index-component
          tab="3"
          :data="data.index_strategy_3"
          :weighting="weighting.weight_3"
          @setSchedule="setSchedule"
          :col="column"
        />
      </div>
    </div>
    <performance-multiplier-modal
      :list="schedules"
      :type="scheduleType"
      :title="scheduleTitle"
    />
  </div>
</template>
<script>
import { authHeader } from "../../../services/helper";
import { getUrl } from "../../../network/url";
import { get } from "../../../network/requests";
import HistoricalIndexComponent from "../review/HistoricalIndexComponent.vue";
import PerformanceMultiplierModal from "../modal/PerformanceMultiplierModal.vue";
export default {
  props: ["id", "client", "scenarioId"],
  components: { HistoricalIndexComponent, PerformanceMultiplierModal },
  data() {
    return {
      data: false,
      schedules: [],
      scheduleType: "rate",
      scheduleTitle: "",
      weighting: {
        weight_1: 0,
        weight_2: 0,
        weight_3: 0,
      },
    };
  },
  methods: {
    setSchedule: function (data = [], type, title) {
      this.scheduleType = type;
      this.schedules = data;
      this.scheduleTitle = title;
    },
    getHistoricalData: function () {
      if (this.$props.id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("historical")}${this.$props.id}/`, authHeader())
          .then((response) => {
            this.$store.dispatch("loader", false);
            let detail = response.data.data;
            this.data = detail;
            if (this.data.index_strategy_3) {
              this.weighting = this.data.index_strategy_3.strategy_weight;
            } else if (this.data.index_strategy_2) {
              this.weighting = this.data.index_strategy_2.strategy_weight;
            } else {
              this.weighting = this.data.index_strategy_1.strategy_weight;
            }
          })
          .catch((error) => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            }
            this.$store.dispatch("loader", false);
          });
      }
    },
  },
  mounted() {
    if (this.$props.id) {
      this.getHistoricalData(this.$props.id);
    }
  },
  watch: {
    "$props.id"(e) {
      this.getHistoricalData(e);
    },
  },
  computed: {
    column() {
      let index = 1;
      if (this.data.index_strategy_2) {
        index = 2;
      }

      if (this.data.index_strategy_3) {
        index = 3;
      }
      return `col-lg-${12 / index}`;
    },
  },
};
</script>
<style lang=""></style>
