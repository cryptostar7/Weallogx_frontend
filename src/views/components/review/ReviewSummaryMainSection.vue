<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
      <section>
        <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
            <ul class="mt-1 review-progress" id="reviewProgress">
              <li class="done"><router-link to="/scenario-details" class="nav-link p-0">Scenario Details</router-link></li>
              <li class="done"><router-link to="/illustration-data" class="nav-link p-0">Illustration Data</router-link></li>
              <li class="done"><router-link to="/comparative-vehicles" class="nav-link p-0">Comparative Vehicles</router-link></li>
              <li class="done"><router-link to="/select-historical-simulations" class="nav-link p-0">Historical Simulations</router-link></li>
            </ul>
            <router-link to="/">
              <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn">
            </router-link>
          </div>


        <div class="commonBgColor mt-5 py-2">

            <div class="summaryMainDiv py-4">
                <div>
                    <h5>NEW SCENARIO</h5>
                    <p>Summary</p>
                    <div class="d-flex justify-content-center">
                        <p class="summarySmallBorder"></p>
                    </div>
                </div>
            </div>
            <!-- Scenario Details start -->
            <div class="container my-5 darkbgClrDiv">
                <div class="summary-heading">
                    <p><span>1 </span>Scenario Details</p>
                    <router-link to="/scenario-details" class="editbtnCommonAncor"><button class="btn editBtnCommon">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651"
                                    stroke-width="2" />
                                <path
                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                            </svg>
                        </button></router-link>
                </div>
                <div class="container-fluid summary-editBox py-4">
                    <form action="">
                        <div class="row">
                            <div class="col-md-6 px-0">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4 summaryInputsDiv">
                                            <label for="client name">Client Name</label>
                                            <input type="text" class="form-control" value="Bryant, Rogers" readonly>
                                        </div>
                                        <div class="col-md-4 summaryInputsDiv">
                                            <label for="client name">Client Age</label>
                                            <input type="text" class="form-control" value="68" readonly>
                                        </div>
                                        <div class="col-md-4 summaryInputsDiv">
                                            <label for="client name">Years to Illustrate</label>
                                            <input type="text" class="form-control" value="35" readonly>
                                        </div>
                                        <div class="col-md-4 summaryInputsDiv">
                                            <label for="client name">Scenario Name</label>
                                            <input type="text" class="form-control" value="Allianz Parse" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="ScenarioLeft">
                                    <div class="row SimpleSchdlTaxRate nav nav-tabs" id="myTab" role="tablist">
                                        <div class="col-md-6 px-4 py-2 d-flex align-items-center commonTabactive active"
                                            id="simple-tab" data-bs-toggle="tab" data-bs-target="#simple" type="button"
                                            role="tab" aria-controls="simple" aria-selected="true">
                                            <input type="checkbox" class="summaryCheckBox" disabled checked>
                                            <span class="ms-2">Simple Tax Rate</span>
                                        </div>
                                        <div class="col-md-6 px-3 py-2 d-flex align-items-center commonTabactive"
                                            id="schedule-tab" data-bs-toggle="tab" data-bs-target="#schedule"
                                            type="button" role="tab" aria-controls="schedule" aria-selected="false">
                                            <input type="checkbox" class="summaryCheckBox" disabled checked>
                                            <span class="ms-2">Scheduled Tax Rate</span>
                                        </div>
                                    </div>
                                    <div class="tab-content scenarioTabMainDiv">
                                        <div class="row px-4 pt-3 tab-pane active" id="simple" role="tabpanel"
                                            aria-labelledby="simple-tab">
                                            <div class="col-12">
                                                <div class="row">
                                                    <div class="col-md-4 summaryInputsDiv">
                                                        <label for="client name">First Tax Rate %</label>
                                                        <input type="text" class="form-control" value="27%" readonly>
                                                    </div>
                                                    <div class="col-md-4 summaryInputsDiv">
                                                        <label for="client name">Second Tax Rate %</label>
                                                        <input type="text" class="form-control" value="35%" readonly>
                                                    </div>
                                                    <div class="col-md-4 summaryInputsDiv">
                                                        <label for="client name">Second Tax Rate Year</label>
                                                        <input type="text" class="form-control" value="10" readonly>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--  -->
                                        <div class="row px-4 pt-3 tab-pane" id="schedule" role="tabpanel"
                                            aria-labelledby="schedule-tab">
                                            <div class="col-12">...</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Scenario Details end -->

            <!-- Illustration Data start -->
            <div class="container my-5 darkbgClrDiv">
                <div class="summary-heading">
                    <p><span>2 </span>Illustration Data</p>
                    <router-link to="/illustration-data" class="editbtnCommonAncor"><button class="btn editBtnCommon">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651"
                                    stroke-width="2" />
                                <path
                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                            </svg>
                        </button></router-link>
                </div>
                <div class="container-fluid summary-editBox py-4">
                    <form action="">
                        <div class="row">
                            <div class="col-md-2 summaryInputsDiv">
                                <label for="client name">Insurance Company</label>
                                <input type="text" class="form-control" value="Allianz" readonly>
                            </div>
                            <div class="col-md-2 summaryInputsDiv">
                                <label for="client name">Insurance Policy Name</label>
                                <input type="text" class="form-control" value="Life Insurance Retirement Plan" readonly>
                            </div>
                            <div class="col-md-2 summaryInputsDiv">
                                <label for="client name">Policy Nickname</label>
                                <input type="text" class="form-control" value="LIRP" readonly>
                            </div>
                            <div class="col-md-2 summaryInputsDiv">
                                <label for="client name">Illustration Return</label>
                                <input type="text" class="form-control" value="6.15%" readonly>
                            </div>
                            <div class="col-md-2 summaryInputsDiv">
                                <label for="client name">Initial Death Benefit</label>
                                <input type="text" class="form-control" value="$750,000" readonly>
                            </div>
                            <div class="col-md-2 illustrationPdfCol">
                                <a href="javascript:void(0)" class="illustrationPdfAncor"><button
                                        class="illustrationPdfDiv btn">
                                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.75" y="0.75" width="16.5" height="19.5" rx="1.25" fill="white"
                                                stroke="#0E6651" stroke-width="1.5" />
                                            <rect x="3.375" y="9.375" width="10.25" height="0.75" rx="0.375"
                                                fill="white" stroke="#0E6651" stroke-width="0.75" />
                                            <rect x="3.375" y="15.375" width="11.25" height="0.75" rx="0.375"
                                                fill="white" stroke="#0E6651" stroke-width="0.75" />
                                            <rect x="3.375" y="12.375" width="7.25" height="0.75" rx="0.375"
                                                fill="white" stroke="#0E6651" stroke-width="0.75" />
                                            <rect x="3.375" y="5.375" width="6.25" height="0.75" rx="0.375" fill="white"
                                                stroke="#0E6651" stroke-width="0.75" />
                                        </svg>

                                        &nbsp;<span>PDF Illustration</span>
                                    </button></a>
                            </div>
                        </div>
                    </form>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 offset-md-2 illusnTableMainDiv">

                                <table class="table">
                                    <thead>
                                        <th>Year</th>
                                        <th>Age</th>
                                        <th>Premium</th>
                                        <th>Distributions</th>
                                        <th>Accumulation Value</th>
                                        <th>Surrender Value</th>
                                        <th>Death Benefit</th>
                                        <th>Total Policy Charges</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Year">1</td>
                                            <td data-label="Age">34</td>
                                            <td data-label="Premium">$47,000</td>
                                            <td data-label="Distributions">$0</td>
                                            <td data-label="Accumulation Value">$0</td>
                                            <td data-label="Surrender Value">$0</td>
                                            <td data-label="Death Benefit">$448,774</td>
                                            <td data-label="Total Policy Charges">$5,000</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Year">1</td>
                                            <td data-label="Age">34</td>
                                            <td data-label="Premium">$47,000</td>
                                            <td data-label="Distributions">$0</td>
                                            <td data-label="Accumulation Value">$0</td>
                                            <td data-label="Surrender Value">$0</td>
                                            <td data-label="Death Benefit">$448,774</td>
                                            <td data-label="Total Policy Charges">$5,000</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Year">1</td>
                                            <td data-label="Age">34</td>
                                            <td data-label="Premium">$47,000</td>
                                            <td data-label="Distributions">$0</td>
                                            <td data-label="Accumulation Value">$0</td>
                                            <td data-label="Surrender Value">$0</td>
                                            <td data-label="Death Benefit">$448,774</td>
                                            <td data-label="Total Policy Charges">$5,000</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Year">1</td>
                                            <td data-label="Age">34</td>
                                            <td data-label="Premium">$47,000</td>
                                            <td data-label="Distributions">$0</td>
                                            <td data-label="Accumulation Value">$0</td>
                                            <td data-label="Surrender Value">$0</td>
                                            <td data-label="Death Benefit">$448,774</td>
                                            <td data-label="Total Policy Charges">$5,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <button class="btn form-control">+ SEE ALL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Illustration Data end -->

            <!-- Comparative Vehicles start -->
            <div class="container my-5 darkbgClrDiv">
                <div class="summary-heading">
                    <p><span>3 </span>Comparative Vehicles</p>
                    <router-link to="/comparative-vehicles" class="editbtnCommonAncor"><button class="btn editBtnCommon">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651"
                                    stroke-width="2" />
                                <path
                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                            </svg>
                        </button>
                    </router-link>
                </div>
                <div class="container-fluid summary-editBox py-4">
                    <form action="">

                        <div class="row">
                            <div class="col-md-4 ">
                                <div class="compVehcleCol">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="compVehcleColPara">Vehicle #1</p>
                                            <p class="compVehcleBorder"></p>
                                        </div>
                                        <router-link to="/comparative-vehicles" class="editbtnCommonAncor"><button
                                                class="btn editBtnCommon">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.5" y="3.5" width="14" height="14" rx="1"
                                                        fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                    <path
                                                        d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                        fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                    <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                                </svg>
                                            </button></router-link>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Type</label>
                                            <input type="text" class="form-control" value="Taxable" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Name</label>
                                            <input type="text" class="form-control" value="Mutual Funds" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rate of Return</label>
                                            <input type="text" class="form-control" value="10%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Fee</label>
                                            <input type="text" class="form-control" value="1%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Capital Gains?</label>
                                            <input type="text" class="form-control" value="50%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Capital Gains Tax Rate</label>
                                            <input type="text" class="form-control" value="50%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">% Portfolio Applied
                                                to Capital Gains</label>
                                            <input type="text" class="form-control" value="50%" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="compVehcleCol">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="compVehcleColPara">Vehicle #2</p>
                                            <p class="compVehcleBorder"></p>
                                        </div>
                                        <router-link to="/comparative-vehicles" class="editbtnCommonAncor"><button
                                                class="btn editBtnCommon">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.5" y="3.5" width="14" height="14" rx="1"
                                                        fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                    <path
                                                        d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                        fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                    <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                                </svg>
                                            </button></router-link>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Type</label>
                                            <input type="text" class="form-control" value="Tax-Deferred" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Name</label>
                                            <input type="text" class="form-control" value="Annuity" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rate of Return</label>
                                            <input type="text" class="form-control" value="10%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Fee</label>
                                            <input type="text" class="form-control" value="2%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Capital Gains?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ">
                                <div class="compVehcleCol">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p class="compVehcleColPara">Vehicle #3</p>
                                            <p class="compVehcleBorder"></p>
                                        </div>
                                        <router-link to="/comparative-vehicles" class="editbtnCommonAncor"><button
                                                class="btn editBtnCommon">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.5" y="3.5" width="14" height="14" rx="1"
                                                        fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                    <path
                                                        d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                        fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                    <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                                </svg>
                                            </button></router-link>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Type</label>
                                            <input type="text" class="form-control" value="Pre-Tax" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Vehicle Name</label>
                                            <input type="text" class="form-control" value="401K" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rate of Return</label>
                                            <input type="text" class="form-control" value="10%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Fee</label>
                                            <input type="text" class="form-control" value="2%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Pre 59 1/2 Penalty?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Comparative Vehicles end -->

            <!-- Historical Vehicles start -->
            <div class="container my-5 darkbgClrDiv">
                <div class="summary-heading">
                    <p><span>4 </span>Historical Simulations</p>
                    <router-link to="/historical-simulation" class="editbtnCommonAncor"><button
                            class="btn editBtnCommon">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651"
                                    stroke-width="2" />
                                <path
                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                            </svg>
                        </button></router-link>
                </div>
                <div class="container-fluid summary-editBox py-4">
                    <div class="row">
                        <div class="col-md-4 ">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Index Strategy #1</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link to="/historical-simulations"
                                        class="editbtnCommonAncor"><button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent"
                                                    stroke="#0E6651" stroke-width="2" />
                                                <path
                                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button></router-link>
                                </div>
                                <div class="historyHead2">
                                    <p>Analysis Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Index</label>
                                            <input type="text" class="form-control" value="S&P 500" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rolling Time Period</label>
                                            <input type="text" class="form-control" value="30" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Analyze</label>
                                            <input type="text" class="form-control" value="Index" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Credit Base Method</label>
                                            <input type="text" class="form-control" value="avarage" readonly>
                                        </div>
                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Growth Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Cap</label>
                                            <input type="text" class="form-control" value="12%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Floor</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Margin/Spread</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Participation</label>
                                            <input type="text" class="form-control" value="100%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Segment Duration</label>
                                            <input type="text" class="form-control" value="1 Year" readonly>
                                        </div>
                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Enhancements</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>

                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Fees</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Premium Charge</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Loan Interest Rate</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Mulitiplier Fee</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Flat Credit/Bonus Fee</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">High Cap Fee</label>
                                            <input type="text" class="form-control" value="0%">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Index Strategy #2</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link to="/historical-simulations"
                                        class="editbtnCommonAncor"><button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent"
                                                    stroke="#0E6651" stroke-width="2" />
                                                <path
                                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button></router-link>
                                </div>
                                <div class="historyHead2">
                                    <p>Analysis Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Index</label>
                                            <input type="text" class="form-control" value="Blended" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rolling Time Period</label>
                                            <input type="text" class="form-control" value="30" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Analyze</label>
                                            <input type="text" class="form-control" value="Index" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Credit Base Method</label>
                                            <input type="text" class="form-control" value="Average" readonly>
                                        </div>
                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Growth Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Cap</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Floor</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Margin/Spread</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Participation</label>
                                            <input type="text" class="form-control" value="140%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Segment Duration</label>
                                            <input type="text" class="form-control" value="1 Year" readonly>
                                        </div>

                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Enhancements</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <input type="text" class="form-control" value="Taxable" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Start Year</label>
                                            <input type="text" class="form-control" value="1" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Flat Credit/Bonus</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Start Year</label>
                                            <input type="text" class="form-control NAData" value="N/A" readonly>
                                        </div>

                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Fees</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Premium Charge</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Loan Interest Rate</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Mulitiplier Fee</label>
                                            <input type="text" class="form-control" value="1%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Flat Credit/Bonus Fee</label>
                                            <input type="text" class="form-control NAData" value="NA" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control NAData" value="NA" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">High Cap Fee</label>
                                            <input type="text" class="form-control NAData" value="0%" readonly>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 ">
                            <div class="compVehcleCol">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p class="compVehcleColPara">Index Strategy #3</p>
                                        <p class="compVehcleBorder"></p>
                                    </div>
                                    <router-link to="/historical-simulations"
                                        class="editbtnCommonAncor"><button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent"
                                                    stroke="#0E6651" stroke-width="2" />
                                                <path
                                                    d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"
                                                    fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button></router-link>
                                </div>
                                <div class="historyHead2">
                                    <p>Analysis Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Index</label>
                                            <input type="text" class="form-control" value="Blended" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Rolling Time Period</label>
                                            <input type="text" class="form-control" value="30" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Analyze</label>
                                            <input type="text" class="form-control" value="Index" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Credit Base Method</label>
                                            <input type="text" class="form-control" value="Average" readonly>
                                        </div>
                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Growth Parameters</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Cap</label>
                                            <input type="text" class="form-control" value="14.25%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Floor</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Margin/Spread</label>
                                            <input type="text" class="form-control" value="0%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Participation</label>
                                            <input type="text" class="form-control" value="100%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Segment Duration</label>
                                            <input type="text" class="form-control" value="1 Year" readonly>
                                        </div>
                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Enhancements</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Multiplier</label>
                                            <p class="Schedule-para" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Scheduled <button type="button"
                                                    class="schedule-icon-btn"><svg width="15" height="13"
                                                        viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"
                                                            rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625"
                                                            rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 3.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 6.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 9.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                    </svg></button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Start Year</label>
                                            <p class="Schedule-para" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Scheduled <button type="button"
                                                    class="schedule-icon-btn"><svg width="15" height="13"
                                                        viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"
                                                            rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625"
                                                            rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 3.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 6.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 9.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                    </svg>
                                                </button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Flat Credit/Bonus</label>
                                            <input type="text" class="form-control" value="1.65" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Start Year</label>
                                            <input type="text" class="form-control" value="11" readonly>
                                        </div>

                                    </div>
                                </form>
                                <div class="historyHead2">
                                    <p>Fees</p>
                                    <p class="hisBorder"></p>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Premium Charge</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Loan Interest Rate</label>
                                            <input type="text" class="form-control" value="5%" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Performance Mulitiplier Fee</label>
                                            <p class="Schedule-para" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Scheduled <button type="button"
                                                    class="schedule-icon-btn"><svg width="15" height="13"
                                                        viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"
                                                            rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625"
                                                            rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 3.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 6.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 9.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                    </svg></button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <p class="Schedule-para" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Scheduled <button type="button"
                                                    class="schedule-icon-btn">
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"
                                                            rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625"
                                                            rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 3.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 6.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625"
                                                            rx="0.1875" transform="rotate(90 14.8125 9.1875)"
                                                            stroke="#0E6651" stroke-width="0.375" />
                                                    </svg>

                                                </button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Flat Credit/Bonus Fee</label>
                                            <input type="text" class="form-control" value="0" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <input type="text" class="form-control" value="Yes" readonly>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">High Cap Fee</label>
                                            <input type="text" class="form-control" value="0.8%">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="SaveCloseButton">
                <router-link to="/index" class="btn">Save & Close</router-link>
            </div>
            <div class="BuildSaveCloseButton">
                <router-link to="/report-builder" class="btn">Save & Build Report</router-link>
            </div>
            <!-- Historical Vehicles end -->
        </div>


    </section>
</template>
<script>
export default {
    components:{RouterLink},
}
</script>
