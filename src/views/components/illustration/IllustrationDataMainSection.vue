<template>
  <section class="main-section" id="main-section-element">
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
            <button @click="testFunction" type="button">Test</button>
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
                    <button :class="`nav-link ${uploadFromFile ? 'active' : ''}`" id="uploadFromFile-tab" @click="() => uploadFromFile = true" data-bs-toggle="tab" data-bs-target="#uploadFromFile" type="button" role="tab" aria-controls="uploadFromFile" :aria-selected="uploadFromFile ? true : false"> 
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
                    <button :class="`nav-link ${uploadFromFile ? '' : 'active'}`" id="copyPaste-tab" data-bs-toggle="tab" data-bs-target="#copyPaste" type="button" role="tab" aria-controls="copyPaste" :aria-selected="uploadFromFile ? false : true"> 
                      <svg class="copyPaste" width="11" height="11"
                        viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="7" height="7" rx="1" fill="black" />
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="black" stroke="#EEEEEE" />
                      </svg> &nbsp;Copy/Paste 
                    </button> 
                  </li>
                </ul>
                <div class="tab-content pt-3 mt-1">
                  <div :class="`tab-pane fade ${uploadFromFile  ? 'active show' : ''}`" id="uploadFromFile" role="tabpanel" aria-labelledby="uploadFromFile-tab">
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
                  <div :class="`tab-pane fade ${uploadFromFile  ? '' : 'active show'}`" id="copyPaste" role="tabpanel" aria-labelledby="copyPaste-tab">
                    <label class="error" v-if="errors.illustration_text">{{errors.illustration_text[0]}}</label>
                    <div class="copy-paste-area">
                      <h6 class="semi-bold-fw drag-drop-heading text-center"> Copy/Paste from CSV </h6>
                      <div class="form-group mb-0"> 
                        <label for="pasteData" class="fs-12 semi-bold-fw">Paste Data Here</label> 
                        <textarea name="" id="pasteData" cols="30" rows="5" class="form-control" @paste="handleCSV"></textarea> 
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
              <div v-if="csvPreview.data.length" class="illustration-data-table-div w-100">
                <h4 class="fs-22 bold-fw mb-3" @click="checkFunction()">Categorize, Review and Edit Data</h4>
                <div class="illustration-data-wrapper illustrativeTablemainDiv">
                    <div class="floating-btns">
                      <button type="button" class="btn add-table-column-btn" >+ Add Column</button>
                      <button type="button" class="btn add-table-column-btn reset-table-btn" @click="resetCsv()">Reset Table</button>
                    </div>
                    <div class="d-flex additional-textarea py-3 d-none">
                      <div class="flex-1">
                        <textarea class="form-control csv-textarea w-100" name="" id="add_new_csv_col" cols="30" rows="3" placeholder="Paste your CSV data here..."></textarea>
                      </div>
                      <div class="ps-3 flex-shrink-0">
                        <button type="button" class="nav-link btn add-data-btn fs-14 active px-3" @click="addCSVColumn">+ Add Data</button>
                        <button type="button" class="nav-link btn cancel-add-data-btn fs-14 mt-2 px-4" id="cancelCsvBtn">x Cancel</button>
                      </div>
                    </div>
                  <div class="div-wrapper px-3">
                    <div class="div-wrapper-inner"></div>
                  </div>
                  <div class="table-responsive px-2">
                    <table class="table illustration-data-table mb-0">
                      <tbody>
                        <tr>
                          <td v-for="(header, index) in csvPreview.headers" :key="index" >
                            <div class="d-flex flex-column align-items-center px-2"> 
                              <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal" type="button" @click="() => removeColId = index"> 
                                <img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                              </button>
                              <select name="" :id="`headerSelectInput${index}`" class="form-select select-option" @change="(e) => setHeader(e, index)">
                              <option v-for="(item, index2) in illustrationFields" :key="index2" :value="index2" :selected="header.toString() === index2.toString()" :disabled="!illustrationFields[index2].multiple && csvPreview.headers.includes(index2.toString())">{{item.name}}</option> 
                              </select> 
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th v-for="(item, index) in csvPreview.headers" :key="index">{{item ? `${illustrationFields[item].value !== 'none' ? illustrationFields[item].name : '--'}` : '--'}}</th>
                        </tr>
                        <tr v-for="(item, index) in csvPreview.data.length" :key="index">
                          <td v-for="(list, cell) in csvPreview.headers" :key="cell"><div class="text-center">{{(csvPreview.data[index] && csvPreview.data[index]) ? csvPreview.data[index][cell] : '' }}</div></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
    <div class="modal fade" id="pdfPreviewCanvasModal" tabindex="-1" aria-labelledby="pdfPreviewCanvasModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <button type="button" class="btn-close prev-modal-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-body text-center my-4">
            <p class="preview-modal-heading1">Select the pages from the PDF file to extract the data</p>
            <p class="preview-modal-heading2" >Just click the box to select the relevant page</p>
                <div class="container">
                  <div id="pdfPreview" class="row"></div>
              </div>
          </div>
          <div class="preview-modal-bottom-div py-3">
            <div class="d-flex justify-content-center">
              <a class="nav-link btn form-next-btn active fs-14 d-block m-0 mr-1" data-bs-dismiss="modal" aria-label="Close" @click="extractPdf()">Done</a>
              <a class="nav-link btn preview-cancel-btn fs-14 d-block m-0 ms-1" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="hidden" id="extractPageNumber"/>
  </section>
</template>
<script>
import DeleteColomnModal from "../../components/modal/DeleteColomnModal.vue";
import SelectDropdown from "../common/SelectDropdown.vue";
import ScenarioSteps from "../common/ScenarioSteps.vue";
import { get, post } from "../../../network/requests.js";
import { getUrl } from "../../../network/url.js";
import "@/assets/js/jquery.min.js";

import {
  getFirstError,
  authHeader,
  getNumber,
  getBaseUrl,
} from "../../../services/helper.js";

import "https://mozilla.github.io/pdf.js/build/pdf.js";
// Loaded via <script> tag, create shortcut to access PDF.js exports.
const pdfjsLib = window["pdfjs-dist/build/pdf"];
// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";

const fileReader = new FileReader();

export default {
  components: { SelectDropdown, ScenarioSteps, DeleteColomnModal },
  refs: ["cancelCsvBtn"],
  data() {
    return {
      saveInsuranceTemplate: false,
      insuranceTemplateName: "",
      saveIllustrationTemplate: false,
      illustrationTemplateName: "",
      uploadFromFile: false,
      illustrationFile: {
        name: "",
        file: null,
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
      csvPreview: { data: [], headers: [] },
      removeColId: null,
    };
  },
  mounted() {
    // input validation for min and max value with putting comma
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

    // handle pdf file preview modal
    document
      .getElementById("pdfPreviewCanvasModal")
      .addEventListener("hidden.bs.modal", function(event) {
        document.getElementById("uploading").files = null;
        document.getElementById("uploading").value = null;
        document.getElementById("extractPageNumber").value = null;
        document.getElementById("fileName").innerText = "";
      });
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

    illustrationFields() {
      return [
        { name: "None", value: "none", multiple: true },
        { name: "Age", value: "age", multiple: false },
        {
          name: "Accumulation Value",
          value: "accumulation_value",
          multiple: false,
        },
        {
          name: "Distribution - Loan",
          value: "index_load_credits",
          multiple: false,
        },
        { name: "Dealth Benefit", value: "dealth_benefit", multiple: false },
        {
          name: "Distribution - Withdrawal",
          value: "net_distribution",
          multiple: false,
        },
        { name: "Fees", value: "total_loan_charge", multiple: true },
        { name: "Premium", value: "premium_outlay", multiple: false },
        { name: "Surrender Value", value: "surrender_value", multiple: false },
        { name: "Year", value: "year", multiple: false },
      ];
    },
    illustrationFieldsIndex() {
      return {
        none: "0",
        age: "1",
        accumulation_value: "2",
        index_load_credits: "3",
        dealth_benefit: "4",
        net_distribution: "5",
        total_loan_charge: "6",
        premium_outlay: "7",
        surrender_value: "8",
        year: "9",
      };
    },
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
            console.log(data);
            this.insuranceCompany = data.insurance_company;
            this.insurancePolicyName = data.insurance_policy_name;
            this.PolicyNickname = data.insurance_policy_nickname;
            this.setInputWithId(
              "deathBenifit",
              data.initial_death_benifit.toLocaleString()
            );
            this.setInputWithId("policyReturn", data.policy_return);
            this.uploadFromFile = data.illustration_data.upload_file_checkbox;
            let filteredCsv = { data: [], headers: [] };
            if (this.uploadFromFile) {
              console.log(this.illustrationFile.url);
              let filteredCsv = {
                data: data.illustration_data.upload_from_file.data,
                headers: [],
              };
              filteredCsv.headers = data.illustration_data.upload_from_file.headers.map(
                i => this.illustrationFieldsIndex[i]
              );

              this.csvPreview = filteredCsv;
              this.setScrollbar();
            } else {
              if (
                data.illustration_data.copy_paste &&
                data.illustration_data.copy_paste.headers.length
              ) {
                // this.csvPreview = data.illustration_data.copy_paste;
                let filteredCsv = {
                  data: data.illustration_data.copy_paste.data,
                  headers: [],
                };
                filteredCsv.headers = data.illustration_data.copy_paste.headers.map(
                  i => this.illustrationFieldsIndex[i]
                );

                this.csvPreview = filteredCsv;
                this.setScrollbar();
              }
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
    // show pdf file preview for selecting the extract page
    getPreview: function(file) {
      if (file && file.type == "application/pdf") {
        fileReader.onload = function() {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          var loadingTask = pdfjsLib.getDocument({ data: pdfData });
          loadingTask.promise.then(
            function(pdf) {
              // Fetch the pdf page
              document.getElementById("pdfPreview").innerHTML = null;
              for (var i = 1; i <= pdf.numPages; i++) {
                generateCanvas(i, pdf);
              }

              return new bootstrap.Modal(
                document.getElementById("pdfPreviewCanvasModal")
              ).show();
            },
            function(reason) {
              // PDF loading error
              console.error(reason);
            }
          );
        };
        fileReader.readAsArrayBuffer(file);
      }

      function generateCanvas(i, pdf) {
        // Create a class attributes:
        var classAtt = document.createAttribute("class");
        classAtt.value =
          "col-6 col-md-3 col-lg-2 p-2 d-flex justify-content-center";

        var classAtt2 = document.createAttribute("class");
        classAtt2.value = "previewCard";

        var dataAtt = document.createAttribute("data-page");
        dataAtt.value = i;

        var classAtt3 = document.createAttribute("class");
        classAtt3.value = "previewCardHeading text-center";

        var divCol = document.createElement("div");
        divCol.setAttributeNode(classAtt2);
        divCol.setAttributeNode(dataAtt);

        var divCan = document.createElement("div");
        divCan.setAttributeNode(classAtt);

        var heading = document.createElement("h6");
        heading.setAttributeNode(classAtt3);
        heading.appendChild(document.createTextNode("Page - " + i));

        var can = document.createElement("canvas");

        var pageNumber = i;
        pdf.getPage(pageNumber).then(function(page) {
          var scale = 0.2;
          var viewport = page.getViewport({ scale: scale });

          var context = can.getContext("2d");
          can.height = viewport.height;
          can.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          var renderTask = page.render(renderContext);
        });
        divCol.appendChild(can);
        divCol.appendChild(heading);
        divCan.appendChild(divCol);
        document.getElementById("pdfPreview").appendChild(divCan);
        divCol.addEventListener("click", function(e) {
          if (!e.target.hasAttribute("data-page")) {
            let parent = e.target.parentElement;
            let pId = parent.getAttribute("data-page");
            let input = document.getElementById("extractPageNumber");
            if (parent.classList.contains("active")) {
              let tempVal = input.value.split(",").filter(i => i !== pId);
              input.value = tempVal.join(",");
            } else {
              if (input.value) {
                let tempVal = input.value.split(",");
                tempVal.push(pId);
                input.value = tempVal.join(",");
              } else {
                input.value = pId;
              }
            }
            parent.classList.toggle("active");
          }
        });
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
            !this.csvPreview.data.length &&
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

        this.getPreview(file);
      }
      this.illustrationFile.file = file ? file : "";
      this.illustrationFile.name = file ? file.name : "";
      this.errors.illustration_file = false;
    },
    extractPdf: function() {
      var file = this.illustrationFile.file;
      var page = this.getInputWithId("extractPageNumber");
      if (!page) {
        this.$toast.warning(
          "Please select at least one page to extract the illustration data."
        );
        return new bootstrap.Modal(
          document.getElementById("pdfPreviewCanvasModal")
        ).toggle();
      }
      if (!file) {
        return false;
      } else {
        this.illustrationFile.file = null;
      }
      this.$store.dispatch("loader", true);

      var data = new FormData();
      data.append("pdffile", file);
      data.append("page", page);
      data.append("business", "Allianz");
      post(getUrl("pdf_extract"), data)
        .then(response => {
          var res = response.data;
          function mapPdfData(list) {
            if (list) {
              let arr = [];
              let headers = [];
              let total_columns = 0;
              arr = list.map(i => {
                var obj = Object.values(i);
                if (total_columns < obj.length) {
                  total_columns = obj.length;
                }
                return obj;
              });
              for (var i = 0; i < total_columns; i++) {
                headers.push("");
              }
              return { data: arr, headers: headers };
            }
          }
          let page = "22, 23, 4";
          let allData = { data: [], headers: [] };

          if (page) {
            page.split(",").forEach(p => {
              let list = mapPdfData(res[p.trim()]);
              if (allData.data.length) {
                if (list && list.headers) {
                  let temp_data = [];
                  let maxRowLen = allData.data.length;
                  let maxColLen = allData.data.length;
                  if (list.data.length < maxRowLen) {
                    maxRowLen = list.data.length;
                  }

                  for (var i = 0; i < maxRowLen; i++) {
                    temp_data.push([...allData.data[i], ...list.data[i]]);
                  }
                  allData = {
                    data: temp_data,
                    headers: [...allData.headers, ...list.headers],
                  };
                }
              } else {
                if (list) {
                  allData = list;
                }
              }
            });
          }

          this.csvPreview = allData;
          this.$store.dispatch("loader", false);
          this.setScrollbar();
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
    },
    submitHandler: function(e) {
      e.preventDefault();

      // if (this.activeScenario) {
      //   return this.$router.push(
      //     `/comparative-vehicles/${this.$route.params.scenario || ""}`
      //   );
      // }

      if (
        this.csvPreview &&
        this.csvPreview.headers &&
        this.csvPreview.headers.length > 6
      ) {
        if (!this.csvPreview.headers.includes("1")) {
          return alert(`${this.illustrationFields["1"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("2")) {
          return alert(`${this.illustrationFields["2"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("4")) {
          return alert(`${this.illustrationFields["4"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("7")) {
          return alert(`${this.illustrationFields["7"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("8")) {
          return alert(`${this.illustrationFields["8"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("9")) {
          return alert(`${this.illustrationFields["9"].name} is required.`);
        }
      } else {
        if (this.uploadFromFile) {
          return this.$toast.warning("Please upload illustration pdf data.");
        } else {
          return this.$toast.warning("Please paste a valid CSV.");
        }
      }

      if (!this.validateForm()) {
        console.log(this.errors);
        // document.getElementById("main-section-element").scrollTo(0, 0);
        return false;
      } else {
      }

      console.log("line 702");

      var data = {
        company: this.insuranceCompany,
        policy_name: this.insurancePolicyName,
        nickname: this.PolicyNickname,
        initial_death_benefit: getNumber(this.getInputWithId("deathBenifit")),
        policy_return: this.getInputWithId("policyReturn"),
        insurance_template: this.saveInsuranceTemplate,
        insurance_template_name: this.insuranceTemplateName,
        upload_file_checkbox: this.uploadFromFile ? true : false,

        // upload_file_checkbox: true,
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
        formData.append(
          "illustration_data.upload_file_checkbox",
          data.upload_file_checkbox
        );

        formData.append(
          "illustration_data.copy_paste_checkbox",
          !data.upload_file_checkbox
        );

        let tempHeader = [];
        this.csvPreview.headers.forEach(item => {
          if (this.illustrationFields[item]) {
            tempHeader.push(this.illustrationFields[item].value);
          } else {
            tempHeader.push("none");
          }
        });

        let tableData = JSON.stringify({
          data: this.csvPreview.data,
          headers: tempHeader,
        });

        if (data.upload_file_checkbox) {
          formData.append("illustration_data.upload_from_file", tableData);
        } else {
          formData.append("illustration_data.copy_paste", tableData);
        }

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
      console.log("line 796");

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
    },
    checkFunction: function() {
      console.log(this.csvPreview);
    },
    resetCsv: function() {
      this.csvPreview = { data: [], headers: [] };
      this.setInputWithId("pasteData", "");
      this.setInputWithId("add_new_csv_col", "");
    },
    testFunction: function() {
      console.log(this.csvPreview);
    },
    addCSVColumn: function() {
      let txt = this.getInputWithId("add_new_csv_col");

      if (txt) {
        let obj = this.exractCsvText(txt);
        if (obj && obj.headers) {
          let temp_data = [];
          let maxRowLen = this.csvPreview.data.length;
          let maxColLen = this.csvPreview.data.length;
          if (obj.data.length < maxRowLen) {
            maxRowLen = obj.data.length;
          }

          for (var i = 0; i < maxRowLen; i++) {
            temp_data.push([...this.csvPreview.data[i], ...obj.data[i]]);
          }

          this.csvPreview = {
            data: temp_data,
            headers: [...this.csvPreview.headers, ...obj.headers],
          };
          this.setInputWithId("add_new_csv_col", "");
          document.getElementById("cancelCsvBtn").click();
        } else {
          this.csvPreview = {};
          alert("Please paste a valid CSV.");
        }
      } else {
        this.csvPreview = {};
      }

      this.setScrollbar();
    },
    handleCSV: function(e) {
      let txt = e.clipboardData.getData("text/plain");
      if (txt) {
        let obj = this.exractCsvText(txt);
        if (obj && obj.headers) {
          this.csvPreview = obj;
        } else {
          this.csvPreview = {};
          alert("Please paste a valid CSV..");
        }
      } else {
        this.csvPreview = {};
      }
      this.setScrollbar();
    },
    setHeader: function(e, index) {
      this.csvPreview.headers[index] = e.target.value;
    },
    setScrollbar: function() {
      setTimeout(() => {
        document.getElementById("pasteData").value = "";
        var wrapperInner = document.querySelector(".div-wrapper-inner");
        var illustrationTable = document.querySelector(
          ".illustration-data-table"
        );
        if (illustrationTable) {
          wrapperInner.style.width = illustrationTable.clientWidth + "px";
        }
        $(function() {
          $(".div-wrapper").scroll(function() {
            $(".table-responsive").scrollLeft($(".div-wrapper").scrollLeft());
          });
          $(".table-responsive").scroll(function() {
            $(".div-wrapper").scrollLeft($(".table-responsive").scrollLeft());
          });
        });

        var addColumnBtn = document.querySelector(".add-table-column-btn");
        var cancelAddBtn = document.querySelector(".cancel-add-data-btn");
        var additionalTextArea = document.querySelector(".additional-textarea");
        addColumnBtn.addEventListener("click", () => {
          additionalTextArea.classList.toggle("d-none");
        });
        cancelAddBtn.addEventListener("click", () => {
          additionalTextArea.classList.toggle("d-none");
        });
      }, 100);
    },
    removeColumn: function() {
      let temp_data = [];
      this.csvPreview.data.forEach((row, index) => {
        temp_data.push(row.filter((item, i) => i !== this.removeColId));
      });

      this.csvPreview = {
        data: temp_data,
        headers: this.csvPreview.headers.filter(
          (item, i) => i !== this.removeColId
        ),
      };

      this.setScrollbar();
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
    checkIsHeader: function(arr = []) {
      var isHeader = false;
      arr.forEach((item, index) => {
        if (isNaN(item.replace("$", "").replaceAll(",", ""))) {
          isHeader = true;
        }
      });
      return isHeader;
    },
    exractCsvText: function(values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          let headers = [];
          if (values.match("\t")) {
            data = data.map(i => i.split("\t"));
          } else {
            data = data.map(i => this.parseRow(i));
          }
          data = data.map(i => i.map(r => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter(
            i => i.filter(j => j).length && !this.checkIsHeader(i)
          );
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return { data: data, headers: headers };
        } catch (err) {
          setTimeout(() => {
            this.setInputWithId("pasteData", "");
          }, 100);
          console.log(err);
          return false;
        }
      }
      return false;
    },
  },
};
</script>


<style>
.previewCard {
  border: 1.25px solid #f2f2f2 !important;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
}
.previewCard:hover {
  border: 1.25px solid #000000 !important;
}
.previewCard .previewCardHeading {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #b1b1b1;
}
.previewCard.active {
  border: 1.25px solid #000000 !important;
}
.previewCard.active .previewCardHeading {
  color: #000;
}
.modal-dialog {
  max-width: 1200px;
  margin: 2rem auto;
  height: calc(100vh - 70px);
  overflow: hidden;
}
.preview-modal-heading1 {
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #000000;
}
.preview-modal-heading2 {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #555555;
  margin: 12px 0 25px 0;
}
.prev-modal-close-btn {
  position: absolute;
  top: 35px;
  right: 35px;
  z-index: 999;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}

.preview-cancel-btn {
  border: 1px solid #dfdfdf;
  border-radius: 6.5rem;
  padding: 0.625rem 1rem;
  min-width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 14px;
  color: #000000;
}
.preview-cancel-btn:hover {
  border: 1px solid #000000;
  color: #000000;
}
</style>



                