<template lang="">
  <div
    class="indexStrategyallDivs active mt-3 accordion-button collapsed"
    data-bs-toggle="collapse"
    data-bs-target="#index-strategy-parameters"
    aria-expanded="false"
    aria-controls="index-strategy-parameters"
  >
    <div class="d-flex justify-content-between align-items-center">
      <div class="indexStrategyheadBrdr">
        <p>
          Index Strategy Parameters
          <svg
            class="ms-2 boxTickImage"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.5"
              cy="10.5"
              r="9.75"
              fill="#0E6651"
              stroke="#14EAB7"
              stroke-width="1.5"
            />
            <rect
              x="16.6006"
              y="7.91222"
              width="9.99563"
              height="1.5"
              rx="0.75"
              transform="rotate(135 16.6006 7.91222)"
              fill="#14EAB7"
            />
            <rect
              x="9.5693"
              y="14.9806"
              width="5.50074"
              height="1.5"
              rx="0.75"
              transform="rotate(-135 9.5693 14.9806)"
              fill="#14EAB7"
            />
          </svg>
        </p>
        <div></div>
      </div>
    </div>
  </div>
  <div
    id="index-strategy-parameters"
    class="accordion-collapse collapse analysisParametersContent"
    data-bs-parent="#index-strategy-parameters"
    autocomplete="off"
  >
    <div class="after-yes-middle-div my-2 p-20">
      <p class="numberIndexStrtegiesPara" @click="validateMultiplierSchedule">Number of Index Strategies</p>
      <div class="d-flex justify-content-center">
        <div class="multiRadioBtnMainDiv">
          <div
            :class="`eachRadioBtnBgDiv ${activeTab === 1 ? 'active' : ''}`"
            id="historicalTopCheckBoxDiv1"
            @click="setActiveTab(1)"
          >
            <div
              class="form-check form-switch custom-switch radioClassDarkMode ms-2"
            >
              <input
                class="form-check-input"
                id="index_stategy_tab1"
                type="checkbox"
                role="switch"
                checked
                @click="handleCheckBox1"
              />
            </div>
            <p class="historicalRadioNumberPara">1</p>
          </div>
          <div
            :class="`eachRadioBtnBgDiv ${activeTab === 2 ? 'active' : ''}`"
            id="historicalTopCheckBoxDiv2"
            @click="setActiveTab(2)"
          >
            <div
              class="form-check form-switch custom-switch radioClassDarkMode ms-2"
            >
              <input
                class="form-check-input"
                id="index_stategy_tab2"
                type="checkbox"
                role="switch"
                v-model="tabs.tab2"
                @click="handleCheckBox2"
              />
            </div>
            <p class="historicalRadioNumberPara">2</p>
          </div>
          <div
            :class="`eachRadioBtnBgDiv ${activeTab === 3 && 'active'}`"
            id="historicalTopCheckBoxDiv3"
            @click="setActiveTab(3)"
          >
            <div
              class="form-check form-switch custom-switch radioClassDarkMode ms-2"
            >
              <input
                class="form-check-input"
                id="index_stategy_tab3"
                type="checkbox"
                role="switch"
                v-model="tabs.tab3"
                :checked="tabs.tab3 ? true : false"
                @click="handleCheckBox3"
              />
            </div>
            <p class="historicalRadioNumberPara">3</p>
          </div>
        </div>
      </div>

      <strategy-weight-component
        ref="strategyWeightRef"
        :visible="!tabs.tab2 && !tabs.tab3"
      />
      <strategy-weight-first-component
        ref="strategyWeight1Ref"
        :visible="tabs.tab2 && !tabs.tab3"
        :ratio="$props.strategyWeight1"
      />
      <strategy-weight-second-component
        ref="strategyWeight2Ref"
        :visible="tabs.tab3"
        :ratio="$props.strategyWeight2"
      />

      <div :class="`commonAllDivs ${activeTab !== 1 ? 'd-none' : ''}`">
        <div class="historicalYesDivCommon mt-4">
          <p class="indexStrategyPara">Index Strategy #1</p>
          <div class="indexStrategyBorder">
            <p></p>
          </div>
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-10 offset-md-1 strategyAllocation">
                <form action="javascript:void(0)">
                  <SelectDropdown
                    :list="existingIndex"
                    label="Use Existing Index Strategy"
                    id="existingComparativeVehiclePortfolio"
                    class="form-group less pt-3"
                    :error="error.existing_index1"
                    @clearError="() => (error.existing_index1 = false)"
                    @onSelectItem="(e) => setExistingIndex(1, e)"
                    @inputText="(e) => setExistingIndexName(1, e)"
                    :optional="true"
                  />
                </form>
              </div>
            </div>
          </div>
          <growth-parameters
            :currentTab="1"
            :update="$props.update.growth_parameters"
            @setUpdated="() => $emit('setUpdated', 'growth_parameters')"
            :rollingTime="$props.rollingTime"
          />
          <enhancements-component
            :currentTab="1"
            :update="$props.update.enhancement"
            @setUpdated="() => $emit('setUpdated', 'enhancement')"
            :applyPmAllIndex="applyPmAllIndex"
            @setApplyPmAllIndex="setApplyPmAllIndex"
            :applyFcAllIndex="applyFcAllIndex"
            @setApplyFcAllIndex="setApplyFcAllIndex"
            ref="enhancementComponentRef1"
            @clearError="clearError"
            @performanceChange="
              (val) => (strategies[0].enhancements.performance_multiplier = val)
            "
            @creditBonusChange="
              (val) => (strategies[0].enhancements.credit_bonus_fee = val)
            "
          />
          <fees-component
            :currentTab="1"
            :update="$props.update.fees"
            @setUpdated="() => $emit('setUpdated', 'fees')"
            :performance="strategies[0].enhancements.performance_multiplier"
            :flatCreditBonus="strategies[0].enhancements.credit_bonus_fee"
            :applyPmfAllIndex="applyPmfAllIndex"
            @setApplyPmfAllIndex="setApplyPmfAllIndex"
            :applyFcfAllIndex="applyFcfAllIndex"
            @setApplyFcfAllIndex="setApplyFcfAllIndex"
            @clearError="clearError"
          />
          <save-strategy-template :currentTab="1" @clearError="clearError" />
        </div>
      </div>
      <div :class="`commonAllDivs ${activeTab !== 2 ? 'd-none' : ''}`">
        <div class="historicalYesDivCommon mt-4">
          <p class="indexStrategyPara">Index Strategy #2</p>
          <div class="indexStrategyBorder">
            <p></p>
          </div>
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-10 offset-md-1 strategyAllocation">
                <form action="javascript:void(0)">
                  <SelectDropdown
                    :list="existingIndex"
                    label="Choose Existing Index Strategy"
                    id="existingComparativeVehiclePortfolioTab2"
                    class="form-group less pt-3"
                    :error="error.existing_index2"
                    @clearError="() => (error.existing_index2 = false)"
                    @onSelectItem="(e) => setExistingIndex(2, e)"
                    @inputText="(e) => setExistingIndexName(2, e)"
                    :optional="true"
                  />
                </form>
              </div>
            </div>
          </div>
          <growth-parameters
            :currentTab="2"
            :update="$props.update.growth_parameters"
            @setUpdated="() => $emit('setUpdated', 'growth_parameters')"
            :rollingTime="$props.rollingTime"
          />
          <enhancements-component
            :currentTab="2"
            :update="$props.update.enhancement"
            :applyPmAllIndex="applyPmAllIndex"
            @setApplyPmAllIndex="setApplyPmAllIndex"
            :applyFcAllIndex="applyFcAllIndex"
            @setApplyFcAllIndex="setApplyFcAllIndex"
            ref="enhancementComponentRef2"
            @setUpdated="() => $emit('setUpdated', 'enhancement')"
            @clearError="clearError"
            @performanceChange="
              (val) => (strategies[1].enhancements.performance_multiplier = val)
            "
            @creditBonusChange="
              (val) => (strategies[1].enhancements.credit_bonus_fee = val)
            "
          />
          <fees-component
            :currentTab="2"
            :update="$props.update.fees"
            @setUpdated="() => $emit('setUpdated', 'fees')"
            :performance="strategies[1].enhancements.performance_multiplier"
            :flatCreditBonus="strategies[1].enhancements.credit_bonus_fee"
            :applyPmfAllIndex="applyPmfAllIndex"
            @setApplyPmfAllIndex="setApplyPmfAllIndex"
            :applyFcfAllIndex="applyFcfAllIndex"
            @setApplyFcfAllIndex="setApplyFcfAllIndex"
            @clearError="clearError"
          />
          <save-strategy-template :currentTab="2" @clearError="clearError" />
        </div>
      </div>
      <div :class="`commonAllDivs ${activeTab !== 3 ? 'd-none' : ''}`">
        <div class="historicalYesDivCommon mt-4">
          <p class="indexStrategyPara">Index Strategy #3</p>
          <div class="indexStrategyBorder">
            <p></p>
          </div>
          <div class="container mb-4">
            <div class="row">
              <div class="col-md-10 offset-md-1 strategyAllocation">
                <form action="javascript:void(0)">
                  <SelectDropdown
                    :list="existingIndex"
                    label="Choose Existing Index Strategy Allocation"
                    id="existingComparativeVehiclePortfolioTab3"
                    class="form-group less pt-3"
                    :error="error.existing_index3"
                    @clearError="() => (error.existing_index3 = false)"
                    @onSelectItem="(e) => setExistingIndex(3, e)"
                    @inputText="(e) => setExistingIndexName(3, e)"
                    :optional="true"
                  />
                </form>
              </div>
            </div>
          </div>
          <growth-parameters
            :currentTab="3"
            :update="$props.update.growth_parameters"
            @setUpdated="() => $emit('setUpdated', 'growth_parameters')"
            :rollingTime="$props.rollingTime"
          />
          <enhancements-component
            :currentTab="3"
            :update="$props.update.enhancement"
            @setUpdated="() => $emit('setUpdated', 'enhancement')"
            :applyPmAllIndex="applyPmAllIndex"
            @setApplyPmAllIndex="setApplyPmAllIndex"
            :applyFcAllIndex="applyFcAllIndex"
            @setApplyFcAllIndex="setApplyFcAllIndex"
            ref="enhancementComponentRef3"
            @clearError="clearError"
            @performanceChange="
              (val) => (strategies[2].enhancements.performance_multiplier = val)
            "
            @creditBonusChange="
              (val) => (strategies[2].enhancements.credit_bonus_fee = val)
            "
          />
          <fees-component
            :currentTab="3"
            :update="$props.update.fees"
            @setUpdated="() => $emit('setUpdated', 'fees')"
            :performance="strategies[2].enhancements.performance_multiplier"
            :flatCreditBonus="strategies[2].enhancements.credit_bonus_fee"
            :applyPmfAllIndex="applyPmfAllIndex"
            @setApplyPmfAllIndex="setApplyPmfAllIndex"
            :applyFcfAllIndex="applyFcfAllIndex"
            @setApplyFcfAllIndex="setApplyFcfAllIndex"
            @clearError="clearError"
          />
          <save-strategy-template :currentTab="3" @clearError="clearError" />
        </div>
      </div>
      <div class="d-flex justify-content-center mt-4 mx-4" v-if="tabs.tab2">
        <div class="w-75">
          <div class="d-flex align-items-center mb-2">
            <div class="form-check form-switch custom-switch ms-2">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="savePortfolioCheckbox"
                v-model="portFolioCheckbox"
              />
            </div>
            <label for="savePortfolioCheckbox" class="buttonSaveRadioPara"
              >Save as Index Strategy Allocation</label
            >
          </div>
          <div
            class="saveZIndexTempContent form-group"
            v-if="portFolioCheckbox"
          >
            <label class="error text-center" v-if="error.portfolio_name">{{
              error.portfolio_name
            }}</label>
            <form action="javascript:void(0)">
              <label for="templateName">Template Name</label>
              <input
                type="text"
                class="form-control"
                v-model="portFolioName"
                id="portFolioNameInput"
                @click="error.portfolio_name = false"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
import AnalysisParameters from "./AnalysisParameters.vue";
import EnhancementsComponent from "./EnhancementsComponent.vue";
import GrowthParameters from "./GrowthParameters.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";
import FeesComponent from "./FeesComponent.vue";
import SaveStrategyTemplate from "./SaveStrategyTemplate.vue";
import StrategyWeightComponent from "./StrategyWeightComponent.vue";
import StrategyWeightFirstComponent from "./StrategyWeightFirstComponent.vue";
import StrategyWeightSecondComponent from "./StrategyWeightSecondComponent.vue";
export default {
  components: {
    SelectDropdown,
    GrowthParameters,
    AnalysisParameters,
    EnhancementsComponent,
    ScenarioLabelComponent,
    FeesComponent,
    SaveStrategyTemplate,
    StrategyWeightComponent,
    StrategyWeightFirstComponent,
    StrategyWeightSecondComponent,
  },
  props: ["update", "rollingTime", "strategyWeight1", "strategyWeight2"],
  emits: ["clearError", "setUpdated", "populateIndexTemplate"],
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
      applyPmAllIndex: false,
      applyPmfAllIndex: false,
      applyFcAllIndex: false,
      applyFcfAllIndex: false,
      portFolioCheckbox: false,
      portFolioName: "",
      error: {
        1: [],
        2: [],
        3: [],
      },
    };
  },
  methods: {
    validateMultiplierSchedule: function() {
      let valid = true;
      
      if(!this.$refs.enhancementComponentRef1.$refs.performanceMultiplierRef.validateScheduleData()){
        valid = false
      }

      if(this.tabs.tab2 && !this.$refs.enhancementComponentRef2.$refs.performanceMultiplierRef.validateScheduleData()){
        valid = false
      }

      if(this.tabs.tab3 && !this.$refs.enhancementComponentRef3.$refs.performanceMultiplierRef.validateScheduleData()){
        valid = false
      }

      return valid;
    },
    setApplyPmAllIndex: function (val) {
      this.applyPmAllIndex = val;
    },
    setApplyPmfAllIndex: function (val) {
      this.applyPmfAllIndex = val;
    },
    setApplyFcAllIndex: function (val) {
      this.applyFcAllIndex = val;
    },
    setApplyFcfAllIndex: function (val) {
      this.applyFcfAllIndex = val;
    },
    setActiveTab: function (tab) {
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
    handleCheckBox1: function (event) {
      event.stopPropagation();
      event.preventDefault();
    },
    handleCheckBox2: function (event) {
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
    handleCheckBox3: function (event) {
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
    clearError: function (tab = 1, key = "") {
      this.$emit("clearError", tab, key);
    },
    getTemplateDataId: function (id) {
      var temp = this.existingIndex.filter((i) => i.id === id)[0];
      return temp ? temp : null;
    },
    setExistingIndex: function (iType, id) {
      let template = this.getTemplateDataId(id);
      if (template) {
        this.$emit("populateIndexTemplate", iType, template.uid, template.type);
      }
      this.error[`existing_${iType}`] = [];
    },
    setExistingIndexName: function (iType, name) {
      this.error[`existing_${iType}`] = [];
      this.existing_templates[`index${iType}`].name = name;
    },
    getStrategyWeight: function () {
      let sw1 = this.$refs.strategyWeightRef.getRange();
      let sw2 = this.$refs.strategyWeight1Ref.getRange();
      let sw3 = this.$refs.strategyWeight2Ref.getRange();
      let obj = { sw1: null, sw2: null, sw3: null };
      
      obj.sw1 = {
        weight_1: Number(sw1[0].replace("%", "")),
        weight_2: Number(sw1[1].replace("%", "")),
        weight_3: Number(sw1[2].replace("%", "")),
      };

      obj.sw2 = {
        weight_1: Number(sw2[0].replace("%", "")),
        weight_2: Number(sw2[1].replace("%", "")),
        weight_3: Number(sw2[2].replace("%", "")),
      };

      obj.sw3 = {
        weight_1: Number(sw3[0].replace("%", "")),
        weight_2: Number(sw3[1].replace("%", "")),
        weight_3: Number(sw3[2].replace("%", "")),
      };

      return obj;
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

        // input validation for min and max value
        const inputs2 = document.querySelectorAll(".onlyPositiveNum");
        inputs2.forEach((element) =>
          element.addEventListener("input", function (e) {
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
<style lang=""></style>
