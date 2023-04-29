<template>
  <div class="modal fade common-modal" ref="createReportModal2" id="reportCreateModal2" tabindex="-1" aria-labelledby="reportCreateModal2Label" aria-hidden="true" data-bs-backdrop='static'>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef" @click="handleModal()">
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
              <SelectDropdown :list="clients" label="Client" id="clientSelectedReport" :error="errors.client" @clearError="() => errors.client = false" @onSelectItem="id => clientId = id" @inputText="seClientName"/>
              <SelectDropdown :list="scenarioList" label="Scenario" id="existingScenarioReport" :error="errors.scenario" @clearError="() => errors.scenario = false" :clearInput="clearScenario" @setClearedInput="(val) => clearScenario = val" @onSelectItem="id => scenarioId = id" @inputText="name => scenarioName = name"/>
              <div class="form-group">
                <label for="reportBulder" class="fs-14 bold-fw">Name Report</label>
                <input type="text" class="form-control custom-control" autocomplete="off" v-model="reportName" @keyup="errors.report_name = ''">
                  <small class="text-danger" v-if="errors.report_name">{{errors.report_name[0]}}</small>
              </div>
              <div class="form-group">
                <label for="reportBulder" class="fs-14 bold-fw">Descriptions</label>
                <textarea class="form-control custom-control" v-model="description"></textarea>
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
import { validate } from "vee-validate";

export default {
  components: { SelectDropdown },
  refs: ["closeModalRef"],
  data() {
    return {
      errors: [],
      clientId: "",
      response: false,
      clientName: "",
      scenarioId: "",
      scenarioName: "",
      reportName: "",
      description: "",
      clearScenario: 0,
    };
  },
  mounted() {
    if (!this.$route.params.report && !this.$route.query.client) {
      new bootstrap.Modal(this.$refs.createReportModal2).show();
      if (!this.$store.state.data.clients) {
        this.getClient();
      }
    }
  },
  methods: {
    handleModal: function() {
      if (!this.response) {
        this.$router.go(-1);
      }
    },
    testFunction: function() {
      console.log(this.validateForm());
    },
    seClientName: function(name) {
      this.clientName = name;
      let checkClient = this.clients.filter(
        item => item.template_name.toLowerCase() === name.trim().toLowerCase()
      )[0];
      if (checkClient) {
        this.clientId = checkClient.id;
      } else {
        this.clientId = "";
      }
      this.clearScenario = 1;
    },
    validateForm: function() {
      var validate = true;
      if (!this.clientName) {
        this.errors.client = ["This field is required."];
        validate = false;
      } else {
        if (!this.clientName) {
          this.errors.client = "";
        } else {
          let templateId = this.$getTemplateId(this.clientName, this.clients);
          if (!templateId) {
            validate = false;
            this.errors.client = ["Please choose a valid client."];
          } else {
            this.clientId = templateId;
            this.errors.client = "";
          }
        }
      }

      if (!this.scenarioName) {
        this.errors.scenario = ["This field is required."];
        validate = false;
      } else {
        if (!this.scenarioName) {
          this.errors.scenario = "";
        } else {
          let templateId = this.$getTemplateId(
            this.scenarioName,
            this.scenarioList
          );
          if (!templateId) {
            validate = false;
            this.errors.scenario = ["Please choose a valid scenario."];
          } else {
            this.scenarioId = templateId;
            this.errors.scenario = "";
          }
        }
      }

      if (!this.reportName) {
        this.errors.report_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.report_name = "";
      }

      return validate;
    },
    createReport: function(e) {
      e.preventDefault();

      if (!this.validateForm()) {
        console.log(this.errors);
        return false;
      }

      let data = {
        client: this.clientId,
        scenario: this.scenarioId,
        name: this.reportName,
        description: this.description,
      };

      this.$store.dispatch("loader", true);
      post(`${getUrl("add-report")}`, data, authHeader())
        .then(response => {
          console.log(response.data);
          this.response = true;
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
    // scenario dropdown list data
    scenarioList() {
      let data = this.$store.state.data.clients || [];
      let allDetails = [];
      if (this.clientId) {
        data = data.filter(i => i.id === this.clientId);
        data.forEach(element => {
          allDetails = [...allDetails, ...element.scenarios];
        });
        return allDetails.map(i => {
          return {
            id: i.id || null,
            template_name: i.scenario_details.name || null,
          };
        });
      } else {
        return [];
      }
    },
  },
};
</script>
