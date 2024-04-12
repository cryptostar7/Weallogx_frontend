<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link
            :to="`/scenario-details/${this.$route.params.scenario}`"
            class="nav-link p-0"
            >Scenario Details</router-link
          >
        </li>
        <li class="done">
          <router-link
            :to="`/illustration-data/${this.$route.params.scenario}`"
            class="nav-link p-0"
            >Illustration Data</router-link
          >
        </li>
        <li class="done">
          <router-link
            :to="`/comparative-vehicles/${this.$route.params.scenario}`"
            class="nav-link p-0"
            >Comparative Vehicles</router-link
          >
        </li>
        <li class="active">
          <router-link to="" class="nav-link p-0"
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
            <scenario-label-component />
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div class="d-flex align-items-center">
                        <label
                          class="historical-paraCheckBox"
                          for="scheduleTemplateCheckbox"
                          id="historicalChecboxLableTop"
                          >Historical Simulations</label
                        >
                        <!-- <div class="form-check form-switch custom-switch ms-2">
                          <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox"
                            checked @change="skipHistoricalStep">
                        </div> -->
                      </div>
                      <!-- <div>
                        <p class="hisToprghtpara fs-14">OPTIONAL</p>
                      </div> -->
                    </div>
                    <div class="after-yes-middle-div my-2">
                      <p class="afterYesMdlPara pb-2">
                        How would you like to build your Index Strategy
                        Allocation?
                      </p>
                      <div
                        class="twoBtnSwtchMainDiv nav nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <div
                          :class="`${createFormScratch ? 'active' : ''}`"
                          id="v-pills-scratch-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-scratch"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-scratch"
                          aria-selected="true"
                          @click="createFormScratch = true"
                        >
                          Create from Scratch
                        </div>
                        <div
                          :class="`${createFormScratch ? '' : 'active'}`"
                          id="v-pills-indexStrategy-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-indexStrategy"
                          type="button"
                          role="tab"
                          aria-controls="v-pills-indexStrategy"
                          aria-selected="false"
                          @click="createFormScratch = false"
                        >
                          Use Existing Index Strategy Allocation
                        </div>
                      </div>
                      <div class="tab-content mt-4" id="v-pills-tabContent">
                        <div
                          :class="`tab-pane fade ${
                            createFormScratch ? 'show active' : ''
                          }`"
                          id="v-pills-scratch"
                          role="tabpanel"
                          aria-labelledby="v-pills-scratch-tab"
                        ></div>
                        <div
                          :class="`tab-pane fade ${
                            createFormScratch ? '' : 'show active'
                          }`"
                          id="v-pills-indexStrategy"
                          role="tabpanel"
                          aria-labelledby="v-pills-indexStrategy-tab"
                        >
                          <div class="container">
                            <div class="row">
                              <div
                                class="col-md-8 offset-md-2 strategyAllocation"
                              >
                                <form action="javascript:void(0)">
                                  <SelectDropdown
                                    :list="portfolio"
                                    label="Choose Existing Index Strategy Allocation"
                                    id="historicalIndexPortfolio"
                                    class="form-group less pt-3"
                                    @inputText="(e) => (portfolioName = e)"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div v-if="createFormScratch">
                        <div
                          :class="`historical-upload-info d-flex ${
                            infoHighlight ? 'infoHighlight' : ''
                          }`"
                        >
                          <div class="me-2 d-flex">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <ellipse
                                class="first-ellipse"
                                cx="6.57563"
                                cy="7.14709"
                                rx="6.57563"
                                ry="6.5"
                                fill="#0E6651"
                              />
                              <ellipse
                                cx="6.57609"
                                cy="4.14709"
                                rx="1.01163"
                                ry="1"
                                fill="white"
                              />
                              <rect
                                x="5.81641"
                                y="6.14709"
                                width="1.51745"
                                height="5"
                                rx="0.758726"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <p class="fs-12 mb-0">
                            It is highly recommended to upload a bare-bones
                            version of the illustration that is accumulation
                            only. Do not include loans, withdrawals, or optional
                            enhancements (such as multipliers or credits)
                            regardless of whether or not they cost additional
                            fees. Those elements will be added later in the
                            process.
                          </p>
                        </div>
                        <div class="pt-2">
                          <div class="form-wrapper-inner px-0 shadow-none">
                            <ul
                              class="nav nav-tabs tax-rate-tabs"
                              role="tablist"
                            >
                              <li class="nav-item" role="presentation">
                                <button
                                  :class="`nav-link ${
                                    uploadFromFile ? 'active' : ''
                                  }`"
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
                                  :class="`nav-link ${
                                    uploadFromFile ? '' : 'active'
                                  }`"
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
                                    <rect
                                      width="7"
                                      height="7"
                                      rx="1"
                                      fill="black"
                                    />
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
                                    for="uploading"
                                    class="p-relative drag-drop-label d-block text-center p-relative overflow-hidden"
                                    :style="{
                                      'border-color': errors.illustration_file
                                        ? 'red'
                                        : '',
                                    }"
                                    @drop="handleDragFile"
                                    @dragover="dragover"
                                    @dragleave="dragleave"
                                  >
                                    <input
                                      type="file"
                                      accept=".pdf"
                                      id="uploading"
                                      name="uploading"
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
                                    <h6
                                      class="semi-bold-fw drag-drop-heading mt-1 pt-1"
                                    >
                                      Drag & Drop
                                    </h6>
                                    <p
                                      class="medium-fw fs-12 mb-0 uploadFileTxtPara"
                                    >
                                      Your files anywhere in this section
                                    </p>
                                    <span
                                      class="fs-12 semi-bold-fw grey-clr-3 d-block"
                                      >or</span
                                    >
                                    <button
                                      type="button"
                                      class="btn choose-file-btn"
                                    >
                                      Choose File
                                    </button>
                                    <span
                                      class="semi-bold-fw no-file-span d-block"
                                      >No file chosen</span
                                    >
                                    <div
                                      :class="`pdf-spinner text-center ${
                                        fileLoader ? '' : 'd-none'
                                      }`"
                                    >
                                      <div>
                                        <div
                                          class="d-flex justify-content-center"
                                        >
                                          <div
                                            class="spinner-border text-secondary"
                                            role="status"
                                          ></div>
                                        </div>
                                        <span class="small mt-3 d-inline-block"
                                          >Please wait while we are extracting
                                          your data from the PDF file</span
                                        >
                                      </div>
                                    </div>
                                  </label>
                                  <p
                                    :class="`file-name fs-14 grey-clr-2 medium-fw text-center mt-1 mb-0 ${
                                      illustrationFile.type === 'new'
                                        ? ''
                                        : 'd-none'
                                    }`"
                                    id="fileName"
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
                                  <h6
                                    class="semi-bold-fw drag-drop-heading text-center"
                                  >
                                    Copy/Paste from CSV
                                  </h6>
                                  <div class="form-group mb-0">
                                    <label
                                      for="pasteData"
                                      class="fs-12 semi-bold-fw"
                                      >Paste Data Here</label
                                    >
                                    <textarea
                                      name=""
                                      id="pasteData"
                                      cols="30"
                                      rows="5"
                                      class="form-control"
                                      @paste="handleCSV"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div class="cur-ol-label text-center">
                                <label>or</label>
                              </div>
                              <div
                                class="form-check form-switch custom-switch mt-2 d-flex align-items-center justify-content-center"
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="useCurrentIllustration"
                                  @change="setIllustratioCsv"
                                />
                                <label
                                  class="form-check-label ms-1 fs-12 semi-bold-fw mb-0"
                                  for="useCurrentIllustration"
                                >
                                  Use Current Illustration</label
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
              <!-- table start -->
              <div
                v-if="csvPreview.headers.length"
                :class="`illustration-data-table-div w-100 ${
                  createFormScratch ? '' : 'd-none'
                }`"
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
                              for="uploading2"
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
                                id="uploading2"
                                name="uploading2"
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
                              id="fileName2"
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
                                id="add_new_csv_col"
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
                          id="cancelCsvBtn"
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

              <div class="text-center mt-30 pt-3">
                <div @click="highlightInfo()">
                  <button
                    class="nav-link btn d-inline-block form-next-btn active fs-14"
                    id="nextBtnVsblOnSlct"
                    @click="submitHandler()"
                    :disabled="!isvalidCsvData"
                  >
                    Next
                  </button>
                </div>
                <span class="d-block mb-3"></span>
                <div class="d-flex justify-content-center pt-3">
                  <button
                    v-if="$route.query.review === 'true'"
                    type="button"
                    :class="`nav-link btn form-back-btn mx-0 fs-14 flex-shrink-0 ${
                      $route.query.review === 'true'
                        ? 'review-summary'
                        : 'historical-simulations'
                    }`"
                    @click="submitHandler(false, true)"
                  >
                    <img
                      src="@/assets/images/icons/chevron-left-grey.svg"
                      class="img-fluid me-1"
                      style="position: relative; top: 0px"
                      alt="Chevron"
                      width="6"
                    />Save & Return to Review
                  </button>
                </div>
                <div class="d-flex justify-content-center">
                  <router-link
                    :to="`/select-historical-simulations/${this.$route.params.scenario}`"
                    class="nav-link btn form-back-btn px-4 fs-14"
                  >
                    <img
                      src="@/assets/images/icons/chevron-left-grey.svg"
                      class="img-fluid"
                      alt="Chevron"
                      width="6"
                    />
                    Back</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <delete-colomn-modal @removeCol="removeColumn" />
    <div
      class="modal fade pdf-preview-canvas-modal"
      id="pdfPreviewCanvasModal"
      tabindex="-1"
      aria-labelledby="pdfPreviewCanvasModalLabel"
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
              <div id="pdfPreview" class="row"></div>
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
    <input type="hidden" id="extractPageNumber" />
  </section>
</template>
<script>
import { get, post, put } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, getFirstError } from "../../../services/helper";
import SelectDropdown from "../common/SelectDropdown.vue";
import DeleteColomnModal from "../../components/modal/DeleteColomnModal.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";

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
  components: { SelectDropdown, DeleteColomnModal, ScenarioLabelComponent },
  data() {
    return {
      createFormScratch: true,
      errors: [],
      portfolio: [],
      portfolioName: "",
      uploadFromFile: true,
      addFromFile: false,
      fileLoader: false,
      fileLoader2: false,
      historicalMedia: null,
      infoHighlight: false,
      illustrationFile: {
        name: "",
        file: null,
        url: "",
        type: "new",
      },
      csvPreview: { data: [], headers: [] },
      // illustrationData: { data: [], headers: [] },
      removeColId: [],
    };
  },
  methods: {
    skipHistoricalStep: function (e) {
      if (!e.target.checked) {
        let confirmation = confirm(
          "Are you sure? Changes you made may not be saved."
        );
        if (confirmation) {
          this.$router.push(`/review-summary/${this.$route.params.scenario}`); // redirect to review summary page if historical simulation toggle off
        } else {
          e.target.checked = true;
        }
      }
    },
    // get portfolio data from API
    getPortfolioId: function () {
      var temp = this.portfolio.filter(
        (i) => i.template_name === this.portfolioName
      )[0];
      return temp ? temp.id : null;
    },
    // set portfolio name
    setPortfolioName: function (e) {
      this.portfolioName = e;
    },

    // show pdf file preview for selecting the extract page
    getPreview: function (file) {
      if (file && file.type == "application/pdf") {
        fileReader.onload = function () {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          var loadingTask = pdfjsLib.getDocument({ data: pdfData });
          loadingTask.promise.then(
            function (pdf) {
              // Fetch the pdf page
              document.getElementById("pdfPreview").innerHTML = null;
              for (var i = 1; i <= pdf.numPages; i++) {
                generateCanvas(i, pdf);
              }

              document.getElementById("stopLoaderBtn").click();
              return new bootstrap.Modal(
                document.getElementById("pdfPreviewCanvasModal")
              ).show();
            },
            function (reason) {
              // PDF loading error
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

          var renderTask = page.render(renderContext);
        });
        divCol.appendChild(can);
        divCol.appendChild(heading);
        divCan.appendChild(divCol);
        document.getElementById("pdfPreview").appendChild(divCan);
        divCol.addEventListener("click", function (e) {
          if (!e.target.hasAttribute("data-page")) {
            let parent = e.target.parentElement;
            let pId = parent.getAttribute("data-page");
            let input = document.getElementById("extractPageNumber");
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

      return validate;
    },

    // remove error
    clearError: function (key) {
      this.errors[key] = false;
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
        this.$store.dispatch("loader", true);
        this.getPreview(file);
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
      var page = this.getInputWithId("extractPageNumber");
      if (!page) {
        this.$toast.warning(
          "Please select at least one page to extract the illustration data."
        );
        return new bootstrap.Modal(
          document.getElementById("pdfPreviewCanvasModal")
        ).toggle();
      }

      if (!file) {
        return false;
      } else {
        this.illustrationFile.file = null;
      }

      if (this.illustrationFile.type === "append") {
        this.fileLoader2 = true;
      } else {
        this.fileLoader = true;
      }

      var data = new FormData();
      data.append("pdffile", file);
      data.append("page", page);
      data.append("business", "Allianz");
      post(getUrl("pdf_extract"), data)
        .then((response) => {
          var res = response.data;
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
                  let maxColLen = this.csvPreview.data.length;

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
                  document.getElementById("cancelCsvBtn").click();
                } else {
                  this.$toast.warning("Please upload a valid PDF file.");
                }
                this.setScrollbar();
              } else {
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

    // clear all table data
    resetCsv: function () {
      this.csvPreview = { data: [], headers: [] };
      this.setInputWithId("pasteData", "");
      this.setInputWithId("add_new_csv_col", "");
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
        let text = this.getInputWithId("add_new_csv_col");
        if (text) {
          this.addCSVColumn();
        } else {
          this.errors.illustration_csv2 = true;
        }
      }
    },

    // append new csv data in current illustration data table
    addCSVColumn: function () {
      let txt = this.getInputWithId("add_new_csv_col");
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
          this.setInputWithId("add_new_csv_col", "");
          document.getElementById("cancelCsvBtn").click();
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
          alert("Please paste a valid CSV..");
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
        document.getElementById("pasteData").value = "";
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
    getIllustrationData: function (id) {
      this.$store.dispatch("loader", true);
      get(`${getUrl("illustration")}${id}`, authHeader())
        .then((response) => {
          var result = response.data.data.illustration_data;
          let illustration_data = [];
          if (result.copy_paste_checkbox) {
            illustration_data = result.copy_paste;
          } else {
            illustration_data = result.upload_from_file;
          }

          let headerKeys = {
            none: "none",
            age: "age",
            year: "duration",
            premium_outlay: "premium_outlay",
            distributions: "net_distributions",
            total_loan_charge: "total_loan_charges",
            account_value: "accumulation_value",
            distribution_loan: "index_loan_credits",
            surrender_value: "cash_value",
            death_benefit: "death_benefit",
          };

          // convert illustration columns ccording to historical column table headers
          illustration_data.headers = illustration_data.headers.map((i) => {
            if (i.includes("total_loan_charge")) {
              i = "total_loan_charge";
            }
            return this.illustrationFieldsIndex[headerKeys[i]];
          });

          this.csvPreview = this.filterObject(illustration_data);
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
    setIllustratioCsv: function (e) {
      let scenario = this.$store.state.data.active_scenario;
      if (e.target.checked) {
        if (scenario.illustration) {
          this.getIllustrationData(scenario.illustration);
        } else {
          this.$toast.error("Data not found.");
        }
      } else {
        this.resetCsv();
      }
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

    // extract csv data
    exractCsvText: function (values = "") {
      let total_columns = 0;
      if (values) {
        try {
          let data = values.split("\n");
          let headers = [];
          if (values.match("\t")) {
            data = data.map((i) => (typeof i === "string" ? i.split("\t") : i));
          } else {
            if (values.match('"')) {
              data = data.map((i) => this.parseRow(i));
            } else {
              data = data.map((i) => this.parseRow2(i));
            }
          }
          data = data.map((i) => i.map((r) => r.replace("\r", "")));
          total_columns = data[0].length;
          data = data.filter(
            (i) => i.filter((j) => j).length && !this.checkIsHeader(i)
          );
          for (var i = 0; i < total_columns; i++) {
            headers.push("");
          }

          return {
            data: data.map((a) => a.map((i) => i.replace("-", ""))),
            headers: headers,
          };
        } catch (err) {
          setTimeout(() => {
            this.setInputWithId("pasteData", "");
          }, 100);
          return false;
        }
      }
      return false;
    },
    highlightInfo: function () {
      if (!this.isvalidCsvData) {
        document.getElementById("historicalChecboxLableTop").scrollIntoView();
        this.infoHighlight = true;
        setTimeout(() => {
          this.infoHighlight = false;
        }, 2000);
      }
    },
    // handle form data
    submitHandler: function (e, review = false) {
      if (e) {
        e.preventDefault();
      }

      if (!this.createFormScratch) {
        return this.$router.push(
          `/historical-simulations/${
            this.$route.params.scenario
          }?pid=${this.getPortfolioId()}`
        );
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

        if (!this.csvPreview.headers.includes("8")) {
          return alert(`${this.illustrationFields["8"].name} is required.`);
        }

        if (!this.csvPreview.headers.includes("9")) {
          return alert(`${this.illustrationFields["9"].name} is required.`);
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

      let upload_file_checkbox = this.uploadFromFile ? true : false;

      let formData = new FormData();
      formData.append("scenario_id", this.$route.params.scenario);

      let file = "";
      if (!this.existingIllustrationId) {
        formData.append("upload_file_checkbox", upload_file_checkbox);

        formData.append("copy_paste_checkbox", !upload_file_checkbox);

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

        let tableData = JSON.stringify(
          this.filterObject({
            data: this.csvPreview.data.map((a) =>
              a.map((i) => (i ? i.replace("-", "") : ""))
            ),
            headers: tempHeader,
          })
        );

        if (upload_file_checkbox) {
          formData.append("upload_from_file", tableData);
        } else {
          formData.append("copy_paste", tableData);
        }
      } else {
        formData.append("illustration_data", this.existingIllustrationId);
      }

      formData.append("scenerio_id", this.$route.params.scenario);
      this.$store.dispatch("loader", true);

      if (this.historicalMedia) {
        put(
          `${getUrl("historical-simulation-object")}${this.historicalMedia}/`,
          formData,
          authHeader()
        )
          .then((response) => {
            this.$store.dispatch("loader", false);
            this.$toast.success(
              response.data.message || "Data saved successfully!"
            );

            var url = review
              ? `/review-summary/${this.$route.params.scenario}`
              : `/historical-simulations/${
                  this.$route.params.scenario
                }?pid=${this.getPortfolioId()}`;

            this.$router.push(url);
          })
          .catch((error) => {
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
          });
      } else {
        post(getUrl("historical-simulation-object"), formData, authHeader())
          .then((response) => {
            this.$store.dispatch("loader", false);

            var url = review
              ? `/review-summary/${this.$route.params.scenario}`
              : `/historical-simulations/${
                  this.$route.params.scenario
                }?pid=${this.getPortfolioId()}`;

            this.$router.push(url);
          })
          .catch((error) => {
            this.$store.dispatch("loader", false);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
          });
      }
    },
    // filter illustarion object data
    filterObject: function (array = { data: [], headers: [] }) {
      array.data = array.data.map((i) =>
        i.map((e) => {
          if (!e) {
            e = "0"; // set default value 0 for blank value
          }
          if (typeof e === "string") {
            e = e.split("/")[1] || e.split("/")[0]; // map data for "58/59" format values. ----- return "59" value
            e = e.split(".")[0]; // remove decimal points
          }
          return e;
        })
      );
      array.data = array.data.filter((i, k) => k < this.illustrateYear);
      return array;
    },
    //populate previous data
    populatePreviousData: function (id) {
      get(`${getUrl("historical-simulation-object")}${id}`, authHeader()).then(
        (response) => {
          let data = response.data;
          this.uploadFromFile = data.upload_file_checkbox;
          if (this.uploadFromFile) {
            let filteredCsv = {
              data: data.upload_from_file.data,
              headers: [],
            };

            filteredCsv.headers = data.upload_from_file.headers.map((i) => {
              if (i.includes("total_loan_charges")) {
                i = "total_loan_charges";
              }
              return this.illustrationFieldsIndex[i];
            });

            this.csvPreview = this.filterObject(filteredCsv);
            this.setScrollbar();
          } else {
            if (data.copy_paste && data.copy_paste.headers.length) {
              let filteredCsv = {
                data: data.copy_paste.data,
                headers: [],
              };

              filteredCsv.headers = data.copy_paste.headers.map((i) => {
                if (i.includes("total_loan_charges")) {
                  i = "total_loan_charges";
                }
                return this.illustrationFieldsIndex[i];
              });

              this.csvPreview = this.filterObject(filteredCsv);
              this.setScrollbar();
            }
          }
        }
      );
    },
  },
  mounted() {
    this.$store.dispatch("loader", true);
    get(getUrl("historical-portfolio"), authHeader())
      .then((response) => {
        this.portfolio = response.data.data.map((item) => {
          return { id: item.id, template_name: item.portfolio_name };
        });
        this.$store.dispatch("loader", false);
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });

    // populate previous data
    this.$store.dispatch("loader", true);
    get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
      .then((response) => {
        let id = response.data.data.historical_media;
        this.historicalMedia = id;
        this.$store.dispatch("activeScenario", response.data.data);
        if (id) {
          this.populatePreviousData(id);
        } else {
          this.$store.dispatch("loader", false);
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_RESPONSE" || error.code === "ERR_NETWORK") {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });
  },
  computed: {
    // return year of illustrations
    illustrateYear() {
      let scenario = this.$store.state.data.active_scenario;
      if (scenario) {
        return scenario.scenerio_details.years_to_illustrate;
      }
      return 0;
    },
    illustrationFields() {
      return [
        { name: "None", value: "none", multiple: true },
        { name: "Age", value: "age", multiple: false },
        {
          name: "Accumulation Value",
          value: "accumulation_value",
          multiple: false,
        },
        {
          name: "Distribution - Loan",
          value: "index_loan_credits",
          multiple: false,
        },
        { name: "Death Benefit", value: "death_benefit", multiple: false },
        {
          name: "Distribution - Withdrawal",
          value: "net_distributions",
          multiple: false,
        },
        {
          name: "Fees",
          value: "total_loan_charges",
          multiple: true,
        },
        { name: "Premium", value: "premium_outlay", multiple: false },

        { name: "Surrender Value", value: "cash_value", multiple: false },
        { name: "Year", value: "duration", multiple: false },
      ];
    },
    illustrationFieldsIndex() {
      return {
        none: "0",
        age: "1",
        accumulation_value: "2",
        index_loan_credits: "3",
        death_benefit: "4",
        net_distributions: "5",
        total_loan_charges: "6",
        premium_outlay: "7",
        cash_value: "8",
        duration: "9",
      };
    },
    isvalidCsvData() {
      if (!this.createFormScratch) {
        if (this.getPortfolioId()) {
          return true;
        } else {
          return false;
        }
      }

      if (
        this.csvPreview &&
        this.csvPreview.headers &&
        this.csvPreview.headers.length > 6
      ) {
        if (!this.csvPreview.headers.includes("1")) {
          return false;
        }

        if (!this.csvPreview.headers.includes("2")) {
          return false;
        }

        if (!this.csvPreview.headers.includes("4")) {
          return false;
        }

        if (!this.csvPreview.headers.includes("8")) {
          return false;
        }

        if (!this.csvPreview.headers.includes("9")) {
          return false;
        }
      } else {
        return false;
      }
      return true;
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
.modal-dialog {
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

.infoHighlight {
  border: 1px solid red;
}
</style>
