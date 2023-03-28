<template lang="">
               <div class="container my-5 darkbgClrDiv">
                <div class="summary-heading">
                    <p><span>4 </span>Historical Simulations</p>
                    <router-link to="/historical-simulation" class="editbtnCommonAncor"><button
                            class="btn editBtnCommon">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
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
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25" rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                    </svg></button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Start Year</label>
                                            <p class="Schedule-para" data-bs-toggle="modal" data-bs-target="#exampleModal">Scheduled
                                                <button type="button" class="schedule-icon-btn">
                                                    <svg width="15" height="13"
                                                        viewBox="0 0 15 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"  rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
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
                                            <p class="Schedule-para" data-bs-toggle="modal"  data-bs-target="#exampleModal">Scheduled 
                                                <button type="button"  class="schedule-icon-btn">
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"  rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625" rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)"  stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                    </svg>
                                                </button>
                                            </p>
                                        </div>
                                        <div class="col-md-6 summaryInputsDiv">
                                            <label for="client name">Same in All Years?</label>
                                            <p class="Schedule-para" data-bs-toggle="modal" data-bs-target="#exampleModal">Scheduled 
                                                <button type="button" class="schedule-icon-btn">
                                                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none"  xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.375" y="0.375" width="14.25" height="12.25"  rx="0.625" stroke="#0E6651" stroke-width="0.75" />
                                                        <rect x="7.3125" y="3.1875" width="0.375" height="9.625"  rx="0.1875" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="3.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 3.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="6.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 6.1875)" stroke="#0E6651" stroke-width="0.375" />
                                                        <rect x="14.8125" y="9.1875" width="0.375" height="14.625" rx="0.1875" transform="rotate(90 14.8125 9.1875)" stroke="#0E6651" stroke-width="0.375" />
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
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>