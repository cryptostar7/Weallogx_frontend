<template lang="">
    <div class="enhancementsContent" id="enhancements2Content">
        <div class="d-flex justify-content-center align-items-center mt-3">
            <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                <div class="active" id="nav-flatfixedValue-tab" data-bs-toggle="tab"
                    data-bs-target="#nav-flatfixedValue" role="tab" aria-controls="nav-flatfixedValue"
                    aria-selected="true">Fixed Value</div>
                <div class="" id="nav-flatSchedule-tab" data-bs-toggle="tab" data-bs-target="#nav-flatSchedule"
                    role="tab" aria-controls="nav-flatSchedule" aria-selected="false">Schedule</div>
            </div>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-flatfixedValue" role="tabpanel"
                aria-labelledby="nav-flatfixedValue-tab">
                <form action="javascript:void(0)">

                    <div class="creditBonusInputDiv form-group mt-3" id="creditBonusinputDiv">
                        <label for="creditBonusinput">Credit/Bonus</label>
                        <input type="text" class="form-control bonus-input" id="creditBonusinput">
                    </div>
                    <div class="multiplierInputDiv mt-3">
                        <label for="Start Year">Start Year</label>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="fixeValueYearRadio d-flex justify-content-between align-items-center px-1">
                            <label class="" v-for="(item, index) in maxYear" :key="index">
                                <input type="radio" name="radio" class="d-none" :checked="!customAmount && item === 1 ? true :false">
                                <span class="fixedStartYear">{{item}}</span>
                            </label>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="or-div">
                                or
                            </div>
                            <div class="customAmountInputDiv customAmountNoPercent ms-3">
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" ref="input" v-model="customAmount">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" id="nav-flatSchedule" role="tabpanel" aria-labelledby="nav-flatSchedule-tab">

                <div class="d-flex justify-content-center align-items-center mt-3">
                    <div class="enhancementFixedSheduleBtn nav nav-tabs" id="nav-tab" role="tablist">
                        <div class="active" id="nav-rate-tab" data-bs-toggle="tab" data-bs-target="#nav-rate" role="tab"
                            aria-controls="nav-rate" aria-selected="true">Rate</div>
                        <div class="" id="nav-Amount-tab" data-bs-toggle="tab" data-bs-target="#nav-amount" role="tab"
                            aria-controls="nav-amount" aria-selected="false">Amount ($)</div>

                    </div>
                </div>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-rate" role="tabpanel" aria-labelledby="nav-rate-tab">
                        <!--  -->
                        <div class="d-flex justify-content-center w-100">
                            <div class="schduleTableDiv mt-5 ">
                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Multiplier Rate</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in 10" :key="index">
                                            <td data-label="Year">{{item}}</td>
                                            <td data-label="Rate" class="innerTableInputTd">
                                                <div class="percent-input-div"><input type="text"
                                                        class="form-control percent-input" required><span
                                                        class="percent-span">%</span></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!--  -->
                    </div>
                    <div class="tab-pane fade" id="nav-amount" role="tabpanel" aria-labelledby="nav-amount-tab">
                        <div class="d-flex justify-content-center w-100">
                            <div class="schduleTableDiv mt-5 ">
                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in 10" :key="index">
                                            <td data-label="Year">{{item}}</td>
                                            <td data-label="Rate" class="amountInnerTableInputTd"><input type="text"
                                                    class="form-control">
                                                <label for="amount">$</label>
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
</template>
<script>
export default {
    data(){
        return {
            maxYear: 5,
            customAmount:''
        }
    }
}
</script>
<style lang="">
    
</style>