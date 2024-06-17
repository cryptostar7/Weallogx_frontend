<template lang>
    <div class="container-fluid cards-area">
        <div
            class="common-card-div1 d-flex justify-content-between flex-gap-12"
            id="card-amount-1">
            <div class="mt-3 flex-1">
                <div class="incomeRiderCard incomeCard1 w-100">
                    <div class="d-flex gap-2 h-100">
                        <div
                            class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                        <div class="w-100">
                            <p class="allCardHeadPara mb-2">
                                FIA - Income Rider
                                <span hidden>Flat Rate of Return</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara1 d-flex justify-content-between">
                                <span>Total Distributions</span>
                                <span> {{
                                    $numFormatWithDollar(
                                    $arraySum(result.cumulative_income_rider_distribution)
                                    )
                                    }}</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara1 d-flex justify-content-between">
                                <span>Longevity</span>
                                <span>{{result.longevity}} Years</span>
                            </p>
                            <p
                                :class="`cardRadioSwtchpara1 d-flex justify-content-between m-0 ${result.shortfall_surplus_years > 0 ? 'text-success' : 'text-danger'}`">
                                <span>{{result.shortfall_surplus_years > 0 ?
                                    'Surplus' : 'Shortfall'}}</span>
                                <span
                                    v-if="result.shortfall_surplus_years">{{result.shortfall_surplus_years}}
                                    -
                                    {{$numFormatWithDollar(result.shortfall_surplus_value)}}</span>
                                <span v-else>None</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 flex-1">
                <div
                    :class="`incomeRiderCard incomeCard2 w-100 ${showResult >= 2 ? '' : 'disable'}`">
                    <div class="d-flex gap-2 h-100">
                        <div
                            class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                        <div class="w-100">
                            <p class="allCardHeadPara mb-2">
                                Schwab Brokerage
                                <span>Flat Rate of Return</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara2 d-flex justify-content-between">
                                <span>Total Distributions</span>
                                <span>$1,210,384</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara2 d-flex justify-content-between">
                                <span>Longevity</span>
                                <span>28 Years</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara2 d-flex justify-content-between m-0">
                                <span>Shortfall</span>
                                <span class="shortFall">7 Years -
                                    $302,596</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-3 flex-1">
                <div
                    :class="`incomeRiderCard incomeCard3 w-100 ${showResult > 2 ? '' : 'disable'}`">
                    <div class="d-flex gap-2 h-100">
                        <div
                            class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                        <div class="w-100">
                            <p class="allCardHeadPara mb-2">
                                Schwab Brokerage
                                <span>Historical Returns</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara3 d-flex justify-content-between">
                                <span>Total Distributions</span>
                                <span>$$1,037,472</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara3 d-flex justify-content-between">
                                <span>Longevity</span>
                                <span>28 Years</span>
                            </p>
                            <p
                                class="cardRadioSwtchpara3 d-flex justify-content-between m-0">
                                <span>Shortfall</span>
                                <span class="shortFall">11 Years -
                                    $475,508</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    
export default {
    props: ['result', 'showResult'],
    // computed: 
}
</script>
<style lang>
    
</style>