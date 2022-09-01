<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done">
          <router-link to="/create-new-scenario" class="nav-link p-0"
            >Scenario Details</router-link
          >
        </li>
        <li class="done">
          <router-link to="/illustration-data" class="nav-link p-0"
            >Illustration Data</router-link
          >
        </li>
        <li class="active">
          <router-link to="comparative-vehicles" class="nav-link p-0"
            >Comparative Vehicles</router-link
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
              <div class="form-wrapper-inner no-style newScenarioVehicleInner">
                <h4 class="form-subheading fs-22 fw-bold">
                  Comparative Vehicles
                </h4>
                <div class="form-group less pt-3">
                  <label
                    for="existingComparativeVehiclePortfolio"
                    class="fs-14 bold-fw"
                    >Use Existing Comparative Vehicle Portfolio</label
                  >
                  <div class="p-relative">
                    <input
                      type="text"
                      id="existingComparativeVehiclePortfolio"
                      placeholder="Select"
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

                <div
                  class="
                    comparative-vehicle-tab-wrapper
                    noVehicleTyupeSelectPadd
                    mb-3
                  "
                  id="noVehicleTyupeSelectPadd"
                >
                  <ul
                    class="nav nav-tabs comparative-vehicle-tabs"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="vehicleType1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#vehicleType1Tab"
                        type="button"
                        role="tab"
                        aria-controls="vehicleType1"
                        aria-selected="false"
                      >
                        <div class="form-check form-switch custom-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="vehicleType1"
                            checked="true"
                          />
                          <label
                            class="form-check-label fs-12 semi-bold-fw mb-0"
                            for="vehicleType1"
                            >Vehicle #1</label
                          >
                        </div>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="vehicleType2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#vehicleType2Tab"
                        type="button"
                        role="tab"
                        aria-controls="vehicleType2"
                        aria-selected="false"
                      >
                        <div class="form-check form-switch custom-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="vehicleType2"
                            checked="false"
                          />
                          <label
                            class="form-check-label fs-12 semi-bold-fw mb-0"
                            for="vehicleType2"
                            >Vehicle #2</label
                          >
                        </div>
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="vehicleType3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#vehicleType3Tab"
                        type="button"
                        role="tab"
                        aria-controls="vehicleType3"
                        aria-selected="false"
                      >
                        <div class="form-check form-switch custom-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="vehicleType3"
                            checked="false"
                          />
                          <label
                            class="form-check-label fs-12 semi-bold-fw mb-0"
                            for="vehicleType3"
                            >Vehicle #3</label
                          >
                        </div>
                      </button>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <!-- -------------------
                      Tab first end here 
                    ------------------------>
                    <div
                      class="tab-pane show active"
                      id="vehicleType1Tab"
                      role="tabpanel"
                      aria-labelledby="vehicleType1-tab"
                    >
                      <!-- --- -->
                      <div class="form-group less pt-3">
                        <label
                          for="comparativeVehicleType"
                          class="fs-14 bold-fw"
                          >Vehicle Type 1</label
                        >
                        <div class="p-relative">
                          <input
                            type="text"
                            id="comparativeVehicleType"
                            placeholder="Select"
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
                      <!-- --- -->

                      <!-- vehicle type taxable area start here-->
                      <div class="vehicleaTypeArea mt-4" id="taxableArea1">
                        <div class="form-group">
                          <label for="existingScenario" class="fs-14 bold-fw"
                            >Use Existing Comparative Vehicle</label
                          >
                          <div class="less">
                            <div class="p-relative">
                              <input
                                type="text"
                                id="historyIndex"
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
                        </div>
                        <span class="or-text-span">or</span>
                        <h4 class="form-subheading fs-14 fw-bold">
                          Create From Scratch
                        </h4>
                        <div class="form-group pt-2 less">
                          <label for="scenarioName" class="fs-12 medium-fw"
                            >Name</label
                          >
                          <input
                            type="text"
                            id="scenarioName"
                            class="form-control"
                          />
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
                            <span class="fs-12 sem-bold-fw grey-clr-2"
                              >Optional</span
                            >
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
                              >Rate of Return</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="clientAge"
                                value="12%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="illustratedAge" class="fs-12 medium-fw"
                              >Fees</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="illustratedAge"
                                value="1.25%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                        </div>
                        <div class="pb-2">
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              preAfeCapitalSwtch
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="capitalGainTax1"
                              @change="capitalGainTax1()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="capitalGainTax1"
                              id="capitalGainLabel1"
                              >Capital Gains Tax</label
                            >
                          </div>
                          <div
                            class="form-group-wrapper capitalDisplayNone pt-2"
                            id="capitalGainTaxInputs1"
                          >
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainRate taxDeferredCapitalGain"
                                class="fs-12 semi-bold-fw"
                                >Capital Gains Tax Rate</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainRate"
                                  value="12%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainPercent"
                                class="fs-12 semi-bold-fw"
                                >% of Account as Capital Gains</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainPercent"
                                  value="1.25%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>

                          <div
                            class="form-check form-switch custom-switch mt-3"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="saveVehicleTempName1"
                              @change="saveVehicleRadio1()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="saveVehicleTempName1"
                              >Save this Vehicle as Template</label
                            >
                          </div>
                        </div>
                        <div
                          class="form-group less saveVehicleTempNameInput"
                          id="vehicleTempName1"
                        >
                          <label
                            for="vehicleTemplateName"
                            class="fs-12 semi-bold-fw"
                            >Vehicle Template Name</label
                          >
                          <input
                            type="text"
                            id="vehicleTemplateName"
                            class="form-control"
                            value="MF 6.5% ret 1.5% fee no cap gains"
                          />
                        </div>
                      </div>
                      <!-- vehicle type taxable area end here -->
                    </div>
                    <!-- -------------------
                      Tab first end here 
                    ------------------------>

                    <!-- -------------------
                      Tab second start here 
                    ------------------------>
                    <div
                      class="tab-pane"
                      id="vehicleType2Tab"
                      role="tabpanel"
                      aria-labelledby="vehicleType2-tab"
                    >
                      <!-- --- -->
                      <div class="form-group less pt-3">
                        <label
                          for="comparativeVehicleType2"
                          class="fs-14 bold-fw"
                          >Vehicle Type 2</label
                        >
                        <div class="p-relative">
                          <input
                            type="text"
                            id="comparativeVehicleType2"
                            placeholder="Select"
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
                      <!-- --- -->

                      <!-- vehicle type taxable area start here-->
                      <div class="vehicleaTypeArea" id="taxableArea2">
                        <div class="form-group">
                          <label for="existingScenario" class="fs-14 bold-fw"
                            >Use Existing Comparative Vehicle</label
                          >
                          <div class="less">
                            <div class="p-relative">
                              <input
                                type="text"
                                id="historyIndex2"
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
                        </div>
                        <span class="or-text-span">or</span>
                        <h4 class="form-subheading fs-14 fw-bold">
                          Create From Scratch
                        </h4>
                        <div class="form-group pt-2 less">
                          <label for="scenarioName" class="fs-12 medium-fw"
                            >Name</label
                          >
                          <input
                            type="text"
                            id="scenarioName"
                            class="form-control"
                          />
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
                            <span class="fs-12 sem-bold-fw grey-clr-2"
                              >Optional</span
                            >
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
                              >Rate of Return</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="clientAge"
                                value="12%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="illustratedAge" class="fs-12 medium-fw"
                              >Fees</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="illustratedAge"
                                value="1.25%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                        </div>
                        <div class="pb-2">
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              preAfeCapitalSwtch2
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="capitalGainTax2"
                              @change="capitalGainTax2()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="capitalGainTax2"
                              id="capitalGainLabel2"
                              >Capital Gains Tax</label
                            >
                          </div>
                          <div
                            class="form-group-wrapper capitalDisplayNone pt-2"
                            id="capitalGainTaxInputs2"
                          >
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainRate"
                                class="fs-12 semi-bold-fw"
                                >Capital Gains Tax Rate</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainRate"
                                  value="12%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainPercent"
                                class="fs-12 semi-bold-fw"
                                >% of Account as Capital Gains</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainPercent"
                                  value="1.25%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>

                          <div
                            class="form-check form-switch custom-switch mt-3"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="saveVehicleTempName2"
                              @change="saveVehicleRadio2()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="saveVehicleTempName2"
                              >Save this Vehicle as Template</label
                            >
                          </div>
                        </div>
                        <div
                          class="form-group less saveVehicleTempNameInput"
                          id="vehicleTempName2"
                        >
                          <label
                            for="vehicleTemplateName"
                            class="fs-12 semi-bold-fw"
                            >Vehicle Template Name</label
                          >
                          <input
                            type="text"
                            id="vehicleTemplateName"
                            class="form-control"
                            value="MF 6.5% ret 1.5% fee no cap gains"
                          />
                        </div>
                      </div>
                      <!-- vehicle type taxable area end here -->
                    </div>

                    <!-- -------------------
                      Tab second start here 
                    ------------------------>

                    <!-- -------------------
                      Tab third start here 
                    ------------------------>
                    <div
                      class="tab-pane"
                      id="vehicleType3Tab"
                      role="tabpanel"
                      aria-labelledby="vehicleType3-tab"
                    >
                      <div class="form-group less pt-3">
                        <label
                          for="comparativeVehicleType3"
                          class="fs-14 bold-fw"
                          >Vehicle Type 3</label
                        >
                        <div class="p-relative">
                          <input
                            type="text"
                            id="comparativeVehicleType3"
                            placeholder="Select"
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
                      <!-- --- -->

                      <!-- vehicle type taxable area start here-->
                      <div class="vehicleaTypeArea" id="taxableArea3">
                        <div class="form-group">
                          <label for="existingScenario" class="fs-14 bold-fw"
                            >Use Existing Comparative Vehicle</label
                          >
                          <div class="less">
                            <div class="p-relative">
                              <input
                                type="text"
                                id="historyIndex3"
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
                        </div>
                        <span class="or-text-span">or</span>
                        <h4 class="form-subheading fs-14 fw-bold">
                          Create From Scratch
                        </h4>
                        <div class="form-group pt-2 less">
                          <label for="scenarioName" class="fs-12 medium-fw"
                            >Name</label
                          >

                          <input
                            type="text"
                            id="scenarioName"
                            class="form-control"
                          />
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
                            <span class="fs-12 sem-bold-fw grey-clr-2"
                              >Optional</span
                            >
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
                              >Rate of Return</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="clientAge"
                                value="12%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="illustratedAge" class="fs-12 medium-fw"
                              >Fees</label
                            >
                            <div class="percent-input-div">
                              <input
                                type="text"
                                id="illustratedAge"
                                value="1.25%"
                                required
                                class="form-control percent-input"
                              />
                              <span class="percent-span">%</span>
                            </div>
                          </div>
                        </div>
                        <div class="pb-2">
                          <div
                            class="
                              form-check form-switch
                              custom-switch
                              preAfeCapitalSwtch3
                            "
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="capitalGainTax3"
                              @change="capitalGainTax3()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="capitalGainTax3"
                              id="capitalGainLabel3"
                              >Capital Gains Tax</label
                            >
                          </div>
                          <div
                            class="form-group-wrapper capitalDisplayNone pt-2"
                            id="capitalGainTaxInputs3"
                          >
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainRate"
                                class="fs-12 semi-bold-fw"
                                >Capital Gains Tax Rate</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainRate"
                                  value="12%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                            <div class="form-group pb-0 m-0">
                              <label
                                for="capitaGainPercent"
                                class="fs-12 semi-bold-fw"
                                >% of Account as Capital Gains</label
                              >
                              <div class="percent-input-div">
                                <input
                                  type="text"
                                  id="capitaGainPercent"
                                  value="1.25%"
                                  class="form-control percent-input"
                                  required
                                />
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>

                          <div
                            class="form-check form-switch custom-switch mt-3"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="saveVehicleTempName3"
                              @change="saveVehicleRadio3()"
                            />
                            <label
                              class="form-check-label fs-12 semi-bold-fw mb-0"
                              for="saveVehicleTempName3"
                              >Save this Vehicle as Template</label
                            >
                          </div>
                        </div>
                        <div
                          class="form-group less saveVehicleTempNameInput"
                          id="vehicleTempName3"
                        >
                          <label
                            for="vehicleTemplateName"
                            class="fs-12 semi-bold-fw"
                            >Vehicle Template Name</label
                          >
                          <input
                            type="text"
                            id="vehicleTemplateName"
                            class="form-control"
                            value="MF 6.5% ret 1.5% fee no cap gains"
                          />
                        </div>
                      </div>
                      <!-- vehicle type taxable area end here -->
                    </div>
                    <!-- -------------------
                      Tab third end here 
                    ------------------------>
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-md-9">
                  <div class="bottom-buttons-main-div">
                    <div class="text-center mt-30">
                      <a
                        href="javascript:void(0)"
                        class="btn AdtnlCmprtVhclBtn fs-14"
                        >Add Additional Comparative Vehicle</a
                      >
                    </div>
                    <div
                      class="
                        form-check form-switch
                        custom-switch
                        align-items-center
                        justify-content-start
                        mb-3
                        mt-30
                      "
                      id="saveComparativePortPolioDiv"
                    >
                      <input
                        class="form-check-input me-1"
                        type="checkbox"
                        role="switch"
                        id="saveComparativePortPolio10"
                        onchange="saveVehicleRadio10()"
                      />
                      <label
                        class="form-check-label fs-12 semi-bold-fw mb-0"
                        for="saveComparativePortPolio10"
                        >Save as Comparative Vehicle Portfolio</label
                      >
                    </div>
                    <div
                      class="
                        form-group
                        less
                        saveVehicleTempNameInput
                        width-adjust
                      "
                      id="vehicleTempName10"
                      style="display: none"
                    >
                      <label
                        for="vehicleTemplateName10"
                        class="fs-12 semi-bold-fw"
                        >Portfolio Name</label
                      >
                      <input
                        type="text"
                        id="vehicleTemplateName10"
                        class="form-control width-adjust"
                      />
                    </div>
                    <div class="text-center mt-30 d-flex justify-content-start">
                      <div class="d-flex">
                        <div>
                          <router-link
                            to="/illustration-data"
                            class="nav-link btn form-back-btn fs-14"
                            disabled="true"
                            ><img
                              src="@/assets/images/icons/chevron-left-grey.svg"
                              class="img-fluid"
                              alt="Chevron"
                              width="6"
                            />
                            Back</router-link
                          >
                        </div>
                        <div>
                          <router-link
                            to="/historical-simulations"
                            class="
                              nav-link
                              btn
                              form-next-btn
                              fs-14
                              active
                              comparative-next-btn
                            "
                            disabled="true"
                            >Next</router-link
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
      </div>
    </div>
  </section>
</template>
<script>
export default {
  components: {RouterLink},
  methods: {
    capitalGainTax1: function () {
      var capitalGainTax1 = document.getElementById("capitalGainTax1");
      if (capitalGainTax1.checked) {
        document
          .getElementById("capitalGainTaxInputs1")
          .classList.remove("capitalDisplayNone");
      } else {
        document
          .getElementById("capitalGainTaxInputs1")
          .classList.add("capitalDisplayNone");
      }
    },
    saveVehicleRadio1: function () {
      var saveTemplateRadio = document.getElementById("saveVehicleTempName1");
      if (saveTemplateRadio.checked) {
        document.getElementById("vehicleTempName1").style.display = "unset";
      } else {
        document.getElementById("vehicleTempName1").style.display = "none";
      }
    },
    capitalGainTax2: function () {
      var capitalGainTax2 = document.getElementById("capitalGainTax2");
      if (capitalGainTax2.checked) {
        document
          .getElementById("capitalGainTaxInputs2")
          .classList.remove("capitalDisplayNone");
      } else {
        document
          .getElementById("capitalGainTaxInputs2")
          .classList.add("capitalDisplayNone");
      }
    },
    saveVehicleRadio2: function () {
      var saveTemplateRadio = document.getElementById("saveVehicleTempName2");
      if (saveTemplateRadio.checked) {
        document.getElementById("vehicleTempName2").style.display = "unset";
      } else {
        document.getElementById("vehicleTempName2").style.display = "none";
      }
    },
    saveVehicleRadio3: function () {
      var saveTemplateRadio = document.getElementById("saveVehicleTempName3");
      if (saveTemplateRadio.checked) {
        document.getElementById("vehicleTempName3").style.display = "unset";
      } else {
        document.getElementById("vehicleTempName3").style.display = "none";
      }
    },
    capitalGainTax3: function () {
      var capitalGainTax3 = document.getElementById("capitalGainTax3");
      if (capitalGainTax3.checked) {
        document
          .getElementById("capitalGainTaxInputs3")
          .classList.remove("capitalDisplayNone");
      } else {
        document
          .getElementById("capitalGainTaxInputs3")
          .classList.add("capitalDisplayNone");
      }
    },
  },
};
</script>
<style lang="">
</style>