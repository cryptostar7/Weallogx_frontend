<template lang="">
  <div class="bottom-disclosure pt-0 px-3" id="disclosure7" data-dc="7">
    <div :class="`${$props.containerFluid ? '' : 'container-fluid'}`">
      <div class="disclosure-div">
        <div
          class="disclosure-header-div d-flex align-items-center justify-content-between"
        >
          <h4 class="disclosure-heading">Disclosure</h4>
          <div class="disclosure-right-actions">
            <button
              class="btn round-btn disclosure-edit"
              v-if="!saveDisclosure"
              @click="() => (this.saveDisclosure = true)"
            >
              <span>Edit</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8172 1.59583H2.33885C1.29631 1.59583 0.451172 2.44097 0.451172 3.4835V12.1384C0.451172 13.1809 1.29631 14.026 2.33885 14.026H10.9937C12.0362 14.026 12.8814 13.1809 12.8814 12.1384V4.69293L10.8814 6.69291V12.026H2.45117V3.59583H8.81725L10.8172 1.59583Z"
                  fill="#9D9D9D"
                ></path>
                <path
                  d="M5.51465 9.51606L6.66809 6.70245L8.3313 8.30895L5.51465 9.51606Z"
                  fill="#9D9D9D"
                ></path>
                <path
                  d="M12.7425 0.604405C12.7865 0.560484 12.8575 0.559852 12.9022 0.602984L14.4181 2.06566C14.4639 2.10987 14.4646 2.18305 14.4196 2.22811L8.37761 8.28205C8.33363 8.32611 8.26244 8.32672 8.21773 8.28341L6.69811 6.8118C6.6524 6.76754 6.65182 6.69441 6.69682 6.64942L12.7425 0.604405Z"
                  fill="#9D9D9D"
                ></path>
              </svg>
            </button>
            <button
              class="btn round-btn disclosure-save"
              v-if="saveDisclosure"
              @click="saveMessage()"
            >
              <span>Save</span>
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                <rect
                  x="15.6938"
                  y="2.42676"
                  width="14.1407"
                  height="2.12203"
                  rx="1.06101"
                  transform="rotate(135 15.6938 2.42676)"
                  fill="#9D9D9D"
                ></rect>
                <rect
                  x="5.74683"
                  y="12.4258"
                  width="7.78182"
                  height="2.12203"
                  rx="1.06101"
                  transform="rotate(-135 5.74683 12.4258)"
                  fill="#9D9D9D"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
        <div
          :class="`disclosure-text-wrapper ${saveDisclosure ? 'editable' : ''}`"
        > 
          <div style="font-size: 10px;">
          {{disclosure_head}} <br/>
          </div>
          <div
          >
            <div
              style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;"
            >
              <div
                v-for="(item, index) in disclosure_message"
                :key="index"
                :style="{
                  borderLeft: index === 0 ? 'none' : '1px solid #ccc',
                  padding: '0px',
                  paddingLeft: index === 0 ? '0px' : '10px'
                }"
              >
                <ul
                  style="list-style-type: none; padding: 0; margin: 0;"
                >
                  <li 
                    v-for="(value, key) in item" :key="key"
                    :style="{
                      fontSize: '10px'
                    }"
                  >
                    <span v-if="
                      key === 'start_year_multi' ||
                      key === 'start_year_flat'
                    ">
                      Start Year: {{ value }}
                    </span>

                    <span v-else-if="
                      value === 'Scheduled'
                      "
                    >
                      {{ key }}: 
                      <span 
                        v-if="
                          key === 'Performance Multiplier'
                        "
                        :style="{ color: 'blue' }"
                        @click="showTableModal('performance', index)"
                      >
                      {{ value }}
                      </span>
 
                      <span 
                        v-else-if="
                          key === 'Flat Credit/Bonus'
                        "
                        :style="{ color: 'blue' }"
                        @click="showTableModal('flat', index)"
                      >
                      {{ value }}
                      </span>
                    </span>

                    <span v-else>
                      {{ key }}: {{ value }}
                    </span>
                    
                  </li>
                </ul>
              </div>
            </div>
            <p
              class="disclosure-msg"
              contenteditable="true"
              ref="editableDiv"
              @focus="() => (this.saveDisclosure = true)"
              @input="handleDisclosure()"
            >
            </p>
          </div>
        </div>
        <div
          :class="`disclosure-footer d-none ${$props.hideFee ? 'd-none' : ''}`"
        >
          <div class="row">
            <div class="col-md-6">
              <h6 class="bold-one">Fees assumed:</h6>
              <div>
                <p>
                  <span
                    >Brokerage Account: <b>{{ disclosure.cv1_fees }}%</b> per
                    annum;</span
                  >
                  <span
                    >401K/IRA: <b>{{ disclosure.cv2_fees }}%</b> per annum;
                  </span>
                  <span
                    >Annuity: <b>{{ disclosure.cv3_fees }}%</b> per annum;
                  </span>
                  <span
                    >LIRP: actual current costs of insurance, as per the carrier
                    illustration</span
                  >
                </p>
              </div>
            </div>
            <div
              class="col-md-6"
              v-if="
                !disclosure.cv1_capital_gains_tax_rate &&
                !disclosure.cv2_capital_gains_tax_rate &&
                !disclosure.cv3_capital_gains_tax_rate
              "
            >
              <h6 class="bold-one">Taxes assumed:</h6>
              <p>
                <b>{{ disclosure.tax_rate }}%</b>
                <span v-if="disclosure.second_tax_rate">
                  ; years <b>1-{{ disclosure.second_tax_rate_year }}</b>
                </span>
                <span v-if="disclosure.second_tax_rate">
                  <b>; {{ disclosure.second_tax_rate }}%</b>
                  years <b>{{ disclosure.second_tax_rate_year }}+</b>;
                </span>
              </p>
            </div>
            <div
              class="col-md-6"
              v-if="
                disclosure.cv1_capital_gains_tax_rate ||
                disclosure.cv2_capital_gains_tax_rate ||
                disclosure.cv3_capital_gains_tax_rate
              "
            >
              <div>
                <h6 class="bold-one">Taxes assumed:</h6>
                <p>
                  <b>{{ disclosure.tax_rate }}% </b>
                  <span v-if="disclosure.second_tax_rate">
                    years <b>1-{{ disclosure.second_tax_rate_year }}</b
                    >;</span
                  >
                  <span v-if="disclosure.second_tax_rate_year"
                    ><b>{{ disclosure.second_tax_rate }}%</b> years
                    <b>{{ disclosure.second_tax_rate_year }}+</b>;</span
                  >
                  <!-- [If capital gains are included for a taxable investment, then we include]: -->
                  <span
                    v-if="disclosure.cv1_percentage_of_account_as_capital_gains"
                    >Capital gains ratio:
                    <b
                      >{{
                        disclosure.cv1_percentage_of_account_as_capital_gains
                      }}%</b
                    >;</span
                  >
                  <span
                    v-if="disclosure.cv2_percentage_of_account_as_capital_gains"
                    >Capital gains ratio:
                    <b
                      >{{
                        disclosure.cv2_percentage_of_account_as_capital_gains
                      }}%</b
                    >;</span
                  >
                  <span
                    v-if="disclosure.cv3_percentage_of_account_as_capital_gains"
                    >Capital gains ratio:
                    <b
                      >{{
                        disclosure.cv3_percentage_of_account_as_capital_gains
                      }}%</b
                    >;</span
                  >
                  <span v-if="disclosure.cv1_capital_gains_tax_rate"
                    >Capital gains tax rate:
                    <b>{{ disclosure.cv1_capital_gains_tax_rate }}%</b></span
                  >
                  <span v-if="disclosure.cv2_capital_gains_tax_rate"
                    >; Capital gains tax rate:
                    <b>{{ disclosure.cv2_capital_gains_tax_rate }}%</b>;</span
                  >
                  <span v-if="disclosure.cv3_capital_gains_tax_rate"
                    >; Capital gains tax rate:
                    <b>{{ disclosure.cv3_capital_gains_tax_rate }}%</b></span
                  >
                  <!-- If taxes are scheduled, then the last line is simply: -->
                </p>
              </div>
            </div>
          </div>
          <p
            v-if="
              !disclosure.cv1_capital_gains_tax_rate &&
              !disclosure.cv2_capital_gains_tax_rate &&
              !disclosure.cv3_capital_gains_tax_rate
            "
          >
            <span>Taxes assumed: <b>Per schedule</b></span>
          </p>
        </div>
      </div>
    </div>

    <!-- Disclosure Required -->

    <div
      class="modal fade common-modal disclosure-modal"
      id="disclosureRequiredModal"
      ref="disclosureModal"
      tabindex="-1"
      aria-labelledby="disclosureRequiredLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                src="@/assets/images/icons/cross-grey.svg"
                class="img-fluid"
                alt="Close Modal"
              />
            </button>
          </div>
          <div class="modal-body text-center">
            <h5
              class="modal-title fs-24 semi-bold-fw"
              id="disclosureRequiredLabel"
            >
              Disclosure Required
            </h5>
            <p class="fs-14">
              A discourse is required. You may use the default disclosure <br />
              or use your own.
            </p>
            <div class="d-inline-flex flex-column gap-13 pt-4 mt-2 pb-2">
              <button
                type="button"
                class="btn yes-delete-btn"
                @click="setDefaultMessage()"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Use Default
              </button>
              <button
                type="button"
                class="btn modal-cancel-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="() => $refs.editableDiv.focus()"
              >
                Use My Own
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section v-if="modal_true">
    <div
      class="modal fade show"
      id="showHistoricalScheduleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      :style="{display: 'block'}"
    >
      <div class="modal-dialog">
        <div class="modal-content modalDivMain">
          <div class="modal-header" style="border: none">
            <button
              type="button"
              class="btn-close btnWhite-darkTheme"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeTableModal()"
            ></button>
          </div>
          <div class="modal-body px-5">
            <p class="ModalHeasingPara">{{ data_title }} Schedule</p>
            <div class="modalTableDiv">
              <table class="table">
                <thead v-if="data_title === 'Premium Charge'">
                  <th>Year</th>
                  <th>Premium Charge</th>
                </thead>
                <thead v-else-if="data_title === 'Flat Credit/Bonus'">
                  <th>Year</th>
                  <th>Amount</th>
                </thead>
                <thead v-else>
                  <th>Year</th>
                  <th>
                    Multiplier {{ data_type === "rate" ? "Rate" : "Amount" }}
                  </th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in data_list" :key="index">
                    <td data-label="Year">{{ item.year }}</td>
                    <td
                      data-label="Rate"
                      v-if="$props.title === 'Performance Multiplier'"
                    >
                      {{ Number(item.value).toLocaleString("en-US") }}
                    </td>
                    <td data-label="Rate" v-else>
                      {{ data_type === "rate" ? "" : "$" }}
                      {{ Number(item.value).toLocaleString("en-US")
                      }}{{ data_type === "rate" ? "%" : "" }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Disclosure Required Ends -->
</template>
<script>
import PerformanceMultiplier from '../../../../../views/components/modal/PerformanceMultiplierModal.vue'
import { patch, post } from "../../../../../network/requests";
import { getUrl } from "../../../../../network/url";
import { authHeader } from "../../../../../services/helper";

export default {
  components: {
    PerformanceMultiplier
  },
  props: ["hideFee", "containerFluid", "tabType"],

  data() {
    return {
      saveDisclosure: false,
      disclosure_msg: "",
      disclosure_id: "",
      modal_true: false,
      disclosure_head: "",
      disclosure_message: [],
      data_list: [],
      data_type: "",
      data_title: "", 
    };
  },
  mounted() {
    this.disclosure_msg = this.$store.state.data.disclosure.historical_msg;
    this.$refs.editableDiv.innerHTML = this.getDefaultDisclosure();
    if (this.disclosures) {
      let items =
        this.$store.state.data.report.disclosures.filter(
          (i) => i.tab_type === this.$props.tabType
        ) || [];
      let item = items[0] ? items[0] : [];
      if (item.text) {
        this.disclosure_id = item.id;
        this.$refs.editableDiv.innerHTML = item.text;
      }
    }
    if (this.disclosures) {
      this.mapData();
    }
  },
  methods: {

    showTableModal(word, index) {
      console.log('table shown of:', word, index)
      let indexes = [
        this.disclosure.index_1,
        this.disclosure.index_2 || null,
        this.disclosure.index_3 || null,
      ];
      if(word === 'performance') {
        this.data_list = indexes[index].performace_multiplier;
        this.data_type = 'rate';
        this.data_title = 'Performance Multiplier';
      }
      else if(word === 'flat') {
        this.data_list = indexes[index].flat_credit;
        this.data_type = 'rate';
        this.data_title = 'Flat Credit/Bonus';
      }
      console.log('list is:', this.data_list);
      this.modal_true = true;
    },
    closeTableModal() {
      console.log('closing table');
      this.modal_true = false;
      this.data_list = [];
      this.data_type = '';
      this.data_title = '';

    },
    mapData: function () {
      let indexes = [
        this.disclosure.index_1,
        this.disclosure.index_2 || null,
        this.disclosure.index_3 || null,
      ];

      let disclosure_heading = 'Index(es) Simulated:'
      this.disclosure_head = disclosure_heading

      let disclosure_text = [];

      indexes.forEach((obj, index) => {
        if(Object.keys(obj).length > 0) {

          const keyMapping = {
            index_name: "Index Strategy",
            segment_duration: "Segment Duration",
            cap_rate: "Cap Rate",
            par_rate: "Participation Rate",
            floor: "Floor",
            margin: "Margin/Spread",
            performace_multiplier: "Performance Multiplier",
            flat_credit: "Flat Credit/Bonus",
            allocation: "Allocation",
            rolling_period: "Rolling Time Period",
            rolling_period_analyzed: "Rolling Time Periods Analyzed" 
          }

          const percent_attributes = ["Allocation", "Cap Rate", "Participation Rate", "Margin/Spread", "Floor", "Flat Credit/Bonus"];
          const schedule_attributes = ["Performance Multiplier", "Flat Credit/Bonus"];
          const other_attributes = ["Segment Duration", "Rolling Time Period", "Rolling Time Periods Analyzed"];
          const order = [
            "Index Strategy",
            "Allocation",
            "Cap Rate",
            "Participation Rate",
            "Margin/Spread",
            "Floor", 
            "Performance Multiplier",
            "Flat Credit/Bonus",
            "Segment Duration",
            "Rolling Time Period",
            "Rolling Time Periods Analyzed"
          ]

          const mappedObject = Object.keys(obj).reduce((acc, key) => {
            const newKey = keyMapping[key] || key;
            if (newKey) {
              acc[newKey] = obj[key];
            }
            return acc;
          }, {});

          let index_strat = {};

          order.forEach((element) => {
            if (element) {
              if (element === 'Index Strategy') {
                index_strat[`${element} ${index+1}`] = mappedObject[element]
              }
              else if (percent_attributes.includes(element)) {
                if(schedule_attributes.includes(element)) {
                  if (mappedObject["flat_credit_schedule"] === true) {
                    index_strat[`${element}`] = 'Scheduled'
                  }
                  else {
                    if(mappedObject["Flat Credit/Bonus"] === 'N/A') {
                      index_strat[`${element}`] = mappedObject[element]
                    }
                    else {
                      index_strat[`${element}`] = String(mappedObject[element]) + '%'
                      index_strat['start_year_flat'] =  mappedObject["flat_credit_start_year_value"]
                    }
                  }
                }
                else {
                  index_strat[`${element}`] = String(mappedObject[element]) + '%'
                }
              }
              else if (schedule_attributes.includes(element)) {
                if (mappedObject["performace_multiplier_schedule"] === true) {
                  index_strat[`${element}`] = 'Scheduled'
                }
                else {
                  index_strat[`${element}`] = mappedObject[element]
                  index_strat['start_year_multi'] = mappedObject["performace_multiplier_start_year_value"]
                }
              }
              else if (other_attributes.includes(element)) {
                index_strat[`${element}`] = mappedObject[element]
              }
            }


          });
          disclosure_text.push(index_strat)
        }
      });
      this.disclosure_message = disclosure_text;
      console.log('index strtageies are:', disclosure_text)
    },

    handleDisclosure: function () {
      if (!this.$refs.editableDiv.innerHTML) {
        new bootstrap.Modal(this.$refs.disclosureModal).show();
      }
    },

    getDefaultDisclosure: function () {

      let period = this.disclosure.period;
      let instance = this.disclosure.instance;
      let borrowing_rate = this.disclosure.borrowing_rate;
      let content = `
      <p style="margin: 0;">This chart references data drawn from simulations of a Theoretical Synthetic Asset (TSA) that does not exist and cannot be purchased in the real world. 
      It is not a real world insurance policy. It is not an official illustration. 
      You may not assume the data presented here relating to the TSA infers or expresses any guarantee of how a real world insurance policy would perform. 
      Comparisons made to the official carrier illustration(s), which use hypothetical assumptions that are not guaranteed, are designed to be educational and instructive as to how the TSA as a proxy for the insurance policy(ies) compared <b>may have</b> performed through different historical periods. 
      The data uses the raw returns of the index(es) identified above, and simulates the potential returns that the TSA as a proxy for the insurance policy(ies) <b>may have</b> achieved if the current cap rates, participation rates, floors, fees, and borrowing costs were in place during the historical periods tested. 
      Cap rates, participation rates, and policy fees can and do change. 
      We analyzed <b>${instance} ${period}</b>-year periods of the index. In the case where a time period portrayed is greater than ${period} years, the data was looped for purposes of the simulation. 
      This simulation of the TSA took the actual current monthly fees of the insurance policy(ies) and increased them by 15% to add stress. 
      All distributions assume the use of an index/participating loan. We assumed a ${borrowing_rate}% borrowing rate in the simulation of the TSA. 
      Presented here are the most recent, worst, median, and best ${period}-year periods with respect to the insurance policy’s intended allocation in the index strategy(ies). 
      However, these results are not the results of an actual insurance policy, but those of the TSA, which does not exist in the real world. 
      It is entirely possible that the real world experience of the actual policy could be even worse than the worst ${period}-year period analyzed, 
      just as it is entirely possible that the real world policy could perform better than the best ${period}-year period analyzed.</p>`;
      return content
    },
    setDefaultMessage: function () {
      this.$refs.editableDiv.innerHTML = this.getDefaultDisclosure();
    },
    saveMessage: function () {
      if (!this.$refs.editableDiv.innerHTML) {
        return new bootstrap.Modal(this.$refs.disclosureModal).show();
      }
      this.saveDisclosure = false;
      let data = {
        report_id: this.$route.params.report,
        report_type: "historical",
        tab_type: this.$props.tabType,
        text: this.$refs.editableDiv.innerHTML,
      };

      if (this.$props.disclosureId) {
        this.disclosure_id = this.$props.disclosureId;
      }

      if (this.disclosure_id) {
        patch(
          `${getUrl("historical-disclosures")}${this.disclosure_id}/`,
          data,
          authHeader()
        );
      } else {
        post(getUrl("historical-disclosures"), data, authHeader()).then(
          (response) => {
            this.disclosure_id = response.data.id;
          }
        );
      }
    },
  },
  computed: {
    disclosure() {
      return this.$store.state.data.report.historical.discloser || [];
    },
    disclosures() {
      return this.$store.state.data.report.disclosures || [];
    },
  },
};
</script>
<style lang=""></style>
