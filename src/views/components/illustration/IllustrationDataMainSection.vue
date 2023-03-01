<template>
  <section class="main-section">
    <scenario-steps />
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <form class="main-form-div" @submit="submitHandler">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2"> New Scenario </h2>
              </div>
            </div>
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
                <SelectDropdown :list="existingInsuranceList" :error="errors.existing_insurance_profile" @clearError="() => errors.existing_insurance_profile = false" @onSelectItem="setExistingInsuranceProfileId" @inputText="setExistingInsuranceProfileName" :clearInput="insuranceTemplateInput" @setClearedInput="() => insuranceTemplateInput = 0" label="Use Existing Insurance Profile" id="existingInsuranceProfiles" class="form-group less" />
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                <div class="form-group pt-2 less">
                  <label for="insuranceCompany" class="fs-12 medium-fw">Insurance Company</label>
                  <input type="text" id="insuranceCompany" class="form-control" v-model="insuranceCompany" @keyup="() => clearError('insurance_company')"/>
                  <label class="error" v-if="errors.insurance_company">{{errors.insurance_company[0]}}</label>
                </div>
                <div class="row">                     
                  <div class="col-12 col-md-7">
                    <div class="form-group less"> 
                      <label for="insurancePolicyName" class="fs-12 medium-fw">Insurance Policy Name</label> 
                        <input type="text" id="insurancePolicyName" v-model="insurancePolicyName" class="form-control" @keyup="() => clearError('insurance_policy_name')"/> 
                        <label class="error" v-if="errors.insurance_policy_name">{{errors.insurance_policy_name[0]}}</label>
                      </div>
                  </div>
                  <div class="col-12 col-md-5">
                    <div class="form-group less"> 
                      <label for="insurancePolicyNickname" class="fs-12 medium-fw">Policy Nickname</label> 
                        <input type="text" id="insurancePolicyNickname" v-model="PolicyNickname" class="form-control" @keyup="() => clearError('policy_nickname')"/> 
                        <label class="error" v-if="errors.policy_nickname">{{errors.policy_nickname[0]}}</label>
                      </div>
                  </div>
                </div>
                <div class="pb-3">
                  <div class="form-check form-switch custom-switch createSenarioRadioBtn "> 
                    <input class="form-check-input" type="checkbox" role="switch" :disabled="existingInsuranceProfileName ? true: false" v-model="saveInsuranceTemplate"  id="scheduleTemplateCheckbox" /> 
                      <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scheduleTemplateCheckbox">Save this Insurance Company Profile</label> 
                    </div>
                  <div class="form-group pt-2" id="templateNameDiv" :style="{'display': saveInsuranceTemplate ? '' : 'none'}"> 
                    <label for="templateName" class="fs-12 medium-fw">Template Name</label> 
                    <input type="text" id="templateName" class="form-control" :disabled="existingInsuranceProfileName ? true: false" v-model="insuranceTemplateName" @keyup="() => clearError('insurance_template_name')"/> 
                    <label class="error" v-if="errors.insurance_template_name">{{errors.insurance_template_name[0]}}</label>
                  </div>
                </div>
                <hr class="hr-separator" size="1.25" />
                <div class="row">
                  <div class="col-12 col-md-7">
                    <div class="form-group less"> 
                      <label for="deathBenifit" class="fs-12 medium-fw">Initial Death Benefit</label> 
                      <input type="text" id="deathBenifit" class="form-control dollarInputs position-relative handleLimit" min="1" max="999999999" @keyup="() => clearError('initial_death_benefit')"> 
                      <label class="error" v-if="errors.initial_death_benefit">{{errors.initial_death_benefit[0]}}</label>
                    </div>
                  </div>
                  <div class="col-12 col-md-5">
                    <div class="form-group less"> 
                      <label for="policyReturn" class="fs-12 medium-fw">Policy Return</label> 
                      <input type="text" id="policyReturn" class="form-control percenteInputs handleLimit2" min="0" max="99" @keyup="() => clearError('policy_return')">
                      <label class="error" v-if="errors.policy_return">{{errors.policy_return[0]}}</label>
                    </div>
                  </div>
                </div>
                <SelectDropdown :list="existingIllustrationList" :error="errors.existing_illustration" @clearError="() => errors.existing_illustration = false" @onSelectItem="setExistingIllustrationId" @inputText="setExistingIllustrationName" :clearInput="illustrationTemplateInput" @setClearedInput="() => illustrationTemplateInput = 0" label="Use Existing Illustration" id="existingIllustration" />
                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation"> 
                    <button class="nav-link active" id="uploadFromFile-tab" @click="() => uploadFromFile = true" data-bs-toggle="tab" data-bs-target="#uploadFromFile" type="button" role="tab" aria-controls="uploadFromFile" aria-selected="true"> 
                      <svg class="uploadFromFile" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="8.74609" width="8.5" height="0.5" rx="0.25" stroke="black" stroke-width="0.5" />
                        <rect x="8.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 8.75 7.24609)"
                          stroke="black" stroke-width="0.5" />
                        <rect x="4.60156" y="1.15043" width="2.5" height="0.5" rx="0.25"
                          transform="rotate(45 4.60156 1.15043)" stroke="black" stroke-width="0.5" />
                        <rect x="4.74801" y="1.50586" width="2.5" height="0.5" rx="0.25"
                          transform="rotate(135 4.74801 1.50586)" stroke="black" stroke-width="0.5" />
                        <rect x="0.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 0.75 7.24609)"
                          stroke="black" stroke-width="0.5" />
                        <rect x="4.75" y="1.24609" width="5.5" height="0.5" rx="0.25"
                          transform="rotate(90 4.75 1.24609)" stroke="black" stroke-width="0.5" />
                      </svg> &nbsp;Upload From File 
                    </button> 
                  </li>
                  <li class="nav-item" role="presentation" @click="() => uploadFromFile = false"> 
                    <button class="nav-link" id="copyPaste-tab" data-bs-toggle="tab" data-bs-target="#copyPaste" type="button" role="tab" aria-controls="copyPaste" aria-selected="false"> 
                      <svg class="copyPaste" width="11" height="11"
                        viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="7" height="7" rx="1" fill="black" />
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="black" stroke="#EEEEEE" />
                      </svg> &nbsp;Copy/Paste 
                    </button> 
                  </li>
                </ul>
                <div class="tab-content pt-3 mt-1">
                  <div class="tab-pane fade show active" id="uploadFromFile" role="tabpanel" aria-labelledby="uploadFromFile-tab">
                    <label class="error" v-if="errors.illustration_file">{{errors.illustration_file[0]}}</label>
                    <div class="pb-4"> 
                      <label for="uploading" class="drag-drop-label d-block text-center" :style="{'border-color':errors.illustration_file ? 'red':''}"> 
                        <input type="file" accept=".pdf" id="uploading" name="uploading" hidden @change="handleFile"/> 
                        <span>
                          <img src="@/assets/images/icons/table-drag.svg" class="img-fluid" alt="Drag & Drop" />
                        </span>
                        <h6 class="semi-bold-fw drag-drop-heading mt-1 pt-1"> Drag & Drop </h6>
                        <p class="medium-fw fs-12 mb-0 uploadFileTxtPara"> Your files anywhere in this section </p>
                        <span class="fs-12 semi-bold-fw grey-clr-3 d-block">or</span> 
                        <button type="button" class="btn choose-file-btn"> Choose File </button> 
                        <span class="semi-bold-fw no-file-span d-block">No file chosen</span>
                      </label>
                      <p class=" file-name fs-14 grey-clr-2 medium-fw text-center mt-1 mb-0 " id="fileName">{{illustrationFile.name}}</p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="copyPaste" role="tabpanel" aria-labelledby="copyPaste-tab">
                    <label class="error" v-if="errors.illustration_text">{{errors.illustration_text[0]}}</label>
                    <div class="copy-paste-area">
                      <h6 class="semi-bold-fw drag-drop-heading text-center"> Copy/Paste from CSV </h6>
                      <div class="form-group mb-0"> 
                        <label for="pasteData" class="fs-12 semi-bold-fw">Paste Data Here</label> 
                        <textarea name="" id="pasteData" cols="30" rows="5" class="form-control" v-model="illustrationFile.text" @change="handleCSV()"></textarea> 
                        <!-- <div id="pasteData" cols="30" rows="5" class="form-control"></div>  -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pb-3">
                  <div class="form-check form-switch custom-switch pt-2">
                    <input class="form-check-input" type="checkbox" role="switch" :disabled="existingIllustrationName ? true : false" v-model="saveIllustrationTemplate" id="scenarioTemplateCheckbox" />
                    <label class="form-check-label fs-12 semi-bold-fw mb-0" for="scenarioTemplateCheckbox">Save this Illustration as Template</label>
                  </div>
                  <div class="form-group pt-2" id="templateNameDiv" :style="{'display': saveIllustrationTemplate ? '' : 'none'}">
                    <label for="templateName" class="fs-12 medium-fw">Template Name</label>
                    <input type="text" id="templateName" class="form-control" :disabled="existingIllustrationName ? true : false" v-model="illustrationTemplateName" @keyup="clearError('illustration_template_name')"/>
                    <label class="error" v-if="errors.illustration_template_name">{{errors.illustration_template_name[0]}}</label>
                  </div>
                </div>
              </div>
              <div v-if="csvPreview.data" class="illustration-data-table-div w-100">
                <h4 class="fs-22 bold-fw mb-3" @click="checkFunction()">Categorize, Review and Edit Data</h4>
                <div class="illustration-data-wrapper illustrativeTablemainDiv table-responsive">
                  <table class="table illustration-data-table mb-0">
                    <tbody>
                      <tr>
                        <td class="border-0">
                          <div class="table-responsive w-100">
                            <!-- <label class="text-center d-block text-danger">Please categorize the CSV data</label> -->
                            <table class="table w-100">
                              <tbody>
                                <tr>
                                  <td v-for="(item, index) in csvPreview.headers" :key="index" >
                                    <div class=" d-flex flex-column align-items-center px-2 "> 
                                      <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal" type="button" @click="() => removeColId = index"> 
                                        <img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                      </button>
                                      <select name="" :id="`headerSelectInput${index}`" class="form-select select-option" @change="(e) => setHeader(e, index)">
                                        <option v-for="(item, index) in illustrationFields" :key="index" :value="index" :disabled="illustrationFields[index] !== 'None' && csvPreview.headers.includes(index.toString())">{{item}}</option> 
                                      </select> 
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-0">
                          <div class="table-responsive w-100">
                          <table class="table illustrative-data-table w-100">
                            <thead>
                              <tr>
                                <th v-for="(item, index) in csvPreview.headers" :key="index">{{item ? `${illustrationFields[item] !== 'None' ? illustrationFields[item] : '--'}` : '--'}}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(item, index) in csvPreview.data.length" :key="index">
                                <td v-for="(list, cell) in csvPreview.headers" :key="cell"><div class="text-center">{{(csvPreview.data[index] && csvPreview.data[index]) ? csvPreview.data[index][cell] : '' }}</div></td>
                              </tr>
                            </tbody>
                          </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>


              <div class="text-center mt-30"> 
                <button class="nav-link btn form-next-btn fs-14 active">Next</button>
                <!-- <router-link to="/comparative-vehicles" class="nav-link btn form-next-btn fs-14 active" disabled="true">Next</router-link>  -->
                <span class="d-block mb-2"></span> 
                  <router-link to="/scenario-details" class="nav-link btn form-back-btn fs-14" disabled="true">
                    <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6" />Back
                  </router-link> 
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <delete-colomn-modal @removeCol="removeColumn"/> 
  </section>
</template>
<script>
import DeleteColomnModal from '../../components/modal/DeleteColomnModal.vue';
import SelectDropdown from "../common/SelectDropdown.vue";
import ScenarioSteps from "../common/ScenarioSteps.vue";
import { get, post } from "../../../network/requests.js";
import { getUrl } from "../../../network/url.js";
import {
  getFirstError,
  authHeader,
  getNumber,
  getBaseUrl,
} from "../../../services/helper.js";
export default {
  components: { SelectDropdown, ScenarioSteps, DeleteColomnModal },
  data() {
    return {
      saveInsuranceTemplate: false,
      insuranceTemplateName: "",
      saveIllustrationTemplate: false,
      illustrationTemplateName: "",
      uploadFromFile: true,
      illustrationFile: {
        name: "",
        file: null,
        text: "",
        url: "",
      },
      existingInsuranceProfileId: "",
      existingInsuranceProfileName: "",
      existingIllustrationId: "",
      existingIllustrationName: "",
      insuranceCompany: "",
      insurancePolicyName: "",
      PolicyNickname: "",
      insuranceTemplateInput: 0,
      illustrationTemplateInput: 0,
      errors: [],
      csvPreview: {},
      removeColId:null,
    };
  },
  mounted() {
    // input validation for min and max value with putting comman
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
        let current = getNumber(e.target.value).toString();
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (Number(current) < min || Number(current) > max) {
          let actualValue = current.slice(0, current.length - 1);
          e.target.value =
            Number(current) < min ? "" : Number(actualValue).toLocaleString();
          return false;
        } else {
          e.target.value = Number(current).toLocaleString();
        }
      })
    );

    // input validation for min and max value
    const inputs2 = document.querySelectorAll(".handleLimit2");
    inputs2.forEach(element =>
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

    // populate illuatration data if illuatration data id exist in url
    if (this.$route.params.scenario && !this.activeScenario) {
      this.$store.dispatch("loader", true);
      get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
        .then(response => {
          console.log(response.data.data);
          let id = response.data.data.illustration;
          this.$store.dispatch("activeScenario", response.data.data);
          this.$store.dispatch("loader", false);
          if (id) {
            this.populateInsuranceProfile(id);
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
    } else {
      if (this.$route.params.scenario && this.activeScenario) {
        let id = this.activeScenario.illustration;
        if (id) {
          this.populateInsuranceProfile(id);
        }
      }
    }

    if (!this.existingInsuranceList.length) {
      this.getExistingInsurance();
    }

    if (!this.existingIllustrationList.length) {
      this.getExistingIllustration();
    }
  },
  computed: {
    // active scenario data
    activeScenario() {
      return this.$store.state.data.active_scenario;
    },

    existingInsuranceList() {
      let array = this.$store.state.data.templates.insurance || [];
      return array;
    },

    existingIllustrationList() {
      let array = this.$store.state.data.templates.illustration || [];
      return array;
    },

    illustrationFields(){
      return [ 
        'None',
        'Age',
        'Year',
        'Premium',
        'Distribution - Loan',
        'Distribution - Withdrawal',
        'Accumulation Value',
        'Surrender Value',
        'Dealth Benefit',
        'Fees',
      ];
    }
  },
  methods: {
    // set existing insurance profile id on selecting the input dropdown data
    setExistingInsuranceProfileId: function(id) {
      this.existingInsuranceProfileId = id;
      this.errors = [];
      this.populateInsuranceProfile(id);
      this.clearIllustrateTemplate();
    },

    // set existing illustration id on selecting the input dropdown data
    setExistingIllustrationId: function(id) {
      this.existingIllustrationId = id;
      this.clearInsuranceTemplate();
      this.errors = [];
    },

    // set existing insurance profile name on change the input value
    setExistingInsuranceProfileName: function(name) {
      this.existingInsuranceProfileName = name;
    },

    // set existing insurance profile name on change the input value
    setExistingIllustrationName: function(name) {
      this.existingIllustrationName = name;
    },

    clearInsuranceTemplate: function() {
      if (this.existingInsuranceProfileName) {
        this.insuranceTemplateInput = 1;
      }
    },

    clearIllustrateTemplate: function() {
      if (this.existingIllustrationName) {
        this.illustrationTemplateInput = 1;
      }
    },

    // populate the isurance data on selectig the existing dropdown template list
    populateInsuranceProfile: function(id) {
      if (id) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("illustration")}${id}`, authHeader())
          .then(response => {
            let data = response.data.data;
            this.insuranceCompany = data.insurance_company;
            this.insurancePolicyName = data.insurance_policy_name;
            this.PolicyNickname = data.insurance_policy_nickname;
            this.setInputWithId(
              "deathBenifit",
              data.initial_death_benifit.toLocaleString()
            );
            this.setInputWithId("policyReturn", data.policy_return);
            this.uploadFromFile = !data.copy_paste_checkbox;
            if (this.uploadFromFile) {
              this.illustrationFile.url =
                data.illustration_data.upload_from_file;
            } else {
              this.illustrationFile.url = "";
            }
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
      } else {
        this.$toast.error("Something went wrong.");
      }
    },

    // validate the form
    validateForm: function() {
      var validate = true;
      if (this.existingInsuranceProfileName) {
        let templateId = this.$getTemplateId(
          this.existingInsuranceProfileName,
          this.existingInsuranceList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_insurance_profile = [
            "Please choose a valid template.",
          ];
        } else {
          this.existingInsuranceProfileId = templateId;
          this.errors.existing_insurance_profile = "";
        }
      } else {
        this.errors.existing_insurance_profile = "";
      }

      if (this.saveInsuranceTemplate && !this.insuranceTemplateName) {
        this.errors.insurance_template_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_template_name = false;
      }

      if (this.existingIllustrationName) {
        let templateId = this.$getTemplateId(
          this.existingIllustrationName,
          this.existingIllustrationList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_illustration = [
            "Please choose a valid template.",
          ];
        } else {
          this.existingIllustrationId = templateId;
          this.errors.existing_illustration = "";
        }
      } else {
        this.errors.existing_illustration = "";
        if (this.uploadFromFile) {
          if (
            !this.illustrationFile.file &&
            !this.existingInsuranceProfileName &&
            !this.existingIllustrationName
          ) {
            this.errors.illustration_file = true;
            validate = false;
          } else {
            this.errors.illustration_file = false;
          }
          this.errors.illustration_text = false;
        } else {
          if (!this.illustrationFile.text) {
            this.errors.illustration_text = ["This field is required."];
            validate = false;
          } else {
            this.errors.illustration_text = false;
          }
          this.errors.illustration_file = false;
        }
      }

      if (this.saveIllustrationTemplate && !this.illustrationTemplateName) {
        this.errors.illustration_template_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.illustration_template_name = false;
      }

      if (!this.insuranceCompany) {
        this.errors.insurance_company = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_company = "";
      }

      if (!this.insurancePolicyName) {
        this.errors.insurance_policy_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_policy_name = "";
      }

      if (!this.PolicyNickname) {
        this.errors.policy_nickname = ["This field is required."];
        validate = false;
      } else {
        this.errors.policy_nickname = "";
      }

      if (!this.getInputWithId("deathBenifit")) {
        this.errors.initial_death_benefit = ["This field is required."];
        validate = false;
      } else {
        this.errors.initial_death_benefit = "";
      }

      if (!this.getInputWithId("policyReturn")) {
        this.errors.policy_return = ["This field is required."];
        validate = false;
      } else {
        this.errors.policy_return = "";
      }

      return validate;
    },

    clearError: function(key) {
      this.errors[key] = false;
      this.clearInsuranceTemplate();
      // this.clearIllustrateTemplate();
    },

    // this function has return the input value
    getInputWithId: function(id) {
      return document.getElementById(id).value;
    },

    // set the input value using the input id attribute
    setInputWithId: function(id, value) {
      document.getElementById(id).value = value;
      return value;
    },

    // get existing insurance profile template
    getExistingInsurance: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-illustration"), authHeader())
        .then(response => {
          let template = [];
          if (response.data.data.length) {
            response.data.data.forEach(item => {
              template.push({
                id: item.id,
                template_name: item.insurance_template_name,
              });
            });
          }
          this.$store.dispatch("template", {
            type: "insurance",
            data: template,
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

    // get existing illustration data template
    getExistingIllustration: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("illustration-template"), authHeader())
        .then(response => {
          this.$store.dispatch("template", {
            type: "illustration",
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

    // handle illustration file uploading
    handleFile: function(e) {
      let file = null;
      file = e.target.files[0];
      this.illustrationTemplateInput = 1;
      if (file) {
        if (file.type !== "application/pdf") {
          this.errors.illustration_file = ["Please upload a valid PDF file."];
          this.illustrationFile.file = null;
          this.illustrationFile.name = "";
          return false;
        }
      }
      this.illustrationFile.file = file ? file : "";
      this.illustrationFile.name = file ? file.name : "";
      this.errors.illustration_file = false;
    },

    submitHandler: function(e) {
      e.preventDefault();

      // if (this.activeScenario) {
      //   return this.$router.push(
      //     `/comparative-vehicles/${this.$route.params.scenario || ""}`
      //   );
      // }

      console.log(this.csvPreview.headers.includes(''));

      return false;

      if (!this.validateForm()) {
        console.log(this.errors);
        return false;
      }

      var data = {
        company: this.insuranceCompany,
        policy_name: this.insurancePolicyName,
        nickname: this.PolicyNickname,
        initial_death_benefit: getNumber(this.getInputWithId("deathBenifit")),
        policy_return: this.getInputWithId("policyReturn"),
        insurance_template: this.saveInsuranceTemplate,
        insurance_template_name: this.insuranceTemplateName,
        upload_file_checkbox: this.uploadFromFile,
        illustration: {
          template: this.saveIllustrationTemplate,
          template_name: this.illustrationTemplateName,
        },
        existing: {
          insurance_profile_id: this.existingInsuranceProfileId,
          illustration_id: this.existingIllustrationId,
        },
        template_name: false,
      };

      let formData = new FormData();
      formData.append("insurance_company", data.company);
      formData.append("insurance_policy_name", data.policy_name);
      formData.append("insurance_policy_nickname", data.nickname);
      formData.append("save_this_company_profile", data.insurance_template);
      if (data.insurance_template) {
        formData.append(
          "insurance_template_name",
          data.insurance_template_name
        );
      }

      let file = "";
      if (!this.existingIllustrationId) {
        if (this.existingInsuranceProfileName && this.illustrationFile.url) {
          file = getBaseUrl() + this.illustrationFile.url;
        } else {
          file = this.illustrationFile.file;
        }

        formData.append("illustration_data.upload_from_file", file);
        formData.append(
          "illustration_data.upload_file_checkbox",
          data.upload_file_checkbox
        );
        formData.append(
          "illustration_data.save_this_template_name",
          data.illustration.template
        );
        if (data.illustration.template) {
          formData.append(
            "illustration_data.template_name",
            data.illustration.template_name
          );
        }
      } else {
        formData.append("illustration_data", this.existingIllustrationId);
      }

      formData.append("initial_death_benifit", data.initial_death_benefit);
      formData.append("policy_return", data.policy_return);
      formData.append("scenerio_id", this.$route.params.scenario);
      this.$store.dispatch("loader", true);
      if (this.existingIllustrationId) {
        post(getUrl("illustration-id"), formData, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            this.$toast.success("Illustration data added successfully.");
            this.$router.push(
              `/comparative-vehicles/${this.$route.params.scenario}`
            );
          })
          .catch(error => {
            console.log(this.error);
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
          });
      } else {
        post(getUrl("illustration"), formData, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            this.$toast.success("Illustration data added successfully.");
            this.$router.push(
              `/comparative-vehicles/${this.$route.params.scenario}`
            );
            console.log(response);
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
              this.$toast.error(getFirstError(error));
            }
          });
      }
    },
    checkFunction: function(){
      console.log(this.csvPreview);
    },
    handleCSV: function() {
      if (this.illustrationFile.text) {
        this.csvPreview = this.exractCsvText(this.illustrationFile.text);
        console.log(this.exractCsvText(this.illustrationFile.text));
      } else {
        this.csvPreview = {};
      }
    },
    setHeader: function(e, index){
      this.csvPreview.headers[index] = e.target.value;
    },
    removeColumn: function() {
      let temp_data = [];
      this.csvPreview.data.forEach((row, index) => {
        temp_data.push(row.filter((item, i) => i !== this.removeColId));
      });

      this.csvPreview = { data: temp_data, headers: this.csvPreview.headers.filter((item, i) => i !== this.removeColId) };
    },
    parseRow: function(row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function(character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          if (character == "," && !insideQuote) {
            entries.push(entry.join(""));
            entry = [];
          } else {
            entry.push(character);
          }
        }
      });
      entries.push(entry.join(""));
      return entries;
    },
    exractCsvText: function(csv) {
      if (typeof csv === "string") {
        let lines = csv.split("\n");
        let data = [];
        let headers = [];
        let total_columns = 0;
        lines.forEach((line, i) => {
          if (i) {
            let row = this.parseRow(line);
            if (row) {
              if (total_columns < row.length) {
                total_columns = row.length;
              }
              data.push(row);
            }
          }
        });

        for(var i=0; i < total_columns; i++){
          headers.push('');
        }         
        return { data: data, headers:headers };
      }
      return false;
    },
  },
};
</script>



                