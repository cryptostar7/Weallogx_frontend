<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="active">
          <router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Illustration Data</a>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Comparative Vehicles</a>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Historical Simulations</a>
        </li>
      </ul>
      <router-link to="/">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" />
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2">
                  New Scenario
                </h2>
              </div>
            </div>
            <form class="form-wrapper side-grey-line" @submit="submitHandler">
              <div class="form-wrapper-inner">
                <SelectDropdown :list="clients" label="Client" id="clientSelected" @onSelectItem="setExistingClientId"/>
                <hr class="hr-separator" size="1.25" />
                <SelectDropdown :list="existingScenarioList" label="Use Existing Scenario" id="existingScenario" @onSelectItem="setExistingScenarioDetailId"/>
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">
                  Create From Scratch
                </h4>
                <div class="form-group pt-2 less">
                  <label for="scenarioName" class="fs-12 medium-fw">Scenario Name</label>
                  <input type="text" id="scenarioName" v-model="scenarioName" class="form-control" />
                </div>
                <div class="form-group less">
                  <div class="
                      label-group
                      d-flex
                      justify-content-between
                      align-items-center
                    ">
                    <label for="scenarioDesc" class="fs-12 medium-fw">Description</label>
                    <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                  </div>
                  <textarea name="" id="scenarioDesc" v-model="scenarioDescription" cols="30" rows="2" class="form-control"></textarea>
                </div>

                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label for="clientAge" class="fs-12 medium-fw">Client Age
                      <span class="regular-fw">Year 1 age on illustration</span></label>
                    <input type="number" id="clientAge" maxlength="3"  class="form-control setMaxLimit" v-model="clientAgeYearToIllustrate" />
                  </div>
                  <div class="form-group">
                    <label for="illustratedAge" class="fs-12 medium-fw"># Years to Illustrate</label>
                    <div class="year-input-div">
                      <input type="number" id="illustratedAge" v-model="illustrateYear" max="20" class="form-control year-input"/>
                      <span class="year-span">years</span>
                    </div>
                  </div>            
                </div>

                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="simpleTaxRate-tab" @click="() => simpleTaxRate = true" data-bs-toggle="tab"
                      data-bs-target="#simpleTaxRate" type="button" role="tab" aria-controls="simpleTaxRate"
                      aria-selected="true">
                      <svg class="simpleTaxRateImg" width="9" height="14" viewBox="0 0 9 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="0.5" y="9.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="1.25" y="6.75" width="6.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                      </svg>
                      &nbsp;Simple Tax Rate
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="scheduleTaxRate-tab" @click="() => simpleTaxRate = false" data-bs-toggle="tab"
                      data-bs-target="#scheduleTaxRate" type="button" role="tab" aria-controls="scheduleTaxRate"
                      aria-selected="false">
                      <svg class="scheduleTaxRateImg" width="9" height="10" viewBox="0 0 9 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="0.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="3.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="6.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                        <rect x="0.25" y="9.25" width="8.5" height="0.5" rx="0.25" fill="white" stroke="black"
                          stroke-width="0.5" />
                      </svg>
                      &nbsp;Schedule Tax Rate
                    </button>
                  </li>
                </ul>

                <div class="tab-content pt-3 mt-1">
                  <div class="tab-pane fade show active" id="simpleTaxRate" role="tabpanel"
                    aria-labelledby="simpleTaxRate-tab">
                    <div class="form-group-wrapper">
                      <div class="form-group">
                        <label for="firstTaxRate" class="fs-12 medium-fw">First Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="number" id="firstTaxRate" class="form-control" v-model="firstTaxRate" />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRate" class="fs-12 medium-fw">Second Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="text" id="secondTaxRate"
                            class="form-control"
                            :disabled="firstTaxRate ? false : true" />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRateYear" class="fs-12 medium-fw">Second Tax Rate Year</label>
                        <select name="" id="secondTaxRateYear" class="form-select form-control"
                          :disabled="firstTaxRate ? false : true">
                          <option value=""></option>
                          <option v-if="Number(illustrateYear)" v-for="(item, index) in illustrateYear" :key="index" value="">{{item}}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="scheduleTaxRate" role="tabpanel" aria-labelledby="scheduleTaxRate-tab">
                    <SelectDropdown :list="existingScheduleList" label="Use Existing Schedule" id="existingSchedule" />
                    <div class="form-group max-width-320">
                      <table class="table tax-rate-table text-center" id="scheduleTaxRateTable">
                        <thead>
                          <tr>
                            <th width="50%">Year</th>
                            <th width="50%">Tax Rate %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="!Number(illustrateYear)">
                            <td><br /></td>
                            <td><br /></td>
                          </tr>
                          <tr v-for="index in Number(illustrateYear)" :key="index">
                            <td>
                              <div class="fs-15">{{index}}</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div">
                                <input type="text" class="form-control percent-input">
                                <span class="percent-span">%</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="pb-3">
                        <div class="form-check form-switch custom-switch pt-2">
                          <input class="form-check-input" type="checkbox" role="switch" v-model="saveTemplate"
                            id="scheduleTemplateCheckbox" />
                          <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scheduleTemplateCheckbox">Save
                            this Schedule as Template</label>
                        </div>

                        <div class="form-group pt-2" id="templateNameDiv"
                          :style="{'display': saveTemplate ? '' : 'none'}">
                          <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                          <input type="text" id="templateName" class="form-control" value="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mt-30">
                <button class="nav-link btn form-next-btn active fs-14" type="submit">Next</button>
                <!-- <router-link to="/illustration-data" class="nav-link btn form-next-btn active fs-14"
                  disabled="true">Next</router-link> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { get } from "./../../../network/requests";
import { getUrl } from "./../../../network/url";
import { authHeader } from "./../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown },
  data() {
    return {
      existingClientId: false,
      existingScenarioDetailId: false,
      scenarioName: "",
      scenarioDescription: "",
      clientAgeYearToIllustrate: "",
      simpleTaxRate: true,
      existingScenarioList: [
        { id: 1, name: "Scenario 1" },
        { id: 2, name: "Scenario 2" },
        { id: 3, name: "Scenario 3" },
        { id: 4, name: "Scenario 4" },
        { id: 5, name: "Scenario 5" },
      ],
      existingScheduleList: [
        { id: 1, name: "Schedule 1" },
        { id: 2, name: "Schedule 2" },
        { id: 3, name: "Schedule 3" },
        { id: 4, name: "Schedule 4" },
        { id: 5, name: "Schedule 5" },
      ],
      saveTemplate: false,
      illustrateYear: "",
      firstTaxRate: "",
    };
  },
  mounted() {
    // get existing client
    if (!this.$store.state.data.clients) {
      this.getClient();
    }
    // get existing scenario details
    if (!this.$store.state.data.templates.scenario_details) {
      // this.getExistingScenarioDetails();
    }
  },
  methods: {
    setExistingClientId: function(id) {
      // set existing client id on selecting the input dropdown data
      this.existingClientId = id;
    },
    setExistingScenarioDetailId: function(id) {
      // set existing scenario detail id on selecting the input dropdown data
      this.existingScenarioDetailId = id;
    },
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("client"), authHeader())
        .then(response => {
          this.$store.dispatch("clients", response.data.data);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
        });
    },
    getExistingScenarioDetails: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-scenario-detail"), authHeader())
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("template", {
            type: "scenario_details",
            data: response.data.data,
          });
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
        });
    },
    submitHandler: function(e) {
      e.preventDefault();
      var data = {
        existing_client_id: this.existingClientId,
        existing_scenario_detail_id: this.existingScenarioDetailId,
        simple_tax_rate_checkbox:this.simpleTaxRate,
        scenario_name:this.scenarioName,
        description:this.scenarioDescription,
        client_age_on_illustration:this.clientAgeYearToIllustrate,
        years_to_illustrate:this.illustrateYear,
      };
      console.log(data);
    },
  },
  computed: {
    // existing client dropdown list data
    clients() {
      let initClient = [];
      let array = this.$store.state.data.clients;
      if (array && array.length > 0) {
        array.forEach(element => {
          var name = `${element.firstname}${
            element.middlename ? ` ${element.middlename}` : ""
          }${element.lastname ? ` ${element.lastname}` : ""}`;
          initClient.push({ id: element.id, name: name });
        });
      }
      return initClient;
    },

    // existing scenario details dropdown list data
    scenarioDetailTemplates() {
      let initClient = [];
      let array = this.$store.state.data.clients;
      if (array && array.length > 0) {
        array.forEach(element => {
          var name = `${element.firstname}${
            element.middlename ? ` ${element.middlename}` : ""
          }${element.lastname ? ` ${element.lastname}` : ""}`;
          initClient.push({ id: element.id, name: name });
        });
      }
      return initClient;
    },
  },
};
</script>