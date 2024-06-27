<template>
  <div v-if="result">
    <navbar-component />
    <section class="main-section">
      <div class="inner-section">
        <left-sidebar-component />

        <div class="right-area">
          <div class="right-area-inner">
            <div class="right-area-wrapper">
              <section class="padding_right_section">
                <div class="retirement_buffer_section_head_div mb-5">
                  <h1>Retirement Buffer</h1>
                  <div class="nav table_graph_setting_tab nav-pills top-0"
                    role="tablist" aria-orientation="vertical">
                    <div @click="resultViewHandler" class="active" data-bs-toggle="pill"
                      data-bs-target="#v-pills-table" type="button" role="tab"
                      aria-controls="v-pills-tabe" aria-selected="true">
                      <svg class="income-rider-tab-svg"
                        xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" viewBox="0 0 20 20" fill="none">
                        <rect width="17" height="2.5" rx="0.5" fill="#0E6651" />
                        <rect y="8.5" width="20" height="2.5" rx="0.5"
                          fill="#0E6651" />
                        <path
                          d="M0 17.5C0 17.2239 0.223858 17 0.5 17H11.5C11.7761 17 12 17.2239 12 17.5V19C12 19.2761 11.7761 19.5 11.5 19.5H0.5C0.223858 19.5 0 19.2761 0 19V17.5Z"
                          fill="#0E6651" />
                      </svg>
                    </div>
                    <div @click="resultViewHandler" data-bs-toggle="pill" data-bs-target="#v-pills-graph"
                      type="button" role="tab" aria-controls="v-pills-graph"
                      aria-selected="false">
                      <svg class="income-rider-tab-svg income-svg-2" width="28"
                        height="27" viewBox="0 0 28 27" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6993_46716)">
                          <mask id="mask0_6993_46716"
                            style="mask-type: luminance"
                            maskUnits="userSpaceOnUse" x="3" y="0" width="25"
                            height="25">
                            <path d="M3 0.125H27.1927V24.3177H3V0.125Z"
                              fill="white" />
                          </mask>
                          <g mask="url(#mask0_6993_46716)">
                            <path class="svgstroke"
                              d="M2 20.8438C13.6048 19.4017 21.3425 13.1615 25.2129 2.12304"
                              stroke="#0E6651" stroke-width="3" />
                          </g>
                        </g>
                        <mask id="mask1_6993_46716" style="mask-type: luminance"
                          maskUnits="userSpaceOnUse" x="2" y="24" width="25"
                          height="3">
                          <path d="M2 24.125H26.1927V26.625H2V24.125Z"
                            fill="white" />
                        </mask>
                        <g mask="url(#mask1_6993_46716)">
                          <path class="svgstroke" d="M2 25.4453H24.9394"
                            stroke="#0E6651" stroke-width="1.5" />
                        </g>
                        <mask id="mask2_6993_46716" style="mask-type: luminance"
                          maskUnits="userSpaceOnUse" x="0" y="0" width="3"
                          height="27">
                          <path d="M0 26.1953L0 0.0026859H2.5L2.5 26.1953H0Z"
                            fill="white" />
                        </mask>
                        <g mask="url(#mask2_6993_46716)">
                          <path class="svgstroke"
                            d="M1.32031 26.1953L1.32031 1.35956"
                            stroke="#0E6651" stroke-width="1.5" />
                        </g>
                        <defs>
                          <clipPath id="clip0_6993_46716">
                            <rect width="25" height="25" fill="white"
                              transform="translate(3 0.125)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div data-bs-toggle="modal"
                      data-bs-target="#incomeRideFormModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20"
                        height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M5.50203 10.0842C4.71214 10.0842 4.07215 9.42157 4.07215 8.60428C4.07215 7.78699 4.71214 7.12464 5.50203 7.12464C6.29167 7.12464 6.93191 7.78699 6.93191 8.60428C6.93191 9.42157 6.29167 10.0842 5.50203 10.0842ZM10.8064 7.84091L10.5196 7.79699C10.1115 7.73412 9.76931 7.44582 9.62779 7.04493C9.58536 6.92472 9.53836 6.80714 9.48653 6.69166C9.31224 6.3034 9.35518 5.84781 9.60162 5.50348L9.77439 5.26226C9.84273 5.16704 9.83333 5.0342 9.75203 4.95029L9.03277 4.20587C8.95147 4.12195 8.82342 4.11196 8.7312 4.18272L8.49822 4.36159C8.16565 4.61648 7.72535 4.66094 7.34985 4.48049C7.23882 4.42683 7.125 4.37816 7.00889 4.33423C6.6217 4.18798 6.34273 3.83365 6.28227 3.41146L6.23958 3.11448C6.22281 2.99716 6.12525 2.9101 6.01067 2.9101H4.99314C4.87856 2.9101 4.78125 2.99716 4.76423 3.11448L4.72154 3.41146C4.66108 3.83365 4.38237 4.18798 3.99492 4.33423C3.87881 4.37816 3.76524 4.42683 3.65396 4.48049C3.27871 4.66094 2.83841 4.61648 2.50584 4.36159L2.27261 4.18272C2.18064 4.11196 2.05234 4.12195 1.97129 4.20587L1.25178 4.95029C1.17073 5.0342 1.16108 5.16704 1.22942 5.26226L1.40218 5.50348C1.64863 5.84781 1.69156 6.3034 1.51728 6.69166C1.4657 6.80714 1.41844 6.92472 1.37602 7.04493C1.2345 7.44582 0.892276 7.73412 0.484248 7.79699L0.197409 7.84091C0.0840955 7.85854 0 7.95902 0 8.07792V9.1309C0 9.24953 0.0840955 9.35054 0.197409 9.3679L0.484248 9.4121C0.892276 9.4747 1.2345 9.763 1.37602 10.1639C1.41844 10.2841 1.4657 10.4019 1.51728 10.5169C1.69156 10.9054 1.64863 11.3613 1.40218 11.7053L1.22942 11.9463C1.16108 12.0418 1.17073 12.1746 1.25178 12.2585L1.97129 13.0032C2.05234 13.0869 2.18064 13.0969 2.27261 13.0264L2.50584 12.8472C2.83841 12.5923 3.27871 12.5479 3.65396 12.7283C3.76524 12.7817 3.87881 12.8304 3.99492 12.8743C4.38237 13.0208 4.66108 13.3752 4.72154 13.7974L4.76423 14.0943C4.78125 14.2117 4.87856 14.2987 4.99314 14.2987H6.01067C6.12525 14.2987 6.22281 14.2117 6.23958 14.0943L6.28227 13.7974C6.34273 13.3752 6.6217 13.0208 7.00889 12.8743C7.125 12.8304 7.23882 12.7817 7.34985 12.7283C7.72535 12.5479 8.16565 12.5923 8.49822 12.8472L8.7312 13.0264C8.82342 13.0969 8.95147 13.0869 9.03277 13.0032L9.75203 12.2585C9.83333 12.1746 9.84273 12.0418 9.77439 11.9463L9.60162 11.7053C9.35518 11.3613 9.31224 10.9054 9.48653 10.5169C9.53836 10.4019 9.58536 10.2841 9.62779 10.1639C9.76931 9.763 10.1115 9.4747 10.5196 9.4121L10.8064 9.3679C10.9197 9.35054 11.0038 9.24953 11.0038 9.1309V8.07792C11.0038 7.95902 10.9197 7.85854 10.8064 7.84091ZM14.4982 15.7784C13.7086 15.7784 13.0683 15.116 13.0683 14.2987C13.0683 13.4814 13.7086 12.8188 14.4982 12.8188C15.2879 12.8188 15.9281 13.4814 15.9281 14.2987C15.9281 15.116 15.2879 15.7784 14.4982 15.7784ZM19.8028 13.5351L19.516 13.4909C19.108 13.4283 18.7657 13.14 18.624 12.7391C18.5818 12.6189 18.5345 12.5011 18.4827 12.3861C18.3084 11.9976 18.3516 11.5417 18.5981 11.1979L18.7706 10.9564C18.8389 10.8612 18.8295 10.7284 18.7485 10.6445L18.029 9.89978C17.9479 9.81587 17.8196 9.80614 17.7274 9.87664L17.4944 10.0555C17.1618 10.3107 16.7215 10.3554 16.3463 10.1747C16.235 10.1213 16.1212 10.0726 16.0053 10.0287C15.6179 9.88216 15.3392 9.52784 15.2785 9.10565L15.236 8.80867C15.2193 8.69135 15.1217 8.60428 15.0069 8.60428H13.9896C13.8747 8.60428 13.7774 8.69135 13.7607 8.80867L13.718 9.10565C13.6573 9.52784 13.3786 9.88216 12.9914 10.0287C12.8753 10.0726 12.7614 10.1213 12.6502 10.1747C12.2749 10.3554 11.8346 10.3107 11.5023 10.0555L11.2691 9.87664C11.1768 9.80614 11.0485 9.81587 10.9675 9.89978L10.2482 10.6445C10.1669 10.7284 10.1575 10.8612 10.2259 10.9564L10.3986 11.1979C10.6448 11.5417 10.6878 11.9976 10.5135 12.3861C10.4619 12.5011 10.4146 12.6189 10.3722 12.7391C10.2309 13.14 9.88846 13.4283 9.48069 13.4909L9.1936 13.5351C9.08028 13.5525 8.99644 13.6535 8.99644 13.7721V14.8251C8.99644 14.9437 9.08028 15.0447 9.1936 15.0621L9.48069 15.106C9.88846 15.1689 10.2309 15.4572 10.3722 15.8581C10.4146 15.9783 10.4619 16.0961 10.5135 16.2111C10.6878 16.5996 10.6448 17.0552 10.3986 17.3993L10.2259 17.6407C10.1575 17.736 10.1669 17.8688 10.2482 17.9527L10.9675 18.6974C11.0485 18.781 11.1768 18.791 11.2691 18.7203L11.5023 18.5414C11.8346 18.2863 12.2749 18.2421 12.6502 18.4225C12.7614 18.4759 12.8753 18.5248 12.9914 18.5688C13.3788 18.715 13.6573 19.0693 13.718 19.4915L13.7607 19.7885C13.7774 19.9058 13.8747 19.9929 13.9896 19.9929H15.0069C15.1217 19.9929 15.2193 19.9058 15.236 19.7885L15.2785 19.4915C15.3392 19.0693 15.6179 18.715 16.0053 18.5688C16.1212 18.5248 16.235 18.4759 16.3463 18.4225C16.7215 18.2421 17.1618 18.2863 17.4944 18.5414L17.7274 18.7203C17.8196 18.791 17.9479 18.781 18.029 18.6974L18.7485 17.9527C18.8295 17.8688 18.8389 17.736 18.7706 17.6407L18.5981 17.3993C18.3516 17.0552 18.3084 16.5996 18.4827 16.2111C18.5345 16.0961 18.5818 15.9783 18.624 15.8581C18.7657 15.4572 19.108 15.1689 19.516 15.106L19.8028 15.0621C19.9162 15.0447 20.0003 14.9437 20.0003 14.8251V13.7721C20.0003 13.6535 19.9162 13.5525 19.8028 13.5351ZM13.6966 5.23938C13.1009 5.23938 12.6179 4.73933 12.6179 4.12301C12.6179 3.50642 13.1009 3.00663 13.6966 3.00663C14.2924 3.00663 14.7752 3.50642 14.7752 4.12301C14.7752 4.73933 14.2924 5.23938 13.6966 5.23938ZM17.5297 3.5714L17.3224 3.5393C17.0277 3.49406 16.7802 3.28573 16.6778 2.99611C16.6474 2.90931 16.6133 2.82408 16.5757 2.74096C16.4499 2.46029 16.4809 2.13095 16.659 1.88237L16.7838 1.70797C16.8331 1.63932 16.8262 1.54304 16.7678 1.48254L16.248 0.944608C16.1893 0.883844 16.0965 0.876741 16.03 0.928036L15.8615 1.05693C15.6212 1.24132 15.3031 1.27368 15.032 1.14321C14.9517 1.10454 14.8694 1.06929 14.7856 1.03746C14.5056 0.931718 14.3044 0.67551 14.2604 0.370639L14.2294 0.156255C14.2175 0.0712912 14.1471 0.00842285 14.0643 0.00842285H13.329C13.2462 0.00842285 13.1758 0.0712912 13.1634 0.156255L13.1329 0.370639C13.0889 0.67551 12.8877 0.931718 12.6077 1.03746C12.5239 1.06929 12.4416 1.10454 12.3613 1.14321C12.0899 1.27368 11.7718 1.24132 11.5315 1.05693L11.3633 0.928036C11.2965 0.876741 11.2038 0.883844 11.1453 0.944608L10.6255 1.48254C10.5671 1.54304 10.56 1.63932 10.6092 1.70797L10.7342 1.88237C10.9123 2.13095 10.9433 2.46029 10.8173 2.74096C10.78 2.82408 10.7459 2.90931 10.7152 2.99611C10.6131 3.28573 10.3656 3.49406 10.0709 3.5393L9.86357 3.5714C9.78176 3.58376 9.72104 3.65662 9.72104 3.74264V4.50337C9.72104 4.58913 9.78176 4.66199 9.86357 4.67462L10.0709 4.70644C10.3656 4.75195 10.6131 4.96029 10.7152 5.2499C10.7459 5.33671 10.78 5.42167 10.8173 5.50506C10.9433 5.78546 10.9123 6.11506 10.7342 6.36364L10.6092 6.53804C10.56 6.60696 10.5671 6.70271 10.6255 6.76347L11.1453 7.3014C11.2038 7.36217 11.2965 7.36901 11.3633 7.31798L11.5315 7.18882C11.7718 7.00442 12.0899 6.9726 12.3613 7.1028C12.4416 7.14147 12.5239 7.17672 12.6077 7.20855C12.8877 7.31429 13.0889 7.57024 13.1329 7.87537L13.1634 8.09002C13.1758 8.17498 13.2462 8.23759 13.329 8.23759H14.0643C14.1471 8.23759 14.2175 8.17498 14.2294 8.09002L14.2604 7.87537C14.3044 7.57024 14.5056 7.31429 14.7856 7.20855C14.8694 7.17672 14.9517 7.14147 15.032 7.1028C15.3031 6.9726 15.6212 7.00442 15.8615 7.18882L16.03 7.31798C16.0965 7.36901 16.1893 7.36217 16.248 7.3014L16.7678 6.76347C16.8262 6.70271 16.8331 6.60696 16.7838 6.53804L16.659 6.36364C16.4809 6.11506 16.4499 5.78546 16.5757 5.50506C16.6133 5.42167 16.6474 5.33671 16.6778 5.2499C16.7802 4.96029 17.0277 4.75195 17.3224 4.70644L17.5297 4.67462C17.6115 4.66199 17.6723 4.58913 17.6723 4.50337V3.74264C17.6723 3.65662 17.6115 3.58376 17.5297 3.5714Z"
                          fill="#0E6651"></path>
                      </svg>
                    </div>
                  </div>
                  <router-link to="/retirement-buffer/income-rider"
                    class="head_back_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9"
                      viewBox="0 0 6 9" fill="none">
                      <rect x="4.24219" y="9.00781" width="6.00271"
                        height="2.00096" rx="1.00048"
                        transform="rotate(-135 4.24219 9.00781)"
                        fill="#A0A0A0" />
                      <rect y="4.65625" width="5.9995" height="2.00318"
                        rx="1.00159" transform="rotate(-45 0 4.65625)"
                        fill="#A0A0A0" />
                    </svg>
                    Back to Parameters Screen</router-link>
                </div>

                <div class="tab-content">
                  <div class="tab-pane fade show active" id="v-pills-table"
                    role="tabpanel" aria-labelledby="v-pills-table">
                    <line-chart-result-component />
                  </div>
                  <div class="tab-pane fade" id="v-pills-graph" role="tabpanel"
                    aria-labelledby="v-pills-graph">
                    <graph-chart-result-component />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade setting_modal" id="incomeRideFormModal"
      data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="settingsLabel" aria-modal="true" role="dialog">
      <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
        <svg width="45" height="48" viewBox="0 0 45 48" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="Group 1974" filter="url(#filter0_d_346_5079)">
            <rect id="Rectangle 174" width="49.4476" height="5.7055"
              rx="2.85275"
              transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)"
              fill="#26AB8B">
            </rect>
            <rect id="Rectangle 175" width="49.4476" height="5.7055"
              rx="2.85275"
              transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)"
              fill="#26AB8B"></rect>
          </g>
        </svg>

      </a>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <income-rider-form ref="form" />
          <button
            :class="`mb-4 mt-4 run_btn ${isValidForm ? '' : 'disable'}`"
            data-bs-dismiss="modal"
            @click="onSubmit">Save &amp;
            Run</button>
        </div>
      </div>
    </div>
    
    <increasing-annual-income-result-schedule-modal  />
    <guaranteed-increasing-annual-income-schedule-modal
      :illustrateYear="illustrateYear" :showFormModal="true" />
    <non-guaranteed-increasing-annual-income-schedule-modal
      :illustrateYear="illustrateYear" :showFormModal="true" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LeftSidebarComponent from "@/views/components/common/LeftSidebarComponent.vue";
import NavbarComponent from "@/views/components/common/NavbarComponent.vue";
import IncomeRiderForm from "./components/IncomeRiderForm.vue";
import LineChartResultComponent from "./components/result/LineChartResultComponent.vue";
import GraphChartResultComponent from "./components/result/GraphChartResultComponent.vue";
import IncreasingAnnualIncomeResultScheduleModal from "./components/result/IncreasingAnnualIncomeResultScheduleModal.vue";
import GuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/GuaranteedIncreasingAnnualIncomeScheduleModal.vue";
import NonGuaranteedIncreasingAnnualIncomeScheduleModal from "@/views/retirement-buffer/income-rider/components/NonGuaranteedIncreasingAnnualIncomeScheduleModal.vue";

import "../../../assets/js/chart.min";
export default {
  components: {
    NavbarComponent,
    LeftSidebarComponent,
    GraphChartResultComponent,
    LineChartResultComponent,
    IncreasingAnnualIncomeResultScheduleModal,
    IncomeRiderForm,
    GuaranteedIncreasingAnnualIncomeScheduleModal,
    NonGuaranteedIncreasingAnnualIncomeScheduleModal
  },
  computed: {
    ...mapState({
      formInputs: (state) => state.incomeRider.data.inputs,
      result: (state) => state.incomeRider.data.result,
    }),
    ...mapGetters({
      isValidForm: "incomeRider/isValidForm",
      illustrateYear: "incomeRider/illustrateYear",
    }),
  },
  mounted() {
    if(!this.result){
      return this.$router.push('/retirement-buffer/income-rider');
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.submit();
    },
    resultViewHandler(){
      this.$store.dispatch('incomeRider/updateResultType', 'guaranteed')
      this.$store.dispatch('incomeRider/updateTargetAnalysisType', 'amount');
    },
  },
};
</script>

<style></style>
