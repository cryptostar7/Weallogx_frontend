<template>
  <div
    :class="`empty report-card-wrapper ${$store.state.app.presentation_mode && !activeTabs[keyId] ? 'd-none' : ''}`"
    data-class="empty-wrapper"
    data-empty="2"
  >
    <div class="fill" data-class="empty-fill" draggable="true" data-fill="3">
      <div
        :class="`report-client-list-div ${keyId} ${activeTabs[keyId] ? '' : 'presentdeActive'}`"
        id="makingThingsEqualTabView"
      >
        <div :class="`ComparativeTableMainDiv rightDivTop3 ${activeTabs[keyId] ? 'active' : ''}`">
          <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
              <div class="button-cover2 prstnRadioBtnHide">
                <div class="radioBtnDiv r2" id="button-2">
                  <input
                    id="rightCheckBox3"
                    type="checkbox"
                    class="checkbox2 rightCheckBox3"
                    rightCheckAttr="3"
                    @change="() => $store.dispatch('toggleReportTabByID', keyId)"
                    :checked="activeTabs[keyId]"
                  />
                  <div class="knobs2"></div>
                  <div class="layer2"></div>
                </div>
              </div>
              <label for="rightCheckBox3" class="rghtTopHeadcommon">
                Making Things Equal
                <span class="ms-3 equalThingTabTxt">{{ tabSubtitle }}</span>
              </label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
              <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="5.5" width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
                <rect width="13" height="1.5" rx="0.75" fill="#C2C2C2" />
              </svg>
            </div>
          </div>
          <div class="collapseDivMain collapseDiv3" :style="{ display: activeTabs[keyId] ? 'block' : 'none' }">
            <hr class="collapseDivHr" />
            <div class="px-3 pt-3 pb-2">
              <div class="d-flex justify-content-center tab-menu">
                <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist" aria-orientation="vertical">
                  <div
                    id="v-pills-distributions-tab"
                    class="active"
                    aria-controls="v-pills-distributions"
                    aria-selected="true"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-distributions"
                    role="tab"
                    type="button"
                    @click="() => (currentTab = 'distribution')"
                  >
                    Distribution
                  </div>
                  <div
                    id="v-pills-rateOfReturn-tab"
                    @click="() => (currentTab = 'ror')"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-rateOfReturn"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-rateOfReturn"
                    aria-selected="false"
                  >
                    Rate of Return
                  </div>
                </div>
              </div>

              <div class="tab-content" id="pills-tabContent">
                
                <!-- Distribution tab start -->
                <div
                  id="v-pills-distributions"
                  class="tab-pane fade show active distribution"
                  role="tabpanel"
                  aria-labelledby="v-pills-distributions-tab"
                >
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-25" role="tablist" aria-orientation="horizontal">
                      <div
                        id="v-pills-amount-tab"
                        :class="{ active: distributionType === 'amount' }"
                        data-bs-target="#v-pills-amount"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-amount"
                        aria-selected="true"
                        @click="setDistributionType('amount')"
                      >
                        Amount
                      </div>
                      <div
                        id="v-pills-longevity-tab"
                        :class="{ active: distributionType === 'longevity' }"
                        data-bs-target="#v-pills-longevity"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-longevity"
                        aria-selected="true"
                        @click="setDistributionType('longevity')"
                      >
                        Match Longevity
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-20" role="tablist" aria-orientation="horizontal">

                      <div
                        :class="horizontalBarsCollapsed ? 'active' : ''"
                        id="v-pills-default-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-default"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="collapseHorizontalBars(true)"
                      >
                        Individual
                      </div>

                      <div
                        :class="!horizontalBarsCollapsed ? 'active' : ''"
                        id="v-pills-deathBenefit-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-deathBenefit"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-deathBenefit"
                        aria-selected="true"
                        @click="collapseHorizontalBars(false)"
                      >
                        Show All
                      </div>

                    </div>
                  </div>

                  <div class="container-fluid">
                    <div class="mainProgrssBarDiv graph-area">
                      <div class="progressAbsltCls makeThinkEqualDiv p-relative">

                        <div class="progressAllBarsDivMain makeThingsEqualDivInner">
                          <horizontal-graph-bar
                            v-for="(item, index) in activeDistributions"
                            :key="index"
                            :title="cvName(item.index)"
                            :defaultCollapsed="horizontalBarsCollapsed"
                            :value="distributionYears(item.index)"
                            :maxValue="distributionYears(0)"
                            :color="`barClr${1 + index}`"
                            :label="$numFormatWithDollar(distribution(item.index))"
                          />

                          <year-age-chart />

                        </div>
                      </div>
                    </div>                    
                  </div>
                </div>







                
                <!-- Rate of return tab start -->
                <div
                  id="v-pills-rateOfReturn"
                  class="tab-pane fade show"
                  role="tabpanel"
                  aria-labelledby="v-pills-rateOfReturn-tab"
                >

                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-25" role="tablist" aria-orientation="horizontal">
                      <div
                        id="v-pills-default-tab"
                        :class="{ active: rateOfReturnType === 'default' }"
                        data-bs-target="#v-pills-default"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="setRateOfReturnType('default')"
                      >
                        Default
                      </div>
                      <div
                        id="v-pills-values-tab"
                        :class="{ active: rateOfReturnType === 'values' }"
                        data-bs-target="#v-pills-values"
                        data-bs-toggle="pill"
                        role="tab"
                        type="button"
                        aria-controls="v-pills-values"
                        aria-selected="true"
                        @click="setRateOfReturnType('values')"
                      >
                        Match Values
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-2">
                    <div class="nav mltplSwtchDiv nav-pills w-20" role="tablist" aria-orientation="horizontal">

                      <div
                        :class="rateOfReturnBarsCollapsed ? 'active' : ''"
                        id="v-pills-default-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-default"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-default"
                        aria-selected="true"
                        @click="collapseRateOfReturnBars(true)"
                      >
                        Individual
                      </div>

                      <div
                        :class="!rateOfReturnBarsCollapsed ? 'active' : ''"
                        id="v-pills-deathBenefit-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-deathBenefit"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-deathBenefit"
                        aria-selected="true"
                        @click="collapseRateOfReturnBars(false)"
                      >
                        Show All
                      </div>
                    </div>
                  </div>

                  <div class="container-fluid">

                    <div class="CompMainProgrssBarDiv graph-area">
                      <div class="CompProgressAbsltCls p-relative">
                      <div class="lines-div d-flex flex-column justify-content-between">
                        <div v-for="(item, index) in 7" :key="index"
                          :class="`d-flex comulativeProgBrdrDivs ${index > 5 ? 'm-0 p-0':''}`"
                        >
                          <p class="comulativeProgBrdr"></p>
                        </div>
                      </div>
                        <div :class="`progressAllBarsDivMain ${activeDistributions.length == 2 ? 'twoEffect' : ''}`">
                          <div class="d-flex justify-content-between align-items-end w-100 cumulative-value-bar">

                            <vertical-graph-bar
                              v-for="(item, index) in activeRatesOfReturn"
                              :key="index"
                              :title="cvName(item.index)"
                              :defaultCollapsed="rateOfReturnBarsCollapsed"
                              :value="deathBenefit(item.index)"
                              :maxValue="maxRor"
                              :barColor="`cumulativeProgLifePro${1 + index}`"
                              :labelColor="`BottomcumulativeLifePro${1 + index}`"
                              :label="$numFormatWithDollar(distribution(item.index))"
                            />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <comparative-disclosure-component v-if="activeTabs[keyId]" :currentTab="3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComparativeDisclosureComponent from './ComparativeDisclosureComponent.vue';
import HorizontalGraphBar from './HorizontalGraphBar.vue';
import YearAgeChart from './YearAgeChart.vue';
import VerticalGraphBar from './VerticalGraphBar.vue';

export default {
  components: {
    ComparativeDisclosureComponent, HorizontalGraphBar, YearAgeChart, VerticalGraphBar
  },
  props: ['keyId'],
  data() {
    return {
      activeTabs: this.$store.state.data.reportTabs.active,
      distributionType: 'amount',
      rateOfReturnType: 'default',
      currentTab: 'distribution',
      horizontalBarsCollapsed: true,
      rateOfReturnBarsCollapsed: true,
      data: {
        distribution: [
          {
            index: 0,
            active: true,
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: '',
            distribution_years: 0
          },
          {
            index: 1,
            active: false,
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: '',
            distribution_years: 0
          },
          {
            index: 2,
            active: false,
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: '',
            distribution_years: 0
          },
          {
            index: 3,
            active: false,
            type: '',
            distributions: 0,
            longevity: 0,
            longevity_in_percent: '',
            ending_value: 0,
            ending_value_in_percent: '',
            death_benefit_in_percent: '',
            death_benefit: '',
            distribution_years: 0
          }
        ],
        rate_of_returns: [
          {
            index: 0,
            active: true,
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            index: 1,
            active: false,
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            index: 2,
            active: false,
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          },
          {
            index: 3,
            active: false,
            type: '',
            ror: '',
            longevity: '',
            ending_value: '',
            death_benefit: '',
            longevity_in_percent: '',
            ending_value_in_percent: '',
            death_benefit_in_percent: ''
          }
        ]
      }
    };
  },
  computed: {
    comparative() {
      return this.$store.state.data.report.comparative || false;
    },
    policyNickname() {
      return this.comparative.lirp_data.insurance_policy_nickname;
    },
    death_benefit() {
      return this.$store.state.data.report.comparative_death_benefit || false;
    },
    ending_value() {
      return this.$store.state.data.report.comparative_ending_value || false;
    },
    longevity() {
      return this.$store.state.data.report.comparative_longevity || false;
    },
    maxRor() {
      let ror = this.data.rate_of_returns;

      return Math.max(
        ...[
          ...ror.map((i) => Number(i.ror)),
          ...ror.map((i) => Number(i.longevity)),
          ...ror.map((i) => Number(i.ending_value)),
          ...ror.map((i) => Number(i.death_benefit))
        ]
      );
    },
    notes() {
      let note = this.$store.state.data.report.notes || [];

      if (note) {
        note = note.filter((i) => i.note_type === 'comperative_distribution' && i.vehicle_type);

        let v1 = note.filter((i) => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter((i) => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter((i) => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter((i) => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }

      return note;
    },
    ror_notes() {
      let note = this.$store.state.data.report.notes || [];

      if (note) {
        note = note.filter((i) => i.note_type === 'comperative_rate_of_return' && i.vehicle_type);

        let v1 = note.filter((i) => i.vehicle_type === 1)[0] || null;
        let v2 = note.filter((i) => i.vehicle_type === 2)[0] || null;
        let v3 = note.filter((i) => i.vehicle_type === 3)[0] || null;
        let v4 = note.filter((i) => i.vehicle_type === 4)[0] || null;
        note = [v1, v2, v3, v4];
      }

      return note;
    },
    tabSubtitle() {
      return this.currentTab === 'distribution'
        ? `How long do the comparative vehicles last matching the annual distributions of the ${this.policyNickname}?`
        : `What rate of return is required for the comparative vehicles to match the ${this.policyNickname}’s longevity and ending values?`;
    },
    activeDistributions() {
      return this.data.distribution.filter((d) => d.active)
    },
    activeRatesOfReturn() {
      return this.data.rate_of_returns.filter((r) => r.active)
    }
  },
  beforeMount() {
    if (this.comparative && Object.keys(this.comparative).length) {

      const distributions = this.comparative.lirp_data.chart_output.distributions
      const firstDistributionYear = distributions.findIndex((d) => d > 0)

      if (this.comparative.cv_1) {

        this.data.distribution[1].active = true

        this.data.distribution[0].distributions = this.comparative.lirp_data.making_things_equal_distribution;
        this.data.rate_of_returns[0].ror = this.comparative.lirp_data.rate_of_return;

        // TODO - Is it possible that the lirp distributions don't last until the end?
        this.data.distribution[0].distribution_years = distributions.length - firstDistributionYear

        this.data.distribution[1].longevity = this.death_benefit.cv_1.match_distributions.longevity;
        this.data.distribution[1].death_benefit = this.death_benefit.cv_1.match_distributions.death_benefit;
        this.data.distribution[1].ending_value = this.death_benefit.cv_1.match_distributions.surrender_value;

        this.data.distribution[1].distribution_years =
          this.computeDistributionYears(this.comparative.cv_1.comparison.chart_output.distributions,
          firstDistributionYear)

        this.data.rate_of_returns[1].active = true
        this.data.rate_of_returns[1].longevity = this.comparative.cv_1.match_rates_of_return.longevity;
        this.data.rate_of_returns[1].death_benefit = Number(this.comparative.cv_1.match_rates_of_return.death_benefit);
        this.data.rate_of_returns[1].ending_value = this.comparative.cv_1.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_2).length) {

        this.data.distribution[2].active = true

        this.data.distribution[2].longevity = this.death_benefit.cv_2.match_distributions.longevity;
        this.data.distribution[2].death_benefit = this.death_benefit.cv_2.match_distributions.death_benefit;
        this.data.distribution[2].ending_value = this.death_benefit.cv_2.match_distributions.surrender_value;

        this.data.distribution[2].distribution_years =
          this.computeDistributionYears(this.comparative.cv_2.comparison.chart_output.distributions,
          firstDistributionYear)

        this.data.rate_of_returns[2].active = true
        this.data.rate_of_returns[2].longevity = this.comparative.cv_2.match_rates_of_return.longevity;
        this.data.rate_of_returns[2].death_benefit = Number(this.comparative.cv_2.match_rates_of_return.death_benefit);
        this.data.rate_of_returns[2].ending_value = this.comparative.cv_2.match_rates_of_return.surrender_value;
      }

      if (Object.values(this.comparative.cv_3).length) {

        this.data.distribution[3].active = true

        this.data.distribution[3].longevity = this.death_benefit.cv_3.match_distributions.longevity;
        this.data.distribution[3].death_benefit = this.death_benefit.cv_3.match_distributions.death_benefit;
        this.data.distribution[3].ending_value = this.death_benefit.cv_3.match_distributions.surrender_value;

        this.data.distribution[3].distribution_years =
          this.computeDistributionYears(this.comparative.cv_3.comparison.chart_output.distributions,
          firstDistributionYear)

        this.data.rate_of_returns[3].active = true
        this.data.rate_of_returns[3].longevity = this.comparative.cv_3.match_rates_of_return.longevity;
        this.data.rate_of_returns[3].death_benefit = Number(this.comparative.cv_3.match_rates_of_return.death_benefit);
        this.data.rate_of_returns[3].ending_value = this.comparative.cv_3.match_rates_of_return.surrender_value;
      }
    }
  },
  methods: {
    setDistributionType(type) {
      this.distributionType = type;
    },
    setRateOfReturnType(type) {
      this.distributionType = type;
    },
    cvName(index) {
      return this.$store.state.data.report.cv_names[index];
    },
    collapseHorizontalBars(collapse) {
      this.horizontalBarsCollapsed = collapse
    },
    collapseRateOfReturnBars(collapse) {
      this.rateOfReturnBarsCollapsed = collapse
    },
    computeDistributionYears(distributions, firstDistributionYear) {
      let lastDistributionYear = distributions.findLastIndex(
        (d, i) => i > firstDistributionYear && d > 0
      )
      // If distributions last until the end then we're done.
      if (lastDistributionYear < -1) {
        return distributions.length - firstDistributionYear
      }
      const firstDistribution = distributions[firstDistributionYear]
      const lastDistribution = distributions[lastDistributionYear]
      // The last distribution might not last a full year. So we'll add just a fraction
      // of the last year's distribution. 
      if (lastDistribution < firstDistribution) {
        return lastDistributionYear - firstDistributionYear +
          lastDistribution / firstDistribution
      } else {
        return lastDistributionYear - firstDistributionYear + 1
      }
    },
    distribution(index) {
      if (this.distributionType === 'amount') {
        return this.data.distribution[0].distributions
      }
      return index
        ? this.data.distribution[index].death_benefit
        : this.data.distribution[0].distributions
    },
    distributionYears(index) {
      if (this.distributionType === 'amount') {
        return this.data.distribution[index].distribution_years
      }
      return this.data.distribution[0].distribution_years
    },
    deathBenefit(index) {
      if (this.rateOfReturnType === 'default') {
        return index
          ? this.data.rate_of_returns[index].death_benefit
          : this.data.rate_of_returns[0].ror
      }      
    }
  }
};
</script>
