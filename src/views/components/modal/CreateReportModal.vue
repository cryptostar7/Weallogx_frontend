<template>
  <div class="modal fade common-modal" ref="createReportModal"  id="reportCreateModal" tabindex="-1" aria-labelledby="reportCreateModalLabel"  aria-hidden="true"  data-bs-backdrop='static'>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="closeModalRef" @click="handleModal">
            <img  src="@/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal">
          </button>
        </div>
        <form class="modal-body" @submit="createReport">
          <div class="d-flex align-items-center justify-content-center w-100">
            <div class="d-flex align-items-center section-heading-bg modalHeadingDiv" v-if="client">
              <button class="modalReportBuilderBr">{{$sortName(client.firstname, client.lastname, client.middlename)}}</button>
              <h2 class="modalReportBuilderBrTxt">{{$clientName(client.firstname, client.lastname, client.middlename)}} <span>Age {{client.age || ''}}</span></h2>
            </div>
          </div>
          <div class="modalParaBorderDiv text-center">
            <p class="modalParaReportBuilder">Report Builder</p>
            <p class="modalSmallborder"></p>
          </div>
          <div class="px-5">
            <SelectDropdown :list="scenarioList" label="Scenario" id="existingScenarioReport" :error="errors.scenario" @clearError="() => errors.scenario = false" @onSelectItem="id => scenarioId = id" @inputText="name => scenarioName = name"/>
            <div class="form-group">
              <label for="reportBulder" class="fs-14 bold-fw">Name Report</label>
              <input type="text" class="form-control custom-control" v-model="reportName" @keyup="errors.report_name = ''">
              <small class="text-danger" v-if="errors.report_name">{{errors.report_name[0]}}</small>
            </div>
            <div class="form-group">
              <label for="reportBulder" class="fs-14 bold-fw">Descriptions</label>
              <textarea class="form-control custom-control" v-model="description"></textarea>
            </div>
          </div>
          <div class="text-center gap-13 pt-4 mt-2 pb-2">
            <button class="btn yes-delete-btn">Build Report</button>
            <!-- <button type="button" @click="testFunction" class="btn yes-delete-btn">Test Function</button> -->
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
      response: false,
      clientName: "",
      scenarioId: "",
      scenarioName: "",
      reportName: "",
      description: "",
    };
  },
  mounted() {
    if (!this.$route.params.report && !this.$route.query.scenario && this.$route.query.client) {
      new bootstrap.Modal(this.$refs.createReportModal).show();
      if (!this.$store.state.data.clients) {
        this.getClient();
      }
    }
  },
  methods: {
    testFunction: function() {
      console.log(this.$route.query);
    },
    validateForm: function() {
      var validate = true;
      if (!this.$route.query.client) {
        validate = false;
        this.$toast.error("Invalid client detail.");
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
    handleModal: function() {
      if (!this.response) {
        this.$router.go(-1);
      }
    },
    createReport: function(e) {
      e.preventDefault();

      let data = {
        client: this.$route.query.client,
        scenario: this.scenarioId,
        name: this.reportName,
        description: this.description,
      };

      if (!this.validateForm()) {
        console.log(this.errors);
        return false;
      }

      this.$store.dispatch("loader", true);
      post(`${getUrl("add-report")}`, data, authHeader())
        .then(response => {
          console.log(response.data);
          this.response = true;
          this.$toast.success(response.data.message);
          this.getClient(true);
          this.$refs.closeModalRef.click();
          this.$store.dispatch("loader", false);
          window.location.href = "/report-builder/" + response.data.data.id;
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
    getClient: function(update = false) {
      if (!update) {
        this.$store.dispatch("loader", true);
      }
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
    // client detail
    client() {
      return this.$store.getters.getClientUsingId(this.$route.query.client);
    },
    // scenario dropdown list data
    scenarioList() {
      let data = this.$store.state.data.clients || [];
      let allDetails = [];
      if (this.$route.query.client) {
        data = data.filter(i => i.id === Number(this.$route.query.client));
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