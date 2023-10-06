<template lang="">
    <div>
        <div :class="`container my-5 darkbgClrDiv ${data ? '':'d-none'}`">
            <div class="summary-heading">
                <p><span>2 </span>Illustration Data</p>
                <router-link :to="`/illustration-data/${$route.params.scenario}?review=true`" class="editbtnCommonAncor">
                    <button class="btn editBtnCommon">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                            <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                            <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div class="container-fluid summary-editBox py-4">
                <form action="">
                    <div class="row">
                        <div class="col-md-2 summaryInputsDiv">
                            <label for="client name">Insurance Company</label>
                            <input type="text" class="form-control" :value="data.insurance_company" readonly>
                        </div>
                        <div class="col-md-2 summaryInputsDiv">
                            <label for="client name">Insurance Policy Name</label>
                            <input type="text" class="form-control" :value="data.insurance_policy_name" readonly>
                        </div>
                        <div class="col-md-2 summaryInputsDiv">
                            <label for="client name">Policy Nickname</label>
                            <input type="text" class="form-control" :value="data.insurance_policy_nickname" readonly>
                        </div>
                        <div class="col-md-2 summaryInputsDiv">
                            <label for="client name">Illustration Return</label>
                            <input type="text" class="form-control" :value="`${Number(data.initial_policy_return || 0).toFixed(2)}%`" readonly>
                        </div>
                        <div class="col-md-2 summaryInputsDiv">
                            <label for="client name">Initial Death Benefit</label>
                            <input type="text" class="form-control" :value="`$${Number(data.initial_death_benifit).toLocaleString()}`" readonly>
                        </div>
                        <div class="col-md-2 illustrationPdfCol" v-for="(item, index) in illustrationFiles" :key="index">
                          <a :href="item.s3_url" class="illustrationPdfAncor illustrationPdfDiv btn" target="_blank">
                                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <rect x="0.75" y="0.75" width="16.5" height="19.5" rx="1.25" fill="white" stroke="#0E6651" stroke-width="1.5" />
                                      <rect x="3.375" y="9.375" width="10.25" height="0.75" rx="0.375" fill="white" stroke="#0E6651" stroke-width="0.75" />
                                      <rect x="3.375" y="15.375" width="11.25" height="0.75" rx="0.375" fill="white" stroke="#0E6651" stroke-width="0.75" />
                                      <rect x="3.375" y="12.375" width="7.25" height="0.75" rx="0.375" fill="white" stroke="#0E6651" stroke-width="0.75" />
                                      <rect x="3.375" y="5.375" width="6.25" height="0.75" rx="0.375" fill="white" stroke="#0E6651" stroke-width="0.75" />
                                  </svg>
                                  &nbsp;<span>{{item.name}}</span>
                          </a>
                        </div>
                    </div>
                </form>
                <div class="container-fluid">
                    <div class="row" v-if="illustration">
                        <div class="col-md-12 illusnTableMainDiv">
                            <div id="illustrationScheduleRateTable" class="illustrationScheduleRateTable" :style="{'overflow-x': 'auto', 'overflow-y': 'hidden', 'width': '100%', 'height': showAll ? '' : '300px'}">
                            <table :class="`table ${showAll ? 'showAll' : ''}`" >
                                <thead>
                                    <th v-for="(header, key) in illustration.headers" :key="key">{{illustrationFields[header]}}</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(items, index) in illustration.data" :key="index">
                                        <td v-for="(item, i) in items" :key="i" data-label="Year">{{item}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <div> 
                                <button class="btn form-control mt-2" @click="handleTable">+ SEE {{showAll ? 'LESS' : 'ALL'}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { authHeader } from "../../../services/helper";
import { getUrl } from "../../../network/url";
import { get } from "../../../network/requests";
export default {
  props: ["id", "client", "scenarioId"],
  data() {
    return {
      data: false,
      illustration: false,
      illustrationFiles: [],
      showAll: false,
    };
  },
  methods: {
    handleTable: function() {
      this.showAll = !this.showAll;
      document.getElementById("illustrationScheduleRateTable").scrollIntoView();
    },
    getIllustrationData: function() {
      if (this.$props.id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("illustration")}${this.$props.id}`, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            let detail = response.data.data;
            this.data = detail;
            if (detail.illustration_data.copy_paste_checkbox) {
              this.illustration = detail.illustration_data.copy_paste;
            } else {
              this.illustration = detail.illustration_data.upload_from_file;
            }
          })
          .catch(error => {
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
    getIllsutrationFiles: function() {
      get(getUrl("illustration-files"), authHeader())
        .then(response => {
          this.illustrationFiles = response.data.results.filter(i => i.scenario_id === Number(this.$route.params.scenario));
        })
    },
  },
  mounted() {
    if (this.$props.id) {
      this.getIllustrationData(this.$props.id);
    }
    this.getIllsutrationFiles();
  },
  watch: {
    "$props.id"(e) {
      this.getIllustrationData(e);
    },
  },
  computed: {
    illustrationFields() {
      return {
        none: "None",
        age: "Age",
        account_value: "Accumulation Value",
        distribution_loan: "Distribution - Loan",
        death_benefit: "Death Benefit",
        distributions: "Distribution - Withdrawal",
        total_loan_charge: "Fees",
        premium_outlay: "Premium",
        surrender_value: "Surrender Value",
        year: "Year",
      };
    },
  },
};
</script>
