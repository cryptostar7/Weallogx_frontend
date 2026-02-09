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
                  <div class="common_heading_div" style="position: relative; display: flex; justify-content: center; align-items: center;">
                    <h1 style="margin: 0; text-align: center;">Retirement Buffer</h1>
                    <div style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);" class="d-flex align-items-center gap-3">
                      <a
                        href="javascript:void(0)"
                        @click="showVideoModal = true"
                        class="walkthrough-button"
                      >
                        Walkthrough
                      </a>
                    </div>
                  </div>
                  <!-- Form -->
                  <div class="after_heading_div">
                    <div class="accumulation_strategy_div">
                      <div class="accumulation_strategy_box">
                        <income-rider-form ref="form"
                          @valid="(e) => isSubmitEnabled = e" />
                      </div>
                      <button
                        :class="`run_btn ${isSubmitEnabled ? '' : 'disable'}`"
                        @click="onSubmit">
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

      <income-start-year-warning-modal />

    <!-- Video Walkthrough Modal -->
    <div
      v-if="showVideoModal"
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.8)"
      @click.self="showVideoModal = false"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Retirement Buffer - Lifetime Income Walkthrough</h5>
            <button
              type="button"
              class="btn-close"
              @click="showVideoModal = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe
                src="https://www.loom.com/embed/a072ca549abc4b158e38e39c958eb5f7?sid=f0a98282-c1ae-4c3e-8f8f-742e2de5bad0"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LeftSidebarComponent from "@/views/components/common/LeftSidebarComponent.vue";
import NavbarComponent from "@/views/components/common/NavbarComponent.vue";
import IncomeRiderForm from "./components/IncomeRiderForm.vue";
import GuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/GuaranteedIncreasingAnnualIncomeScheduleModal.vue";
import NonGuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/NonGuaranteedIncreasingAnnualIncomeScheduleModal.vue";
import IncomeStartYearWarningModal from "@/views/retirement-buffer/income-rider/components/IncomeStartYearWarningModal.vue";

export default {
  name: "IncomeRider",
  components: {
    IncomeRiderForm,
    LeftSidebarComponent,
    NavbarComponent,
    GuaranteedIncreasingAnnualIncomeScheduleModal,
    NonGuaranteedIncreasingAnnualIncomeScheduleModal,
    IncomeStartYearWarningModal
  },
  data() {
    return {
      isSubmitEnabled: false,
      showVideoModal: false,
    }
  },
  computed: {
    ...mapGetters({
      illustrateYear: "incomeRider/illustrateYear",
    }),
    ...mapState({
      inputs: (state) => state.incomeRider.inputs,
    }),
  },
  methods: {
    onSubmit() {
      this.$refs.form.submit();
    },
    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.walkthrough-button {
  display: inline-grid;
  place-items: center;
  padding: 0 25px;
  height: 45px;
  background: #e67e22;
  color: #fff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 15px;
  white-space: nowrap;
}

.walkthrough-button:hover {
  background: #d35400;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
}
</style>
