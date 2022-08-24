<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link to="/create-new-scenario" class="nav-link p-0"
            >Scenario Details</router-link
          >
        </li>
        <li class="done">
          <router-link to="/illustration-data" class="nav-link p-0"
            >Illustration Data</router-link
          >
        </li>
        <li class="done">
          <router-link to="/comparative-vehicles" class="nav-link p-0"
            >Comparative Vehicles</router-link
          >
        </li>
        <li class="active">
          <router-link to="/historical-simulations" class="nav-link p-0"
            >Historical Simulations</router-link
          >
        </li>
      </ul>
      <router-link to="/" class="btn mt-1 ms-1">
        <img
          src="@/assets/images/icons/cross.svg"
          alt="cross"
          class="ReviewCrossBtn"
        />
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2">
                  New Scenario
                </h2>
              </div>
            </div>
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="col-md-10 offset-md-1">
                  <div class="d-flex align-items-center">
                    <label
                      for="scheduleTemplateCheckbox"
                      class="historical-paraCheckBox"
                      >Historical Simulations</label
                    >
                    <div class="form-check form-switch custom-switch ms-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="scheduleTemplateCheckbox"
                        checked
                      />
                    </div>
                  </div>
                  <div class="after-yes-middle-div my-2 p-4">
                    <p class="numberIndexStrtegiesPara">
                      Number of Index Strategies
                    </p>
                    <div class="d-flex justify-content-center">
                      <div class="multiRadioBtnMainDiv">
                        <label
                          for="1"
                          class="eachRadioBtnBgDiv active"
                          id="historicalTopCheckBoxDiv1"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="1"
                              checked
                              @click="radioBtnOnOff1()"
                            />
                          </div>
                          <p class="historicalRadioNumberPara">1</p>
                        </label>
                        <!--  -->
                        <label
                          for="2"
                          class="eachRadioBtnBgDiv"
                          id="historicalTopCheckBoxDiv2"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="2"
                              @click="radioBtnOnOff2()"
                            />
                          </div>
                          <p class="historicalRadioNumberPara">2</p>
                        </label>
                        <!--  -->
                        <label
                          class="eachRadioBtnBgDiv"
                          for="3"
                          id="historicalTopCheckBoxDiv3"
                        >
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              radioClassDarkMode
                              ms-2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="3"
                              @click="radioBtnOnOff3()"
                            />
                          </div>
                          <p class="historicalRadioNumberPara">3</p>
                        </label>
                      </div>
                    </div>
                    <!-- tab 1 start -->
                    <div class="commonAllDivs" id="commonAllDivs1">
                      <div class="historicalYesDivCommon mt-4">
                        <p class="indexStrategyPara">Index Strategy #1</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <div class="form-group less pt-3">
                                  <div
                                    class="
                                      d-flex
                                      justify-content-between
                                      align-items-center
                                      mt-4
                                      mb-1
                                    "
                                  >
                                    <label
                                      for="existingComparativeVehiclePortfolio"
                                      class="fs-14 bold-fw"
                                      >Use Existing Index Strategy</label
                                    >
                                    <label class="labelOptional"
                                      >OPTIONAL</label
                                    >
                                  </div>
                                  <div class="p-relative">
                                    <input
                                      type="text"
                                      id="existingComparativeVehiclePortfolio"
                                      placeholder="Select or Start Typing"
                                      class="form-control pe-5 autocomplete"
                                    />
                                    <span class="chevron-span">
                                      <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#analysis-parameters3"
                          aria-expanded="false"
                          aria-controls="analysis-parameters3"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Analysis Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="analysis-parameters3"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <form action="javascript:void(0)">
                            <div class="formParabrdrLavelDiv mb-1">
                              <p>index</p>
                              <p></p>
                            </div>

                            <div class="form-group less w-75">
                              <div class="p-relative">
                                <input
                                  type="text"
                                  id="historyIndex"
                                  placeholder="S&P 500"
                                  class="form-control pe-5 autocomplete"
                                />
                                <span class="chevron-span">
                                  <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>

                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p>Rolling Time Period (Years)</p>
                              <p></p>
                            </div>
                            <div
                              class="
                                ChooseTimePeriodInputs
                                d-flex
                                justify-content-between
                                align-items-center
                              "
                              id="rollingTimePeriod1"
                            >
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">15</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">20</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">25</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">30</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">35</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">40</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">45</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">50</span>
                              </label>
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input
                                  id="customAmount"
                                  type="text"
                                  class="bonus-input custom-index-percent"
                                />
                              </div>
                            </div>

                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Analyze
                                <img
                                  src="@/assets/images/icons/info-icon.svg"
                                  alt="info"
                                  class="ms-1 info-icon-img"
                                />
                                <img
                                  src="@/assets/images/icons/dark-i-icon.svg"
                                  alt="info"
                                  class="ms-1 dark-info-icon-img"
                                />
                                <span class="info-message-analyze">
                                  The analysis will return the most recent,
                                  worst, median, and best historical results
                                  based on the Index, Strategy, or
                                  Distributions.
                                </span>
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy"
                                    id="index"
                                    checked
                                  />
                                  <label for="index">Index </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy"
                                    id="strategy"
                                  />
                                  <label for="strategy">Strategy </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy"
                                    id="distributions"
                                  />
                                  <label for="distributions"
                                    >Distributions
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Credit Base Method
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod1"
                                    id="monthlyAverageValue1"
                                    checked
                                  />
                                  <label for="monthlyAverageValue1"
                                    >Monthly Average Value
                                  </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod1"
                                    id="beginningValue1"
                                  />
                                  <label for="beginningValue1"
                                    >Beginning Value</label
                                  >
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod1"
                                    id="yearValue1"
                                  />
                                  <label for="yearValue1"
                                    >End of Year Value</label
                                  >
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <!--  -->
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#growth-parameters1"
                          aria-expanded="false"
                          aria-controls="growth-parameters1"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Growth Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="growth-parameters1"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#growth-parameters1"
                        >
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Cap Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider1"
                              id="rangeSlider1"
                            >
                              <div id="tooltip1"></div>
                              <input
                                id="range1"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue1"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Participation Rate
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-participationRate">
                                To enter a Participation Rate above 200%, use
                                the Custom Amount field.
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="
                                range-slider range-slider2
                                position-relative
                              "
                              id="rangeSlider2"
                            >
                              <p class="rangeSliderMiddleLine1"></p>
                              <p class="rangeSliderMiddleLine2"></p>
                              <div id="tooltip2"></div>
                              <input
                                id="range2"
                                type="range"
                                value="60"
                                min="0"
                                max="200"
                              />
                              <p class="rangeSliderMiddleNum">100%</p>
                              <p class="rangeSliderMiddleNumEnd">200%</p>
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue2"
                                  min="0"
                                  max="200"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Margin/Spread</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider3"
                              id="rangeSlider3"
                            >
                              <div id="tooltip3"></div>
                              <input
                                id="range3"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue3"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Floor</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider4"
                              id="rangeSlider4"
                            >
                              <div id="tooltip4"></div>
                              <input
                                id="range4"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue4"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Segment Duration (Years)
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-segment">
                                Does the strategy use a 1 or 2 year crediting
                                period?
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="
                              ChooseTimePeriodInputs
                              d-flex
                              align-items-center
                            "
                          >
                            <label class="">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">1</span>
                            </label>
                            <label class="ms-2">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">2</span>
                            </label>
                          </div>
                        </div>
                        <!--  -->
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#enhancements"
                          aria-expanded="false"
                          aria-controls="enhancements"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Enhancements<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div
                          id="enhancements"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#enhancements"
                        >
                          <!-- first collapse div start -->
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input enhanceInputCheckBox"
                                type="checkbox"
                                role="switch"
                                id="enhancements1"
                                @change="enhachments1BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements1"
                              class="buttonSaveRadioPara"
                              >Performance Multiplier</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent pb-5"
                            id="enhancements1Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-fixedValue-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-fixedValue"
                                  role="tab"
                                  aria-controls="nav-fixedValue"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-schedule-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-schedule"
                                  role="tab"
                                  aria-controls="nav-schedule"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-fixedValue"
                                role="tabpanel"
                                aria-labelledby="nav-fixedValue-tab"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="multiplierInputDiv form-group mt-3"
                                  >
                                    <label for="multiplier">Multiplier</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="multiplier"
                                    />
                                  </div>

                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div
                                        class="
                                          customAmountInputDiv
                                          customAmountNoPercent
                                          ms-3
                                        "
                                      >
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-schedule"
                                role="tabpanel"
                                aria-labelledby="nav-schedule-tab"
                              >
                                <div
                                  class="d-flex justify-content-center w-100"
                                >
                                  <div class="schduleTableDiv mt-5">
                                    <table class="table">
                                      <thead>
                                        <th>Year</th>
                                        <th>Multiplier Rate</th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td data-label="Year">1</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">2</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">3</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">4</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">5</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">6</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">7</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">8</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">9</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">10</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
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
                          <!-- first collapse div end -->

                          <!-- second collapse div start -->
                          <div
                            class="d-flex align-items-center mt-2"
                            id="addBorderAbove"
                          >
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="enhancements2"
                                @change="enhachments2BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements2"
                              class="buttonSaveRadioPara"
                              >Flat Credit/Bonus</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent"
                            id="enhancements2Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-flatfixedValue-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatfixedValue"
                                  role="tab"
                                  aria-controls="nav-flatfixedValue"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-flatSchedule-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatSchedule"
                                  role="tab"
                                  aria-controls="nav-flatSchedule"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-flatfixedValue"
                                role="tabpanel"
                                aria-labelledby="nav-flatfixedValue-tab"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="creditBonusInputDiv form-group mt-3"
                                    id="creditBonusinputDiv"
                                  >
                                    <label for="creditBonusinput"
                                      >Credit/Bonus</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control bonus-input"
                                      id="creditBonusinput"
                                    />
                                  </div>
                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div
                                        class="
                                          customAmountInputDiv
                                          customAmountNoPercent
                                          ms-3
                                        "
                                      >
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-flatSchedule"
                                role="tabpanel"
                                aria-labelledby="nav-flatSchedule-tab"
                              >
                                <div
                                  class="
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                    mt-3
                                  "
                                >
                                  <div
                                    class="
                                      enhancementFixedSheduleBtn
                                      nav nav-tabs
                                    "
                                    id="nav-tab"
                                    role="tablist"
                                  >
                                    <div
                                      class="active"
                                      id="nav-rate-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-rate"
                                      role="tab"
                                      aria-controls="nav-rate"
                                      aria-selected="true"
                                    >
                                      Rate
                                    </div>
                                    <div
                                      class=""
                                      id="nav-Amount-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-amount"
                                      role="tab"
                                      aria-controls="nav-amount"
                                      aria-selected="false"
                                    >
                                      Amount ($)
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-content" id="nav-tabContent">
                                  <div
                                    class="tab-pane fade show active"
                                    id="nav-rate"
                                    role="tabpanel"
                                    aria-labelledby="nav-rate-tab"
                                  >
                                    <!--  -->
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Multiplier Rate</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <!--  -->
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="nav-amount"
                                    role="tabpanel"
                                    aria-labelledby="nav-amount-tab"
                                  >
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Amount</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
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
                          <!-- second collapse div end -->
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            accordion-button
                            collapsed
                            mt-3
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#fees-parameters1"
                          aria-expanded="false"
                          aria-controls="fees-parameters1"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Fees<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="fees-parameters1"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Premium Charge</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                  checked
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">7%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="premiumCharge1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">8%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="premiuscharge1"
                              />
                            </div>
                            <label
                              for="premiuscharge1"
                              class="buttonSaveRadioPara"
                              >Same in All Years</label
                            >
                          </div>
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Loan Interest Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="loanInterest1"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="loanIntrest1"
                              />
                            </div>
                            <label
                              for="loanIntrest1"
                              class="buttonSaveRadioPara"
                              >Same in All Years</label
                            >
                          </div>
                          <p class="loan-Intrest-para">Loan Interest Charged</p>
                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-center
                              mt-3
                            "
                          >
                            <div
                              class="enhancementFixedSheduleBtn nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <div
                                class="active"
                                id="nav-advance-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-advance"
                                role="tab"
                                aria-controls="nav-advance"
                                aria-selected="true"
                              >
                                In Advance
                              </div>
                              <div
                                class=""
                                id="nav-arrears-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-arrears"
                                role="tab"
                                aria-controls="nav-arrears"
                                aria-selected="false"
                              >
                                In Arrears
                              </div>
                            </div>
                          </div>
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="nav-advance"
                              role="tabpanel"
                              aria-labelledby="nav-advance-tab"
                            >
                              <div class="formParabrdrLavelDiv mt-5">
                                <p>Performance Multiplier Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">4%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">5%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">6%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">7%</span>
                                  </label>
                                  <label class="ms-1">
                                    <input
                                      type="radio"
                                      name="perfMultiplier1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">8%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="multiplierFee1"
                                  />
                                </div>
                                <label
                                  for="multiplierFee1"
                                  class="buttonSaveRadioPara"
                                  >Same in All Years</label
                                >
                              </div>
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>Flat Credit/Bonus Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="flatCredit1"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="flatCredit1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="flatCredit1"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flat-credit-fee-radio"
                                    @change="flatCreditRadio()"
                                    checked
                                  />
                                </div>
                                <label
                                  for="flat-credit-fee-radio"
                                  class="buttonSaveRadioPara"
                                  >Same in All Years</label
                                >
                              </div>
                              <!--  -->
                              <div class="d-flex justify-content-center w-100">
                                <div
                                  class="schduleTableDiv mt-5"
                                  id="flat-credit-fee-radio-table"
                                >
                                  <table class="table">
                                    <thead>
                                      <th>Year</th>
                                      <th>Rate</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td data-label="Year">1</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">2</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">3</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">4</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">5</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">6</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">7</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">8</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">9</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">10</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <!--  -->
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>
                                  High Cap Fee
                                  <span class="optionalCommonTxt"
                                    >&nbsp;&nbsp;OPTIONAL</span
                                  >
                                </p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="highCapFee"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">1%</span>
                                  </label>
                                  <label class="w-100 mx-2">
                                    <input
                                      type="radio"
                                      name="highCapFee"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear w-100">2%</span>
                                  </label>
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="highCapFee"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="nav-arrears"
                              role="tabpanel"
                              aria-labelledby="nav-arrears-tab"
                            >
                              ------
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="d-flex justify-content-center mt-4">
                          <div class="w-75">
                            <div class="d-flex align-items-center mb-2">
                              <div
                                class="
                                  form-check form-switch
                                  custom-switch
                                  ms-2
                                "
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="saveZIndexTemp"
                                  @change="saveZIndexTemp()"
                                />
                              </div>
                              <label
                                for="saveZIndexTemp"
                                class="buttonSaveRadioPara"
                                >Save this Index Strategy as Template</label
                              >
                            </div>
                            <div
                              class="saveZIndexTempContent"
                              id="saveZIndexTempContent"
                            >
                              <form action="javascript:void(0)">
                                <div class="form-group pt-2 less">
                                  <label
                                    for="templateName"
                                    class="fs-12 medium-fw"
                                    >Template Name</label
                                  >
                                  <input
                                    type="text"
                                    id="templateName"
                                    class="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- tab 1 end -->
                    <!-- tab 2 start -->
                    <div class="commonAllDivs" id="commonAllDivs2">
                      <p class="strategyWeightPara">Strategy Weight</p>
                      <div
                        class="
                          d-flex
                          align-items-center
                          flex-column
                          justify-content-center
                        "
                      >
                        <div class="strategyWeight mid d-flex">
                          <div
                            id="strategyMidWeight1"
                            class="mainResizeDiv position-relative"
                          >
                            #1
                            <div
                              class="resizing-right-div resizing-right-div-1"
                            >
                              <img
                                src="@/assets/images/icons/tinny-arrow-left.svg"
                                alt=""
                              />&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg"
                                alt="Chevron"
                              />
                            </div>
                          </div>
                          <!-- <div id="strategyMidWeight2" class="position-relative mainResizeDiv" id="resizeDiv">#2
                          </div> -->
                          <div
                            id="strategyMidWeight2"
                            class="position-relative mainResizeDiv"
                          >
                            #2
                          </div>

                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            id="midRange"
                            class="strategy-range-input"
                          />
                        </div>
                        <div
                          class="
                            mid-sw-inputs
                            d-flex
                            align-items-center
                            justify-content-between
                            w-100 w-max-427
                            mt-3
                          "
                        >
                          <div
                            id="swInputDivMid1"
                            class="sw-input-div d-flex justify-content-center"
                          >
                            <input
                              id="swInputMid1"
                              type="text"
                              class="form-control range-input"
                              value="50%"
                            />
                          </div>
                          <div
                            id="swInputDivMid2"
                            class="sw-input-div d-flex justify-content-center"
                          >
                            <input
                              id="swInputMid2"
                              type="text"
                              class="form-control range-input"
                              value="50%"
                            />
                          </div>
                        </div>
                      </div>
                      <p class="strategyErrorPara">
                        Sum of all weights must equal 100%.
                      </p>

                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #2</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <div
                                  class="
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                    mt-4
                                    mb-1
                                  "
                                >
                                  <label for="allocation"
                                    >Choose Existing Index Strategy
                                    Allocation</label
                                  >
                                  <label class="labelOptional">OPTIONAL</label>
                                </div>
                                <div class="p-relative form-group">
                                  <input
                                    type="text"
                                    id="existingComparativeVehiclePortfolioTab2"
                                    placeholder="Select or Start Typing"
                                    class="form-control pe-5 autocomplete"
                                  />
                                  <span class="chevron-span">
                                    <svg
                                      width="12"
                                      height="8"
                                      viewBox="0 0 12 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            accordion-button
                            active
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#analysis-parameters1"
                          aria-expanded="false"
                          aria-controls="analysis-parameters1"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Analysis Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="analysis-parameters1"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <form action="javascript:void(0)">
                            <div class="formParabrdrLavelDiv mb-1">
                              <p>index</p>
                              <p></p>
                            </div>
                            <div class="form-group less w-75">
                              <div class="p-relative">
                                <input
                                  type="text"
                                  id="historyIndex2"
                                  placeholder="S&P 500"
                                  class="form-control pe-5 autocomplete"
                                />
                                <span class="chevron-span">
                                  <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>

                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p>Rolling Time Period (Years)</p>
                              <p></p>
                            </div>
                            <div
                              class="
                                ChooseTimePeriodInputs
                                d-flex
                                justify-content-between
                                align-items-center
                              "
                              id="rollingTimePeriod1"
                            >
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">15</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">20</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">25</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">30</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">35</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">40</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">45</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">50</span>
                              </label>
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input
                                  type="text"
                                  class="bonus-input custom-index-percent"
                                />
                              </div>
                            </div>

                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Analyze
                                <img
                                  src="@/assets/images/icons/info-icon.svg"
                                  alt="info"
                                  class="ms-1 info-icon-img"
                                />
                                <img
                                  src="@/assets/images/icons/dark-i-icon.svg"
                                  alt="info"
                                  class="ms-1 dark-info-icon-img"
                                />
                                <span class="info-message-analyze">
                                  The analysis will return the most recent,
                                  worst, median, and best historical results
                                  based on the Index, Strategy, or
                                  Distributions.
                                </span>
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy2"
                                    id="index2"
                                    checked
                                  />
                                  <label for="index2">Index </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy2"
                                    id="strategy2"
                                  />
                                  <label for="strategy2">Strategy </label>
                                </div>

                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy2"
                                    id="distributions2"
                                  />
                                  <label for="distributions2"
                                    >Distributions
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Credit Base Method
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod2"
                                    id="monthlyAverageValue2"
                                    checked
                                  />
                                  <label for="monthlyAverageValue2"
                                    >Monthly Average Value
                                  </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod2"
                                    id="beginningValue2"
                                  />
                                  <label for="beginningValue2"
                                    >Beginning Value</label
                                  >
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod2"
                                    id="yearValue2"
                                  />
                                  <label for="yearValue2"
                                    >End of Year Value</label
                                  >
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <!--  -->
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#growth-parameters2"
                          aria-expanded="false"
                          aria-controls="growth-parameters2"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Growth Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="growth-parameters2"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#growth-parameters2"
                        >
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Cap Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider5"
                              id="rangeSlider5"
                            >
                              <div id="tooltip5"></div>
                              <input
                                id="range5"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue5"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Participation Rate
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-participationRate">
                                To enter a Participation Rate above 200%, use
                                the Custom Amount field.
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="
                                range-slider range-slider6
                                position-relative
                              "
                              id="rangeSlider6"
                            >
                              <p class="rangeSliderMiddleLine1"></p>
                              <p class="rangeSliderMiddleLine2"></p>
                              <div id="tooltip6"></div>
                              <input
                                id="range6"
                                type="range"
                                value="60"
                                min="0"
                                max="200"
                              />
                              <p class="rangeSliderMiddleNum">100%</p>
                              <p class="rangeSliderMiddleNumEnd">200%</p>
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue6"
                                  in="0"
                                  max="200"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Margin/Spread</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider7"
                              id="rangeSlider7"
                            >
                              <div id="tooltip7"></div>
                              <input
                                id="range7"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue7"
                                  in="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Floor</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider8"
                              id="rangeSlider8"
                            >
                              <div id="tooltip8"></div>
                              <input
                                id="range8"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customAmount">Custom Amount</label>
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue8"
                                  in="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Segment Duration (Years)
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-segment">
                                Does the strategy use a 1 or 2 year crediting
                                period?
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="
                              ChooseTimePeriodInputs
                              d-flex
                              align-items-center
                            "
                          >
                            <label class="">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">1</span>
                            </label>
                            <label class="ms-2">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">2</span>
                            </label>
                          </div>
                        </div>
                        <!--  -->

                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#enhancements-tab2"
                          aria-expanded="false"
                          aria-controls="enhancements-tab2"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Enhancements<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div
                          id="enhancements-tab2"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#enhancements-tab2"
                        >
                          <!-- first collapse div start -->
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="enhancements3"
                                @change="enhachments3BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements3"
                              class="buttonSaveRadioPara"
                              >Performance Multiplier</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent pb-5"
                            id="enhancements3Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-fixedValue-tab2"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-fixedValue2"
                                  role="tab"
                                  aria-controls="nav-fixedValue2"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-schedule-tab2"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-schedule2"
                                  role="tab"
                                  aria-controls="nav-schedule2"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-fixedValue2"
                                role="tabpanel"
                                aria-labelledby="nav-fixedValue-tab2"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="multiplierInputDiv form-group mt-3"
                                  >
                                    <label for="multiplier">Multiplier</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="multiplier"
                                    />
                                  </div>

                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div class="customAmountInputDiv ms-3">
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-schedule2"
                                role="tabpanel"
                                aria-labelledby="nav-schedule-tab2"
                              >
                                <div
                                  class="d-flex justify-content-center w-100"
                                >
                                  <div class="schduleTableDiv mt-5">
                                    <table class="table">
                                      <thead>
                                        <th>Year</th>
                                        <th>Multiplier Rate</th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td data-label="Year">1</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">2</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">3</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">4</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">5</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">6</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">7</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">8</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">9</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">10</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
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
                          <!-- first collapse div end -->

                          <!-- second collapse div start -->
                          <div
                            class="d-flex align-items-center mt-2"
                            id="addBorderAbove2"
                          >
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="enhancements4"
                                @change="enhachments4BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements4"
                              class="buttonSaveRadioPara"
                              >Flat Credit/Bonus</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent"
                            id="enhancements4Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-flatfixedValue-tab2"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatfixedValue2"
                                  role="tab"
                                  aria-controls="nav-flatfixedValue2"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-flatSchedule-tab2"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatSchedule2"
                                  role="tab"
                                  aria-controls="nav-flatSchedule2"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-flatfixedValue2"
                                role="tabpanel"
                                aria-labelledby="nav-flatfixedValue-tab2"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="creditBonusInputDiv form-group mt-3"
                                    id="creditBonusinputDiv2"
                                  >
                                    <label for="creditBonusinput2"
                                      >Credit/Bonus</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control bonus-input"
                                      id="creditBonusinput2"
                                    />
                                  </div>
                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div class="customAmountInputDiv ms-3">
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-flatSchedule2"
                                role="tabpanel"
                                aria-labelledby="nav-flatSchedule-tab2"
                              >
                                <div
                                  class="
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                    mt-3
                                  "
                                >
                                  <div
                                    class="
                                      enhancementFixedSheduleBtn
                                      nav nav-tabs
                                    "
                                    id="nav-tab"
                                    role="tablist"
                                  >
                                    <div
                                      class="active"
                                      id="nav-rate-tab2"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-rate2"
                                      role="tab"
                                      aria-controls="nav-rate"
                                      aria-selected="true"
                                    >
                                      Rate (%)
                                    </div>
                                    <div
                                      class=""
                                      id="nav-Amount-tab2"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-amount2"
                                      role="tab"
                                      aria-controls="nav-amount"
                                      aria-selected="false"
                                    >
                                      Amount ($)
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-content" id="nav-tabContent2">
                                  <div
                                    class="tab-pane fade show active"
                                    id="nav-rate2"
                                    role="tabpanel"
                                    aria-labelledby="nav-rate-tab"
                                  >
                                    <!--  -->
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Multiplier Rate</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <!--  -->
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="nav-amount2"
                                    role="tabpanel"
                                    aria-labelledby="nav-amount-tab2"
                                  >
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Amount</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
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
                          <!-- second collapse div end -->
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            accordion-button
                            disabled
                            collapsed
                            mt-3
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#fees-parameters2"
                          aria-expanded="false"
                          aria-controls="fees-parameters2"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Fees<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="fees-parameters2"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Premium Charge</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                  checked
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">7%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">8%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                            <p class="buttonSaveRadioPara">Same in All Years</p>
                          </div>
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Loan Interest Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                  checked
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                            <p class="buttonSaveRadioPara">Same in All Years</p>
                          </div>
                          <p class="loan-Intrest-para">Loan Interest Charged</p>
                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-center
                              mt-3
                            "
                          >
                            <div
                              class="enhancementFixedSheduleBtn nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <div
                                class="active"
                                id="nav-advance-tab2"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-advance2"
                                role="tab"
                                aria-controls="nav-advance2"
                                aria-selected="true"
                              >
                                In Advance
                              </div>
                              <div
                                class=""
                                id="nav-arrears-tab2"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-arrears2"
                                role="tab"
                                aria-controls="nav-arrears2"
                                aria-selected="false"
                              >
                                In Arrears
                              </div>
                            </div>
                          </div>
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="nav-advance2"
                              role="tabpanel"
                              aria-labelledby="nav-advance-tab2"
                            >
                              <div class="formParabrdrLavelDiv mt-5">
                                <p>Performance Multiplier Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">4%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">5%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">6%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">7%</span>
                                  </label>
                                  <label class="ms-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">8%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                                <p class="buttonSaveRadioPara">
                                  Same in All Years
                                </p>
                              </div>
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>Flat Credit/Bonus Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flat-credit-fee-radio2"
                                    @change="flatCreditRadio2()"
                                    checked
                                  />
                                </div>
                                <p class="buttonSaveRadioPara">
                                  Same in All Years
                                </p>
                              </div>
                              <!--  -->
                              <div class="d-flex justify-content-center w-100">
                                <div
                                  class="schduleTableDiv mt-5"
                                  id="flat-credit-fee-radio-table2"
                                >
                                  <table class="table">
                                    <thead>
                                      <th>Year</th>
                                      <th>Rate</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td data-label="Year">1</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">2</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">3</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">4</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">5</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">6</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">7</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">8</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">9</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">10</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">%</label>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <!--  -->
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>
                                  High Cap Fee
                                  <span class="optionalCommonTxt"
                                    >&nbsp;&nbsp;OPTIONAL</span
                                  >
                                </p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">1%</span>
                                  </label>
                                  <label class="w-100 mx-2">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear w-100">2%</span>
                                  </label>
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="nav-arrears2"
                              role="tabpanel"
                              aria-labelledby="nav-arrears-tab2"
                            >
                              ------
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="d-flex justify-content-center mt-4">
                          <div class="w-75">
                            <div class="d-flex align-items-center mb-2">
                              <div
                                class="
                                  form-check form-switch
                                  custom-switch
                                  ms-2
                                "
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="saveZIndexTemp2"
                                  @change="saveZIndexTemp2()"
                                />
                              </div>
                              <label
                                for="saveZIndexTemp2"
                                class="buttonSaveRadioPara"
                                >Save this Index Strategy as Template</label
                              >
                            </div>
                            <div
                              class="saveZIndexTempContent form-group"
                              id="saveZIndexTempContent2"
                            >
                              <form action="javascript:void(0)">
                                <label for="templateName">Template Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="templateName"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="saveAllocation"
                                @change="allocation()"
                              />
                            </div>
                            <label
                              for="saveAllocation"
                              class="buttonSaveRadioPara"
                              >Save as Index Strategy Allocation</label
                            >
                          </div>
                          <div
                            class="saveZIndexTempContent form-group"
                            id="saveAllocationContent"
                          >
                            <form action="javascript:void(0)">
                              <label for="templateName">Allocation Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="templateName"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- tab 2 end -->
                    <!-- tab 3 start -->
                    <div class="commonAllDivs" id="commonAllDivs3">
                      <p class="strategyWeightPara">Strategy Weight</p>
                      <div
                        class="
                          d-flex
                          align-items-center
                          flex-column
                          justify-content-center
                        "
                      >
                        <div class="strategyWeight d-flex">
                          <div
                            id="strategyWeight1"
                            class="mainResizeDiv position-relative"
                          >
                            #1
                          </div>
                          <!-- Duplicate Id changed  -->
                          <div
                            id="strategyWeight2"
                            class="position-relative mainResizeDiv"
                          >
                            #2
                            <div
                              class="resizing-right-div resizing-right-div-1"
                            >
                              <img
                                src="@/assets/images/icons/tinny-arrow-left.svg"
                                alt=""
                              />&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg"
                                alt="Chevron"
                              />
                            </div>
                            <div class="resizing-left-div resizing-right-div-2">
                              <img
                                src="@/assets/images/icons/tinny-arrow-left.svg"
                                alt=""
                              />&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg"
                                alt="Chevron"
                              />
                            </div>
                            <!-- <p class="mainResizeparaPer2">33.33%</p> -->
                          </div>
                          <div
                            id="strategyWeight3"
                            class="mainResizeDiv position-relative"
                          >
                            #3
                          </div>
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            id="exampleRange1"
                            class="strategy-range-input strategy-range-input-1"
                          />
                          <input
                            type="range"
                            min="1"
                            max="100"
                            value="50"
                            id="exampleRange2"
                            class="strategy-range-input strategy-range-input-2"
                          />
                        </div>
                        <div
                          class="
                            d-flex
                            align-items-center
                            justify-content-between
                            w-100 w-max-427
                            mt-3
                          "
                        >
                          <div
                            id="swInputDiv1"
                            class="sw-input-div d-flex justify-content-center"
                          >
                            <input
                              id="swInput1"
                              type="text"
                              class="form-control range-input"
                              value="33.33%"
                            />
                          </div>
                          <div
                            id="swInputDiv2"
                            class="sw-input-div d-flex justify-content-center"
                          >
                            <input
                              id="swInput2"
                              type="text"
                              class="form-control range-input"
                              value="33.33%"
                            />
                          </div>
                          <div
                            id="swInputDiv3"
                            class="sw-input-div d-flex justify-content-center"
                          >
                            <input
                              id="swInput3"
                              type="text"
                              class="form-control range-input"
                              value="33.33%"
                            />
                          </div>
                        </div>
                      </div>
                      <p class="strategyErrorPara">
                        Sum of all weights must equal 100%.
                      </p>

                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #3</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div
                              class="col-md-10 offset-md-1 strategyAllocation"
                            >
                              <form action="javascript:void(0)">
                                <div
                                  class="
                                    d-flex
                                    justify-content-between
                                    align-items-center
                                    mt-4
                                    mb-1
                                  "
                                >
                                  <label for="allocation"
                                    >Choose Existing Index Strategy
                                    Allocation</label
                                  >
                                  <label class="labelOptional">OPTIONAL</label>
                                </div>
                                <div class="p-relative form-group">
                                  <input
                                    type="text"
                                    id="existingComparativeVehiclePortfolioTab3"
                                    placeholder="Select or Start Typing"
                                    class="form-control pe-5 autocomplete"
                                  />
                                  <span class="chevron-span">
                                    <svg
                                      width="12"
                                      height="8"
                                      viewBox="0 0 12 8"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            accordion-button
                            active
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#analysis-parameters2"
                          aria-expanded="false"
                          aria-controls="analysis-parameters2"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Analysis Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="analysis-parameters2"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <form action="javascript:void(0)">
                            <div class="formParabrdrLavelDiv mb-1">
                              <p>index</p>
                              <p></p>
                            </div>
                            <div class="form-group less w-75">
                              <div class="p-relative">
                                <input
                                  type="text"
                                  id="historyIndex3"
                                  placeholder="S&P 500"
                                  class="form-control pe-5 autocomplete"
                                />
                                <span class="chevron-span">
                                  <svg
                                    width="12"
                                    height="8"
                                    viewBox="0 0 12 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p>Rolling Time Period (Years)</p>
                              <p></p>
                            </div>
                            <div
                              class="
                                ChooseTimePeriodInputs
                                d-flex
                                justify-content-between
                                align-items-center
                              "
                              id="rollingTimePeriod1"
                            >
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">15</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">20</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">25</span>
                              </label>
                              <label class="">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">30</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">35</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">40</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">45</span>
                              </label>
                              <label class="disabled">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="timePeriodYear">50</span>
                              </label>
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input
                                  type="text"
                                  class="bonus-input custom-index-percent"
                                />
                              </div>
                            </div>

                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Analyze
                                <img
                                  src="@/assets/images/icons/info-icon.svg"
                                  alt="info"
                                  class="ms-1 info-icon-img"
                                />
                                <img
                                  src="@/assets/images/icons/dark-i-icon.svg"
                                  alt="info"
                                  class="ms-1 dark-info-icon-img"
                                />
                                <span class="info-message-analyze">
                                  The analysis will return the most recent,
                                  worst, median, and best historical results
                                  based on the Index, Strategy, or
                                  Distributions.
                                </span>
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy3"
                                    id="index3"
                                    checked
                                  />
                                  <label for="index3">Index </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy3"
                                    id="strategy3"
                                  />
                                  <label for="strategy3">Strategy </label>
                                </div>

                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="indexStrategy3"
                                    id="distributions3"
                                  />
                                  <label for="distributions3"
                                    >Distributions
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="formParabrdrLavelDiv mt-3 mb-2">
                              <p class="position-relative">
                                Credit Base Method
                              </p>
                              <p></p>
                            </div>
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                px-4
                              "
                            >
                              <div class="IndexStrategyBtn w-100">
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod3"
                                    id="monthlyAverageValue3"
                                    checked
                                  />
                                  <label for="monthlyAverageValue3"
                                    >Monthly Average Value
                                  </label>
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod3"
                                    id="beginningValue3"
                                  />
                                  <label for="beginningValue3"
                                    >Beginning Value</label
                                  >
                                </div>
                                <div class="w-100">
                                  <input
                                    type="radio"
                                    name="CreditBaseMethod3"
                                    id="yearValue3"
                                  />
                                  <label for="yearValue3"
                                    >End of Year Value</label
                                  >
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <!--  -->
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#growth-parameters3"
                          aria-expanded="false"
                          aria-controls="growth-parameters3"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Growth Parameters<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="growth-parameters3"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#growth-parameters3"
                        >
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Cap Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider9"
                              id="rangeSlider9"
                            >
                              <div id="tooltip9"></div>
                              <input
                                id="range9"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customRangeValue9"
                                >Custom Amount</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue9"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Participation Rate
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-participationRate">
                                To enter a Participation Rate above 200%, use
                                the Custom Amount field.
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="
                                range-slider range-slider10
                                position-relative
                                disabled
                              "
                              id="rangeSlider10"
                            >
                              <p class="rangeSliderMiddleLine1"></p>
                              <p class="rangeSliderMiddleLine2"></p>
                              <div id="tooltip10"></div>
                              <input
                                id="range10"
                                type="range"
                                value="60"
                                min="0"
                                max="200"
                              />
                              <p class="rangeSliderMiddleNum">100%</p>
                              <p class="rangeSliderMiddleNumEnd">200%</p>
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customRangeValue10"
                                >Custom Amount</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue10"
                                  min="0"
                                  max="200"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Margin/Spread</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider11"
                              id="rangeSlider11"
                            >
                              <div id="tooltip11"></div>
                              <input
                                id="range11"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customRangeValue11"
                                >Custom Amount</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue11"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div
                            class="formParabrdrLavelDiv mt-3 rangeSelectorLabel"
                          >
                            <p>Floor</p>
                            <p></p>
                          </div>
                          <div
                            class="d-flex align-items-center range-slider-div"
                          >
                            <div
                              class="range-slider range-slider12"
                              id="rangeSlider12"
                            >
                              <div id="tooltip12"></div>
                              <input
                                id="range12"
                                type="range"
                                value="0"
                                min="0"
                                max="100"
                              />
                            </div>
                            <div class="or-div ms-4">or</div>
                            <div class="customAmountInputDiv ms-2">
                              <label for="customRangeValue12"
                                >Custom Amount</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="customRangeValue12"
                                  min="0"
                                  max="100"
                                  class="percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <!--  -->
                          <div class="formParabrdrLavelDiv mt-3 mb-2">
                            <p class="position-relative">
                              Segment Duration (Years)
                              <img
                                src="@/assets/images/icons/info-icon.svg"
                                alt="info"
                                class="ms-1 info-icon-img"
                              />
                              <img
                                src="@/assets/images/icons/dark-i-icon.svg"
                                alt="info"
                                class="ms-1 dark-info-icon-img"
                              />
                              <span class="info-message-segment">
                                Does the strategy use a 1 or 2 year crediting
                                period?
                              </span>
                            </p>
                            <p></p>
                          </div>
                          <div
                            class="
                              ChooseTimePeriodInputs
                              d-flex
                              align-items-center
                            "
                          >
                            <label class="">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">1</span>
                            </label>
                            <label class="ms-2">
                              <input
                                type="radio"
                                name="segment-duration"
                                class="d-none"
                              />
                              <span class="timePeriodYear">2</span>
                            </label>
                          </div>
                        </div>
                        <!--  -->
                        <!--  -->
                        <div
                          class="
                            indexStrategyallDivs
                            active
                            mt-3
                            accordion-button
                            collapsed
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#enhancements-tab3"
                          aria-expanded="false"
                          aria-controls="enhancements-tab3"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Enhancements<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div
                          id="enhancements-tab3"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#enhancements-tab3"
                        >
                          <!-- first collapse div start -->
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="enhancements5"
                                @change="enhachments5BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements5"
                              class="buttonSaveRadioPara"
                              >Performance Multiplier</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent pb-5"
                            id="enhancements5Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-fixedValue-tab3"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-fixedValue3"
                                  role="tab"
                                  aria-controls="nav-fixedValue3"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-schedule-tab3"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-schedule3"
                                  role="tab"
                                  aria-controls="nav-schedule3"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-fixedValue3"
                                role="tabpanel"
                                aria-labelledby="nav-fixedValue-tab3"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="multiplierInputDiv form-group mt-3"
                                  >
                                    <label for="multiplier">Multiplier</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="multiplier"
                                    />
                                  </div>

                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div class="customAmountInputDiv ms-3">
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-schedule3"
                                role="tabpanel"
                                aria-labelledby="nav-schedule-tab3"
                              >
                                <div
                                  class="d-flex justify-content-center w-100"
                                >
                                  <div class="schduleTableDiv mt-5">
                                    <table class="table">
                                      <thead>
                                        <th>Year</th>
                                        <th>Multiplier Rate</th>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td data-label="Year">1</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">2</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">3</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">4</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">5</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">6</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">7</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">8</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">9</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td data-label="Year">10</td>
                                          <td
                                            data-label="Rate"
                                            class="innerTableInputTd"
                                          >
                                            <div class="percent-input-div">
                                              <input
                                                type="text"
                                                class="
                                                  form-control
                                                  percent-input
                                                "
                                                required
                                              /><span class="percent-span"
                                                >%</span
                                              >
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
                          <!-- first collapse div end -->

                          <!-- second collapse div start -->
                          <div
                            class="d-flex align-items-center mt-2"
                            id="addBorderAbove3"
                          >
                            <div class="form-check form-switch custom-switch">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="enhancements6"
                                @change="enhachments6BtnOnOff()"
                              />
                            </div>
                            <label
                              for="enhancements6"
                              class="buttonSaveRadioPara"
                              >Flat Credit/Bonus</label
                            >
                          </div>
                          <!--  -->
                          <div
                            class="enhancementsContent"
                            id="enhancements6Content"
                          >
                            <div
                              class="
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-3
                              "
                            >
                              <div
                                class="enhancementFixedSheduleBtn nav nav-tabs"
                                id="nav-tab"
                                role="tablist"
                              >
                                <div
                                  class="active"
                                  id="nav-flatfixedValue-tab3"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatfixedValue3"
                                  role="tab"
                                  aria-controls="nav-flatfixedValue3"
                                  aria-selected="true"
                                >
                                  Fixed Value
                                </div>
                                <div
                                  class=""
                                  id="nav-flatSchedule-tab3"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-flatSchedule3"
                                  role="tab"
                                  aria-controls="nav-flatSchedule3"
                                  aria-selected="false"
                                >
                                  Schedule
                                </div>
                              </div>
                            </div>
                            <div class="tab-content" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-flatfixedValue3"
                                role="tabpanel"
                                aria-labelledby="nav-flatfixedValue-tab3"
                              >
                                <form action="javascript:void(0)">
                                  <div
                                    class="creditBonusInputDiv form-group mt-3"
                                    id="creditBonusinputDiv3"
                                  >
                                    <label for="creditBonusinput3"
                                      >Credit/Bonus</label
                                    >
                                    <input
                                      type="text"
                                      class="form-control bonus-input"
                                      id="creditBonusinput3"
                                    />
                                  </div>
                                  <div class="multiplierInputDiv mt-3">
                                    <label for="Start Year">Start Year</label>
                                  </div>
                                  <div class="d-flex justify-content-between">
                                    <div
                                      class="
                                        fixeValueYearRadio
                                        d-flex
                                        justify-content-between
                                        align-items-center
                                        px-1
                                      "
                                    >
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                          checked
                                        />
                                        <span class="fixedStartYear">1</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">2</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">3</span>
                                      </label>
                                      <label class="">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">4</span>
                                      </label>
                                      <label class="disabled">
                                        <input
                                          type="radio"
                                          name="radio"
                                          class="d-none"
                                        />
                                        <span class="fixedStartYear">5</span>
                                      </label>
                                    </div>
                                    <div class="d-flex align-items-center">
                                      <div class="or-div">or</div>
                                      <div class="customAmountInputDiv ms-3">
                                        <label for="customAmount"
                                          >Custom Amount</label
                                        >
                                        <input type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="nav-flatSchedule3"
                                role="tabpanel"
                                aria-labelledby="nav-flatSchedule-tab3"
                              >
                                <div
                                  class="
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                    mt-3
                                  "
                                >
                                  <div
                                    class="
                                      enhancementFixedSheduleBtn
                                      nav nav-tabs
                                    "
                                    id="nav-tab"
                                    role="tablist"
                                  >
                                    <div
                                      class="active"
                                      id="nav-rate-tab3"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-rate3"
                                      role="tab"
                                      aria-controls="nav-rate"
                                      aria-selected="true"
                                    >
                                      Rate (%)
                                    </div>
                                    <div
                                      class=""
                                      id="nav-Amount-tab3"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav-amount3"
                                      role="tab"
                                      aria-controls="nav-amount"
                                      aria-selected="false"
                                    >
                                      Amount ($)
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-content" id="nav-tabContent3">
                                  <div
                                    class="tab-pane fade show active"
                                    id="nav-rate3"
                                    role="tabpanel"
                                    aria-labelledby="nav-rate-tab"
                                  >
                                    <!--  -->
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Multiplier Rate</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="innerTableInputTd"
                                              >
                                                <div class="percent-input-div">
                                                  <input
                                                    type="text"
                                                    class="
                                                      form-control
                                                      percent-input
                                                    "
                                                    required
                                                  /><span class="percent-span"
                                                    >%</span
                                                  >
                                                </div>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    <!--  -->
                                  </div>
                                  <div
                                    class="tab-pane fade"
                                    id="nav-amount3"
                                    role="tabpanel"
                                    aria-labelledby="nav-amount-tab2"
                                  >
                                    <div
                                      class="
                                        d-flex
                                        justify-content-center
                                        w-100
                                      "
                                    >
                                      <div class="schduleTableDiv mt-5">
                                        <table class="table">
                                          <thead>
                                            <th>Year</th>
                                            <th>Amount</th>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td data-label="Year">1</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">2</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">3</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">4</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">5</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">6</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">7</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">8</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">9</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
                                                <label for="amount">$</label>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td data-label="Year">10</td>
                                              <td
                                                data-label="Rate"
                                                class="amountInnerTableInputTd"
                                              >
                                                <input
                                                  type="text"
                                                  class="form-control"
                                                />
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
                          <!-- second collapse div end -->
                        </div>
                        <div
                          class="
                            indexStrategyallDivs
                            accordion-button
                            disabled
                            collapsed
                            mt-3
                          "
                          data-bs-toggle="collapse"
                          data-bs-target="#fees-parameters3"
                          aria-expanded="false"
                          aria-controls="fees-parameters3"
                        >
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                            "
                          >
                            <div class="indexStrategyheadBrdr">
                              <p>
                                Fees<svg
                                  class="ms-2 boxTickImage"
                                  width="21"
                                  height="21"
                                  viewBox="0 0 21 21"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.75"
                                    fill="#0E6651"
                                    stroke="#14EAB7"
                                    stroke-width="1.5"
                                  />
                                  <rect
                                    x="16.6006"
                                    y="7.91222"
                                    width="9.99563"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(135 16.6006 7.91222)"
                                    fill="#14EAB7"
                                  />
                                  <rect
                                    x="9.5693"
                                    y="14.9806"
                                    width="5.50074"
                                    height="1.5"
                                    rx="0.75"
                                    transform="rotate(-135 9.5693 14.9806)"
                                    fill="#14EAB7"
                                  />
                                </svg>
                              </p>
                              <div></div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="fees-parameters3"
                          class="
                            accordion-collapse
                            collapse
                            analysisParametersContent
                          "
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Premium Charge</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                  checked
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">7%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">8%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                            <p class="buttonSaveRadioPara">Same in All Years</p>
                          </div>
                          <div class="formParabrdrLavelDiv mt-4">
                            <p>Loan Interest Rate</p>
                            <p></p>
                          </div>
                          <div
                            class="
                              d-flex
                              justify-content-between
                              align-items-center
                              parent-radio-div
                            "
                          >
                            <div
                              class="
                                feesRadioDiv
                                d-flex
                                justify-content-between
                                feeDivWidth
                                align-items-center
                                px-1
                              "
                            >
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                  checked
                                />
                                <span class="fixedStartYear">1%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">2%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">3%</span>
                              </label>
                              <label class="mx-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">4%</span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">5%</span>
                              </label>
                              <label class="ms-1">
                                <input
                                  type="radio"
                                  name="radio"
                                  class="d-none"
                                />
                                <span class="fixedStartYear">6%</span>
                              </label>
                            </div>
                            <div class="d-flex align-items-center">
                              <div class="or-div">or</div>
                              <div
                                class="
                                  customAmountInputDiv
                                  creditBonusInputDiv
                                  customInputWidth
                                  ms-3
                                "
                              >
                                <label for="customAmount">Custom Amount</label>
                                <input type="text" class="bonus-input" />
                              </div>
                            </div>
                          </div>
                          <div class="d-flex align-items-center mt-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                              />
                            </div>
                            <p class="buttonSaveRadioPara">Same in All Years</p>
                          </div>
                          <p class="loan-Intrest-para">Loan Interest Charged</p>
                          <div
                            class="
                              d-flex
                              justify-content-center
                              align-items-center
                              mt-3
                            "
                          >
                            <div
                              class="enhancementFixedSheduleBtn nav nav-tabs"
                              id="nav-tab"
                              role="tablist"
                            >
                              <div
                                class="active"
                                id="nav-advance-tab3"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-advance3"
                                role="tab"
                                aria-controls="nav-advance3"
                                aria-selected="true"
                              >
                                In Advance
                              </div>
                              <div
                                class=""
                                id="nav-arrears-tab3"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-arrears3"
                                role="tab"
                                aria-controls="nav-arrears3"
                                aria-selected="false"
                              >
                                In Arrears
                              </div>
                            </div>
                          </div>
                          <div class="tab-content" id="nav-tabContent">
                            <div
                              class="tab-pane fade show active"
                              id="nav-advance3"
                              role="tabpanel"
                              aria-labelledby="nav-advance-tab3"
                            >
                              <div class="formParabrdrLavelDiv mt-5">
                                <p>Performance Multiplier Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">4%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">5%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">6%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">7%</span>
                                  </label>
                                  <label class="ms-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">8%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                  />
                                </div>
                                <p class="buttonSaveRadioPara">
                                  Same in All Years
                                </p>
                              </div>
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>Flat Credit/Bonus Fee</p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear">1%</span>
                                  </label>
                                  <label class="mx-1">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">2%</span>
                                  </label>
                                  <label>
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                              <div class="d-flex align-items-center mt-2">
                                <div
                                  class="
                                    form-check form-switch
                                    custom-switch
                                    ms-2
                                  "
                                >
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flat-credit-fee-radio3"
                                    @change="flatCreditRadio3()"
                                    checked
                                  />
                                </div>
                                <p class="buttonSaveRadioPara">
                                  Same in All Years
                                </p>
                              </div>
                              <!--  -->
                              <div class="d-flex justify-content-center w-100">
                                <div
                                  class="schduleTableDiv mt-5"
                                  id="flat-credit-fee-radio-table3"
                                >
                                  <table class="table">
                                    <thead>
                                      <th>Year</th>
                                      <th>Rate</th>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td data-label="Year">1</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">2</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">3</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">4</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">5</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">6</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">7</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">8</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">9</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td data-label="Year">10</td>
                                        <td
                                          data-label="Rate"
                                          class="
                                            amountInnerTableInputTd
                                            feeTdInputWithPercent
                                          "
                                        >
                                          <input
                                            type="text"
                                            class="form-control"
                                          />
                                          <label for="amount">$</label>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <!--  -->
                              <div class="formParabrdrLavelDiv mt-4">
                                <p>
                                  High Cap Fee
                                  <span class="optionalCommonTxt"
                                    >&nbsp;&nbsp;OPTIONAL</span
                                  >
                                </p>
                                <p></p>
                              </div>
                              <div
                                class="
                                  d-flex
                                  justify-content-between
                                  align-items-center
                                  parent-radio-div
                                "
                              >
                                <div
                                  class="
                                    feesRadioDiv
                                    d-flex
                                    justify-content-between
                                    feeDivWidth
                                    align-items-center
                                    px-1
                                  "
                                >
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">1%</span>
                                  </label>
                                  <label class="w-100 mx-2">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                      checked
                                    />
                                    <span class="fixedStartYear w-100">2%</span>
                                  </label>
                                  <label class="w-100">
                                    <input
                                      type="radio"
                                      name="radio"
                                      class="d-none"
                                    />
                                    <span class="fixedStartYear w-100">3%</span>
                                  </label>
                                </div>
                                <div class="d-flex align-items-center">
                                  <div class="or-div">or</div>
                                  <div
                                    class="
                                      customAmountInputDiv
                                      creditBonusInputDiv
                                      customInputWidth
                                      ms-3
                                    "
                                  >
                                    <label for="customAmount"
                                      >Custom Amount</label
                                    >
                                    <input type="text" class="bonus-input" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="tab-pane fade"
                              id="nav-arrears3"
                              role="tabpanel"
                              aria-labelledby="nav-arrears-tab3"
                            >
                              ------
                            </div>
                          </div>
                        </div>
                        <!--  -->
                        <div class="d-flex justify-content-center mt-4">
                          <div class="w-75">
                            <div class="d-flex align-items-center mb-2">
                              <div
                                class="
                                  form-check form-switch
                                  custom-switch
                                  ms-2
                                "
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="saveZIndexTemp3"
                                  @change="saveZIndexTemp3()"
                                />
                              </div>
                              <label
                                for="saveZIndexTemp3"
                                class="buttonSaveRadioPara"
                                >Save this Index Strategy as Template</label
                              >
                            </div>
                            <div
                              class="saveZIndexTempContent form-group"
                              id="saveZIndexTempContent3"
                            >
                              <form action="javascript:void(0)">
                                <label for="templateName">Template Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="templateName"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div
                              class="form-check form-switch custom-switch ms-2"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="saveAllocation2"
                                @change="allocation2()"
                              />
                            </div>
                            <label
                              for="saveAllocation2"
                              class="buttonSaveRadioPara"
                              >Save as Index Strategy Allocation</label
                            >
                          </div>
                          <div
                            class="saveZIndexTempContent form-group"
                            id="saveAllocationContent2"
                          >
                            <form action="javascript:void(0)">
                              <label for="templateName">Template Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="templateName"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- tab 3 end -->
                  </div>
                  <div class="text-center mt-30">
                    <router-link
                      to="/review-summary"
                      class="nav-link btn form-next-btn active fs-14"
                      id="nextBtnVsblOnSlct"
                      >Review</router-link
                    >
                    <span class="d-block mb-3"></span>
                    <div class="d-flex position-relative mb-5">
                      <router-link
                        to="/historical-simulations-after-yes"
                        class="
                          nav-link
                          btn
                          form-back-btn
                          fs-14
                          backHistoricalBtn
                        "
                        ><img
                          src="@/assets/images/icons/chevron-left-grey.svg"
                          class="img-fluid"
                          alt="Chevron"
                          width="6"
                        />
                        Back</router-link
                      >

                      <router-link
                        to="/review-summary"
                        class="
                          nav-link
                          btn
                          form-back-btn
                          fs-14
                          skipHistoricalBtn
                        "
                      >
                        Skip Historical Simulations</router-link
                      >
                      <router-link
                        to="/javascript:void(0)"
                        class="nav-link btn form-back-btn fs-14 skipScenarioBtn"
                        >Save Scenario as Draft</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: { RouterLink },
  methods: {
    radioBtnOnOff1: function () {
      var isCheked1 = document.getElementById(1);
      if ((isCheked1.checked = true)) {
        document
          .getElementById("historicalTopCheckBoxDiv1")
          .classList.add("active");
        document.getElementById("commonAllDivs1").style.display = "block";
        document
          .getElementById("historicalTopCheckBoxDiv2")
          .classList.remove("active");
        document.getElementById("commonAllDivs2").style.display = "none";
        document
          .getElementById("historicalTopCheckBoxDiv3")
          .classList.remove("active");
        document.getElementById("commonAllDivs3").style.display = "none";
      } else {
        document
          .getElementById("historicalTopCheckBoxDiv1")
          .classList.add("active");
        document.getElementById("commonAllDivs1").style.display = "block";
      }
    },
    radioBtnOnOff2: function () {
      var isCheked2 = document.getElementById(2);
      if (isCheked2.checked == true) {
        document
          .getElementById("historicalTopCheckBoxDiv2")
          .classList.add("active");
        document.getElementById("commonAllDivs2").style.display = "block";
        document
          .getElementById("historicalTopCheckBoxDiv1")
          .classList.remove("active");
        document.getElementById("commonAllDivs1").style.display = "none";
        document
          .getElementById("historicalTopCheckBoxDiv3")
          .classList.remove("active");
        document.getElementById("commonAllDivs3").style.display = "none";
      } else {
        document
          .getElementById("historicalTopCheckBoxDiv2")
          .classList.remove("active");
        document.getElementById("commonAllDivs2").style.display = "none";
        document
          .getElementById("historicalTopCheckBoxDiv1")
          .classList.add("active");
        document.getElementById("commonAllDivs1").style.display = "block";
        document
          .getElementById("historicalTopCheckBoxDiv3")
          .classList.remove("active");
        document.getElementById(3).checked = false;
      }
    },
    radioBtnOnOff3: function () {
      var isCheked3 = document.getElementById(3);
      if (isCheked3.checked == true) {
        document
          .getElementById("historicalTopCheckBoxDiv3")
          .classList.add("active");
        document.getElementById("commonAllDivs3").style.display = "block";
        document
          .getElementById("historicalTopCheckBoxDiv1")
          .classList.remove("active");
        document.getElementById("commonAllDivs1").style.display = "none";
        document
          .getElementById("historicalTopCheckBoxDiv2")
          .classList.remove("active");
        document.getElementById("commonAllDivs2").style.display = "none";
        document.getElementById(2).checked = true;
      } else {
        document
          .getElementById("historicalTopCheckBoxDiv3")
          .classList.remove("active");
        document.getElementById("commonAllDivs3").style.display = "none";
        document
          .getElementById("historicalTopCheckBoxDiv2")
          .classList.add("active");
        document.getElementById("commonAllDivs2").style.display = "block";
        document.getElementById(2).checked = true;
      }
    },
      enhachments1BtnOnOff: function() {
      let enhancedCheckBox = document.getElementById('enhancements1').checked;
      if (enhancedCheckBox) {
        document.getElementById('enhancements1Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements1Content').style.display = "none";
      }
    },
    enhachments2BtnOnOff: function() {
      let enhancedCheckBox2 = document.getElementById('enhancements2').checked;
      if (enhancedCheckBox2) {
        document.getElementById('enhancements2Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements2Content').style.display = "none";
      }
    },
    enhachments3BtnOnOff: function() {
      let enhancedCheckBox3 = document.getElementById('enhancements3').checked;
      if (enhancedCheckBox3) {
        document.getElementById('enhancements3Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements3Content').style.display = "none";
      }
    },
    enhachments4BtnOnOff: function() {
      let enhancedCheckBox4 = document.getElementById('enhancements4').checked;
      if (enhancedCheckBox4) {
        document.getElementById('enhancements4Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements4Content').style.display = "none";
      }
    },
    enhachments5BtnOnOff: function() {
      let enhancedCheckBox5 = document.getElementById('enhancements5').checked;
      if (enhancedCheckBox5) {
        document.getElementById('enhancements5Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements5Content').style.display = "none";
      }
    },
    enhachments6BtnOnOff: function() {
      let enhancedCheckBox6 = document.getElementById('enhancements6').checked;
      if (enhancedCheckBox6) {
        document.getElementById('enhancements6Content').style.display = "block";
      }
      else {
        document.getElementById('enhancements6Content').style.display = "none";
      }
    },

      flatCreditRadio: function() {
      var flatCreditRadio = document.getElementById('flat-credit-fee-radio');

      if (flatCreditRadio.checked) {
        document.getElementById('flat-credit-fee-radio-table').style.display = 'none'
      }
      else {
        document.getElementById('flat-credit-fee-radio-table').style.display = 'unset'
      }
    },
    flatCreditRadio2: function() {
      var flatCreditRadio = document.getElementById('flat-credit-fee-radio2');

      if (flatCreditRadio.checked) {
        document.getElementById('flat-credit-fee-radio-table2').style.display = 'none'
      }
      else {
        document.getElementById('flat-credit-fee-radio-table2').style.display = 'unset'
      }
    },
    flatCreditRadio3: function() {
      var flatCreditRadio = document.getElementById('flat-credit-fee-radio3');

      if (flatCreditRadio.checked) {
        document.getElementById('flat-credit-fee-radio-table3').style.display = 'none'
      }
      else {
        document.getElementById('flat-credit-fee-radio-table3').style.display = 'unset'
      }
    },

    saveZIndexTemp: function() {
      var indexTemplate = document.getElementById('saveZIndexTemp').checked;
      if (indexTemplate) {
        document.getElementById('saveZIndexTempContent').style.display = 'unset'
      }
      else {
        document.getElementById('saveZIndexTempContent').style.display = 'none'
      }
    },
    saveZIndexTemp2: function() {
      var indexTemplate = document.getElementById('saveZIndexTemp2').checked;
      if (indexTemplate) {
        document.getElementById('saveZIndexTempContent2').style.display = 'unset'
      }
      else {
        document.getElementById('saveZIndexTempContent2').style.display = 'none'
      }
    },
    allocation: function() {
      var indexTemplate = document.getElementById('saveAllocation').checked;
      if (indexTemplate) {
        document.getElementById('saveAllocationContent').style.display = 'unset'
      }
      else {
        document.getElementById('saveAllocationContent').style.display = 'none'
      }
    },
    saveZIndexTemp3: function() {
      var indexTemplate = document.getElementById('saveZIndexTemp3').checked;
      if (indexTemplate) {
        document.getElementById('saveZIndexTempContent3').style.display = 'unset'
      }
      else {
        document.getElementById('saveZIndexTempContent3').style.display = 'none'
      }
    },
    allocation2: function() {
      var indexTemplate = document.getElementById('saveAllocation2').checked;
      if (indexTemplate) {
        document.getElementById('saveAllocationContent2').style.display = 'unset'
      }
      else {
        document.getElementById('saveAllocationContent2').style.display = 'none'
      }
    }
  },
  mounted() {
    // number of index strategy tab 1
    const comparativeVehiclePortfolios = [
      "Index Strategy 1",
      "Index Strategy 2",
      "Index Strategy 3",
      "Index Strategy 4",
      "Index Strategy 5",
      "Index Strategy 6",
    ];

    // Autocomplete dropdowns
    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("focus", function (e) {
        var a, b, i, count = 0, val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          count++;
          b = document.createElement("DIV");
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      });

      inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() || arr[i].toUpperCase().includes(val.toUpperCase())) {
            b = document.createElement("DIV");
            b.innerHTML = arr[i].substr(0, val.length);
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = inp.parentElement.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }
    autocomplete(document.getElementById("existingComparativeVehiclePortfolio"), comparativeVehiclePortfolios);

    // number of index strategy tab 2
    const comparativeVehiclePortfoliosTab2 = [
      "Index Strategy 1",
      "Index Strategy 2",
      "Index Strategy 3",
      "Index Strategy 4",
      "Index Strategy 5",
      "Index Strategy 6",
    ];

    autocomplete(document.getElementById("existingComparativeVehiclePortfolioTab2"), comparativeVehiclePortfoliosTab2);

    // number of index strategy tab 2
    const comparativeVehiclePortfoliosTab3 = [
      "Index Strategy 1",
      "Index Strategy 2",
      "Index Strategy 3",
      "Index Strategy 4",
      "Index Strategy 5",
      "Index Strategy 6",
    ];

    autocomplete(document.getElementById("existingComparativeVehiclePortfolioTab3"), comparativeVehiclePortfoliosTab3);

    // index vehicle list 1
    const historyIndex = [
      "S&P 500",
      "Blended Index",
      "Bloomberg US Dynamic Balance II ER",
      "PIMCO Tactical Balanced ER",
    ];

    // Autocomplete dropdowns
    function autocomplete2(inp, arr) {
      var currentFocus;
      inp.addEventListener("focus", function (e) {
        var a, b, i, count = 0, val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          count++;
          b = document.createElement("DIV");
          b.setAttribute("data-count", count);
          b.innerHTML = arr[i];
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function (e) {
            changeRollingTimePeriod(e.target.getAttribute("data-count"), inp);
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      });

      inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() || arr[i].toUpperCase().includes(val.toUpperCase())) {
            b = document.createElement("DIV");
            b.setAttribute("data-count", count);
            b.innerHTML = arr[i].substr(0, val.length);
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function (e) {
              changeRollingTimePeriod(e.target.getAttribute("data-count"), inp);
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      /* Execute a function presses a key on the keyboard: */
      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = inp.parentElement.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

    function changeRollingTimePeriod(indexNumber, input) {
      const form = input.closest("form");
      const rollingTimePeriodLabels = form.querySelector(".ChooseTimePeriodInputs").querySelectorAll("label");
      const customIndexPercentInput = form.querySelector(".custom-index-percent");

      console.log(customIndexPercentInput.value, customIndexPercentInput.value.length);
      if (customIndexPercentInput.value == null || customIndexPercentInput.value.length > 0) {
        return;
      } else if (customIndexPercentInput.value.length == 0) {
        if (indexNumber == 1) {
          rollingTimePeriodLabels.forEach(function (label) {
            label.classList.remove("disabled");
          });
        } else if (indexNumber == 2) {
          rollingTimePeriodLabels.forEach(function (label, index) {
            if (index <= 3) {
              label.classList.remove("disabled");
            } else {
              label.classList.add("disabled");
            }
          });
        } else {
          rollingTimePeriodLabels.forEach(function (label, index) {
            if (index == 0) {
              label.classList.remove("disabled");
            } else {
              label.classList.add("disabled");
            }
          });
        }
      }
    }


    let customIndexPercentInputs = document.querySelectorAll(".custom-index-percent");

    customIndexPercentInputs.forEach(function (input) {
      input.addEventListener('input', (e) => {
        const form = e.target.closest("form");
        const rollingTimePeriodLabels = form.querySelector(".ChooseTimePeriodInputs").querySelectorAll("label");
        rollingTimePeriodLabels.forEach(function (label) {
          label.classList.add("disabled");
          // console.log(label);
        });
      })
    });


    autocomplete2(document.getElementById("historyIndex"), historyIndex);

    // index vehicle list 2
    const historyIndex2 = [
      "S&P 500",
      "Blended Index",
      "Bloomberg US Dynamic Balance II ER",
      "PIMCO Tactical Balanced ER",
    ];

    autocomplete2(document.getElementById("historyIndex2"), historyIndex2);

    // index vehicle list 2
    const historyIndex3 = [
      "S&P 500",
      "Blended Index",
      "Bloomberg US Dynamic Balance II ER",
      "PIMCO Tactical Balanced ER",
    ];

    autocomplete2(document.getElementById("historyIndex3"), historyIndex3);

    // Strategy Range Inputs 2
    const swMid1 = document.getElementById("strategyMidWeight1");
    const swMid2 = document.getElementById("strategyMidWeight2");

    const swInputMid1 = document.getElementById("swInputMid1");
    const swInputMid2 = document.getElementById("swInputMid2");

    const swInputDivMid1 = document.getElementById("swInputDivMid1");
    const swInputDivMid2 = document.getElementById("swInputDivMid2");

    const midRange = document.getElementById('midRange');

    midRange.addEventListener("input", (e) => {
      swInputMid1.value = (+e.target.value).toFixed(2) + "%";
      swInputMid2.value = (100 - +e.target.value) + "%";

      swMid1.style.width = (+e.target.value).toFixed(2) + "%";
      swMid2.style.width = (100 - +e.target.value) + "%";

      swInputDivMid1.style.width = (+e.target.value).toFixed(2) + "%";
      swInputDivMid2.style.width = (100 - +e.target.value) + "%";

      // e.target.style.width = `calc(${(total -  (+swInput3.value.split("%")[0]).toFixed(2))}% - 20px)`;
    });

    swInputMid1.addEventListener('input', (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert('Sorry, you are entering value out of range');
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      e.target.value = targetVal.toFixed(2) + "%";
      swInputMid2.value = (100 - targetVal).toFixed(2) + "%";

      swMid1.style.width = targetVal.toFixed(2) + "%";
      swMid2.style.width = (100 - targetVal).toFixed(2) + "%";

      swInputDiv1.style.width = targetVal.toFixed(2) + "%";
      swInputDiv2.style.width = (100 - targetVal).toFixed(2) + "%";
    });

    swInputMid2.addEventListener('input', (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert('Sorry, you are entering value out of range');
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      e.target.value = targetVal.toFixed(2) + "%";
      swInputMid1.value = (100 - targetVal).toFixed(2) + "%";

      swMid1.style.width = (100 - targetVal).toFixed(2) + "%";
      swMid2.style.width = targetVal.toFixed(2) + "%";

      swInputDiv1.style.width = (100 - targetVal).toFixed(2) + "%";
      swInputDiv2.style.width = targetVal.toFixed(2) + "%";
    });

    // Strategy Range Inputs 3
    const sw1 = document.getElementById("strategyWeight1");
    const sw2 = document.getElementById("strategyWeight2");
    const sw3 = document.getElementById("strategyWeight3");

    const swInput1 = document.getElementById("swInput1");
    const swInput2 = document.getElementById("swInput2");
    const swInput3 = document.getElementById("swInput3");

    const swInpuDiv1 = document.getElementById("swInpuDiv1");
    const swInpuDiv2 = document.getElementById("swInpuDiv2");
    const swInpuDiv3 = document.getElementById("swInpuDiv3");

    const exampleRange1 = document.getElementById('exampleRange1');
    const exampleRange2 = document.getElementById('exampleRange2');

    exampleRange1.addEventListener("input", (e) => {
      let total = 100;
      let total2 = total - ((+swInput3.value.split("%")[0]).toFixed(2));
      exampleRange1.max = total2;

      swInput1.value = (+e.target.value).toFixed(2) + "%";
      swInput2.value = (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";

      strategyWeight1.style.width = (+e.target.value).toFixed(2) + "%";
      strategyWeight2.style.width = (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight3.style.width = (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width = (+e.target.value).toFixed(2) + "%";
      swInputDiv2.style.width = (total2 - +swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv3.style.width = (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      e.target.style.width = `calc(${(total - (+swInput3.value.split("%")[0]).toFixed(2))}% - 20px)`;
    });

    exampleRange2.addEventListener("input", (e) => {
      let total = 100;
      let total2 = total - ((+swInput1.value.split("%")[0]).toFixed(2));
      exampleRange2.max = total2;

      swInput2.value = (+e.target.value).toFixed(2) + "%";
      swInput3.value = (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      strategyWeight1.style.width = ((+swInput1.value.split("%")[0]).toFixed(2)) + "%";
      strategyWeight2.style.width = (+e.target.value).toFixed(2) + "%";
      strategyWeight3.style.width = (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width = ((+swInput1.value.split("%")[0]).toFixed(2)) + "%";
      swInputDiv2.style.width = (+e.target.value).toFixed(2) + "%";
      swInputDiv3.style.width = (total2 - +swInput2.value.split("%")[0]).toFixed(2) + "%";

      e.target.style.width = `calc(${(total - (+swInput1.value.split("%")[0]).toFixed(2))}% - 20px`;
    });

    swInput1.addEventListener('input', (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert('Sorry, you are entering value out of range');
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - ((+swInput3.value.split("%")[0]).toFixed(2));
      exampleRange1.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput2.value = ((total2 - targetVal).toFixed(2)) + "%";

      strategyWeight1.style.width = targetVal.toFixed(2) + "%";
      strategyWeight2.style.width = (total2 - targetVal).toFixed(2) + "%";
      strategyWeight3.style.width = (+swInput3.value.split("%")[0]).toFixed(2) + "%";

      swInputDiv1.style.width = targetVal.toFixed(2) + "%";
      swInputDiv2.style.width = (total2 - targetVal).toFixed(2) + "%";
      swInputDiv3.style.width = (+swInput3.value.split("%")[0]).toFixed(2) + "%";
    });

    swInput2.addEventListener('input', (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert('Sorry, you are entering value out of range');
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - ((+swInput1.value.split("%")[0]).toFixed(2));
      exampleRange2.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput3.value = ((total2 - targetVal).toFixed(2)) + "%";

      strategyWeight1.style.width = (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight2.style.width = targetVal.toFixed(2) + "%";
      strategyWeight3.style.width = (total2 - targetVal).toFixed(2) + "%";

      swInputDiv1.style.width = (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv2.style.width = targetVal.toFixed(2) + "%";
      swInputDiv3.style.width = (total2 - targetVal).toFixed(2) + "%";
    });

    swInput3.addEventListener('input', (e) => {
      let targetVal = +e.target.value.split("%")[0];

      setTimeout(() => {
        if (targetVal > 100) {
          alert('Sorry, you are entering value out of range');
          e.target.value = (targetVal / 10).toFixed(2) + "%";
        }
      }, 500);

      let total = 100;
      let total2 = total - ((+swInput1.value.split("%")[0]).toFixed(2));
      exampleRange2.max = total2;

      e.target.value = targetVal.toFixed(2) + "%";
      swInput2.value = ((total2 - targetVal).toFixed(2)) + "%";

      strategyWeight1.style.width = (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      strategyWeight2.style.width = (total2 - targetVal).toFixed(2) + "%";
      strategyWeight3.style.width = targetVal.toFixed(2) + "%";

      swInputDiv1.style.width = (+swInput1.value.split("%")[0]).toFixed(2) + "%";
      swInputDiv2.style.width = (total2 - targetVal).toFixed(2) + "%";
      swInputDiv3.style.width = targetVal.toFixed(2) + "%";
    });

    // Range slider 1
    const
      range1 = document.getElementById('range1'),
      tooltip1 = document.getElementById('tooltip1'),
      setValue1 = () => {
        const
          newValue1 = Number((range1.value - range1.min) * 100 / (range1.max - range1.min)),
          newPosition1 = 16 - (newValue1 * 0.32);
        tooltip1.innerHTML = `<span>${range1.value}</span>`;
        tooltip1.style.left = `calc(${newValue1}% + (${newPosition1}px))`;
        document.documentElement.style.setProperty("--range-progress1", `calc(${newValue1}% + (${newPosition1}px))`);
        // document.getElementById('customRangeValue1').value = newValue1;
      };
    document.addEventListener("DOMContentLoaded", setValue1);
    range1.addEventListener('input', setValue1);

    // Range slider2
    const
      range2 = document.getElementById('range2'),
      tooltip2 = document.getElementById('tooltip2'),
      setValue2 = () => {
        const
          newValue2 = Number((range2.value - range2.min) * 100 / (range2.max - range2.min)),
          newPosition2 = 16 - (newValue2 * 0.32);
        tooltip2.innerHTML = `<span>${range2.value}</span>`;
        tooltip2.style.left = `calc(${newValue2}% + (${newPosition2}px))`;
        document.documentElement.style.setProperty("--range-progress2", `calc(${newValue2}% + (${newPosition2}px))`);
        // document.getElementById('customRangeValue2').value = newValue2 * 2;
      };
    document.addEventListener("DOMContentLoaded", setValue2);
    range2.addEventListener('input', setValue2);

    // Range slider3
    const
      range3 = document.getElementById('range3'),
      tooltip3 = document.getElementById('tooltip3'),
      setValue3 = () => {
        const
          newValue3 = Number((range3.value - range3.min) * 100 / (range3.max - range3.min)),
          newPosition3 = 16 - (newValue3 * 0.32);
        tooltip3.innerHTML = `<span>${range3.value}</span>`;
        tooltip3.style.left = `calc(${newValue3}% + (${newPosition3}px))`;
        document.documentElement.style.setProperty("--range-progress3", `calc(${newValue3}% + (${newPosition3}px))`);
        // document.getElementById('customRangeValue3').value = newValue3;
      };
    document.addEventListener("DOMContentLoaded", setValue3);
    range3.addEventListener('input', setValue3);

    // Range slider4
    const
      range4 = document.getElementById('range4'),
      tooltip4 = document.getElementById('tooltip4'),
      setValue4 = () => {
        const
          newValue4 = Number((range4.value - range4.min) * 100 / (range4.max - range4.min)),
          newPosition4 = 16 - (newValue4 * 0.32);
        tooltip4.innerHTML = `<span>${range4.value}</span>`;
        tooltip4.style.left = `calc(${newValue4}% + (${newPosition4}px))`;
        document.documentElement.style.setProperty("--range-progress4", `calc(${newValue4}% + (${newPosition4}px))`);
        // document.getElementById('customRangeValue4').value = newValue4;
      };
    document.addEventListener("DOMContentLoaded", setValue4);
    range4.addEventListener('input', setValue4);

    // Range slider5
    const
      range5 = document.getElementById('range5'),
      tooltip5 = document.getElementById('tooltip5'),
      setValue5 = () => {
        const
          newValue5 = Number((range5.value - range5.min) * 100 / (range5.max - range5.min)),
          newPosition5 = 16 - (newValue5 * 0.32);
        tooltip5.innerHTML = `<span>${range5.value}</span>`;
        tooltip5.style.left = `calc(${newValue5}% + (${newPosition5}px))`;
        document.documentElement.style.setProperty("--range-progress5", `calc(${newValue5}% + (${newPosition5}px))`);
        // document.getElementById('customRangeValue5').value = newValue5;
      };
    document.addEventListener("DOMContentLoaded", setValue5);
    range5.addEventListener('input', setValue5);

    // Range slider6
    const
      range6 = document.getElementById('range6'),
      tooltip6 = document.getElementById('tooltip6'),
      setValue6 = () => {
        const
          newValue6 = Number((range6.value - range6.min) * 100 / (range6.max - range6.min)),
          newPosition6 = 16 - (newValue6 * 0.32);
        tooltip6.innerHTML = `<span>${range6.value}</span>`;
        tooltip6.style.left = `calc(${newValue6}% + (${newPosition6}px))`;
        document.documentElement.style.setProperty("--range-progress6", `calc(${newValue6}% + (${newPosition6}px))`);
        // document.getElementById('customRangeValue6').value = newValue6 * 2;
      };
    document.addEventListener("DOMContentLoaded", setValue6);
    range6.addEventListener('input', setValue6);

    // Range slider7
    const
      range7 = document.getElementById('range7'),
      tooltip7 = document.getElementById('tooltip7'),
      setValue7 = () => {
        const
          newValue7 = Number((range7.value - range7.min) * 100 / (range7.max - range7.min)),
          newPosition7 = 17 - (newValue7 * 0.32);
        tooltip7.innerHTML = `<span>${range7.value}</span>`;
        tooltip7.style.left = `calc(${newValue7}% + (${newPosition7}px))`;
        document.documentElement.style.setProperty("--range-progress7", `calc(${newValue7}% + (${newPosition7}px))`);
        // document.getElementById('customRangeValue7').value = newValue7;
      };
    document.addEventListener("DOMContentLoaded", setValue7);
    range7.addEventListener('input', setValue7);

    // Range slider8
    const
      range8 = document.getElementById('range8'),
      tooltip8 = document.getElementById('tooltip8'),
      setValue8 = () => {
        const
          newValue8 = Number((range8.value - range8.min) * 100 / (range8.max - range8.min)),
          newPosition8 = 18 - (newValue8 * 0.32);
        tooltip8.innerHTML = `<span>${range8.value}</span>`;
        tooltip8.style.left = `calc(${newValue8}% + (${newPosition8}px))`;
        document.documentElement.style.setProperty("--range-progress8", `calc(${newValue8}% + (${newPosition8}px))`);
        // document.getElementById('customRangeValue8').value = newValue8;
      };
    document.addEventListener("DOMContentLoaded", setValue8);
    range8.addEventListener('input', setValue8);

    // Range slider9
    const
      range9 = document.getElementById('range9'),
      tooltip9 = document.getElementById('tooltip9'),
      setValue9 = () => {
        const
          newValue9 = Number((range9.value - range9.min) * 100 / (range9.max - range9.min)),
          newPosition9 = 18 - (newValue9 * 0.32);
        tooltip9.innerHTML = `<span>${range9.value}</span>`;
        tooltip9.style.left = `calc(${newValue9}% + (${newPosition9}px))`;
        document.documentElement.style.setProperty("--range-progress9", `calc(${newValue9}% + (${newPosition9}px))`);
        // document.getElementById('customRangeValue9').value = newValue9;
      };
    document.addEventListener("DOMContentLoaded", setValue9);
    range9.addEventListener('input', setValue9);
    // Range slider10
    const
      range10 = document.getElementById('range10'),
      tooltip10 = document.getElementById('tooltip10'),
      setValue10 = () => {
        const
          newValue10 = Number((range10.value - range10.min) * 100 / (range10.max - range10.min)),
          newPosition10 = 18 - (newValue10 * 0.32);
        tooltip10.innerHTML = `<span>${range10.value}</span>`;
        tooltip10.style.left = `calc(${newValue10}% + (${newPosition10}px))`;
        document.documentElement.style.setProperty("--range-progress10", `calc(${newValue10}% + (${newPosition10}px))`);
        // document.getElementById('customRangeValue10').value = newValue10 * 2;
      };
    document.addEventListener("DOMContentLoaded", setValue10);
    range10.addEventListener('input', setValue10);
    // Range slider11
    const
      range11 = document.getElementById('range11'),
      tooltip11 = document.getElementById('tooltip11'),
      setValue11 = () => {
        const
          newValue11 = Number((range11.value - range11.min) * 100 / (range11.max - range11.min)),
          newPosition11 = 18 - (newValue11 * 0.32);
        tooltip11.innerHTML = `<span>${range11.value}</span>`;
        tooltip11.style.left = `calc(${newValue11}% + (${newPosition11}px))`;
        document.documentElement.style.setProperty("--range-progress11", `calc(${newValue11}% + (${newPosition11}px))`);
        // document.getElementById('customRangeValue11').value = newValue11;
      };
    document.addEventListener("DOMContentLoaded", setValue11);
    range11.addEventListener('input', setValue11);

    // Range slider12
    const
      range12 = document.getElementById('range12'),
      tooltip12 = document.getElementById('tooltip12'),
      setValue12 = () => {
        const
          newValue12 = Number((range12.value - range12.min) * 100 / (range12.max - range12.min)),
          newPosition12 = 18 - (newValue12 * 0.32);
        tooltip12.innerHTML = `<span>${range12.value}</span>`;
        tooltip12.style.left = `calc(${newValue12}% + (${newPosition12}px))`;
        document.documentElement.style.setProperty("--range-progress12", `calc(${newValue12}% + (${newPosition12}px))`);
        // document.getElementById('customRangeValue12').value = newValue12;
      };
    document.addEventListener("DOMContentLoaded", setValue12);
    range12.addEventListener('input', setValue12);

  // save index template shoe hide end


 
  

    const bonusInputs = document.querySelectorAll(".bonus-input");

    bonusInputs.forEach(function (bonusInput) {
      bonusInput.addEventListener("input", function (e) {
        let parentDiv = e.target.closest(".creditBonusInputDiv");
        let feeRadioLabels = null;
        if (e.target.closest(".parent-radio-div")) {
          feeRadioLabels = e.target.closest(".parent-radio-div").querySelectorAll("label");
        }
        console.log(feeRadioLabels);
        let len = e.target.value.length;
        if (len > 3) {
          actualValue = e.target.value.slice(0, len - 1);
          e.target.value = actualValue;
          alert("Value should not be greater than 100.");
          return false;
        }
        if (len == 0 || e.target.value == null) {
          e.target.value = "";
          parentDiv.classList.remove("creditBonusInputDivModify");
          if (feeRadioLabels) {
            feeRadioLabels.forEach(function (radioLabel) {
              radioLabel.classList.remove("disabled");
            });
          }
        } else {
          e.target.value = `${e.target.value}%`;
          let valuewithPercent = `${e.target.value.split("%").join("")}%`;
          e.target.value = valuewithPercent;
          parentDiv.classList.add("creditBonusInputDivModify");
          if (feeRadioLabels) {
            feeRadioLabels.forEach(function (radioLabel) {
              radioLabel.classList.add("disabled");
            });
          }
        }
      });
      bonusInput.addEventListener("keydown", function (e) {
        let parentDiv = e.target.closest(".creditBonusInputDiv");
        let feeRadioLabels = null;
        if (e.target.closest(".parent-radio-div")) {
          feeRadioLabels = e.target.closest(".parent-radio-div").querySelectorAll("label");
        }
        if (e.keyCode == 8) {
          let len = e.target.value.length;
          valueAfterDelete = e.target.value.slice(0, len - 2);
          let valuewithPercent = `${valueAfterDelete}%`;
          e.target.value = valuewithPercent;

          if (len <= 2 || e.target.value == null) {
            e.target.value = "";
            parentDiv.classList.remove("creditBonusInputDivModify");
            if (feeRadioLabels) {
              feeRadioLabels.forEach(function (radioLabel) {
                radioLabel.classList.remove("disabled");
              });
            }
          } else {
            parentDiv.classList.add("creditBonusInputDivModify");
            if (feeRadioLabels) {
              feeRadioLabels.forEach(function (radioLabel) {
                radioLabel.classList.add("disabled");
              });
            }
          }
        }
      });
    });

    // Percentage Inputs
    const percentInputs = document.querySelectorAll(".percent-input");

    function disableInputRange(input) {

    }

    percentInputs.forEach(function (percentInput) {
      percentInput.addEventListener("input", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        let rangeSlider = null;
        if (e.target.closest(".range-slider-div")) {
          rangeSlider = e.target.closest(".range-slider-div").querySelector(".range-slider");
        }
        let len = e.target.value.length;
        if (len > 3) {
          actualValue = e.target.value.slice(0, len - 1);
          e.target.value = actualValue;
          alert("Please enter valid percentage value.");
          return false;
        }
        if (len == 0 || e.target.value == null) {
          e.target.value = "";
          parentDiv.classList.remove("hide-percent");
          if (rangeSlider) {
            rangeSlider.classList.remove("disabled")
          }
        } else {
          e.target.value = `${e.target.value}%`;
          let valuewithPercent = `${e.target.value.split("%").join("")}%`;
          e.target.value = valuewithPercent;
          parentDiv.classList.add("hide-percent");
          if (rangeSlider) {
            rangeSlider.classList.add("disabled")
          }
        }
        // disableInputRange(e.target);
      });

      percentInput.addEventListener("keydown", function (e) {
        let parentDiv = e.target.closest(".percent-input-div");
        let rangeSlider = null;
        if (e.target.closest(".range-slider-div")) {
          rangeSlider = e.target.closest(".range-slider-div").querySelector(".range-slider");
        }

        if (e.keyCode == 8) {
          let len = e.target.value.length;
          valueAfterDelete = e.target.value.slice(0, len - 2);
          let valuewithPercent = `${valueAfterDelete}%`;
          e.target.value = valuewithPercent;

          if (len <= 2) {
            e.target.value = "";
            parentDiv.classList.remove("hide-percent");
            if (rangeSlider) {
              rangeSlider.classList.remove("disabled")
            }
          } else {
            parentDiv.classList.add("hide-percent");
            if (rangeSlider) {
              rangeSlider.classList.add("disabled")
            }
          }
        }
      });
    });
  }
};
</script>
<style lang="">
</style>