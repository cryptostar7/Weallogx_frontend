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
            <growth-parameters :currentTab="1" :update="$props.update.growth_parameters" @setUpdated="() => update.growth_parameters = false"/> 
            <enhancements-component :currentTab="1" :update="$props.update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError"  @performanceChange="(val) => strategies[0].enhancements.performance_multiplier = val" @creditBonusChange="(val) => strategies[0].enhancements.credit_bonus_fee = val"/> 
            <fees-component :currentTab="1" :update="$props.update.fees" @setUpdated="() => update.fees = false" :performance="strategies[0].enhancements.performance_multiplier" :flatCreditBonus="strategies[0].enhancements.credit_bonus_fee" @clearError="clearError"/> 
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
            <growth-parameters :currentTab="2"  :update="$props.update.growth_parameters" @setUpdated="() => update.growth_parameters = false" /> 
            <enhancements-component :currentTab="2" :update="$props.update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError" @performanceChange="(val) => strategies[1].enhancements.performance_multiplier = val" @creditBonusChange="(val) => strategies[1].enhancements.credit_bonus_fee = val"/> 
            <fees-component :currentTab="2" :update="$props.update.fees" @setUpdated="() => update.fees = false" :performance="strategies[1].enhancements.performance_multiplier" :flatCreditBonus="strategies[1].enhancements.credit_bonus_fee" @clearError="clearError"/> 
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
            <growth-parameters :currentTab="3" :update="$props.update.growth_parameters" @setUpdated="() => update.growth_parameters = false" /> 
            <enhancements-component :currentTab="3" :update="$props.update.enhancement" @setUpdated="() => update.enhancement = false" @clearError="clearError"  @performanceChange="() => strategies[2].enhancements.performance_multiplier = !strategies[2].enhancements.performance_multiplier" @creditBonusChange="() => strategies[2].enhancements.credit_bonus_fee = !strategies[2].enhancements.credit_bonus_fee"/> 
            <fees-component :currentTab="3" :update="$props.update.fees" @setUpdated="() => update.fees = false" :performance="strategies[2].enhancements.performance_multiplier" :flatCreditBonus="strategies[2].enhancements.credit_bonus_fee" @clearError="clearError"/> 
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
import FeesComponent from "./FeesComponentNew.vue";
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
  props: ["update"],
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