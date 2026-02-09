<template lang="">
  <div class="bottom-disclosure pt-0 px-3" id="disclosure1" data-dc="1">
    <div :class="`${$props.containerFluid ? '' : 'container-fluid'}`">
      <div class="disclosure-div">
        <div
          class="disclosure-header-div d-flex align-items-center justify-content-between"
        >
          <h4 class="disclosure-heading">Disclosure</h4>
          <div class="disclosure-right-actions">
            <button
              class="btn round-btn disclosure-edit"
              v-if="!saveDisclosure && !$store.state.app.presentation_mode"
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
                />
                <rect
                  x="5.74683"
                  y="12.4258"
                  width="7.78182"
                  height="2.12203"
                  rx="1.06101"
                  transform="rotate(-135 5.74683 12.4258)"
                  fill="#9D9D9D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          :class="`disclosure-text-wrapper ${saveDisclosure ? 'editable' : ''}`"
        >
          <div
            class="disclosure-textarea"
            :contenteditable="$store.state.app.presentation_mode ? false : true"
            ref="editableDiv"
            @focus="() => (this.saveDisclosure = true)"
            @input="handleDisclosure()"
          >
            {{ currentItem.text || disclosure_msg }}
          </div>
        </div>
        <div :class="`disclosure-footer ${$props.hideFee ? 'd-none' : ''}`">
          <div class="row">
            <div class="col-md-6">
              <h6 class="bold-one">Fees assumed:</h6>
              <div>
                <p>
                  <span v-for="(item, index) in fees" :key="index"
                    >{{ item.name }}: <b>{{ item.fees }}</b>
                    {{ fees.length - 1 === index ? "" : "per annum; " }}
                  </span>
                </p>
              </div>
            </div>
            <div v-if="!is_schedule" class="col-md-6">
              <div>
                <h6 class="bold-one">Taxes assumed:</h6>
                <p>
                  <span
                    ><b>{{ tax_rate }}</b>
                    <span v-if="year"
                      >; years <b>1-{{ year }}</b></span
                    >
                  </span>
                  <span v-if="second_tax_rate"
                    ><b>; {{ second_tax_rate }}</b> years <b>{{ year + 1 }}+</b
                    >{{ capital_gains.length ? ";" : "" }}</span
                  >
                  <!-- [If capital gains are included for a taxable investment, then we include]: -->
                  <br>
                  <span v-for="(item, index) in capital_gains" :key="index">
                    <span>
                      <b>{{ item.name }}:</b>;
                    </span>
                    <span>
                      Capital gains ratio: <b>{{ item.ratio }}%</b>
                    </span>
                    <span
                      >Capital gains tax rate: <b>{{ item.tax }}%</b>,</span
                    >
                    <br>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <!-- If taxes are scheduled, then the last line is simply: -->
          <p v-if="is_schedule">
            <span>Taxes assumed: <b>Per schedule</b></span>
          </p>
        </div>
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
            @click="handleDisclosure"
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
  <!-- Disclosure Required Ends -->
</template>
<script>
import { post, patch } from "../../../../network/requests";
import { getUrl } from "../../../../network/url";
import { authHeader } from "../../../../services/helper";

export default {
  props: ["hideFee", "feetab", "currentTab", "containerFluid"],
  data() {
    return {
      saveDisclosure: false,
      disclosure_msg: "",
      currentItem: [],
      fees: [],
      capital_gains: [],
      tax_rate: "",
      second_tax_rate: "",
      year: "",
      is_schedule: false,
    };
  },
  mounted() {
    if (this.first_cv_name) {
      this.mapData();
    }
  },
  methods: {
    // map the data from API
    mapData: function () {
      this.disclosure_msg = this.$store.state.data.disclosure.comparative_msg;
      let data = this.comparative.disclosure;
      let names = this.cv_name;
      let disclosure = [{ name: names[1], fees: data.cv1_fees + "%" }];
      this.tax_rate = data.tax_rate + "%";

      if (data.second_tax_rate) {
        this.second_tax_rate = data.second_tax_rate + "%";
      }

      if (!data.tax_rate) {
        this.is_schedule = true;
      } else {
        if (data.second_tax_rate_year) {
          this.year = data.second_tax_rate_year - 1;
        }
      }

      if (names[2]) {
        disclosure.push({ name: names[2], fees: data.cv2_fees + "%" });
      }

      if (names[3]) {
        disclosure.push({ name: names[3], fees: data.cv3_fees + "%" });
      }

      disclosure.push({
        name: names[0],
        fees: "actual current costs of insurance, as per the carrier illustration.",
      });
      this.fees = disclosure;

      // for capital gains
      let cg = [];

      let cg1_tax = data.cv1_capital_gains_tax_rate;
      let cg1_account = data.cv1_percentage_of_account_as_capital_gains;

      let cg2_tax = data.cv2_capital_gains_tax_rate;
      let cg2_account = data.cv2_percentage_of_account_as_capital_gains;

      let cg3_tax = data.cv3_capital_gains_tax_rate;
      let cg3_account = data.cv3_percentage_of_account_as_capital_gains;

      if (cg1_tax || cg1_account) {
        cg.push({ name: this.comparative.cv1_name, tax: cg1_tax, ratio: cg1_account });
      }

      if (cg2_tax || cg2_account) {
        cg.push({ name: this.comparative.cv2_name, tax: cg2_tax, ratio: cg2_account });
      }

      if (cg3_tax || cg3_account) {
        cg.push({ name: this.comparative.cv3_name, tax: cg3_tax, ratio: cg3_account });
      }

      this.capital_gains = cg;

      let disclosures =
        this.$store.state.data.report.disclosures.filter(
          (i) => i.tab_type === this.tabs[this.$props.currentTab]
        ) || [];
      this.currentItem = disclosures[0] ? disclosures[0] : [];
      if (this.currentItem.text) {
        this.$refs.editableDiv.innerHTML = this.currentItem.text;
      }
    },
    handleDisclosure: function () {
      // Get text content without HTML tags
      const textContent = this.$refs.editableDiv.innerText || this.$refs.editableDiv.textContent || '';
      const cleanText = textContent.trim();

      // Show modal if text is less than 10 characters
      if (cleanText.length < 10) {
        if (!this.$refs.disclosureModal.classList.contains("show")) {
          new bootstrap.Modal(this.$refs.disclosureModal).show();
        }
      }
    },
    setDefaultMessage: function () {
      this.$refs.editableDiv.innerHTML = this.disclosure_msg;
    },
    saveMessage: function () {
      // Get text content without HTML tags
      const textContent = this.$refs.editableDiv.innerText || this.$refs.editableDiv.textContent || '';
      const cleanText = textContent.trim();

      // Show modal if text is less than 10 characters
      if (cleanText.length < 10) {
        return new bootstrap.Modal(this.$refs.disclosureModal).show();
      }

      this.saveDisclosure = false;

      let data = {
        report_id: this.$route.params.report,
        report_type: "comperative",
        tab_type: this.tabs[this.$props.currentTab],
        text: this.$refs.editableDiv.innerHTML,
        vehicle_type: this.$props.cvType,
      };

      if (this.currentItem.id) {
        patch(
          `${getUrl("disclosures")}${this.currentItem.id}/`,
          data,
          authHeader()
        ).then(() => {
          this.$toast.success("Disclosure saved successfully!");
        });
      } else {
        post(getUrl("disclosures"), data, authHeader()).then((response) => {
          this.currentItem = response.data;
          this.$toast.success("Disclosure saved successfully!");
        });
      }
    },
  },
  computed: {
    comparative() {
      return this.$store.state.data.report.comparative;
    },
    cv_name() {
      return this.$store.state.data.report.cv_names;
    },
    first_cv_name() {
      return this.$store.state.data.report.cv_names[0];
    },
    tabs() {
      return {
        1: "comperative_table",
        2: "comperative_graph",
        3: "comperative_making_things_equal",
        4: "cummulative_values",
        5: "legacy",
        6: "fee_analysis",
      };
    },
  },
  watch: {
    first_cv_name() {
      this.mapData();
    },
  },
};
</script>
<style lang=""></style>
