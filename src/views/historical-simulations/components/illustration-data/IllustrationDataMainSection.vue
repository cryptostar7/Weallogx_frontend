<template>
  <section
    class="main-section"
    id="main-section-element"
    :style="{ 'scroll-padding-top': '100px' }"
  >
    <historical-simulation-steps :currentStep="2" />

    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <form
            class="main-form-div"
            @submit="submitHandler"
            autocomplete="off"
          >
            <historical-simulation-label-component />
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
                <SelectDropdown
                  :list="existingInsuranceList"
                  :error="errors.existing_insurance_profile"
                  @clearError="
                    () => (errors.existing_insurance_profile = false)
                  "
                  @onSelectItem="setExistingInsuranceProfileId"
                  @inputText="setExistingInsuranceProfileName"
                  :clearInput="insuranceTemplateInput"
                  @setClearedInput="() => (insuranceTemplateInput = 0)"
                  label="Use Existing Insurance Company Profile"
                  id="existingInsuranceProfiles"
                  class="form-group less"
                />
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
                    v-model="insuranceCompany"
                    @keyup="() => clearError('insurance_company')"
                  />
                  <small class="text-danger" v-if="errors.insurance_company">{{
                    errors.insurance_company[0]
                  }}</small>
                </div>
                <!-- New -->
                <div class="row">
                  <div class="col-12">
                    <div class="form-group less">
                      <label for="insurancePolicyName" class="fs-12 medium-fw"
                        >Insurance Policy Name</label
                      ><input
                        type="text"
                        id="insurancePolicyName"
                        class="form-control"
                        v-model="insurancePolicyName"
                        @keyup="() => clearError('insurance_policy_name')"
                      />
                      <small
                        class="text-danger"
                        v-if="errors.insurance_policy_name"
                        >{{ errors.insurance_policy_name[0] }}</small
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group less">
                      <label
                        for="insurancePolicyNickname"
                        class="fs-12 medium-fw"
                        >Insurance Policy Nickname</label
                      ><input
                        type="text"
                        id="insurancePolicyNickname"
                        class="form-control"
                        v-model="PolicyNickname"
                        @keyup="() => clearError('policy_nickname')"
                      />
                      <small
                        class="text-danger"
                        v-if="errors.policy_nickname"
                        >{{ errors.policy_nickname[0] }}</small
                      >
                    </div>
                  </div>
                </div>

                <div class="pb-3">
                  <div
                    class="form-check form-switch custom-switch createSenarioRadioBtn"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      :disabled="existingInsuranceProfileName ? true : false"
                      v-model="saveInsuranceTemplate"
                      id="scheduleTemplateCheckbox"
                    />
                    <label
                      class="form-check-label fs-12 semi-bold-fw mb-0"
                      for="scheduleTemplateCheckbox"
                      >Save this Insurance Company Profile</label
                    >
                  </div>
                  <div
                    class="form-group mb-2 pt-2"
                    id="templateNameDiv"
                    :style="{ display: saveInsuranceTemplate ? '' : 'none' }"
                  >
                    <label for="templateName" class="fs-12 medium-fw"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      id="templateName"
                      class="form-control"
                      :disabled="existingInsuranceProfileName ? true : false"
                      v-model="insuranceTemplateName"
                      @keyup="() => clearError('insurance_template_name')"
                    />
                    <small
                      class="text-danger"
                      v-if="errors.insurance_template_name"
                      >{{ errors.insurance_template_name[0] }}</small
                    >
                  </div>
                </div>
                <hr class="hr-separator mt-2 mb-3" size="1.25" />
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label
                        for="simulationDeathBenefit"
                        class="fs-12 medium-fw"
                        >Initial Death Benefit</label
                      >
                      <input
                        type="text"
                        id="simulationDeathBenefit"
                        class="form-control dollarInputs position-relative handleLimit"
                        min="1"
                        max="999999999"
                        @keyup="() => clearError('initial_death_benifit')"
                      />
                      <small
                        class="text-danger"
                        v-if="errors.initial_death_benifit"
                        >{{ errors.initial_death_benifit[0] }}</small
                      >
                    </div>
                  </div>
                  <div class="form-group-wrapper">
                    <div class="form-group">
                      <label
                        for="simulationPolicyReturn"
                        class="fs-12 medium-fw"
                        >Initial Policy Return</label
                      >
                      <input
                        type="text"
                        id="simulationPolicyReturn"
                        class="form-control percenteInputs handleLimit2"
                        min="0"
                        max="99"
                        @keyup="() => clearError('policy_return')"
                      />
                      <small class="text-danger" v-if="errors.policy_return">{{
                        errors.policy_return[0]
                      }}</small>
                    </div>
                    <div class="form-group">
                      <label
                        for="simulationPolicyReturn2"
                        class="fs-12 medium-fw"
                        >Second Policy Return</label
                      >
                      <input
                        type="text"
                        id="simulationPolicyReturn2"
                        class="form-control percenteInputs handleLimit2"
                        min="0"
                        max="99"
                        @keyup="() => clearError('policy_return2')"
                      />
                      <small
                        class="text-danger"
                        v-if="errors.policy_return"
                      ></small>
                    </div>
                    <div class="form-group">
                      <label for="secondTaxRateYear" class="fs-12 medium-fw"
                        >Change Year</label
                      >
                      <select
                        name=""
                        id="changeTaxYear2"
                        class="form-select form-control"
                      >
                        <option value=""></option>
                        <option
                          v-if="Number(illustrateYear)"
                          v-for="(item, index) in Number(
                            Number(illustrateYear).toFixed(0)
                          )"
                          :key="index"
                          :value="item"
                        >
                          {{ item }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <SelectDropdown
                  :list="existingIllustrationList"
                  :error="errors.existing_illustration"
                  @clearError="() => (errors.existing_illustration = false)"
                  @onSelectItem="setExistingIllustrationId"
                  @inputText="setExistingIllustrationName"
                  :clearInput="illustrationTemplateInput"
                  @setClearedInput="() => (illustrationTemplateInput = 0)"
                  label="Use Existing Illustration"
                  id="existingIllustration"
                />
                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      :class="`nav-link ${uploadFromFile ? 'active' : ''}`"
                      id="uploadFromFile-tab"
                      @click="() => (uploadFromFile = true)"
                      data-bs-toggle="tab"
                      data-bs-target="#uploadFromFile"
                      type="button"
                      role="tab"
                      aria-controls="uploadFromFile"
                      :aria-selected="uploadFromFile ? true : false"
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
                  <li
                    class="nav-item"
                    role="presentation"
                    @click="() => (uploadFromFile = false)"
                  >
                    <button
                      :class="`nav-link ${uploadFromFile ? '' : 'active'}`"
                      id="copyPaste-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#copyPaste"
                      type="button"
                      role="tab"
                      aria-controls="copyPaste"
                      :aria-selected="uploadFromFile ? false : true"
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
                          stroke="#EEE"
                        />
                      </svg>
                      &nbsp;Copy/Paste
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-3 mt-1">
                  <div
                    :class="`tab-pane fade ${
                      uploadFromFile ? 'active show' : ''
                    }`"
                    id="uploadFromFile"
                    role="tabpanel"
                    aria-labelledby="uploadFromFile-tab"
                  >
                    <small
                      class="text-danger"
                      v-if="errors.illustration_file"
                      >{{ errors.illustration_file[0] }}</small
                    >
                    <div class="pb-4">
                      <label
                        for="file-uploading"
                        class="p-relative drag-drop-label d-block text-center p-relative overflow-hidden"
                        :style="{
                          'border-color': errors.illustration_file ? 'red' : '',
                        }"
                        @drop="handleDragFile"
                        @dragover="dragover"
                        @dragleave="dragleave"
                      >
                        <input
                          type="file"
                          accept=".pdf"
                          id="file-uploading"
                          name="file_uploading"
                          ref="file"
                          hidden
                          @change="handleFile"
                        />
                        <span>
                          <img
                            src="@/assets/images/icons/table-drag.svg"
                            class="img-fluid"
                            alt="Drag & Drop"
                          />
                        </span>
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
                        <div
                          :class="`pdf-spinner text-center ${
                            fileLoader ? '' : 'd-none'
                          }`"
                        >
                          <div>
                            <div class="d-flex justify-content-center">
                              <div
                                class="spinner-border text-secondary"
                                role="status"
                              ></div>
                            </div>
                            <span class="small mt-3 d-inline-block"
                              >Please wait while we are extracting your data
                              from the PDF file</span
                            >
                          </div>
                        </div>
                      </label>
                      <p
                        :class="`file-name fs-14 grey-clr-2 medium-fw text-center mt-1 mb-0 ${
                          illustrationFile.type === 'new' ? '' : 'd-none'
                        }`"
                        id="uploadFileName"
                      >
                        {{ illustrationFile.name }}
                      </p>
                    </div>
                  </div>
                  <div
                    :class="`tab-pane fade ${
                      uploadFromFile ? '' : 'active show'
                    }`"
                    id="copyPaste"
                    role="tabpanel"
                    aria-labelledby="copyPaste-tab"
                  >
                    <small
                      class="text-danger"
                      v-if="errors.illustration_text"
                      >{{ errors.illustration_text[0] }}</small
                    >
                    <div class="copy-paste-area">
                      <h6 class="semi-bold-fw drag-drop-heading text-center">
                        Copy/Paste from CSV
                      </h6>
                      <div class="form-group mb-0">
                        <label
                          for="simulationPasteData"
                          class="fs-12 semi-bold-fw"
                          >Paste Data Here</label
                        >
                        <textarea
                          name=""
                          id="simulationPasteData"
                          cols="30"
                          rows="5"
                          class="form-control"
                          @paste="handleCSV"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pb-3">
                  <div
                    v-if="!uploadFromFile"
                    class="form-check form-switch custom-switch pt-2"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      :disabled="existingIllustrationName ? true : false"
                      v-model="saveIllustrationTemplate"
                      id="simulationTemplateCheckbox"
                    />
                    <label
                      class="form-check-label fs-12 semi-bold-fw mb-0"
                      for="simulationTemplateCheckbox"
                      >Save this Illustration as Template</label
                    >
                  </div>
                  <div
                    class="form-group pt-2"
                    id="templateNameDiv"
                    :style="{ display: saveIllustrationTemplate ? '' : 'none' }"
                  >
                    <label for="templateName" class="fs-12 medium-fw"
                      >Template Name</label
                    >
                    <input
                      type="text"
                      id="templateName"
                      class="form-control"
                      :disabled="existingIllustrationName ? true : false"
                      v-model="illustrationTemplateName"
                      @keyup="clearError('illustration_template_name')"
                    />
                    <small
                      class="text-danger"
                      v-if="errors.illustration_template_name"
                      >{{ errors.illustration_template_name[0] }}</small
                    >
                  </div>
                </div>
              </div>
              <div
                v-if="csvPreview.headers.length"
                class="illustration-data-table-div w-100"
              >
                <h4 class="fs-22 bold-fw mb-3 pb-4">
                  Categorize, Review and Edit Data
                </h4>
                <div class="illustration-data-wrapper illustrativeTablemainDiv">
                  <div
                    :class="`floating-btns ${
                      csvPreview.headers.length ? '' : 'd-none'
                    }`"
                  >
                    <button type="button" class="btn add-table-column-btn">
                      + Add Column
                    </button>
                    <button
                      type="button"
                      v-if="removeColId.length"
                      class="btn add-table-column-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteColumnModal"
                    >
                      - Delete Column
                    </button>
                    <button
                      type="button"
                      v-else
                      class="btn add-table-column-btn"
                      @click="
                        $toast.warning('No column selected for deletion.')
                      "
                    >
                      - Delete Column
                    </button>
                    <button
                      type="button"
                      class="btn add-table-column-btn reset-table-btn"
                      @click="resetCsv()"
                    >
                      Reset Table
                    </button>
                  </div>
                  <div class="d-flex additional-textarea py-3 d-none">
                    <div class="flex-1">
                      <div class="tab-content mt-1">
                        <div
                          :class="`tab-pane fade ${
                            addFromFile ? 'active show' : ''
                          }`"
                          id="addFromFile"
                          role="tabpanel"
                          aria-labelledby="addFromFile-tab"
                        >
                          <small
                            class="text-danger"
                            v-if="errors.illustration_file2"
                            >{{ errors.illustration_file2[0] }}</small
                          >
                          <div class="">
                            <label
                              for="file-uploading2"
                              class="drag-drop-label d-block text-center p-relative overflow-hidden pb-3"
                              :style="{
                                'border-color': errors.illustration_file2
                                  ? 'red'
                                  : '',
                              }"
                              @drop="addColDragFile"
                              @dragover="dragover"
                              @dragleave="dragleave"
                            >
                              <input
                                type="file"
                                accept=".pdf"
                                id="file-uploading2"
                                name="file_uploading2"
                                ref="file2"
                                hidden
                                @change="handleFile2"
                              />
                              <h6 class="semi-bold-fw drag-drop-heading">
                                Drag & Drop
                              </h6>
                              <p class="medium-fw fs-12 mb-0 uploadFileTxtPara">
                                Your files anywhere in this section
                              </p>
                              <span
                                class="fs-12 semi-bold-fw grey-clr-3 d-block"
                                >or</span
                              >
                              <button type="button" class="btn choose-file-btn">
                                Choose File
                              </button>
                              <span class="semi-bold-fw no-file-span d-block"
                                >No file chosen</span
                              >
                              <div
                                :class="`pdf-spinner text-center ${
                                  fileLoader2 ? '' : 'd-none'
                                }`"
                              >
                                <div>
                                  <div class="d-flex justify-content-center">
                                    <div
                                      class="spinner-border text-secondary"
                                      role="status"
                                    ></div>
                                  </div>
                                  <span class="small mt-3 d-inline-block"
                                    >Please wait while we are extracting your
                                    data from the PDF file</span
                                  >
                                </div>
                              </div>
                            </label>
                            <p
                              :class="`file-name fs-14 grey-clr-2 medium-fw text-center m-0 ${
                                illustrationFile.type === 'append'
                                  ? ''
                                  : 'd-none'
                              }`"
                              id="uploadFileName2"
                            >
                              {{ illustrationFile.name }}
                            </p>
                          </div>
                        </div>
                        <div
                          :class="`tab-pane fade ${
                            addFromFile ? '' : 'active show'
                          }`"
                          id="addCopyPaste"
                          role="tabpanel"
                          aria-labelledby="addCopyPaste-tab"
                        >
                          <div
                            class="copy-paste-area mb-0 p-1"
                            :style="{
                              'border-color': errors.illustration_csv2
                                ? 'red'
                                : '',
                            }"
                          >
                            <div class="form-group mb-0">
                              <textarea
                                style="height: 143.7px"
                                name=""
                                id="simulation_add_new_csv_col"
                                cols="30"
                                rows="5"
                                class="form-control"
                                placeholder="Paste your data here"
                                @keypress="clearError('illustration_csv2')"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ps-3 flex-shrink-0">
                      <ul
                        class="nav nav-tabs flex-nowrap tax-rate-tabs"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <button
                            :class="`nav-link py-12 uploadFromFile ${
                              addFromFile ? 'active' : ''
                            }`"
                            id="addFromFile-tab"
                            @click="() => (addFromFile = true)"
                            data-bs-toggle="tab"
                            data-bs-target="#addFromFile"
                            type="button"
                            role="tab"
                            aria-controls="addFromFile"
                            :aria-selected="addFromFile ? true : false"
                          >
                            <svg
                              class="addFromFile"
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
                            &nbsp;By Uploading File
                          </button>
                        </li>
                        <li
                          class="nav-item"
                          role="presentation"
                          @click="() => (addFromFile = false)"
                        >
                          <button
                            :class="`nav-link py-12 copyPaste ${
                              addFromFile ? '' : 'active'
                            } space-nowrap`"
                            id="addCopyPaste-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#addCopyPaste"
                            type="button"
                            role="tab"
                            aria-controls="addCopyPaste"
                            :aria-selected="addFromFile ? false : true"
                          >
                            <svg
                              class="addCopyPaste"
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
                                stroke="#EEE"
                              />
                            </svg>
                            &nbsp;By Pasting Data
                          </button>
                        </li>
                      </ul>
                      <div class="d-flex flex-column mt-2">
                        <button
                          type="button"
                          class="nav-link btn add-data-btn fs-14 active px-3"
                          @click="addMoreCol()"
                        >
                          + Submit
                        </button>
                        <button
                          type="button"
                          class="nav-link btn cancel-add-data-btn fs-14 mt-2 px-4"
                          id="cancelCsvBtn2"
                          @click="resetAddDiv"
                        >
                          <img
                            src="@/assets/images/icons/small-cross.svg"
                            class="img-fuid"
                            alt="Delete"
                            width="10"
                            height="10"
                          />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="div-wrapper px-3">
                    <div class="div-wrapper-inner"></div>
                  </div>
                  <div class="table-responsive px-2">
                    <table class="table illustration-data-table mb-0">
                      <tbody>
                        <tr>
                          <td
                            v-for="(header, index) in csvPreview.headers"
                            :key="index"
                          >
                            <div
                              class="d-flex flex-column align-items-center px-2"
                            >
                              <select
                                name=""
                                :id="`headerSelectInput${index}`"
                                class="form-select select-option"
                                @change="(e) => setHeader(e, index)"
                              >
                                <option
                                  v-for="(item, index2) in illustrationFields"
                                  :key="index2"
                                  :value="index2"
                                  :selected="Number(header) === Number(index2)"
                                  :disabled="
                                    !illustrationFields[index2].multiple &&
                                    csvPreview.headers.includes(
                                      index2.toString()
                                    )
                                  "
                                >
                                  {{ item.name }}
                                </option>
                              </select>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th
                            v-for="(item, index) in csvPreview.headers"
                            :key="index"
                            :class="
                              removeColId.includes(index) ? 'checked' : ''
                            "
                          >
                            <div
                              class="d-flex justify-content-center align-items-center"
                            >
                              <input
                                :id="`c${index}`"
                                type="checkbox"
                                class="header-check me-1"
                                :checked="removeColId.includes(index)"
                                @click="deleteCheckbox(index)"
                              />
                              <label class="cursor-pointer" :for="`c${index}`"
                                >{{
                                  item
                                    ? `${
                                        illustrationFields[item].value !==
                                        "none"
                                          ? illustrationFields[item].name
                                          : "--"
                                      }`
                                    : "--"
                                }}
                              </label>
                            </div>
                          </th>
                        </tr>
                        <tr
                          v-for="(item, index) in csvPreview.data.length"
                          :key="index"
                        >
                          <td
                            v-for="(list, cell) in csvPreview.headers"
                            :key="cell"
                          >
                            <div class="text-center">
                              {{
                                csvPreview.data[index] && csvPreview.data[index]
                                  ? csvPreview.data[index][cell]
                                  : ""
                              }}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="p-relative mt-30">
                <button class="nav-link btn form-next-btn fs-14 active">
                  Next
                </button>
                <div class="return-btn-div">
                  <a
                    v-if="$route.query.report"
                    href="javascript:void(0)"
                    class="nav-link btn return-to-report-btn fs-14"
                    disabled="true"
                    @click="submitHandler(false, false, true)"
                    >Save & Return to Current Report
                    <img
                      src="@/assets/images/icons/chevron-right.svg"
                      class="img-fluid me-1"
                      style="position: relative; top: 0px"
                      alt="Chevron"
                      width="6"
                  /></a>
                </div>
              </div>
              <div class="d-flex justify-content-center gap-3 mt-3">
                <router-link
                  :to="`/${
                    $route.query.review === 'true'
                      ? 'historical/simulation-review'
                      : 'historical/simulation-details'
                  }/${$route.params.simulation}`"
                  class="nav-link btn form-back-btn mx-0 fs-14 flex-shrink-0"
                  disabled="true"
                >
                  <img
                    src="@/assets/images/icons/chevron-left-grey.svg"
                    class="img-fluid me-1"
                    style="position: relative; top: 0px"
                    alt="Chevron"
                    width="6"
                  />Back
                </router-link>
                <button
                  v-if="$route.query.review === 'true'"
                  type="button"
                  @click="submitHandler(false, true)"
                  class="nav-link btn form-next-btn fs-14 active flex-shrink-0 mx-0"
                >
                  <img
                    src="@/assets/images/icons/chevron-left-white.svg"
                    class="img-fluid me-1"
                    style="position: relative; top: 0px"
                    alt="Chevron"
                    width="6"
                  />
                  Save & Return to Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <delete-colomn-modal @removeCol="removeColumn" />
    <div
      class="modal fade pdf-preview-canvas-modal"
      id="pdfPreview2CanvasModal"
      tabindex="-1"
      aria-labelledby="pdfPreview2CanvasModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <button
            type="button"
            class="btn-close prev-modal-close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img
              src="@/assets/images/icons/offcanvas-close.svg"
              class="img-fluid"
              alt="close"
            />
          </button>
          <div class="modal-body text-center my-4">
            <p class="preview-modal-heading1">
              Select the pages from the PDF file to extract the data
            </p>
            <p class="preview-modal-heading2 mt-0">
              Just click the box to select the relevant page
            </p>
            <div class="container">
              <div id="pdfPreview2" class="row"></div>
            </div>
          </div>
          <div class="preview-modal-bottom-div py-3">
            <div class="d-flex justify-content-center">
              <a
                class="nav-link btn form-next-btn active fs-14 d-block m-0 mr-1"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="extractPdf()"
                >Done</a
              >
              <a
                class="nav-link btn preview-cancel-btn fs-14 d-block m-0 ms-1"
                data-bs-dismiss="modal"
                aria-label="Close"
                >Cancel</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="hidden" id="extractPageNumber2" />
    <div
      class="modal fade common-modal"
      ref="historicalPdfNameModal"
      id="historicalPdfNameModal"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                src="@/assets/images/icons/cross-grey.svg"
                class="img-fluid"
                alt="Close Modal"
              />
            </button>
          </div>
          <div class="modal-body">
            <div class="modalParaBorderDiv text-center">
              <p class="modalParaReportBuilder">Illustration PDF File</p>
              <p class="modalSmallborder"></p>
              <p class="fs-14 px-4">
                You are about to begin the PDF extraction process. Please name
                the Illustration PDF file.
              </p>
            </div>
            <div class="px-5 pt-4">
              <div class="form-group">
                <label for="pdfFile" class="fs-14 bold-fw"
                  >Illustration File Name</label
                >
                <input
                  id="pdfFile"
                  type="text"
                  class="form-control custom-control"
                  v-model="illustrationFile.name"
                  autocomplete="off"
                />
                <small v-if="illustrationFileError" class="text-danger">{{
                  illustrationFileError
                }}</small>
              </div>
            </div>
            <div class="gap-13 pt-4 mt-2 pb-2 text-center pb-4">
              <button
                type="submit"
                data-bs-dismiss="modal"
                aria-label="Close"
                :class="`btn yes-delete-btn ${
                  illustrationFileError ? 'disabled' : ''
                }`"
                @click="getPreview()"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import DeleteColomnModal from "../../../components/modal/DeleteColomnModal.vue";
import SelectDropdown from "../../../components/common/SelectDropdown.vue";
import HistoricalSimulationSteps from "../../../components/common/HistoricalSimulationSteps.vue";
import { get, post, put } from "../../../../network/requests";
import HistoricalSimulationLabelComponent from "../../../components/common/HistoricalSimulationLabelComponent.vue";
import { getUrl } from "../../../../network/url";

import {
  getFirstError,
  authHeader,
  getNumber,
  getCurrentSimulation,
  getSimulationStep2,
  setSimulationStep2,
  mapHistoricalClientList,
} from "../../../../services/helper";

// Refernce URL 1 - "https://mozilla.github.io/pdf.js/build/pdf.js";
// Refernce URL 2 - "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.js";
// Refernce URL 3 - "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.js"";
// Refernce URL 4 - "https://unpkg.com/browse/pdfjs-dist@3.11.174/build/pdf.js"";
// Refernce URL 5 - "/src/assets/js/pdfjs-3.11.174/build/pdf.js"";
import "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.js";

// Loaded via <script> tag, create shortcut to access PDF.js exports.
const pdfjsLib = window["pdfjs-dist/build/pdf"];
// The workerSrc property shall be specified.

// Refernce URL 1 - "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
// Refernce URL 2 - "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
// Refernce URL 3 - "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
// Refernce URL 4 - "https://unpkg.com/browse/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
// Refernce URL 5 - "/src/assets/js/pdfjs-3.11.174/build/pdf.worker.js";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileReader = new FileReader();

export default {
  components: {
    SelectDropdown,
    HistoricalSimulationSteps,
    DeleteColomnModal,
    HistoricalSimulationLabelComponent,
  },
  refs: ["cancelCsvBtn2"],
  data() {
    return {
      saveInsuranceTemplate: false,
      insuranceTemplateName: "",
      saveIllustrationTemplate: false,
      illustrationTemplateName: "",
      uploadFromFile: true,
      addFromFile: false,
      fileLoader: false,
      fileLoader2: false,
      illustrationFile: {
        name: "",
        file: null,
        url: "",
        type: "new",
      },
      illustrationFileError: "",
      existingInsuranceProfileId: "",
      existingInsuranceProfileName: "",
      existingIllustrationId: "",
      existingIllustrationName: "",
      insuranceCompany: "",
      insurancePolicyName: "",
      PolicyNickname: "",
      insuranceTemplateInput: 0,
      illustrationTemplateInput: 0,
      errors: [],
      csvPreview: { data: [], headers: [] },
      removeColId: [],
      illustrationId: false,
    };
  },
  mounted() {
    // input validation for min and max value with putting comma
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach((element) =>
      element.addEventListener("input", function (e) {
        let current = getNumber(e.target.value).toString();
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (Number(current) < min || Number(current) > max) {
          let actualValue = current.slice(0, current.length - 1);
          e.target.value =
            Number(current) < min
              ? ""
              : Number(actualValue).toLocaleString("en-US");
          return false;
        } else {
          e.target.value = Number(current).toLocaleString("en-US");
        }
      })
    );

    // input validation for min and max value
    const inputs2 = document.querySelectorAll(".handleLimit2");
    inputs2.forEach((element) =>
      element.addEventListener("input", function (e) {
        let len = e.target.value.length;
        let current = e.target.value;
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (
          Number(current) < min ||
          Number(current) > max ||
          isNaN(Number(current))
        ) {
          let actualValue = current.slice(0, len - 1);
          e.target.value = actualValue;
          return false;
        }
      })
    );

    // populate illuatration data if illuatration data id exist in url
    let simulationData = getCurrentSimulation();
    if (this.$route.params.simulation) {
      let getSimulationAPI = true;
      if (
        simulationData &&
        simulationData.id === Number(this.$route.params.simulation)
      ) {
        if (
          simulationData.illustration &&
          typeof simulationData.simulation_details === "object"
        ) {
          this.$store.dispatch("activeSimulation", simulationData);
          this.illustrationId = simulationData.illustration;
          this.populateInsuranceProfile(simulationData.illustration);
          getSimulationAPI = false;
        }
      }

      if (getSimulationAPI) {
        this.$store.dispatch("loader", true);
        get(
          `${getUrl("simulations")}${this.$route.params.simulation}`,
          authHeader()
        )
          .then((response) => {
            let id = response.data.data.historical_illustration;
            this.illustrationId = id;
            this.$store.dispatch("activeSimulation", response.data.data);
            if (id) {
              this.populateInsuranceProfile(id);
            } else {
              this.$store.dispatch("loader", false);
            }
          })
          .catch((error) => {
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            }
            this.$store.dispatch("loader", false);
          });
      }
    }

    if (!this.existingInsuranceList.length) {
      this.getExistingInsurance();
    }

    if (!this.existingIllustrationList.length) {
      this.getExistingIllustration();
    }

    // get updated clients data
    this.getClient();

    // handle pdf file preview modal
    document
      .getElementById("pdfPreview2CanvasModal")
      .addEventListener("hidden.bs.modal", function (event) {
        document.getElementById("file-uploading").value = null;
        if (document.getElementById("file-uploading2")) {
          document.getElementById("file-uploading2").value = null;
        }
        document.getElementById("extractPageNumber2").value = null;
        document.getElementById("uploadFileName").innerText = "";
        if (document.getElementById("uploadFileName2")) {
          document.getElementById("uploadFileName2").innerText = "";
        }
      });
  },
  computed: {
    // active simulation data
    activeSimulation() {
      return this.$store.state.data.active_simulation;
    },

    existingInsuranceList() {
      let array = this.$store.state.data.templates.insurance || [];
      return array;
    },

    existingIllustrationList() {
      let array = this.$store.state.data.templates.illustration || [];
      if (array) {
        array = array.filter((i) => i.client === this.activeSimulation.client);
      }
      return array;
    },

    // return year of illustrations
    illustrateYear() {
      let simulation = this.$store.state.data.active_simulation;
      if (simulation) {
        return simulation.simulation_details.years_to_illustrate;
      }
      return 0;
    },

    illustrationFields() {
      return [
        { name: "None", value: "none", multiple: true },
        { name: "Age", value: "age", multiple: false },
        {
          name: "Accumulation Value",
          value: "account_value",
          multiple: false,
        },
        {
          name: "Distribution - Loan",
          value: "distribution_loan",
          multiple: false,
        },
        { name: "Death Benefit", value: "death_benefit", multiple: false },
        {
          name: "Distribution - Withdrawal",
          value: "distributions",
          multiple: false,
        },
        { name: "Fees", value: "total_loan_charge", multiple: true },
        { name: "Premium", value: "premium_outlay", multiple: false },
        { name: "Surrender Value", value: "surrender_value", multiple: false },
        { name: "Year", value: "year", multiple: false },
      ];
    },

    illustrationFieldsIndex() {
      return {
        none: "0",
        age: "1",
        account_value: "2",
        distribution_loan: "3",
        death_benefit: "4",
        distributions: "5",
        total_loan_charge: "6",
        premium_outlay: "7",
        surrender_value: "8",
        year: "9",
      };
    },
  },
  methods: {
    // set existing insurance profile id on selecting the input dropdown data
    setExistingInsuranceProfileId: function (id) {
      let data = this.existingInsuranceList.filter((item) => item.id === id)[0];
      this.existingInsuranceProfileId = data.template_id;
      this.errors = [];
      this.populateInsuranceProfile(data.template_id, true, data.type);
      this.clearIllustrateTemplate();
    },

    // set existing illustration id on selecting the input dropdown data
    setExistingIllustrationId: function (id) {
      this.existingIllustrationId = id;
      this.populateIllustrationProfile(id);
      this.clearInsuranceTemplate();
      this.errors = [];
    },

    // set existing insurance profile name on change the input value
    setExistingInsuranceProfileName: function (name) {
      this.existingInsuranceProfileName = name;
    },

    // set existing insurance profile name on change the input value
    setExistingIllustrationName: function (name) {
      this.existingIllustrationName = name;
    },

    clearInsuranceTemplate: function () {
      if (this.existingInsuranceProfileName) {
        this.insuranceTemplateInput = 1;
      }
    },

    clearIllustrateTemplate: function () {
      if (this.existingIllustrationName) {
        this.illustrationTemplateInput = 1;
      }
    },

    // populate the form data
    setFormInputs: function (data = [], type = "") {
      if (type !== "illustration") {
        this.insuranceCompany = data.insurance_company;
        this.insurancePolicyName = data.insurance_policy_name;
        this.PolicyNickname = data.insurance_policy_nickname;
      }

      if (type !== "insurance") {
        if (data.initial_death_benifit) {
          this.setInputWithId(
            "simulationDeathBenefit",
            data.initial_death_benifit.toLocaleString("en-US")
          );
        }

        if (data.initial_policy_return) {
          this.setInputWithId(
            "simulationPolicyReturn",
            Number(data.initial_policy_return).toFixed(2)
          );
        }

        if (data.second_policy_return) {
          this.setInputWithId(
            "simulationPolicyReturn2",
            Number(data.second_policy_return).toFixed(2)
          );
        }

        if (data.change_year) {
          this.setInputWithId("changeTaxYear2", data.change_year);
        }

        if (type === "illustration") {
          data.historical_data = data;
        }
        this.uploadFromFile = data.historical_data.upload_file_checkbox;
        if (this.uploadFromFile) {
          let filteredCsv = {
            data: data.historical_data.upload_from_file.data,
            headers: [],
          };
          filteredCsv.headers =
            data.historical_data.upload_from_file.headers.map((i) => {
              if (i.includes("total_loan_charge")) {
                i = "total_loan_charge";
              }
              return this.illustrationFieldsIndex[i];
            });

          this.csvPreview = this.filterObject(filteredCsv);
          this.setScrollbar();
        } else {
          if (
            data.historical_data.copy_paste &&
            data.historical_data.copy_paste.headers.length
          ) {
            let filteredCsv = {
              data: data.historical_data.copy_paste.data,
              headers: [],
            };
            filteredCsv.headers = data.historical_data.copy_paste.headers.map(
              (i) => {
                if (i.includes("total_loan_charge")) {
                  i = "total_loan_charge";
                }
                return this.illustrationFieldsIndex[i];
              }
            );

            this.csvPreview = this.filterObject(filteredCsv);
            this.setScrollbar();
          }
        }
      }
    },

    // populate the insurance data on selectig the existing dropdown template list
    populateInsuranceProfile: function (
      id,
      template = false,
      templateType = "scenario"
    ) {
      if (!id) {
        return false;
      }

      let step2 = getSimulationStep2();
      if (step2 && step2.id === Number(id)) {
        return this.setFormInputs(step2);
      }

      this.$store.dispatch("loader", true);
      let templateUrl = "template-insurance-profile";

      if (templateType === "simulation") {
        templateUrl = "historical-template-insurance-profile";
      }

      get(
        `${getUrl(template ? templateUrl : "historical-illustrations")}${id}`,
        authHeader()
      )
        .then((response) => {
          let data = response.data.data;
          if (!template) {
            setSimulationStep2(data);
          }
          this.setFormInputs(data, template ? "insurance" : "");
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    extractPdfUsingUrl: function (url) {
      this.illustrationFile.url = url;
      this.getPreviewUsingUrl(url);
    },
    // populate the illustration data on selectig the existing dropdown template list
    populateIllustrationProfile: function (id, template = false) {
      if (!id) {
        return false;
      }

      let data = this.existingIllustrationList.filter((i) => i.id === id)[0];
      if (data && data.s3_url) {
        this.extractPdfUsingUrl(data.s3_url);
        return false;
      }

      this.$store.dispatch("loader", true);
      get(`${getUrl("historical-illustration-template")}${id}`, authHeader())
        .then((response) => {
          let data = response.data.data;
          this.setFormInputs(data, "illustration");
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    // Set the uploaded illustration pdf file name on name change input modal
    setFileName: function () {
      return new bootstrap.Modal(
        document.getElementById("historicalPdfNameModal")
      ).show();
    },

    // show pdf file preview for selecting the extract page
    getPreview: function () {
      let file = this.illustrationFile.file;

      if (file && file.type == "application/pdf") {
        fileReader.onload = function () {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          var loadingTask = pdfjsLib.getDocument({ data: pdfData });
          loadingTask.promise.then(
            function (pdf) {
              // Fetch the pdf page
              document.getElementById("pdfPreview2").innerHTML = null;
              for (var i = 1; i <= pdf.numPages; i++) {
                generateCanvas(i, pdf);
              }
              document.getElementById("stopLoaderBtn2").click();
              return new bootstrap.Modal(
                document.getElementById("pdfPreview2CanvasModal")
              ).show();
            },
            function (reason) {
              // PDF loading error
              document.getElementById("stopLoaderBtn2").click();
              console.error(reason);
            }
          );
        };
        fileReader.readAsArrayBuffer(file);
      }

      function generateCanvas(i, pdf) {
        // Create a class attributes:
        var classAtt = document.createAttribute("class");
        classAtt.value =
          "col-6 col-md-4 col-lg-3 p-2 d-flex justify-content-center";

        var classAtt2 = document.createAttribute("class");
        classAtt2.value = "previewCard";

        var dataAtt = document.createAttribute("data-page");
        dataAtt.value = i;

        var classAtt3 = document.createAttribute("class");
        classAtt3.value = "previewCardHeading text-center";

        var divCol = document.createElement("div");
        divCol.setAttributeNode(classAtt2);
        divCol.setAttributeNode(dataAtt);

        var divCan = document.createElement("div");
        divCan.setAttributeNode(classAtt);

        var heading = document.createElement("h6");
        heading.setAttributeNode(classAtt3);
        heading.appendChild(document.createTextNode("Page - " + i));

        var can = document.createElement("canvas");

        var pageNumber = i;
        pdf.getPage(pageNumber).then(function (page) {
          var scale = 0.4;
          var viewport = page.getViewport({ scale: scale });

          var context = can.getContext("2d");
          can.height = viewport.height;
          can.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext);
        });
        divCol.appendChild(can);
        divCol.appendChild(heading);
        divCan.appendChild(divCol);
        document.getElementById("pdfPreview2").appendChild(divCan);
        divCol.addEventListener("click", function (e) {
          if (!e.target.hasAttribute("data-page")) {
            let parent = e.target.parentElement;
            let pId = parent.getAttribute("data-page");
            let input = document.getElementById("extractPageNumber2");
            if (parent.classList.contains("active")) {
              let tempVal = input.value.split(",").filter((i) => i !== pId);
              input.value = tempVal.sort((a, b) => a - b).join(",");
            } else {
              if (input.value) {
                let tempVal = input.value.split(",");
                tempVal.push(pId);
                input.value = tempVal.sort((a, b) => a - b).join(",");
              } else {
                input.value = pId;
              }
            }
            parent.classList.toggle("active");
          }
        });
      }
    },

    // show pdf file preview for selecting the extract page
    getPreviewUsingUrl: function (url) {
      if (url) {
        // Using DocumentInitParameters object to load binary data.
        this.$store.dispatch("loader", true);
        var toast = this.$toast;
        var loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(
          function (pdf) {
            // Fetch the pdf page
            document.getElementById("pdfPreview2").innerHTML = null;
            for (var i = 1; i <= pdf.numPages; i++) {
              generateCanvas(i, pdf);
            }
            document.getElementById("stopLoaderBtn2").click();
            return new bootstrap.Modal(
              document.getElementById("pdfPreview2CanvasModal")
            ).show();
          },
          function (reason) {
            // PDF loading error
            document.getElementById("stopLoaderBtn2").click();
            toast.error(reason.message);
          }
        );
      }

      function generateCanvas(i, pdf) {
        // Create a class attributes:
        var classAtt = document.createAttribute("class");
        classAtt.value =
          "col-6 col-md-4 col-lg-3 p-2 d-flex justify-content-center";

        var classAtt2 = document.createAttribute("class");
        classAtt2.value = "previewCard";

        var dataAtt = document.createAttribute("data-page");
        dataAtt.value = i;

        var classAtt3 = document.createAttribute("class");
        classAtt3.value = "previewCardHeading text-center";

        var divCol = document.createElement("div");
        divCol.setAttributeNode(classAtt2);
        divCol.setAttributeNode(dataAtt);

        var divCan = document.createElement("div");
        divCan.setAttributeNode(classAtt);

        var heading = document.createElement("h6");
        heading.setAttributeNode(classAtt3);
        heading.appendChild(document.createTextNode("Page - " + i));

        var can = document.createElement("canvas");

        var pageNumber = i;
        pdf.getPage(pageNumber).then(function (page) {
          var scale = 0.4;
          var viewport = page.getViewport({ scale: scale });

          var context = can.getContext("2d");
          can.height = viewport.height;
          can.width = viewport.width;

          // Render PDF page into canvas context
          var renderContext = {
            canvasContext: context,
            viewport: viewport,
          };

          page.render(renderContext);
        });
        divCol.appendChild(can);
        divCol.appendChild(heading);
        divCan.appendChild(divCol);
        document.getElementById("pdfPreview2").appendChild(divCan);
        divCol.addEventListener("click", function (e) {
          if (!e.target.hasAttribute("data-page")) {
            let parent = e.target.parentElement;
            let pId = parent.getAttribute("data-page");
            let input = document.getElementById("extractPageNumber2");
            if (parent.classList.contains("active")) {
              let tempVal = input.value.split(",").filter((i) => i !== pId);
              input.value = tempVal.sort((a, b) => a - b).join(",");
            } else {
              if (input.value) {
                let tempVal = input.value.split(",");
                tempVal.push(pId);
                input.value = tempVal.sort((a, b) => a - b).join(",");
              } else {
                input.value = pId;
              }
            }
            parent.classList.toggle("active");
          }
        });
      }
    },

    // validate the form
    validateForm: function () {
      var validate = true;
      if (this.existingInsuranceProfileName) {
        let templateId = this.$getTemplateId(
          this.existingInsuranceProfileName,
          this.existingInsuranceList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_insurance_profile = [
            "Please choose a valid template.",
          ];
        } else {
          this.existingInsuranceProfileId = templateId;
          this.errors.existing_insurance_profile = "";
        }
      } else {
        this.errors.existing_insurance_profile = "";
      }

      if (this.saveInsuranceTemplate && !this.insuranceTemplateName) {
        this.errors.insurance_template_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_template_name = false;
      }

      if (this.existingIllustrationName) {
        let templateId = this.$getTemplateId(
          this.existingIllustrationName,
          this.existingIllustrationList
        );
        if (!templateId) {
          validate = false;
          this.errors.existing_illustration = [
            "Please choose a valid template.",
          ];
        } else {
          this.existingIllustrationId = templateId;
          this.errors.existing_illustration = "";
        }
      } else {
        this.errors.existing_illustration = "";
        if (this.uploadFromFile) {
          if (
            !this.csvPreview.data.length &&
            !this.existingInsuranceProfileName &&
            !this.existingIllustrationName
          ) {
            this.errors.illustration_file = true;
            validate = false;
          } else {
            this.errors.illustration_file = false;
          }
          this.errors.illustration_text = false;
        } else {
          this.errors.illustration_file = false;
        }
      }

      if (this.saveIllustrationTemplate && !this.illustrationTemplateName) {
        this.errors.illustration_template_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.illustration_template_name = false;
      }

      if (!this.insuranceCompany) {
        this.errors.insurance_company = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_company = "";
      }

      if (!this.insurancePolicyName) {
        this.errors.insurance_policy_name = ["This field is required."];
        validate = false;
      } else {
        this.errors.insurance_policy_name = "";
      }

      if (!this.PolicyNickname) {
        this.errors.policy_nickname = ["This field is required."];
        validate = false;
      } else {
        this.errors.policy_nickname = "";
      }

      if (!this.getInputWithId("simulationDeathBenefit")) {
        this.errors.initial_death_benifit = ["This field is required."];
        validate = false;
      } else {
        this.errors.initial_death_benifit = "";
      }

      if (!this.getInputWithId("simulationPolicyReturn")) {
        this.errors.policy_return = ["This field is required."];
        validate = false;
      } else {
        this.errors.policy_return = "";
      }

      return validate;
    },

    // get clients detail from API
    getClient: function () {
      get(getUrl("historical-clients"), authHeader())
        .then((response) => {
          this.$store.dispatch(
            "historicalClients",
            mapHistoricalClientList(response.data.data)
          );
          this.sortedList = mapHistoricalClientList(response.data.data);
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    // remove error
    clearError: function (key) {
      this.errors[key] = false;
      // this.clearInsuranceTemplate();
    },

    // this function has return the input value
    getInputWithId: function (id) {
      return document.getElementById(id).value;
    },

    // set the input value using the input id attribute
    setInputWithId: function (id, value) {
      if (document.getElementById(id)) {
        document.getElementById(id).value = value;
      }
      return value;
    },

    // get existing insurance profile template
    getExistingInsurance: function () {
      get(getUrl("combined-insurance-profile-template"), authHeader())
        .then((response) => {
          let template = [];
          let scenarioTemplates = [];
          let simulationTemplates = [];
          let data = response.data.data || [];

          if (data.illustration_profiles) {
            data.illustration_profiles.forEach((item, index) => {
              scenarioTemplates.push({
                id: index + 1,
                template_id: item.id,
                type: "scenario",
                template_name: item.insurance_template_name,
              });
            });
          }

          if (data.historical_profiles) {
            data.historical_profiles.forEach((item, index) => {
              simulationTemplates.push({
                id: scenarioTemplates.length + index + 1,
                template_id: item.id,
                type: "simulation",
                template_name: item.insurance_template_name,
              });
            });
          }

          template = [...scenarioTemplates, ...simulationTemplates];

          function compare(a, b) {
            if (a.template_name < b.template_name) return -1;
            if (a.template_name > b.template_name) return 1;
            return 0;
          }

          template = template.sort(compare);

          this.$store.dispatch("template", {
            type: "insurance",
            data: template,
          });
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    // get existing illustration data template
    getExistingIllustration: function () {
      this.$store.dispatch("loader", true);
      get(getUrl("historical-illustration-template"), authHeader())
        .then((response) => {
          this.$store.dispatch("template", {
            type: "illustration",
            data: response.data.data,
          });
          this.$store.dispatch("loader", false);
        })
        .catch((error) => {
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },
    // save illustration file
    saveIllustrationFile(file_url, filename) {
      // create a new illustration file data
      let data = {
        s3_url: file_url,
        client: this.activeSimulation.client,
        name: filename,
        simulation_id: this.activeSimulation.id,
      };

      post(getUrl("illustration-files"), data, authHeader());
    },
    dragover(event) {
      event.preventDefault();
      // add blur effect
      var parent = event.target.closest(".drag-drop-label");
      parent.classList.add("dragging");
    },
    dragleave(event) {
      // remove blur effect
      var parent = event.target.closest(".drag-drop-label");
      parent.classList.remove("dragging");
    },
    handleDragFile: function (e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.handleFile();
    },
    // column add with dragged file
    addColDragFile: function (e) {
      e.preventDefault();
      this.$refs.file2.files = e.dataTransfer.files;
      this.addColByFile();
    },
    // handle illustration file uploading
    handleFile: function () {
      let file = this.$refs.file.files[0];
      this.illustrationTemplateInput = 1;
      this.illustrationFile.type = "new";
      if (file) {
        if (file.type !== "application/pdf") {
          this.errors.illustration_file = ["Please upload a valid PDF file."];
          this.$toast.warning("Please upload a valid PDF file.");
          this.illustrationFile.file = null;
          this.illustrationFile.name = "";
          return false;
        }
        this.setFileName(file);
      }
      this.illustrationFile.file = file ? file : "";
      this.illustrationFile.name = file ? file.name : "";
      this.errors.illustration_file = false;
    },

    // handle add more column using illustration file uploading
    handleFile2: function (e) {
      this.clearError("illustration_file2");
      let file = this.$refs.file2.files[0];
      this.illustrationFile.type = "append";

      if (file) {
        if (file.type !== "application/pdf") {
          this.errors.illustration_file2 = ["Please upload a valid PDF file."];
          this.$toast.warning("Please upload a valid PDF file.");
          this.illustrationFile.file = null;
          this.illustrationFile.name = "";
          return false;
        }
      }

      this.illustrationFile.file = file ? file : "";
      this.illustrationFile.name = file ? file.name : "";
      this.errors.illustration_file2 = false;
    },

    // handle illustration file uploading
    addColByFile: function () {
      let file = this.$refs.file2.files[0];
      this.illustrationTemplateInput = 1;
      this.illustrationFile.type = "append";
      if (file) {
        if (file.type !== "application/pdf") {
          this.errors.illustration_file2 = ["Please upload a valid PDF file."];
          this.$refs.file2.value = null;
          this.$toast.warning("Please upload a valid PDF file.");
          return false;
        }
        this.illustrationFile.file = file ? file : "";
        this.$store.dispatch("loader", true);
        this.getPreview(file);
      }

      this.illustrationFile.file = file ? file : "";
      this.illustrationFile.name = file ? file.name : "";
      this.errors.illustration_file2 = false;
    },

    // extract pdf data
    extractPdf: function () {
      var file = this.illustrationFile.file;
      var url = this.illustrationFile.url;
      var page = this.getInputWithId("extractPageNumber2");
      if (!page) {
        this.$toast.warning(
          "Please select at least one page to extract the illustration data."
        );
        return new bootstrap.Modal(
          document.getElementById("pdfPreview2CanvasModal")
        ).toggle();
      }

      if (!file && !url) {
        return false;
      } else {
        this.illustrationFile.file = null;
        this.illustrationFile.url = null;
      }

      if (file) {
        if (this.illustrationFile.type === "append") {
          this.fileLoader2 = true;
        } else {
          this.fileLoader = true;
        }
      } else {
        this.$store.dispatch("loader", true);
      }

      var data = new FormData();
      if (file) {
        data.append("pdffile", file);
      }
      if (url) {
        data.append("s3_url", url);
      }
      data.append("page", page);

      post(getUrl("pdf_extract"), data)
        .then((response) => {
          var res = response.data;

          if (url) {
            this.$store.dispatch("loader", false);
          }

          if (page && res) {
            var finalObj = this.getSearializedData(res, page);
            if (!finalObj.headers.length) {
              this.$toast.warning(
                "Sorry the data from the uploaded file could not be retrieved."
              );
              finalObj = false;
            }

            if (finalObj) {
              if (
                this.illustrationFile.type === "append" &&
                this.csvPreview.headers.length
              ) {
                if (finalObj.headers) {
                  let temp_data = [];
                  let maxRowLen = this.csvPreview.data.length;

                  if (finalObj.data.length < maxRowLen) {
                    maxRowLen = finalObj.data.length;
                  }

                  for (var i = 0; i < maxRowLen; i++) {
                    temp_data.push([
                      ...this.csvPreview.data[i],
                      ...finalObj.data[i],
                    ]);
                  }

                  this.csvPreview = this.filterObject({
                    data: temp_data.map((a) =>
                      a.map((i) => (i ? i.replace("-", "") : ""))
                    ),
                    headers: [...this.csvPreview.headers, ...finalObj.headers],
                  });
                  document.getElementById("cancelCsvBtn2").click();
                } else {
                  this.$toast.warning("Please upload a valid PDF file.");
                }
                this.setScrollbar();
              } else {
                if (!url && res.s3_url) {
                  this.saveIllustrationFile(
                    res.s3_url,
                    this.illustrationFile.name
                  );
                }

                this.csvPreview = this.filterObject(finalObj);
              }
            }

            this.fileLoader = false;
            this.fileLoader2 = false;
            this.setScrollbar();
          }
        })
        .catch((error) => {
          this.fileLoader = false;
          this.fileLoader2 = false;
          if (url) {
            this.$store.dispatch("loader", false);
          }
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          } else {
            this.$toast.error(getFirstError(error));
          }
        });
    },

    // map pdf extract data
    getSearializedData: function (response, page) {
      let headers = [];
      let total_rows = 0;
      let total_columns = 0;
      let finalObj = { data: [], headers: [] };
      let allData = [];
      let filterData = [];

      let pages = page.split(",").map((p) => Number(p));

      // get object of searialized page
      let sequence = this.getPageSequenceGroup(pages);

      // create a group of sequence data
      sequence.forEach((p) => {
        let pdata = [];
        let maxLength = 0;
        p.forEach((item) => {
          let tmp = response[item].map((a) => Object.values(a));
          pdata = [...pdata, ...tmp];
          if (total_rows < pdata.length) {
            total_rows = pdata.length;
          }
        });

        allData.push(pdata);
      });

      // merge sequenced data in single object
      allData.forEach((data) => {
        let temp_data = [];
        for (var i = 0; i < total_rows; i++) {
          temp_data.push([...(filterData[i] || ""), ...(data[i] || "")]);
        }
        filterData = { ...temp_data };
      });

      // convert into values of object
      filterData = Object.values(filterData);

      // get max column length of the object
      filterData.forEach((items) => {
        if (total_columns < items.length) {
          total_columns = items.length;
        }
      });

      // to eqalize the data in each object
      filterData = filterData.map((items) => {
        let tempItems = [];
        for (let i = 0; i < total_columns; i++) {
          tempItems.push(items[i] || "");
        }
        return tempItems;
      });

      // create header object
      for (let i = 0; i < total_columns; i++) {
        headers.push("");
      }

      finalObj = {
        data: filterData.map((a) =>
          a.map((i) => (i ? i.replace("-", "") : ""))
        ),
        headers: headers,
      };
      return finalObj;
    },

    // get serialized page group
    getPageSequenceGroup: function (pages) {
      let seq = [];
      let currentSeq = [];
      pages.forEach((p, i) => {
        if (i) {
          if (pages.includes(p - 1)) {
            currentSeq.push(p);
          } else {
            seq.push(currentSeq);
            currentSeq = [];
            currentSeq.push(p);
          }
        } else {
          currentSeq.push(p);
        }
      });
      seq.push(currentSeq);
      return seq;
    },

    // remove none header data form object
    filterNoneHeaders: function (obj = {}) {
      let headers = obj.headers;
      let data = obj.data;
      let noneHeaders = [];
      let filterHeaders = [];
      let filterData = [];

      headers.forEach((element, i) => {
        if (element === "none") {
          noneHeaders.push(i);
        } else {
          filterHeaders.push(element);
        }
      });

      filterData = data.map((items) =>
        items.filter((i, k) => !noneHeaders.includes(k))
      );

      return { headers: filterHeaders, data: filterData };
    },

    // handle form data
    submitHandler: function (e, review = false, report = false) {
      if (e) {
        e.preventDefault();
      }
      if (
        this.csvPreview &&
        this.csvPreview.headers &&
        this.csvPreview.headers.length > 6
      ) {
        if (!this.csvPreview.headers.includes("1")) {
          return alert(`${this.illustrationFields["1"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("2")) {
          return alert(`${this.illustrationFields["2"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("4")) {
          return alert(`${this.illustrationFields["4"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("7")) {
          return alert(`${this.illustrationFields["7"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("8")) {
          return alert(`${this.illustrationFields["8"].name} is required.`);
        }
        if (!this.csvPreview.headers.includes("9")) {
          return alert(`${this.illustrationFields["9"].name} is required.`);
        }

        if (
          !this.csvPreview.headers.includes("3") &&
          !this.csvPreview.headers.includes("5")
        ) {
          return alert(`Please select at least one distribution column.`);
        }
      } else {
        if (this.uploadFromFile) {
          return this.$toast.warning("Please upload illustration pdf data.");
        } else {
          return this.$toast.warning("CSV data is required.");
        }
      }

      if (!this.validateForm()) {
        let mainSectionElement = document.getElementById(
          "main-section-element"
        );
        if (mainSectionElement) {
          mainSectionElement.scrollIntoView();
        }
        return false;
      }

      var data = {
        company: this.insuranceCompany,
        policy_name: this.insurancePolicyName,
        nickname: this.PolicyNickname,
        initial_death_benifit: getNumber(
          this.getInputWithId("simulationDeathBenefit")
        ),
        initial_policy_return: this.getInputWithId("simulationPolicyReturn"),
        second_policy_return: this.getInputWithId("simulationPolicyReturn2"),
        change_year: this.getInputWithId("changeTaxYear2"),
        insurance_template: this.saveInsuranceTemplate,
        insurance_template_name: this.insuranceTemplateName,
        upload_file_checkbox: this.uploadFromFile ? true : false,

        // upload_file_checkbox: true,
        illustration: {
          template: this.saveIllustrationTemplate,
          template_name: this.illustrationTemplateName,
        },

        existing: {
          insurance_profile_id: this.existingInsuranceProfileId,
          illustration_id: this.existingIllustrationId,
        },
        template_name: false,
      };

      let formData = new FormData();
      formData.append("insurance_company", data.company);
      formData.append("insurance_policy_name", data.policy_name);
      formData.append("insurance_policy_nickname", data.nickname);
      formData.append("save_this_company_profile", data.insurance_template);

      if (data.insurance_template) {
        formData.append(
          "insurance_template_name",
          data.insurance_template_name
        );
      }

      let file = "";

      formData.append(
        "historical_data.upload_file_checkbox",
        data.upload_file_checkbox
      );

      formData.append(
        "historical_data.copy_paste_checkbox",
        !data.upload_file_checkbox
      );

      let tempHeader = [];
      let currentFeeCol = 0;
      this.csvPreview.headers.forEach((item) => {
        if (this.illustrationFields[item]) {
          var field = this.illustrationFields[item].value;
          // set custome keys for multiple fees data
          if (item === "6") {
            if (currentFeeCol) {
              field += currentFeeCol;
            }
            currentFeeCol++;
          }
          tempHeader.push(field);
        } else {
          tempHeader.push("none");
        }
      });

      let tableData = this.filterObject({
        data: this.csvPreview.data.map((a) =>
          a.map((i) => (i ? i.replace("-", "") : ""))
        ),
        headers: tempHeader,
      });

      tableData = JSON.stringify(this.filterNoneHeaders(tableData));

      if (data.upload_file_checkbox) {
        formData.append("historical_data.upload_from_file", tableData);
      } else {
        formData.append("historical_data.copy_paste", tableData);
      }

      formData.append(
        "historical_data.save_this_template_name",
        data.illustration.template
      );

      if (data.illustration.template) {
        formData.append(
          "historical_data.template_name",
          data.illustration.template_name
        );
      }

      formData.append("initial_death_benifit", data.initial_death_benifit);
      formData.append("initial_policy_return", data.initial_policy_return);
      formData.append("second_policy_return", data.second_policy_return);
      formData.append("change_year", data.change_year);
      formData.append("simulation_id", this.$route.params.simulation);
      // return false;
      this.$store.dispatch("loader", true);

      if (this.illustrationId) {
        put(
          `${getUrl("historical-illustrations")}${this.illustrationId}/`,
          formData,
          authHeader()
        )
          .then((response) => {
            this.$store.dispatch("loader", false);
            setSimulationStep2(response.data.data);
            this.getExistingIllustration();
            this.getExistingInsurance();
            this.$toast.success(response.data.message);
            let url = `/${
              review ? "review-summary" : "historical/parameters"
            }/${this.$route.params.simulation}`;

            if (report) {
              window.location.href = `/historical/report-builder/${this.$route.query.report}`;
            }

            this.$router.push({
              path: url,
              query: report ? null : this.$route.query,
            });
          })
          .catch((error) => {
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              if (error.response.data.error) {
                this.errors.insurance_template_name =
                  error.response.data.error.insurance_template_name;
              }
              this.$toast.error(getFirstError(error));
            }
          });
      } else {
        post(getUrl("historical-illustrations"), formData, authHeader())
          .then((response) => {
            this.$store.dispatch("loader", false);
            this.$toast.success(
              response.data.message || "Illustration data created successfully!"
            );
            this.illustrationId = response.data.data.id;
            setSimulationStep2(response.data.data);
            this.getExistingIllustration();
            this.getExistingInsurance();

            this.$router.push(
              `/historical/parameters/${this.$route.params.simulation}`
            );
          })
          .catch((error) => {
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              if (
                error.response.data.error &&
                error.response.data.error.insurance_template_name
              )
                this.$toast.error(getFirstError(error));
            }
          });
      }
    },
    // add multiple column id for remove from table
    deleteCheckbox: function (id) {
      var colId = this.removeColId;
      if (!colId.includes(id)) {
        colId.push(id);
      } else {
        colId = colId.filter((i) => i !== id);
      }
      this.removeColId = colId;
    },

    resetCsv: function () {
      this.csvPreview = { data: [], headers: [] };
      this.setInputWithId("simulationPasteData", "");
      this.setInputWithId("simulation_add_new_csv_col", "");
    },
    // clear errors and files info form table
    resetAddDiv: function () {
      this.errors.illustration_file2 = false;
      this.errors.illustration_csv2 = false;
      this.$refs.file2.value = null;
      this.illustrationFile.file = null;
      this.illustrationFile.name = "";
      this.fileLoader2 = false;
    },
    // add new data on illustration data object
    addMoreCol: function () {
      this.errors.illustration_file2 = false;
      this.errors.illustration_csv2 = false;
      if (this.addFromFile) {
        if (this.$refs.file2.files[0]) {
          this.addColByFile();
        } else {
          this.errors.illustration_file2 = ["Please upload a valid PDF file."];
        }
      } else {
        let text = this.getInputWithId("simulation_add_new_csv_col");
        if (text) {
          this.addCSVColumn();
        } else {
          this.errors.illustration_csv2 = true;
        }
      }
    },
    // append new csv data in current illustration data table
    addCSVColumn: function () {
      let txt = this.getInputWithId("simulation_add_new_csv_col");
      if (txt) {
        let obj = this.exractCsvText(txt);
        if (obj && obj.headers) {
          let temp_data = [];
          let maxRowLen = this.csvPreview.data.length;
          let maxColLen = this.csvPreview.data.length;
          if (obj.data.length < maxRowLen) {
            maxRowLen = obj.data.length;
          }

          for (var i = 0; i < maxRowLen; i++) {
            temp_data.push([...this.csvPreview.data[i], ...obj.data[i]]);
          }

          this.csvPreview = this.filterObject({
            data: temp_data.map((a) =>
              a.map((i) => (i ? i.replace("-", "") : ""))
            ),
            headers: [...this.csvPreview.headers, ...obj.headers],
          });
          this.setInputWithId("simulation_add_new_csv_col", "");
          document.getElementById("cancelCsvBtn2").click();
        } else {
          this.csvPreview = { data: [], headers: [] };
          alert("Please paste a valid CSV.");
        }
        this.setScrollbar();
      } else {
        this.$toast.warning("Please paste your CSV to add more columns.");
      }
    },
    // exract the csv data
    handleCSV: function (e) {
      let txt = e.clipboardData.getData("text/plain");
      if (txt) {
        let obj = this.exractCsvText(txt);
        if (obj && obj.headers) {
          this.csvPreview = this.filterObject(obj);
        } else {
          this.csvPreview = { data: [], headers: [] };
          alert("Please paste a valid CSV.");
        }
      } else {
        this.csvPreview = { data: [], headers: [] };
      }
      this.setScrollbar();
    },
    setHeader: function (e, index) {
      this.csvPreview.headers[index] = e.target.value;
    },
    // set scrollbar on table
    setScrollbar: function () {
      setTimeout(() => {
        document.getElementById("simulationPasteData").value = "";
        var wrapperInner = document.querySelector(".div-wrapper-inner");
        var illustrationTable = document.querySelector(
          ".illustration-data-table"
        );
        if (illustrationTable) {
          wrapperInner.style.width = illustrationTable.clientWidth + "px";
        }

        var tableResponsive = document.querySelector(".table-responsive");
        var divWrapper = document.querySelector(".div-wrapper");
        divWrapper.addEventListener("scroll", () => {
          tableResponsive.scrollLeft = divWrapper.scrollLeft;
        });
        tableResponsive.addEventListener("scroll", () => {
          divWrapper.scrollLeft = tableResponsive.scrollLeft;
        });

        var addColumnBtn = document.querySelector(".add-table-column-btn");
        var cancelAddBtn = document.querySelector(".cancel-add-data-btn");
        var additionalTextArea = document.querySelector(".additional-textarea");
        if (addColumnBtn) {
          addColumnBtn.addEventListener("click", () => {
            additionalTextArea.classList.remove("d-none");
          });
        }
        if (cancelAddBtn) {
          cancelAddBtn.addEventListener("click", () => {
            additionalTextArea.classList.add("d-none");
          });
        }
      }, 100);
    },
    // remove column from the illustration data table
    removeColumn: function () {
      let temp_data = [];
      if (this.removeColId.length) {
        this.csvPreview.data.forEach((row, index) => {
          temp_data.push(
            row.filter((item, i) => !this.removeColId.includes(i))
          );
        });

        this.csvPreview = this.filterObject({
          data: temp_data,
          headers: this.csvPreview.headers.filter(
            (item, i) => !this.removeColId.includes(i)
          ),
        });
        this.removeColId = [];
        this.setScrollbar();
      } else {
        this.$toast.warning("No column selected for deletion.");
      }
    },
    // parse the csv/excel row
    parseRow2: function (row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function (character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          entry.push(character.replace("\r", ""));
        }
      });
      entries.push(entry.join(""));
      return entries;
    },
    // parse the csv/excel row
    parseRow: function (row) {
      var insideQuote = false;
      var entries = [];
      var entry = [];
      row.split("").forEach(function (character) {
        if (character === '"') {
          insideQuote = !insideQuote;
        } else {
          if (character == "," && !insideQuote) {
            entries.push(entry.join(""));
            entry = [];
          } else {
            entry.push(character);
          }
        }
      });
      entries.push(entry.join(""));
      return entries;
    },
    // Check heading data in row
    checkIsHeader: function (arr = []) {
      var isHeader = false;
      arr.forEach((item, index) => {
        if (isNaN(item.replace("$", "").replaceAll(",", ""))) {
          isHeader = true;
        }
      });
      return isHeader;
    },
    // filter illustarion object data
    filterObject: function (array = { data: [], headers: [] }) {
      array.data = array.data.map((i) =>
        i.map((e) => {
          if (!e) {
            e = "0"; // set default value 0 for blank value
          }
          e = e.split("/")[1] || e.split("/")[0]; // map data for "58/59" format values. ----- return "59" value
          e = e.split(".")[0]; // remove decimal points
          return e;
        })
      );
      array.data = array.data.filter((i, k) => k < this.illustrateYear);
      return array;
    },
    // extract csv data
    exractCsvText: function (values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          let headers = [];
          if (values.match("\t")) {
            data = data.map((i) => i.split("\t"));
          } else {
            if (values.match('"')) {
              data = data.map((i) => this.parseRow(i));
            } else {
              data = data.map((i) => this.parseRow2(i));
            }
          }

          data = data.map((i) => i.map((r) => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter((i) => i.length && !this.checkIsHeader(i));
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return {
            data: data.map((a) => a.map((i) => (i ? i.replace("-", "") : ""))),
            headers: headers,
          };
        } catch (err) {
          setTimeout(() => {
            this.setInputWithId("simulationPasteData", "");
          }, 100);
          return false;
        }
      }
      return false;
    },
  },
  watch: {
    uploadFromFile(e) {
      if (e) {
        this.saveIllustrationTemplate = false; // Handle "Save this Illustration as Template" toggle
      }
    },
    "illustrationFile.name"(e) {
      let obj = this.existingIllustrationList;
      obj = obj.filter((i) => {
        if (i.s3_url && i.template_name === e) {
          return true;
        }
        return false;
      });

      this.illustrationFileError = "";

      if (!e.trim()) {
        this.illustrationFileError = "File name is required.";
      }

      if (e && obj.length) {
        this.illustrationFileError = "This file name has been already taken.";
      }
    },
  },
};
</script>

<style>
.previewCard {
  border: 1.25px solid #f2f2f2 !important;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
}
.dark-green .previewCard,
.dark-blue .previewCard {
  border: 1.25px solid #a0a0a0 !important;
}
.previewCard:hover {
  border: 1.25px solid #000 !important;
}
.dark-green .previewCard:hover,
.dark-blue .previewCard:hover {
  border: 1.25px solid #ccc !important;
}
.previewCard .previewCardHeading {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #b1b1b1;
}
.previewCard.active {
  border: 2px solid #000 !important;
}
.dark-green .previewCard.active {
  border: 2px solid #fff !important;
}
.dark-blue .previewCard.active {
  border: 2px solid #fff !important;
}
.dark-green .previewCard.active .previewCardHeading,
.dark-blue .previewCard.active .previewCardHeading {
  color: #fff;
}
.previewCard.active .previewCardHeading {
  color: #000;
}
.pdf-preview-canvas-modal .modal-dialog {
  max-width: 1200px;
  margin: 2rem auto;
  height: calc(100vh - 70px);
  overflow: hidden;
}
.preview-modal-heading1 {
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #000;
}
.preview-modal-heading2 {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #555555;
  margin: 12px 0 25px 0;
}
.dark-green .preview-modal-heading1,
.dark-blue .preview-modal-heading1,
.dark-green .preview-modal-heading2,
.dark-blue .preview-modal-heading2 {
  color: #fff;
}
.prev-modal-close-btn {
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 999;
  box-shadow: none !important;
  outline: none !important;
  border: none !important;
}
.pdf-preview-canvas-modal .prev-modal-close-btn img {
  position: relative;
  top: -6px;
  left: 1px;
}
.dark-green .prev-modal-close-btn,
.dark-blue .prev-modal-close-btn {
  background-color: #111;
}
.light-green .pdf-preview-canvas-modal .prev-modal-close-btn img,
.light-blue .pdf-preview-canvas-modal .prev-modal-close-btn img {
  display: none;
}
.preview-cancel-btn {
  border: 1px solid #dfdfdf;
  border-radius: 6.5rem;
  padding: 0.625rem 1rem;
  min-width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 14px;
  color: #000;
}
.dark-green .preview-cancel-btn,
.dark-blue .preview-cancel-btn {
  color: #fff;
}
.preview-cancel-btn:hover {
  border: 1px solid #000;
  color: #000;
}
.dark-green .preview-cancel-btn:hover,
.dark-blue .preview-cancel-btn:hover {
  border: 1px solid #fff;
  color: #fff;
}
</style>
