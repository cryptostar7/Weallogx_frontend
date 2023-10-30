<template>
  <section
    class="main-section"
    id="main-section-element"
    :style="{ 'scroll-padding-top': '100px' }"
  >
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-md-9">
          <div class="main-form-heading">
            <div class="heading-container">
              <h2
                class="fs-34 bold-fw main-tab-heading me-2"
                id="stopLoaderBtn"
                @click="$store.dispatch('loader', false)"
              >
                New Scenario
              </h2>
            </div>
          </div>
          <form
            class="main-form-div"
            @submit="submitHandler"
            autocomplete="off"
          >
            <div class="form-wrapper side-grey-line">
              <div class="form-wrapper-inner">
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
                        for="uploading"
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
                          @paste="handleCSV"
                        ></textarea>
                      </div>
                    </div>
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
                      ? 'review-summary'
                      : 'scenario-details'
                  }/${$route.params.scenario}`"
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
import DeleteColomnModal from "../components/modal/DeleteColomnModal.vue";
import { get, post, put } from "../../network/requests.js";
import ScenarioLabelComponent from "../components/common/ScenarioLabelComponent.vue";
import { getUrl } from "../../network/url.js";

import {
  getFirstError,
  authHeader,
  getNumber,
  getBaseUrl,
  getCurrentScenario,
  getScenarioStep2,
  setScenarioStep2,
  mapClientList,
} from "../../services/helper.js";


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
pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const fileReader = new FileReader();

export default {
  components: {
    DeleteColomnModal,
    ScenarioLabelComponent,
  },
  refs: ["cancelCsvBtn"],
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
    // handle pdf file preview modal
    document
      .getElementById("pdfPreviewCanvasModal")
      .addEventListener("hidden.bs.modal", function (event) {
        document.getElementById("uploading").value = null;
        if (document.getElementById("uploading2")) {
          document.getElementById("uploading2").value = null;
        }
        document.getElementById("extractPageNumber").value = null;
        document.getElementById("fileName").innerText = "";
        if (document.getElementById("fileName2")) {
          document.getElementById("fileName2").innerText = "";
        }
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
    // show pdf file preview for selecting the extract page
    getPreview: function (file) {
      if (file && file.type == "application/pdf") {
        fileReader.onload = function () {
          var pdfData = new Uint8Array(this.result);
          // Using DocumentInitParameters object to load binary data.
          console.log(pdfjsLib);
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
              document.getElementById("stopLoaderBtn").click();
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
</style>
