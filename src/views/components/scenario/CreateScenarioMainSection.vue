<template>
  <section class="main-section">
     <scenario-steps />
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
            <form class="form-wrapper side-grey-line" novalidate @submit="submitHandler" autocomplete="off">
              <div class="form-wrapper-inner">
                <SelectDropdown :list="clients" label="Client" id="clientSelected" :addNewClient="true" :defaultSelected="defaultClient.template_name" :error="errors.client" @clearError="() => errors.client = false" @onSelectItem="setExistingClientId" @inputText="setExistingClientName"/>
                <hr class="hr-separator" size="1.25" />
                <SelectDropdown :list="existingScenarioList" label="Use Existing Scenario" id="existingScenario" :error="errors.existing_details" @clearError="() => errors.existing_details = false" :clearInput="detailTemplateInput" @setClearedInput="() => detailTemplateInput = 0" @onSelectItem="setExistingScenarioDetailId" @inputText="setExistingScenarioDetailName"/>
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">Create From Scratch</h4>
                <div class="form-group pt-2 less">
                  <label for="scenarioName" class="fs-12 medium-fw">Scenario Name</label>
                  <input type="text" id="scenarioName" v-model="scenarioName" class="form-control" @keyup="() => {clearDetailTemplate(); errors.scenario_name = false}" />
                  <label class="error" v-if="errors.scenario_name">{{errors.scenario_name[0]}}</label>
                </div>
                <div class="form-group less">
                  <div class="label-group d-flex justify-content-between align-items-center">
                    <label for="scenarioDesc" class="fs-12 medium-fw">Description</label>
                    <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                  </div>
                  <textarea name="" id="scenarioDesc" v-model="scenarioDescription" cols="30" rows="2" class="form-control" @keypress="() => {clearDetailTemplate(); errors.description = false}"></textarea>
                  <label class="error" v-if="errors.description">{{errors.description[0]}}</label>
                </div>
                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label for="clientAge" class="fs-12 medium-fw">Client Age <span class="regular-fw">(Year 1 age on illustration)</span></label>
                    <input type="number" class="form-control handleLimit" id="clientAge" min="1" max="100" @keyup="() => {updateClientAge(); clearDetailTemplate(); errors.client_age_year = false}"/>
                    <label class="error" v-if="errors.client_age_year">{{errors.client_age_year[0]}}</label>
                  </div>
                  <div class="form-group">
                    <label for="illustratedAge" class="fs-12 medium-fw"># Years to Illustrate</label>
                    <div class="year-input-div">
                      <input type="number" id="illustratedAge" max="100" class="form-control handleLimit" @keyup="() =>  {updateScheduleRate(); clearDetailTemplate(); errors.illustrate_year = false}"/>
                      <span class="year-span">years</span>
                    </div>
                    <label class="error" v-if="errors.illustrate_year">{{errors.illustrate_year[0]}}</label>
                  </div>            
                </div>

                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button :class="`nav-link ${simpleTaxRate ? 'active':''}`" id="simpleTaxRate-tab" @click="() => {clearDetailTemplate(); simpleTaxRate = true}" data-bs-toggle="tab"  data-bs-target="#simpleTaxRate" type="button" role="tab" aria-controls="simpleTaxRate"  aria-selected="true">
                      <svg class="simpleTaxRateImg" width="9" height="14" viewBox="0 0 9 14" fill="none"  xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="0.5" y="9.5" width="8" height="4" rx="0.5" stroke="black" />
                        <rect x="1.25" y="6.75" width="6.5" height="0.5" rx="0.25" fill="white" stroke="black"  stroke-width="0.5" />
                      </svg>
                      &nbsp;Simple Tax Rate
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button :class="`nav-link ${simpleTaxRate ? '':'active'}`" id="scheduleTaxRate-tab" @click="() => {clearDetailTemplate(); simpleTaxRate = false}" data-bs-toggle="tab" data-bs-target="#scheduleTaxRate" type="button" role="tab" aria-controls="scheduleTaxRate"  aria-selected="false">
                      <svg class="scheduleTaxRateImg" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <div :class="`tab-pane fade ${simpleTaxRate ? 'show active':''}`" id="simpleTaxRate" role="tabpanel"  aria-labelledby="simpleTaxRate-tab">
                    <div class="form-group-wrapper">
                      <div class="form-group">
                        <label for="firstTaxRate" class="fs-12 medium-fw">First Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="number" id="firstTaxRate" @keyup="() => {updateFirstTaxRate(); clearDetailTemplate(); errors.first_tax = false}" :class="`form-control handleLimit ${errors.first_tax ? 'required' : ''}`" min="1" max="99"/>
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRate" class="fs-12 medium-fw">Second Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="number" id="secondTaxRate" :class="`form-control handleLimit ${errors.second_tax ? 'required' : ''}`" @keyup="() => {clearDetailTemplate(); errors.second_tax = false}" min="1" max="100"  :disabled="firstTaxRate ? false : true" />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRateYear" class="fs-12 medium-fw">Second Tax Rate Year</label>
                        <select name="" id="secondTaxRateYear" v-model="secondTaxRateYear" :class="`form-select form-control  ${errors.second_tax_year ? 'required' : ''}`" @keyup="() => {clearDetailTemplate(); errors.second_tax_year = false}" :disabled="firstTaxRate ? false : true">
                          <option value=""></option>
                          <option v-if="Number(illustrateYear)" v-for="(item, index) in Number(Number(illustrateYear).toFixed(0))" :key="index" :value="item">{{item}}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div :class="`tab-pane fade ${simpleTaxRate ? '':'show active'}`" id="scheduleTaxRate" role="tabpanel" aria-labelledby="scheduleTaxRate-tab">
                    <SelectDropdown :list="existingScheduleList" label="Use Existing Schedule" id="existingSchedule" :error="errors.existing_schedule" @clearError="() => errors.existing_schedule = false" :clearInput="scheduleTemplateInput" @setClearedInput="() => scheduleTemplateInput = 0" @onSelectItem="setExistingScenarioScheduleId" @inputText="setExistingScenarioScheduleName"/>
                    <div class="form-group max-width-320">
                    <label class="error" v-if="errors.tax_rate">{{errors.tax_rate[0]}}</label>
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
                          <tr v-for="index in 100" :key="index" :class="Number(illustrateYear) >= index ? '':'d-none'">
                            <td>
                              <div class="fs-15">{{index}}</div>
                            </td>
                            <td>
                              <div class="p-relative table-input-div percent-input-div">
                                <input type="number" class="form-control handleLimit" :id="`schedule_tax_rate_${index}`" min="1" max="99" @keyup="checkTaxRate()"/>
                                <span class="percent-span">%</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="pb-3">
                        <div class="form-check form-switch custom-switch pt-2">
                          <input class="form-check-input" type="checkbox" role="switch" :disabled="existingScenarioScheduleName ? true : false" v-model="saveScheduleTemplate" id="scheduleTemplateCheckbox" />
                          <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scheduleTemplateCheckbox">Save this Schedule as Template</label>
                        </div>
                        <div class="form-group pt-2" id="templateNameDiv" :style="{'display': saveScheduleTemplate ? '' : 'none'}">
                          <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                          <input type="text" id="templateName" class="form-control" :disabled="existingScenarioScheduleName ? true : false" v-model="scheduleTemplate" @keyup="errors.schedule_template = false"/>
                          <label class="error" v-if="errors.schedule_template">{{errors.schedule_template[0]}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="pb-3">
                    <div class="form-check form-switch custom-switch pt-2">
                      <input class="form-check-input" type="checkbox" role="switch" :disabled="existingScenarioDetailName ? true : false" v-model="saveDetailsTemplate" id="scenarioTemplateCheckbox" />
                      <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scenarioTemplateCheckbox">Save this Scenario Detail as Template</label>
                    </div>
                    <div class="form-group pt-2" id="templateNameDiv" :style="{'display': saveDetailsTemplate ? '' : 'none'}">
                      <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                      <input type="text" id="templateName" class="form-control" :disabled="existingScenarioDetailName ? true : false" v-model="detailsTemplate" @keyup="errors.details_template = false"/>
                      <label class="error" v-if="errors.details_template">{{errors.details_template[0]}}</label>
                    </div>
                  </div>
              </div>
              <div class="text-center mt-30">
                <button class="nav-link btn form-next-btn active fs-14" type="submit">Next</button>
                <!-- <router-link to="/illustration-data" class="nav-link btn form-next-btn active fs-14" disabled="true">Next</router-link> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { get, post, put } from "./../../../network/requests";
import { getUrl } from "./../../../network/url";
import {
  authHeader,
  getServerErrors,
  mapClientList,
} from "./../../../services/helper";
import ScenarioSteps from "../common/ScenarioSteps.vue";
import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown, ScenarioSteps },
  data() {
    return {
      existingClientId: false,
      existingScenarioDetailId: false,
      existingScenarioDetailName: false,
      existingScenarioScheduleId: false,
      existingScenarioScheduleName: false,
      setClientAsDefault: false,
      detailId: false,
      clientName: "",
      scenarioName: "",
      scenarioDescription: "",
      clientAgeYearToIllustrate: "",
      simpleTaxRate: true,
      saveScheduleTemplate: false,
      saveDetailsTemplate: false,
      illustrateYear: "",
      firstTaxRate: "",
      secondTaxRate: "",
      secondTaxRateYear: "",
      scheduleTemplate: "",
      detailsTemplate: "",
      detailTemplateInput: 0,
      scheduleTemplateInput: 0,
      scheduleTaxRate: [],
      errors: [],
    };
  },
  mounted() {
    // get existing client
    if (!this.$store.state.data.clients) {
      this.getClient();
    } else {
      // set default client age
      let df_client = this.$route.query.client;
      if (df_client) {
        this.$store.state.data.clients.forEach(element => {
          if (Number(df_client) === element.id) {
            this.setInputWithId("clientAge", element.age);
          }
        });
      }
    }

    // get existing scenario details
    if (!this.$store.state.data.templates.scenario_details) {
      this.getExistingScenarioDetails();
    }

    // get existing scenario schedule template list
    if (!this.$store.state.data.templates.scenario_details) {
      this.getExistingScenarioSchedule();
    }

    // populate scenario details if scenario detail id exist in url
    this.$store.dispatch("loader", true);
    get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
      .then(response => {
        console.log(response.data.data);
        let id = false;
        console.log(response.data.data.scenerio_details);
        if (response.data.data.scenerio_details) {
          id = response.data.data.scenerio_details.id;
          this.detailId = id;
        }

        let client_id = response.data.data.client;
        this.$store.dispatch("activeScenario", response.data.data);
        this.$store.dispatch("loader", false);
        if (id) {
          if (client_id) {
            if (this.clients && this.clients.length) {
              this.$router.push(`?client=${client_id}`);
            } else {
              this.setClientAsDefault = client_id;
            }
          }
          console.log("id.........");
          console.log(id);
          this.populateScenarioDetail(id);
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });

    // input validation for min and max value
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
        let len = e.target.value.length;
        let current = e.target.value;
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (
          Number(current) < min ||
          Number(current) > max ||
          isNaN(Number(current))
        ) {
          let actualValue = current.slice(0, len - 1);
          e.target.value = actualValue;
          return false;
        }
      })
    );
  },
  methods: {
    // set existing client name on change the input
    setExistingClientName: function(name) {
      this.clientName = name;
    },

    // set existing scenario detail template name on change the input
    setExistingScenarioDetailName: function(name) {
      this.existingScenarioDetailName = name;
    },

    // set existing scenario detail template name on change the input
    setExistingScenarioScheduleName: function(name) {
      this.existingScenarioScheduleName = name;
    },

    // set existing client id on selecting the input dropdown data
    setExistingClientId: function(id) {
      this.existingClientId = id;
    },

    // set the existing scenari o detail id on selecting the input dropdown data
    setExistingScenarioDetailId: function(id) {
      this.existingScenarioDetailId = id;
      this.errors = [];
      this.populateScenarioDetail(id);
    },

    // set the existing scenario schedule id on selecting the input dropdown data
    setExistingScenarioScheduleId: function(id) {
      this.existingScenarioScheduleId = id;
      this.errors.schedule_template = [];
      this.populateScheduleTax(id);
    },

    // set the client age year value to illustrate the data. Note: v-model not working for this input
    updateClientAge: function() {
      this.clientAgeYearToIllustrate = this.getInputUsingId("clientAge");
    },

    // set the first tax rate data using the input id. Note: v-model not working for this input
    updateFirstTaxRate: function() {
      this.firstTaxRate = this.getInputUsingId("firstTaxRate");
    },

    // set the illustrate year value using the input id. Note: v-model not working for this input
    updateScheduleRate: function() {
      this.illustrateYear = this.getInputUsingId("illustratedAge");
      this.checkTaxRate();
      this.clearDetailTemplate();
    },

    // set the input value using the input id attribute
    setInputWithId: function(id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
      return value;
    },

    // this function has return the input value
    getInputUsingId: function(id) {
      return document.getElementById(id).value;
    },

    // get all clients list
    getClient: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("clients"), authHeader())
        .then(response => {
          this.$store.dispatch("clients", mapClientList(response.data.data));
          this.$store.dispatch("loader", false);
          if (this.setClientAsDefault) {
            this.$router.push(`?client=${this.setClientAsDefault}`);
            this.setClientAsDefault = false;
          }
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

    getExistingScenarioSchedule: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-scenario-schedule"), authHeader())
        .then(response => {
          this.$store.dispatch("template", {
            type: "scenario_schedules",
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

    populateScenarioDetail: function(id) {
      this.$store.dispatch("loader", true);
      get(`${getUrl("scenario-details")}${id}`, authHeader())
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("loader", false);
          let detail = response.data.data;
          this.scenarioName = detail.name;
          this.scenarioDescription = detail.description;
          this.clientAgeYearToIllustrate =
            detail.client_age_1_year_illustration;
          this.setInputWithId(
            "clientAge",
            detail.client_age_1_year_illustration
          );
          this.illustrateYear = detail.years_to_illustrate;
          this.setInputWithId("illustratedAge", detail.years_to_illustrate);
          this.simpleTaxRate = !detail.schedule_tax_rate_checkbox;
          this.firstTaxRate = detail.first_tax_rate
            ? detail.first_tax_rate
            : "";
          this.setInputWithId(
            "firstTaxRate",
            detail.first_tax_rate ? detail.first_tax_rate : ""
          );
          this.firstTaxRate = detail.first_tax_rate
            ? detail.first_tax_rate
            : "";
          this.setInputWithId(
            "secondTaxRate",
            detail.second_tax_rate ? detail.second_tax_rate : ""
          );
          this.secondTaxRateYear = detail.second_tax_rate_year
            ? detail.second_tax_rate_year
            : "";
          if (!this.simpleTaxRate) {
            this.setScheduleData(detail.schedule_tax_rate.data);
          } else {
            this.clearScheduleData();
          }
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

    setScheduleData: function(data = []) {
      this.errors.tax_rate = "";
      this.clearScheduleData();
      data.forEach(element => {
        this.setInputWithId(
          `schedule_tax_rate_${element.year}`,
          element.tax_rate
        );
      });
    },

    clearScheduleData: function(data = []) {
      for (let index = 1; index <= 100; index++) {
        this.setInputWithId(`schedule_tax_rate_${index}`, "");
      }
    },

    getExistingScenarioDetails: function() {
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

    populateScheduleTax: function(id) {
      this.$store.dispatch("loader", true);
      get(`${getUrl("schedule")}${id}`, authHeader())
        .then(response => {
          this.$store.dispatch("loader", false);
          let detail = response.data.data.data;
          if (detail) {
            this.illustrateYear = detail.length ? detail.length : 0;
            this.setInputWithId(
              "illustratedAge",
              detail.length ? detail.length : 0
            );
            this.setScheduleData(detail);
          } else {
            this.clearScheduleData();
          }
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

    // check all inputs given in the schedule tax rate list, raturn false if any input has blank value otherwise return true.
    checkTaxRate: function() {
      this.clearScheduleTemplate();
      if (this.illustrateYear) {
        for (let index = 1; index <= this.illustrateYear; index++) {
          var inp = document.getElementById(`schedule_tax_rate_${index}`);
          var tax = inp ? inp.value : "";
          if (!tax) {
            return false;
          }
        }
      }
      this.errors.tax_rate = "";
      return true;
    },

    // validate the form
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
            this.existingClientId = templateId;
            this.errors.client = "";
          }
        }
      }

      if (!this.existingScenarioDetailName) {
        if (!this.scenarioName) {
          this.errors.scenario_name = ["This field is required."];
          validate = false;
        } else {
          this.errors.scenario_name = "";
        }

        if (!this.clientAgeYearToIllustrate) {
          this.errors.client_age_year = ["This field is required."];
          validate = false;
        } else {
          this.errors.client_age_year = "";
        }

        if (!this.illustrateYear) {
          this.errors.illustrate_year = ["This field is required."];
          validate = false;
        } else {
          this.errors.illustrate_year = "";
        }

        if (
          !this.simpleTaxRate &&
          !this.existingScenarioScheduleName &&
          !this.checkTaxRate()
        ) {
          this.errors.tax_rate = ["Please enter tax rate for all years."];
          validate = false;
        } else {
          this.errors.tax_rate = "";
        }

        if (!this.simpleTaxRate && this.existingScenarioScheduleName) {
          let templateId = this.$getTemplateId(
            this.existingScenarioScheduleName,
            this.existingScheduleList
          );
          if (!templateId) {
            validate = false;
            this.errors.existing_schedule = ["Please choose a valid template."];
          } else {
            this.existingScenarioScheduleId = templateId;
            this.errors.existing_schedule = "";
          }
        } else {
          this.errors.existing_schedule = "";
        }

        if (this.simpleTaxRate && !this.firstTaxRate) {
          this.errors.first_tax = true;
          validate = false;
        } else {
          this.errors.first_tax = "";
        }

        if (
          !this.simpleTaxRate &&
          this.saveScheduleTemplate &&
          !this.scheduleTemplate
        ) {
          this.errors.schedule_template = ["This field is required."];
          validate = false;
        } else {
          this.errors.schedule_template = "";
        }
      } else {
        let templateId = this.$getTemplateId(
          this.existingScenarioDetailName,
          this.existingScenarioList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_details = ["Please choose a valid template."];
        } else {
          this.existingScenarioDetailId = templateId;
          this.errors.existing_details = "";
        }
      }

      if (this.saveDetailsTemplate && !this.detailsTemplate) {
        this.errors.details_template = ["This field is required."];
        validate = false;
      } else {
        this.errors.details_template = "";
      }

      return validate;
    },
    // Handle form submission
    submitHandler: function(e) {
      e.preventDefault();
      var tempSchedule = [];
      if (!this.simpleTaxRate && this.illustrateYear) {
        for (let index = 1; index <= this.illustrateYear; index++) {
          var inp = document.getElementById(`schedule_tax_rate_${index}`);
          var tax = inp ? inp.value : "";
          tempSchedule.push({ year: index, tax_rate: tax });
        }
      }

      if (!this.validateForm()) {
        console.log(this.errors);
        return false;
      }

      var data = {
        existings: {
          client_id: this.existingClientId,
          scenario_detail_id: this.existingScenarioDetailId,
          schedule_tax_id: this.existingScenarioScheduleId,
        },
        simple_tax_checkbox: this.simpleTaxRate,
        name: this.scenarioName,
        description: this.scenarioDescription,
        client_age_on_illustration: this.clientAgeYearToIllustrate,
        years_to_illustrate: this.illustrateYear,
        simple_tax_rate: {
          first_tax: this.firstTaxRate || 0,
          second_tax: this.getInputUsingId(`secondTaxRate`) || 0,
          second_tax_year: this.secondTaxRateYear || 0,
        },
        schedule_tax_rate: {
          data: tempSchedule,
          save_this_template_name: this.saveScheduleTemplate,
          template_name: this.scheduleTemplate,
        },
        save_this_template: this.saveDetailsTemplate,
        template_name: this.detailsTemplate,
      };

      var formData = {
        name: data.name,
        client: data.existings.client_id || "",
        description: data.description,
        client_age_1_year_illustration: data.client_age_on_illustration,
        years_to_illustrate: data.years_to_illustrate,
        schedule_tax_rate_checkbox: !data.simple_tax_checkbox,
        first_tax_rate: data.simple_tax_checkbox
          ? data.simple_tax_rate.first_tax
          : 0,
        second_tax_rate: data.simple_tax_checkbox
          ? data.simple_tax_rate.second_tax
          : 0,
        second_tax_rate_year: data.simple_tax_checkbox
          ? data.simple_tax_rate.second_tax_year
          : 0,
        save_this_template_name: data.save_this_template,
        template_name: data.template_name,
        schedule_tax_rate: !data.simple_tax_checkbox
          ? data.schedule_tax_rate
          : null,
      };

      if (data.existings.schedule_tax_id) {
        formData.schedule_tax_rate = data.existings.schedule_tax_id;
      }

      this.$store.dispatch("loader", true);
 
      if (this.detailId) {
        this.updateScenarioDetail(formData);
        } else {
        this.createScenarioDetail(formData);
      }
    },
    // create new secnario detail data
    createScenarioDetail: function(data) {
      post(getUrl("scenario-details"), data, authHeader())
        .then(response => {
          let id = response.data.data.id;
          this.detailId = id;
          if (id) {
            this.createScenarioWithDetailId(id);
          } else {
            this.$store.dispatch("loader", false);
          }
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            var serverErrors = getServerErrors(error);
            this.errors = serverErrors;
            this.errors.scenario_name = serverErrors.name;
            this.errors.client_age_year =
              serverErrors.client_age_1_year_illustration;
            this.errors.illustrate_year = serverErrors.years_to_illustrate;
            this.errors.first_tax = serverErrors.first_tax_rate;
            this.errors.second_tax = serverErrors.second_tax_rate;
            this.errors.second_tax_year = serverErrors.second_tax_rate_year;
            this.errors.details_template = serverErrors.template_name;
            this.errors.description = serverErrors.description;
            if (
              this.errors.schedule_tax_rate &&
              this.errors.schedule_tax_rate.error
            ) {
              this.$toast.error(this.errors.schedule_tax_rate.error[0]);
            }
          }
        });
    },

    // update previous secnario detail data
    updateScenarioDetail: function(data) {
      put(`${getUrl("scenario-details")}${this.detailId}/`, data, authHeader())
        .then(response => {
          this.$toast.success(response.data.message);
          this.$store.dispatch("loader", false);
          this.$router.push(`/illustration-data/${this.activeScenario.id}`);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            var serverErrors = getServerErrors(error);
            this.errors = serverErrors;
            this.errors.scenario_name = serverErrors.name;
            this.errors.client_age_year =
              serverErrors.client_age_1_year_illustration;
            this.errors.illustrate_year = serverErrors.years_to_illustrate;
            this.errors.first_tax = serverErrors.first_tax_rate;
            this.errors.second_tax = serverErrors.second_tax_rate;
            this.errors.second_tax_year = serverErrors.second_tax_rate_year;
            this.errors.details_template = serverErrors.template_name;
            this.errors.description = serverErrors.description;
            if (
              this.errors.schedule_tax_rate &&
              this.errors.schedule_tax_rate.error
            ) {
              this.$toast.error(this.errors.schedule_tax_rate.error[0]);
            }
          }
        });
    },
    createScenarioWithDetailId: function(id) {
      this.$store.dispatch("loader", true);

      post(
        getUrl("scenario"),
        { scenerio_details: id, client: this.existingClientId },
        authHeader()
      )
        .then(response => {
          console.log(response.data);
          this.$toast.success("Scenario details created successfully!");
          this.$store.dispatch("loader", false);
          this.$router.push(`/illustration-data/${response.data.id}`);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          this.$toast.error(error.message);
        });
    },

    createScenarioWithScheduleId: function(data) {
      post(getUrl("scenario-with-schedule_id"), data, authHeader())
        .then(response => {
          console.log(response.data);
          if (response.data.data.id) {
            this.createScenarioWithDetailId(response.data.data.id);
          } else {
            this.$store.dispatch("loader", false);
          }
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            var serverErrors = getServerErrors(error);
            this.errors = serverErrors;
            this.errors.scenario_name = serverErrors.name;
            this.errors.client_age_year =
              serverErrors.client_age_1_year_illustration;
            this.errors.illustrate_year = serverErrors.years_to_illustrate;
            this.errors.first_tax = serverErrors.first_tax_rate;
            this.errors.second_tax = serverErrors.second_tax_rate;
            this.errors.second_tax_year = serverErrors.second_tax_rate_year;
            this.errors.details_template = serverErrors.template_name;
            this.errors.description = serverErrors.description;
            if (
              this.errors.schedule_tax_rate &&
              this.errors.schedule_tax_rate.error
            ) {
              this.$toast.error(this.errors.schedule_tax_rate.error[0]);
            }
          }
        });
    },

    clearDetailTemplate: function() {
      if (this.existingScenarioDetailName) {
        this.detailTemplateInput = 1;
      }
    },

    clearScheduleTemplate: function() {
      if (this.existingScenarioScheduleName) {
        this.scheduleTemplateInput = 1;
      }
    },
  },
  computed: {
    // active scenario data
    activeScenario() {
      return this.$store.state.data.active_scenario;
    },

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
          }
          initClient.push({
            id: Number(element.id),
            template_name: name,
          });
        });
      }
      return initClient;
    },

    defaultClient() {
      let id = this.$route.query.client;
      let tempDefaultClient = [];
      if (id) {
        tempDefaultClient = this.clients.filter(item => {
          return Number(item.id) === Number(id);
        });
      }
      return tempDefaultClient[0] ? tempDefaultClient[0] : [];
    },

    // existing scenario details dropdown list data
    existingScenarioList() {
      let array = this.$store.state.data.templates.scenario_details || [];
      return array;
    },

    // existing scenario schedules dropdown list data
    existingScheduleList() {
      let array = this.$store.state.data.templates.scenario_schedules || [];
      return array;
    },
  },
};
</script>
<style>
.error {
  color: red;
  font-size: 13px;
}
.required {
  border: 1px solid red !important;
}
</style>
