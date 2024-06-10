<template>
  <div>
    <div class="accumulation_strategy_box_head">
      <h2>Income Rider Strategy</h2>
      <img src="@/assets/images/icons/income-rider.svg" alt="Income Rider" />
    </div>
    <div class="accumulation_strategy_inner_box">
      <div class="row">
        <div class="col-6 col-border-right pe-4">
          <p class="form_section_para" @click="testFunction">
            Comparative Vehicle
          </p>
          <div class="row mb-3">
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="totalBalanceInput" class="main_label">
                  Total Balance
                  <span>
                    <common-tooltip-svg />
                    <span>
                      What is the total balance of the account being considered?
                    </span>
                  </span>
                </label>
              </div>
              <div class="form_section_input_div">
                <dollar-amount-input
                  id="totalBalanceInput"
                  class="dollar_inp"
                  max="100000000"
                  placeholder="Total Balance"
                  :default="inputs.total_balance"
                  @amountUpdated="(e) => updateInput('total_balance', e)"
                />
                <span class="dollar">$</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="accountTypeSelect" class="main_label"
                  >Account Type</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="accountTypeSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="
                      inputs.account_type ? inputs.account_type.label : ''
                    "
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in accountTypeOpts"
                    :key="item"
                    :class="`option ${
                      inputs.account_type === item ? 'active' : ''
                    }`"
                    @click="updateInput('account_type', item)"
                  >
                    <span class="option-text">{{ item.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="accountNameInput" class="main_label">
                  Account Name
                  <span>
                    <common-tooltip-svg />
                    <span>
                      What would you like the report to show as the account's
                      name?
                    </span>
                  </span>
                </label>
              </div>
              <div class="form_section_input_div">
                <input
                  id="accountNameInput"
                  :value="inputs.comparative_vehicle_account_name"
                  @input="
                    (e) =>
                      updateInput(
                        'comparative_vehicle_account_name',
                        e.target.value
                      )
                  "
                  type="text"
                />
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="taxRateInput" class="main_label">
                  Tax Rate
                  <span class="optional">(Optional)</span>
                </label>
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="taxRateInput"
                  class="percent_inp"
                  :default="inputs.tax_rate"
                  @amountUpdated="(e) => updateInput('tax_rate', e)"
                  max="100"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="currentAgeInput" class="main_label">
                  Current Age
                  <span>
                    <common-tooltip-svg />
                    <span>
                      This should match the age as shown on year one of the
                      illustration.
                    </span>
                  </span>
                </label>
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="currentAgeInput"
                  :default="inputs.current_age"
                  @amountUpdated="(e) => updateInput('current_age', e)"
                  max="100"
                />
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="planThroughAgeInput" class="main_label"
                  >Plan Through Age</label
                >
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="planThroughAgeInput"
                  :default="inputs.plan_through_age"
                  @amountUpdated="(e) => updateInput('plan_through_age', e)"
                  max="100"
                />
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="growthRateInput" class="main_label"
                  >Growth Rate</label
                >
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="growthRateInput"
                  class="percent_inp"
                  :default="inputs.growth_rate"
                  @amountUpdated="(e) => updateInput('growth_rate', e)"
                  max="100"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="feeInput" class="main_label">
                  Fee
                  <span class="optional">(Optional)</span>
                </label>
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="feeInput"
                  class="percent_inp"
                  :default="inputs.fee"
                  @amountUpdated="(e) => updateInput('fee', e)"
                  max="100"
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="indexAllocationSelect" class="main_label"
                  >Index Allocation</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="indexAllocationSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="
                      inputs.index_allocation
                        ? inputs.index_allocation.label
                        : ''
                    "
                    @amountUpdated="(e) => updateInput('index_allocation', e)"
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in indexAllocationOpts"
                    :key="item"
                    :class="`option ${
                      inputs.index_allocation === item ? 'active' : ''
                    }`"
                    @click="updateInput('index_allocation', item)"
                  >
                    <span class="option-text">{{ item.label }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- dumb, but needed to make this line up. switch to BS rows & cols -->
            <div class="col-6 mb-3"></div>
            <div class="col-6 mb-3"></div>
            <div class="col-6 mb-3"></div>
          </div>
        </div>

        <div class="col-6 ps-4">
          <p class="form_section_para">Income Rider Details</p>
          <div class="row mb-3">
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="incomeRiderAccountNameInput" class="main_label"
                  >Account Name</label
                >
              </div>
              <div class="form_section_input_div">
                <input
                  id="incomeRiderAccountNameInput"
                  :value="inputs.income_rider_account_name"
                  @input="
                    (e) =>
                      updateInput('income_rider_account_name', e.target.value)
                  "
                  type="text"
                />
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="incomeStartYearSelect" class="main_label"
                  >Year Income Begins</label
                >
              </div>
              <div class="select-menu accumulation_select_menu">
                <div class="select-btn">
                  <input
                    id="incomeStartYearSelect"
                    class="sBtn-text"
                    readonly="true"
                    type="text"
                    :value="inputs.income_start_year"
                  />
                  <i>
                    <img
                      src="@/assets/images/icons/select-chevron.svg"
                      alt="Chevron"
                    />
                  </i>
                </div>
                <ul class="options">
                  <li
                    v-for="item in incomeRiderIncomeStartYearOpts"
                    :key="item"
                    :class="`option ${
                      inputs.income_start_year === item ? 'active' : ''
                    }`"
                    @click="updateInput('income_start_year', item)"
                  >
                    <span class="option-text">{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="guaranteedIncomeAmountInput" class="main_label"
                  >Guaranteed Income Amount</label
                >
              </div>
              <div class="form_section_input_div">
                <dollar-amount-input
                  id="guaranteedIncomeAmountInput"
                  class="dollar_inp"
                  max="100000000"
                  placeholder="Guaranteed Income Amount"
                  :default="inputs.guaranteed_income"
                  @amountUpdated="(e) => updateInput('guaranteed_income', e)"
                />
                <span class="dollar">$</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="annual-ditribution" class="main_label"
                  >Annual Increase<span class="optional"
                    >(optional)</span
                  ></label
                >
                <div class="label-right-div">
                  <label for="selectPercent" class="label_checkbox">
                    <input
                      type="radio"
                      name="annual-increase"
                      checkBoxAttr="2"
                      id="selectPercent"
                      hidden
                    />
                    <label for="selectPercent"></label>
                    <span>%</span>
                  </label>
                  <label
                    for="selectDollar"
                    class="label_checkbox"
                    data-bs-toggle="modal"
                    data-bs-target="#retirementBufferModal"
                  >
                    <input
                      type="radio"
                      name="annual-increase"
                      checkBoxAttr="1"
                      id="selectDollar"
                      hidden
                      checked
                    />
                    <label for="selectDollar"></label>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="11.6923"
                          height="10"
                          rx="0.5"
                          stroke="black"
                        />
                        <rect
                          x="6.1899"
                          y="2.69772"
                          width="0.317308"
                          height="8.14423"
                          rx="0.158654"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="2.69772"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 2.69772)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="5.23678"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 5.23678)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="7.77584"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 7.77584)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="guaranteedIncomeAnnualIncreaseInput"
                  class="percent_inp"
                  :default="inputs.guaranteed_income_increase"
                  @amountUpdated="
                    (e) => updateInput('guaranteed_income_increase', e)
                  "
                  max="100"
                  placeholder=""
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div">
                <label for="nonguaranteedIncomeAmountInput" class="main_label">
                  Non-guaranteed Amount
                  <span class="optional">(Optional)</span>
                </label>
              </div>
              <div class="form_section_input_div">
                <dollar-amount-input
                  id="nonguaranteedIncomeAmountInput"
                  class="dollar_inp"
                  max="100000000"
                  placeholder="Non-guaranteed Amount"
                  :default="inputs.non_guaranteed_income"
                  @amountUpdated="
                    (e) => updateInput('non_guaranteed_income', e)
                  "
                />
                <span class="dollar">$</span>
              </div>
            </div>
            <div class="col-6 mb-3">
              <div class="form_section_label_div disabled">
                <label for="annual-ditribution" class="main_label"
                  >Annual Increase<span class="optional"
                    >(optional)</span
                  ></label
                >
                <div class="label-right-div">
                  <label for="selectPercent2" class="label_checkbox">
                    <input
                      type="radio"
                      name="annual-increase2"
                      checkBoxAttr="2"
                      id="selectPercent2"
                      hidden
                    />
                    <label for="selectPercent2"></label>
                    <span>%</span>
                  </label>
                  <label for="selectModal" class="label_checkbox">
                    <input
                      type="radio"
                      name="annual-increase2"
                      checkBoxAttr="1"
                      id="selectModal"
                      hidden
                      checked
                    />
                    <label for="selectModal"></label>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="11"
                        viewBox="0 0 13 11"
                        fill="none"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="11.6923"
                          height="10"
                          rx="0.5"
                          stroke="black"
                        />
                        <rect
                          x="6.1899"
                          y="2.69772"
                          width="0.317308"
                          height="8.14423"
                          rx="0.158654"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="2.69772"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 2.69772)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="5.23678"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 5.23678)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                        <rect
                          x="12.5367"
                          y="7.77584"
                          width="0.317308"
                          height="12.375"
                          rx="0.158654"
                          transform="rotate(90 12.5367 7.77584)"
                          stroke="black"
                          stroke-width="0.317308"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div class="form_section_input_div">
                <number-amount-input
                  id="nonguaranteedIncomeAnnualIncreaseInput"
                  class="percent_inp"
                  :default="inputs.non_guaranteed_income_increase"
                  @amountUpdated="
                    (e) => updateInput('non_guaranteed_income_increase', e)
                  "
                  max="100"
                  placeholder=""
                />
                <span class="percent">%</span>
              </div>
            </div>
            <div class="col-6 mb-3"></div>
            <div class="col-6 mb-3"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="retirementBufferModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
        <svg
          width="45"
          height="48"
          viewBox="0 0 45 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 1974" filter="url(#filter0_d_346_5079)">
            <rect
              id="Rectangle 174"
              width="49.4476"
              height="5.7055"
              rx="2.85275"
              transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)"
              fill="#26AB8B"
            ></rect>
            <rect
              id="Rectangle 175"
              width="49.4476"
              height="5.7055"
              rx="2.85275"
              transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)"
              fill="#26AB8B"
            ></rect>
          </g>
          <defs>
            <filter
              id="filter0_d_346_5079"
              x="0.181641"
              y="1.18164"
              width="44.6367"
              height="46.6367"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="6"></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_346_5079"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_346_5079"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </a>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="accumulation_strategy_box">
            <div class="accumulation_strategy_box_head border-0 rounded-0">
              <h2>Increasing Annual Income Schedule</h2>
            </div>
            <div class="income-rider-modal-body">
              <div
                class="nav income-rider-modal-tabs table_top_tab nav-pills"
                role="tablist"
                aria-orientation="vertical"
              >
                <div
                  class="active"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-market"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-market"
                  aria-selected="true"
                >
                  Year by Year
                </div>
                <div
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-buffer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-buffer"
                  aria-selected="false"
                  class=""
                >
                  First and Last Year
                </div>
              </div>
              <p class="para">
                Enter the increasing income schedule from the illustration
              </p>
              <div class="income-rider-table form-group">
                <table
                  class="table tax-rate-table text-center"
                  id="scheduleTaxRateTable"
                >
                  <thead>
                    <tr>
                      <th width="50%">Year</th>
                      <th width="50%">Annual Income Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!---->
                    <tr class="">
                      <td><div class="fs-15">1</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_1"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">2</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_2"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">3</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_3"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">4</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_4"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">5</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_5"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">6</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_6"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">7</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_7"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">8</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_8"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">9</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_9"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">10</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_10"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">11</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_11"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">12</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_12"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">13</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_13"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">14</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_14"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">15</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_15"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">16</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_16"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">17</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_17"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">18</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_18"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">19</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_19"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="">
                      <td><div class="fs-15">20</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_20"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">21</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_21"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">22</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_22"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">23</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_23"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">24</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_24"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">25</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_25"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">26</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_26"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">27</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_27"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">28</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_28"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">29</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_29"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">30</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_30"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">31</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_31"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">32</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_32"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">33</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_33"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">34</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_34"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">35</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_35"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">36</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_36"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">37</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_37"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">38</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_38"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">39</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_39"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">40</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_40"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">41</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_41"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">42</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_42"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">43</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_43"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">44</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_44"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">45</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_45"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">46</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_46"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">47</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_47"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">48</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_48"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">49</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_49"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">50</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_50"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">51</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_51"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">52</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_52"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">53</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_53"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">54</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_54"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">55</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_55"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">56</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_56"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">57</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_57"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">58</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_58"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">59</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_59"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">60</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_60"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">61</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_61"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">62</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_62"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">63</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_63"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">64</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_64"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">65</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_65"
                            min="1"
                            max="99"
                            placeholder=""
                          />
                          <span class="dollar-span">$</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">66</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_66"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">67</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_67"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">68</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_68"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">69</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_69"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">70</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_70"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">71</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_71"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">72</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_72"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">73</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_73"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">74</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_74"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">75</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_75"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">76</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_76"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">77</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_77"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">78</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_78"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">79</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_79"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">80</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_80"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">81</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_81"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">82</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_82"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">83</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_83"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">84</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_84"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">85</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_85"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">86</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_86"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">87</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_87"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">88</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_88"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">89</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_89"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">90</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_90"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">91</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_91"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">92</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_92"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">93</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_93"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">94</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_94"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">95</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_95"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">96</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_96"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">97</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_97"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">98</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_98"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">99</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_99"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-none">
                      <td><div class="fs-15">100</div></td>
                      <td>
                        <div
                          class="p-relative table-input-div percent-input-div"
                        >
                          <input
                            type="number"
                            class="form-control handleLimit"
                            id="schedule_tax_rate_100"
                            min="1"
                            max="99"
                            placeholder=""
                          /><span class="percent-span">%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button class="mb-5 mt-4 run_btn /*disable*/">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Modal -->

<script>
import { range } from "lodash-es";
import { mapState } from "vuex";
import DollarAmountInput from "@/views/retirement-buffer/common-components/DollarAmountInput.vue";
import NumberAmountInput from "@/views/retirement-buffer/common-components/NumberAmountInput.vue";
import CommonTooltipSvg from "@/views/components/common/CommonTooltipSvg.vue";

export default {
  name: "IncomeRiderForm",
  components: {
    CommonTooltipSvg,
    DollarAmountInput,
    NumberAmountInput,
  },
  data() {
    return {
      accountTypeOpts: [
        { label: "Taxable", value: "taxable" },
        { label: "Pre-tax", value: "pre_tax" },
      ],
      indexAllocationOpts: [
        { label: "Equities & Bonds 60/40", value: "equities_and_bonds_60_40" },
        { label: "Equities & Bonds 50/50", value: "equities_and_bonds_50_50" },
        { label: "Equities & Bonds 40/60", value: "equities_and_bonds_40_60" },
        { label: "S&P 500", value: "s_and_p_500" },
      ],
    };
  },
  computed: {
    incomeRiderIncomeStartYearOpts() {
      return this.inputs.current_age && this.inputs.plan_through_age
        ? // we add 2 b/c we want the array to be inclusive of planThroughAge
          range(1, this.inputs.plan_through_age - this.inputs.current_age + 2)
        : [];
    },
    ...mapState({
      inputs: (state) => state.incomeRider.data.inputs,
    }),
  },
  mounted() {
    // FIXME
    // Select Dropdown Start
    let selectBtn = document.querySelectorAll(".select-btn");
    selectBtn.forEach((showHide) => {
      showHide.addEventListener("click", () =>
        showHide.closest(".select-menu").classList.toggle("active")
      );
      var allOptions = showHide
        .closest(".select-menu")
        .querySelector(".options")
        .querySelectorAll(".option");
      allOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
          e.stopPropagation();
          option.parentElement.parentElement.classList.remove("active");
        });
      });
    });

    let dropdowns = document.querySelectorAll(".select-menu");
    dropdowns.forEach((element) => {
      element.addEventListener("click", (e) => {
        dropdowns.forEach((item) => {
          if (item.className.includes("active")) {
            item.classList.remove("active");
          }
        });
        e.target.closest(".select-menu").classList.add("active");
      });
    });

    // Close when click outside
    window.onclick = function (event) {
      if (!event.target.matches(".select-menu")) {
        var sharedowns = document.getElementsByClassName("select-menu");
        var i;
        for (i = 0; i < sharedowns.length; i++) {
          var openSelectdropdown = sharedowns[i];
          if (openSelectdropdown.classList.contains("active")) {
            openSelectdropdown.classList.remove("active");
          }
        }
      }
    };

    var allSelectMenus = document.querySelectorAll(".select-menu");
    allSelectMenus.forEach((eachSelectMenus) => {
      eachSelectMenus.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    });
  },
  methods: {
    updateInput(field, value) {
      let inputs = { ...this.inputs, [field]: value };
      this.$store.dispatch("incomeRider/updateInputs", inputs);
    },
    submit() {
      this.$store.dispatch("loader", true);
      this.$store.dispatch("incomeRider/submit", this.inputs).finally(() => {
        this.$store.dispatch("loader", false);
      });
    },
  },
};
</script>

<style></style>
