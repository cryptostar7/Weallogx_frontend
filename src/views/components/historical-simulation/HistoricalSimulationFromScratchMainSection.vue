<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link to="/create-new-scenario" class="nav-link p-0"
            >Scenario Details</router-link
          >
        </li>
        <li class="done">
          <router-link to="/illustration-data" class="nav-link p-0"
            >Illustration Data</router-link
          >
        </li>
        <li class="done">
          <router-link to="/comparative-vehicles" class="nav-link p-0"
            >Comparative Vehicles</router-link
          >
        </li>
        <li class="active">
          <router-link to="/historical-simulations" class="nav-link p-0"
            >Historical Simulations</router-link
          >
        </li>
      </ul>
      <router-link to="/" class="btn mt-1 ms-1">
        <img
          src="@/assets/images/icons/cross.svg"
          alt="cross"
          class="ReviewCrossBtn"
        />
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
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="col-md-10 offset-md-1">
                  <div class="d-flex align-items-center">
                    <label
                      for="scheduleTemplateCheckbox"
                      class="historical-paraCheckBox"
                      >Historical Simulations</label
                    >
                    <div class="form-check form-switch custom-switch ms-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="scheduleTemplateCheckbox"
                        checked
                      />
                    </div>
                  </div>
                  <div class="after-yes-middle-div my-2 p-4">
                    <p class="numberIndexStrtegiesPara">
                      Number of Index Strategies
                    </p>
                    <div class="d-flex justify-content-center">
                      <div class="multiRadioBtnMainDiv">
                        <label
                          for="tab1"
                          :class="`eachRadioBtnBgDiv ${
                            activeTab === 1 && 'active'
                          }`"
                          id="historicalTopCheckBoxDiv1"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              @change="setActiveTab(1)"
                              type="checkbox"
                              role="switch"
                              id="tab1"
                              checked
                            />
                          </div>
                          <p class="historicalRadioNumberPara">1</p>
                        </label>
                        <!--  -->
                        <label
                          for="tab2"
                          :class="`eachRadioBtnBgDiv ${
                            activeTab === 2 && 'active'
                          }`"
                          id="historicalTopCheckBoxDiv2"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              @change="setActiveTab(2)"
                              role="switch"
                              id="tab2"
                            />
                          </div>
                          <p class="historicalRadioNumberPara">2</p>
                        </label>
                        <!--  -->
                        <label
                          :class="`eachRadioBtnBgDiv ${
                            activeTab === 3 && 'active'
                          }`"
                          for="tab3"
                          id="historicalTopCheckBoxDiv3"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              @change="setActiveTab(3)"
                              role="switch"
                              id="tab3"
                            />
                          </div>
                          <p class="historicalRadioNumberPara">3</p>
                        </label>
                      </div>
                    </div>
                    <!-- tab 1 start -->
                    <div
                      :class="`commonAllDivs ${activeTab !== 1 && 'd-none'}`"
                    >
                      <div class="historicalYesDivCommon mt-4">
                        <p class="indexStrategyPara">Index Strategy #1</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <SelectDropdown
                                  :list="dropdown.historyIndex ?? []"
                                  label="Use Existing Index Strategy"
                                  id="existingComparativeVehiclePortfolio"
                                  class="form-group less pt-3"
                                  :optional="true"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component :currentTab="activeTab" />
                        <save-strategy-template />
                      </div>
                    </div>
                    <!-- tab 1 end -->
                    <div
                      :class="`commonAllDivs ${activeTab !== 2 && 'd-none'}`"
                    >
                    <stretagy-weight-first-component />
                      
                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #2</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <SelectDropdown
                                  :list="dropdown.historyIndex2 ?? []"
                                  label="Choose Existing Index Strategy Allocation"
                                  id="existingComparativeVehiclePortfolioTab2"
                                  class="form-group less pt-3"
                                  :optional="true"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component :currentTab="activeTab" />
                        <save-strategy-template />
                      </div>
                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="saveAllocation"
                                v-model="saveStrategyAllocationTemplate2"
                              />
                            </div>
                            <label
                              for="saveAllocation"
                              class="buttonSaveRadioPara"
                              >Save as Index Strategy Allocation</label
                            >
                          </div>
                          <div
                            class="saveZIndexTempContent form-group"
                            v-if="saveStrategyAllocationTemplate2"
                          >
                            <form action="javascript:void(0)">
                              <label for="templateName">Allocation Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="templateName"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- tab 2 end -->
                    <div
                      :class="`commonAllDivs ${activeTab !== 3 && 'd-none'}`"
                    >
                    <stretagy-weight-second-component />
                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #3</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <SelectDropdown
                                  :list="dropdown.historyIndex3 ?? []"
                                  label="Choose Existing Index Strategy Allocation"
                                  id="existingComparativeVehiclePortfolioTab3"
                                  class="form-group less pt-3"
                                  :optional="true"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component :currentTab="activeTab"/>
                        <save-strategy-template />
                      </div>

                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="saveAllocation2"
                                v-model="saveStrategyAllocationTemplate3"
                              />
                            </div>
                            <label
                              for="saveAllocation2"
                              class="buttonSaveRadioPara"
                              >Save as Index Strategy Allocation</label
                            >
                          </div>
                          <div
                            class="saveZIndexTempContent form-group"
                            v-if="saveStrategyAllocationTemplate3"
                          >
                            <form action="javascript:void(0)">
                              <label for="templateName">Template Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="templateName"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- tab 3 end -->
                  </div>

                  <div class="text-center mt-30">
                    <router-link
                      to="/review-summary"
                      class="nav-link btn form-next-btn active fs-14"
                      id="nextBtnVsblOnSlct"
                      >Review</router-link
                    >
                    <span class="d-block mb-3"></span>
                    <div class="d-flex position-relative mb-5">
                      <router-link
                        to="/historical-simulations-after-yes"
                        class="
                          nav-link
                          btn
                          form-back-btn
                          fs-14
                          backHistoricalBtn
                        "
                        ><img
                          src="@/assets/images/icons/chevron-left-grey.svg"
                          class="img-fluid"
                          alt="Chevron"
                          width="6"
                        />
                        Back</router-link
                      >
                      <router-link
                        to="/review-summary"
                        class="
                          nav-link
                          btn
                          form-back-btn
                          fs-14
                          skipHistoricalBtn
                        "
                      >
                        Skip Historical Simulations</router-link
                      >
                      <a
                        href="javascript:void(0)"
                        class="nav-link btn form-back-btn fs-14 skipScenarioBtn"
                        >Save Scenario as Draft</a
                      >
                    </div>
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
import StretagyWeightFirstComponent from './StretagyWeightFirstComponent.vue';
import StretagyWeightSecondComponent from './StretagyWeightSecondComponent.vue';
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
      dropdown: {
        historyIndex: [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
        historyIndex2: [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
        historyIndex3: [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
      },
      rollingTimePeriod: [15, 20, 25, 30, 35, 40, 45, 50],
      rollingPeriod1: {
        value: "",
        time: 50,
      },
      customRollingPeriod1: "",
      saveStrategyAllocationTemplate2:false,
      saveStrategyAllocationTemplate3:false
    };
  },
  mounted() {
    putPercentage();
  },
  updated() {
    putPercentage();
  },
  methods: {
    setActiveTab: function (tab) {
      this.activeTab = tab;
    },
  },
};
</script>
<style lang="">
</style>