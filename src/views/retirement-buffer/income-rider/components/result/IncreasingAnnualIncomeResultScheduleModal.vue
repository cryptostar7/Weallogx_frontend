<template lang>
    <div class="modal fade" id="incomeRiderScheduleTableModal" tabindex="-1"
        aria-labelledby="incomeRiderScheduleTableModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="accumulation_strategy_box">
                    <div
                        class="accumulation_strategy_box_head border-0 rounded-0 rounded-top">
                        <h2>{{schedules.title}}</h2>
                    </div>
                    <div class="income-rider-modal-body">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active"
                                id="year-by-year-tab"
                                role="tabpanel"
                                aria-labelledby="year-by-year-tab">
                       
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
                                                             :value="$numFormatNoDecimal(item)"
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
                        </div>
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