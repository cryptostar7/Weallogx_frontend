<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link to="create-new-scenario" class="nav-link p-0"
            >Scenario Details</router-link
          >
        </li>
        <li class="active">
          <router-link to="illustration-data" class="nav-link p-0"
            >Illustration Data</router-link
          >
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0"
            >Comparative Vehicles</a
          >
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0"
            >Historical Simulations</a
          >
        </li>
      </ul>
      <router-link to="/">
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
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
                <div class="form-group less">
                  <label for="existingInsuranceProfiles" class="fs-14 bold-fw"
                    >Use Existing Insurance Profile</label
                  >
                  <div class="p-relative">
                    <input
                      type="text"
                      id="existingInsuranceProfiles"
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
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">
                  Create From Scratch
                </h4>
                <div class="form-group pt-2 less">
                  <label for="insuranceCompany" class="fs-12 medium-fw"
                    >Insurance Company</label
                  >
                  <input
                    type="text"
                    id="insuranceCompany"
                    class="form-control"
                  />
                </div>
                <div class="form-group less">
                  <label for="insurancePolicyName" class="fs-12 medium-fw"
                    >Insurance Policy Name</label
                  >
                  <input
                    type="text"
                    id="insurancePolicyName"
                    class="form-control"
                  />
                </div>
                <div class="form-group less">
                  <label for="insurancePolicyNickname" class="fs-12 medium-fw"
                    >Insurance Policy Nickname</label
                  >
                  <input
                    type="text"
                    id="insurancePolicyNickname"
                    class="form-control"
                  />
                </div>

                <div class="pb-3">
                  <div
                    class="
                      form-check form-switch
                      custom-switch
                      createSenarioRadioBtn
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="scheduleTemplateCheckbox"
                    />
                    <label
                      class="form-check-label fs-12 semi-bold-fw mb-0"
                      for="scheduleTemplateCheckbox"
                      >Save this Insurance Company Profile</label
                    >
                  </div>

                  <div
                    class="form-group pt-2"
                    id="templateNameDiv"
                    style="display: none"
                  >
                    <label for="templateName" class="fs-12 medium-fw"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      id="templateName"
                      class="form-control"
                      value=""
                    />
                  </div>
                </div>

                <hr class="hr-separator" size="1.25" />

                <div class="form-group">
                  <label for="existingIllustration" class="fs-14 bold-fw"
                    >Use Existing Illustration</label
                  >
                  <div class="p-relative">
                    <input
                      type="text"
                      id="existingIllustration"
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

                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="uploadFromFile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#uploadFromFile"
                      type="button"
                      role="tab"
                      aria-controls="uploadFromFile"
                      aria-selected="true"
                    >
                      <svg
                        class="uploadFromFile"
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.25"
                          y="8.74609"
                          width="8.5"
                          height="0.5"
                          rx="0.25"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="8.75"
                          y="7.24609"
                          width="2"
                          height="0.5"
                          rx="0.25"
                          transform="rotate(90 8.75 7.24609)"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="4.60156"
                          y="1.15043"
                          width="2.5"
                          height="0.5"
                          rx="0.25"
                          transform="rotate(45 4.60156 1.15043)"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="4.74801"
                          y="1.50586"
                          width="2.5"
                          height="0.5"
                          rx="0.25"
                          transform="rotate(135 4.74801 1.50586)"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="0.75"
                          y="7.24609"
                          width="2"
                          height="0.5"
                          rx="0.25"
                          transform="rotate(90 0.75 7.24609)"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="4.75"
                          y="1.24609"
                          width="5.5"
                          height="0.5"
                          rx="0.25"
                          transform="rotate(90 4.75 1.24609)"
                          stroke="black"
                          stroke-width="0.5"
                        />
                      </svg>

                      &nbsp;Upload From File
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="copyPaste-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#copyPaste"
                      type="button"
                      role="tab"
                      aria-controls="copyPaste"
                      aria-selected="false"
                    >
                      <svg
                        class="copyPaste"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="7" height="7" rx="1" fill="black" />
                        <rect
                          x="3"
                          y="3"
                          width="7"
                          height="7"
                          rx="1"
                          fill="black"
                          stroke="#EEEEEE"
                        />
                      </svg>

                      &nbsp;Copy/Paste
                    </button>
                  </li>
                </ul>

                <div class="tab-content pt-3 mt-1">
                  <div
                    class="tab-pane fade show active"
                    id="uploadFromFile"
                    role="tabpanel"
                    aria-labelledby="uploadFromFile-tab"
                  >
                    <div class="pb-4">
                      <label
                        for="uploading"
                        class="drag-drop-label d-block text-center"
                      >
                        <input
                          type="file"
                          id="uploading"
                          name="uploading"
                          hidden
                        />
                        <span
                          ><img
                            src="@/assets/images/icons/table-drag.svg"
                            class="img-fluid"
                            alt="Drag & Drop"
                        /></span>
                        <h6 class="semi-bold-fw drag-drop-heading mt-1 pt-1">
                          Drag & Drop
                        </h6>
                        <p class="medium-fw fs-12 mb-0 uploadFileTxtPara">
                          Your files anywhere in this section
                        </p>
                        <span class="fs-12 semi-bold-fw grey-clr-3 d-block"
                          >or</span
                        >
                        <button type="button" class="btn choose-file-btn">
                          Choose File
                        </button>
                        <span class="semi-bold-fw no-file-span d-block"
                          >No file chosen</span
                        >
                      </label>
                      <p
                        class="
                          file-name
                          fs-14
                          grey-clr-2
                          medium-fw
                          text-center
                          mt-1
                          mb-0
                        "
                        id="fileName"
                      ></p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="copyPaste"
                    role="tabpanel"
                    aria-labelledby="copyPaste-tab"
                  >
                    <div class="copy-paste-area">
                      <h6 class="semi-bold-fw drag-drop-heading text-center">
                        Copy/Paste from CSV
                      </h6>
                      <div class="form-group mb-0">
                        <label for="pasteData" class="fs-12 semi-bold-fw"
                          >Paste Data Here</label
                        >
                        <textarea
                          name=""
                          id="pasteData"
                          cols="30"
                          rows="5"
                          class="form-control"
                        ></textarea>
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
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">Year</option>
                                      <option value="">1990</option>
                                      <option value="">1991</option>
                                      <option value="">1992</option>
                                      <option value="">1993</option>
                                      <option value="">1994</option>
                                      <option value="">1995</option>
                                      <option value="">1996</option>
                                      <option value="">1997</option>
                                      <option value="">1998</option>
                                      <option value="">1999</option>
                                      <option value="">2000</option>
                                      <option value="">2001</option>
                                      <option value="">2002</option>
                                      <option value="">2003</option>
                                      <option value="">2004</option>
                                      <option value="">2005</option>
                                      <option value="">2006</option>
                                      <option value="">2007</option>
                                      <option value="">2008</option>
                                      <option value="">2009</option>
                                      <option value="">2010</option>
                                    </select>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">Age</option>
                                      <option value="">45</option>
                                      <option value="">46</option>
                                      <option value="">47</option>
                                      <option value="">48</option>
                                      <option value="">49</option>
                                      <option value="">50</option>
                                      <option value="">51</option>
                                      <option value="">52</option>
                                      <option value="">53</option>
                                      <option value="">54</option>
                                      <option value="">55</option>
                                      <option value="">56</option>
                                      <option value="">57</option>
                                      <option value="">58</option>
                                      <option value="">59</option>
                                      <option value="">60</option>
                                    </select>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">Premium</option>
                                      <option value="">$ 47,000</option>
                                      <option value="">& 0</option>
                                    </select>
                                  </div>
                                </td>
                                <!-- <td>
                                  <div class="d-flex flex-column align-items-center px-2">
                                    <button class="btn col-delete-btn"><img src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid" alt="Delete"></button>
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Distributions</option>
                                      <option value="">$ 0</option>
                                    </select>
                                  </div>
                                </td> -->
                                <td>
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">
                                        Accumulation Value
                                      </option>
                                      <option value="">$ 0</option>
                                    </select>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">Surrender Value</option>
                                      <option value="">$ 0</option>
                                    </select>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="
                                      d-flex
                                      flex-column
                                      align-items-center
                                      px-2
                                    "
                                  >
                                    <button
                                      class="btn col-delete-btn"
                                      data-bs-toggle="modal"
                                      data-bs-target="#deleteColumnModal"
                                    >
                                      <img
                                        src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid"
                                        alt="Delete"
                                      />
                                    </button>
                                    <select
                                      name=""
                                      id=""
                                      class="form-select select-option"
                                    >
                                      <option value="">Death Benefit</option>
                                      <option value="">$ 448,774</option>
                                      <option value="">$ 488,661</option>
                                      <option value="">$ 530,798</option>
                                      <option value="">$ 536,874</option>
                                      <option value="">$ 552,017</option>
                                      <option value="">$ 565,905</option>
                                      <option value="">$ 574,236</option>
                                    </select>
                                  </div>
                                </td>
                                <!--  <td>
                                  <div class="d-flex flex-column align-items-center px-2">
                                    <button class="btn col-delete-btn"><img src="@/assets/images/icons/delete-grey.svg"
                                        class="img-fuid" alt="Delete"></button>
                                    <select name="" id="" class="form-select select-option">
                                      <option value="">Select</option>
                                      <option value="">Year</option>
                                      <option value="">Age</option>
                                      <option value="">Premium</option>
                                      <option value="">Distributions - Loan</option>
                                      <option value="">Distributions - Withdrawal</option>
                                      <option value="">Accumulation Value</option>
                                      <option value="">Surrender Value</option>
                                      <option value="">Death Benefit</option>
                                      <option value="">Fees</option>
                                    </select>
                                  </div>
                                </td> -->
                                <!-- <td>
                                  <div class="d-flex flex-column align-items-center justify-content-end h-70 px-2"> -->
                                <!-- <button class="btn col-delete-btn" data-bs-toggle="modal" data-bs-target="#deleteColumnModal"><img src="@/assets/images/icons/delete-grey.svg" class="img-fuid" alt="Delete"></button> -->
                                <!--  <select name="" id="" class="form-select select-option">
                                      <option value="">Death Benefit</option>
                                      <option value="">$ 448,774</option>
                                      <option value="">$ 488,661</option>
                                      <option value="">$ 530,798</option>
                                      <option value="">$ 536,874</option>
                                      <option value="">$ 552,017</option>
                                      <option value="">$ 565,905</option>
                                      <option value="">$ 574,236</option>
                                    </select>
                                  </div>
                                </td> -->
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
                                <!-- <th>Distributions</th> -->
                                <th>Accumulation value</th>
                                <th>Surrender Value</th>
                                <th>Dealth Benefit</th>
                                <!-- <th>Total Policy Charges</th> -->
                                <!-- <th>
                                  <div class="d-flex justify-content-center align-items-center">
                                    <div class="dropdown caution-dropdown">
                                      <button class="btn dropdown-toggle no-after" type="button" id="cautionDropdown"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>!</span>
                                      </button>
                                      <div class="dropdown-menu" aria-labelledby="cautionDropdownButton">
                                        <span>Must add Death Benefits Data to Continue</span>
                                      </div>
                                    </div>
                                  </div>
                                </th> -->
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
                                <!--  <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$448,774</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">2</div>
                                </td>
                                <td>
                                  <div class="text-center">69</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$488,661</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">3</div>
                                </td>
                                <td>
                                  <div class="text-center">70</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$530,798</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">4</div>
                                </td>
                                <td>
                                  <div class="text-center">71</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$536,889</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">5</div>
                                </td>
                                <td>
                                  <div class="text-center">72</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$545,148</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">6</div>
                                </td>
                                <td>
                                  <div class="text-center">73</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$552,017</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">7</div>
                                </td>
                                <td>
                                  <div class="text-center">74</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$560,415</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">8</div>
                                </td>
                                <td>
                                  <div class="text-center">75</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$566,806</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">9</div>
                                </td>
                                <td>
                                  <div class="text-center">76</div>
                                </td>
                                <td>
                                  <div class="text-end">$47,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$575,998</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">10</div>
                                </td>
                                <td>
                                  <div class="text-center">77</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!--   <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$598,000</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">11</div>
                                </td>
                                <td>
                                  <div class="text-center">78</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$605,113</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">12</div>
                                </td>
                                <td>
                                  <div class="text-center">79</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$610,221</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">13</div>
                                </td>
                                <td>
                                  <div class="text-center">80</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$614,265</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">14</div>
                                </td>
                                <td>
                                  <div class="text-center">81</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$620,354</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">15</div>
                                </td>
                                <td>
                                  <div class="text-center">82</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$624,557</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">16</div>
                                </td>
                                <td>
                                  <div class="text-center">83</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$632,049</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">17</div>
                                </td>
                                <td>
                                  <div class="text-center">84</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$638,251</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">18</div>
                                </td>
                                <td>
                                  <div class="text-center">85</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!--   <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$642,025</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">19</div>
                                </td>
                                <td>
                                  <div class="text-center">86</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$648,156</div>
                                </td>
                                <!--  <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
                              </tr>
                              <tr>
                                <td>
                                  <div class="text-center">20</div>
                                </td>
                                <td>
                                  <div class="text-center">87</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$0</div>
                                </td> -->
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$0</div>
                                </td>
                                <td>
                                  <div class="text-end">$654,046</div>
                                </td>
                                <!-- <td>
                                  <div class="text-end">$5,000</div>
                                </td> -->
                                <!-- <td></td> -->
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
                <router-link
                  to="comparative-vehicles"
                  class="nav-link btn form-next-btn fs-14 active"
                  disabled="true"
                  >Next</router-link
                >
                <span class="d-block mb-2"></span>
                <router-link
                  to="create-new-scenario"
                  class="nav-link btn form-back-btn fs-14"
                  disabled="true"
                  ><img
                    src="@/assets/images/icons/chevron-left-grey.svg"
                    class="img-fluid"
                    alt="Chevron"
                    width="6"
                  />
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
export default {
  mounted() {
    const templateNameDiv = document.getElementById("templateNameDiv");
    const scheduleTemplateCheckbox = document.getElementById(
      "scheduleTemplateCheckbox"
    );

    scheduleTemplateCheckbox.addEventListener("click", function (e) {
      if (e.target.checked) {
        templateNameDiv.style.display = "block";
      } else {
        templateNameDiv.style.display = "none";
      }
    });

    const clients = [
      "Vehicle One",
      "Vehicle Two",
      "Vehicle Three",
      "Vehicle Four",
      "Vehicle Five",
      "Vehicle Six",
      "Vehicle Seven",
      "Vehicle Eight",
      "Vehicle Nine",
    ];

    const existingIllustrationList = [
      "Illustration One",
      "Illustration Two",
      "Illustration Three",
      "Illustration Four",
      "Illustration Five",
    ];

    // Autocomplete dropdown for Clien List
    function autocomplete(inp, arr) {
      var currentFocus;
      inp.addEventListener("focus", function (e) {
        console.log("focused");
        var a,
          b,
          i,
          val = this.value;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
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
        var a,
          b,
          i,
          val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (
            arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() ||
            arr[i].toUpperCase().includes(val.toUpperCase())
          ) {
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
        if (currentFocus < 0) currentFocus = x.length - 1;
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

    autocomplete(document.getElementById("existingInsuranceProfiles"), clients);
    autocomplete(
      document.getElementById("existingIllustration"),
      existingIllustrationList
    );

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