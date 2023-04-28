<template>
  <div class="modal fade common-modal" ref="createReportModal2" id="reportCreateModal2" tabindex="-1" aria-labelledby="reportCreateModal2Label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef">
            <img src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <form class="modal-body" @submit="createReport">
          <div class="d-flex align-items-center justify-content-center w-100 d-none">
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
            <form action="">
              <SelectDropdown :list="clients" label="Client" id="clientSelectedReport" :error="errors.client" @clearError="() => errors.client = false" @onSelectItem="id => clientId = id" @inputText="name => clientName = name"/>
              <SelectDropdown :list="scenarioList" label="Scenario" id="existingScenarioReport" :error="errors.existing_details" @clearError="() => errors.existing_details = false" @onSelectItem="id => scenarioId = id" @inputText="name => scenarioName = name"/>
              <div class="form-group">
                <label for="reportBulder" class="fs-14 bold-fw">Name Report</label>
                <input type="text" class="form-control custom-control" autocomplete="off" v-model="reportName">
              </div>
            </form>
          </div>
          <div class="gap-13 pt-4 mt-2 pb-2 text-center">
            <button type="submit" class="btn yes-delete-btn">Build Report</button>
            <button type="button" class="btn yes-delete-btn d-none" @click="testFunction()">Test Report</button>
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
    if (!this.$route.params.report && !this.$route.query.client) {
      new bootstrap.Modal(this.$refs.createReportModal2).show();
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
