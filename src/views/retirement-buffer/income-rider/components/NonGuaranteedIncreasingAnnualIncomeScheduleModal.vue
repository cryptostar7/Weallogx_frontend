<template lang>
  <div
    class="modal fade"
    id="NonGuaranteedIncreasingAnnualIncomeScheduleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <a type="button" data-bs-dismiss="modal" class="preview-modal-close">
      <svg
        width="45"
        height="48"
        viewBox="0 0 45 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1974" filter="url(#filter0_d_346_5079)">
          <rect
            id="Rectangle 174"
            width="49.4476"
            height="5.7055"
            rx="2.85275"
            transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)"
            fill="#26AB8B"></rect>
          <rect
            id="Rectangle 175"
            width="49.4476"
            height="5.7055"
            rx="2.85275"
            transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)"
            fill="#26AB8B"></rect>
        </g>
        <!-- <defs>
          <filter
            id="filter0_d_346_5079"
            x="0.181641"
            y="1.18164"
            width="44.6367"
            height="46.6367"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
            <fecolormatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"></fecolormatrix>
            <feoffset dy="6"></feoffset>
            <fegaussianblur stdDeviation="2"></fegaussianblur>
            <fecomposite in2="hardAlpha" operator="out"></fecomposite>
            <fecolormatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></fecolormatrix>
            <feblend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_346_5079"></feblend>
            <feblend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_346_5079"
              result="shape"></feblend>
          </filter>
        </defs> -->
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
              aria-orientation="vertical">
              <div
                class="active"
                data-bs-toggle="pill"
                data-bs-target="#year-by-year-tab"
                type="button"
                role="tab"
                aria-controls="year-by-year-tab"
                aria-selected="true">
                Year by Year
              </div>
              <div
                data-bs-toggle="pill"
                data-bs-target="#first-and-last-year-tab"
                type="button"
                role="tab"
                aria-controls="first-and-last-year-tab"
                aria-selected="false"
                class>
                First and Last Year
              </div>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="year-by-year-tab"
                role="tabpanel"
                aria-labelledby="year-by-year-tab">
                <p class="para">Enter the increasing income schedule from the
                  illustration</p>
                <div class="income-rider-table form-group">

                  <table
                    class="table tax-rate-table text-center"
                    id="scheduleTaxRateTable">
                    <thead>
                      <tr>
                        <th width="50%">Year</th>
                        <th width="50%">Annual Income Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!---->
                      <tr class>
                        <td><div class="fs-15">1</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_1"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">2</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_2"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">3</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_3"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">4</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_4"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">5</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_5"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">6</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_6"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">7</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_7"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">8</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_8"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">9</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_9"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">10</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_10"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">11</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_11"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">12</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_12"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">13</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_13"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">14</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_14"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">15</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_15"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">16</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_16"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">17</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_17"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">18</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_18"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">19</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_19"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr class>
                        <td><div class="fs-15">20</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_20"
                              min="1"
                              max="99"
                              placeholder />
                            <span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="first-and-last-year-tab"
                role="tabpanel"
                aria-labelledby="first-and-last-year-tab">
                <p class="para">Enter the first and last year’s income values
                  from
                  the illustration</p>
                <div class="income-rider-table form-group">
                  <table
                    class="table tax-rate-table text-center"
                    id="scheduleTaxRateTable">
                    <thead>
                      <tr>
                        <th width="50%">Year</th>
                        <th width="50%">Annual Income Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!---->

                      <tr>
                        <td><div class="fs-15">First Year</div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_100"
                              min="1"
                              max="99"
                              placeholder /><span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td><div
                            class="fs-15 form_section_label_div justify-content-center">Last
                            Year
                            <label for="premium-bonus"
                              class="main_label"><span><svg
                                  class="label-common-tooltip-svg" width="13"
                                  height="13" viewBox="0 0 13 13" fill="none"
                                  xmlns="http://www.w3.org/2000/svg"><g
                                    id="Group 1968"><circle id="Ellipse 190"
                                      cx="6.5" cy="6.5" r="6.5"
                                      fill="#D0D0D0"></circle><circle
                                      id="Ellipse 191" cx="6.5" cy="3.5" r="1"
                                      fill="white"></circle><rect
                                      id="Rectangle 753" x="5.75" y="5.5"
                                      width="1.5" height="5" rx="0.75"
                                      fill="white"></rect></g></svg><span
                                  class="text-start"> This should be the value
                                  for
                                  the “Plan Through Age” you defined earlier.
                                  For
                                  example, if you entered “95”, you would put
                                  the
                                  income value at age 95 from the illustration
                                  here.</span></span></label>

                          </div></td>
                        <td>
                          <div
                            class="p-relative table-input-div percent-input-div">
                            <input
                              type="number"
                              class="form-control handleLimit"
                              id="schedule_tax_rate_100"
                              min="1"
                              max="99"
                              placeholder /><span class="dollar-span">$</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <button class="mb-5 mt-4 run_btn /*disable*/">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang>
    
</style>