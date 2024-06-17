<template>
  <div>
    <!-- there's a ton of duplicate boilerplate code here that should be moved into a shared layout view -->
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <left-sidebar-component />

        <div class="right-area">
          <div class="right-area-inner">
            <div class="right-area-wrapper">
              <section class="padding_right_section">
                <div class="common_box_div">
                  <div class="common_heading_div">
                    <h1>Retirement Buffer</h1>
                  </div>
                  <!-- Form -->
                  <div class="after_heading_div">
                    <div class="accumulation_strategy_div">
                      <div class="accumulation_strategy_box">
                        <income-rider-form
                        :illustrateYear="illustrateYear"
                          ref="form"
                        />
                      </div>
                      <button
                        :class="`run_btn ${isSubmitEnabled ? '' : 'disable'}`"
                        @click="onSubmit"
                      >
                        Run
                      </button>
                      <button class="reset_btn" @click="resetForm">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <guaranteed-increasing-annual-income-schedule-modal
    :illustrateYear="illustrateYear" />
  <non-guaranteed-increasing-annual-income-schedule-modal
    :illustrateYear="illustrateYear" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LeftSidebarComponent from "@/views/components/common/LeftSidebarComponent.vue";
import NavbarComponent from "@/views/components/common/NavbarComponent.vue";
import IncomeRiderForm from "./components/IncomeRiderForm.vue";
import GuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/GuaranteedIncreasingAnnualIncomeScheduleModal.vue";
import NonGuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/NonGuaranteedIncreasingAnnualIncomeScheduleModal.vue";

export default {
  name: "IncomeRider",
  components: {
    IncomeRiderForm,
    LeftSidebarComponent,
    NavbarComponent,
    GuaranteedIncreasingAnnualIncomeScheduleModal,
    NonGuaranteedIncreasingAnnualIncomeScheduleModal
  },
  data() {},
  computed: {
    ...mapGetters({
      illustrateYear: "incomeRider/illustrateYear",
    }),
    ...mapState({
      inputs: (state) => state.incomeRider.data.inputs,
    }),
    isSubmitEnabled() {
      return this.inputs.comparative_vehicle_account_name &&
        this.inputs.account_type &&
        this.inputs.current_age &&
        this.inputs.plan_through_age &&
        this.inputs.growth_rate &&
        this.inputs.total_balance &&
        this.inputs.income_rider_account_name &&
        this.inputs.income_start_year &&
        this.inputs.guaranteed_income
        ? true
        : false;
    },
  },
  methods: {
    onSubmit() {
      this.$refs.form.submit();
    },
    resetForm() {
      this.$store.dispatch("incomeRider/reset");
    },
  },
};
</script>

<style></style>
