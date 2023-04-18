<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${this.$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${this.$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${this.$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>

      <router-link to="/" class="btn mt-1 ms-1">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn">
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2">New Scenario</h2>
              </div>
            </div>
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="d-flex align-items-center">
                        <label class="historical-paraCheckBox" for="scheduleTemplateCheckbox">Historical Simulations</label>
                        <div class="form-check form-switch custom-switch ms-2">
                          <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked>
                        </div>
                      </div>
                      <div>
                        <p class="hisToprghtpara fs-14">OPTIONAL</p>
                      </div>
                    </div>
                    <div class="after-yes-middle-div my-2">
                      <p class="afterYesMdlPara pb-2">How would you like to build your Index Strategy Allocation?</p>
                      <div class="twoBtnSwtchMainDiv nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div class="active" id="v-pills-scratch-tab" data-bs-toggle="pill" data-bs-target="#v-pills-scratch" type="button" role="tab" aria-controls="v-pills-scratch" aria-selected="true">Create from Scratch</div>
                        <div id="v-pills-indexStrategy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-indexStrategy" type="button" role="tab" aria-controls="v-pills-indexStrategy" aria-selected="false">Use Existing Index Strategy Allocation</div>
                      </div>
                      <div class="tab-content mt-4" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-scratch" role="tabpanel" aria-labelledby="v-pills-scratch-tab">
                          <div class="historical-upload-info d-flex">
                            <div class="me-2 d-flex"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="6.57563" cy="7.14709" rx="6.57563" ry="6.5" fill="#0E6651"/><ellipse cx="6.57609" cy="4.14709" rx="1.01163" ry="1" fill="white"/><rect x="5.81641" y="6.14709" width="1.51745" height="5" rx="0.758726" fill="white"/></svg></div>
                            <p class="fs-12 mb-0">Please upload a bare bones version of the illustration that is accumulation only. Do not include loans, withdrawals, or optional enhancements that require additional fees. Those elements will be added later in the process.</p>
                          </div>

                          <div class="mt-3 pt-2">
                            <div class="form-wrapper-inner px-0 shadow-none">
                              <ul class="nav nav-tabs tax-rate-tabs" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="uploadFromFile-tab" data-bs-toggle="tab" data-bs-target="#uploadFromFile" type="button" role="tab" aria-controls="uploadFromFile" aria-selected="true"><svg class="uploadFromFile" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="8.74609" width="8.5" height="0.5" rx="0.25" stroke="black" stroke-width="0.5"></rect><rect x="8.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 8.75 7.24609)" stroke="black" stroke-width="0.5"></rect><rect x="4.60156" y="1.15043" width="2.5" height="0.5" rx="0.25" transform="rotate(45 4.60156 1.15043)" stroke="black" stroke-width="0.5"></rect><rect x="4.74801" y="1.50586" width="2.5" height="0.5" rx="0.25" transform="rotate(135 4.74801 1.50586)" stroke="black" stroke-width="0.5"></rect><rect x="0.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 0.75 7.24609)" stroke="black" stroke-width="0.5"></rect><rect x="4.75" y="1.24609" width="5.5" height="0.5" rx="0.25" transform="rotate(90 4.75 1.24609)" stroke="black" stroke-width="0.5"></rect></svg> &nbsp;Upload From File </button></li><li class="nav-item" role="presentation"><button class="nav-link" id="copyPaste-tab" data-bs-toggle="tab" data-bs-target="#copyPaste" type="button" role="tab" aria-controls="copyPaste" aria-selected="false"><svg class="copyPaste" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="7" rx="1" fill="black"></rect><rect x="3" y="3" width="7" height="7" rx="1" fill="black" stroke="#EEE"></rect></svg> &nbsp;Copy/Paste </button></li></ul>

                              <div class="tab-content pt-3 mt-1"><div class="tab-pane fade active show" id="uploadFromFile" role="tabpanel" aria-labelledby="uploadFromFile-tab"><!--v-if--><div class="pb-4"><label for="uploading" class="p-relative drag-drop-label d-block text-center p-relative overflow-hidden"><input type="file" accept=".pdf" id="uploading" name="uploading" hidden=""><span><img src="/src/assets/images/icons/table-drag.svg" class="img-fluid" alt="Drag &amp; Drop"></span><h6 class="semi-bold-fw drag-drop-heading mt-1 pt-1"> Drag &amp; Drop </h6><p class="medium-fw fs-12 mb-0 uploadFileTxtPara"> Your files anywhere in this section </p><span class="fs-12 semi-bold-fw grey-clr-3 d-block">or</span><button type="button" class="btn choose-file-btn"> Choose File </button><span class="semi-bold-fw no-file-span d-block">No file chosen</span><div class="pdf-spinner text-center d-none"><div><div class="d-flex justify-content-center"><div class="spinner-border text-secondary" role="status"></div></div><span class="small mt-3 d-inline-block">Please wait while we are extracting your data from the PDF file</span></div></div></label><p class="file-name fs-14 grey-clr-2 medium-fw text-center mt-1 mb-0" id="fileName"></p></div></div><div class="tab-pane fade" id="copyPaste" role="tabpanel" aria-labelledby="copyPaste-tab"><!--v-if--><div class="copy-paste-area"><h6 class="semi-bold-fw drag-drop-heading text-center"> Copy/Paste from CSV </h6><div class="form-group mb-0"><label for="pasteData" class="fs-12 semi-bold-fw">Paste Data Here</label><textarea name="" id="pasteData" cols="30" rows="5" class="form-control"></textarea><!-- <div id="pasteData" cols="30" rows="5" class="form-control"></div>  --></div></div></div></div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-indexStrategy" role="tabpanel"  aria-labelledby="v-pills-indexStrategy-tab">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-8 offset-md-2 strategyAllocation">
                                <form action="javascript:void(0)">
                                  <SelectDropdown :list="portfolio" label="Choose Existing Index Strategy Allocation"  id="historicalIndexPortfolio" class="form-group less pt-3" @inputText="(e) => portfolioName = e"/>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="illustration-data-table-div w-100">
                <h4 class="fs-22 bold-fw mb-3 pb-4">Categorize, Review and Edit Data</h4>
                <div class="illustration-data-wrapper illustrativeTablemainDiv">
                  <div class="floating-btns"><button type="button" class="btn add-table-column-btn">
                  + Add Column</button>
                  <button type="button" class="btn add-table-column-btn">- Delete Column</button>
                  <button type="button" class="btn add-table-column-btn reset-table-btn">Reset Table</button>
                </div>
                <div class="d-flex additional-textarea py-3 d-none">
                  <div class="flex-1"><div class="tab-content mt-1">
                    <div class="tab-pane fade" id="addFromFile" role="tabpanel" aria-labelledby="addFromFile-tab"><!--v-if--><div class=""><label for="uploading2" class="drag-drop-label d-block text-center p-relative overflow-hidden pb-3"><input type="file" accept=".pdf" id="uploading2" name="uploading2" hidden=""><h6 class="semi-bold-fw drag-drop-heading"> Drag &amp; Drop </h6><p class="medium-fw fs-12 mb-0 uploadFileTxtPara"> Your files anywhere in this section </p><span class="fs-12 semi-bold-fw grey-clr-3 d-block">or</span><button type="button" class="btn choose-file-btn"> Choose File </button><span class="semi-bold-fw no-file-span d-block">No file chosen</span><div class="pdf-spinner text-center d-none"><div><div class="d-flex justify-content-center"><div class="spinner-border text-secondary" role="status"></div></div><span class="small mt-3 d-inline-block">Please wait while we are extracting your data from the PDF file</span></div></div></label><p class="file-name fs-14 grey-clr-2 medium-fw text-center m-0 d-none" id="fileName2"></p></div></div><div class="tab-pane fade active show" id="addCopyPaste" role="tabpanel" aria-labelledby="addCopyPaste-tab"><div class="copy-paste-area mb-0 p-1"><div class="form-group mb-0"><textarea style="height: 143.7px;" name="" id="add_new_csv_col" cols="30" rows="5" class="form-control" placeholder="Paste your data here"></textarea></div></div></div></div></div><div class="ps-3 flex-shrink-0"><ul class="nav nav-tabs flex-nowrap tax-rate-tabs" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link py-12 uploadFromFile" id="addFromFile-tab" data-bs-toggle="tab" data-bs-target="#addFromFile" type="button" role="tab" aria-controls="addFromFile" aria-selected="false"><svg class="addFromFile" width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.25" y="8.74609" width="8.5" height="0.5" rx="0.25" stroke="black" stroke-width="0.5"></rect><rect x="8.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 8.75 7.24609)" stroke="black" stroke-width="0.5"></rect><rect x="4.60156" y="1.15043" width="2.5" height="0.5" rx="0.25" transform="rotate(45 4.60156 1.15043)" stroke="black" stroke-width="0.5"></rect><rect x="4.74801" y="1.50586" width="2.5" height="0.5" rx="0.25" transform="rotate(135 4.74801 1.50586)" stroke="black" stroke-width="0.5"></rect><rect x="0.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 0.75 7.24609)" stroke="black" stroke-width="0.5"></rect><rect x="4.75" y="1.24609" width="5.5" height="0.5" rx="0.25" transform="rotate(90 4.75 1.24609)" stroke="black" stroke-width="0.5"></rect></svg> &nbsp;By Uploading File </button></li><li class="nav-item" role="presentation"><button class="nav-link py-12 copyPaste active space-nowrap" id="addCopyPaste-tab" data-bs-toggle="tab" data-bs-target="#addCopyPaste" type="button" role="tab" aria-controls="addCopyPaste" aria-selected="true"><svg class="addCopyPaste" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="7" height="7" rx="1" fill="black"></rect><rect x="3" y="3" width="7" height="7" rx="1" fill="black" stroke="#EEE"></rect></svg> &nbsp;By Pasting Data </button></li></ul><div class="d-flex flex-column mt-2"><button type="button" class="nav-link btn add-data-btn fs-14 active px-3">+ Submit</button><button type="button" class="nav-link btn cancel-add-data-btn fs-14 mt-2 px-4" id="cancelCsvBtn"><img src="/src/assets/images/icons/small-cross.svg" class="img-fuid" alt="Delete" width="10" height="10"> Cancel</button></div></div></div><div class="div-wrapper px-3"><div class="div-wrapper-inner" style="width: 2275px;"></div></div>

                  <div class="table-responsive px-2">
                    <table class="table illustration-data-table mb-0">
                      <tbody>
                        <tr>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput0" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput1" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput2" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput3" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput4" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput5" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput6" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput7" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput8" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput9" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput10" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput11" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        <td>
                        <div class="d-flex flex-column align-items-center px-2">
                        <select name="" id="headerSelectInput12" class="form-select select-option">
                        <option value="0">None</option>
                        <option disabled="" value="1">Age</option>
                        <option disabled="" value="2">Accumulation Value</option>
                        <option disabled="" value="3">Distribution - Loan</option>
                        <option disabled="" value="4">Death Benefit</option>
                        <option value="5">Distribution - Withdrawal</option>
                        <option value="6">Fees</option>
                        <option disabled="" value="7">Premium</option>
                        <option disabled="" value="8">Surrender Value</option>
                        <option disabled="" value="9">Year</option>
                        </select>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c0" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c0">Age</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c1" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c1">Year</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c2" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c2">Accumulation Value</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c3" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c3">Distribution - Loan</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c4" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c4">Death Benefit</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c5" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c5">--</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c6" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c6">Fees</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c7" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c7">Fees</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c8" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c8">Fees</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c9" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c9">Fees</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c10" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c10">Fees</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c11" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c11">Premium</label>
                        </div>
                        </th>
                        <th class="">
                        <div class="d-flex justify-content-center align-items-center">
                        <input id="c12" type="checkbox" class="header-check me-1">
                        <label class="cursor-pointer" for="c12">Surrender Value</label>
                        </div>
                        </th>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">59</div>
                        </td>
                        <td>
                        <div class="text-center">1</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$81252</div>
                        </td>
                        <td>
                        <div class="text-center">$401</div>
                        </td>
                        <td>
                        <div class="text-center">$1823359</div>
                        </td>
                        <td>
                        <div class="text-center">$82751</div>
                        </td>
                        <td>
                        <div class="text-center">$1900</div>
                        </td>
                        <td>
                        <div class="text-center">$1824858</div>
                        </td>
                        <td>
                        <div class="text-center">59</div>
                        </td>
                        <td>
                        <div class="text-center">1</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">60</div>
                        </td>
                        <td>
                        <div class="text-center">2</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$165829</div>
                        </td>
                        <td>
                        <div class="text-center">$86964</div>
                        </td>
                        <td>
                        <div class="text-center">$1907936</div>
                        </td>
                        <td>
                        <div class="text-center">$170374</div>
                        </td>
                        <td>
                        <div class="text-center">$91509</div>
                        </td>
                        <td>
                        <div class="text-center">$1912481</div>
                        </td>
                        <td>
                        <div class="text-center">60</div>
                        </td>
                        <td>
                        <div class="text-center">2</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">61</div>
                        </td>
                        <td>
                        <div class="text-center">3</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$253792</div>
                        </td>
                        <td>
                        <div class="text-center">$176948</div>
                        </td>
                        <td>
                        <div class="text-center">$1995899</div>
                        </td>
                        <td>
                        <div class="text-center">$263099</div>
                        </td>
                        <td>
                        <div class="text-center">$186255</div>
                        </td>
                        <td>
                        <div class="text-center">$2005206</div>
                        </td>
                        <td>
                        <div class="text-center">61</div>
                        </td>
                        <td>
                        <div class="text-center">3</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">62</div>
                        </td>
                        <td>
                        <div class="text-center">4</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$345160</div>
                        </td>
                        <td>
                        <div class="text-center">$270353</div>
                        </td>
                        <td>
                        <div class="text-center">$2087267</div>
                        </td>
                        <td>
                        <div class="text-center">$361120</div>
                        </td>
                        <td>
                        <div class="text-center">$286314</div>
                        </td>
                        <td>
                        <div class="text-center">$2103227</div>
                        </td>
                        <td>
                        <div class="text-center">62</div>
                        </td>
                        <td>
                        <div class="text-center">4</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">63</div>
                        </td>
                        <td>
                        <div class="text-center">5</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$443553</div>
                        </td>
                        <td>
                        <div class="text-center">$370803</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$468401</div>
                        </td>
                        <td>
                        <div class="text-center">$395650</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">63</div>
                        </td>
                        <td>
                        <div class="text-center">5</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">64</div>
                        </td>
                        <td>
                        <div class="text-center">6</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$547180</div>
                        </td>
                        <td>
                        <div class="text-center">$476485</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$583368</div>
                        </td>
                        <td>
                        <div class="text-center">$512673</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">64</div>
                        </td>
                        <td>
                        <div class="text-center">6</div>
                        </td>
                        <td>
                        <div class="text-center">$100000.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">65</div>
                        </td>
                        <td>
                        <div class="text-center">7</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$558969</div>
                        </td>
                        <td>
                        <div class="text-center">$490330</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$607594</div>
                        </td>
                        <td>
                        <div class="text-center">$538955</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">65</div>
                        </td>
                        <td>
                        <div class="text-center">7</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">66</div>
                        </td>
                        <td>
                        <div class="text-center">8</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$570977</div>
                        </td>
                        <td>
                        <div class="text-center">$513783</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$633231</div>
                        </td>
                        <td>
                        <div class="text-center">$576038</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">66</div>
                        </td>
                        <td>
                        <div class="text-center">8</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">67</div>
                        </td>
                        <td>
                        <div class="text-center">9</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$583272</div>
                        </td>
                        <td>
                        <div class="text-center">$537524</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$660456</div>
                        </td>
                        <td>
                        <div class="text-center">$614708</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">67</div>
                        </td>
                        <td>
                        <div class="text-center">9</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">68</div>
                        </td>
                        <td>
                        <div class="text-center">10</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$595909</div>
                        </td>
                        <td>
                        <div class="text-center">$561590</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$689438</div>
                        </td>
                        <td>
                        <div class="text-center">$655119</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">68</div>
                        </td>
                        <td>
                        <div class="text-center">10</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">69</div>
                        </td>
                        <td>
                        <div class="text-center">11</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$608893</div>
                        </td>
                        <td>
                        <div class="text-center">$586019</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">$720314</div>
                        </td>
                        <td>
                        <div class="text-center">$697440</div>
                        </td>
                        <td>
                        <div class="text-center">$1742107</div>
                        </td>
                        <td>
                        <div class="text-center">69</div>
                        </td>
                        <td>
                        <div class="text-center">11</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">70</div>
                        </td>
                        <td>
                        <div class="text-center">12</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$629555</div>
                        </td>
                        <td>
                        <div class="text-center">$618127</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$760629</div>
                        </td>
                        <td>
                        <div class="text-center">$749201</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">70</div>
                        </td>
                        <td>
                        <div class="text-center">12</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">71</div>
                        </td>
                        <td>
                        <div class="text-center">13</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$651323</div>
                        </td>
                        <td>
                        <div class="text-center">$651323</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$804045</div>
                        </td>
                        <td>
                        <div class="text-center">$804045</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">71</div>
                        </td>
                        <td>
                        <div class="text-center">13</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">72</div>
                        </td>
                        <td>
                        <div class="text-center">14</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$674252</div>
                        </td>
                        <td>
                        <div class="text-center">$674252</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$850830</div>
                        </td>
                        <td>
                        <div class="text-center">$850830</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">72</div>
                        </td>
                        <td>
                        <div class="text-center">14</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">73</div>
                        </td>
                        <td>
                        <div class="text-center">15</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$698434</div>
                        </td>
                        <td>
                        <div class="text-center">$698434</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$901304</div>
                        </td>
                        <td>
                        <div class="text-center">$901304</div>
                        </td>
                        <td>
                        <div class="text-center">$1000447</div>
                        </td>
                        <td>
                        <div class="text-center">73</div>
                        </td>
                        <td>
                        <div class="text-center">15</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">74</div>
                        </td>
                        <td>
                        <div class="text-center">16</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$730558</div>
                        </td>
                        <td>
                        <div class="text-center">$730558</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$962677</div>
                        </td>
                        <td>
                        <div class="text-center">$962677</div>
                        </td>
                        <td>
                        <div class="text-center">$1049318</div>
                        </td>
                        <td>
                        <div class="text-center">74</div>
                        </td>
                        <td>
                        <div class="text-center">16</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">75</div>
                        </td>
                        <td>
                        <div class="text-center">17</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$764280</div>
                        </td>
                        <td>
                        <div class="text-center">$764280</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$1028565</div>
                        </td>
                        <td>
                        <div class="text-center">$1028565</div>
                        </td>
                        <td>
                        <div class="text-center">$1100564</div>
                        </td>
                        <td>
                        <div class="text-center">75</div>
                        </td>
                        <td>
                        <div class="text-center">17</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">76</div>
                        </td>
                        <td>
                        <div class="text-center">18</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$799771</div>
                        </td>
                        <td>
                        <div class="text-center">$799771</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$1099171</div>
                        </td>
                        <td>
                        <div class="text-center">$1099171</div>
                        </td>
                        <td>
                        <div class="text-center">$1154130</div>
                        </td>
                        <td>
                        <div class="text-center">76</div>
                        </td>
                        <td>
                        <div class="text-center">18</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">77</div>
                        </td>
                        <td>
                        <div class="text-center">19</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$0</div>
                        </td>
                        <td>
                        <div class="text-center">$837237</div>
                        </td>
                        <td>
                        <div class="text-center">$837237</div>
                        </td>
                        <td>
                        <div class="text-center">$1000000</div>
                        </td>
                        <td>
                        <div class="text-center">$1174502</div>
                        </td>
                        <td>
                        <div class="text-center">$1174502</div>
                        </td>
                        <td>
                        <div class="text-center">$1233227</div>
                        </td>
                        <td>
                        <div class="text-center">77</div>
                        </td>
                        <td>
                        <div class="text-center">19</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">78</div>
                        </td>
                        <td>
                        <div class="text-center">20</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$876943</div>
                        </td>
                        <td>
                        <div class="text-center">$757858</div>
                        </td>
                        <td>
                        <div class="text-center">$880916</div>
                        </td>
                        <td>
                        <div class="text-center">$1254502</div>
                        </td>
                        <td>
                        <div class="text-center">$1135418</div>
                        </td>
                        <td>
                        <div class="text-center">$1198143</div>
                        </td>
                        <td>
                        <div class="text-center">78</div>
                        </td>
                        <td>
                        <div class="text-center">20</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">79</div>
                        </td>
                        <td>
                        <div class="text-center">21</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$919214</div>
                        </td>
                        <td>
                        <div class="text-center">$675092</div>
                        </td>
                        <td>
                        <div class="text-center">$755877</div>
                        </td>
                        <td>
                        <div class="text-center">$1339130</div>
                        </td>
                        <td>
                        <div class="text-center">$1095008</div>
                        </td>
                        <td>
                        <div class="text-center">$1161964</div>
                        </td>
                        <td>
                        <div class="text-center">79</div>
                        </td>
                        <td>
                        <div class="text-center">21</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">80</div>
                        </td>
                        <td>
                        <div class="text-center">22</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$964472</div>
                        </td>
                        <td>
                        <div class="text-center">$589059</div>
                        </td>
                        <td>
                        <div class="text-center">$637282</div>
                        </td>
                        <td>
                        <div class="text-center">$1428622</div>
                        </td>
                        <td>
                        <div class="text-center">$1053209</div>
                        </td>
                        <td>
                        <div class="text-center">$1124640</div>
                        </td>
                        <td>
                        <div class="text-center">80</div>
                        </td>
                        <td>
                        <div class="text-center">22</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">81</div>
                        </td>
                        <td>
                        <div class="text-center">23</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$1012718</div>
                        </td>
                        <td>
                        <div class="text-center">$499450</div>
                        </td>
                        <td>
                        <div class="text-center">$550086</div>
                        </td>
                        <td>
                        <div class="text-center">$1523209</div>
                        </td>
                        <td>
                        <div class="text-center">$1009942</div>
                        </td>
                        <td>
                        <div class="text-center">$1086102</div>
                        </td>
                        <td>
                        <div class="text-center">81</div>
                        </td>
                        <td>
                        <div class="text-center">23</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">82</div>
                        </td>
                        <td>
                        <div class="text-center">24</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$1063142</div>
                        </td>
                        <td>
                        <div class="text-center">$405127</div>
                        </td>
                        <td>
                        <div class="text-center">$458284</div>
                        </td>
                        <td>
                        <div class="text-center">$1623096</div>
                        </td>
                        <td>
                        <div class="text-center">$965081</div>
                        </td>
                        <td>
                        <div class="text-center">$1046235</div>
                        </td>
                        <td>
                        <div class="text-center">82</div>
                        </td>
                        <td>
                        <div class="text-center">24</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        <tr>
                        <td>
                        <div class="text-center">83</div>
                        </td>
                        <td>
                        <div class="text-center">25</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        <td>
                        <div class="text-center">$115944</div>
                        </td>
                        <td>
                        <div class="text-center">$1115794</div>
                        </td>
                        <td>
                        <div class="text-center">$305794</div>
                        </td>
                        <td>
                        <div class="text-center">$361584</div>
                        </td>
                        <td>
                        <div class="text-center">$1728500</div>
                        </td>
                        <td>
                        <div class="text-center">$918500</div>
                        </td>
                        <td>
                        <div class="text-center">$1004925</div>
                        </td>
                        <td>
                        <div class="text-center">83</div>
                        </td>
                        <td>
                        <div class="text-center">25</div>
                        </td>
                        <td>
                        <div class="text-center">$0.00</div>
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </div>
                      </div>

              <div class="text-center mt-30 pt-3">
                <router-link :to="`/historical-simulations/${this.$route.params.scenario}`" class="nav-link btn d-inline-block form-next-btn active fs-14" id="nextBtnVsblOnSlct" @click="handlePortfolio()">Next</router-link>
                <span class="d-block mb-3"></span>
                <router-link :to="`/select-historical-simulations/${this.$route.params.scenario}`" class="nav-link btn form-back-btn fs-14">
                <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { get } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader } from "../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";

export default {
  components: { SelectDropdown },
  data() {
    return {
      portfolio: [],
      portfolioName: "",
    };
  },
  methods: {
    handlePortfolio: function(id) {
      return this.$router.push(
        `/historical-simulations/${
          this.$route.params.scenario
        }?pid=${this.getPortfolioId()}`
      );
    },
    getPortfolioId: function() {
      var temp = this.portfolio.filter(
        i => i.template_name === this.portfolioName
      )[0];
      return temp ? temp.id : null;
    },
    setPortfolioName: function(e) {
      this.portfolioName = e;
    },
  },
  mounted() {
    this.$store.dispatch("loader", true);
    get(getUrl("historical-portfolio"), authHeader())
      .then(response => {
        this.portfolio = response.data.data.map(item => {
          return { id: item.id, template_name: item.portfolio_name };
        });
        this.$store.dispatch("loader", false);
      })
      .catch(error => {
        console.log(error);
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });
  },
};
</script>
