<template lang="">
    <div class="indexStrategyallDivs active  mt-3 accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#index-strategy-parameters" aria-expanded="false" aria-controls="index-strategy-parameters">
        <div class="d-flex justify-content-between align-items-center">
        <div class="indexStrategyheadBrdr">
            <p>Index Strategy Parameters
                <svg class="ms-2 boxTickImage" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.5" cy="10.5" r="9.75" fill="#0E6651" stroke="#14EAB7" stroke-width="1.5" />
                    <rect x="16.6006" y="7.91222" width="9.99563" height="1.5" rx="0.75" transform="rotate(135 16.6006 7.91222)" fill="#14EAB7" />
                    <rect x="9.5693" y="14.9806" width="5.50074" height="1.5" rx="0.75" transform="rotate(-135 9.5693 14.9806)" fill="#14EAB7" />
                </svg>
            </p>
            <div></div>
        </div>
        </div>
    </div>
    <div id="index-strategy-parameters" class="accordion-collapse collapse analysisParametersContent" data-bs-parent="#index-strategy-parameters" autocomplete="off">
      <div class="after-yes-middle-div my-2 p-20">
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
                    <SelectDropdown :list="existingIndex" label="Use Existing Index Strategy"  id="existingComparativeVehiclePortfolio" class="form-group less pt-3" :error="error.existing_index1" @clearError="() => error.existing_index1 = false" @onSelectItem="(e) => setExistingIndex(1, e)" @inputText="(e) => setExistingIndexName(1, e)"  :optional="true" />
                  </form>
                </div>
              </div>
            </div>
            <growth-parameters :currentTab="1" :update="update.growth_parameters" @setUpdated="() => update.growth_parameters = false"/> 
            <enhancements-component :currentTab="1" :update="update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError"  @performanceChange="(val) => strategies[0].enhancements.performance_multiplier = val" @creditBonusChange="(val) => strategies[0].enhancements.credit_bonus_fee = val"/> 
            <fees-component :currentTab="1" :update="update.fees" @setUpdated="() => update.fees = false" :performance="strategies[0].enhancements.performance_multiplier" :flatCreditBonus="strategies[0].enhancements.credit_bonus_fee" @clearError="clearError"/> 
            <save-strategy-template :currentTab="1" @clearError="clearError"/>
          </div>
        </div>
        <div :class="`commonAllDivs ${activeTab !== 2 ? 'd-none' : ''}`"> 
            <stretagy-weight-first-component :ratio="strategWeight1"/>
            <div class="historicalYesDivCommon margin-top-3">
            <p class="indexStrategyPara">Index Strategy #2</p>
            <div class="indexStrategyBorder">
                <p></p>
            </div>
            <div class="container mb-4">
                <div class="row">
                <div class="col-md-10 offset-md-1 strategyAllocation">
                    <form action="javascript:void(0)">
                    <SelectDropdown :list="existingIndex"  label="Choose Existing Index Strategy"  id="existingComparativeVehiclePortfolioTab2" class="form-group less pt-3" :error="error.existing_index2" @clearError="() => error.existing_index2 = false" @onSelectItem="(e) => setExistingIndex(2, e)" @inputText="(e) => setExistingIndexName(2, e)"  :optional="true" />
                    </form>
                </div>
                </div>
            </div>
            <growth-parameters :currentTab="2"  :update="update.growth_parameters" @setUpdated="() => update.growth_parameters = false" /> 
            <enhancements-component :currentTab="2" :update="update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError" @performanceChange="(val) => strategies[1].enhancements.performance_multiplier = val" @creditBonusChange="(val) => strategies[1].enhancements.credit_bonus_fee = val"/> 
            <fees-component :currentTab="2" :update="update.fees" @setUpdated="() => update.fees = false" :performance="strategies[1].enhancements.performance_multiplier" :flatCreditBonus="strategies[1].enhancements.credit_bonus_fee" @clearError="clearError"/> 
            <save-strategy-template :currentTab="2" @clearError="clearError"/>
            </div>
        </div> 
        <div :class="`commonAllDivs ${activeTab !== 3 ? 'd-none': ''}`"> 
            <stretagy-weight-second-component :ratio="strategWeight2" />
            <div class="historicalYesDivCommon margin-top-3">
            <p class="indexStrategyPara">Index Strategy #3</p>
            <div class="indexStrategyBorder">
                <p></p>
            </div>
            <div class="container mb-4">
                <div class="row">
                <div class="col-md-10 offset-md-1 strategyAllocation">
                    <form action="javascript:void(0)">
                    <SelectDropdown :list="existingIndex" label="Choose Existing Index Strategy Allocation" id="existingComparativeVehiclePortfolioTab3" class="form-group less pt-3" :error="error.existing_index3" @clearError="() => error.existing_index3 = false" @onSelectItem="(e) => setExistingIndex(3, e)" @inputText="(e) => setExistingIndexName(3, e)" :optional="true" />
                    </form>
                </div>
                </div>
            </div>
            <growth-parameters :currentTab="3" :update="update.growth_parameters" @setUpdated="() => update.growth_parameters = false" /> 
            <enhancements-component :currentTab="3" :update="update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError"  @performanceChange="() => strategies[2].enhancements.performance_multiplier = !strategies[2].enhancements.performance_multiplier" @creditBonusChange="() => strategies[2].enhancements.credit_bonus_fee = !strategies[2].enhancements.credit_bonus_fee"/> 
            <fees-component :currentTab="3" :update="update.fees" @setUpdated="() => update.fees = false" :performance="strategies[2].enhancements.performance_multiplier" :flatCreditBonus="strategies[2].enhancements.credit_bonus_fee" @clearError="clearError"/> 
            <save-strategy-template :currentTab="3" @clearError="clearError"/>
            </div>                
        </div>
        <div class="d-flex justify-content-center mt-4 mx-4" v-if="tabs.tab2">
            <div class="w-75">
                <div class="d-flex align-items-center mb-2">
                <div class="form-check form-switch custom-switch ms-2"> 
                    <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation2"  v-model="portFolioCheckbox" /> 
                </div>
                <label for="saveAllocation2" class="buttonSaveRadioPara">Save as Index Strategy Allocation</label>
                </div>
                <div class="saveZIndexTempContent form-group" v-if="portFolioCheckbox">
                <label class="error text-center" v-if="error.portfolio_name">{{error.portfolio_name}}</label>
                <form action="javascript:void(0)"> <label for="templateName">Template Name</label> <input type="text" class="form-control" v-model="portFolioName" @click="error.portfolio_name = false"/> </form>
                </div>                                    
            </div>
        </div>
      </div>
    </div>
</template>
<script>

import { putPercentage } from "../../../services/put-percentage";
import SelectDropdown from "../common/SelectDropdown.vue";
import AnalysisParameters from "./AnalysisParameters.vue";
import EnhancementsComponent from "./EnhancementsComponent.vue";
import GrowthParameters from "./GrowthParameters.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";
import FeesComponent from "./FeesComponent.vue";
import SaveStrategyTemplate from "./SaveStrategyTemplate.vue";
import StretagyWeightFirstComponent from "./StretagyWeightFirstComponent.vue";
import StretagyWeightSecondComponent from "./StretagyWeightSecondComponent.vue";
import { computed } from "vue";
import { post, get, put } from "../../../network/requests";
import { authHeader, getFirstError } from "../../../services/helper";
import { getUrl } from "../../../network/url";
export default {
  components: {
    SelectDropdown,
    GrowthParameters,
    AnalysisParameters,
    EnhancementsComponent,
    ScenarioLabelComponent,
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
      existing_templates: {
        index1: [],
        index2: [],
        index3: [],
      },
      update: {
        analysis_parameters: false,
        growth_parameters: false,
        enhancement: false,
      },
      strategWeight1: false,
      strategWeight2: false,
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
      historicalId: false,
      customRollingPeriod1: "",
      portFolioCheckbox: false,
      portFolioName: "",
      analysis: [],
      growth: [],
      enhancements: [],
      fees: [],
      error: {
        1: [],
        2: [],
        3: [],
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
    setUpdatedTab: function() {
      console.log("data updated");
      this.update.enhancement = false;
    },
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
    // this function has return the input value
    getInputWithId: function(id) {
      return document.getElementById(id).value;
    },
    // this function has return the input checked status
    isChecked: function(id) {
      return document.getElementById(id).checked;
    },
    // this function is used to for making the checked input
    setChecked: function(id) {
      return (document.getElementById(id).checked = true);
    },
    // this function is used to for making the unchecked input
    setUnChecked: function(id) {
      return (document.getElementById(id).checked = false);
    },
    // set the input value using the input id attribute
    setInputWithId: function(id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
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
            distributions: this.getInputWithId("distribution_method" + i),
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
        var in_arrears = Number(this.getInputWithId(`in_arrears${i}`));
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
    // remove error
    clearError: function(tab = 1, key = "") {
      if (this.error[tab][key]) {
        this.error[tab][key] = false;
      }
    },
    setAnalysisData: function(tab, obj = []) {
      this.setInputWithId(`analysis_index${tab}`, obj.index);
      this.setInputWithId(`rolling_time${tab}`, obj.rolling_time_period_years);
      this.setInputWithId(`analyze_type${tab}`, obj.analyze);
      this.setInputWithId(`credit_base_method${tab}`, obj.credit_base_method);
      console.log('obj.distributions');
      console.log(obj.distributions);
      this.setInputWithId(`distribution_method${tab}`, obj.distributions);
      this.update.analysis_parameters = true;
    },
    setGrowthData: function(tab, obj = []) {
      this.setInputWithId(`cap_rate_range${tab}`, obj.cap_rate);
      this.setInputWithId(`participation_range${tab}`, obj.participation_rate);
      this.setInputWithId(`margin_spread_range${tab}`, obj.margin_spread);
      this.setInputWithId(`floor_range${tab}`, obj.floor);
      this.setInputWithId(
        `segment_year_range${tab}`,
        obj.segment_duration_years
      );
      this.update.growth_parameters = true;
    },
    setEnhancementData: function(tab, obj = []) {
      // permformance multiplier
      this.setInputWithId(
        `performance_checkbox${tab}`,
        obj.performance_multiplier ? 1 : 0
      );

      if (obj.performance_multiplier) {
        this.setInputWithId(
          `performance_type${tab}`,
          obj.performance_multiplier_fixed_value ? "fixed" : "schedule"
        );

        if (
          !obj.performance_multiplier_fixed_value &&
          obj.performance_multiplier_schedule
        ) {
          obj.performance_multiplier_schedule.forEach(i => {
            this.setInputWithId(`multiplier_schedule${tab}${i.year}`, i.value);
          });
        } else {
          this.setInputWithId(
            `multiplier_input${tab}`,
            obj.performance_multiplier_fixed_value_multiplier
          );
          this.setInputWithId(
            `prf_start_year${tab}`,
            obj.performance_multiplier_fixed_value_start_year
          );
        }
      }

      // flat credit/bonus
      this.setInputWithId(
        `credit_checkbox${tab}`,
        obj.flat_credit_bonus ? 1 : 0
      );

      if (obj.flat_credit_bonus) {
        this.setInputWithId(
          `credit_type${tab}`,
          obj.flat_fixed_value ? "fixed" : "schedule"
        );
        this.setInputWithId(
          `credit_schedule_type${tab}`,
          obj.flat_credit_schedule_rate ? "rate" : "amount"
        );
        if (
          !obj.flat_fixed_value &&
          (obj.flat_credit_schedule_amount || obj.flat_credit_schedule_rate)
        ) {
          let fcb_schedule =
            obj.flat_credit_schedule_rate || obj.flat_credit_schedule_amount;
          fcb_schedule.forEach(i => {
            this.setInputWithId(
              `${
                obj.flat_credit_schedule_rate
                  ? "crd_schedule_rate"
                  : "crd_schedule_amt"
              }${tab}${i.year}`,
              i.value
            );
          });
        } else {
          this.setInputWithId(
            `credit_bonus_input${tab}`,
            obj.flat_fixed_credit_bonus
          );

          this.setInputWithId(
            `crd_start_year${tab}`,
            obj.flat_fixed_start_year
          );
        }
      }

      this.update.enhancement = true;
    },
    setFeesData: function(tab, obj = []) {
      this.setInputWithId(
        `in_arrears${tab}`,
        obj.loan_intrest_charged_in_arrears ? 1 : 0
      );

      // Premium charge
      if (obj.premium_charges_same_in_all_years) {
        this.setUnChecked(`premiumcharge${tab}`);
        this.setInputWithId(`premium_charge_fees${tab}`, "");
        obj.premium_charges_same_in_all_years.forEach(i => {
          this.setInputWithId(`pcf_schedule${tab}${i.year}`, i.value);
        });
      } else {
        this.setChecked(`premiumcharge${tab}`);
        this.setInputWithId(`premium_charge_fees${tab}`, obj.premium_charge);
      }

      // Loan interest rate
      if (obj.loan_intrest_rate_same_in_all_years) {
        this.setUnChecked(`loanIntrest${tab}`);
        this.setInputWithId(`loan_interest_fees${tab}`, "");
        obj.loan_intrest_rate_same_in_all_years.forEach(i => {
          this.setInputWithId(`lif_schedule${tab}${i.year}`, i.value);
        });
      } else {
        this.setChecked(`loanIntrest${tab}`);
        this.setInputWithId(`loan_interest_fees${tab}`, obj.loan_intrest_rate);
      }

      // performance multiplier fee
      if (obj.performance_multiplier) {
        if (obj.loan_in_advanced_performance_multiplier_same_in_all_years) {
          this.setUnChecked(`multiplierFee${tab}`);
          this.setInputWithId(`performance_multiplier_fees${tab}`, "");
          obj.loan_in_advanced_performance_multiplier_same_in_all_years.forEach(
            i => {
              this.setInputWithId(`pmf_schedule${tab}${i.year}`, i.value);
            }
          );
        } else {
          this.setChecked(`multiplierFee${tab}`);
          this.setInputWithId(
            `performance_multiplier_fees${tab}`,
            obj.loan_intrest_rate
          );
        }
      }

      // flat flat/credit fee
      if (obj.flat_credit_bonus) {
        if (obj.in_advanced_flat_credit_bonus_fees_same_in_all_years) {
          this.setUnChecked(`flat-credit-fee-radio${tab}`);
          this.setInputWithId(`flat_credit_fees${tab}`, "");
          obj.in_advanced_flat_credit_bonus_fees_same_in_all_years.forEach(
            i => {
              this.setInputWithId(`fcf_schedule${tab}${i.year}`, i.value);
            }
          );
        } else {
          this.setChecked(`flat-credit-fee-radio${tab}`);
          this.setInputWithId(
            `flat_credit_fees${tab}`,
            obj.in_advanced_flat_credit_bonus_fees
          );
        }
      }

      //High Cap Fee
      this.high_cap_fees = obj.high_cap_fee;
      this.setInputWithId(`high_cap_fees${tab}`, obj.high_cap_fee);
      this.update.fees = true;
    },
    populateIndex: function(tab = 1, data) {
      this.setAnalysisData(tab, data);
      this.setGrowthData(tab, data);
      this.setEnhancementData(tab, data);
      this.setFeesData(tab, data);
    },
    // get previous data
    populateHistoricalSimulationData: function(id, portfolio = false) {
      get(
        `${getUrl(portfolio ? "historical-portfolio" : "historical")}${id}`,
        authHeader()
      )
        .then(response => {
          let data = response.data.data;
          console.log(data);
          this.populateIndex(1, data.index_strategy_1);
          if (data.index_strategy_2) {
            this.tabs.tab2 = true;
            // this.strategWeight1 = data.index_strategy_2.strategy_weight;
            this.populateIndex(2, data.index_strategy_2);
          }
          if (data.index_strategy_3) {
            this.tabs.tab3 = true;
            // this.strategWeight2 = data.index_strategy_3.strategy_weight;
            this.populateIndex(3, data.index_strategy_3);
          }

          let indexTab = Number(this.$route.query.tab);
          if (indexTab) {
            if (indexTab === 1) {
              this.activeTab = 1;
            }
            if (indexTab === 2 && data.index_strategy_2) {
              this.activeTab = 2;
            }
            if (indexTab === 3 && data.index_strategy_3) {
              this.activeTab = 3;
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
    },
    validatateForm: function(tab = 0) {
      var valid = true;
      let analysis = this.analysis[tab];
      let growth = this.growth[tab];
      let enhancements = this.enhancements[tab];
      let fees = this.fees[tab];
      this.error[tab + 1].fees = false;
      this.error[tab + 1].enhancements = false;

      if (this.portFolioCheckbox && !this.portFolioName) {
        valid = false;
        this.error.portfolio_name = "This field is required.";
      } else {
        this.error.portfolio_name = "";
      }

      // validate enhancement performace section
      if (enhancements && enhancements.performance.checkbox) {
        if (enhancements.performance.type === "schedule") {
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
          if (!obj_valid) {
            valid = false;
            this.error[tab + 1].enhancements = true;
            this.error[tab + 1].enhancements_performance_schedule =
              "Please fill multiplier rate for all years.";
          } else {
            this.error[tab + 1].enhancements_performance_schedule = "";
          }
        }
      }

      // validate enhancement flat/credit section
      if (enhancements && enhancements.credit.checkbox) {
        if (enhancements.credit.type === "schedule") {
          let obj = enhancements.credit.schedule;
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
          if (!obj_valid) {
            valid = false;
            this.error[tab + 1].enhancements = true;
            if (enhancements.credit.schedule_type === "rate") {
              this.error[
                tab + 1
              ].enhancements_credit_schedule_rate = `Please fill rate value for all years.`;
            } else {
              this.error[
                tab + 1
              ].enhancements_credit_schedule_amount = `Please fill amount value for all years.`;
            }
          } else {
            this.error[tab + 1].enhancements_credit_schedule_rate = "";
            this.error[tab + 1].enhancements_credit_schedule_amount = "";
          }
        }
      }

      // premium charge fees validation
      if (fees && !fees.pcf.same_all_year) {
        let obj = fees.pcf.schedule;
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
        if (!obj_valid) {
          valid = false;
          this.error[tab + 1].fees = true;
          this.error[tab + 1].fee_pc_schedule =
            "Please fill premium charge rate for all years.";
        } else {
          this.error[tab + 1].fee_pc_schedule = "";
        }
      }

      if (fees.lif.fees < 0.1) {
        valid = false;
        this.error[tab + 1].fees = true;
        this.$toast.warning("Loan interest rate must be grater than 0.1");
      }

      // loan interest fees validation
      if (fees && !fees.lif.same_all_year) {
        let obj = fees.lif.schedule;
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
        if (!obj_valid) {
          valid = false;
          this.error[tab + 1].fees = true;
          this.error[tab + 1].fee_lif_schedule =
            "Please fill loan interest rate for all years.";
        } else {
          this.error[tab + 1].fee_lif_schedule = "";
        }
      }

      // performance multiplier fees validation
      if (fees && fees.pmf && !fees.pmf.same_all_year) {
        let obj = fees.pmf.schedule;
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
        if (!obj_valid) {
          valid = false;
          this.error[tab + 1].fees = true;
          this.error[tab + 1].fee_pmf_schedule =
            "Please fill performance multiplier fee rate for all years.";
        } else {
          this.error[tab + 1].fee_pmf_schedule = "";
        }
      }

      // flat credit credit validation
      if (fees && fees.fcf && !fees.fcf.same_all_year) {
        let obj = fees.fcf.schedule;
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
        if (!obj_valid) {
          valid = false;
          this.error[tab + 1].fees = true;
          this.error[tab + 1].fee_fcf_schedule =
            "Please fill flat credit/bonus fee rate for all years.";
        } else {
          this.error[tab + 1].fee_fcf_schedule = "";
        }
      }

      return valid;
    },

    // handle form submitted data
    submitHandler: function(draft = false, report = false) {
      this.analysis = this.getAnalysisData();
      this.growth = this.getGrowthData();
      this.enhancements = this.getEnhancementData();
      this.fees = this.getFeesData();
      let analysis = this.analysis;
      let growth = this.growth;
      let enhancements = this.enhancements;
      let fees = this.fees;
      let valid = true;
      var focus = false;
      let activeTabs = [this.tabs.tab1, this.tabs.tab2, this.tabs.tab3];
      let templates = { 1: "", 2: "", 3: "" };

      // get template detail
      activeTabs.forEach((t, i) => {
        if (t) {
          var checkbox = this.isChecked(`saveZIndexTemp${i + 1}`);
          if (checkbox) {
            let tempName = this.getInputWithId(`templateNameInput${i + 1}`);
            templates[i + 1] = tempName;
            if (!tempName) {
              valid = false;
              this.error[i + 1][`template_name${i + 1}`] =
                "This field is required.";
            }
          } else {
            templates[i + 1] = "";
            this.error[i + 1][`template_name${i + 1}`] = false;
          }
        }
      });

      // check form validations
      activeTabs.forEach((t, i) => {
        if (t) {
          var form = this.validatateForm(i);
          if (!form) {
            if (!focus) {
              this.activeTab = i + 1;
              if (this.error[i + 1].enhancements) {
                var area = document.getElementById(`enhancementTab${i + 1}`);
                focus = true;
                if (area.classList.contains("collapsed")) {
                  area.classList.toggle("collapsed");
                  document
                    .getElementById(`enhanceTab${i + 1}`)
                    .classList.add("show");
                  console.log("removed collapsed");
                }
                area.scrollIntoView();
              }
              if (!focus) {
                focus = true;
                var area = document.getElementById(`fees-parameters${i + 1}`);
                if (this.error[i + 1].fees) {
                  if (!area.classList.contains("show")) {
                    area.classList.add("show");
                  }
                  area.scrollIntoView();
                }
              }
            }
            valid = false;
          }
        }
      });

      if (!valid) {
        console.log(this.error);
        return false;
      }

      var strategy_weight1 = { weight_1: 100, weight_2: 0, weight_3: 0 };
      var strategy_weight2 = {
        weight_1: Number(
          this.getInputWithId("strateg_weight_mid_1").replace("%", "")
        ),
        weight_2: Number(
          this.getInputWithId("strateg_weight_mid_2").replace("%", "")
        ),
        weight_3: 0,
      };
      var strategy_weight3 = {
        weight_1: Number(this.getInputWithId("swInput1").replace("%", "")),
        weight_2: Number(this.getInputWithId("swInput2").replace("%", "")),
        weight_3: Number(this.getInputWithId("swInput3").replace("%", "")),
      };

      var formData = {
        index_strategy_1: {
          index: analysis[0].index,
          rolling_time_period_years: analysis[0].rolling_time,
          analyze: analysis[0].analyze,
          credit_base_method: analysis[0].credit_method,
          distributions: analysis[0].distributions,

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
          premium_charge: fees[0].pcf.fees || 0,
          premium_same_in_all_years: fees[0].pcf.same_all_year ? true : false,
          premium_charges_same_in_all_years: !fees[0].pcf.same_all_year
            ? fees[0].pcf.schedule
            : null,

          loan_intrest_rate: fees[0].lif.fees,
          loan_same_in_all_years: fees[0].lif.same_all_year ? true : false,
          loan_intrest_rate_same_in_all_years: !fees[0].lif.same_all_year
            ? fees[0].lif.schedule
            : null,

          loan_intrest_charged_in_advanced: Number(
            this.getInputWithId(`in_arrears1`)
          )
            ? false
            : true,
          loan_intrest_charged_in_arrears: Number(
            this.getInputWithId(`in_arrears1`)
          )
            ? true
            : false,
          high_cap_fee: fees[0].hcf.fees,
          save_this_index_strategy_as_template: templates[1] ? true : false,
          template_name: templates[1],
          strategy_weight: strategy_weight1,
        },
        // index_strategy_2: null,
        // index_strategy_3: null,
        save_scenario_as_draft: draft,
        scenario_id: this.$route.params.scenario,
        save_portfolio: this.portFolioCheckbox,
        portfolio_name: this.portFolioCheckbox ? this.portFolioName : "",
      };

      // index strategy data append for first tab
      if (formData.index_strategy_1.performance_multiplier) {
        formData.index_strategy_1.loan_in_advanced_performance_multiplier =
          fees[0].pmf.fees;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years = fees[0]
          .pmf.same_all_year
          ? true
          : false;
        formData.index_strategy_1.loan_in_advanced_performance_multiplier_same_in_all_years = !fees[0]
          .pmf.same_all_year
          ? fees[0].pmf.schedule
          : null;
      } else {
        formData.index_strategy_1.loan_in_advanced_performance_multiplier = 0;
        formData.index_strategy_1.loan_in_advanced_same_in_all_years = true;
        formData.index_strategy_1.loan_in_advanced_performance_multiplier_same_in_all_years = null;
      }

      if (formData.index_strategy_1.flat_credit_bonus) {
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees =
          fees[0].fcf.fees || 0;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years = fees[0]
          .fcf.same_all_year
          ? true
          : false;
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees_same_in_all_years = !fees[0]
          .fcf.same_all_year
          ? fees[0].fcf.schedule
          : null;
      } else {
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees = 0;
        formData.index_strategy_1.in_advanced_flat_credit_same_in_all_years = false;
        formData.index_strategy_1.in_advanced_flat_credit_bonus_fees_same_in_all_years = null;
      }

      // index strategy data append for middle tab
      if (activeTabs[1]) {
        formData.index_strategy_2 = {
          index: analysis[1].index,
          rolling_time_period_years: analysis[1].rolling_time,
          analyze: analysis[1].analyze,
          credit_base_method: analysis[1].credit_method,
          distributions: analysis[1].distributions,

          cap_rate: growth[1].cap_rate_range,
          participation_rate: growth[1].participation_range,
          margin_spread: growth[1].margin_spread_range,
          floor: growth[1].floor_range,
          segment_duration_years: growth[1].segment_year_range,

          performance_multiplier: enhancements[1].performance.checkbox
            ? true
            : false,

          performance_multiplier_fixed_value:
            enhancements[1].performance.type === "fixed" ? true : false,

          performance_multiplier_schedule_check:
            enhancements[1].performance.type === "schedule" ? true : false,

          performance_multiplier_schedule:
            enhancements[1].performance.schedule || null,
          performance_multiplier_fixed_value_multiplier:
            enhancements[1].performance.multiplier || 0,
          performance_multiplier_fixed_value_start_year:
            enhancements[1].performance.start_year || 0,

          flat_credit_bonus: enhancements[1].credit.checkbox ? true : false,

          flat_fixed_value:
            enhancements[1].credit.type === "fixed" ? true : false,

          flat_credit_schedule:
            enhancements[1].credit.type === "schedule" ? true : false,

          flat_fixed_credit_bonus: enhancements[1].credit.credit || 0,

          flat_fixed_start_year: enhancements[1].credit.start_year || 0,

          flat_credit_schedule_amount:
            enhancements[1].credit.schedule_type === "amount"
              ? enhancements[1].credit.schedule
              : null,

          flat_credit_schedule_rate:
            enhancements[1].credit.schedule_type === "rate"
              ? enhancements[1].credit.schedule
              : null,

          fees: true,
          premium_charge: fees[1].pcf.fees || 0,
          premium_same_in_all_years: fees[1].pcf.same_all_year ? true : false,
          premium_charges_same_in_all_years: !fees[1].pcf.same_all_year
            ? fees[1].pcf.schedule
            : null,

          loan_intrest_rate: fees[1].lif.fees,
          loan_same_in_all_years: fees[1].lif.same_all_year ? true : false,
          loan_intrest_rate_same_in_all_years: !fees[1].lif.same_all_year
            ? fees[1].lif.schedule
            : null,

          loan_intrest_charged_in_advanced: Number(
            this.getInputWithId(`in_arrears2`)
          )
            ? false
            : true,
          loan_intrest_charged_in_arrears: Number(
            this.getInputWithId(`in_arrears2`)
          )
            ? true
            : false,
          high_cap_fee: fees[1].hcf.fees,
          save_this_index_strategy_as_template: templates[2] ? true : false,
          template_name: templates[2],
          strategy_weight: strategy_weight2,
        };

        if (formData.index_strategy_2.performance_multiplier) {
          formData.index_strategy_2.loan_in_advanced_performance_multiplier =
            fees[1].pmf.fees;
          formData.index_strategy_2.loan_in_advanced_same_in_all_years = fees[1]
            .pmf.same_all_year
            ? true
            : false;
          formData.index_strategy_2.loan_in_advanced_performance_multiplier_same_in_all_years = !fees[1]
            .pmf.same_all_year
            ? fees[1].pmf.schedule
            : null;
        } else {
          formData.index_strategy_2.loan_in_advanced_performance_multiplier = 0;
          formData.index_strategy_2.loan_in_advanced_same_in_all_years = true;
          formData.index_strategy_2.loan_in_advanced_performance_multiplier_same_in_all_years = null;
        }

        if (formData.index_strategy_2.flat_credit_bonus) {
          formData.index_strategy_2.in_advanced_flat_credit_bonus_fees =
            fees[1].fcf.fees;
          formData.index_strategy_2.in_advanced_flat_credit_same_in_all_years = fees[1]
            .fcf.same_all_year
            ? true
            : false;
          formData.index_strategy_2.in_advanced_flat_credit_bonus_fees_same_in_all_years = !fees[1]
            .fcf.same_all_year
            ? fees[1].fcf.schedule
            : null;
        } else {
          formData.index_strategy_2.in_advanced_flat_credit_bonus_fees = 0;
          formData.index_strategy_2.in_advanced_flat_credit_same_in_all_years = false;
          formData.index_strategy_2.in_advanced_flat_credit_bonus_fees_same_in_all_years = null;
        }
      }

      // index strategy data append for last tab
      if (activeTabs[2]) {
        formData.index_strategy_3 = {
          index: analysis[2].index,
          rolling_time_period_years: analysis[2].rolling_time,
          analyze: analysis[2].analyze,
          credit_base_method: analysis[2].credit_method,
          distributions: analysis[2].distributions,

          cap_rate: growth[2].cap_rate_range,
          participation_rate: growth[2].participation_range,
          margin_spread: growth[2].margin_spread_range,
          floor: growth[2].floor_range,
          segment_duration_years: growth[2].segment_year_range,

          performance_multiplier: enhancements[2].performance.checkbox
            ? true
            : false,

          performance_multiplier_fixed_value:
            enhancements[2].performance.type === "fixed" ? true : false,

          performance_multiplier_schedule_check:
            enhancements[2].performance.type === "schedule" ? true : false,

          performance_multiplier_schedule:
            enhancements[2].performance.schedule || null,
          performance_multiplier_fixed_value_multiplier:
            enhancements[2].performance.multiplier || 0,
          performance_multiplier_fixed_value_start_year:
            enhancements[2].performance.start_year || 0,

          flat_credit_bonus: enhancements[2].credit.checkbox ? true : false,

          flat_fixed_value:
            enhancements[2].credit.type === "fixed" ? true : false,

          flat_credit_schedule:
            enhancements[2].credit.type === "schedule" ? true : false,

          flat_fixed_credit_bonus: enhancements[2].credit.credit || 0,

          flat_fixed_start_year: enhancements[2].credit.start_year || 0,

          flat_credit_schedule_amount:
            enhancements[2].credit.schedule_type === "amount"
              ? enhancements[2].credit.schedule
              : null,

          flat_credit_schedule_rate:
            enhancements[2].credit.schedule_type === "rate"
              ? enhancements[2].credit.schedule
              : null,

          fees: true,
          premium_charge: fees[2].pcf.fees || 0,
          premium_same_in_all_years: fees[2].pcf.same_all_year ? true : false,
          premium_charges_same_in_all_years: !fees[2].pcf.same_all_year
            ? fees[2].pcf.schedule
            : null,

          loan_intrest_rate: fees[2].lif.fees,
          loan_same_in_all_years: fees[2].lif.same_all_year ? true : false,
          loan_intrest_rate_same_in_all_years: !fees[2].lif.same_all_year
            ? fees[2].lif.schedule
            : null,

          loan_intrest_charged_in_advanced: Number(
            this.getInputWithId(`in_arrears3`)
          )
            ? false
            : true,
          loan_intrest_charged_in_arrears: Number(
            this.getInputWithId(`in_arrears3`)
          )
            ? true
            : false,
          high_cap_fee: fees[2].hcf.fees,
          save_this_index_strategy_as_template: templates[3] ? true : false,
          template_name: templates[3],
          strategy_weight: strategy_weight3,
        };

        if (formData.index_strategy_3.performance_multiplier) {
          formData.index_strategy_3.loan_in_advanced_performance_multiplier =
            fees[2].pmf.fees;
          formData.index_strategy_3.loan_in_advanced_same_in_all_years = fees[2]
            .pmf.same_all_year
            ? true
            : false;
          formData.index_strategy_3.loan_in_advanced_performance_multiplier_same_in_all_years = !fees[2]
            .pmf.same_all_year
            ? fees[2].pmf.schedule
            : null;
        } else {
          formData.index_strategy_3.loan_in_advanced_performance_multiplier = 0;
          formData.index_strategy_3.loan_in_advanced_same_in_all_years = true;
          formData.index_strategy_3.loan_in_advanced_performance_multiplier_same_in_all_years = null;
        }

        if (formData.index_strategy_3.flat_credit_bonus) {
          formData.index_strategy_3.in_advanced_flat_credit_bonus_fees =
            fees[2].fcf.fees;
          formData.index_strategy_3.in_advanced_flat_credit_same_in_all_years = fees[2]
            .fcf.same_all_year
            ? true
            : false;
          formData.index_strategy_3.in_advanced_flat_credit_bonus_fees_same_in_all_years = !fees[2]
            .fcf.same_all_year
            ? fees[2].fcf.schedule
            : null;
        } else {
          formData.index_strategy_3.in_advanced_flat_credit_bonus_fees = 0;
          formData.index_strategy_3.in_advanced_flat_credit_same_in_all_years = false;
          formData.index_strategy_3.in_advanced_flat_credit_bonus_fees_same_in_all_years = null;
        }
      }

      this.$store.dispatch("loader", true);

      if (this.historicalId) {
        put(
          `${getUrl("historical")}${this.historicalId}/`,
          formData,
          authHeader()
        )
          .then(response => {
            console.log(response.data);
            this.$store.dispatch("loader", false);
            this.$toast.success(response.data.message);
            if(report){
              this.$router.push(`/report-builder/${this.$route.query.report}`);
            }else{
              this.$router.push(`/review-summary/${this.$route.params.scenario}`);
            }
          })
          .catch(error => {
            console.log(error);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
            this.$store.dispatch("loader", false);
          });
      } else {
        post(getUrl("historical"), formData, authHeader())
          .then(response => {
            console.log(response.data);
            this.$store.dispatch("loader", false);
            this.$toast.success(response.data.message);
            this.historicalId = response.data.data.id;
            this.$router.push(`/review-summary/${this.$route.params.scenario}`);
          })
          .catch(error => {
            console.log(error);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
            this.$store.dispatch("loader", false);
          });
      }
    },
    // populate existing index details
    populateIndexTemplate: function(iType = 1, id = null, type = 1) {
      this.$store.dispatch("loader", true);
      get(`${getUrl(`strategy-index-template${type}`)}${id}/`, authHeader())
        .then(response => {
          var data = response.data.data;
          this.populateIndex(iType, data);
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
    getTemplateDataId: function(id) {
      var temp = this.existingIndex.filter(i => i.id === id)[0];
      return temp ? temp : null;
    },

    setExistingIndex: function(iType, id) {
      let template = this.getTemplateDataId(id);
      if (template) {
        this.populateIndexTemplate(iType, template.uid, template.type);
        console.log(iType, template.uid, template.type);
        console.log("populate index data ");
      }
      this.error[`existing_${iType}`] = [];
    },

    setExistingIndexName: function(iType, name) {
      this.error[`existing_${iType}`] = [];
      this.existing_templates[`index${iType}`].name = name;
    },
    //  all template data from API
    getExistingIndex: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("historical-template"), authHeader())
        .then(response => {
          var data = response.data.data;
          var temp = [];
          let index = 1;
          // push index #1 templates in temp variable
          data.index_strategy_1.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 1,
              template_name: item.template_name,
            });
          });

          // push index #2 templates in temp variable
          data.index_strategy_2.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 2,
              template_name: item.template_name,
            });
          });

          // push index #3 templates in temp variable
          data.index_strategy_3.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 3,
              template_name: item.template_name,
            });
          });
          this.$store.dispatch("template", {
            type: "historical",
            data: temp,
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

    // populate historical data if historical data id exist in scenario
    this.$store.dispatch("loader", true);
    get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
      .then(response => {
        console.log(response.data);
        let id = response.data.data.historical;
        this.historicalId = id;
        this.$store.dispatch("activeScenario", response.data.data);
        if ((!this.$route.query.pid || this.$route.query.pid === 'null') && id) {
          this.populateHistoricalSimulationData(id);
        } else {
          this.$store.dispatch("loader", false);
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });

    if (!this.existingIndex.length) {
      this.getExistingIndex();
    }
    if (this.$route.query.pid && this.$route.query.pid !== "null") {
      this.populateHistoricalSimulationData(this.$route.query.pid, true);
    }
  },
  computed: {
    illustrateYear() {
      let scenario = this.$store.state.data.active_scenario;
      if (scenario) {
        return scenario.scenerio_details.years_to_illustrate;
      }
      return 0;
    },

    // active scenario data
    activeScenario() {
      return this.$store.state.data.active_scenario;
    },

    existingIndex() {
      return this.$store.state.data.templates.historical || [];
    },
  },
  watch: {
    illustrateYear() {
      setTimeout(() => {
        const inputs = document.querySelectorAll(".handleLimit");
        inputs.forEach(element =>
          element.addEventListener("input", function(e) {
            console.log(e.target.value);
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

        // input validation for min and max value
        const inputs2 = document.querySelectorAll(".onlyPositiveNum");
        inputs2.forEach(element =>
          element.addEventListener("input", function(e) {
            let len = e.target.value.length;
            e.target.value = e.target.value.replace(".", "");
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
      }, 200);
    },
  },
};
</script>
<style lang="">
</style>