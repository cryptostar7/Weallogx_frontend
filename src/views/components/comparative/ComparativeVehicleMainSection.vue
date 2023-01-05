<template>
  <div>
    <section class="main-section">
      <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
        <ul class="mt-1 review-progress" id="reviewProgress">
          <li class="done"> <router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link>
          </li>
          <li class="done"> <router-link to="/illustration-data" class="nav-link p-0">Illustration Data</router-link>
          </li>
          <li class="active"> <router-link to="comparative-vehicles" class="nav-link p-0">Comparative
              Vehicles</router-link> </li>
          <li class=""> <a href="javascript:void(0)" class="nav-link p-0">Historical Simulations</a> </li>
        </ul> <router-link to="/"> <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" />
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
                <div class="form-wrapper-inner no-style newScenarioVehicleInner">
                  <h4 class="form-subheading fs-22 fw-bold"> Comparative Vehicles </h4>
                  <SelectDropdown :list="dropdown.comparativeVehiclePortfolios"
                    label="Use Existing Comparative Vehicle Portfolio" id="existingComparativeVehiclePortfolio"
                    class="form-group less pt-3" />
                  <div :class="`comparative-vehicle-tab-wrapper ${vehicle.tab ? '' : 'noVehicleTyupeSelectPadd'} mb-3`" id="noVehicleTyupeSelectPadd">
                    <ul class="nav nav-tabs comparative-vehicle-tabs" role="tablist">
                      <li class="nav-item" role="presentation" @click="setVehicleTab(1)">
                         <button :class="`nav-link ${vehicle.tab === 1 && tabs.vehicle1 ? 'active' : `${tabs.vehicle1 ? 'activeOnly':''}`}`" id="vehicleType1-tab" type="button" role="tab" aria-controls="vehicleType1">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType1" checked="true"/> 
                            <label class="form-check-label fs-12 semi-bold-fw mb-0" for="vehicleType1">Vehicle #1</label> 
                          </div>
                        </button> 
                      </li>
                      <li class="nav-item" role="presentation" @click="setVehicleTab(2)">
                        <button :class="`nav-link ${vehicle.tab === 2 && tabs.vehicle2 ? 'active' : `${tabs.vehicle2 ? 'activeOnly':''}`}`" id="vehicleType2-tab" type="button" role="tab" aria-controls="vehicleType2">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType2" @click="setActiveTab2" /> 
                            <label class="form-check-label fs-12 semi-bold-fw mb-0" for="vehicleType2" @click="setActiveTab2">Vehicle #2</label> 
                          </div>
                        </button> 
                      </li>
                      <li class="nav-item" role="presentation" @click="setVehicleTab(3)">
                        <button :class="`nav-link ${vehicle.tab === 3 && tabs.vehicle3 ? 'active' : `${tabs.vehicle3 ? 'activeOnly':''}`}`" id="vehicleType3-tab" type="button" role="tab" aria-controls="vehicleType3">
                          <div class="form-check form-switch custom-switch"> 
                            <input class="form-check-input" type="checkbox" role="switch" id="vehicleType3" @click="setActiveTab3" /> 
                            <label class="form-check-label fs-12 semi-bold-fw mb-0" for="vehicleType3" @click="setActiveTab3">Vehicle #3</label> 
                          </div>
                        </button> 
                      </li>
                    </ul>
                    <div class="tab-content">
                      <div :class="`tab-pane ${vehicle.tab === 1 ? 'active':''}`" id="vehicleType1Tab" role="tabpanel"
                        aria-labelledby="vehicleType1-tab">
                        <SelectDropdown :list="dropdown.VehicleType1" label="Vehicle Type 1" id="comparativeVehicleType"
                          class="form-group less pt-3" @onSelectItem="setVehicleType1" />
                        <div :class="`${this.vehicle.vehicle1.type && vehicleSelected ? '' : 'vehicleaTypeArea'} mt-4`" id="taxableArea1">
                          <SelectDropdown :list="dropdown.historyIndex1" label="Use Existing Comparative Vehicle"
                            id="comparativeVehicleType" @onSelectItem="historyIndex1" /> <span
                            class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> <label for="scenarioName"
                              class="fs-12 medium-fw">Name</label> <input type="text" id="scenarioName"
                              class="form-control" /> </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> <label
                                for="scenarioDesc" class="fs-12 medium-fw">Description</label> <span
                                class="fs-12 sem-bold-fw grey-clr-2">Optional</span> </div><textarea name=""
                              id="scenarioDesc" cols="30" rows="2" class="form-control"></textarea>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> <label for="clientAge" class="fs-12 medium-fw">Rate of
                                Return</label>
                              <div class="percent-input-div"> 
                                <input type="number" min="1" max="99" @input="handleLimit" id="clientAge" class="form-control" /> 
                                <span class="percent-span">%</span>
                              </div>
                            </div>
                            <div class="form-group"> <label for="illustratedAge" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> <input type="number" min="0" max="99" @input="handleLimit" id="illustratedAge"
                                   class="form-control" /> <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch"> <input
                                class="form-check-input" type="checkbox" role="switch" id="capitalGainTax1"
                                v-model="vehicle.vehicle1.capitalGains" :checked="vehicle.vehicle1.capitalGains" />
                              <label class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax1"
                                id="capitalGainLabel1">{{vehicle.vehicle1.type === 1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> </div>
                            <div
                              :class="`form-group-wrapper ${vehicle.vehicle1.capitalGains && vehicle.vehicle1.type === 1 ? '' : 'capitalDisplayNone'} pt-2`"
                              id="capitalGainTaxInputs1">
                              <div class="form-group pb-0 m-0"> <label for="capitaGainRate taxDeferredCapitalGain"
                                  class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainRate"
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                              <div class="form-group pb-0 m-0"> <label for="capitaGainPercent"
                                  class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainPercent"
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> 
                              <input class="form-check-input" type="checkbox" role="switch" id="saveVehicleTempName1" @change="setVehicleSaveRedio1()" /> 
                                <label class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName1">
                                  Save this Vehicle as Template1
                                </label> 
                            </div>
                          </div>
                          <div :style="{display: vehicle.vehicle1.isSaved ? 'unset' : 'none'}"
                            class="form-group less saveVehicleTempNameInput" id="vehicleTempName1"> <label
                              for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label> <input
                              type="text" id="vehicleTemplateName" class="form-control" value="" /> </div>
                        </div>
                      </div>
                      <div :class="`tab-pane ${vehicle.tab === 2 ? 'active':''}`" id="vehicleType2Tab" role="tabpanel" aria-labelledby="vehicleType2-tab">
                        <SelectDropdown :list="dropdown.VehicleType2" label="Vehicle Type 2"
                          id="comparativeVehicleType2" class="form-group less pt-3" @onSelectItem="setVehicleType2" />
                        <div :class="`${vehicle.vehicle2.type ? '' : 'vehicleaTypeArea'}`" id="taxableArea2">
                          <SelectDropdown :list="dropdown.historyIndex2" label="Use Existing Comparative Vehicle"
                            id="comparativeVehicleType" @onSelectItem="historyIndex2" /> <span
                            class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> <label for="scenarioName"
                              class="fs-12 medium-fw">Name</label> <input type="text" id="scenarioName"
                              class="form-control" /> </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> <label
                                for="scenarioDesc" class="fs-12 medium-fw">Description</label> <span
                                class="fs-12 sem-bold-fw grey-clr-2">Optional</span> </div><textarea name=""
                              id="scenarioDesc" cols="30" rows="2" class="form-control"></textarea>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> <label for="clientAge" class="fs-12 medium-fw">Rate of Return</label>
                              <div class="percent-input-div"> <input type="number" min="1" max="99" @input="handleLimit" id="clientAge" 
                                  class="form-control" /> <span class="percent-span">%</span> </div>
                            </div>
                            <div class="form-group"> <label for="illustratedAge" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> <input type="number" min="0" max="99" @input="handleLimit" id="illustratedAge"
                                   class="form-control" /> <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch2"> <input class="form-check-input" type="checkbox" role="switch" id="capitalGainTax2" v-model="vehicle.vehicle2.capitalGains"
                                :checked=" vehicle.vehicle2.type === 1 ? false : true" /> <label
                                class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax2"
                                id="capitalGainLabel2">{{vehicle.vehicle2.type === 1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> </div>
                            <div :class="`form-group-wrapper ${vehicle.vehicle2.capitalGains && vehicle.vehicle2.type === 1 ? '' : 'capitalDisplayNone'} pt-2`"
                              id="capitalGainTaxInputs2">
                              <div class="form-group pb-0 m-0"> <label for="capitaGainRate"
                                  class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainRate" value=""
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                              <div class="form-group pb-0 m-0"> <label for="capitaGainPercent"
                                  class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainPercent"
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> <input class="form-check-input"
                                type="checkbox" role="switch" id="saveVehicleTempName2"
                                @change="setVehicleSaveRedio2()" /> <label
                                class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName2">Save this
                                Vehicle as Template</label> </div>
                          </div>
                          <div :style="{display: vehicle.vehicle2.isSaved ? 'unset' : 'none'}"
                            class="form-group less saveVehicleTempNameInput" id="vehicleTempName2"> <label
                              for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label> <input
                              type="text" id="vehicleTemplateName" class="form-control" value="" /> </div>
                        </div>
                      </div>
                      <div :class="`tab-pane ${vehicle.tab === 3 ? 'active':''}`" id="vehicleType3Tab" role="tabpanel" aria-labelledby="vehicleType3-tab">
                        <SelectDropdown :list="dropdown.VehicleType3" label="Vehicle Type 3"
                          id="comparativeVehicleType3" class="form-group less pt-3" @onSelectItem="setVehicleType3" />
                        <div :class="`${vehicle.vehicle3.type ? '' : 'vehicleaTypeArea'} mt-4`" id="taxableArea3">
                          <SelectDropdown :list="dropdown.historyIndex3" label="Use Existing Comparative Vehicle"
                            id="comparativeVehicleType" @onSelectItem="historyIndex3" /> <span
                            class="or-text-span">or</span>
                          <h4 class="form-subheading fs-14 fw-bold"> Create From Scratch </h4>
                          <div class="form-group pt-2 less"> <label for="scenarioName"
                              class="fs-12 medium-fw">Name</label> <input type="text" id="scenarioName"
                              class="form-control" /> </div>
                          <div class="form-group less">
                            <div class=" label-group d-flex justify-content-between align-items-center "> <label
                                for="scenarioDesc" class="fs-12 medium-fw">Description</label> <span
                                class="fs-12 sem-bold-fw grey-clr-2">Optional</span> </div><textarea name=""
                              id="scenarioDesc" cols="30" rows="2" class="form-control"></textarea>
                          </div>
                          <div class="form-group-wrapper">
                            <div class="form-group"> <label for="clientAge" class="fs-12 medium-fw">Rate of
                                Return</label>
                              <div class="percent-input-div"> <input type="number" min="1" max="99" @input="handleLimit" id="clientAge" 
                                  class="form-control" /> <span class="percent-span">%</span> </div>
                            </div>
                            <div class="form-group"> <label for="illustratedAge" class="fs-12 medium-fw">Fees</label>
                              <div class="percent-input-div"> <input type="number" min="0" max="99" @input="handleLimit" id="illustratedAge"
                                   class="form-control" /> <span class="percent-span">%</span>
                              </div>
                            </div>
                          </div>
                          <div class="pb-2">
                            <div class=" form-check form-switch custom-switch preAfeCapitalSwtch3"> <input
                                class="form-check-input" type="checkbox" role="switch" id="capitalGainTax3" v-model="vehicle.vehicle3.capitalGains"
                                :checked=" vehicle.vehicle3.type  ===  1 ? false : true " /> <label
                                class="form-check-label fs-12 semi-bold-fw mb-0" for="capitalGainTax3"
                                id="capitalGainLabel3">{{vehicle.vehicle3.type  ===  1 ? "Capital Gains Tax" : "Pre Age 59 ½ Penalty"}}</label> </div>
                            <div :class="`form-group-wrapper ${vehicle.vehicle3.capitalGains && vehicle.vehicle3.type === 1 ? '' : 'capitalDisplayNone'} pt-2`"
                              id="capitalGainTaxInputs3">
                              <div class="form-group pb-0 m-0"> <label for="capitaGainRate"
                                  class="fs-12 semi-bold-fw">Capital Gains Tax Rate</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainRate"
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                              <div class="form-group pb-0 m-0"> <label for="capitaGainPercent"
                                  class="fs-12 semi-bold-fw">% of Account as Capital Gains</label>
                                <div class="percent-input-div"> <input type="number" min="0" max="100" @input="handleLimit" id="capitaGainPercent"
                                    class="form-control"  /> <span class="percent-span">%</span>
                                </div>
                              </div>
                            </div>
                            <div class="form-check form-switch custom-switch mt-3"> <input class="form-check-input"
                                type="checkbox" role="switch" id="saveVehicleTempName3"
                                @change="setVehicleSaveRedio3()" /> <label
                                class="form-check-label fs-12 semi-bold-fw mb-0" for="saveVehicleTempName3">Save this
                                Vehicle as Template</label> </div>
                          </div>
                          <div :style="{display: vehicle.vehicle3.isSaved ? 'unset' : 'none'}"
                            class="form-group less saveVehicleTempNameInput" id="vehicleTempName3"> <label
                              for="vehicleTemplateName" class="fs-12 semi-bold-fw">Vehicle Template Name</label> <input
                              type="text" id="vehicleTemplateName" class="form-control" value="" /> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-md-9">
                    <div class="bottom-buttons-main-div">
                      <div class="text-center mt-30" v-if="vehicle.tab !== 3"> 
                        <a href="javascript:void(0)" class="btn AdtnlCmprtVhclBtn fs-14" @click="setNextTab()">Add Additional Comparative Vehicle</a> </div>
                      <div
                        class=" form-check form-switch custom-switch align-items-center justify-content-start mb-3 mt-30 "
                        id="saveComparativePortPolioDiv"> <input class="form-check-input me-1" type="checkbox"
                          role="switch" id="saveComparativePortPolio10" /> <label
                          class="form-check-label fs-12 semi-bold-fw mb-0" for="saveComparativePortPolio10">Save as
                          Comparative Vehicle Portfolio</label> </div>
                      <div class=" form-group less saveVehicleTempNameInput width-adjust " id="vehicleTempName10"
                        style="display: none"> <label for="vehicleTemplateName10" class="fs-12 semi-bold-fw">Portfolio
                          Name</label> <input type="text" id="vehicleTemplateName10"
                          class="form-control width-adjust" /> </div>
                      <div class="text-center mt-30 d-flex justify-content-start">
                        <div class="d-flex">
                          <div> <router-link to="/illustration-data" class="nav-link btn form-back-btn fs-14"
                              disabled="true"><img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid"
                                alt="Chevron" width="6" /> Back</router-link> </div>
                          <div> <router-link to="/historical-simulations"
                              class=" nav-link btn form-next-btn fs-14 active comparative-next-btn "
                              disabled="true">Next</router-link> </div>
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
  </div>
</template>
<script>
import SelectDropdown from "../common/SelectDropdown.vue";
export default {
  components: { SelectDropdown },
  data() {
    return {
      vehicle: {
        vehicle1: {
          type: false,
          historyIndex: false,
          isSaved: false,
          capitalGains: false,
        },
        vehicle2: {
          type: false,
          historyIndex: false,
          isSaved: false,
          capitalGains: false,
        },
        vehicle3: {
          type: false,
          historyIndex: false,
          isSaved: false,
          capitalGains: false,
        },
        tab: 1,
      },
      tabs: {
        vehicle1: true,
        vehicle2: false,
        vehicle3: false,
      },
      vehicleSelected: false,
      dropdown: {
        comparativeVehiclePortfolios: [
          { id: 1, name: "Portfolio 1" },
          { id: 2, name: "Portfolio 2" },
          { id: 3, name: "Portfolio 3" },
          { id: 4, name: "Portfolio 4" },
          { id: 5, name: "Portfolio 5" },
          { id: 6, name: "Portfolio 6" },
        ],
        VehicleType1: [
          { id: 1, name: "Taxable" },
          { id: 2, name: "Pre-Tax" },
          { id: 3, name: "Tax-Deferred" },
        ],
        VehicleType2: [
          { id: 1, name: "Taxable" },
          { id: 2, name: "Pre-Tax" },
          { id: 3, name: "Tax-Deferred" },
        ],
        VehicleType3: [
          { id: 1, name: "Taxable" },
          { id: 2, name: "Pre-Tax" },
          { id: 3, name: "Tax-Deferred" },
        ],
        historyIndex1: [
          { id: 1, name: "Vehicle 1" },
          { id: 2, name: "Vehicle 2" },
          { id: 3, name: "Vehicle 3" },
          { id: 4, name: "Vehicle 4" },
        ],
        historyIndex2: [
          { id: 1, name: "Vehicle 1" },
          { id: 2, name: "Vehicle 2" },
          { id: 3, name: "Vehicle 3" },
          { id: 4, name: "Vehicle 4" },
        ],
        historyIndex3: [
          { id: 1, name: "Vehicle 1" },
          { id: 2, name: "Vehicle 2" },
          { id: 3, name: "Vehicle 3" },
          { id: 4, name: "Vehicle 4" },
        ],
      },
    };
  },
  methods: {
    setVehicleTab: function(val) {
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
      console.log(this.tabs.vehicle2);
      if(!this.tabs.vehicle2 && this.vehicle.tab === 3){
        console.log('test');
        this.vehicle.tab = 1;
      }
      // stop the nex function calling request
      event.stopPropagation();
      event.preventDefault();
    },
    setActiveTab3: function(event) {
      if (this.tabs.vehicle2 && this.vehicle.tab !== 3) {
        this.tabs.vehicle3 = !this.tabs.vehicle3;
      }

      // stop the nex function calling request
      event.stopPropagation();
      event.preventDefault();
    },
    setNextTab: function() {
      if (this.vehicle.tab === 2) {
        console.log("next 2");
        this.tabs.vehicle3 = true;
        this.vehicle.tab = 3;
      }
      if (this.vehicle.tab === 1) {
        console.log("next 2");
        this.tabs.vehicle2 = true;
        this.vehicle.tab = 2;
      }
    },
    setVehicleType1: function(val = null) {
      this.vehicleSelected = true;
      this.vehicle.vehicle1.type = Number(val);
      this.vehicle.tab = val ? 1 : false;
    },
    setVehicleType2: function(val = null) {
      this.vehicle.vehicle2.type = val;
      this.vehicle.tab = val ? 2 : false;
    },
    setVehicleType3: function(val = null) {
      this.vehicle.vehicle3.type = val;
      this.vehicle.tab = val ? 3 : false;
    },
    historyIndex1: function(val = null) {
      this.vehicle.vehicle1.historyIndex = val;
    },
    historyIndex2: function(val = null) {
      this.vehicle.vehicle2.historyIndex = val;
    },
    historyIndex3: function(val = null) {
      this.vehicle.vehicle3.historyIndex = val;
    },
    setVehicleSaveRedio1: function() {
      this.vehicle.vehicle1.isSaved = !this.vehicle.vehicle1.isSaved;
    },
    setVehicleSaveRedio2: function() {
      this.vehicle.vehicle2.isSaved = !this.vehicle.vehicle1.isSaved;
    },
    setVehicleSaveRedio3: function() {
      this.vehicle.vehicle3.isSaved = !this.vehicle.vehicle1.isSaved;
    },
    // validate the input value with the help of min and max attribute
    handleLimit: function(e) {
      let len = e.target.value.length;
      let current = e.target.value;
      let min = Number(e.target.getAttribute("min"));
      let max = Number(e.target.getAttribute("max"));
      if (Number(current) < min || Number(current) > max) {
        let actualValue = current.slice(0, len - 1);
        e.target.value = actualValue;
        return false;
      }
    },
  },
};
</script>
<style lang="">
</style>