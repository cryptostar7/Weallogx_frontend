<template lang="">
    <div v-for="(item, index) in scenariosList" :key="index">
        <div v-if="Number(index) < listLimit" class="list-item">
            <div class="list-item-inner">
                <div class="list-item-detail">
                    <p class="semi-bold-fw fs-18 mb-0 clientNamePara"><router-link :to="`/scenario-details/${item.id}`">{{ item.scenario_details.name }} {{ item.is_draft ? '(Draft)':''}}</router-link></p>
                    <label class="medium-fw">{{item.scenario_details.name}} {{item.illustration_age || 18}} YEARS</label>
                </div>
                <div class="list-item-actions">
                    <label class="date-label grey-clr fs-14 semi-bold-fw">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D" />
                            <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D" />
                            <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D" />
                        </svg>&nbsp;
                        {{$dateFormat(item.updated_at)}} 
                    </label>
                    <div class="round-btns">
                        <router-link :to="`/scenario-details/${item.id}`" class="btn round-btn">
                            <span>Edit</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z" fill="#9D9D9D" />
                                <path d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z" fill="#9D9D9D" />
                                <path d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z" fill="#9D9D9D" />
                            </svg>
                        </router-link>
                        <button class="btn round-btn" data-bs-target="#cloneScenarioModal" @click="$emit('setActionId', item.id)" data-bs-toggle="modal">
                            <span>Clone</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <mask id="path-1-inside-1_904_53" fill="white">
                                    <rect width="11" height="11" rx="1" />
                                </mask>
                                <rect width="11" height="11" rx="1" stroke="#9D9D9D" stroke-width="2.5"
                                    mask="url(#path-1-inside-1_904_53)" />
                                <mask id="path-2-inside-2_904_53" fill="white">
                                    <rect x="3" y="3" width="11" height="11" rx="1" />
                                </mask>
                                <rect x="3" y="3" width="11" height="11" rx="1" stroke="#9D9D9D" stroke-width="2.5"
                                    mask="url(#path-2-inside-2_904_53)" />
                            </svg>
                        </button>
                        <button class="btn round-btn">
                            <router-link class="td-none" :to="`/illustration-data/${item.id}`">
                            <span>Illustration</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <mask id="mask0_904_147" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="0" width="13" height="15">
                                    <path d="M12.8652 0.261597H2.86523C2.31295 0.261597 1.86523 0.704183 1.86523 1.25014V13.1127C1.86523 13.6586 2.31295 14.1012 2.86523 14.1012H12.8652C13.4175 14.1012 13.8652 13.6586 13.8652 13.1127V1.25014C13.8652 0.704183 13.4175 0.261597 12.8652 0.261597Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_904_147)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11523 1.49724V12.8655H12.6152V1.49724H3.11523ZM0.615234 1.2501C0.615234 0.0216987 1.62259 -0.974121 2.86523 -0.974121H12.8652C14.1079 -0.974121 15.1152 0.0216987 15.1152 1.2501V13.1126C15.1152 14.341 14.1079 15.3369 12.8652 15.3369H2.86523C1.62259 15.3369 0.615234 14.341 0.615234 13.1126V1.2501Z" fill="#9D9D9D" />
                                    <path d="M9.23926 3.53613H6.48926C6.31667 3.53613 6.17676 3.67444 6.17676 3.84505C6.17676 4.01567 6.31667 4.15397 6.48926 4.15397H9.23926C9.41185 4.15397 9.55176 4.01567 9.55176 3.84505C9.55176 3.67444 9.41185 3.53613 9.23926 3.53613Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.86426 3.84501C5.86426 3.50379 6.14408 3.22717 6.48926 3.22717H9.23926C9.58444 3.22717 9.86426 3.50379 9.86426 3.84501C9.86426 4.18624 9.58444 4.46285 9.23926 4.46285H6.48926C6.14408 4.46285 5.86426 4.18624 5.86426 3.84501Z" fill="#9D9D9D" />
                                    <path d="M10.7402 6.00745H4.99023C4.81765 6.00745 4.67773 6.14575 4.67773 6.31637C4.67773 6.48698 4.81765 6.62529 4.99023 6.62529H10.7402C10.9128 6.62529 11.0527 6.48698 11.0527 6.31637C11.0527 6.14575 10.9128 6.00745 10.7402 6.00745Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36523 6.31645C4.36523 5.97522 4.64506 5.69861 4.99023 5.69861H10.7402C11.0854 5.69861 11.3652 5.97522 11.3652 6.31645C11.3652 6.65767 11.0854 6.93429 10.7402 6.93429H4.99023C4.64506 6.93429 4.36523 6.65767 4.36523 6.31645Z" fill="#9D9D9D" />
                                    <path d="M10.7402 7.98462H4.99023C4.81765 7.98462 4.67773 8.12293 4.67773 8.29354C4.67773 8.46415 4.81765 8.60246 4.99023 8.60246H10.7402C10.9128 8.60246 11.0527 8.46415 11.0527 8.29354C11.0527 8.12293 10.9128 7.98462 10.7402 7.98462Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36523 8.2935C4.36523 7.95228 4.64506 7.67566 4.99023 7.67566H10.7402C11.0854 7.67566 11.3652 7.95228 11.3652 8.2935C11.3652 8.63472 11.0854 8.91134 10.7402 8.91134H4.99023C4.64506 8.91134 4.36523 8.63472 4.36523 8.2935Z" fill="#9D9D9D" />
                                    <path d="M10.7402 9.96167H4.99023C4.81765 9.96167 4.67773 10.1 4.67773 10.2706C4.67773 10.4412 4.81765 10.5795 4.99023 10.5795H10.7402C10.9128 10.5795 11.0527 10.4412 11.0527 10.2706C11.0527 10.1 10.9128 9.96167 10.7402 9.96167Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36523 10.2706C4.36523 9.92933 4.64506 9.65271 4.99023 9.65271H10.7402C11.0854 9.65271 11.3652 9.92933 11.3652 10.2706C11.3652 10.6118 11.0854 10.8884 10.7402 10.8884H4.99023C4.64506 10.8884 4.36523 10.6118 4.36523 10.2706Z" fill="#9D9D9D" />
                                </g>
                            </svg>
                            </router-link>
                        </button>
                        <button class="btn round-btn" data-bs-toggle="modal" data-bs-target="#deleteScenarioModal" @click="addDeleteId(item.id)">
                            <span>Delete</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.27159 12.4675H11.0086L12.0468 1.53235H2.17872L3.27159 12.4675ZM13.5127 1.50703C13.5855 0.739269 12.9818 0.0754395 12.2106 0.0754395H2.01414C1.24035 0.0754395 0.635718 0.74352 0.712665 1.51348L1.83531 12.7466C1.90214 13.4152 2.4648 13.9244 3.13679 13.9244H11.144C11.8185 13.9244 12.3823 13.4115 12.4462 12.7402L13.5127 1.50703Z" fill="#9D9D9D" />
                                <path d="M9.37198 7.53595C9.82346 7.53595 10.1895 7.16996 10.1895 6.71848C10.1895 6.267 9.82346 5.901 9.37198 5.901H4.85182C4.40034 5.901 4.03434 6.267 4.03434 6.71848C4.03434 7.16996 4.40034 7.53595 4.85182 7.53595H9.37198Z" fill="#9D9D9D" />
                            </svg>
                        </button>
                        <button class="btn round-btn report-round-btn collapsed" data-bs-toggle="collapse" :data-bs-target="`#innerReportCollapse${index}`" @click="testFunction(item)">
                            <span>Reports</span>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M13.4618 0.538452H11.308C11.0106 0.538452 10.7695 0.77953 10.7695 1.07691V12.9231C10.7695 13.2205 11.0106 13.4615 11.308 13.4615H13.4618C13.7592 13.4615 14.0003 13.2205 14.0003 12.9231V1.07691C14.0003 0.77953 13.7592 0.538452 13.4618 0.538452Z" fill="#9D9D9D" />
                                <path d="M8.07707 4.84619H5.92323C5.62584 4.84619 5.38477 5.08727 5.38477 5.38465V12.9231C5.38477 13.2205 5.62584 13.4616 5.92323 13.4616H8.07707C8.37446 13.4616 8.61553 13.2205 8.61553 12.9231V5.38465C8.61553 5.08727 8.37446 4.84619 8.07707 4.84619Z" fill="#9D9D9D" />
                                <path d="M2.69231 7H0.538462C0.241077 7 0 7.24108 0 7.53846V12.9231C0 13.2205 0.241077 13.4615 0.538462 13.4615H2.69231C2.98969 13.4615 3.23077 13.2205 3.23077 12.9231V7.53846C3.23077 7.24108 2.98969 7 2.69231 7Z" fill="#9D9D9D" />
                            </svg>
                            <svg class="chevron-up" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.75631 6.52983L6.99895 2.28719C7.38947 1.89666 7.38947 1.2635 6.99895 0.872971C6.60842 0.482447 5.97526 0.482447 5.58473 0.872971L1.34209 5.11561C0.951569 5.50614 0.951569 6.1393 1.34209 6.52982C1.73262 6.92035 2.36578 6.92035 2.75631 6.52983Z" fill="black" />
                                <path d="M5.60103 2.28719L9.84367 6.52983C10.2342 6.92036 10.8674 6.92036 11.2579 6.52983C11.6484 6.13931 11.6484 5.50614 11.2579 5.11562L7.01525 0.872977C6.62472 0.482452 5.99156 0.482452 5.60104 0.872976C5.21051 1.2635 5.21051 1.89667 5.60103 2.28719Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    <router-link :to="`/report-builder?scenario=${item.id}`" class="btn scenario-add-report-btn">+ Add Report</router-link>
                </div>
            </div>
            <SenarioReports :senarioReports="item.reports.reports_data" :collapseCustomId="`innerReportCollapse${index}`"/>
        </div>
    </div>
    <div class="text-center" v-if="scenariosList.length >= listLimit">
        <button v-if="!showAllList && scenariosList.length > listLimit" role="button" class="btn d-inline-block view-btn" @click="viewMore()">+ View More</button>
        <button v-if="showAllList" role="button" class="btn d-inline-block view-btn" @click="viewLess()">- View Less</button>
    </div>
    <input type="hidden" id="deleteScenarioId"/>
</template>
<script>
import SenarioReports from "../homepage/SenarioReports.vue";
import config from "../../../services/config.js";
export default {
  components: { SenarioReports },
  props: ["scenarios"],
  emits: ["setActionId"],
  data() {
    return {
      listLimit: config.SCENARIO_LIST_LIMIT,
      showAllList: false,
    };
  },
  methods: {
    viewMore: function() {
      this.listLimit = this.scenariosList.length;
      this.showAllList = true;
    },
    viewLess: function() {
      this.listLimit = config.SCENARIO_LIST_LIMIT;
      this.showAllList = false;
    },
    addDeleteId: function(id) {
      document.getElementById("deleteScenarioId").value = id;
    },
    testFunction: function(item){
       console.log(item);
    }
  },
  computed: {
    scenariosList() {
      return this.$props.scenarios;
    },
  },
};
</script>
<style lang="">
</style>