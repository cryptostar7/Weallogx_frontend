<template lang>
    <div class="tab-pane fade active show" id="v-pills-annualFees1"
        role="tabpanel" aria-labelledby="v-pills-annualFees1-tab">
        <!-- Card -->
        <annual-income-card-details-component
            :result="result.income_rider_guaranteed_fixed_return || {}"
            :showResult="showResult" />
        <div class="container-fluid">
            <div class="CompMainProgrssBarDiv graph-area">
                <!-- Main tab 1 content start -->
                <div class="w-100 p-3">
                    <div class="position-relative">
                        <div class="collapseDivmdlHd text-center">
                            Target Analysis
                        </div>
                    </div>
                    <br />

                    <div class="d-flex justify-content-center mt-2">
                        <div class="nav mltplSwtchDiv nav-pills" role="tablist"
                            aria-orientation="vertical" id="card-area-1">
                            <div btnAttr="amount-1" class="active"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-amount" type="button"
                                role="tab" aria-controls="v-pills-amount">
                                Amount
                            </div>
                            <div btnAttr="longevity-1" data-bs-toggle="pill"
                                data-bs-target="#v-pills-longevity" role="tab"
                                aria-controls="v-pills-longevity">
                                Longevity
                            </div>
                            <div btnAttr="return-1" data-bs-toggle="pill"
                                data-bs-target="#v-pills-return" role="tab"
                                aria-controls="v-pills-return">
                                Return
                            </div>
                        </div>
                    </div>
                    <div
                        class="d-flex justify-content-center mt-2 w-25 mx-auto">
                        <div class="nav SwtchBtnRprtBldr nav-pills"
                            role="tablist" aria-orientation="vertical">
                            <div :class="`${showResult < 3 ? 'active' : ''}`"
                                type="button" role="tab"
                                aria-selected="true"
                                @click="showResult = 1">
                                Individual
                            </div>
                            <div
                                :class="`${showResult > 2 ? 'active' : ''}`"
                                type="button" role="tab"
                                aria-selected="false"
                                @click="showResult = 3">
                                Show All
                            </div>
                        </div>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade active show"
                            id="v-pills-amount" role="tabpanel">
                            <!-- Amount tab start -->
                            <div class="tab-content">
                                <div class="tab-pane fade active show"
                                    id="v-pills-individual1" role="tabpanel">
                                    <!-- Amount individual tab start -->
                                    <div class="each-target-analysis-bar">
                                        <p class="heading clr1">
                                            FIA - Income Rider
                                            <span data-bs-toggle="modal"
                                                data-bs-target="#incomeRiderTableModal2">
                                                <svg class="ms-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17" height="15"
                                                    viewBox="0 0 13 11"
                                                    fill="none">
                                                    <rect x="0.5" y="0.5"
                                                        width="11.6923"
                                                        height="10" rx="0.5"
                                                        stroke="black" />
                                                    <rect x="6.1899" y="2.69772"
                                                        width="0.317308"
                                                        height="8.14423"
                                                        rx="0.158654"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="2.69772"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 2.69772)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="5.23678"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 5.23678)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="7.77584"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 7.77584)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                </svg>
                                            </span>
                                        </p>
                                        <div
                                            class="target-analysis-each-bars barClr1 text-white"
                                            style="width: 100%">
                                            $<span
                                                id="wider_bar_1">127,000</span>
                                            <span
                                                class="target-bar-span">Increasing
                                                by [x] % per
                                                year</span>
                                        </div>
                                    </div>
                                    <div class="each-target-analysis-bar">
                                        <p class="heading clr2">
                                            Schwab Brokerage Account - Flat
                                            Rate of Return
                                            <span data-bs-toggle="modal"
                                                data-bs-target="#incomeRiderTableModal2">
                                                <svg class="ms-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17" height="15"
                                                    viewBox="0 0 13 11"
                                                    fill="none">
                                                    <rect x="0.5" y="0.5"
                                                        width="11.6923"
                                                        height="10" rx="0.5"
                                                        stroke="black" />
                                                    <rect x="6.1899" y="2.69772"
                                                        width="0.317308"
                                                        height="8.14423"
                                                        rx="0.158654"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="2.69772"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 2.69772)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="5.23678"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 5.23678)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="7.77584"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 7.77584)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                </svg>
                                            </span>
                                        </p>
                                        <div
                                            class="target-analysis-each-bars barClr2 text-white"
                                            :style="{'width': showResult >= 2 ? '100%' : 0}">
                                            <span v-if="showResult >= 2"
                                                id="wider_bar_2">$73,500</span>
                                            <span v-if="showResult >= 2"
                                                class="target-bar-span">Increasing
                                                by [x] % per
                                                year</span>
                                        </div>
                                    </div>
                                    <div class="each-target-analysis-bar">
                                        <p class="heading clr3">
                                            Schwab Brokerage Account -
                                            Historical Market Returns
                                            <span data-bs-toggle="modal"
                                                data-bs-target="#incomeRiderTableModal2">
                                                <svg class="ms-1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17" height="15"
                                                    viewBox="0 0 13 11"
                                                    fill="none">
                                                    <rect x="0.5" y="0.5"
                                                        width="11.6923"
                                                        height="10" rx="0.5"
                                                        stroke="black" />
                                                    <rect x="6.1899" y="2.69772"
                                                        width="0.317308"
                                                        height="8.14423"
                                                        rx="0.158654"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="2.69772"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 2.69772)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="5.23678"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 5.23678)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                    <rect x="12.5367"
                                                        y="7.77584"
                                                        width="0.317308"
                                                        height="12.375"
                                                        rx="0.158654"
                                                        transform="rotate(90 12.5367 7.77584)"
                                                        stroke="black"
                                                        stroke-width="0.317308" />
                                                </svg>
                                            </span>
                                        </p>
                                        <div
                                            class="target-analysis-each-bars barClr3 text-white"
                                            :style="{'width': showResult > 2 ? '100%' : 0}">
                                            <span v-if="showResult > 2"
                                                id="wider_bar_3">$244,000</span>
                                            <span v-if="showResult > 2"
                                                class="target-bar-span">Increasing
                                                by [x] % per
                                                year</span>
                                        </div>
                                    </div>
                                    <div class="scalling-div">
                                        <span
                                            v-for="(item, index) in result.income_rider_guaranteed_fixed_return ? result.income_rider_guaranteed_fixed_return.year_count : 0"
                                            :key="index">{{item}}</span>
                                    </div>
                                    <p class="scalling-div-label">
                                        Years
                                    </p>
                                    <button
                                        :class="`income-rider-show-next-btn ${showResult > 2 ? 'disable' : ''}`"
                                        @click="showNextHandler">
                                        Show Next
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="17" height="10"
                                            viewBox="0 0 17 10" fill="none">
                                            <rect x="7.78125" y="10"
                                                width="10.9992" height="3.14262"
                                                rx="1.57131"
                                                transform="rotate(-135 7.78125 10)"
                                                fill="white" />
                                            <rect x="6.03906" y="7.78125"
                                                width="10.9992" height="3.14262"
                                                rx="1.57131"
                                                transform="rotate(-45 6.03906 7.78125)"
                                                fill="white" />
                                        </svg>
                                    </button>
                                    <!-- Amount individual tab end -->
                                </div>
                            </div>
                            <!-- Amount tab end -->
                        </div>
                        <div class="tab-pane fade" id="v-pills-longevity"
                            role="tabpanel">
                            <!-- Longevity tab start -->
                            <div class="tab-content">
                                <div class="tab-pane fade active show"
                                    id="v-pills-individual2" role="tabpanel">
                                    <!-- Longevity individual tab start -->
                                    <div class="tab-content">
                                        <div class="tab-pane fade active show"
                                            id="v-pills-individual1"
                                            role="tabpanel">
                                            <!-- Amount individual tab start -->
                                            <div
                                                class="each-target-analysis-bar">
                                                <p class="heading clr1">
                                                    FIA - Income Rider
                                                    <span data-bs-toggle="modal"
                                                        data-bs-target="#incomeRiderTableModal2"><svg
                                                            class="ms-1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="15"
                                                            viewBox="0 0 13 11"
                                                            fill="none">
                                                            <rect x="0.5"
                                                                y="0.5"
                                                                width="11.6923"
                                                                height="10"
                                                                rx="0.5"
                                                                stroke="black"></rect>
                                                            <rect x="6.1899"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="8.14423"
                                                                rx="0.158654"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 2.69772)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="5.23678"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 5.23678)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="7.77584"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 7.77584)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                        </svg></span>
                                                </p>
                                                <div
                                                    class="target-analysis-each-bars barClr1 text-white"
                                                    style="width: 100%">
                                                    $<span
                                                        id="wider_bar_1">127,000</span><span
                                                        class="target-bar-span">Increasing
                                                        by [x] % per
                                                        year</span>
                                                </div>
                                            </div>
                                            <div
                                                class="each-target-analysis-bar">
                                                <p class="heading clr2">
                                                    Schwab Brokerage Account -
                                                    Flat Rate of Return
                                                    <span data-bs-toggle="modal"
                                                        data-bs-target="#incomeRiderTableModal2"><svg
                                                            class="ms-1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="15"
                                                            viewBox="0 0 13 11"
                                                            fill="none">
                                                            <rect x="0.5"
                                                                y="0.5"
                                                                width="11.6923"
                                                                height="10"
                                                                rx="0.5"
                                                                stroke="black"></rect>
                                                            <rect x="6.1899"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="8.14423"
                                                                rx="0.158654"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 2.69772)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="5.23678"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 5.23678)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="7.77584"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 7.77584)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                        </svg></span>
                                                </p>
                                                <div
                                                    class="target-analysis-each-bars barClr2 text-white"
                                                    style="width: 100%">
                                                    $<span
                                                        id="wider_bar_2">73,500</span><span
                                                        class="target-bar-span">Increasing
                                                        by [x] % per
                                                        year</span>
                                                </div>
                                            </div>
                                            <div
                                                class="each-target-analysis-bar">
                                                <p class="heading clr3">
                                                    Schwab Brokerage Account -
                                                    Historical Market Returns
                                                    <span data-bs-toggle="modal"
                                                        data-bs-target="#incomeRiderTableModal2"><svg
                                                            class="ms-1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="15"
                                                            viewBox="0 0 13 11"
                                                            fill="none">
                                                            <rect x="0.5"
                                                                y="0.5"
                                                                width="11.6923"
                                                                height="10"
                                                                rx="0.5"
                                                                stroke="black"></rect>
                                                            <rect x="6.1899"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="8.14423"
                                                                rx="0.158654"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="2.69772"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 2.69772)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="5.23678"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 5.23678)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                            <rect x="12.5367"
                                                                y="7.77584"
                                                                width="0.317308"
                                                                height="12.375"
                                                                rx="0.158654"
                                                                transform="rotate(90 12.5367 7.77584)"
                                                                stroke="black"
                                                                stroke-width="0.317308"></rect>
                                                        </svg></span>
                                                </p>
                                                <div
                                                    class="target-analysis-each-bars barClr3 text-white"
                                                    style="width: 100%">
                                                    $<span
                                                        id="wider_bar_3">244,000</span><span
                                                        class="target-bar-span">Increasing
                                                        by [x] % per
                                                        year</span>
                                                </div>
                                            </div>
                                            <div class="scalling-div">
                                                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span><span>32</span><span>33</span><span>34</span><span>35</span>
                                            </div>
                                            <p class="scalling-div-label">
                                                Years
                                            </p>
                                            <button
                                                :class="`income-rider-show-next-btn ${showResult > 2 ? 'disable' : ''}`"
                                                @click="showNextHandler">
                                                Show Next
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17" height="10"
                                                    viewBox="0 0 17 10"
                                                    fill="none">
                                                    <rect x="7.78125" y="10"
                                                        width="10.9992"
                                                        height="3.14262"
                                                        rx="1.57131"
                                                        transform="rotate(-135 7.78125 10)"
                                                        fill="white"></rect>
                                                    <rect x="6.03906"
                                                        y="7.78125"
                                                        width="10.9992"
                                                        height="3.14262"
                                                        rx="1.57131"
                                                        transform="rotate(-45 6.03906 7.78125)"
                                                        fill="white"></rect>
                                                </svg></button><!-- Amount individual tab end -->
                                        </div>

                                    </div>
                                    <!-- Longevity individual tab end -->
                                </div>
                            </div>
                            <!-- Longevity tab end -->
                        </div>
                        <div class="tab-pane fade" id="v-pills-return"
                            role="tabpanel">
                            <!-- Return tab start -->
                            <div class="row mt-5">
                                <div class="col-md-6">
                                    <div class="target-analysis-bar-main-div">
                                        <div class="d-flex flex-column">
                                            <div
                                                class="d-flex gap-4 justify-content-center w-100">
                                                <div
                                                    class="target-analysis-bar">
                                                    <div
                                                        class="target-analysis-inner-bar inner-clr1"
                                                        style="height: 100%">
                                                        <div
                                                            class="target-analysis-bottom-bar-area bottom-clr1">
                                                            <p>
                                                                <span
                                                                    class="bigBarNumberJsCls2">$681,605</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="target-analysis-bar">
                                                    <div
                                                        class="target-analysis-inner-bar inner-clr2"
                                                        style="height: 100%">
                                                        <div
                                                            class="target-analysis-bottom-bar-area bottom-clr2">
                                                            <p>
                                                                <span
                                                                    class="bigBarNumberJsCls2">$681,605</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="bar-long-para">
                                                The required constant rate of
                                                return for the [COMPARATIVE
                                                VEHICLE ACCOUNT NAME] to match
                                                the [INCOME RIDER ACCOUNT
                                                NAME]’s income production is
                                                <span>[REQUIRED RATE OF
                                                    RETURN]</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="col-md-6 position-relative border-before-col">
                                    <p
                                        class="target-analysis-success-prob-para mb-2">
                                        Success Probability
                                    </p>
                                    <div
                                        class="pie target-analysis-progress-pie"
                                        data-pie='{"speed":30,"percent":67.9,"colorSlice":"#1660A4","colorCircle":"#609BD2","round":true}'
                                        data-pie-index="2">
                                        <svg class="mx-auto d-block"
                                            role="progressbar" width="240"
                                            height="240" viewBox="0 0 100 100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            aria-valuenow="68">
                                            <circle cx="50%" cy="50%" r="42"
                                                shape-rendering="geometricPrecision"
                                                fill="none" stroke="#609BD2"
                                                stroke-width="10"></circle>
                                            <circle cx="50%" cy="50%" r="42"
                                                shape-rendering="geometricPrecision"
                                                class="pie-circle-2" fill="none"
                                                stroke-width="10"
                                                stroke-dashoffset="84.47999999999999"
                                                stroke-dasharray="264"
                                                stroke-linecap="round" style="
                            transform: rotate(-90deg);
                            transform-origin: 50% 50%;
                            " stroke="#1660A4" data-angel="68"></circle>
                                            <text class="pie-text-2" x="50%"
                                                y="50%" fill="#000"
                                                text-anchor="middle" dy="0.35em"
                                                font-size="1.6rem"
                                                font-weight="400">
                                                <tspan class="pie-percent-2">
                                                    68
                                                </tspan>
                                                <tspan class="pie-unit-2">
                                                    %
                                                </tspan>
                                            </text>
                                        </svg>
                                        <p class="pie-long-para">
                                            The probability that the
                                            [COMPARATIVE VEHICLE ACCOUNT NAME]
                                            will match the [INCOME RIDER ACCOUNT
                                            NAME]’s income production relying
                                            upon market returns is
                                            <span>[SUCCESS PROBABILITY]</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Retun tab end -->
                        </div>
                    </div>
                </div>
                <!-- Main tab 1 content end -->
            </div>
        </div>
    </div>
</template>
<script>
  import { mapState } from "vuex";
  import AnnualIncomeCardDetailsComponent from "./AnnualIncomeCardDetailsComponent.vue";
  
export default {
    components: {AnnualIncomeCardDetailsComponent},
    data() {
        return {
            showResult: 1,
        }
    },
    methods: {
        showNextHandler(){
            this.showResult = this.showResult+1;
        }
    },
    computed: {
        ...mapState({
        result: (state) => state.incomeRider.data.result,
        inputs: (state) => state.incomeRider.data.result.inputs || [],
        }),
    },  
};
</script>
<style lang>
</style>