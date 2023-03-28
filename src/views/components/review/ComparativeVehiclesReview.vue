<template lang="">
    <div>
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
                                    <router-link to="/comparative-vehicles" class="editbtnCommonAncor">
                                        <button
                                            class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z"  fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
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
                                    <router-link to="/comparative-vehicles" class="editbtnCommonAncor">
                                       <button class="btn editBtnCommon">
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button>
                                    </router-link>
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
                                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.5" y="3.5" width="14" height="14" rx="1" fill="transparent" stroke="#0E6651" stroke-width="2" />
                                                <path d="M16.5389 1.11109C16.1679 0.740094 15.5664 0.740092 15.1954 1.11109L7.33093 8.9756C6.42617 9.88036 6.42617 11.3473 7.33093 12.252C8.23569 13.1568 9.70261 13.1568 10.6074 12.252L18.4719 4.38753C18.8429 4.01653 18.8429 3.41502 18.4719 3.04403L16.5389 1.11109Z" fill="#0E6651" stroke="#0E6651" stroke-width="1.5" />
                                                <path d="M6.5 13.5L7.5 10L9.5 12L6.5 13.5Z" fill="#0E6651" />
                                            </svg>
                                        </button>
                                    </router-link>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>