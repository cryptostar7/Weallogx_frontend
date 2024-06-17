<template lang>
    <div class="ComparativeTableMainDiv rightDivTop4 active">
        <div class="d-flex justify-content-between px-3 py-2 bb-grey tab-head">
            <div class="d-flex align-items-center">
                <label for="rightCheckBox4"
                    class="rghtTopHeadcommon nowrap">Cumulative Income</label>
                <label class="rghtTopHeadcommon">
                    <div class="annual-income-text-para ms-2 fs-12">
                        How long can the [Schwab Brokerage Account]
                        produce the same amount of income as the [FIA]’s
                        Income Rider?
                    </div>
                </label>
            </div>
            <div class="rightLeftDoubleLIneDegine">
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect y="5.5" width="13" height="1.5" rx="0.75"
                        fill="#C2C2C2"></rect>
                    <rect width="13" height="1.5" rx="0.75"
                        fill="#C2C2C2"></rect>
                </svg>
            </div>
        </div>
        <div class="collapseDivMain collapseDiv4" style="display: block">
            <hr class="collapseDivHr" />
            <div class="px-3 pt-3 pb-2">
                <div class="d-flex justify-content-center mt-2 tab-menu">
                    <div class="nav SwtchBtnRprtBldr nav-pills" role="tablist"
                        aria-orientation="vertical">
                        <div class="active" id="v-pills-comulativeIncome1-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-comulativeIncome1"
                            type="button" role="tab"
                            aria-controls="v-pills-comulativeIncome1"
                            aria-selected="true">
                            Guaranteed
                        </div>
                        <div id="v-pills-comulativeIncome2-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-comulativeIncome2"
                            type="button" role="tab"
                            aria-controls="v-pills-comulativeIncome2"
                            aria-selected="false">
                            Potential
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade active show"
                        id="v-pills-comulativeIncome1" role="tabpanel"
                        aria-labelledby="v-pills-comulativeIncome1-tab">
                        <div class="container-fluid cards-area">
                            <div
                                class="common-card-div3 d-flex justify-content-between flex-gap-12"
                                id="card-amount-3">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="common-card-div3 d-flex justify-content-between flex-gap-12 d-none"
                                id="card-longevity-3">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="common-card-div3 d-flex justify-content-between flex-gap-12 d-none"
                                id="card-return-3">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="CompMainProgrssBarDiv graph-area">
                                <!-- Main tab 1 content start -->
                                <div class="w-100 p-3">
                                    <div class="position-relative">
                                        <div
                                            class="collapseDivmdlHd text-center">
                                            Target Analysis
                                        </div>
                                    </div>
                                    <br />

                                    <div
                                        class="d-flex justify-content-center mt-2">
                                        <div class="nav mltplSwtchDiv nav-pills"
                                            role="tablist"
                                            aria-orientation="vertical"
                                            id="card-area-3">
                                            <div btnAttr="amount-3"
                                                class="active"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-amount3"
                                                type="button" role="tab"
                                                aria-controls="v-pills-amount3">
                                                Amount
                                            </div>
                                            <div btnAttr="longevity-3"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-longevity3"
                                                role="tab"
                                                aria-controls="v-pills-longevity3">
                                                Longevity
                                            </div>
                                            <div btnAttr="return-3"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-return3"
                                                role="tab"
                                                aria-controls="v-pills-return3">
                                                Return
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="tab-pane fade active show"
                                            id="v-pills-amount3"
                                            role="tabpanel">
                                            <!-- Amount tab start -->
                                            <div
                                                class="d-flex justify-content-center mt-2 w-25 mx-auto">
                                                <div
                                                    class="nav SwtchBtnRprtBldr nav-pills"
                                                    role="tablist"
                                                    aria-orientation="vertical">
                                                    <div class="active"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphIndividual1"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphIndividual1"
                                                        aria-selected="true">
                                                        Individual
                                                    </div>
                                                    <div class="pe-none"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphShowall1"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphShowall1"
                                                        aria-selected="false">
                                                        Show All
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div
                                                    class="tab-pane fade active show"
                                                    id="v-pills-graphIndividual1"
                                                    role="tabpanel">
                                                    <!-- Amount individual tab start -->
                                                    <div
                                                        class="income-rider-graph-div">
                                                        <canvas
                                                            id="myChart"></canvas>
                                                    </div>
                                                    <button
                                                        class="income-rider-show-next-btn */disable/*"
                                                        id="showMoreBtn">
                                                        Show Next
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="10"
                                                            viewBox="0 0 17 10"
                                                            fill="none">
                                                            <rect x="7.78125"
                                                                y="10"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-135 7.78125 10)"
                                                                fill="white" />
                                                            <rect x="6.03906"
                                                                y="7.78125"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-45 6.03906 7.78125)"
                                                                fill="white" />
                                                        </svg>
                                                    </button>
                                                    <!-- Amount individual tab end -->
                                                </div>
                                                <div class="tab-pane fade"
                                                    id="v-pills-graphShowall1"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab">
                                                    <!-- Amount showall tab start -->

                                                    <!-- Amount showall tab end -->
                                                </div>
                                            </div>
                                            <!-- Amount tab end -->
                                        </div>
                                        <div class="tab-pane fade"
                                            id="v-pills-longevity3"
                                            role="tabpanel">
                                            <!-- Longevity tab start -->
                                            <div
                                                class="d-flex justify-content-center mt-2 w-25 mx-auto">
                                                <div
                                                    class="nav SwtchBtnRprtBldr nav-pills"
                                                    role="tablist"
                                                    aria-orientation="vertical">
                                                    <div class="active"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphIndividual2"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphIndividual2"
                                                        aria-selected="true">
                                                        Individual
                                                    </div>
                                                    <div class="pe-none"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphShowall2"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphShowall2"
                                                        aria-selected="false">
                                                        Show All
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div
                                                    class="tab-pane fade active show"
                                                    id="v-pills-graphIndividual2"
                                                    role="tabpanel">
                                                    <!-- Longevity individual tab start -->
                                                    <div
                                                        class="income-rider-graph-div">
                                                        <canvas
                                                            id="myChart2"></canvas>
                                                    </div>
                                                    <button
                                                        class="income-rider-show-next-btn */disable/*"
                                                        id="showMoreBtn2">
                                                        Show Next
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="10"
                                                            viewBox="0 0 17 10"
                                                            fill="none">
                                                            <rect x="7.78125"
                                                                y="10"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-135 7.78125 10)"
                                                                fill="white" />
                                                            <rect x="6.03906"
                                                                y="7.78125"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-45 6.03906 7.78125)"
                                                                fill="white" />
                                                        </svg>
                                                    </button>
                                                    <!-- Longevity individual tab end -->
                                                </div>
                                                <div class="tab-pane fade"
                                                    id="v-pills-graphShowall2"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab">
                                                    <!-- Longevity showall tab start -->
                                                    2
                                                    <!-- Longevity showall tab end -->
                                                </div>
                                            </div>
                                            <!-- Longevity tab end -->
                                        </div>
                                        <div class="tab-pane fade"
                                            id="v-pills-return3"
                                            role="tabpanel">
                                            <!-- Return tab start -->
                                            <div class="row mt-5">
                                                <div class="col-md-6">
                                                    <div
                                                        class="target-analysis-bar-main-div">
                                                        <div
                                                            class="d-flex flex-column">
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
                                                            <p
                                                                class="bar-long-para">
                                                                The required
                                                                constant rate of
                                                                return for the
                                                                [COMPARATIVE
                                                                VEHICLE ACCOUNT
                                                                NAME] to match
                                                                the [INCOME
                                                                RIDER ACCOUNT
                                                                NAME]’s income
                                                                production is
                                                                <span>[REQUIRED
                                                                    RATE OF
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
                                                        <svg
                                                            class="mx-auto d-block"
                                                            role="progressbar"
                                                            width="240"
                                                            height="240"
                                                            viewBox="0 0 100 100"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            aria-valuenow="68">
                                                            <circle cx="50%"
                                                                cy="50%" r="42"
                                                                shape-rendering="geometricPrecision"
                                                                fill="none"
                                                                stroke="#609BD2"
                                                                stroke-width="10"></circle>
                                                            <circle cx="50%"
                                                                cy="50%" r="42"
                                                                shape-rendering="geometricPrecision"
                                                                class="pie-circle-2"
                                                                fill="none"
                                                                stroke-width="10"
                                                                stroke-dashoffset="84.47999999999999"
                                                                stroke-dasharray="264"
                                                                stroke-linecap="round"
                                                                style="
                                      transform: rotate(-90deg);
                                      transform-origin: 50% 50%;
                                    " stroke="#1660A4" data-angel="68"></circle>
                                                            <text
                                                                class="pie-text-2"
                                                                x="50%" y="50%"
                                                                fill="#000"
                                                                text-anchor="middle"
                                                                dy="0.35em"
                                                                font-size="1.6rem"
                                                                font-weight="400">
                                                                <tspan
                                                                    class="pie-percent-2">
                                                                    68
                                                                </tspan>
                                                                <tspan
                                                                    class="pie-unit-2">
                                                                    %
                                                                </tspan>
                                                            </text>
                                                        </svg>
                                                        <p
                                                            class="pie-long-para">
                                                            The probability that
                                                            the
                                                            {{inputs.comparative_vehicle_account_name}}
                                                            will match the
                                                            {{inputs.income_rider_account_name}}’s
                                                            income production
                                                            relying upon market
                                                            returns is
                                                            <span>[SUCCESS
                                                                PROBABILITY]</span>.
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

                    <!-- ----------- -->
                    <div class="tab-pane fade" id="v-pills-comulativeIncome2"
                        role="tabpanel"
                        aria-labelledby="v-pills-comulativeIncome2-tab">
                        <div class="container-fluid cards-area">
                            <div
                                class="common-card-div4 d-flex justify-content-between flex-gap-12"
                                id="card-amount-4">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="common-card-div4 d-flex justify-content-between flex-gap-12 d-none"
                                id="card-longevity-4">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100 disable">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="common-card-div4 d-flex justify-content-between flex-gap-12 d-none"
                                id="card-return-4">
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard1 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress1 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    FIA - Income Rider
                                                    <span hidden>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
                                                    <span>$1,512,980</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between">
                                                    <span>Longevity</span>
                                                    <span>35 Years</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara1 d-flex justify-content-between m-0">
                                                    <span>Shortfall</span>
                                                    <span>None</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard2 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress2 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Flat Rate of
                                                        Return</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara2 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">7
                                                        Years - $302,596</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 flex-1">
                                    <div
                                        class="incomeRiderCard graph-card incomeCard3 w-100">
                                        <div class="d-flex gap-2 h-100">
                                            <div
                                                class="CardProgressBar lightProgress3 boxProgressCommon1"></div>
                                            <div class="w-100">
                                                <p class="allCardHeadPara mb-2">
                                                    Schwab Brokerage
                                                    <span>Historical
                                                        Returns</span>
                                                </p>
                                                <p
                                                    class="cardRadioSwtchpara3 d-flex justify-content-between">
                                                    <span>Total
                                                        Distributions</span>
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
                                                    <span class="shortFall">11
                                                        Years - $475,508</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="CompMainProgrssBarDiv graph-area">
                                <!-- Main tab 1 content start -->
                                <div class="w-100 p-3">
                                    <div class="position-relative">
                                        <div
                                            class="collapseDivmdlHd text-center">
                                            Target Analysis
                                        </div>
                                    </div>
                                    <br />

                                    <div
                                        class="d-flex justify-content-center mt-2">
                                        <div class="nav mltplSwtchDiv nav-pills"
                                            role="tablist"
                                            aria-orientation="vertical"
                                            id="card-area-4">
                                            <div btnAttr="amount-4"
                                                class="active"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-amount4"
                                                type="button" role="tab"
                                                aria-controls="v-pills-amount4">
                                                Amount
                                            </div>
                                            <div btnAttr="longevity-4"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-longevity4"
                                                role="tab"
                                                aria-controls="v-pills-longevity4">
                                                Longevity
                                            </div>
                                            <div btnAttr="return-4"
                                                data-bs-toggle="pill"
                                                data-bs-target="#v-pills-return4"
                                                role="tab"
                                                aria-controls="v-pills-return4">
                                                Return
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-content">
                                        <div class="tab-pane fade active show"
                                            id="v-pills-amount4"
                                            role="tabpanel">
                                            <!-- Amount tab start -->
                                            <div
                                                class="d-flex justify-content-center mt-2 w-25 mx-auto">
                                                <div
                                                    class="nav SwtchBtnRprtBldr nav-pills"
                                                    role="tablist"
                                                    aria-orientation="vertical">
                                                    <div class="active"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphIndividual1"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphIndividual1"
                                                        aria-selected="true">
                                                        Individual
                                                    </div>
                                                    <div class="pe-none"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphShowall1"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphShowall1"
                                                        aria-selected="false">
                                                        Show All
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div
                                                    class="tab-pane fade active show"
                                                    id="v-pills-graphIndividual1"
                                                    role="tabpanel">
                                                    <!-- Amount individual tab start -->
                                                    <div
                                                        class="income-rider-graph-div">
                                                        <canvas
                                                            id="myChart3"></canvas>
                                                    </div>
                                                    <button
                                                        class="income-rider-show-next-btn */disable/*"
                                                        id="showMoreBtn3">
                                                        Show Next
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="10"
                                                            viewBox="0 0 17 10"
                                                            fill="none">
                                                            <rect x="7.78125"
                                                                y="10"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-135 7.78125 10)"
                                                                fill="white" />
                                                            <rect x="6.03906"
                                                                y="7.78125"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-45 6.03906 7.78125)"
                                                                fill="white" />
                                                        </svg>
                                                    </button>
                                                    <!-- Amount individual tab end -->
                                                </div>
                                                <div class="tab-pane fade"
                                                    id="v-pills-graphShowall1"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab">
                                                    <!-- Amount showall tab start -->

                                                    <!-- Amount showall tab end -->
                                                </div>
                                            </div>
                                            <!-- Amount tab end -->
                                        </div>
                                        <div class="tab-pane fade"
                                            id="v-pills-longevity4"
                                            role="tabpanel">
                                            <!-- Longevity tab start -->
                                            <div
                                                class="d-flex justify-content-center mt-2 w-25 mx-auto">
                                                <div
                                                    class="nav SwtchBtnRprtBldr nav-pills"
                                                    role="tablist"
                                                    aria-orientation="vertical">
                                                    <div class="active"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphIndividual2"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphIndividual2"
                                                        aria-selected="true">
                                                        Individual
                                                    </div>
                                                    <div class="pe-none"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#v-pills-graphShowall2"
                                                        type="button" role="tab"
                                                        aria-controls="v-pills-graphShowall2"
                                                        aria-selected="false">
                                                        Show All
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content">
                                                <div
                                                    class="tab-pane fade active show"
                                                    id="v-pills-graphIndividual2"
                                                    role="tabpanel">
                                                    <!-- Longevity individual tab start -->
                                                    <div
                                                        class="income-rider-graph-div">
                                                        <canvas
                                                            id="myChart4"></canvas>
                                                    </div>
                                                    <button
                                                        class="income-rider-show-next-btn */disable/*"
                                                        id="showMoreBtn4">
                                                        Show Next
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="17"
                                                            height="10"
                                                            viewBox="0 0 17 10"
                                                            fill="none">
                                                            <rect x="7.78125"
                                                                y="10"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-135 7.78125 10)"
                                                                fill="white" />
                                                            <rect x="6.03906"
                                                                y="7.78125"
                                                                width="10.9992"
                                                                height="3.14262"
                                                                rx="1.57131"
                                                                transform="rotate(-45 6.03906 7.78125)"
                                                                fill="white" />
                                                        </svg>
                                                    </button>
                                                    <!-- Longevity individual tab end -->
                                                </div>
                                                <div class="tab-pane fade"
                                                    id="v-pills-graphShowall2"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-home-tab">
                                                    <!-- Longevity showall tab start -->
                                                    2
                                                    <!-- Longevity showall tab end -->
                                                </div>
                                            </div>
                                            <!-- Longevity tab end -->
                                        </div>
                                        <div class="tab-pane fade"
                                            id="v-pills-return4"
                                            role="tabpanel">
                                            <!-- Return tab start -->
                                            <div class="row mt-5">
                                                <div class="col-md-6">
                                                    <div
                                                        class="target-analysis-bar-main-div">
                                                        <div
                                                            class="d-flex flex-column">
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
                                                            <p
                                                                class="bar-long-para">
                                                                The required
                                                                constant rate of
                                                                return for the
                                                                [COMPARATIVE
                                                                VEHICLE ACCOUNT
                                                                NAME] to match
                                                                the [INCOME
                                                                RIDER ACCOUNT
                                                                NAME]’s income
                                                                production is
                                                                <span>[REQUIRED
                                                                    RATE OF
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
                                                        <svg
                                                            class="mx-auto d-block"
                                                            role="progressbar"
                                                            width="240"
                                                            height="240"
                                                            viewBox="0 0 100 100"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                            aria-valuenow="68">
                                                            <circle cx="50%"
                                                                cy="50%" r="42"
                                                                shape-rendering="geometricPrecision"
                                                                fill="none"
                                                                stroke="#609BD2"
                                                                stroke-width="10"></circle>
                                                            <circle cx="50%"
                                                                cy="50%" r="42"
                                                                shape-rendering="geometricPrecision"
                                                                class="pie-circle-2"
                                                                fill="none"
                                                                stroke-width="10"
                                                                stroke-dashoffset="84.47999999999999"
                                                                stroke-dasharray="264"
                                                                stroke-linecap="round"
                                                                style="
                                      transform: rotate(-90deg);
                                      transform-origin: 50% 50%;
                                    " stroke="#1660A4" data-angel="68"></circle>
                                                            <text
                                                                class="pie-text-2"
                                                                x="50%" y="50%"
                                                                fill="#000"
                                                                text-anchor="middle"
                                                                dy="0.35em"
                                                                font-size="1.6rem"
                                                                font-weight="400">
                                                                <tspan
                                                                    class="pie-percent-2">
                                                                    68
                                                                </tspan>
                                                                <tspan
                                                                    class="pie-unit-2">
                                                                    %
                                                                </tspan>
                                                            </text>
                                                        </svg>
                                                        <p
                                                            class="pie-long-para">
                                                            The probability that
                                                            the
                                                            {{inputs.comparative_vehicle_account_name}}
                                                            will match the
                                                            [INCOME RIDER
                                                            ACCOUNT NAME]’s
                                                            income production
                                                            relying upon market
                                                            returns is
                                                            <span>[SUCCESS
                                                                PROBABILITY]</span>.
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
                </div>
            </div>
            <annual-income-disclosure-component />
        </div>
    </div>
</template>
<script>
  import { mapState } from "vuex";
  import AnnualIncomeDisclosureComponent from './AnnualIncomeDisclosureComponent.vue'
export default {
    components: {AnnualIncomeDisclosureComponent},
  computed: {
    ...mapState({
      result: (state) => state.incomeRider.data.result,
      inputs: (state) => state.incomeRider.data.result.inputs || [],
    }),
  }, 
}
</script>
<style lang>
    
</style>