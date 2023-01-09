<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link>
        </li>
        <li class="active">
          <router-link to="/illustration-data" class="nav-link p-0">Illustration Data</router-link>
        </li>
        <li class=""> <a href="javascript:void(0)" class="nav-link p-0">Comparative Vehicles</a> </li>
        <li class=""> <a href="javascript:void(0)" class="nav-link p-0">Historical Simulations</a> </li>
      </ul>
      <router-link to="/">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" />
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-div">
            <div class="main-form-heading">
              <div class="heading-container">
                <h2 class="fs-34 bold-fw main-tab-heading me-2"> New Scenario </h2>
              </div>
            </div>
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
                <SelectDropdown :list="existingInsuranceList" label="Use Existing Insurance Profile" id="existingInsuranceProfiles" class="form-group less" />
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                <div class="form-group pt-2 less">
                  <label for="insuranceCompany" class="fs-12 medium-fw">Insurance
                    Company</label>
                  <input type="text" id="insuranceCompany" class="form-control" />
                </div>
                <div class="row">                     
                  <div class="col-12 col-md-7">
                    <div class="form-group less"> 
                      <label for="insurancePolicyName" class="fs-12 medium-fw">Insurance
                        Policy Name</label> 
                        <input type="text" id="insurancePolicyName" class="form-control" /> 
                      </div>
                  </div>
                  <div class="col-12 col-md-5">
                    <div class="form-group less"> 
                      <label for="insurancePolicyNickname" class="fs-12 medium-fw">Policy
                        Nickname</label> 
                        <input type="text" id="insurancePolicyNickname" class="form-control" /> 
                      </div>
                  </div>
                </div>
                <div class="pb-3">
                  <div class=" form-check form-switch custom-switch createSenarioRadioBtn "> 
                    <input class="form-check-input" type="checkbox" role="switch" v-model="saveinsuranseTemplate"
                      id="scheduleTemplateCheckbox" /> 
                      <label class="form-check-label fs-12 semi-bold-fw mb-0"
                      for="scheduleTemplateCheckbox">Save this Insurance Company Profile</label> 
                    </div>
                  <div class="form-group pt-2" id="templateNameDiv" :style="{'display': saveinsuranseTemplate ? '' : 'none'}"> 
                    <label for="templateName" class="fs-12 medium-fw">Template Name</label> 
                    <input type="text" id="templateName" class="form-control" value="" /> 
                  </div>
                </div>
                <hr class="hr-separator" size="1.25" />
                <div class="row">
                  <div class="col-12 col-md-7">
                    <div class="form-group less"> 
                      <label for="deathBenifit" class="fs-12 medium-fw">Initial Death Benefit</label> 
                      <input type="number" id="deathBenifit" class="form-control dollarInputs position-relative"> 
                    </div>
                  </div>
                  <div class="col-12 col-md-5">
                    <div class="form-group less"> 
                      <label for="policyReturn" class="fs-12 medium-fw">Policy Return</label> 
                      <input type="number" id="policyReturn" class="form-control percenteInputs">
                    </div>
                  </div>
                </div>
                <SelectDropdown :list="existingIllustrationList" label="Use Existing Illustration"
                  id="existingIllustration" />
                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation"> 
                    <button class="nav-link active" id="uploadFromFile-tab" data-bs-toggle="tab" data-bs-target="#uploadFromFile" type="button" role="tab" aria-controls="uploadFromFile" aria-selected="true"> 
                      <svg class="uploadFromFile" width="9"
                        height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" y="8.74609" width="8.5" height="0.5" rx="0.25" stroke="black"
                          stroke-width="0.5" />
                        <rect x="8.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 8.75 7.24609)"
                          stroke="black" stroke-width="0.5" />
                        <rect x="4.60156" y="1.15043" width="2.5" height="0.5" rx="0.25"
                          transform="rotate(45 4.60156 1.15043)" stroke="black" stroke-width="0.5" />
                        <rect x="4.74801" y="1.50586" width="2.5" height="0.5" rx="0.25"
                          transform="rotate(135 4.74801 1.50586)" stroke="black" stroke-width="0.5" />
                        <rect x="0.75" y="7.24609" width="2" height="0.5" rx="0.25" transform="rotate(90 0.75 7.24609)"
                          stroke="black" stroke-width="0.5" />
                        <rect x="4.75" y="1.24609" width="5.5" height="0.5" rx="0.25"
                          transform="rotate(90 4.75 1.24609)" stroke="black" stroke-width="0.5" />
                      </svg> &nbsp;Upload From File 
                    </button> 
                  </li>
                  <li class="nav-item" role="presentation"> 
                    <button class="nav-link" id="copyPaste-tab" data-bs-toggle="tab" data-bs-target="#copyPaste" type="button" role="tab" aria-controls="copyPaste" aria-selected="false"> 
                      <svg class="copyPaste" width="11" height="11"
                        viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="7" height="7" rx="1" fill="black" />
                        <rect x="3" y="3" width="7" height="7" rx="1" fill="black" stroke="#EEEEEE" />
                      </svg> &nbsp;Copy/Paste 
                    </button> 
                  </li>
                </ul>
                <div class="tab-content pt-3 mt-1">
                  <div class="tab-pane fade show active" id="uploadFromFile" role="tabpanel"
                    aria-labelledby="uploadFromFile-tab">
                    <div class="pb-4"> 
                      <label for="uploading" class="drag-drop-label d-block text-center"> 
                        <input type="file" id="uploading" name="uploading" hidden /> 
                        <span>
                          <img src="@/assets/images/icons/table-drag.svg" class="img-fluid" alt="Drag & Drop" />
                        </span>
                        <h6 class="semi-bold-fw drag-drop-heading mt-1 pt-1"> Drag & Drop </h6>
                        <p class="medium-fw fs-12 mb-0 uploadFileTxtPara"> Your files anywhere in this section </p>
                        <span class="fs-12 semi-bold-fw grey-clr-3 d-block">or</span> 
                        <button type="button" class="btn choose-file-btn"> Choose File </button> 
                        <span class="semi-bold-fw no-file-span d-block">No file chosen</span>
                      </label>
                      <p class=" file-name fs-14 grey-clr-2 medium-fw text-center mt-1 mb-0 " id="fileName"></p>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="copyPaste" role="tabpanel" aria-labelledby="copyPaste-tab">
                    <div class="copy-paste-area">
                      <h6 class="semi-bold-fw drag-drop-heading text-center"> Copy/Paste from CSV </h6>
                      <div class="form-group mb-0"> 
                        <label for="pasteData" class="fs-12 semi-bold-fw">Paste Data Here</label> 
                        <textarea name="" id="pasteData" cols="30" rows="5" class="form-control"></textarea> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="illustration-data-table-div">
                <h4 class="fs-22 bold-fw">Categorize, Review and Edit Data</h4>
                <div class="illustration-data-wrapper illustrativeTablemainDiv">
                  <table class="table illustration-data-table mb-0">
                    <tbody>
                      <tr>
                        <td class="border-0">
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 "> <button
                                      class="btn col-delete-btn" data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"> <img
                                        src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button>
                                    <select name="" id="" class="form-select select-option">
                                      <option value="" selected>Year</option>
                                      <option value="">Age</option>
                                      <option value="">Premium</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Surrender Value</option>
                                      <option value="">Death Benefit</option>
                                    </select> 
                                    </div>
                                </td>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 "> <button
                                      class="btn col-delete-btn" data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"> <img
                                        src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button> 
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Age</option>
                                      <option value="">Year</option>
                                      <option value="">Premium</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Surrender Value</option>
                                      <option value="">Death Benefit</option>
                                    </select> 
                                  </div>
                                </td>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 ">
                                     <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal"> 
                                      <img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button> 
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Premium</option>
                                      <option value="">Year</option>
                                      <option value="">Age</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Surrender Value</option>
                                      <option value="">Death Benefit</option>
                                    </select> 
                                  </div>
                                </td>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 "> 
                                    <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal"> 
                                      <img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button> 
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Accumulation Value</option>
                                      <option value="">Year</option>
                                      <option value="">Age</option>
                                      <option value="">Premium</option>
                                      <option value="">Surrender Value</option>
                                      <option value="">Death Benefit</option>
                                    </select> 
                                  </div>
                                </td>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 "> 
                                    <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal"> 
                                      <img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button> 
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Surrender Value</option>
                                      <option value="">Year</option>
                                      <option value="">Age</option>
                                      <option value="">Premium</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Death Benefit</option>
                                    </select> 
                                  </div>
                                </td>
                                <td>
                                  <div class=" d-flex flex-column align-items-center px-2 "> <button
                                      class="btn col-delete-btn" data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"> <img
                                        src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete" />
                                    </button> 
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Death Benefit</option>
                                      <option value="">Year</option>
                                      <option value="">Age</option>
                                      <option value="">Premium</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Surrender Value</option>
                                    </select> 
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-0">
                          <table class="illustrative-data-table">
                            <thead>
                              <tr>
                                <th>Year</th>
                                <th>Age</th>
                                <th>Premium</th>
                                <th>Accumulation value</th>
                                <th>Surrender Value</th>
                                <th>Dealth Benefit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div class="text-center">1</div>
                                </td>
                                <td>
                                  <div class="text-center">68</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$448,774</div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="text-center mt-30"> 
                <router-link to="/comparative-vehicles" class="nav-link btn form-next-btn fs-14 active" disabled="true">Next</router-link> 
                <span class="d-block mb-2"></span> 
                <router-link to="/create-new-scenario" class="nav-link btn form-back-btn fs-14" disabled="true">
                  <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6" />
                  Back</router-link> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown },
  data() {
    return {
      saveinsuranseTemplate:false,
      existingInsuranceList: [
        {id:1, template_name:"Vehicle One"},
        {id:1, template_name:"Vehicle Two"},
        {id:1, template_name:"Vehicle Three"},
        {id:1, template_name:"Vehicle Four"},
        {id:1, template_name:"Vehicle Five"},
        {id:1, template_name:"Vehicle Six"},
        {id:1, template_name:"Vehicle Seven"},
        {id:1, template_name:"Vehicle Eight"},
        {id:1, template_name:"Vehicle Nine"},
      ],
      existingIllustrationList: [
        {id:1, template_name:"Illustration One"},
        {id:1, template_name:"Illustration Two"},
        {id:1, template_name:"Illustration Three"},
        {id:1, template_name:"Illustration Four"},
        {id:1, template_name:"Illustration Five"},
      ],
    };
  },
  mounted() {
    // Uploading file
    let uploadingInput = document.getElementById("uploading");
    let fileName = document.getElementById("fileName");

    uploadingInput.addEventListener("change", function (e) {
      let file = e.target.files[0];
      fileName.innerText = file.name;
    });
  },
};
</script>
<style lang="">
</style>