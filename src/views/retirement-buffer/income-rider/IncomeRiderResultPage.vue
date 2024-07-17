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
                  <div class="nav table_graph_setting_tab nav-pills top-0" role="tablist" aria-orientation="vertical">
                    <div class="active" data-bs-toggle="pill" data-bs-target="#v-pills-table" type="button" role="tab" aria-controls="v-pills-tabe" aria-selected="true">
                      <svg class="income-rider-tab-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <rect width="17" height="2.5" rx="0.5" fill="#0E6651" />
                        <rect y="8.5" width="20" height="2.5" rx="0.5" fill="#0E6651" />
                        <path d="M0 17.5C0 17.2239 0.223858 17 0.5 17H11.5C11.7761 17 12 17.2239 12 17.5V19C12 19.2761 11.7761 19.5 11.5 19.5H0.5C0.223858 19.5 0 19.2761 0 19V17.5Z" fill="#0E6651" />
                      </svg>
                    </div>
                    <div data-bs-toggle="pill" data-bs-target="#v-pills-graph" type="button" role="tab" aria-controls="v-pills-graph" aria-selected="false">
                      <svg class="income-rider-tab-svg income-svg-2" width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6993_46716)">
                          <mask id="mask0_6993_46716" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="3" y="0" width="25" height="25">
                            <path d="M3 0.125H27.1927V24.3177H3V0.125Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_6993_46716)">
                            <path class="svgstroke" d="M2 20.8438C13.6048 19.4017 21.3425 13.1615 25.2129 2.12304" stroke="#0E6651" stroke-width="3" />
                          </g>
                        </g>
                        <mask id="mask1_6993_46716" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="2" y="24" width="25" height="3">
                          <path d="M2 24.125H26.1927V26.625H2V24.125Z" fill="white" />
                        </mask>
                        <g mask="url(#mask1_6993_46716)">
                          <path class="svgstroke" d="M2 25.4453H24.9394" stroke="#0E6651" stroke-width="1.5" />
                        </g>
                        <mask id="mask2_6993_46716" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="3" height="27">
                          <path d="M0 26.1953L0 0.0026859H2.5L2.5 26.1953H0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask2_6993_46716)">
                          <path class="svgstroke" d="M1.32031 26.1953L1.32031 1.35956" stroke="#0E6651" stroke-width="1.5" />
                        </g>
                      </svg>
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#incomeRideFormModal">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.50203 10.0843C4.71214 10.0843 4.07215 9.42169 4.07215 8.6044C4.07215 7.78711 4.71214 7.12476 5.50203 7.12476C6.29167 7.12476 6.93191 7.78711 6.93191 8.6044C6.93191 9.42169 6.29167 10.0843 5.50203 10.0843ZM10.8064 7.84104L10.5196 7.79711C10.1115 7.73424 9.76931 7.44594 9.62779 7.04506C9.58536 6.92484 9.53836 6.80726 9.48653 6.69178C9.31224 6.30353 9.35518 5.84793 9.60162 5.5036L9.77439 5.26239C9.84273 5.16716 9.83333 5.03432 9.75203 4.95041L9.03277 4.20599C8.95147 4.12208 8.82342 4.11208 8.7312 4.18284L8.49822 4.36171C8.16565 4.6166 7.72535 4.66106 7.34985 4.48061C7.23882 4.42695 7.125 4.37828 7.00889 4.33436C6.6217 4.1881 6.34273 3.83378 6.28227 3.41159L6.23958 3.11461C6.22281 2.99729 6.12525 2.91022 6.01067 2.91022H4.99314C4.87856 2.91022 4.78125 2.99729 4.76423 3.11461L4.72154 3.41159C4.66108 3.83378 4.38237 4.1881 3.99492 4.33436C3.87881 4.37828 3.76524 4.42695 3.65396 4.48061C3.27871 4.66106 2.83841 4.6166 2.50584 4.36171L2.27261 4.18284C2.18064 4.11208 2.05234 4.12208 1.97129 4.20599L1.25178 4.95041C1.17073 5.03432 1.16108 5.16716 1.22942 5.26239L1.40218 5.5036C1.64863 5.84793 1.69156 6.30353 1.51728 6.69178C1.4657 6.80726 1.41844 6.92484 1.37602 7.04506C1.2345 7.44594 0.892276 7.73424 0.484248 7.79711L0.197409 7.84104C0.0840955 7.85866 0 7.95914 0 8.07804V9.13102C0 9.24965 0.0840955 9.35066 0.197409 9.36803L0.484248 9.41222C0.892276 9.47482 1.2345 9.76312 1.37602 10.164C1.41844 10.2842 1.4657 10.4021 1.51728 10.517C1.69156 10.9055 1.64863 11.3614 1.40218 11.7055L1.22942 11.9464C1.16108 12.0419 1.17073 12.1747 1.25178 12.2587L1.97129 13.0033C2.05234 13.087 2.18064 13.097 2.27261 13.0265L2.50584 12.8474C2.83841 12.5925 3.27871 12.548 3.65396 12.7285C3.76524 12.7819 3.87881 12.8305 3.99492 12.8744C4.38237 13.021 4.66108 13.3753 4.72154 13.7975L4.76423 14.0945C4.78125 14.2118 4.87856 14.2988 4.99314 14.2988H6.01067C6.12525 14.2988 6.22281 14.2118 6.23958 14.0945L6.28227 13.7975C6.34273 13.3753 6.6217 13.021 7.00889 12.8744C7.125 12.8305 7.23882 12.7819 7.34985 12.7285C7.72535 12.548 8.16565 12.5925 8.49822 12.8474L8.7312 13.0265C8.82342 13.097 8.95147 13.087 9.03277 13.0033L9.75203 12.2587C9.83333 12.1747 9.84273 12.0419 9.77439 11.9464L9.60162 11.7055C9.35518 11.3614 9.31224 10.9055 9.48653 10.517C9.53836 10.4021 9.58536 10.2842 9.62779 10.164C9.76931 9.76312 10.1115 9.47482 10.5196 9.41222L10.8064 9.36803C10.9197 9.35066 11.0038 9.24965 11.0038 9.13102V8.07804C11.0038 7.95914 10.9197 7.85866 10.8064 7.84104ZM14.4982 15.7785C13.7086 15.7785 13.0683 15.1161 13.0683 14.2988C13.0683 13.4816 13.7086 12.8189 14.4982 12.8189C15.2879 12.8189 15.9281 13.4816 15.9281 14.2988C15.9281 15.1161 15.2879 15.7785 14.4982 15.7785ZM19.8028 13.5352L19.516 13.491C19.108 13.4284 18.7657 13.1401 18.624 12.7392C18.5818 12.619 18.5345 12.5012 18.4827 12.3862C18.3084 11.9977 18.3516 11.5418 18.5981 11.198L18.7706 10.9566C18.8389 10.8613 18.8295 10.7285 18.7485 10.6446L18.029 9.89991C17.9479 9.81599 17.8196 9.80626 17.7274 9.87676L17.4944 10.0556C17.1618 10.3108 16.7215 10.3555 16.3463 10.1748C16.235 10.1214 16.1212 10.0727 16.0053 10.0288C15.6179 9.88228 15.3392 9.52796 15.2785 9.10577L15.236 8.80879C15.2193 8.69147 15.1217 8.6044 15.0069 8.6044H13.9896C13.8747 8.6044 13.7774 8.69147 13.7607 8.80879L13.718 9.10577C13.6573 9.52796 13.3786 9.88228 12.9914 10.0288C12.8753 10.0727 12.7614 10.1214 12.6502 10.1748C12.2749 10.3555 11.8346 10.3108 11.5023 10.0556L11.2691 9.87676C11.1768 9.80626 11.0485 9.81599 10.9675 9.89991L10.2482 10.6446C10.1669 10.7285 10.1575 10.8613 10.2259 10.9566L10.3986 11.198C10.6448 11.5418 10.6878 11.9977 10.5135 12.3862C10.4619 12.5012 10.4146 12.619 10.3722 12.7392C10.2309 13.1401 9.88846 13.4284 9.48069 13.491L9.1936 13.5352C9.08028 13.5526 8.99644 13.6536 8.99644 13.7722V14.8252C8.99644 14.9438 9.08028 15.0448 9.1936 15.0622L9.48069 15.1061C9.88846 15.169 10.2309 15.4573 10.3722 15.8582C10.4146 15.9784 10.4619 16.0962 10.5135 16.2112C10.6878 16.5997 10.6448 17.0553 10.3986 17.3994L10.2259 17.6409C10.1575 17.7361 10.1669 17.8689 10.2482 17.9528L10.9675 18.6975C11.0485 18.7812 11.1768 18.7912 11.2691 18.7204L11.5023 18.5415C11.8346 18.2864 12.2749 18.2422 12.6502 18.4226C12.7614 18.476 12.8753 18.525 12.9914 18.5689C13.3788 18.7151 13.6573 19.0695 13.718 19.4917L13.7607 19.7886C13.7774 19.906 13.8747 19.993 13.9896 19.993H15.0069C15.1217 19.993 15.2193 19.906 15.236 19.7886L15.2785 19.4917C15.3392 19.0695 15.6179 18.7151 16.0053 18.5689C16.1212 18.525 16.235 18.476 16.3463 18.4226C16.7215 18.2422 17.1618 18.2864 17.4944 18.5415L17.7274 18.7204C17.8196 18.7912 17.9479 18.7812 18.029 18.6975L18.7485 17.9528C18.8295 17.8689 18.8389 17.7361 18.7706 17.6409L18.5981 17.3994C18.3516 17.0553 18.3084 16.5997 18.4827 16.2112C18.5345 16.0962 18.5818 15.9784 18.624 15.8582C18.7657 15.4573 19.108 15.169 19.516 15.1061L19.8028 15.0622C19.9162 15.0448 20.0003 14.9438 20.0003 14.8252V13.7722C20.0003 13.6536 19.9162 13.5526 19.8028 13.5352ZM13.6966 5.2395C13.1009 5.2395 12.6179 4.73945 12.6179 4.12313C12.6179 3.50655 13.1009 3.00676 13.6966 3.00676C14.2924 3.00676 14.7752 3.50655 14.7752 4.12313C14.7752 4.73945 14.2924 5.2395 13.6966 5.2395ZM17.5297 3.57152L17.3224 3.53943C17.0277 3.49418 16.7802 3.28585 16.6778 2.99623C16.6474 2.90943 16.6133 2.8242 16.5757 2.74108C16.4499 2.46041 16.4809 2.13107 16.659 1.88249L16.7838 1.70809C16.8331 1.63944 16.8262 1.54316 16.7678 1.48266L16.248 0.94473C16.1893 0.883966 16.0965 0.876864 16.03 0.928158L15.8615 1.05705C15.6212 1.24145 15.3031 1.2738 15.032 1.14333C14.9517 1.10466 14.8694 1.06941 14.7856 1.03759C14.5056 0.93184 14.3044 0.675633 14.2604 0.370761L14.2294 0.156377C14.2175 0.0714132 14.1471 0.00854492 14.0643 0.00854492H13.329C13.2462 0.00854492 13.1758 0.0714132 13.1634 0.156377L13.1329 0.370761C13.0889 0.675633 12.8877 0.93184 12.6077 1.03759C12.5239 1.06941 12.4416 1.10466 12.3613 1.14333C12.0899 1.2738 11.7718 1.24145 11.5315 1.05705L11.3633 0.928158C11.2965 0.876864 11.2038 0.883966 11.1453 0.94473L10.6255 1.48266C10.5671 1.54316 10.56 1.63944 10.6092 1.70809L10.7342 1.88249C10.9123 2.13107 10.9433 2.46041 10.8173 2.74108C10.78 2.8242 10.7459 2.90943 10.7152 2.99623C10.6131 3.28585 10.3656 3.49418 10.0709 3.53943L9.86357 3.57152C9.78176 3.58388 9.72104 3.65675 9.72104 3.74276V4.50349C9.72104 4.58925 9.78176 4.66211 9.86357 4.67474L10.0709 4.70657C10.3656 4.75207 10.6131 4.96041 10.7152 5.25002C10.7459 5.33683 10.78 5.42179 10.8173 5.50518C10.9433 5.78559 10.9123 6.11518 10.7342 6.36376L10.6092 6.53816C10.56 6.60708 10.5671 6.70283 10.6255 6.7636L11.1453 7.30153C11.2038 7.36229 11.2965 7.36913 11.3633 7.3181L11.5315 7.18894C11.7718 7.00455 12.0899 6.97272 12.3613 7.10293C12.4416 7.14159 12.5239 7.17684 12.6077 7.20867C12.8877 7.31442 13.0889 7.57036 13.1329 7.8755L13.1634 8.09014C13.1758 8.17511 13.2462 8.23771 13.329 8.23771H14.0643C14.1471 8.23771 14.2175 8.17511 14.2294 8.09014L14.2604 7.8755C14.3044 7.57036 14.5056 7.31442 14.7856 7.20867C14.8694 7.17684 14.9517 7.14159 15.032 7.10293C15.3031 6.97272 15.6212 7.00455 15.8615 7.18894L16.03 7.3181C16.0965 7.36913 16.1893 7.36229 16.248 7.30153L16.7678 6.7636C16.8262 6.70283 16.8331 6.60708 16.7838 6.53816L16.659 6.36376C16.4809 6.11518 16.4499 5.78559 16.5757 5.50518C16.6133 5.42179 16.6474 5.33683 16.6778 5.25002C16.7802 4.96041 17.0277 4.75207 17.3224 4.70657L17.5297 4.67474C17.6115 4.66211 17.6723 4.58925 17.6723 4.50349V3.74276C17.6723 3.65675 17.6115 3.58388 17.5297 3.57152Z" fill="#0E6651"/>
                        </svg>
                    </div>
                  </div>
                  <router-link to="/retirement-buffer/income-rider" class="head_back_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                      <rect x="4.24219" y="9.00781" width="6.00271" height="2.00096" rx="1.00048" transform="rotate(-135 4.24219 9.00781)" fill="#A0A0A0" />
                      <rect y="4.65625" width="5.9995" height="2.00318" rx="1.00159" transform="rotate(-45 0 4.65625)" fill="#A0A0A0" />
                    </svg>
                    Back to Parameters Screen</router-link>
                </div>

                <div class="tab-content">
                  <div class="tab-pane fade show active" id="v-pills-table" role="tabpanel" aria-labelledby="v-pills-table">
                    <line-chart-result-component />
                  </div>
                  <div class="tab-pane fade" id="v-pills-graph" role="tabpanel" aria-labelledby="v-pills-graph">
                    <graph-chart-result-component />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade setting_modal" id="incomeRideFormModal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="settingsLabel" aria-modal="true" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <income-rider-form ref="form" @valid="(e) => (isSubmitEnabled = e)" />
          <button :class="`mb-4 mt-4 run_btn ${isSubmitEnabled ? '' : 'disable'}`" data-bs-dismiss="modal" @click="onSubmit">
            Save &amp; Run
          </button>
        </div>
      </div>
    </div>

    <increasing-annual-income-result-schedule-modal />
    <guaranteed-increasing-annual-income-schedule-modal :illustrateYear="illustrateYear" :showFormModal="true" />
    <non-guaranteed-increasing-annual-income-schedule-modal :illustrateYear="illustrateYear" :showFormModal="true" />
    <income-start-year-warning-modal :showFormModal="true" />
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
import IncomeStartYearWarningModal from "@/views/retirement-buffer/income-rider/components/IncomeStartYearWarningModal.vue";

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
    NonGuaranteedIncreasingAnnualIncomeScheduleModal,
    IncomeStartYearWarningModal
  },
  data() {
    return { isSubmitEnabled: false };
  },
  mounted() {
    if (!this.result) {
      return this.$router.push({
        name: "retirement-buffer-income-rider-result",
      });
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.submit();
    },
  },
  computed: {
    ...mapState({
      formInputs: (state) => state.incomeRider.inputs,
      result: (state) => state.incomeRider.result,
    }),
    ...mapGetters({
      illustrateYear: "incomeRider/illustrateYear",
    }),
  },
};
</script>

<style></style>
