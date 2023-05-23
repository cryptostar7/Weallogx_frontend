<template>
  <div>
    <section class="main-section">
      <scenario-steps />
      <div class="container-fluid">
        <div class="row justify-content-center form-row">
          <div class="col-md-9">
            <div class="main-form-div">
              <scenario-label-component />
              <div class="form-wrapper side-grey-line">
                <div class="form-wrapper-inner no-style newScenarioVehicleInner">
                  <h4 class="form-subheading fs-22 fw-bold"> Comparative Vehicles </h4>
                  <SelectDropdown :list="cvPortfolios" label="Use Existing Comparative Vehicle Portfolio" id="existingComparativeVehiclePortfolio"  class="form-group less pt-3" :error="errors.existing_portfolio" @clearError="() => errors.existing_portfolio = false" @onSelectItem="setExistingPortfolioId" @inputText="setExistingPortfolioName"/>
                  <div :class="`comparative-vehicle-tab-wrapper ${vehicle.tab ? '' : 'noVehicleTyupeSelectPadd'} mb-3`" id="noVehicleTyupeSelectPadd">
                    <ul class="nav nav-tabs comparative-vehicle-tabs" role="tablist">
                      <li class="nav-item" role="presentation" @click="setVehicleTab(1)">
                        <button :class="`nav-link ${vehicle.tab === 1 && tabs.vehicle1 ? 'active' : `${tabs.vehicle1 ? 'activeOnly':''}`}`" id="vehicleType1-tab" type="button" role="tab" aria-controls="vehicleType1">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType1" checked="true"/> 
                            <label class="form-check-label no-event fs-12 semi-bold-fw mb-0" for="">Vehicle #1</label> 
                          </div>
                        </button> 
                      </li>
                      <li class="nav-item" role="presentation" @click="setVehicleTab(2)">
                        <button :class="`nav-link ${vehicle.tab === 2 && tabs.vehicle2 ? 'active' : `${tabs.vehicle2 ? 'activeOnly':''}`}`" id="vehicleType2-tab" type="button" role="tab" aria-controls="vehicleType2">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType2" @click="setActiveTab2" /> 
                            <label class="form-check-label no-event fs-12 semi-bold-fw mb-0" for="" @click="setActiveTab2">Vehicle #2</label> 
                          </div>
                        </button> 
                      </li>
                      <li class="nav-item" role="presentation" @click="setVehicleTab(3)">
                        <button :class="`nav-link ${vehicle.tab === 3 && tabs.vehicle3 ? 'active' : `${tabs.vehicle3 ? 'activeOnly':''}`}`" id="vehicleType3-tab" type="button" role="tab" aria-controls="vehicleType3">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType3" @click="setActiveTab3" /> 
                            <label class="form-check-label no-event fs-12 semi-bold-fw mb-0" for="" @click="setActiveTab3">Vehicle #3</label> 
                          </div>
                        </button> 
                      </li>
                    </ul>
                    <form class="tab-content" autocomplete="off">
                      <div :class="`tab-pane ${vehicle.tab === 1 ? 'active':''}`" id="vehicleType1Tab" role="tabpanel" aria-labelledby="vehicleType1-tab">
                        <SelectDropdown :list="dropdown.VehicleType" label="Vehicle Type 1" id="comparativeVehicleType" class="form-group less pt-3"  :error="errors.vehicle1.type_id" @clearError="() => errors.vehicle1.type_id = false" :defaultSelected="defaultVehicle.vehicle1.template_name" @onSelectItem="(e) => setVehicleType(1, e)" @inputText="(e) => setVehicleTypeName(1, e)" :showAll="true"/>
                        <div :class="`${this.vehicle.vehicle1.type_id && vehicleSelected ? '' : 'vehicleaTypeArea'} mt-4`" id="taxableArea1">
                          <SelectDropdown :list="existingVehicles" label="Use Existing Comparative Vehicle" id="comparativeVehicleType" :error="errors.existing_vehicle1" @clearError="() => errors.existing_vehicle1 = false" @onSelectItem="(e) => setExistingVehicle(1, e)" @inputText="(e) => setExistingVehicleName(1, e)"/> 
                          <span class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> 
                            <label for="scenarioName" class="fs-12 medium-fw">Name</label> 
                            <input type="text" id="scenarioName" v-model="vehicle.vehicle1.name" class="form-control" @keyup="() => errors.vehicle1.name = false"/> 
                            <small class="text-danger" v-if="errors.vehicle1.name">{{errors.vehicle1.name[0]}}</small>
                          </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> 
                              <label for="scenarioDesc" class="fs-12 medium-fw">Description</label> 
                              <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                            </div>
                            <textarea name="" id="scenarioDesc" cols="30" rows="2" class="form-control" v-model="vehicle.vehicle1.description"></textarea>
                            <small class="text-danger" v-if="errors.vehicle1.description">{{errors.vehicle1.description[0]}}</small>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> 
                              <label for="ror1" class="fs-12 medium-fw">Rate of Return</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="1" max="99" id="ror1" class="form-control handleLimit" @keyup="() => errors.vehicle1.ror = false" /> 
                                <span class="percent-span">%</span>
                              </div>
                              <small class="text-danger" v-if="errors.vehicle1.ror">{{errors.vehicle1.ror[0]}}</small>
                            </div>
                            <div class="form-group"> 
                              <label for="fees1" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="0" max="99" id="fees1" class="form-control handleLimit" @keyup="() => errors.vehicle1.fees = false" /> 
                                <span class="percent-span">%</span>
                              </div>
                              <small class="text-danger" v-if="errors.vehicle1.fees">{{errors.vehicle1.fees[0]}}</small>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="capitalGainTax1" v-model="vehicle.vehicle1.capitalGains" :checked="vehicle.vehicle1.capitalGains" />
                              <label class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax1" id="capitalGainLabel1">{{vehicle.vehicle1.type_id === 1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> 
                            </div>
                            <div :class="`form-group-wrapper ${vehicle.vehicle1.capitalGains && vehicle.vehicle1.type_id === 1 ? '' : 'capitalDisplayNone'} pt-2`" id="capitalGainTaxInputs1">
                              <div class="form-group pb-0 m-0"> 
                                <label for="cg_tax_rate1" class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="99" id="cg_tax_rate1" class="form-control handleLimit" @keyup="() => errors.vehicle1.cg_tax = false"  />
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle1.cg_tax">{{errors.vehicle1.cg_tax[0]}}</small>
                              </div>
                              <div class="form-group pb-0 m-0">
                                <label for="percent_of_account_as_cg1" class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="100" id="percent_of_account_as_cg1" class="form-control handleLimit" @keyup="() => errors.vehicle1.cg_percent = false"  /> 
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle1.cg_percent">{{errors.vehicle1.cg_percent[0]}}</small>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveVehicleTempName1" v-model="vehicle.vehicle1.templateCheckbox" /> 
                                <label class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName1">
                                  Save this Vehicle as Template
                                </label> 
                            </div>
                          </div>
                          <div :style="{display: vehicle.vehicle1.templateCheckbox ? 'unset' : 'none'}"  class="form-group less" id="vehicleTempName1">
                            <label for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label>
                            <input type="text" id="vehicleTemplateName" class="form-control" v-model="vehicle.vehicle1.template_name" /> 
                          </div>
                        </div>
                      </div>
                      <div :class="`tab-pane ${vehicle.tab === 2 ? 'active':''}`" id="vehicleType2Tab" role="tabpanel" aria-labelledby="vehicleType2-tab">
                        <SelectDropdown :list="dropdown.VehicleType" label="Vehicle Type 2" id="comparativeVehicleType2" class="form-group less pt-3"  :error="errors.vehicle2.type_id" @clearError="() => errors.vehicle2.type_id = false" :defaultSelected="defaultVehicle.vehicle2.template_name" @onSelectItem="(e) => setVehicleType(2, e)" @inputText="(e) => setVehicleTypeName(2, e)" :showAll="true" />
                        <div :class="`${vehicle.vehicle2.type_id ? '' : 'vehicleaTypeArea'} mt-4`" id="taxableArea2">
                          <SelectDropdown :list="existingVehicles" label="Use Existing Comparative Vehicle" id="comparativeVehicleType" :error="errors.existing_vehicle2" @clearError="() => errors.existing_vehicle2 = false" @onSelectItem="(e) => setExistingVehicle(2, e)"  @inputText="(e) => setExistingVehicleName(2, e)" />
                           <span class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> 
                             <label for="scenarioName" class="fs-12 medium-fw">Name</label>
                             <input type="text" id="scenarioName"  class="form-control" v-model="vehicle.vehicle2.name" @keyup="() => errors.vehicle2.name = false" />
                             <small class="text-danger" v-if="errors.vehicle2.name">{{errors.vehicle2.name[0]}}</small>
                          </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> 
                              <label for="scenarioDesc" class="fs-12 medium-fw">Description</label>
                               <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span> 
                              </div>
                              <textarea name="" id="scenarioDesc" cols="30" rows="2" class="form-control"  v-model="vehicle.vehicle2.description"></textarea>
                             <small class="text-danger" v-if="errors.vehicle2.description">{{errors.vehicle2.description[0]}}</small>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> 
                              <label for="ror2" class="fs-12 medium-fw">Rate of Return</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="1" max="99" id="ror2" class="form-control handleLimit" @keyup="() => errors.vehicle2.ror = false"/> 
                                <span class="percent-span">%</span>
                              </div>
                              <small class="text-danger" v-if="errors.vehicle2.ror">{{errors.vehicle2.ror[0]}}</small>
                            </div>
                            <div class="form-group"> 
                              <label for="fees2" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="0" max="99" id="fees2" class="form-control handleLimit" @keyup="() => errors.vehicle2.fees = false" /> 
                                <span class="percent-span">%</span>
                              </div>
                              <small class="text-danger" v-if="errors.vehicle2.fees">{{errors.vehicle2.fees[0]}}</small>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch2">
                              <input class="form-check-input" type="checkbox" role="switch" id="capitalGainTax2" v-model="vehicle.vehicle2.capitalGains" :checked="vehicle.vehicle2.type_id === 1 ? false : true" /> 
                              <label class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax2" id="capitalGainLabel2">{{vehicle.vehicle2.type_id === 1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> 
                            </div>
                            <div :class="`form-group-wrapper ${vehicle.vehicle2.capitalGains && vehicle.vehicle2.type_id === 1 ? '' : 'capitalDisplayNone'} pt-2`"  id="capitalGainTaxInputs2">
                              <div class="form-group pb-0 m-0"> 
                                <label for="cg_tax_rate2" class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="99" id="cg_tax_rate2" value="" class="form-control handleLimit" @keyup="() => errors.vehicle2.cg_tax = false" />
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle2.cg_tax">{{errors.vehicle2.cg_tax[0]}}</small>
                              </div>
                              <div class="form-group pb-0 m-0"> 
                                <label for="percent_of_account_as_cg2" class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="100" id="percent_of_account_as_cg2" class="form-control handleLimit" @keyup="() => errors.vehicle2.cg_percent = false" />
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle2.cg_percent">{{errors.vehicle2.cg_percent[0]}}</small>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveVehicleTempName2" v-model="vehicle.vehicle2.templateCheckbox" /> 
                              <label class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName2">Save this Vehicle as Template</label> 
                            </div>
                          </div>
                          <div :style="{display: vehicle.vehicle2.templateCheckbox ? 'unset' : 'none'}" class="form-group less" id="vehicleTempName2"> 
                            <label for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label> 
                            <input type="text" id="vehicleTemplateName" class="form-control" v-model="vehicle.vehicle2.template_name" /> 
                          </div>
                        </div>
                      </div>
                      <div :class="`tab-pane ${vehicle.tab === 3 ? 'active':''}`" id="vehicleType3Tab" role="tabpanel" aria-labelledby="vehicleType3-tab">
                        <SelectDropdown :list="dropdown.VehicleType" label="Vehicle Type 3"  id="comparativeVehicleType3" class="form-group less pt-3" :error="errors.vehicle3.type_id" @clearError="() => errors.vehicle3.type_id = false" :defaultSelected="defaultVehicle.vehicle3.template_name" @onSelectItem="(e) => setVehicleType(3, e)" @inputText="(e) => setVehicleTypeName(3, e)" :showAll="true" />
                        <div :class="`${vehicle.vehicle3.type_id ? '' : 'vehicleaTypeArea'} mt-4`" id="taxableArea3">
                          <SelectDropdown :list="existingVehicles" label="Use Existing Comparative Vehicle" id="comparativeVehicleType" :error="errors.existing_vehicle3" @clearError="() => errors.existing_vehicle3 = false" @onSelectItem="(e) => setExistingVehicle(3, e)"  @inputText="(e) => setExistingVehicleName(3, e)"/> 
                          <span class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> 
                            <label for="scenarioName" class="fs-12 medium-fw">Name</label>
                            <input type="text" id="scenarioName" class="form-control" v-model="vehicle.vehicle3.name" @keyup="() => errors.vehicle3.name = false"/> 
                            <small class="text-danger" v-if="errors.vehicle3.name">{{errors.vehicle3.name[0]}}</small>
                          </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> 
                              <label for="scenarioDesc" class="fs-12 medium-fw">Description</label> 
                              <span class="fs-12 sem-bold-fw grey-clr-2">Optional</span>
                            </div>
                            <textarea name="" id="scenarioDesc" cols="30" rows="2" class="form-control" v-model="vehicle.vehicle3.description"></textarea>
                             <small class="text-danger" v-if="errors.vehicle3.description">{{errors.vehicle3.description[0]}}</small>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> 
                              <label for="ror3" class="fs-12 medium-fw">Rate of Return</label>
                              <div class="percent-input-div">
                                <input type="number" min="1" max="99" id="ror3" class="form-control handleLimit" @keyup="() => errors.vehicle3.ror = false" />
                                <span class="percent-span">%</span> 
                              </div>
                              <small class="text-danger" v-if="errors.vehicle3.ror">{{errors.vehicle3.ror[0]}}</small>
                            </div>
                            <div class="form-group"> 
                              <label for="fees3" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="0" max="99" id="fees3" class="form-control handleLimit" @keyup="() => errors.vehicle3.fees = false"/> 
                                <span class="percent-span">%</span>
                              </div>
                              <small class="text-danger" v-if="errors.vehicle3.fees">{{errors.vehicle3.fees[0]}}</small>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch3">
                               <input class="form-check-input" type="checkbox" role="switch" id="capitalGainTax3" v-model="vehicle.vehicle3.capitalGains" :cheked="vehicle.vehicle3.type_id  ===  1 ? false : true " /> 
                               <label class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax3" id="capitalGainLabel3">{{vehicle.vehicle3.type_id  ===  1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> 
                            </div>
                            <div :class="`form-group-wrapper ${vehicle.vehicle3.capitalGains && vehicle.vehicle3.type_id === 1 ? '' : 'capitalDisplayNone'} pt-2`" id="capitalGainTaxInputs3">
                              <div class="form-group pb-0 m-0">
                                <label for="cg_tax_rate3" class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="99" id="cg_tax_rate3" class="form-control handleLimit" @keyup="() => errors.vehicle3.cg_tax = false" /> 
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle3.cg_tax">{{errors.vehicle3.cg_tax[0]}}</small>
                              </div>
                              <div class="form-group pb-0 m-0"> <label for="percent_of_account_as_cg3" class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> 
                                  <input type="number" min="1" max="100" id="percent_of_account_as_cg3" class="form-control handleLimit" @keyup="() => errors.vehicle3.cg_percent = false" /> 
                                  <span class="percent-span">%</span>
                                </div>
                              <small class="text-danger" v-if="errors.vehicle3.cg_percent">{{errors.vehicle3.cg_percent[0]}}</small>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveVehicleTempName3"  v-model="vehicle.vehicle3.templateCheckbox" /> 
                              <label class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName3">Save this Vehicle as Template</label>
                            </div>

                          </div>
                          <div :style="{display: vehicle.vehicle3.templateCheckbox ? 'unset' : 'none'}" class="form-group less" id="vehicleTempName3"> 
                            <label for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label> 
                            <input type="text" id="vehicleTemplateName" class="form-control" v-model="vehicle.vehicle3.template_name" /> 
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-md-9">
                    <div class="bottom-buttons-main-div">
                      <div class="text-center" v-if="vehicle.tab !== 3"> 
                        <a href="javascript:void(0)" class="btn AdtnlCmprtVhclBtn fs-14" @click="setNextTab()">Add Additional Comparative Vehicle</a> 
                        </div>
                      <div :class="`form-check form-switch custom-switch align-items-center d-flex justify-content-center mb-3 mt-30 ${tabs.vehicle2 && vehicle.tab !== 1 ? '' : 'd-none'}`"> 
                        <input class="form-check-input me-1" type="checkbox" role="switch" id="saveComparativePortPolio" v-model="vehicle.portfolio_checkbox" /> 
                        <label class="form-check-label fs-12 semi-bold-fw mb-0" for="saveComparativePortPolio">Save as Comparative Vehicle Portfolio</label> 
                      </div>
                      <div :class="`form-group less width-adjust ${(vehicle.portfolio_checkbox && tabs.vehicle2 && vehicle.tab !== 1) ? '' : 'd-none'}`" id="vehicleTempName10"> 
                        <label for="portfolioTemplateName" class="fs-12 semi-bold-fw">Portfolio Name</label> 
                        <input type="text" id="portfolioTemplateName" class="form-control width-adjust" v-model="vehicle.portfolio_name"/> 
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="text-center mt-30 d-flex flex-column justify-content-center p-relative">
                      <div class="d-flex justify-content-center">
                      <div>
                        <router-link :to="`/${$route.query.review === 'true' ? 'review-summary' : 'illustration-data'}/${$route.params.scenario}`" class="nav-link btn form-back-btn fs-14" disabled="true">
                        <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid"  alt="Chevron" width="6" /> Back
                        </router-link> 
                      </div>
                      <div> 
                        <button class="nav-link btn form-next-btn fs-14 active comparative-next-btn" @click="submitHandler">Next</button>
                      </div>
                    </div>
                    <div class="return-btn-div">
                      <router-link v-if="$route.query.report" :to="`/report-builder/${$route.query.report}`" class="nav-link btn return-to-report-btn fs-14" disabled="true">Return to Current Report <img src="@/assets/images/icons/chevron-right.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6" />
                      </router-link> 
                    </div>
                  </div>
                   <div class="d-flex justify-content-center pt-3">
                        <button v-if="$route.query.review === 'true'" type="button" :class="`nav-link btn form-back-btn mx-0 fs-14 flex-shrink-0 ${$route.query.review === 'true' ? 'review-summary' : 'illustration-data'}`" @click="submitHandler(false, true)"><img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6"/>Save & Return to Review</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
import ScenarioSteps from "../common/ScenarioSteps.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";
import { get, post, put } from "../../../network/requests.js";
import { getUrl } from "../../../network/url.js";
import {
  authHeader,
  getFirstError,
  setScenarioStep3,
  getCurrentScenario,
  setCurrentScenario,
} from "../../../services/helper";
export default {
  components: { SelectDropdown, ScenarioSteps, ScenarioLabelComponent },
  data() {
    return {
      vehicle: {
        vehicle1: {
          type_id: false,
          type: "",
          templateCheckbox: false,
          template_name: "",
          capitalGains: false,
          name: "",
          description: "",
          ror: "",
          fees: "",
          cg_tax_rate: "",
          percent_of_account_as_cg: "",
          existing: {
            id: "",
            name: "",
          },
        },
        vehicle2: {
          type_id: false,
          type: "",
          templateCheckbox: false,
          template_name: "",
          capitalGains: false,
          name: "",
          description: "",
          ror: "",
          fees: "",
          cg_tax_rate: "",
          percent_of_account_as_cg: "",
          existing: {
            id: "",
            name: "",
          },
        },
        vehicle3: {
          type_id: false,
          type: "",
          templateCheckbox: false,
          template_name: "",
          capitalGains: false,
          name: "",
          description: "",
          ror: "",
          fees: "",
          cg_tax_rate: "",
          percent_of_account_as_cg: "",
          existing: {
            id: "",
            name: "",
          },
        },
        tab: 1,
        portfolio_checkbox: false,
        portfolio_name: "",
      },
      tabs: {
        vehicle1: true,
        vehicle2: false,
        vehicle3: false,
      },
      vehicleSelected: false,
      cvId: false,
      dropdown: {
        VehicleType: [
          { id: 1, template_name: "Taxable" },
          { id: 2, template_name: "Pre-Tax" },
          { id: 3, template_name: "Tax-Deferred" },
        ],
      },
      errors: {
        vehicle1: [],
        vehicle2: [],
        vehicle3: [],
      },
      defaultVehicle: {
        vehicle1: {
          template_name: "",
        },
        vehicle2: {
          template_name: "",
        },
        vehicle3: {
          template_name: "",
        },
      },
      existingPortfolioId: false,
      existingPortfolioName: "",
    };
  },

  mounted() {
    // input validation for min and max value
    const inputs = document.querySelectorAll(".handleLimit");
    inputs.forEach(element =>
      element.addEventListener("input", function(e) {
        let len = e.target.value.length;
        let current = e.target.value;
        let min = Number(e.target.getAttribute("min"));
        let max = Number(e.target.getAttribute("max"));
        if (Number(current) < min || Number(current) > max) {
          let actualValue = current.slice(0, len - 1);
          e.target.value = actualValue;
          return false;
        }
      })
    );

    // populate comparative data if comparative data id exist in url
    let scenarioData = getCurrentScenario();
    if (this.$route.params.scenario) {
      let getScenarioAPI = true;
      if (
        scenarioData &&
        scenarioData.id === Number(this.$route.params.scenario)
      ) {
        if (
          scenarioData.comperative &&
          typeof scenarioData.scenerio_details === "object"
        ) {
          this.$store.dispatch("activeScenario", scenarioData);
          this.getPortfolioData(scenarioData.comperative);
          getScenarioAPI = false;
        }
      }
      if (getScenarioAPI) {
        this.$store.dispatch("loader", true);
        get(`${getUrl("scenario")}${this.$route.params.scenario}`, authHeader())
          .then(response => {
            console.log(response.data.data);
            setCurrentScenario(response.data.data);
            let id = response.data.data.comperative;
            this.cvId = id;
            this.$store.dispatch("activeScenario", response.data.data);
            if (id) {
              this.getPortfolioData(id);
            } else {
              this.$store.dispatch("loader", false);
            }
          })
          .catch(error => {
            console.log(error);
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

    if (!this.existingVehicles.length) {
      this.getExistingVehicles();
    }

    if (!this.cvPortfolios.length) {
      this.getExistingPortfolio();
    }
  },
  computed: {
    // active scenario data
    activeScenario() {
      return this.$store.state.data.active_scenario;
    },

    existingVehicles() {
      return this.$store.state.data.templates.vehicles || [];
    },
    cvPortfolios() {
      return this.$store.state.data.templates.cv_portfolio || [];
    },
  },
  methods: {
    getExistingVehicles: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-vehicletype"), authHeader())
        .then(response => {
          var data = response.data.data;
          var temp = [];
          let index = 1;
          // push vehicle #1 templates in temp variable
          data.vehicle_type_1.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 1,
              template_name: item.vehicle_template_name,
            });
          });

          // push vehicle #2 templates in temp variable
          data.vehicle_type_2.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 2,
              template_name: item.vehicle_template_name,
            });
          });

          // push vehicle #3 templates in temp variable
          data.vehicle_type_3.forEach(item => {
            temp.push({
              id: index++,
              uid: item.id,
              type: 3,
              template_name: item.vehicle_template_name,
            });
          });
          this.$store.dispatch("template", {
            type: "vehicles",
            data: temp,
          });
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    getExistingPortfolio: function() {
      this.$store.dispatch("loader", true);
      get(getUrl("existing-comparative"), authHeader())
        .then(response => {
          var data = response.data.data;
          var temp = [];
          data.forEach(item => {
            temp.push({ id: item.id, template_name: item.portfolio_name });
          });

          this.$store.dispatch("template", {
            type: "cv_portfolio",
            data: temp,
          });
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    setVehicleTab: function(val) {
      console.log(val);
      if (Number(val) === 1) {
        this.vehicle.tab = Number(val);
      }

      if (Number(val) === 2) {
        this.tabs.vehicle2 = true;
        this.vehicle.tab = Number(val);
      }

      if (Number(val) === 3) {
        if (this.tabs.vehicle2) {
          this.tabs.vehicle3 = true;
          this.vehicle.tab = Number(val);
        }
      }
    },
    setActiveTab2: function(event) {
      if (this.vehicle.tab !== 2) {
        this.tabs.vehicle2 = !this.tabs.vehicle2;
        if (!this.tabs.vehicle2 && this.tabs.vehicle3) {
          this.tabs.vehicle3 = false;
        }
      }
      if (!this.tabs.vehicle2 && this.vehicle.tab === 3) {
        this.vehicle.tab = 1;
      }

      if (this.vehicle.tab === 2) {
        this.tabs.vehicle2 = false;
        this.setVehicleTab(1);
      }
      // stop the next function calling request
      event.stopPropagation();
      event.preventDefault();
    },
    setActiveTab3: function(event) {
      if (this.tabs.vehicle2 && this.vehicle.tab !== 3) {
        this.tabs.vehicle3 = !this.tabs.vehicle3;
      }
      if (this.vehicle.tab === 3) {
        this.tabs.vehicle3 = false;
        this.setVehicleTab(2);
      }
      // stop the next function calling request
      event.stopPropagation();
      event.preventDefault();
    },
    setVehicleType: function(vType, val = null) {
      this.vehicleSelected = true;
      this.vehicle[`vehicle${vType}`].type_id = Number(val);
      this.vehicle.tab = val ? vType : false;
      this.vehicle[`vehicle${vType}`].capitalGains =
        Number(val) === 1 ? false : true;
    },

    // set the input value using the input id attribute
    setInputWithId: function(id, value) {
      document.getElementById(id).value = value;
      return value;
    },

    // this function has return the input value
    getInputUsingId: function(id) {
      return document.getElementById(id).value;
    },
    setExistingPortfolioId: function(id) {
      this.existingPortfolioId = id;
      this.getPortfolioData(id);
      this.errors.vehicle1 = [];
      this.errors.vehicle2 = [];
      this.errors.vehicle3 = [];
    },

    // get portfolio data
    getPortfolioData: function(id) {
      if (!id) {
        return false;
      }
      this.$store.dispatch("loader", true);
      this.cvId = id;
      get(`${getUrl("comparative")}${id}`, authHeader())
        .then(response => {
          var data = response.data.data;
          var vehicle1 = data.vehicle_type_1;
          var vehicle2 = data.vehicle_type_2;
          var vehicle3 = data.vehicle_type_3;

          let qTab = Number(this.$route.query.tab);
          if (qTab) {
            if (qTab === 1) {
              this.vehicle.tab = 1;
            }
            if (qTab === 2 && vehicle2) {
              this.vehicle.tab = 2;
            }
            if (qTab === 3 && vehicle3) {
              this.vehicle.tab = 3;
            }
          }
          if (vehicle1) {
            this.vehicleSelected = true;
            this.tabs.vechile1 = true;
            this.populateVehicle(1, 1, vehicle1);
          }

          if (vehicle2) {
            this.tabs.vehicle2 = true;
            this.populateVehicle(2, 2, vehicle2);
          }

          if (vehicle3) {
            this.tabs.vehicle3 = true;
            this.populateVehicle(3, 3, vehicle3);
          }else{
            this.tabs.vehicle3 = false;
          }
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    setExistingPortfolioName: function(name) {
      this.existingPortfolioName = name;
    },

    setVehicleTypeName: function(vType = 1, name) {
      this.vehicle[`vehicle${vType}`].type = name;
    },

    getTemplateDataId: function(id) {
      var temp = this.existingVehicles.filter(i => i.id === id)[0];
      return temp ? temp : null;
    },

    setExistingVehicle: function(vType, id) {
      let template = this.getTemplateDataId(id);
      if (template) {
        this.populateVehicleTemplate(vType, template.uid, template.type);
      }
      this.errors[`vehicle${vType}`] = [];
    },

    setExistingVehicleName: function(vType, name) {
      this.errors[`vehicle${vType}`] = [];
      this.vehicle[`vehicle${vType}`].existing.name = name;
    },

    // to update the vehicle type and type id field of in the vehicle type dropdown for all vehicle tabs
    updateVehicleType: function(vehicle, id, type) {
      if (id) {
        if (vehicle === 1) {
          this.defaultVehicle.vehicle1.template_name = type;
          this.vehicle.vehicle1.type_id = id;
          this.vehicle.vehicle1.type = type;
          setTimeout(() => {
            this.defaultVehicle.vehicle1.template_name = "";
          }, 100);
        }
        if (vehicle === 2) {
          this.defaultVehicle.vehicle2.template_name = type;
          this.vehicle.vehicle2.type_id = id;
          this.defaultVehicle.vehicle2.template_name = type;
          setTimeout(() => {
            this.defaultVehicle.vehicle2.template_name = "";
          }, 100);
        }
        if (vehicle === 3) {
          this.defaultVehicle.vehicle3.template_name = type;
          this.vehicle.vehicle3.type_id = id;
          this.defaultVehicle.vehicle3.template_name = type;
          setTimeout(() => {
            this.defaultVehicle.vehicle3.template_name = "";
          }, 100);
        }
      }
    },

    // to get vehicle type id using the type name
    getVehicleType: function(type = "") {
      var temp = this.dropdown.VehicleType.filter(
        item => item.template_name === type
      )[0];
      return temp ? temp.id : false;
    },

    // to validate the existing portfolio template
    validatePortfolio: function() {
      if (this.existingPortfolioName) {
        let templateId = this.$getTemplateId(
          this.existingPortfolioName,
          this.cvPortfolios
        );
        if (templateId) {
          this.existingPortfolioId = templateId;
          this.errors.existing_portfolio = false;
        } else {
          this.errors.existing_portfolio = ["Please choose a valid portfolio."];
        }
        return templateId ? true : false;
      }

      return true;
    },

    // populate existing vehicle details
    populateVehicle: function(vType, tempType = 1, data = []) {
      var type = this.getVehicleType(data[`vehicle_type_${tempType}`]);
      this.updateVehicleType(vType, type, data[`vehicle_type_${tempType}`]);

      this.vehicle[`vehicle${vType}`].templateCheckbox = false;
      this.vehicle[`vehicle${vType}`].capitalGains =
        data.capital_gain_tax_checkbox;
      this.vehicle[`vehicle${vType}`].name = data.name;
      this.vehicle[`vehicle${vType}`].description = data.description;
      this.vehicle[`vehicle${vType}`].ror = data.rate_of_return;
      this.vehicle[`vehicle${vType}`].fees = data.fees;
      this.vehicle[`vehicle${vType}`].cg_tax_rate = data.capital_gains_tax_rate;
      this.vehicle[`vehicle${vType}`].percent_of_account_as_cg =
        data.percentage_of_account_as_capital_gains;
      this.setInputWithId(`ror${vType}`, data.rate_of_return);
      this.setInputWithId(`fees${vType}`, data.fees);
      if (data.pre_age_59_penality && type !== 1) {
        this.vehicle[`vehicle${vType}`].capitalGains = true;
      }
      if (data.capital_gain_tax_checkbox && type === 1) {
        this.setInputWithId(`cg_tax_rate${vType}`, data.capital_gains_tax_rate);
        this.setInputWithId(
          `percent_of_account_as_cg${vType}`,
          data.percentage_of_account_as_capital_gains
        );
      }
    },

    // populate existing vehicle details
    populateVehicleTemplate: function(vType = 1, id = null, type = 1) {
      this.$store.dispatch("loader", true);
      get(`${getUrl(`vehicle-type${type}`)}${id}`, authHeader())
        .then(response => {
          var data = response.data.data;
          this.populateVehicle(vType, type, data);
          this.$store.dispatch("loader", false);
        })
        .catch(error => {
          console.log(error);
          if (
            error.code === "ERR_BAD_RESPONSE" ||
            error.code === "ERR_NETWORK"
          ) {
            this.$toast.error(error.message);
          }
          this.$store.dispatch("loader", false);
        });
    },

    // validate all forms data
    validationForm: function() {
      var valid = true;
      var focusTab = false;
      let portfolio = !this.validatePortfolio();

      if (portfolio) {
        valid = false;
      }

      if (!this.validateVehicle1()) {
        focusTab = true;
        this.setVehicleTab(1);
        valid = false;
      }

      if (this.tabs.vehicle2 && !this.validateVehicle2()) {
        if (!focusTab) {
          focusTab = true;
          this.setVehicleTab(2);
        }
        valid = false;
      }

      if (this.tabs.vehicle3 && !this.validateVehicle3()) {
        if (!focusTab) {
          focusTab = true;
          this.setVehicleTab(3);
        }
        valid = false;
      }

      return valid;
    },

    // check vehicle type
    checkVechicleType: function() {
      let tab = this.vehicle.tab;
      if (tab === 1) {
        if (this.tabs.vehicle1 && !this.checkVechicle1()) {
          return false;
        }
      }

      if (this.tabs.vehicle2 && tab === 2) {
        if (!this.checkVechicle2()) {
          return false;
        }
      }

      if (this.tabs.vehicle3 && tab === 3) {
        if (!this.checkVechicle3()) {
          return false;
        }
      }

      return true;
    },

    // switch to next vehicle tab
    setNextTab: function() {
      if (!this.validationForm()) {
        console.log(this.errors);
        return false;
      }

      if (this.checkVechicleType()) {
        if (this.vehicle.tab === 2) {
          this.tabs.vehicle3 = true;
          this.vehicle.tab = 3;
        }

        if (this.vehicle.tab === 1) {
          this.tabs.vehicle2 = true;
          this.vehicle.tab = 2;
        }
      }
    },

    // this function is used to check the valid vehicle type for vehicle #1
    checkVechicle1: function() {
      let templateId = this.$getTemplateId(
        this.vehicle.vehicle1.type,
        this.dropdown.VehicleType
      );
      if (templateId) {
        this.vehicle.vehicle1.type_id = templateId;
        this.errors.vehicle1.type_id = false;
      } else {
        this.errors.vehicle1.type_id = ["Please choose a valid vehicle type."];
      }
      return templateId ? true : false;
    },

    // this function is used to check the valid vehicle type for vehicle #2
    checkVechicle2: function() {
      let templateId = this.$getTemplateId(
        this.vehicle.vehicle2.type,
        this.dropdown.VehicleType
      );

      if (templateId) {
        this.vehicle.vehicle2.type_id = templateId;
        this.errors.vehicle2.type_id = false;
      } else {
        this.errors.vehicle2.type_id = ["Please choose a valid vehicle type."];
      }

      return templateId ? true : false;
    },

    // this function is used to check the valid vehicle type for vehicle #3
    checkVechicle3: function() {
      let templateId = this.$getTemplateId(
        this.vehicle.vehicle3.type,
        this.dropdown.VehicleType
      );
      if (templateId) {
        this.vehicle.vehicle3.type_id = templateId;
        this.errors.vehicle3.type_id = false;
      } else {
        this.errors.vehicle3.type_id = ["Please choose a valid vehicle type."];
      }
      return templateId ? true : false;
    },
    validateVehicle1: function() {
      let valid = true;
      if (this.vehicle.vehicle1.existing.name) {
        // validate vehicle 1 existing template
        let templateId = this.$getTemplateId(
          this.vehicle.vehicle1.existing.name,
          this.existingVehicles
        );
        if (!templateId && this.getTemplateDataId(templateId)) {
          valid = false;
          this.errors.existing_vehicle1 = ["Please choose a valid template."];
        } else {
          this.vehicle.vehicle1.existing.id = templateId;
          this.errors.existing_vehicle1 = false;
        }
      } else {
        // validate vehicle 1 form inputs
        if (this.vehicle.vehicle1.type) {
          if (!this.checkVechicle1()) {
            valid = false;
          }
          this.vehicle.vehicle1.ror = this.getInputUsingId("ror1");
          this.vehicle.vehicle1.fees = this.getInputUsingId("fees1");
          this.vehicle.vehicle1.cg_tax_rate = this.getInputUsingId(
            "cg_tax_rate1"
          );
          this.vehicle.vehicle1.percent_of_account_as_cg = this.getInputUsingId(
            "percent_of_account_as_cg1"
          );

          if (!this.vehicle.vehicle1.ror) {
            this.errors.vehicle1.ror = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle1.fees) {
            this.errors.vehicle1.fees = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle1.name) {
            this.errors.vehicle1.name = ["This field is required"];
            valid = false;
          }

          if (
            this.vehicle.vehicle1.capitalGains &&
            this.vehicle.vehicle1.type_id === 1
          ) {
            if (!this.vehicle.vehicle1.cg_tax_rate) {
              this.errors.vehicle1.cg_tax = ["This field is required"];
              valid = false;
            }

            if (!this.vehicle.vehicle1.percent_of_account_as_cg) {
              this.errors.vehicle1.cg_percent = ["This field is required"];
              valid = false;
            }
          } else {
            this.errors.vehicle1.cg_tax = "";
            this.errors.vehicle1.cg_percent = "";
          }
        } else {
          this.errors.vehicle1.type_id = ["This field is required"];
          valid = false;
        }
      }
      return valid;
    },
    validateVehicle2: function() {
      let valid = true;
      if (this.vehicle.vehicle2.existing.name) {
        // validate vehicle 2 existing template
        let templateId = this.$getTemplateId(
          this.vehicle.vehicle2.existing.name,
          this.existingVehicles
        );
        if (!templateId) {
          valid = false;
          this.errors.existing_vehicle2 = ["Please choose a valid template."];
        } else {
          this.vehicle.vehicle2.existing.id = templateId;
          this.errors.existing_vehicle2 = false;
        }
      } else {
        // validate vehicle 1 form inputs
        if (this.vehicle.vehicle2.type) {
          if (!this.checkVechicle2()) {
            valid = false;
          }
          this.vehicle.vehicle2.ror = this.getInputUsingId("ror2");
          this.vehicle.vehicle2.fees = this.getInputUsingId("fees2");
          this.vehicle.vehicle2.cg_tax_rate = this.getInputUsingId(
            "cg_tax_rate2"
          );
          this.vehicle.vehicle2.percent_of_account_as_cg = this.getInputUsingId(
            "percent_of_account_as_cg2"
          );

          if (!this.vehicle.vehicle2.ror) {
            this.errors.vehicle2.ror = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle2.fees) {
            this.errors.vehicle2.fees = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle2.name) {
            this.errors.vehicle2.name = ["This field is required"];
            valid = false;
          }

          if (
            this.vehicle.vehicle2.capitalGains &&
            this.vehicle.vehicle2.type_id === 1
          ) {
            if (!this.vehicle.vehicle2.cg_tax_rate) {
              this.errors.vehicle2.cg_tax = ["This field is required"];
              valid = false;
            }

            if (!this.vehicle.vehicle2.percent_of_account_as_cg) {
              this.errors.vehicle2.cg_percent = ["This field is required"];
              valid = false;
            }
          } else {
            this.errors.vehicle2.cg_tax = "";
            this.errors.vehicle2.cg_percent = "";
          }
        } else {
          this.errors.vehicle2.type_id = ["This field is required"];
          valid = false;
        }
      }

      return valid;
    },
    validateVehicle3: function() {
      let valid = true;
      if (this.vehicle.vehicle3.existing.name) {
        // validate vehicle 3 existing template
        let templateId = this.$getTemplateId(
          this.vehicle.vehicle3.existing.name,
          this.existingVehicles
        );
        if (!templateId) {
          valid = false;
          this.errors.existing_vehicle3 = ["Please choose a valid template."];
        } else {
          this.vehicle.vehicle3.existing.id = templateId;
          this.errors.existing_vehicle3 = false;
        }
      } else {
        // validate vehicle 1 form inputs
        if (this.vehicle.vehicle3.type) {
          if (!this.checkVechicle3()) {
            valid = false;
          }
          this.vehicle.vehicle3.ror = this.getInputUsingId("ror3");
          this.vehicle.vehicle3.fees = this.getInputUsingId("fees3");
          this.vehicle.vehicle3.cg_tax_rate = this.getInputUsingId(
            "cg_tax_rate3"
          );
          this.vehicle.vehicle3.percent_of_account_as_cg = this.getInputUsingId(
            "percent_of_account_as_cg3"
          );

          if (!this.vehicle.vehicle3.ror) {
            this.errors.vehicle3.ror = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle3.fees) {
            this.errors.vehicle3.fees = ["This field is required"];
            valid = false;
          }

          if (!this.vehicle.vehicle3.name) {
            this.errors.vehicle3.name = ["This field is required"];
            valid = false;
          }

          if (
            this.vehicle.vehicle3.capitalGains &&
            this.vehicle.vehicle3.type_id === 1
          ) {
            if (!this.vehicle.vehicle3.cg_tax_rate) {
              this.errors.vehicle3.cg_tax = ["This field is required"];
              valid = false;
            }

            if (!this.vehicle.vehicle3.percent_of_account_as_cg) {
              this.errors.vehicle3.cg_percent = ["This field is required"];
              valid = false;
            }
          } else {
            this.errors.vehicle3.cg_tax = "";
            this.errors.vehicle3.cg_percent = "";
          }
        } else {
          this.errors.vehicle3.type_id = ["This field is required"];
          valid = false;
        }
      }

      return valid;
    },

    // this is the main function to save the comparative vehicle data
    submitHandler: function(e, review = false) {
      if (e) {
        e.preventDefault();
      }
      if (!this.validationForm()) {
        console.log(this.errors);
        return false;
      }

      var data = {
        vehicle_type_1: {
          vehicle_type_1: this.vehicle.vehicle1.type,
          name: this.vehicle.vehicle1.name,
          description: this.vehicle.vehicle1.description,
          rate_of_return: this.vehicle.vehicle1.ror,
          fees: this.vehicle.vehicle1.fees,
          capital_gain_tax_checkbox:
            this.vehicle.vehicle1.capitalGains &&
            this.vehicle.vehicle1.type_id === 1
              ? true
              : false,
          pre_age_59_penality:
            this.vehicle.vehicle1.capitalGains &&
            this.vehicle.vehicle1.type_id !== 1
              ? true
              : false,
          save_this_vehicle_as_template: this.vehicle.vehicle1.templateCheckbox,
          vehicle_template_name: this.vehicle.vehicle1.templateCheckbox
            ? this.vehicle.vehicle1.template_name
            : "",
        },
        vehicle_type_2: {
          vehicle_type_2: this.vehicle.vehicle2.type,
          name: this.vehicle.vehicle2.name,
          description: this.vehicle.vehicle2.description,
          rate_of_return: this.vehicle.vehicle2.ror,
          fees: this.vehicle.vehicle2.fees,
          capital_gain_tax_checkbox:
            this.vehicle.vehicle2.capitalGains &&
            this.vehicle.vehicle2.type_id === 1
              ? true
              : false,
          pre_age_59_penality:
            this.vehicle.vehicle2.capitalGains &&
            this.vehicle.vehicle2.type_id !== 1
              ? true
              : false,
          pre_age_59_penality: false,
          save_this_vehicle_as_template: this.vehicle.vehicle2.templateCheckbox,
          vehicle_template_name: this.vehicle.vehicle2.templateCheckbox
            ? this.vehicle.vehicle2.template_name
            : "",
        },
        vehicle_type_3: {
          vehicle_type_3: this.vehicle.vehicle3.type,
          name: this.vehicle.vehicle3.name,
          description: this.vehicle.vehicle3.description,
          rate_of_return: this.vehicle.vehicle3.ror,
          fees: this.vehicle.vehicle3.fees,
          capital_gain_tax_checkbox:
            this.vehicle.vehicle3.capitalGains &&
            this.vehicle.vehicle3.type_id === 1
              ? true
              : false,
          pre_age_59_penality:
            this.vehicle.vehicle3.capitalGains &&
            this.vehicle.vehicle3.type_id !== 1
              ? true
              : false,
          save_this_vehicle_as_template: this.vehicle.vehicle3.templateCheckbox,
          vehicle_template_name: this.vehicle.vehicle3.templateCheckbox
            ? this.vehicle.vehicle3.template_name
            : "",
        },
      };

      var formData = {};

      formData.vehicle_type_1 = data.vehicle_type_1;

      if (data.vehicle_type_1.capital_gain_tax_checkbox) {
        formData.vehicle_type_1.capital_gains_tax_rate = this.vehicle.vehicle1.cg_tax_rate;
        formData.vehicle_type_1.percentage_of_account_as_capital_gains = this.vehicle.vehicle1.percent_of_account_as_cg;
      } else {
        formData.vehicle_type_1.capital_gains_tax_rate = 0;
        formData.vehicle_type_1.percentage_of_account_as_capital_gains = 0;
      }

      if (this.tabs.vehicle2) {
        formData.vehicle_type_2 = data.vehicle_type_2;
        if (data.vehicle_type_2.capital_gain_tax_checkbox) {
          formData.vehicle_type_2.capital_gains_tax_rate = this.vehicle.vehicle2.cg_tax_rate;
          formData.vehicle_type_2.percentage_of_account_as_capital_gains = this.vehicle.vehicle2.percent_of_account_as_cg;
        } else {
          formData.vehicle_type_2.capital_gains_tax_rate = 0;
          formData.vehicle_type_2.percentage_of_account_as_capital_gains = 0;
        }
      }

      if (this.tabs.vehicle3) {
        formData.vehicle_type_3 = data.vehicle_type_3;
        if (data.vehicle_type_3.capital_gain_tax_checkbox) {
          formData.vehicle_type_3.capital_gains_tax_rate = this.vehicle.vehicle3.cg_tax_rate;
          formData.vehicle_type_3.percentage_of_account_as_capital_gains = this.vehicle.vehicle3.percent_of_account_as_cg;
        } else {
          formData.vehicle_type_3.capital_gains_tax_rate = 0;
          formData.vehicle_type_3.percentage_of_account_as_capital_gains = 0;
        }
      }

      formData.scenario_id = this.$route.params.scenario;
      formData.save_portfolio = this.vehicle.portfolio_checkbox;
      formData.portfolio_name = this.vehicle.portfolio_name;
      this.$store.dispatch("loader", true);
      if (this.cvId) {
        put(`${getUrl("comparative")}${this.cvId}/`, formData, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            setScenarioStep3(response.data.data);
            // update the template list
            this.getExistingPortfolio();
            this.getExistingVehicles();
            this.$toast.success(response.data.message);
            this.$router.push(
              `/${
                review ? "review-summary" : "select-historical-simulations"
              }/${this.$route.params.scenario}`
            );
          })
          .catch(error => {
            console.log(error);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
            this.$store.dispatch("loader", false);
          });
      } else {
        post(getUrl("comparative"), formData, authHeader())
          .then(response => {
            this.$store.dispatch("loader", false);
            this.cvId = response.data.data.id;
            setScenarioStep3(response.data.data);
            // update the template list
            this.getExistingPortfolio();
            this.getExistingVehicles();
            this.$toast.success(response.data.message);
            this.$router.push(
              `/select-historical-simulations/${this.$route.params.scenario}`
            );
          })
          .catch(error => {
            console.log(error);
            if (
              error.code === "ERR_BAD_RESPONSE" ||
              error.code === "ERR_NETWORK"
            ) {
              this.$toast.error(error.message);
            } else {
              this.$toast.error(getFirstError(error));
            }
            console.log(error.data.error.vehicle_type_1.description);
            this.$store.dispatch("loader", false);
          });
      }
    },
  },
};
</script>
