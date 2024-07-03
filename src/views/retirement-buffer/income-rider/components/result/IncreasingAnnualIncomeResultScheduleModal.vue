<template lang>
    <div class="modal fade" id="incomeRiderScheduleTableModal" tabindex="-1"
        aria-labelledby="incomeRiderScheduleTableModal" aria-hidden="true">
        <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
            <svg width="45" height="48" viewBox="0 0 45 48" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1974" filter="url(#filter0_d_346_5079)">
                    <rect id="Rectangle 174" width="49.4476" height="5.7055"
                        rx="2.85275"
                        transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)"
                        fill="#26AB8B"></rect>
                    <rect id="Rectangle 175" width="49.4476" height="5.7055"
                        rx="2.85275"
                        transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)"
                        fill="#26AB8B"></rect>
                </g>
            </svg>
        </a>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="accumulation_strategy_box">
                    <div
                        class="accumulation_strategy_box_head border-0 rounded-0">
                        <h2>{{schedules.title}}</h2>
                    </div>
                    <div class="income-rider-modal-body">
                        <div
                            class="nav income-rider-modal-tabs table_top_tab nav-pills"
                            role="tablist" aria-orientation="vertical">
                            <div class="active" data-bs-toggle="pill"
                                data-bs-target="#year-by-year-tab" type="button"
                                role="tab"
                                aria-controls="year-by-year-tab"
                                aria-selected="true">
                                Year by Year
                            </div>
                            <div data-bs-toggle="pill"
                                data-bs-target="#first-and-last-year-tab"
                                type="button"
                                role="tab"
                                aria-controls="first-and-last-year-tab"
                                aria-selected="false">
                                First and Last Year
                            </div>
                        </div>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active"
                                id="year-by-year-tab"
                                role="tabpanel"
                                aria-labelledby="year-by-year-tab">
                                <p class="para d-none">
                                    Enter the increasing income schedule from
                                    the illustration
                                </p>
                                <div class="income-rider-table form-group">
                                    <table
                                        class="table tax-rate-table text-center"
                                        id="scheduleTaxRateTable">
                                        <thead>
                                            <tr>
                                                <th width="50%">Year</th>
                                                <th width="50%">Annual Income
                                                    Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in schedules.data" :key="index">
                                                <td>
                                                    <div class="fs-15">{{index+1}}</div>
                                                </td>
                                                <td>
                                                    <div
                                                        class="p-relative table-input-div percent-input-div">
                                                        <input type="text"
                                                            class="form-control handleLimit"
                                                            id="schedule_tax_rate_1"
                                                            readonly
                                                             :value="$numFormat(item)"
                                                            placeholder />
                                                        <span
                                                            class="dollar-span">$</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade"
                                id="first-and-last-year-tab"
                                role="tabpanel"
                                aria-labelledby="first-and-last-year-tab">
                                <p class="para">
                                    Enter the first and last year’s income
                                    values from the
                                    illustration
                                </p>
                                <div class="income-rider-table form-group">
                                    <table
                                        class="table tax-rate-table text-center"
                                        id="scheduleTaxRateTable">
                                        <thead>
                                            <tr>
                                                <th width="50%">Year</th>
                                                <th width="50%">Annual Income
                                                    Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="fs-15">First
                                                        Year</div>
                                                </td>
                                                <td>
                                                    <div
                                                        class="p-relative table-input-div percent-input-div">
                                                        <input type="text"
                                                            class="form-control handleLimit"
                                                            id="schedule_tax_rate_100"
                                                            :value="$numFormat(schedules.data[0])"
                                                            placeholder /><span
                                                            class="dollar-span">$</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div
                                                        class="fs-15 form_section_label_div justify-content-center">
                                                        Last Year
                                                        <label
                                                            for="premium-bonus"
                                                            class="main_label"><span><svg
                                                                    class="label-common-tooltip-svg"
                                                                    width="13"
                                                                    height="13"
                                                                    viewBox="0 0 13 13"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <g
                                                                        id="Group 1968">
                                                                        <circle
                                                                            id="Ellipse 190"
                                                                            cx="6.5"
                                                                            cy="6.5"
                                                                            r="6.5"
                                                                            fill="#D0D0D0"></circle>
                                                                        <circle
                                                                            id="Ellipse 191"
                                                                            cx="6.5"
                                                                            cy="3.5"
                                                                            r="1"
                                                                            fill="white"></circle>
                                                                        <rect
                                                                            id="Rectangle 753"
                                                                            x="5.75"
                                                                            y="5.5"
                                                                            width="1.5"
                                                                            height="5"
                                                                            rx="0.75"
                                                                            fill="white"></rect>
                                                                    </g>
                                                                </svg><span
                                                                    class="text-start">
                                                                    This should
                                                                    be the value
                                                                    for the
                                                                    “Plan
                                                                    Through Age”
                                                                    you defined
                                                                    earlier. For
                                                                    example, if
                                                                    you entered
                                                                    “95”, you
                                                                    would put
                                                                    the income
                                                                    value at age
                                                                    95 from the
                                                                    illustration
                                                                    here.</span></span></label>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div
                                                        class="p-relative table-input-div percent-input-div">
                                                        <input type="text"
                                                            class="form-control handleLimit"
                                                            id="schedule_tax_rate_100"
                                                            :value="$numFormat(schedules.data[schedules.data.length-1])"
                                                            placeholder /><span
                                                            class="dollar-span">$</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- <button class="mb-5 mt-4 run_btn /*disable*/">Save</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        schedules(){
           return this.$store.state.incomeRider.annual_schedule_result_modal
        }
    }
}
</script>
<style lang>
    
</style>