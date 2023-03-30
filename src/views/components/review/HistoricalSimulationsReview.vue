<template lang="">
    <div :class="`container my-5 darkbgClrDiv ${data ? '':'d-none'}`">
        <div class="summary-heading">
            <p><span>4 </span>Historical Simulations</p>
            <router-link :to="`/historical-simulations/${$route.params.scenario}?review=true`" class="editbtnCommonAncor"><button
                    class="btn editBtnCommon">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none"  xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                        <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                        <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                    </svg>
                </button></router-link>
        </div>
        <div class="container-fluid summary-editBox py-4">
            <div class="row">
                <historical-index-component tab="1" :data="data.index_strategy_1" @setSchedule="setSchedule"/>
                <historical-index-component tab="2" :data="data.index_strategy_2" @setSchedule="setSchedule"/>
                <historical-index-component tab="3" :data="data.index_strategy_3" @setSchedule="setSchedule"/>
            </div>
        </div>
        <performance-multiplier-modal :list="schedules" :type="scheduleType" :title="scheduleTitle"/>
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
      scheduleType: 'rate',
      scheduleTitle: '',
    };
  },
  methods: {
    setSchedule: function(data = [], type, title) {
      this.scheduleType = type;
      this.schedules = data;
      this.scheduleTitle = title
    },
    getHistoricalData: function() {
      if (this.$props.id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("historical")}${this.$props.id}`, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            let detail = response.data.data;
            console.log(detail);
            this.data = detail;
          })
          .catch(error => {
            console.log(error);
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
};
</script>
<style lang="">
</style>