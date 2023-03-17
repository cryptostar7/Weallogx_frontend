<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>
      <router-link to="/" class="btn mt-1 ms-1"> 
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" /> 
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2"> New Scenario </h2>
              </div>
            </div>
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="col-md-10 offset-md-1">
                  <div class="d-flex align-items-center"> <label for="scheduleTemplateCheckbox"
                      class="historical-paraCheckBox">Historical Simulations</label>
                    <div class="form-check form-switch custom-switch ms-2">
                       <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked /> </div>
                  </div>
                  <div class="after-yes-middle-div my-2 p-4">
                    <p class="numberIndexStrtegiesPara">Number of Index Strategies</p>
                    <div class="d-flex justify-content-center">
                      <div class="multiRadioBtnMainDiv"> 
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 1 ? 'active' : ''}`" id="historicalTopCheckBoxDiv1"  @click="setActiveTab(1)">
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 ">
                            <input class="form-check-input" type="checkbox" role="switch" checked @click="handleCheckBox1"/> 
                          </div>
                          <p class="historicalRadioNumberPara">1</p>
                        </div> 
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 2 ? 'active' : ''}`" id="historicalTopCheckBoxDiv2" @click="setActiveTab(2)">
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 "> 
                            <input class="form-check-input" type="checkbox" role="switch" v-model="tabs.tab2" @click="handleCheckBox2" /> 
                          </div>
                          <p class="historicalRadioNumberPara">2</p>
                        </div>
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 3 && 'active'}`" id="historicalTopCheckBoxDiv3" @click="setActiveTab(3)" >
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 "> 
                            <input class="form-check-input" type="checkbox" role="switch" v-model="tabs.tab3" :checked="tabs.tab3 ? true : false" @click="handleCheckBox3"/> 
                          </div>
                          <p class="historicalRadioNumberPara">3</p>
                        </div> 
                      </div>
                    </div>
                    <button class="d-none" @click="testFunction()">Check</button>
                    <div :class="`commonAllDivs ${activeTab !== 1 ? 'd-none': ''}`">
                      <div class="historicalYesDivCommon mt-4">
                        <p class="indexStrategyPara">Index Strategy #1</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                <SelectDropdown :list="dropdown.historyIndex" label="Use Existing Index Strategy"  id="existingComparativeVehiclePortfolio" class="form-group less pt-3"  :optional="true" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters :currentTab="1" /> 
                        <growth-parameters :currentTab="1" /> 
                        <enhancements-component :currentTab="1"  @performanceChange="() => strategies[0].enhancements.performance_multiplier = !strategies[0].enhancements.performance_multiplier" @creditBonusChange="() => strategies[0].enhancements.credit_bonus_fee = !strategies[0].enhancements.credit_bonus_fee"/> 
                        <fees-component :currentTab="1" :performance="strategies[0].enhancements.performance_multiplier" :flatCreditBonus="strategies[0].enhancements.credit_bonus_fee"/> 
                        <save-strategy-template :currentTab="1" />
                      </div>
                    </div>
                    <div :class="`commonAllDivs ${activeTab !== 2 ? 'd-none' : ''}`"> 
                      <stretagy-weight-first-component />
                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #2</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                <SelectDropdown :list="dropdown.historyIndex2"  label="Choose Existing Index Strategy Allocation"  id="existingComparativeVehiclePortfolioTab2" class="form-group less pt-3"  :optional="true" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters :currentTab="2" /> 
                        <growth-parameters :currentTab="2" /> 
                        <enhancements-component :currentTab="2" @performanceChange="() => strategies[1].enhancements.performance_multiplier = !strategies[1].enhancements.performance_multiplier" @creditBonusChange="() => strategies[1].enhancements.credit_bonus_fee = !strategies[1].enhancements.credit_bonus_fee"/> 
                        <fees-component :currentTab="2" :performance="strategies[1].enhancements.performance_multiplier" :flatCreditBonus="strategies[1].enhancements.credit_bonus_fee"/> 
                        <save-strategy-template :currentTab="2" />
                      </div>
                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch ms-2"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation" v-model="saveStrategyAllocationTemplate2" /> 
                            </div>
                            <label for="saveAllocation" class="buttonSaveRadioPara">Save as Index Strategy Allocation</label>
                          </div>
                          <div class="saveZIndexTempContent form-group" v-if="saveStrategyAllocationTemplate2">
                            <form action="javascript:void(0)"> 
                              <label for="templateName">Allocation Name</label> 
                              <input type="text" class="form-control" id="templateName" /> 
                            </form>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div :class="`commonAllDivs ${activeTab !== 3 ? 'd-none': ''}`"> 
                      <stretagy-weight-second-component />
                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #3</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                <SelectDropdown :list="dropdown.historyIndex3" label="Choose Existing Index Strategy Allocation" id="existingComparativeVehiclePortfolioTab3" class="form-group less pt-3" :optional="true" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters :currentTab="3" /> 
                        <growth-parameters :currentTab="3" /> 
                        <enhancements-component :currentTab="3"  @performanceChange="() => strategies[2].enhancements.performance_multiplier = !strategies[2].enhancements.performance_multiplier" @creditBonusChange="() => strategies[2].enhancements.credit_bonus_fee = !strategies[2].enhancements.credit_bonus_fee"/> 
                        <fees-component :currentTab="3" :performance="strategies[2].enhancements.performance_multiplier" :flatCreditBonus="strategies[2].enhancements.credit_bonus_fee"/> 
                        <save-strategy-template :currentTab="3"/>
                      </div>
                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch ms-2"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation2"  v-model="saveStrategyAllocationTemplate3" /> 
                            </div>
                            <label for="saveAllocation2" class="buttonSaveRadioPara">Save as Index Strategy Allocation</label>
                          </div>
                          <div class="saveZIndexTempContent form-group" v-if="saveStrategyAllocationTemplate3">
                            <form action="javascript:void(0)"> <label for="templateName">Template Name</label> <input type="text" class="form-control" id="templateName" /> </form>
                          </div>                                    
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div class="text-center mt-30"> 
                    <router-link to="" class="nav-link btn d-inline-block form-next-btn active fs-14" id="nextBtnVsblOnSlct" @click="submitHandler()">Review</router-link> 
                    <span class="d-block mb-3"></span>
                    <div class="d-flex position-relative mb-5"> 
                      <router-link to="/historical-simulations-after-yes" class="nav-link btn form-back-btn px-4 fs-14 backHistoricalBtn">
                        <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6" />Back
                      </router-link> 
                      <router-link to="/review-summary" class=" nav-link btn form-back-btn fs-14 skipHistoricalBtn "> Skip Historical Simulations</router-link> 
                      <a href="javascript:void(0)" class="nav-link btn form-back-btn fs-14 skipScenarioBtn">Save Scenario as Draft</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { RouterLink } from "vue-router";
import { putPercentage } from "../../../services/put-percentage";
import SelectDropdown from "../common/SelectDropdown.vue";
import AnalysisParameters from "./AnalysisParameters.vue";
import EnhancementsComponent from "./EnhancementsComponent.vue";
import GrowthParameters from "./GrowthParameters.vue";
import FeesComponent from "./FeesComponent.vue";
import SaveStrategyTemplate from "./SaveStrategyTemplate.vue";
import StretagyWeightFirstComponent from "./StretagyWeightFirstComponent.vue";
import StretagyWeightSecondComponent from "./StretagyWeightSecondComponent.vue";
import { computed } from "vue";
import { post } from "../../../network/requests";
import { authHeader, getFirstError } from "../../../services/helper";
import { getUrl } from "../../../network/url";
export default {
  components: {
    RouterLink,
    SelectDropdown,
    GrowthParameters,
    AnalysisParameters,
    EnhancementsComponent,
    FeesComponent,
    SaveStrategyTemplate,
    StretagyWeightFirstComponent,
    StretagyWeightSecondComponent,
  },
  data() {
    return {
      activeTab: 1,
      tabs: {
        tab1: true,
        tab2: false,
        tab3: false,
      },
      dropdown: {
        historyIndex: [
          { id: 1, template_name: "template 1" },
          { id: 2, template_name: "template 2" },
          { id: 3, template_name: "template 3" },
          { id: 4, template_name: "template 4" },
        ],
        historyIndex2: [
          { id: 1, template_name: "template 1" },
          { id: 2, template_name: "template 2" },
          { id: 3, template_name: "template 3" },
          { id: 4, template_name: "template 4" },
        ],
        historyIndex3: [
          { id: 1, template_name: "template 1" },
          { id: 2, template_name: "template 2" },
          { id: 3, template_name: "template 3" },
          { id: 4, template_name: "template 4" },
        ],
      },
      rollingTimePeriod: [15, 20, 25, 30, 35, 40, 45, 50],
      rollingPeriod1: {
        value: "",
        time: 50,
      },
      strategies: [
        {
          enhancements: {
            performance_multiplier: false,
            credit_bonus_fee: false,
          },
        },
        {
          enhancements: {
            performance_multiplier: false,
            credit_bonus_fee: false,
          },
        },
        {
          enhancements: {
            performance_multiplier: false,
            credit_bonus_fee: false,
          },
        },
      ],
      customRollingPeriod1: "",
      saveStrategyAllocationTemplate2: false,
      saveStrategyAllocationTemplate3: false,
      analysis: [],
      growth: [],
      enhancements: [],
      fees: [],
      error: {
        1:[],
        2:[],
        3:[],
      },
    };
  },
  provide() {
    // use function syntax so that we can access `this`
    return {
      errors: computed(() => this.error),
    };
  },
  methods: {
    setActiveTab: function(tab) {
      if (tab === 1) {
        this.tabs.tab1 = true;
        this.activeTab = tab;
      }
      if (tab === 2) {
        this.tabs.tab2 = true;
        this.activeTab = tab;
      }
      if (tab === 3) {
        this.tabs.tab3 = true;
        this.tabs.tab2 = true;
        this.activeTab = tab;
      }
    },
    handleCheckBox1: function(event) {
      event.stopPropagation();
      event.preventDefault();
    },
    handleCheckBox2: function(event) {
      event.stopPropagation();

      if (this.activeTab === 2) {
        this.tabs.tab3 = false;
        this.tabs.tab2 = false;
        this.activeTab = 1;
        // event.preventDefault();
        return false;
      }
      if (this.tabs.tab2 && this.tabs.tab3) {
        this.tabs.tab2 = false;
        this.tabs.tab3 = false;
        this.activeTab = 1;
      }
    },
    handleCheckBox3: function(event) {
      event.stopPropagation();
      if (this.activeTab === 3) {
        this.tabs.tab3 = false;
        this.activeTab = 2;
      }
      if (!this.tabs.tab2 || this.activeTab === 3) {
        event.preventDefault();
      }
    },
    testFunction: function() {
      this.error = "provider message";
      console.log(this.activeTab);
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
    getAnalysisData: function() {
      let arr = [];
      let activeTabs = [this.tabs.tab1, this.tabs.tab2, this.tabs.tab3];
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          let obj = {
            index: this.getInputWithId("analysis_index" + i),
            rolling_time: this.getInputWithId("rolling_time" + i),
            analyze: this.getInputWithId("analyze_type" + i),
            credit_method: this.getInputWithId("credit_base_method" + i),
          };
          arr.push(obj);
        }
      }
      return arr;
    },
    getGrowthData: function() {
      let arr = [];
      let activeTabs = [this.tabs.tab1, this.tabs.tab2, this.tabs.tab3];
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          let obj = {
            cap_rate_range: this.getInputWithId("cap_rate_range" + i),
            participation_range: this.getInputWithId("participation_range" + i),
            margin_spread_range: this.getInputWithId("margin_spread_range" + i),
            floor_range: this.getInputWithId("floor_range" + i),
            segment_year_range: this.getInputWithId("segment_year_range" + i),
          };
          arr.push(obj);
        }
      }
      return arr;
    },
    getEnhancementData: function() {
      let arr = [];
      let activeTabs = [this.tabs.tab1, this.tabs.tab2, this.tabs.tab3];
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          var temp = { performance: [], credit: [] };
          let performance_checkbox = Number(
            this.getInputWithId("performance_checkbox" + i)
          );

          let credit_checkbox = Number(
            this.getInputWithId("credit_checkbox" + i)
          );

          if (performance_checkbox) {
            let performance_obj = {
              checkbox: performance_checkbox,
              type: this.getInputWithId("performance_type" + i),
              multiplier: this.getInputWithId("multiplier_input" + i),
              start_year: this.getInputWithId("prf_start_year" + i),
            };

            if (performance_obj.type === "schedule") {
              let tempData = [];
              for (var y = 1; y < this.illustrateYear + 1; y++) {
                tempData.push({
                  year: y,
                  value: this.getInputWithId(`multiplier_schedule${i}${y}`),
                });
              }
              performance_obj.schedule = tempData;
            }
            temp.performance = performance_obj;
          }

          if (credit_checkbox) {
            let credit_obj = {
              checkbox: credit_checkbox,
              type: this.getInputWithId("credit_type" + i),
              schedule_type: this.getInputWithId("credit_schedule_type" + i),
              credit: this.getInputWithId("credit_bonus_input" + i),
              start_year: this.getInputWithId("crd_start_year" + i),
            };

            if (credit_obj.type === "schedule") {
              let tempData = [];
              for (var y = 1; y < this.illustrateYear + 1; y++) {
                tempData.push({
                  year: y,
                  value: this.getInputWithId(
                    `${
                      credit_obj.schedule_type === "rate"
                        ? "crd_schedule_rate"
                        : "crd_schedule_amt"
                    }${i}${y}`
                  ),
                });
              }
              credit_obj.schedule = tempData;
            }
            temp.credit = credit_obj;
          }

          arr.push({ credit: temp.credit, performance: temp.performance });
        }
      }
      return arr;
    },
    getFeesData: function() {
      let arr = [];
      let activeTabs = [this.tabs.tab1, this.tabs.tab2, this.tabs.tab3];
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          let performance_checkbox = Number(
            this.getInputWithId("performance_checkbox" + i)
          );

          let flat_checkbox = Number(
            this.getInputWithId("credit_checkbox" + i)
          );

          //performance multiplier fees
          let pcf_all_year = Number(this.getInputWithId("pcf_all_year" + i));
          let pcfobj = {
            fees: this.getInputWithId("premium_charge_fees" + i),
            same_all_year: pcf_all_year,
          };

          if (!pcf_all_year) {
            let tempData = [];
            for (var y = 1; y < this.illustrateYear + 1; y++) {
              tempData.push({
                year: y,
                value: this.getInputWithId(`pcf_schedule${i}${y}`),
              });
            }
            pcfobj.schedule = tempData;
          }

          //performance multiplier fees
          var pmfobj = false;
          if (performance_checkbox) {
            let pmf_all_year = Number(this.getInputWithId("pmf_all_year" + i));
            pmfobj = {
              fees: this.getInputWithId("performance_multiplier_fees" + i),
              same_all_year: pmf_all_year,
            };

            if (!pmf_all_year) {
              let tempData = [];
              for (var y = 1; y < this.illustrateYear + 1; y++) {
                tempData.push({
                  year: y,
                  value: this.getInputWithId(`pmf_schedule${i}${y}`),
                });
              }
              pmfobj.schedule = tempData;
            }
          }

          //flat credit bonus fees
          var fcfobj = false;

          if (flat_checkbox) {
            let fcf_all_year = Number(this.getInputWithId("fcf_all_year" + i));
            fcfobj = {
              fees: this.getInputWithId("flat_credit_fees" + i),
              same_all_year: fcf_all_year,
            };

            if (!fcf_all_year) {
              let tempData = [];
              for (var y = 1; y < this.illustrateYear + 1; y++) {
                tempData.push({
                  year: y,
                  value: this.getInputWithId(`fcf_schedule${i}${y}`),
                });
              }
              fcfobj.schedule = tempData;
            }
          }

          //loan interest rate fees
          let lif_all_year = Number(this.getInputWithId("lif_all_year" + i));
          let lifobj = {
            fees: this.getInputWithId("loan_interest_fees" + i),
            same_all_year: lif_all_year,
          };

          if (!lif_all_year) {
            let tempData = [];
            for (var y = 1; y < this.illustrateYear + 1; y++) {
              tempData.push({
                year: y,
                value: this.getInputWithId(`lif_schedule${i}${y}`),
              });
            }
            lifobj.schedule = tempData;
          }

          //High cap fees
          let hcfobj = {
            fees: this.getInputWithId("high_cap_fees" + i),
          };

          arr.push({
            lif: lifobj,
            pcf: pcfobj,
            hcf: hcfobj,
            pmf: pmfobj,
            fcf: fcfobj,
          });
        }
      }
      return arr;
    },
    validatateForm: function(tab = 0) {
      var valid = true;
      let analysis = this.analysis[tab - 0];
      let growth = this.growth[tab - 0];
      let enhancements = this.enhancements[tab - 0];
      let fees = this.fees[tab - 0];

      if (enhancements && enhancements.performance.checkbox) {
        if (enhancements.performance.type === "fixed") {
          console.log("fixed");
        } else {
          let obj = enhancements.performance.schedule;
          let obj_valid = true;
          if (obj) {
            obj.forEach(item => {
              if (!item.value) {
                obj_valid = false;
              }
            });
          } else {
            obj_valid = false;
          }
          if(!obj_valid){
            this.error[tab+1].enhancements_schedule = "Please fill all years multiplier rate."
          }
        }
      }

      return valid;
    },
    // handle form submitted data
    submitHandler: function() {
      this.analysis = this.getAnalysisData();
      this.growth = this.getGrowthData();
      this.enhancements = this.getEnhancementData();
      this.fees = this.getFeesData();
      let analysis = this.analysis;
      let growth = this.growth;
      let enhancements = this.enhancements;
      let fees = this.fees;

      // this.validatateForm(0);

      // return false;

      // console.log(analysis);
      // console.log(growth);
      // console.log(enhancements);
      // console.log(fees);
      this.$toast.success("Form submitted!");

      var formData = {
        index_strategy_1: {
          // client: 130,
          index: analysis[0].index,
          rolling_time_period_years: analysis[0].rolling_time,
          analyze: analysis[0].analyze,
          credit_base_method: analysis[0].credit_method,

          cap_rate: growth[0].cap_rate_range,
          participation_rate: growth[0].participation_range,
          margin_spread: growth[0].margin_spread_range,
          floor: growth[0].floor_range,
          segment_duration_years: growth[0].segment_year_range,

          performance_multiplier: enhancements[0].performance.checkbox
            ? true
            : false,
          performance_multiplier_fixed_value:
            enhancements[0].performance.type === "fixed" ? true : false,
          performance_multiplier_schedule_check:
            enhancements[0].performance.type === "schedule" ? true : false,
          performance_multiplier_schedule:
            enhancements[0].performance.schedule || null,
          performance_multiplier_fixed_value_multiplier:
            enhancements[0].performance.multiplier || 0,
          performance_multiplier_fixed_value_start_year:
            enhancements[0].performance.start_year || 0,

          flat_credit_bonus: enhancements[0].credit.checkbox ? true : false,
          flat_fixed_value:
            enhancements[0].credit.type === "fixed" ? true : false,
          flat_credit_schedule:
            enhancements[0].credit.type === "schedule" ? true : false,

          flat_fixed_credit_bonus: enhancements[0].credit.credit || 0,
          flat_fixed_start_year: enhancements[0].credit.start_year || 0,
          flat_credit_schedule_amount:
            enhancements[0].credit.schedule_type === "amount"
              ? enhancements[0].credit.schedule
              : null,
          flat_credit_schedule_rate:
            enhancements[0].credit.schedule_type === "rate"
              ? enhancements[0].credit.schedule
              : null,

          fees: true,
          premium_charge: fees[0].pcf.fees,
          premium_same_in_all_years: fees[0].pcf.same_all_year ? true : false,
          premium_same_in_all_years_data: fees[0].pcf.same_all_year
            ? fees[0].pcf.schedule
            : null,

          loan_intrest_rate: fees[0].lif.fees,
          loan_same_in_all_years: fees[0].lif.same_all_year ? true : false,
          loan_same_in_all_years_data: !fees[0].lif.same_all_year
            ? fees[0].lif.schedule
            : null,

          loan_intrest_charged_in_advanced: true,
          loan_intrest_charged_in_arrears: false,
          high_cap_fee: fees[0].hcf.fees,
          save_this_index_strategy_as_template: false,
          template_name: "",
        },

        scenario_id: this.$route.params.scenario,
        save_portfolio: false,
        portfolio_name: "",
        client: 0,
      };

      if (formData.index_strategy_1.performance_multiplier) {
        formData.index_strategy_1.load_in_advanced_performance_multiplier =
          fees[0].pmf.fees;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years = fees[0]
          .pmf.same_all_year
          ? true
          : false;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years_data = !fees[0]
          .pmf.same_all_year
          ? fees[0].pmf.schedule
          : null;
      } else {
        formData.index_strategy_1.load_in_advanced_performance_multiplier = 1;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years = true;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years_data = null;
      }

      if (formData.index_strategy_1.flat_credit_bonus) {
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees =
          fees[0].fcf.fees;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years = fees[0]
          .fcf.same_all_year
          ? true
          : false;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years_data = !fees[0]
          .fcf.same_all_year
          ? fees[0].fcf.schedule
          : null;
      } else {
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees = 1;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years = true;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years_data = null;
      }

      console.log(formData);
      this.$store.dispatch("loader", true);
      post(getUrl("historical"), formData, authHeader())
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("loader", false);
          this.$toast.success(response.data.message);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("loader", false);

          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
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
  computed: {
    illustrateYear() {
      return 10;
    },
  },
};
</script>
<style lang="">
</style>