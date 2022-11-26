<script setup>
import { RouterLink } from "vue-router";
import { putPercentage, putYears } from '../../../services/put-percentage';
import SelectDropdown from "../common/SelectDropdown.vue";
</script>
<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="active">
          <router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Illustration Data</a>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Comparative Vehicles</a>
        </li>
        <li class="">
          <a href="javascript:void(0)" class="nav-link p-0">Historical Simulations</a>
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
                <SelectDropdown
                  :list="clients"
                  label="Client"
                  id="clientSelected"
                 />
                <hr class="hr-separator" size="1.25" />
                <SelectDropdown
                  :list="existingScenarioList"
                  label="Use Existing Scnario"
                  id="existingScenario"
                 />
                <span class="or-text-span">or</span>
                <h4 class="form-subheading fs-14 fw-bold">
                  Create From Scratch
                </h4>
                <div class="form-group pt-2 less">
                  <label for="scenarioName" class="fs-12 medium-fw"
                    >Scenario Name</label
                  >
                  <input type="text" id="scenarioName" class="form-control" />
                </div>
                <div class="form-group less">
                  <div
                    class="
                      label-group
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                  >
                    <label for="scenarioDesc" class="fs-12 medium-fw"
                      >Description</label
                    >
                    <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                  </div>
                  <textarea
                    name=""
                    id="scenarioDesc"
                    cols="30"
                    rows="2"
                    class="form-control"
                  ></textarea>
                </div>

                <div class="form-group-wrapper">
                  <div class="form-group">
                    <label for="clientAge" class="fs-12 medium-fw"
                      >Client Age
                      <span class="regular-fw"
                        >Year 1 age on illustration</span
                      ></label
                    >
                    <input
                      type="text"
                      id="clientAge"
                      value=""
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="illustratedAge" class="fs-12 medium-fw"
                      ># Years to Illustrate</label
                    >
                    <div class="year-input-div">
                      <input
                        type="text"
                        id="illustratedAge"
                        v-model="illustrateYear"
                        class="form-control year-input"
                        @keyup="setYears"
                      />
                      <span class="year-span">years</span>
                    </div>
                  </div>
                </div>

                <ul class="nav nav-tabs tax-rate-tabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="simpleTaxRate-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#simpleTaxRate"
                      type="button"
                      role="tab"
                      aria-controls="simpleTaxRate"
                      aria-selected="true"
                    >
                      <svg
                        class="simpleTaxRateImg"
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="8"
                          height="4"
                          rx="0.5"
                          stroke="black"
                        />
                        <rect
                          x="0.5"
                          y="9.5"
                          width="8"
                          height="4"
                          rx="0.5"
                          stroke="black"
                        />
                        <rect
                          x="1.25"
                          y="6.75"
                          width="6.5"
                          height="0.5"
                          rx="0.25"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                      </svg>
                      &nbsp;Simple Tax Rate
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="scheduleTaxRate-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#scheduleTaxRate"
                      type="button"
                      role="tab"
                      aria-controls="scheduleTaxRate"
                      aria-selected="false"
                    >
                      <svg
                        class="scheduleTaxRateImg"
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.25"
                          y="0.25"
                          width="8.5"
                          height="0.5"
                          rx="0.25"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="0.25"
                          y="3.25"
                          width="8.5"
                          height="0.5"
                          rx="0.25"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="0.25"
                          y="6.25"
                          width="8.5"
                          height="0.5"
                          rx="0.25"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <rect
                          x="0.25"
                          y="9.25"
                          width="8.5"
                          height="0.5"
                          rx="0.25"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                      </svg>
                      &nbsp;Schedule Tax Rate
                    </button>
                  </li>
                </ul>

                <div class="tab-content pt-3 mt-1">
                  <div
                    class="tab-pane fade show active"
                    id="simpleTaxRate"
                    role="tabpanel"
                    aria-labelledby="simpleTaxRate-tab"
                  >
                    <div class="form-group-wrapper">
                      <div class="form-group">
                        <label for="firstTaxRate" class="fs-12 medium-fw"
                          >First Tax Rate %</label
                        >
                        <div class="percent-input-div">
                          <input
                            type="text"
                            id="firstTaxRate"
                            class="form-control percent-input"
                            v-model="firstTaxRate"
                            required
                          />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRate" class="fs-12 medium-fw"
                          >Second Tax Rate %</label
                        >
                        <div class="percent-input-div">
                          <input
                            type="text"
                            id="secondTaxRate"
                            :class="`form-control ${firstTaxRate ? '':'percent-input'}`"
                            :disabled="firstTaxRate ? false : true"
                          />
                          <span class="percent-span">%</span>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="secondTaxRateYear" class="fs-12 medium-fw"
                          >Second Tax Rate Year</label
                        >
                        <select
                          name=""
                          id="secondTaxRateYear"
                          class="form-select form-control"
                          :disabled="firstTaxRate ? false : true"
                        >
                          <option value=""></option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                          <option value="">6</option>
                          <option value="">7</option>
                          <option value="">8</option>
                          <option value="">9</option>
                          <option value="">10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="scheduleTaxRate"
                    role="tabpanel"
                    aria-labelledby="scheduleTaxRate-tab"
                  >
                    <SelectDropdown
                      :list="existingScheduleList"
                      label="Use Existing Schedule"
                      id="existingSchedule"
                     />

                    <div class="form-group max-width-320">
                      <table
                        class="table tax-rate-table text-center"
                        id="scheduleTaxRateTable"
                      >
                        <thead>
                          <tr>
                            <th width="50%">Year</th>
                            <th width="50%">Tax Rate %</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-if="!Number(illustrateYear)">
                            <td><br /></td>
                            <td><br /></td>
                          </tr>
                          <tr v-for="index in Number(illustrateYear)" :key="index">
                            <td><div class="fs-15">{{index}}</div></td>
                            <td><div class="p-relative table-input-div percent-input-div"><input type="text" class="form-control percent-input" required><span class="percent-span">%</span></div></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="pb-3">
                        <div class="form-check form-switch custom-switch pt-2">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            v-model="saveTemplate"
                            id="scheduleTemplateCheckbox"
                          />
                          <label
                            class="form-check-label fs-12 semi-bold-fw mb-0"
                            for="scheduleTemplateCheckbox"
                            >Save this Schedule as Template</label
                          >
                        </div>

                        <div
                          class="form-group pt-2"
                          id="templateNameDiv"
                          :style="{'display': saveTemplate ? '' : 'none'}"
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
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mt-30">
                <router-link
                  to="/illustration-data"
                  class="nav-link btn form-next-btn active fs-14"
                  disabled="true"
                  >Next</router-link
                >
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
  components: { RouterLink, SelectDropdown },
  data() {
    return {
      clients: [
        "Alberta, Carter",
        "Arnold, Krista",
        "Bryant, Roger",
        "Campbell, Willie",
        "Harrison, Maryann",
        "Peterson, Kristine",
        "Tucker, Delores ",
        "Young, Marjorie",
        "Zebra, Shelly",
      ],
      existingScenarioList: [
        "Scenario 1",
        "Scenario 2",
        "Scenario 3",
        "Scenario 4",
        "Scenario 5",
      ],
      existingScheduleList: [
        "Schedule 1",
        "Schedule 2",
        "Schedule 3",
        "Schedule 4",
        "Schedule 5",
      ],
      saveTemplate:false,
      illustrateYear:'',
      firstTaxRate:'',
    };
  },
  updated(){
    putPercentage();
  },
  mounted() {
    putPercentage();
    putYears();
  },
};
</script>
