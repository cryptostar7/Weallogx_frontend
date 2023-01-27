<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"> 
          <router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link>
        </li>
        <li class="done"> 
          <router-link to="/illustration-data" class="nav-link p-0">Illustration Data</router-link>
        </li>
        <li class="done"> 
          <router-link to="/comparative-vehicles" class="nav-link p-0">Comparative Vehicles</router-link> 
        </li>
        <li class="active"> 
          <router-link to="/historical-simulations" class="nav-link p-0">Historical Simulations</router-link> 
        </li>
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
                    <div class="form-check form-switch custom-switch ms-2"> <input class="form-check-input"
                        type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked /> </div>
                  </div>
                  <div class="after-yes-middle-div my-2 p-4">
                    <p class="numberIndexStrtegiesPara">Number of Index Strategies</p>
                    <div class="d-flex justify-content-center">
                      <div class="multiRadioBtnMainDiv"> 
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 1 ? 'active':''}`" id="historicalTopCheckBoxDiv1"  @click="setActiveTab(1)">
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 ">
                             <input class="form-check-input" type="checkbox" role="switch" checked /> </div>
                          <p class="historicalRadioNumberPara">1</p>
                        </div> 
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 2 ? 'active' : ''}`" id="historicalTopCheckBoxDiv2" @click="setActiveTab(2)">
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 "> 
                            <input class="form-check-input" type="checkbox" role="switch" v-model="tabs.tab2" @click="handleCheckBox2"/> 
                          </div>
                          <p class="historicalRadioNumberPara">2</p>
                        </div>
                        <div :class="`eachRadioBtnBgDiv ${activeTab === 3 && 'active'}`"  id="historicalTopCheckBoxDiv3" @click="setActiveTab(3)" >
                          <div class=" form-check form-switch custom-switch radioClassDarkMode ms-2 "> 
                            <input class="form-check-input" type="checkbox" role="switch" v-model="tabs.tab3" @click="handleCheckBox3"/> 
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
                                <SelectDropdown :list="dropdown.historyIndex" label="Use Existing Index Strategy"
                                  id="existingComparativeVehiclePortfolio" class="form-group less pt-3"
                                  :optional="true" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters :currentTab="1" /> 
                        <growth-parameters /> 
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
                                <SelectDropdown :list="dropdown.historyIndex2"
                                  label="Choose Existing Index Strategy Allocation"
                                  id="existingComparativeVehiclePortfolioTab2" class="form-group less pt-3"
                                  :optional="true" />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters :currentTab="2" /> 
                        <growth-parameters /> 
                        <enhancements-component :currentTab="2"  @performanceChange="() => strategies[1].enhancements.performance_multiplier = !strategies[1].enhancements.performance_multiplier" @creditBonusChange="() => strategies[1].enhancements.credit_bonus_fee = !strategies[1].enhancements.credit_bonus_fee"/> 
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
                        <growth-parameters /> 
                        <enhancements-component :currentTab="3"  @performanceChange="() => strategies[2].enhancements.performance_multiplier = !strategies[2].enhancements.performance_multiplier" @creditBonusChange="() => strategies[2].enhancements.credit_bonus_fee = !strategies[2].enhancements.credit_bonus_fee"/> 
                        <fees-component :currentTab="3" :performance="strategies[2].enhancements.performance_multiplier" :flatCreditBonus="strategies[2].enhancements.credit_bonus_fee"/> 
                        <save-strategy-template :currentTab="3"/>
                      </div>
                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch ms-2"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation2"
                                v-model="saveStrategyAllocationTemplate3" /> 
                            </div>
                            <label for="saveAllocation2" class="buttonSaveRadioPara">Save as Index Strategy Allocation</label>
                          </div>
                          <div class="saveZIndexTempContent form-group" v-if="saveStrategyAllocationTemplate3">
                            <form action="javascript:void(0)"> <label for="templateName">Template Name</label> <input
                                type="text" class="form-control" id="templateName" /> </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-30"> 
                    <router-link to="/review-summary" class="nav-link btn form-next-btn active fs-14" id="nextBtnVsblOnSlct">Review</router-link> 
                    <span class="d-block mb-3"></span>
                    <div class="d-flex position-relative mb-5"> 
                      <router-link to="/historical-simulations-after-yes" class="nav-link btn form-back-btn fs-14 backHistoricalBtn">
                        <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6" />Back
                      </router-link> 
                      <router-link to="/review-summary" class=" nav-link btn form-back-btn fs-14 skipHistoricalBtn "> 
                        Skip Historical Simulations
                      </router-link> 
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
          { id: 1, template_name: "S&P 500" },
          { id: 2, template_name: "Blended Index" },
          { id: 3, template_name: "Bloomberg US Dynamic Balance II ER" },
          { id: 4, template_name: "PIMCO Tactical Balanced ER" },
        ],
        historyIndex2: [
          { id: 1, template_name: "S&P 500" },
          { id: 2, template_name: "Blended Index" },
          { id: 3, template_name: "Bloomberg US Dynamic Balance II ER" },
          { id: 4, template_name: "PIMCO Tactical Balanced ER" },
        ],
        historyIndex3: [
          { id: 1, template_name: "S&P 500" },
          { id: 2, template_name: "Blended Index" },
          { id: 3, template_name: "Bloomberg US Dynamic Balance II ER" },
          { id: 4, template_name: "PIMCO Tactical Balanced ER" },
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
        if (this.tabs.tab2) {
          this.tabs.tab3 = true;
          this.activeTab = tab;
        }
      }
    },
    handleCheckBox2: function(event) {
      event.stopPropagation();
      if (this.activeTab === 2) {
        event.preventDefault();
        return false;
      }
      if (this.tabs.tab2 && this.tabs.tab3) {
        this.tabs.tab3 = false;
        this.activeTab = 1;
      }
    },
    handleCheckBox3: function(event) {
      event.stopPropagation();
      if (!this.tabs.tab2 || this.activeTab === 3) {
        event.preventDefault();
      }
    },
    testFunction: function() {
      console.log(this.strategies);
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
};
</script>
<style lang="">
</style>