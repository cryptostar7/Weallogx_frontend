<template lang="">
    <div v-if="$props.data" :class="$props.col">
        <div class="compVehcleCol">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p class="compVehcleColPara">Index Strategy #{{$props.tab}}</p>
                    <p class="compVehcleBorder"></p>
                </div>
                <router-link :to="`/historical-simulations/${$route.params.scenario}?tab=${$props.tab}&review=true`" class="editbtnCommonAncor"><button class="btn editBtnCommon">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                            <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                            <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div class="historyHead2">
                <p>Growth Parameters</p>
                <p class="hisBorder"></p>
            </div>
            <form action="">
                <div class="row gx-5">
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Index</label>
                        <input type="text" class="form-control" :value="$props.data.index" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Cap</label>
                        <input type="text" class="form-control" :value="`${$props.data.cap_rate}%`" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Floor</label>
                        <input type="text" class="form-control" :value="`${$props.data.floor}%`" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Margin/Spread</label>
                        <input type="text" class="form-control" :value="`${$props.data.margin_spread}%`" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Participation</label>
                        <input type="text" class="form-control" :value="`${$props.data.participation_rate}%`" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Segment Duration</label>
                        <input type="text" class="form-control" :value="$props.data.segment_duration_years" readonly>
                    </div>
                </div>
            </form>
            <div class="historyHead2">
                <p>Enhancements</p>
                <p class="hisBorder"></p>
            </div>
            <form action="">
                <div class="row gx-5">
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Performance Multiplier</label>
                        <input v-if="!$props.data.performance_multiplier_schedule_check" type="text" :class="`form-control ${$props.data.performance_multiplier ? '':'NAData'}`" :value="$props.data.performance_multiplier ? $props.data.performance_multiplier_fixed_value_multiplier : 'N/A'" readonly>
                        <p v-if="$props.data.performance_multiplier_schedule_check" class="Schedule-para" data-bs-toggle="modal" data-bs-target="#showHistoricalScheduleModal" @click="setSchedule($props.data.performance_multiplier_schedule, 'rate', 'Performance Multiplier')">Scheduled 
                            <button type="button" class="schedule-icon-btn">
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.375" y="0.375" width="14.25" height="12.25" rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                    <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                </svg>
                            </button>
                        </p>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Start Year</label>
                        <input type="text" :class="`form-control ${$props.data.performance_multiplier ? '':'NAData'}`" :value="$props.data.performance_multiplier ? $props.data.performance_multiplier_fixed_value_start_year : 'N/A'" readonly>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Flat Credit/Bonus</label>
                        <input v-if="!$props.data.flat_credit_schedule" type="text" :class="`form-control ${$props.data.flat_fixed_value ? '':'NAData'}`" :value="$props.data.flat_fixed_value ? $props.data.flat_fixed_credit_bonus : 'N/A'" readonly>
                        <p v-if="$props.data.flat_credit_schedule" class="Schedule-para" data-bs-toggle="modal" data-bs-target="#showHistoricalScheduleModal"  @click="setSchedule($props.data.flat_credit_schedule_rate || $props.data.flat_credit_schedule_amount, $props.data.flat_credit_schedule_rate ?' rate' : 'amount', 'Flat Credit/Bonus')">Scheduled 
                            <button type="button" class="schedule-icon-btn">
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.375" y="0.375" width="14.25" height="12.25" rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                    <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                </svg>
                            </button>
                        </p>
                    </div>
                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">Start Year</label>
                        <input type="text" :class="`form-control ${$props.data.flat_fixed_value ? '':'NAData'}`"  :value="$props.data.flat_fixed_value ? $props.data.flat_fixed_start_year : 'N/A'" readonly>
                    </div>

                </div>
            </form>
            <div class="historyHead2">
                <p>Fees</p>
                <p class="hisBorder"></p>
            </div>
            <form action="">
                <div class="row gx-5">
                    <div v-if="$props.data.performance_multiplier" class="col-md-6 summaryInputsDiv">
                        <label for="client name">Performance Mulitiplier Fee</label>
                        <input v-if="$props.data.performance_multiplier_fees_same_in_all_years" type="text" :class="`form-control ${$props.data.performance_multiplier_fees ? '':'NAData'}`" :value="$props.data.performance_multiplier ? $props.data.performance_multiplier_fees : 'N/A'" readonly>
                         <p v-if="!$props.data.performance_multiplier_fees_same_in_all_years" class="Schedule-para" data-bs-toggle="modal" data-bs-target="#showHistoricalScheduleModal" @click="setSchedule($props.data.performance_multiplier_fees_same_in_all_years_schedule, 'rate', 'Performance Mulitiplier Fee')">Scheduled 
                            <button type="button" class="schedule-icon-btn">
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.375" y="0.375" width="14.25" height="12.25" rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                    <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                </svg>
                            </button>
                        </p>
                    </div>
                    
                    <div v-if="$props.data.performance_multiplier" class="col-md-6 summaryInputsDiv">
                        <label for="client name">Same in All Years?</label>
                        <input type="text" :class="`form-control ${$props.data.performance_multiplier ? '':'NAData'}`" :value="$props.data.performance_multiplier_fees_same_in_all_years ? 'Yes' : 'No'" readonly>
                    </div>

                    <div v-if="$props.data.flat_credit_bonus" class="col-md-6 summaryInputsDiv">
                        <label for="client name">Flat Credit/Bonus Fee</label>
                        <input v-if="$props.data.flat_credit_bonus_fees_same_in_all_years" type="text" :class="`form-control ${$props.data.flat_credit_bonus ? '': 'NAData'}`" :value="$props.data.flat_credit_bonus ? $props.data.flat_credit_bonus_fees : 'N/A'" readonly>
                        <p v-if="!$props.data.flat_credit_bonus_fees_same_in_all_years" class="Schedule-para" data-bs-toggle="modal" data-bs-target="#showHistoricalScheduleModal" @click="setSchedule($props.data.flat_credit_bonus_fees_same_in_all_years_schedule, 'rate', 'Flat Credit/Bonus Fee')">Scheduled 
                            <button type="button" class="schedule-icon-btn">
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.375" y="0.375" width="14.25" height="12.25" rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                    <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                    <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                </svg>
                            </button>
                        </p>
                    </div>
                    
                    <div v-if="$props.data.flat_credit_bonus" class="col-md-6 summaryInputsDiv">
                        <label for="client name">Same in All Years?</label>
                        <input type="text" :class="`form-control ${$props.data.flat_credit_bonus ? '': 'NAData'}`"  :value="$props.data.in_advanced_flat_credit_same_in_all_years ? 'Yes' : 'No'" readonly>
                    </div>

                    <div class="col-md-6 summaryInputsDiv">
                        <label for="client name">High Cap Fee</label>
                        <input type="text" class="form-control" :value="`${$props.data.high_cap_fee}%`">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  props: ["data", "tab", "col"],
  emits: ["setSchedule"],
  data() {
    return {
      schedules: [],
    };
  },
  methods: {
    setSchedule: function(data = [], type, title) {
      this.$emit("setSchedule", data, type, title);
    },
  },
};
</script>
<style lang="">
</style>