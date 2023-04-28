<template>
  <div class="modal fade common-modal" ref="createReportModal"  id="reportCreateModal" tabindex="-1" aria-labelledby="reportCreateModalLabel"  aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef">
            <img  src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <form class="modal-body">
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv">
              <button class="modalReportBuilderBr">Br</button>
              <h2 class="modalReportBuilderBrTxt">Bryant, Roger <span>Allianz Parse</span></h2>
            </div>
          </div>
          <div class="modalParaBorderDiv text-center">
            <p class="modalParaReportBuilder">Report Builder</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5">
            <div class="form-group">
              <label for="existingScenario" class="fs-14 bold-fw">Scenario</label>
              <div class="p-relative">
                <input type="text" id="existingScenario" placeholder="Select or Start Typing"  class="form-control pe-5 autocomplete" autocomplete="off"/>
                <span class="chevron-span">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"  fill="black" />
                    <path  d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"  fill="black" />
                  </svg>
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="reportBulder" class="fs-14 bold-fw">Name Report</label>
              <input type="text" class="form-control custom-control" >
            </div>
          </div>
          <div class="text-center gap-13 pt-4 mt-2 pb-2">
            <button type="button" class="btn yes-delete-btn">Build Report</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { get, post } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, mapClientList } from "../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";

export default {
  components: { SelectDropdown },
  refs: ["closeModalRef"],
  data() {
    return {
      errors: [],
      clientId: "",
      clientName: "",
      scenarioId: "",
      scenarioName: "",
      reportName: "",
      description: "",
      allScenarioIds: [],
    };
  },
  mounted() {
    if (!this.$route.params.report && this.$route.query.client) {
      new bootstrap.Modal(this.$refs.createReportModal).show();
      if (this.$store.state.data.clients) {
        this.allScenarioIds = this.getScenarioIds(list);
      } else {
        this.getClient();
      }

      // get existing scenario details
      if (!this.$store.state.data.templates.scenario_details) {
        this.scenarioDetails();
      }
    }
  },
  methods: {
    testFunction: function() {
      this.$router.push("/report-builder/12");
    },
    getScenarioId: function(sid) {
      var data = this.allScenarioIds;
      data = data.filter(i => i.detail_id === sid)[0] || [];
      return data.scenario_id;
    },
    createReport: function(e) {
      e.preventDefault();

      let data = {
        client: this.clientId,
        scenario: this.getScenarioId(this.scenarioId),
        name: this.reportName,
        description: this.description,
      };
      console.log(data);
      this.$store.dispatch("loader", true);
      post(`${getUrl("add-report")}`, data, authHeader())
        .then(response => {
          console.log(response.data);
          this.$toast.success(response.data.message);
          this.$refs.closeModalRef.click();
          this.$store.dispatch("loader", false);
          this.$router.push("/report-builder/" + response.data.data.id);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    // get clients detail from API
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("clients"), authHeader())
        .then(response => {
          let list = mapClientList(response.data.data);
          this.allScenarioIds = this.getScenarioIds(list);
          this.$store.dispatch("clients", list);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error.message);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    getScenarioIds: function(data = []) {
      let allDetails = [];
      data.forEach(element => {
        allDetails = [...allDetails, ...element.scenarios];
      });
      return allDetails.map(i => {
        return { scenario_id: i.id, detail_id: i.scenario_details.id || null };
      });
    },
    scenarioDetails: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-scenario-detail"), authHeader())
        .then(response => {
          this.$store.dispatch("template", {
            type: "scenario_details",
            data: response.data.data,
          });
          this.$store.dispatch("loader", false);
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
    },
  },
  computed: {
    // existing client dropdown list data
    clients() {
      let initClient = [];
      let array = this.$store.state.data.clients;
      let df_client = this.$route.query.client;

      if (array && array.length > 0) {
        array.forEach(element => {
          var name = `${element.firstname}${
            element.middlename ? ` ${element.middlename}` : ""
          }${element.lastname ? ` ${element.lastname}` : ""}`;

          let df_client = this.$route.query.client;
          if (Number(df_client) === element.id) {
            this.setInputWithId("clientAge", element.age);
            this.clientAgeYearToIllustrate = element.age;
          }
          initClient.push({
            id: Number(element.id),
            template_name: name,
          });
        });
      }
      return initClient;
    },
    // existing scenario details dropdown list data
    scenarioList() {
      let array = this.$store.state.data.templates.scenario_details || [];
      return array;
    },
  },
};
</script>