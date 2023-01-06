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
                <SelectDropdown :list="clients" label="Client" id="clientSelected" :error="errors.client" @clearError="() => errors.client = false" @onSelectItem="setExistingClientId"/>

                <hr class="hr-separator" size="1.25" />
                <SelectDropdown :list="existingScenarioList" label="Use Existing Scenario" id="existingScenario" @onSelectItem="setExistingScenarioDetailId"/>
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">
                  Create From Scratch
                </h4>
                <div class="form-group pt-2 less">
                  <label for="scenarioName" class="fs-12 medium-fw">Scenario Name</label>
                  <input type="text" id="scenarioName" v-model="scenarioName" class="form-control" @keyup="errors.scenario_name = false" />
                  <label class="error" v-if="errors.scenario_name">{{errors.scenario_name[0]}}</label>
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
                  <textarea name="" id="scenarioDesc" v-model="scenarioDescription" cols="30" rows="2" class="form-control" @keypress="() => errors.description = false"></textarea>
                  <label class="error" v-if="errors.description">{{errors.description[0]}}</label>
                </div>
                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label for="clientAge" class="fs-12 medium-fw">Client Age
                      <span class="regular-fw">Year 1 age on illustration</span></label>
                    <input type="number" class="form-control" id="clientAge" @input="handleLimit" min="1" max="100" @keyup="() => {updateClientAge(); errors.client_age_year = false}"/>
                    <label class="error" v-if="errors.client_age_year">{{errors.client_age_year[0]}}</label>
                  </div>
                  <div class="form-group">
                    <label for="illustratedAge" class="fs-12 medium-fw"># Years to Illustrate</label>
                    <div class="year-input-div">
                      <input type="number" id="illustratedAge" max="100" class="form-control" @input="handleLimit" @keyup="() =>  {updateScheduleRate(); errors.illustrate_year = false}"/>
                      <span class="year-span">years</span>
                    </div>
                    <label class="error" v-if="errors.illustrate_year">{{errors.illustrate_year[0]}}</label>
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
                          <input type="number" id="firstTaxRate" @keyup="() => {updateFirstTaxRate(); errors.first_tax = false}" :class="`form-control ${errors.first_tax ? 'required' : ''}`" min="1" max="99" @input="handleLimit"/>
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRate" class="fs-12 medium-fw">Second Tax Rate %</label>
                        <div class="percent-input-div">
                          <input type="number" id="secondTaxRate"
                            :class="`form-control handleLimit ${errors.second_tax ? 'required' : ''}`" @keyup="() => errors.second_tax = false" min="1" max="100"
                            :disabled="firstTaxRate ? false : true" />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRateYear" class="fs-12 medium-fw">Second Tax Rate Year</label>
                        <select name="" id="secondTaxRateYear" v-model="secondTaxRateYear" :class="`form-select form-control  ${errors.second_tax_year ? 'required' : ''}`" @keyup="() => errors.second_tax_year = false"
                          :disabled="firstTaxRate ? false : true">
                          <option value=""></option>
                          <option v-if="Number(illustrateYear)" v-for="(item, index) in Number(illustrateYear)" :key="index" :value="item">{{item}}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane fade" id="scheduleTaxRate" role="tabpanel" aria-labelledby="scheduleTaxRate-tab">
                    <SelectDropdown :list="existingScheduleList" label="Use Existing Schedule" id="existingSchedule" @onSelectItem="setExistingScenarioScheduleId"/>
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
                                <input type="number" class="form-control handleLimit" :id="`schedule_tax_rate_${index}`" @input="handleLimit" min="1" max="99" @keyup="checkTaxRate()"/>
                                <span class="percent-span">%</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="pb-3">
                        <div class="form-check form-switch custom-switch pt-2">
                          <input class="form-check-input" type="checkbox" role="switch" v-model="saveScheduleTemplate"
                            id="scheduleTemplateCheckbox" />
                          <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scheduleTemplateCheckbox">Save
                            this Schedule as Template</label>
                        </div>
                        <div class="form-group pt-2" id="templateNameDiv"
                          :style="{'display': saveScheduleTemplate ? '' : 'none'}">
                          <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                          <input type="text" id="templateName" class="form-control" v-model="scheduleTemplate" @keyup="errors.schedule_template = false"/>
                          <label class="error" v-if="errors.schedule_template">{{errors.schedule_template[0]}}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="pb-3">
                    <div class="form-check form-switch custom-switch pt-2">
                      <input class="form-check-input" type="checkbox" role="switch" v-model="saveDetailsTemplate"
                        id="scenarioTemplateCheckbox" />
                      <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scenarioTemplateCheckbox">Save
                        this Scenario Detail as Template</label>
                    </div>
                    <div class="form-group pt-2" id="templateNameDiv"
                      :style="{'display': saveDetailsTemplate ? '' : 'none'}">
                      <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                      <input type="text" id="templateName" class="form-control" v-model="detailsTemplate" @keyup="errors.details_template = false"/>
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
import { get, post } from "./../../../network/requests";
import { getUrl } from "./../../../network/url";
import { authHeader, getServerErrors } from "./../../../services/helper";

import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown },
  data() {
    return {
      existingClientId: false,
      existingScenarioDetailId: false,
      existingScenarioScheduleId: false,
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
      scheduleTaxRate: [],
      errors: [],
    };
  },
  mounted() {
    // get existing client
    if (!this.$store.state.data.clients) {
      this.getClient();
    }
    // get existing scenario details
    if (!this.$store.state.data.templates.scenario_details) {
      this.getExistingScenarioDetails();
    }

    // get existing scenario schedule template list
    if (!this.$store.state.data.templates.scenario_details) {
      this.getExistingScenarioSchedule();
    }

    // input validation for min and max value
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
        let len = e.target.value.length;
        let current = e.target.value;
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (Number(current) < min || Number(current) > max) {
          let actualValue = current.slice(0, len - 1);
          e.target.value = actualValue;
          return false;
        }
      })
    );
  },
  methods: {
    setExistingClientId: function(id) {
      // set existing client id on selecting the input dropdown data
      this.existingClientId = id;
    },

    updateClientAge: function() {
      this.clientAgeYearToIllustrate = document.getElementById(
        "clientAge"
      ).value;
    },

    updateFirstTaxRate: function() {
      this.firstTaxRate = document.getElementById("firstTaxRate").value;
    },

    updateScheduleRate: function() {
      this.illustrateYear = document.getElementById("illustratedAge").value;
      this.checkTaxRate();
    },

    // set the existing scenari o detail id on selecting the input dropdown data
    setExistingScenarioDetailId: function(id) {
      this.existingScenarioDetailId = id;
    },

    // set the existing scenario schedule id on selecting the input dropdown data
    setExistingScenarioScheduleId: function(id) {
      this.existingScenarioScheduleId = id;
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
          if (error.code === "ERR_BAD_RESPONSE") {
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
          if (error.code === "ERR_BAD_RESPONSE") {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
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
          if (error.code === "ERR_BAD_RESPONSE") {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    // check all inputs given in the schedule tax rate list, raturn false if any input has blank value otherwise return true.
    checkTaxRate: function() {
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
      if (!this.existingClientId) {
        this.errors.client = ["This field is required."];
        validate = false;
      } else {
        this.errors.client = "";
      }

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

      if (!this.simpleTaxRate && !this.checkTaxRate()) {
        this.errors.tax_rate = ["Please enter tax rate for all years."];
        validate = false;
      } else {
        this.errors.tax_rate = "";
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

      if (this.saveDetailsTemplate && !this.detailsTemplate) {
        this.errors.details_template = ["This field is required."];
        validate = false;
      } else {
        this.errors.details_template = "";
      }

      return validate;
    },

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
          second_tax: document.getElementById(`secondTaxRate`).value || 0,
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

      console.log(data);
      console.log(formData);

      this.$store.dispatch("loader", true);
      this.createScenarioDetail(formData);
    },
    createScenarioDetail: function(data) {
      post(getUrl("scenerio-details"), data, authHeader())
        .then(response => {
          console.log(response.data);
          this.$toast.success(response.data.message);
          this.$store.dispatch("loader", false);
          this.$router.push("/illustration-data");
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);
          if (error.code === "ERR_BAD_RESPONSE") {
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
          initClient.push({ id: element.id, template_name: name });
        });
      }
      return initClient;
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
}
.required {
  border: 1px solid red !important;
}
</style>
