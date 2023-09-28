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
        <div class="col-sm-12 col-xxl-10">
          <div class="main-form-div">
            <scenario-label-component />
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="row justify-content-center">
                  <div class="col-sm-12 col-lg-11 col-xl-9">
                    <div class="d-flex align-items-center"> <label for="scheduleTemplateCheckbox"
                        class="historical-paraCheckBox">Historical Simulations</label>
                      <div class="form-check form-switch custom-switch ms-2">
                         <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked @change="skipHistoricalStep" /> 
                      </div>
                    </div>
                      <global-parameters :update="update" @clearError="clearGlobalErrors" @setRollingTime="setRollingTime"/> 
                      <index-strategy-parameters :update="update" @clearError="clearError" :rollingTime="rollingTime" @populateIndexTemplate="populateIndexTemplate"/>
                    <div class="text-center mt-30"> 
                      <router-link to="" class="nav-link btn d-inline-block form-next-btn active fs-14" id="nextBtnVsblOnSlct" @click="submitHandler()">{{$route.query.review === 'true' ? 'Save & Review':'Review' }}</router-link> 
                      <span class="d-block mb-3"></span>
                      <div class="d-flex position-relative mb-5"> 
                        <router-link :to="`/${$route.query.review === 'true' ? 'review-summary':'select-historical-index-strategy-allocation'}/${$route.params.scenario}`" class="nav-link btn form-back-btn px-4 fs-14 backHistoricalBtn">
                          <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6" />Back
                        </router-link> 
                        <router-link :to="`/review-summary/${$route.params.scenario}`" class=" nav-link btn form-back-btn fs-14 skipHistoricalBtn "> Skip Historical Simulations</router-link> 
                        <a href="javascript:void(0)" class="nav-link btn form-back-btn fs-14 skipScenarioBtn" v-if="$route.query.report" @click="submitHandler(false, true)">Save & Return to Current Report</a> 
                        <router-link to="" class="nav-link btn form-back-btn fs-14 skipScenarioBtn" v-if="!$route.query.report" @click="submitHandler(true)">Save Scenario as Draft</router-link> 
                      </div>
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
import GlobalParameters from "./GlobalParameters.vue";
import IndexStrategyParameters from "./IndexStrategyParameters.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";
import { post, get, put } from "../../../network/requests";
import { authHeader, getFirstError } from "../../../services/helper";
import { getUrl } from "../../../network/url";
import { computed } from "vue";
export default {
  components: {
    RouterLink,
    GlobalParameters,
    IndexStrategyParameters,
    ScenarioLabelComponent,
  },
  data() {
    return {
      update: {
        global_parameters: false,
        growth_parameters: false,
        enhancement: false,
        fees: false,
      },
      rollingTime: 30,
      error: {
        1: [],
        2: [],
        3: [],
        global: [],
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
    skipHistoricalStep: function(e) {
      if (!e.target.checked) {
        let confirmation = confirm(
          "Are you sure? Changes you made may not be saved."
        );
        if (confirmation) {
          this.$router.push(`/review-summary/${this.$route.params.scenario}`); // redirect to review summary page if historical simulation toggle off
        } else {
          e.target.checked = true;
        }
      }
    },
    // this function has return the input value
    getInputWithId: function(id) {
      return document.getElementById(id)
        ? document.getElementById(id).value
        : null;
    },
    // this function has return the input checked status
    isChecked: function(id) {
      return document.getElementById(id)
        ? document.getElementById(id).checked
        : false;
    },
    // this function is used to for making the checked input
    setChecked: function(id) {
      if (document.getElementById(id)) {
        document.getElementById(id).checked = true;
      }
    },
    // this function is used to for making the unchecked input
    setUnChecked: function(id) {
      if (document.getElementById(id)) {
        document.getElementById(id).checked = false;
      }
    },
    // set the input value using the input id attribute
    setInputWithId: function(id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
      return value;
    },
    // set rollin time period data
    setRollingTime: function(value) {
      this.rollingTime = value;
    },
    // remove error
    clearError: function(tab = 1, key = "") {
      if (this.error[tab][key]) {
        this.error[tab][key] = false;
      }
    },
    // remove error
    clearGlobalErrors: function(key = "") {
      if (this.error[key]) {
        this.error[key] = false;
      }
    },
    getActiveTabs: function() {
      let tab1 = document.getElementById("index_stategy_tab1").checked;
      let tab2 = document.getElementById("index_stategy_tab2").checked;
      let tab3 = document.getElementById("index_stategy_tab3").checked;
      return [tab1, tab2, tab3];
    },
    getGlobalParameterData: function() {
      let obj = {
        rolling_time: this.getInputWithId("rolling_time"),
        analyze: this.getInputWithId("analyze_type"),
        credit_method: this.getInputWithId("credit_base_method"),
        distributions: this.getInputWithId("distribution_method"),
      };

      //premium charge fees
      let pcf_all_year = Number(this.getInputWithId("pcf_all_year"));
      let pcfobj = {
        fees: this.getInputWithId("premium_charge_fees"),
        same_all_year: pcf_all_year,
      };

      if (!pcf_all_year) {
        let tempData = [];
        for (var y = 1; y < this.illustrateYear + 1; y++) {
          tempData.push({
            year: y,
            value: this.getInputWithId(`pcf_schedule${y}`),
          });
        }
        pcfobj.schedule = tempData;
      }

      obj.pcf = pcfobj;

      //loan interest rate fees
      let lif_all_year = Number(this.getInputWithId("lif_all_year"));
      let lifobj = {
        fees: this.getInputWithId("loan_interest_fees"),
        same_all_year: lif_all_year,
      };

      if (!lif_all_year) {
        let tempData = [];
        for (var y = 1; y < this.illustrateYear + 1; y++) {
          tempData.push({
            year: y,
            value: this.getInputWithId(`lif_schedule${y}`),
          });
        }
        lifobj.schedule = tempData;
      }
      obj.lif = lifobj;

      return obj;
    },
    getGrowthData: function() {
      let arr = [];
      let activeTabs = this.getActiveTabs();
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          let obj = {
            index: this.getInputWithId("analysis_index" + i),
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
      let activeTabs = this.getActiveTabs();
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
      let activeTabs = this.getActiveTabs();
      for (var i = 1; i < 4; i++) {
        if (activeTabs[i - 1]) {
          let performance_checkbox = Number(
            this.getInputWithId("performance_checkbox" + i)
          );

          let flat_checkbox = Number(
            this.getInputWithId("credit_checkbox" + i)
          );

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

          //High cap fees
          let hcfobj = {
            fees: this.getInputWithId("high_cap_fees" + i),
          };

          arr.push({
            hcf: hcfobj,
            pmf: pmfobj,
            fcf: fcfobj,
          });
        }
      }
      return arr;
    },
    // handle form submitted data
    submitHandler: function(draft = false, report = false) {
      this.analysis = this.getGlobalParameterData();
      this.growth = this.getGrowthData();
      this.enhancements = this.getEnhancementData();
      this.fees = this.getFeesData();
      let analysis = this.analysis;
      let growth = this.growth;
      let enhancements = this.enhancements;
      let fees = this.fees;
      let valid = true;
      var focus = false;
      let activeTabs = this.getActiveTabs();
      let templates = { 1: "", 2: "", 3: "" };

      let portFolio = document.getElementById("savePortfolioCheckbox")
        ? document.getElementById("savePortfolioCheckbox").checked
        : false;

      let portFolioName = document.getElementById("portFolioNameInput")
        ? document.getElementById("portFolioNameInput").value
        : false;

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

      // error focus on global premium charge tab
      if (this.error.analysis_pc_schedule) {
        var area = document.getElementById("globalPcTab");
        focus = true;
        area.scrollIntoView();
      }

      // error focus on global premium charge tab
      if (this.error.analysis_lif_schedule) {
        var area = document.getElementById("globaLifTab");
        focus = true;
        area.scrollIntoView();
      }

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
        rolling_time_period_years: analysis.rolling_time,
        analyze: analysis.analyze,
        credit_base_method: analysis.credit_method,
        distributions: analysis.distributions,

        premium_charge: analysis.pcf.fees || 0,
        premium_same_in_all_years: analysis.pcf.same_all_year ? true : false,
        premium_charges_same_in_all_years: !analysis.pcf.same_all_year
          ? analysis.pcf.schedule
          : null,

        loan_intrest_rate: analysis.lif.fees || 0,
        loan_same_in_all_years: analysis.lif.same_all_year ? true : false,
        loan_intrest_rate_same_in_all_years: !analysis.lif.same_all_year
          ? analysis.lif.schedule
          : null,

        loan_intrest_charged_in_advanced: Number(
          this.getInputWithId("in_arrears")
        )
          ? false
          : true,
        loan_intrest_charged_in_arrears: Number(
          this.getInputWithId("in_arrears")
        )
          ? true
          : false,

        index_strategy_1: {
          index: growth[0].index,
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

          flat_fixed_credit_bonus:
            enhancements[0].credit.type === "fixed"
              ? enhancements[0].credit.credit
              : 0,

          flat_fixed_start_year:
            enhancements[0].credit.type === "fixed"
              ? enhancements[0].credit.start_year
              : 0,

          flat_credit_schedule_amount:
            enhancements[0].credit.schedule_type === "amount"
              ? enhancements[0].credit.schedule
              : null,

          flat_credit_schedule_rate:
            enhancements[0].credit.schedule_type === "rate"
              ? enhancements[0].credit.schedule
              : null,

          fees: true,
          high_cap_fee: Number(fees[0].hcf.fees),
          save_this_index_strategy_as_template: templates[1] ? true : false,
          template_name: templates[1],
          strategy_weight: strategy_weight1,
          flat_credit_bonus_fees_apply_for_all_indexes: false,
        },
        index_strategy_2: null,
        index_strategy_3: null,
        save_scenario_as_draft: draft,
        scenario_id: this.$route.params.scenario,
        save_portfolio: portFolio,
        portfolio_name: portFolio ? portFolioName : "",
      };

      // index strategy data append for first tab
      if (formData.index_strategy_1.performance_multiplier) {
        formData.index_strategy_1.performance_multiplier_fees =
          fees[0].pmf.fees;
        formData.index_strategy_1.performance_multiplier_fees_same_in_all_years = fees[0]
          .pmf.same_all_year
          ? true
          : false;
        formData.index_strategy_1.performance_multiplier_fees_same_in_all_years_schedule = !fees[0]
          .pmf.same_all_year
          ? fees[0].pmf.schedule
          : null;
      } else {
        formData.index_strategy_1.performance_multiplier_fees = 0;
        formData.index_strategy_1.performance_multiplier_fees_same_in_all_years = true;
        formData.index_strategy_1.performance_multiplier_fees_same_in_all_years_schedule = null;
      }

      if (formData.index_strategy_1.flat_credit_bonus) {
        formData.index_strategy_1.flat_credit_bonus_fees =
          fees[0].fcf.fees || 0;
        formData.index_strategy_1.flat_credit_same_in_all_years = fees[0].fcf
          .same_all_year
          ? true
          : false;
        formData.index_strategy_1.flat_credit_bonus_fees_same_in_all_years =
          fees[0].fcf.same_all_year;

        formData.index_strategy_1.flat_credit_bonus_fees_same_in_all_years_schedule = !fees[0]
          .fcf.same_all_year
          ? fees[0].fcf.schedule
          : null;
      } else {
        formData.index_strategy_1.flat_credit_bonus_fees = 0;
        formData.index_strategy_1.flat_credit_same_in_all_years = false;
        formData.index_strategy_1.flat_credit_bonus_fees_same_in_all_years = false;
        formData.index_strategy_1.flat_credit_bonus_fees_same_in_all_years_schedule = false;
      }

      // index strategy data append for middle tab
      if (activeTabs[1]) {
        formData.index_strategy_2 = {
          index: growth[1].index,
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
          high_cap_fee: Number(fees[1].hcf.fees),
          save_this_index_strategy_as_template: templates[2] ? true : false,
          template_name: templates[2],
          strategy_weight: strategy_weight2,
          flat_credit_bonus_fees_apply_for_all_indexes: false,
        };

        if (formData.index_strategy_2.performance_multiplier) {
          formData.index_strategy_2.performance_multiplier_fees =
            fees[1].pmf.fees;
          formData.index_strategy_2.performance_multiplier_fees_same_in_all_years = fees[1]
            .pmf.same_all_year
            ? true
            : false;
          formData.index_strategy_2.performance_multiplier_fees_same_in_all_years_schedule = !fees[1]
            .pmf.same_all_year
            ? fees[1].pmf.schedule
            : null;
        } else {
          formData.index_strategy_2.performance_multiplier_fees = 0;
          formData.index_strategy_2.performance_multiplier_fees_same_in_all_years = true;
          formData.index_strategy_2.performance_multiplier_fees_same_in_all_years_schedule = null;
        }

        if (formData.index_strategy_2.flat_credit_bonus) {
          formData.index_strategy_2.flat_credit_bonus_fees = fees[1].fcf.fees;
          formData.index_strategy_2.flat_credit_same_in_all_years = fees[1].fcf
            .same_all_year
            ? true
            : false;

          formData.index_strategy_2.flat_credit_bonus_fees_same_in_all_years =
            fees[1].fcf.same_all_year;

          formData.index_strategy_2.flat_credit_bonus_fees_same_in_all_years_schedule = !fees[1]
            .fcf.same_all_year
            ? fees[1].fcf.schedule
            : null;
        } else {
          formData.index_strategy_2.flat_credit_bonus_fees = 0;
          formData.index_strategy_2.flat_credit_same_in_all_years = false;
          formData.index_strategy_2.flat_credit_bonus_fees_same_in_all_years = false;
          formData.index_strategy_2.flat_credit_bonus_fees_same_in_all_years_schedule = null;
        }
      }

      // index strategy data append for last tab
      if (activeTabs[2]) {
        formData.index_strategy_3 = {
          index: growth[2].index,
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
          high_cap_fee: Number(fees[2].hcf.fees),
          save_this_index_strategy_as_template: templates[3] ? true : false,
          template_name: templates[3],
          strategy_weight: strategy_weight3,
          flat_credit_bonus_fees_apply_for_all_indexes: false,
        };

        if (formData.index_strategy_3.performance_multiplier) {
          formData.index_strategy_3.performance_multiplier_fees =
            fees[2].pmf.fees;
          formData.index_strategy_3.performance_multiplier_fees_same_in_all_years = fees[2]
            .pmf.same_all_year
            ? true
            : false;
          formData.index_strategy_3.performance_multiplier_fees_same_in_all_years_schedule = !fees[2]
            .pmf.same_all_year
            ? fees[2].pmf.schedule
            : null;
        } else {
          formData.index_strategy_3.performance_multiplier_fees = 0;
          formData.index_strategy_3.performance_multiplier_fees_same_in_all_years = true;
          formData.index_strategy_3.performance_multiplier_fees_same_in_all_years_schedule = null;
        }

        if (formData.index_strategy_3.flat_credit_bonus) {
          formData.index_strategy_3.flat_credit_bonus_fees = fees[2].fcf.fees;
          formData.index_strategy_3.flat_credit_same_in_all_years = fees[2].fcf
            .same_all_year
            ? true
            : false;
          formData.index_strategy_3.flat_credit_bonus_fees_same_in_all_years =
            fees[2].fcf.same_all_year;

          formData.index_strategy_3.flat_credit_bonus_fees_same_in_all_years_schedule = !fees[2]
            .fcf.same_all_year
            ? fees[2].fcf.schedule
            : null;
        } else {
          formData.index_strategy_3.flat_credit_bonus_fees = 0;
          formData.index_strategy_3.flat_credit_same_in_all_years = false;
          formData.index_strategy_3.flat_credit_bonus_fees_same_in_all_years = false;
          formData.index_strategy_3.flat_credit_bonus_fees_same_in_all_years_schedule = null;
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
            if (report) {
              this.$router.push(`/report-builder/${this.$route.query.report}`);
            } else {
              this.$router.push(
                `/review-summary/${this.$route.params.scenario}`
              );
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
    setGrowthData: function(tab, obj = []) {
      this.setInputWithId(`analysis_index${tab}`, obj.index);
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
      // performance multiplier fee
      if (obj.performance_multiplier) {
        if (obj.performance_multiplier_fees_same_in_all_years_schedule) {
          this.setUnChecked(`multiplierFee${tab}`);
          this.setInputWithId(`performance_multiplier_fees${tab}`, "");
          obj.performance_multiplier_fees_same_in_all_years_schedule.forEach(
            i => {
              this.setInputWithId(`pmf_schedule${tab}${i.year}`, i.value);
            }
          );
        } else {
          this.setChecked(`multiplierFee${tab}`);
          this.setInputWithId(
            `performance_multiplier_fees${tab}`,
            obj.performance_multiplier_fees
          );
        }
      }

      // flat flat/credit fee
      if (obj.flat_credit_bonus) {
        if (!obj.flat_credit_bonus_fees_same_in_all_years) {
          this.setUnChecked(`flat-credit-fee-radio${tab}`);
          this.setInputWithId(`flat_credit_fees${tab}`, "");
          obj.flat_credit_bonus_fees_same_in_all_years_schedule.forEach(i => {
            this.setInputWithId(`fcf_schedule${tab}${i.year}`, i.value);
          });
        } else {
          this.setChecked(`flat-credit-fee-radio${tab}`);
          this.setInputWithId(
            `flat_credit_fees${tab}`,
            obj.flat_credit_bonus_fees
          );
        }
      }

      //High Cap Fee
      this.high_cap_fees = obj.high_cap_fee;
      this.setInputWithId(`high_cap_fees${tab}`, obj.high_cap_fee);
      this.update.fees = true;
    },
    populateGlobalParameters: function(obj) {
      this.setInputWithId("rolling_time", obj.rolling_time_period_years);
      this.setInputWithId("analyze_type", obj.analyze);
      this.setInputWithId("credit_base_method", obj.credit_base_method);
      this.setInputWithId("distribution_method", obj.distributions);

      // Premium charge
      if (obj.premium_charges_same_in_all_years) {
        this.setUnChecked("premiumcharge");
        this.setInputWithId("premium_charge_fees", "");
        obj.premium_charges_same_in_all_years.forEach(i => {
          this.setInputWithId(`pcf_schedule${i.year}`, i.value);
        });
      } else {
        this.setChecked("premiumcharge");
        this.setInputWithId("premium_charge_fees", obj.premium_charge);
      }

      // Loan interest rate
      if (obj.loan_intrest_rate_same_in_all_years) {
        this.setUnChecked("loanIntrest");
        this.setInputWithId("loan_interest_fees", "");
        obj.loan_intrest_rate_same_in_all_years.forEach(i => {
          this.setInputWithId(`lif_schedule${i.year}`, i.value);
        });
      } else {
        this.setChecked("loanIntrest");
        this.setInputWithId("loan_interest_fees", obj.loan_intrest_rate);
      }

      this.update.global_parameters = true;
    },
    populateIndex: function(tab = 1, data) {
      this.setGrowthData(tab, data);
      this.setEnhancementData(tab, data);
      this.setFeesData(tab, data);
    },
    // populate existing index details
    populateIndexTemplate: function(iType = 1, id = null, type = 1) {
      this.$store.dispatch("loader", true);
      get(`${getUrl(`strategy-index-template${type}`)}${id}/`, authHeader())
        .then(response => {
          var data = response.data.data;
          this.populateGlobalParameters(data);
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
    // get previous data
    populateHistoricalSimulationData: function(id, portfolio = false) {
      get(
        `${getUrl(portfolio ? "historical-portfolio" : "historical")}${id}`,
        authHeader()
      )
        .then(response => {
          let data = response.data.data;
          console.log(data);
          this.populateGlobalParameters(data);
          this.populateIndex(1, data.index_strategy_1);
          if (data.index_strategy_2) {
            // this.tabs.tab2 = true;
            this.setChecked("index_stategy_tab2");
            this.populateIndex(2, data.index_strategy_2);
          }
          if (data.index_strategy_3) {
            // this.tabs.tab3 = true;
            this.setChecked("index_stategy_tab3");
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
      let analysis = this.analysis;
      let growth = this.growth[tab];
      let enhancements = this.enhancements[tab];
      let fees = this.fees[tab];
      this.error[tab + 1].fees = false;
      this.error[tab + 1].enhancements = false;
      let portFolio = document.getElementById("savePortfolioCheckbox")
        ? document.getElementById("savePortfolioCheckbox").checked
        : false;
      let portFolioName = document.getElementById("portFolioNameInput")
        ? document.getElementById("portFolioNameInput").value
        : false;

      if (portFolio && !portFolioName) {
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

      // premium charge fees validation
      if (analysis && !analysis.pcf.same_all_year) {
        let obj = analysis.pcf.schedule;
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
          this.error.analysis = true;
          this.error.analysis_pc_schedule =
            "Please fill premium charge rate for all years.";
        } else {
          this.error.analysis_pc_schedule = "";
        }
      }

      if (analysis.lif.analysis < 0.1) {
        valid = false;
        this.error.analysis = true;
        this.$toast.warning("Loan interest rate must be grater than 0.1");
      }

      // loan interest analysis validation
      if (analysis && !analysis.lif.same_all_year) {
        let obj = analysis.lif.schedule;
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
          this.error.analysis = true;
          this.error.analysis_lif_schedule =
            "Please fill loan interest rate for all years.";
        } else {
          this.error.analysis_lif_schedule = "";
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
        if (
          (!this.$route.query.pid || this.$route.query.pid === "null") &&
          id
        ) {
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

    if (this.$route.query.pid && this.$route.query.pid !== "null") {
      this.populateHistoricalSimulationData(this.$route.query.pid, true);
    }

    // get template list
    if (!this.existingIndex.length) {
      this.getExistingIndex();
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
    existingIndex() {
      return this.$store.state.data.templates.historical || [];
    },
  },
};
</script>
<style>
.error {
  color: red;
}
</style>