<template>
  <section class="main-section">
    <historical-simulation-steps />
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <historical-simulation-label-component />
            <form
              class="form-wrapper side-grey-line"
              novalidate
              @submit="submitHandler"
              autocomplete="off"
            >
              <div class="form-wrapper-inner">
                <SelectDropdown
                  :list="clients"
                  label="Client"
                  id="simulationClientSelected"
                  createItemModalId="addClientSimulationCanvas"
                  :addNewClient="true"
                  :defaultSelected="defaultClient.template_name"
                  :error="errors.client"
                  @clearError="() => (errors.client = false)"
                  @onSelectItem="setExistingClientId"
                  @inputText="setExistingClientName"
                />
                <hr class="hr-separator" size="1.25" />
                <SelectDropdown
                  :list="existingSimulationList"
                  label="Use Existing Simulation"
                  id="existingSimulation"
                  :error="errors.existing_details"
                  @clearError="() => (errors.existing_details = false)"
                  :clearInput="detailTemplateInput"
                  @setClearedInput="() => (detailTemplateInput = 0)"
                  @onSelectItem="setExistingSimulationDetailId"
                  @inputText="setExistingSimulationDetailName"
                />
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">
                  Create From Scratch
                </h4>
                <div class="form-group pt-2 less">
                  <label for="simulationName" class="fs-12 medium-fw"
                    >Simulation Name</label
                  >
                  <input
                    type="text"
                    id="simulationName"
                    v-model="simulationName"
                    class="form-control"
                    @keyup="
                      () => {
                        clearDetailTemplate();
                        errors.simulation_name = false;
                      }
                    "
                  />
                  <small class="text-danger" v-if="errors.simulation_name">{{
                    errors.simulation_name[0]
                  }}</small>
                </div>
                <div class="form-group less">
                  <div
                    class="label-group d-flex justify-content-between align-items-center"
                  >
                    <label for="simulationDesc" class="fs-12 medium-fw"
                      >Description</label
                    >
                    <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                  </div>
                  <textarea
                    name=""
                    id="simulationDesc"
                    v-model="simulationDescription"
                    cols="30"
                    rows="2"
                    class="form-control"
                    @keypress="
                      () => {
                        clearDetailTemplate();
                        errors.description = false;
                      }
                    "
                  ></textarea>
                  <small class="text-danger" v-if="errors.description">{{
                    errors.description[0]
                  }}</small>
                </div>
                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label
                      for="simulationClientAge"
                      class="fs-12 medium-fw nowrap"
                      >Client Age
                      <span class="regular-fw"
                        >(Year 1 age on illustration)</span
                      ></label
                    >
                    <input
                      type="number"
                      class="form-control handleLimit"
                      id="simulationClientAge"
                      min="1"
                      max="100"
                      @keyup="
                        () => {
                          updateClientAge();
                          clearDetailTemplate();
                          errors.client_age_year = false;
                        }
                      "
                    />
                    <small class="text-danger" v-if="errors.client_age_year">{{
                      errors.client_age_year[0]
                    }}</small>
                  </div>
                  <div class="form-group">
                    <label
                      for="illustratedSimulationAge"
                      class="fs-12 medium-fw"
                      ># Years to Illustrate</label
                    >
                    <div class="year-input-div">
                      <input
                        type="number"
                        id="illustratedSimulationAge"
                        max="100"
                        class="form-control handleLimit"
                        @keyup="
                          () => {
                            handleIlustrationAge();
                            errors.illustrate_year = false;
                          }
                        "
                      />
                      <span class="year-span">years</span>
                    </div>
                    <small class="text-danger" v-if="errors.illustrate_year">{{
                      errors.illustrate_year[0]
                    }}</small>
                  </div>
                </div>
                <!--  -->
                <div class="form-group-wrapper">
                  <div class="form-group mb-3">
                    <label for="taxRate" class="fs-12 medium-fw"
                      >Tax Rate</label
                    >
                    <div class="percent-input-div">
                      <input
                        type="number"
                        id="taxRate"
                        @keyup="
                          () => {
                            updateTaxRate();
                            clearDetailTemplate();
                            errors.tax_rate = false;
                          }
                        "
                        :class="`form-control handleLimit`"
                        min="1"
                        max="99"
                      /><span class="percent-span">%</span>
                    </div>
                    <small class="text-danger" v-if="errors.tax_rate">{{
                      errors.tax_rate[0]
                    }}</small>
                  </div>
                  <div class="form-group mb-3 invisible">
                    <label for="taxRate" class="fs-12 medium-fw"></label>
                    <div class="percent-input-div">
                      <input
                        type="number"
                        id="taxRate"
                        class="form-control handleLimit"
                        min="1"
                        max="99"
                      /><span class="percent-span">%</span>
                    </div>
                  </div>
                </div>
                <div class="pb-3">
                  <div class="form-check form-switch custom-switch pt-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      :disabled="existingSimulationDetailName ? true : false"
                      v-model="saveDetailsTemplate"
                      id="simulationTemplateCheckbox"
                    />
                    <label
                      class="form-check-label fs-12 semi-bold-fw mb-0"
                      for="simulationTemplateCheckbox"
                      >Save this Simulation Detail as Template</label
                    >
                  </div>
                  <div
                    class="form-group pt-2"
                    id="templateNameDiv"
                    :style="{ display: saveDetailsTemplate ? '' : 'none' }"
                  >
                    <label for="templateName" class="fs-12 medium-fw"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      id="templateName"
                      class="form-control"
                      :disabled="existingSimulationDetailName ? true : false"
                      v-model="detailsTemplate"
                      @keyup="errors.details_template = false"
                    />
                    <small class="text-danger" v-if="errors.details_template">{{
                      errors.details_template[0]
                    }}</small>
                  </div>
                </div>
              </div>
              <div class="mt-30 text-center p-relative">
                <button
                  class="nav-link btn form-next-btn active fs-14"
                  type="submit"
                >
                  Next
                </button>
                <div class="return-btn-div">
                  <a
                    href="javascript:void(0)"
                    :class="`nav-link btn return-to-report-btn fs-14 ${
                      reportId ? '' : 'd-none'
                    }`"
                    @click="submitHandler(false, false, true)"
                    disabled="true"
                    >Save & Return to Current Report
                    <img
                      src="@/assets/images/icons/chevron-right.svg"
                      class="img-fluid me-1"
                      style="position: relative; top: 0px"
                      alt="Chevron"
                      width="6"
                  /></a>
                </div>
              </div>
              <div class="text-center">
                <button
                  v-if="$route.query.review === 'true'"
                  class="nav-link btn form-next-btn active fs-14 mt-2"
                  type="button"
                  @click="submitHandler(false, true)"
                >
                  <img
                    src="@/assets/images/icons/chevron-left-white.svg"
                    class="img-fluid me-1"
                    style="position: relative; top: 0px"
                    alt="Chevron"
                    width="6"
                  />
                  Save & Return to Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { get, post, put } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import HistoricalSimulationLabelComponent from "../../../components/common/HistoricalSimulationLabelComponent.vue";
import HistoricalSimulationSteps from "../../../components/common/HistoricalSimulationSteps.vue";
import SelectDropdown from "../../../components/common/SelectDropdown.vue";
import {
  authHeader,
  getServerErrors,
  mapClientList,
  setSimulationStep1,
  getSimulationStep1,
  getCurrentSimulation,
  setCurrentSimulation,
} from "../../../../services/helper";

export default {
  components: {
    SelectDropdown,
    HistoricalSimulationSteps,
    HistoricalSimulationLabelComponent,
  },
  data() {
    return {
      existingClientId: false,
      existingSimulationDetailId: false,
      existingSimulationDetailName: false,
      setClientAsDefault: false,
      detailId: false,
      clientName: "",
      simulationName: "",
      simulationDescription: "",
      clientAgeYearToIllustrate: "",
      saveDetailsTemplate: false,
      illustrateYear: "",
      taxRate: "",
      detailsTemplate: "",
      detailTemplateInput: 0,
      errors: [],
      reportId: "",
    };
  },
  mounted() {
    this.reportId = this.$route.query.report || false;

    // get existing client
    if (!this.$store.state.data.clients) {
      this.getClient();
    } else {
      // set default client age
      let df_client = this.$route.query.client;
      this.existingClientId = df_client;
      if (df_client) {
        this.$store.state.data.clients.forEach((element) => {
          if (Number(df_client) === Number(element.id)) {
            this.setInputWithId("simulationClientAge", element.age);
            this.clientAgeYearToIllustrate = element.age;
          }
        });
      }
    }

    // get existing simulation details
    this.getExistingSimulationDetails();
    // populate simulation details if simulation detail id exist in url
    let simulationData = getCurrentSimulation();

    if (this.$route.params.simulation) {
      if (
        simulationData &&
        simulationData.id === Number(this.$route.params.simulation)
      ) {
        let details = simulationData.simulation_details;
        let id = details;
        if (typeof details === "object") {
          id = details.id;
        }

        let client_id = simulationData.client;
        this.$store.dispatch("activeSimulation", simulationData);
        if (id) {
          if (client_id) {
            if (this.clients && this.clients.length) {
              this.$router.push(
                `?client=${client_id}${
                  this.reportId ? `&report=${this.reportId}` : ""
                }${this.$route.query.review ? "&review=true" : ""}`
              );
            } else {
              this.setClientAsDefault = client_id;
            }
          }
        }
        return this.populateSimulationDetail(id);
      }

      this.$store.dispatch("loader", true);
      this.getSimulationnDetails();
    }

    // input validation for min and max value
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach((element) =>
      element.addEventListener("input", function (e) {
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
    // get previous scebario detail information
    getSimulationnDetails: function () {
      get(
        `${getUrl("simulation")}${this.$route.params.simulation}`,
        authHeader()
      )
        .then((response) => {
          let id = false;
          if (response.data.data.simulation_details) {
            id = response.data.data.simulation_details.id;
            this.detailId = id;
          }

          let client_id = response.data.data.client;
          this.$store.dispatch("activeSimulation", response.data.data);
          setCurrentSimulation(response.data.data);
          this.$store.dispatch("loader", false);
          if (id) {
            if (client_id) {
              if (this.clients && this.clients.length) {
                this.$router.push(
                  `?client=${client_id}${
                    this.reportId ? `&report=${this.reportId}` : ""
                  }${this.$route.query.review ? "&review=true" : ""}`
                );
              } else {
                this.setClientAsDefault = client_id;
              }
            }
            this.populateSimulationDetail(id);
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
    },
    // set existing client name on change the input
    setExistingClientName: function (name) {
      this.clientName = name;
      let templateId = this.$getTemplateId(name, this.clients);
      if (!templateId) {
        this.$router.push(`${this.$route.query.review ? "&review=true" : ""}`);
      } else {
        this.$router.push(
          `?client=${templateId}${
            this.reportId ? `&report=${this.reportId}` : ""
          }${this.$route.query.review ? "&review=true" : ""}`
        );
      }
      // this.existingClientId = false;
    },

    // set existing simulation detail template name on change the input
    setExistingSimulationDetailName: function (name) {
      this.existingSimulationDetailName = name;
    },

    // set existing client id on selecting the input dropdown data
    setExistingClientId: function (id) {
      this.existingClientId = id;
      this.$router.push(
        `?client=${id}${this.reportId ? `&report=${this.reportId}` : ""}${
          this.$route.query.review ? "&review=true" : ""
        }`
      );

      let age = this.$store.state.data.clients.filter((item) => {
        return Number(item.id) === Number(id);
      })[0].age;
      this.setInputWithId("simulationClientAge", age);
      this.clientAgeYearToIllustrate = age;
      this.errors.client_age_year = false;
    },

    // set the existing scenari o detail id on selecting the input dropdown data
    setExistingSimulationDetailId: function (id) {
      this.existingSimulationDetailId = id;
      let client_id = this.existingSimulationList.filter((i) => i.id === id)[0]
        .client;
      this.existingClientId = client_id;
      this.setClientAsDefault = client_id;
      this.$router.push(
        `?client=${client_id}${
          this.reportId ? `&report=${this.reportId}` : ""
        }${this.$route.query.review ? "&review=true" : ""}`
      );

      this.errors = [];
      this.populateSimulationDetail(id, true);
    },

    // set the client age year value to illustrate the data. Note: v-model not working for this input
    updateClientAge: function () {
      this.clientAgeYearToIllustrate = this.getInputUsingId(
        "simulationClientAge"
      );
      this.errors.client_age_year = false;
    },

    // set the illustrate year value using the input id. Note: v-model not working for this input
    handleIlustrationAge: function () {
      this.illustrateYear = this.getInputUsingId("illustratedSimulationAge");
      this.clearDetailTemplate();
    },

    // set the first tax rate data using the input id. Note: v-model not working for this input
    updateTaxRate: function () {
      this.taxRate = this.getInputUsingId("taxRate");
    },

    // set the input value using the input id attribute
    setInputWithId: function (id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
      return value;
    },

    // this function has return the input value
    getInputUsingId: function (id) {
      return document.getElementById(id).value;
    },

    // get all clients list
    getClient: function () {
      this.$store.dispatch("loader", true);
      get(getUrl("clients"), authHeader())
        .then((response) => {
          this.$store.dispatch("clients", mapClientList(response.data.data));
          this.$store.dispatch("loader", false);
          if (this.setClientAsDefault) {
            this.$router.push(
              `?client=${this.setClientAsDefault}${
                this.reportId ? `&report=${this.reportId}` : ""
              }${this.$route.query.review ? "&review=true" : ""}`
            );
            this.setClientAsDefault = false;
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
    },

    setFormInputs: function (detail, template = false) {
      this.simulationName = detail.simulation_name;
      this.simulationDescription = detail.description;
      this.clientAgeYearToIllustrate = detail.client_age_1_year_illustration;
      this.setInputWithId(
        "simulationClientAge",
        detail.client_age_1_year_illustration
      );
      this.errors.client_age_year = false;

      if (template) {
        // this.illustrateYear = "";
        // document.getElementById("illustratedSimulationAge").value = "";
      } else {
        this.illustrateYear = detail.years_to_illustrate;
        this.setInputWithId(
          "illustratedSimulationAge",
          detail.years_to_illustrate
        );
      }
      this.taxRate = detail.tax_rate ? detail.tax_rate : "";
      this.setInputWithId("taxRate", detail.tax_rate ? detail.tax_rate : "");
      this.taxRate = detail.tax_rate ? detail.tax_rate : "";
    },

    populateSimulationDetail: function (id, template = false) {
      if (!id) {
        return false;
      }
      let step1 = getSimulationStep1();
      if (step1 && step1.id === Number(id)) {
        this.detailId = step1.id;
        return this.setFormInputs(step1, template);
      } else {
        this.$store.dispatch("loader", true);
        get(
          `${getUrl(
            template ? "simulation-detail-templates" : "simulation-details"
          )}${id}`,
          authHeader()
        )
          .then((response) => {
            this.$store.dispatch("loader", false);
            this.setFormInputs(response.data.data, template);
            setSimulationStep1(response.data.data);
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

    getExistingSimulationDetails: function () {
      // this.$store.dispatch("loader", true);
      get(getUrl("simulation-detail-templates"), authHeader())
        .then((response) => {
          this.$store.dispatch("template", {
            type: "simulation_details_template",
            data: response.data.data,
          });
          this.$store.dispatch("loader", false);
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
    },

    // validate the form
    validateForm: function () {
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

      if (!this.existingSimulationDetailName) {
        if (!this.simulationName) {
          this.errors.simulation_name = ["This field is required."];
          validate = false;
        } else {
          this.errors.simulation_name = "";
        }

        if (!this.clientAgeYearToIllustrate) {
          this.errors.client_age_year = ["This field is required."];
          validate = false;
        } else {
          this.errors.client_age_year = "";
        }

        if (
          !this.illustrateYear ||
          !this.getInputUsingId("illustratedSimulationAge")
        ) {
          this.errors.illustrate_year = ["This field is required."];
          validate = false;
        } else {
          this.errors.illustrate_year = "";
        }

        if (!this.taxRate) {
          this.errors.tax_rate = ["This field is required."];
          validate = false;
        } else {
          this.errors.tax_rate = "";
        }
      } else {
        let templateId = this.$getTemplateId(
          this.existingSimulationDetailName,
          this.existingSimulationList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_details = ["Please choose a valid template."];
        } else {
          this.existingSimulationDetailId = templateId;
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
    submitHandler: function (e, review = false, report = false) {
      if (e) {
        e.preventDefault();
      }

      console.log(
        this.illustrateYear,
        this.getInputUsingId("illustratedSimulationAge")
      );

      if (!this.validateForm()) {
        return false;
      }

      var data = {
        existings: {
          client_id: this.existingClientId,
          simulation_detail_id: this.existingSimulationDetailId,
        },
        name: this.simulationName,
        description: this.simulationDescription,
        client_age_on_illustration: this.clientAgeYearToIllustrate,
        years_to_illustrate: this.illustrateYear,
        tax_rate: this.taxRate || 0,
        save_this_template: this.saveDetailsTemplate,
        template_name: this.detailsTemplate,
      };

      var formData = {
        simulation_name: data.name,
        client: data.existings.client_id || "",
        description: data.description,
        client_age_1_year_illustration: data.client_age_on_illustration,
        years_to_illustrate: data.years_to_illustrate,
        tax_rate: data.tax_rate,
        save_this_template_name: data.save_this_template,
        template_name: data.template_name,
      };

      console.log(this.detailId);
      console.log(formData);
      
      this.$store.dispatch("loader", true);

      if (this.detailId) {
        this.updateSimulationDetail(formData, review, report);
      } else {
        this.createSimulationDetail(formData);
      }
    },
    // create new secnario detail data
    createSimulationDetail: function (data) {
      post(getUrl("simulation-details"), data, authHeader())
        .then((response) => {
          let id = response.data.data.id;
          setSimulationStep1(response.data.data);
          this.getExistingSimulationDetails();
          this.detailId = id;
          if (id) {
            this.createSimulationWithDetailId(id);
          } else {
            this.$store.dispatch("loader", false);
          }
        })
        .catch((error) => {
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            var serverErrors = getServerErrors(error);
            this.errors = serverErrors;
            this.errors.simulation_name = serverErrors.simulation_name;
            this.errors.client_age_year =
              serverErrors.client_age_1_year_illustration;
            this.errors.illustrate_year = serverErrors.years_to_illustrate;
            this.errors.tax_rate = serverErrors.tax_rate;
            this.errors.details_template = serverErrors.template_name;
            this.errors.description = serverErrors.description;
          }
        });
    },

    // update previous secnario detail data
    updateSimulationDetail: function (data, review, report) {
      put(
        `${getUrl("simulation-details")}${this.detailId}/`,
        data,
        authHeader()
      )
        .then((response) => {
          setSimulationStep1(response.data.data);
          this.$toast.success(response.data.message);
          this.$store.dispatch("loader", false);
          let url = `/historical/illustration/${this.activeSimulation.id}`;
          if (review) {
            return this.$router.push(
              `/review-summary/${this.activeSimulation.id}`
            );
          }

          if (report) {
            window.location.href = `/report-builder/${this.reportId}`;
          }

          if (this.activeSimulation.id) {
            this.$router.push({
              path: url,
              query: this.$route.query,
            });
          } else {
            this.$toast.error("Something went wrong. Please try again.");
          }
        })
        .catch((error) => {
          this.$store.dispatch("loader", false);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            var serverErrors = getServerErrors(error);
            this.errors = serverErrors;
            this.errors.simulation_name = serverErrors.simulation_name;
            this.errors.client_age_year =
              serverErrors.client_age_1_year_illustration;
            this.errors.illustrate_year = serverErrors.years_to_illustrate;
            this.errors.tax_rate = serverErrors.tax_rate;
            this.errors.details_template = serverErrors.template_name;
            this.errors.description = serverErrors.description;
          }
        });
    },
    createSimulationWithDetailId: function (id) {
      this.$store.dispatch("loader", true);

      post(
        getUrl("simulations"),
        { simulation_details: id, client: this.existingClientId },
        authHeader()
      )
        .then((response) => {
          setCurrentSimulation(response.data);
          this.getClient();
          this.$toast.success("Simulation details created successfully!");
          this.$store.dispatch("loader", false);
          if (response.data.id) {
            this.$router.push({
              path: `/historical/illustration/${response.data.id}`,
              query: this.$route.query,
            });
          } else {
            this.$toast.error("Something went wrong.");
          }
        })
        .catch((error) => {
          this.$store.dispatch("loader", false);
          this.$toast.error(error.message);
        });
    },

    clearDetailTemplate: function () {
      return false;
      if (this.existingSimulationDetailName) {
        this.detailTemplateInput = 1;
      }
    },
  },
  computed: {
    // active simulation data
    activeSimulation() {
      return this.$store.state.data.active_simulation;
    },

    // existing client dropdown list data
    clients() {
      let initClient = [];
      let array = this.$store.state.data.clients;
      if (array && array.length > 0) {
        array.forEach((element) => {
          var name = this.$clientName(
            element.firstname,
            element.lastname,
            element.middlename
          );
          name = name.trim();
          let df_client = this.$route.query.client;
          if (Number(df_client) === element.id) {
            this.setInputWithId("simulationClientAge", element.age);
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

    defaultClient() {
      let id = this.$route.query.client;
      let tempDefaultClient = [];
      if (id) {
        tempDefaultClient = this.clients.filter((item) => {
          return Number(item.id) === Number(id);
        });

        if (tempDefaultClient[0]) {
          this.existingClientId = this.$route.query.client;
        }
      }
      return tempDefaultClient[0] ? tempDefaultClient[0] : [];
    },

    // existing simulation details dropdown list data
    existingSimulationList() {
      let array =
        this.$store.state.data.templates.simulation_details_template || [];

      if (this.existingClientId) {
        array = array.filter(
          (i) => Number(i.client) === Number(this.existingClientId)
        );
      }
      return array;
    },
  },
};
</script>
<style>
.required {
  border: 1px solid red !important;
}
</style>
