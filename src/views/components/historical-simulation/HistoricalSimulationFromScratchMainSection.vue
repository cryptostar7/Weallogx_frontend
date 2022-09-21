<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link to="/create-new-scenario" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link to="/illustration-data" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link to="/comparative-vehicles" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="/historical-simulations" class="nav-link p-0">Historical Simulations</router-link></li>
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
                <div class="col-md-10 offset-md-1">
                  <div class="d-flex align-items-center">
                    <label for="scheduleTemplateCheckbox" class="historical-paraCheckBox">Historical Simulations</label>
                    <div class="form-check form-switch custom-switch ms-2">
                      <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox"
                        checked>
                    </div>
                  </div>
                  <div class="after-yes-middle-div my-2 p-4">
                    <p class="numberIndexStrtegiesPara">Number of Index Strategies</p>
                    <div class="d-flex justify-content-center">
                      <div class="multiRadioBtnMainDiv">
                        <label for="tab1" :class="`eachRadioBtnBgDiv ${activeTab === 1 && 'active'}`" id="historicalTopCheckBoxDiv1">
                          <div class="form-check form-switch custom-switch radioClassDarkMode ms-2">
                            <input class="form-check-input" @change="setActiveTab(1)" type="checkbox" role="switch" id="tab1" checked >
                          </div>
                          <p class="historicalRadioNumberPara">1</p>
                        </label>
                        <!--  -->
                        <label for="tab2" :class="`eachRadioBtnBgDiv ${activeTab === 2 && 'active'}`" id="historicalTopCheckBoxDiv2">
                          <div class="form-check form-switch custom-switch radioClassDarkMode ms-2">
                            <input class="form-check-input" type="checkbox" @change="setActiveTab(2)" role="switch" id="tab2" >
                          </div>
                          <p class="historicalRadioNumberPara">2</p>
                        </label>
                        <!--  -->
                        <label :class="`eachRadioBtnBgDiv ${activeTab === 3 && 'active'}`" for="tab3" id="historicalTopCheckBoxDiv3">
                          <div class="form-check form-switch custom-switch radioClassDarkMode ms-2">
                            <input class="form-check-input" type="checkbox" @change="setActiveTab(3)" role="switch" id="tab3">
                          </div>
                          <p class="historicalRadioNumberPara">3</p>
                        </label>
                      </div>
                    </div>
                    <!-- tab 1 start -->
                    <div :class="`commonAllDivs ${activeTab !== 1 && 'd-none'}`" >
                      <div class="historicalYesDivCommon mt-4">
                        <p class="indexStrategyPara">Index Strategy #1</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                  <SelectDropdown
                                    :list="dropdown.historyIndex"
                                    label="Use Existing Index Strategy"
                                    id="existingComparativeVehiclePortfolio"
                                    class="form-group less pt-3"
                                    :optional="true"
                                  />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component />
                        <save-strategy-template />
                      </div>
                    </div>
                    <!-- tab 1 end -->
                    <div :class="`commonAllDivs ${activeTab !== 2 && 'd-none'}`">
                      <p class="strategyWeightPara">Strategy Weight</p>
                      <div class="d-flex align-items-center flex-column justify-content-center ">
                        <div class="strategyWeight mid d-flex">
                          <div id="strategyMidWeight1" :style="{width: range1.midRange1.replace('%', '')+'%'}" class="mainResizeDiv position-relative">#1
                            <div class="resizing-right-div resizing-right-div-1"><img
                                src="@/assets/images/icons/tinny-arrow-left.svg" alt="">&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron"></div>
                          </div>
                          <div id="strategyMidWeight2" :style="{width: range1.midRange2.replace('%', '')+'%'}" class="position-relative mainResizeDiv">#2
                          </div>
                          <input ref="midRangeInput" v-model="range1.midRange" type="range" min="1" max="100" id="midRange" class="strategy-range-input">
                        </div>
                        <div class="mid-sw-inputs d-flex align-items-center justify-content-between w-100 w-max-427 mt-3">
                          <div id="swInputDivMid1" class="sw-input-div d-flex justify-content-center">
                            <input ref="swInputMid1" v-model="range1.midRange1" type="text" class="form-control range-input" >
                          </div>
                          <div id="swInputDivMid2" class="sw-input-div d-flex justify-content-center">
                            <input ref="swInputMid2" v-model="range1.midRange2" type="text" class="form-control range-input">
                          </div>
                        </div>
                      </div>
                      <p class="strategyErrorPara">Sum of all weights must equal 100%.</p>

                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #2</p>
                        <div class="indexStrategyBorder">           
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                <div class="d-flex justify-content-between align-items-center mt-4 mb-1">
                                  <label for="allocation">Choose Existing Index Strategy Allocation</label>
                                  <label class="labelOptional">OPTIONAL</label>
                                </div>                   
                                <div class="p-relative form-group">
                                  <input type="text" id="existingComparativeVehiclePortfolioTab2"
                                    placeholder="Select or Start Typing" class="form-control pe-5 autocomplete">
                                  <span class="chevron-span">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                        fill="black" />
                                      <path
                                        d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                        fill="black" />
                                    </svg>
                                  </span>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component />
                        <save-strategy-template />
                      </div>

                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch ms-2">
                              <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation"
                                @change="allocation()">
                            </div>
                            <label for="saveAllocation" class="buttonSaveRadioPara">Save as Index Strategy
                              Allocation</label>
                          </div>
                          <div class="saveZIndexTempContent form-group" id="saveAllocationContent">
                            <form action="javascript:void(0)">
                              <label for="templateName">Allocation Name</label>
                              <input type="text" class="form-control" id="templateName">
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- tab 2 end -->
                    <div :class="`commonAllDivs ${activeTab !== 3 && 'd-none'}`">
                      <p class="strategyWeightPara">Strategy Weight</p>
                      <div class="d-flex align-items-center flex-column justify-content-center ">
                        <div class="strategyWeight d-flex">
                          <div id="strategyWeight1" class="mainResizeDiv position-relative">#1
                          </div>
                          <div id="strategyWeight2" class="position-relative mainResizeDiv">#2
                            <div class="resizing-right-div resizing-right-div-1"><img
                                src="@/assets/images/icons/tinny-arrow-left.svg" alt="">&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron"></div>
                            <div class="resizing-left-div resizing-right-div-2"><img
                                src="@/assets/images/icons/tinny-arrow-left.svg" alt="">&nbsp;&nbsp;<img
                                src="@/assets/images/icons/tinny-arrow-right.svg" alt="Chevron"></div>
                            <!-- <p class="mainResizeparaPer2">33.33%</p> -->
                          </div>
                          <div id="strategyWeight3" class="mainResizeDiv position-relative">#3</div>
                          <input type="range" min="1" max="100" value="50" id="exampleRange1"
                            class="strategy-range-input strategy-range-input-1">
                          <input type="range" min="1" max="100" value="50" id="exampleRange2"
                            class="strategy-range-input strategy-range-input-2">
                        </div>
                        <div class="d-flex align-items-center justify-content-between w-100 w-max-427 mt-3">
                          <div id="swInputDiv1" class="sw-input-div d-flex justify-content-center">
                            <input id="swInput1" type="text" class="form-control range-input" value="33.33%">
                          </div>
                          <div id="swInputDiv2" class="sw-input-div d-flex justify-content-center">
                            <input id="swInput2" type="text" class="form-control range-input" value="33.33%">
                          </div>
                          <div id="swInputDiv3" class="sw-input-div d-flex justify-content-center">
                            <input id="swInput3" type="text" class="form-control range-input" value="33.33%">
                          </div>
                        </div>
                      </div>
                      <p class="strategyErrorPara">Sum of all weights must equal 100%.</p>
                      <div class="historicalYesDivCommon margin-top-3">
                        <p class="indexStrategyPara">Index Strategy #3</p>
                        <div class="indexStrategyBorder">
                          <p></p>
                        </div>
                        <div class="container mb-4">
                          <div class="row">
                            <div class="col-md-10 offset-md-1 strategyAllocation">
                              <form action="javascript:void(0)">
                                <div class="d-flex justify-content-between align-items-center mt-4 mb-1">
                                  <label for="allocation"></label>
                                  <label class="labelOptional">OPTIONAL</label>
                                </div>
                                <div class="p-relative form-group">
                                  <input type="text" id=""
                                    placeholder="Select or Start Typing" class="form-control pe-5 autocomplete">
                                  <span class="chevron-span">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M9.56303 1.06185L5.32039 5.30449C4.92986 5.69501 4.92986 6.32818 5.32039 6.7187C5.71091 7.10923 6.34408 7.10923 6.7346 6.7187L10.9772 2.47606C11.3678 2.08554 11.3678 1.45237 10.9772 1.06185C10.5867 0.671325 9.95355 0.671325 9.56303 1.06185Z"
                                        fill="black" />
                                      <path
                                        d="M6.7183 5.30448L2.47566 1.06184C2.08514 0.671319 1.45197 0.671319 1.06145 1.06184C0.670923 1.45237 0.670923 2.08553 1.06145 2.47606L5.30409 6.7187C5.69461 7.10922 6.32778 7.10922 6.7183 6.7187C7.10883 6.32817 7.10883 5.69501 6.7183 5.30448Z"
                                        fill="black" />
                                    </svg>

                                  </span>
                                </div>

                                 <select-dropdown 
                                   :list="dropdown.historyIndex"
                                    label="Choose Existing Index Strategy Allocation"
                                    id="existingComparativeVehiclePortfolioTab3"
                                    class="form-group less pt-3"
                                    :optional="true"
                                />
                              </form>
                            </div>
                          </div>
                        </div>
                        <analysis-parameters />
                        <growth-parameters />
                        <enhancements-component />
                        <fees-component />
                        <save-strategy-template />
                      </div>

                      <div class="d-flex justify-content-center mt-4 mx-4">
                        <div class="w-75">
                          <div class="d-flex align-items-center mb-2">
                            <div class="form-check form-switch custom-switch ms-2">
                              <input class="form-check-input" type="checkbox" role="switch" id="saveAllocation2"
                                @change="allocation2()">
                            </div>
                            <label for="saveAllocation2" class="buttonSaveRadioPara">Save as Index Strategy
                              Allocation</label>
                          </div>
                          <div class="saveZIndexTempContent form-group" id="saveAllocationContent2">
                            <form action="javascript:void(0)">
                              <label for="templateName">Template Name</label>
                              <input type="text" class="form-control" id="templateName">
                            </form>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!-- tab 3 end -->
                  </div>

                  <div class="text-center mt-30">
                    <router-link to="/review-summary" class="nav-link btn form-next-btn active fs-14"
                      id="nextBtnVsblOnSlct">Review</router-link>
                    <span class="d-block mb-3"></span>
                    <div class="d-flex position-relative mb-5">
                      <router-link to="/historical-simulations-after-yes"
                        class="nav-link btn form-back-btn fs-14 backHistoricalBtn"><img
                          src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back</router-link>

                      <router-link to="/review-summary" class="nav-link btn form-back-btn fs-14 skipHistoricalBtn"> Skip
                        Historical Simulations</router-link>
                      <a href="javascript:void(0)" class="nav-link btn form-back-btn fs-14 skipScenarioBtn">Save
                        Scenario as Draft</a>
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
import { RouterLink } from "vue-router";
import { putPercentage } from '../../../services/put-percentage';
import SelectDropdown from "../common/SelectDropdown.vue";
import AnalysisParameters from './AnalysisParameters.vue';
import EnhancementsComponent from './EnhancementsComponent.vue';
import GrowthParameters from './GrowthParameters.vue';
import FeesComponent from './FeesComponent.vue';
import SaveStrategyTemplate from './SaveStrategyTemplate.vue';
export default {
  components: { RouterLink, SelectDropdown, GrowthParameters, AnalysisParameters, EnhancementsComponent, FeesComponent, SaveStrategyTemplate },
  data(){
    return {
      activeTab:1,
      range1:{
        midRange:50,
        midRange1:'50.00%',
        midRange2:'50.00%',
      },      
       range2:{
        midRange:50,
        midRange1:'33.33%',
        midRange2:'33.33%',
        midRange3:'33.33%',
      },      
      dropdown: {
        historyIndex : [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
         historyIndex2 : [
          "S&P 500",
          "Blended Index",
          "Bloomberg US Dynamic Balance II ER",
          "PIMCO Tactical Balanced ER",
        ],
      },
      rollingTimePeriod : [15,20,25,30,35,40,45,50],
      rollingPeriod1:{
        value:'',
        time:50
      },
      customRollingPeriod1:'',
    }
  },
  mounted() {
    putPercentage();

    // straight weight range 1
    this.$refs.midRangeInput.addEventListener('input', (e) => {
      this.range1.midRange1 = Number(e.target.value).toFixed(2)+'%';
      this.range1.midRange2 = (100 - Number(e.target.value)).toFixed(2)+'%';
    })  

    this.$refs.swInputMid1.addEventListener('focus', (e) => {
      this.range1.midRange1 = e.target.value.replace('%', '');
    })

    this.$refs.swInputMid1.addEventListener('blur', (e) => {
      if(e.target.value){
        this.range1.midRange1 = Number(e.target.value.replace('%', '')).toFixed(2)+'%';
      }else{
        this.range1.midRange1 = '0%';
      }
    })

    this.$refs.swInputMid1.addEventListener('input', (e) => {
      var text = e.target.value.replace('%', '');
      var value = Number(text);
      var str = Number(text).toString();
      if (Number(value) > 99) {
        this.range1.midRange1 =  (str.slice(0, str.length - 1)).toString();
      }else{
        this.range1.midRange2 = (100 - value).toFixed(2).toString()+'%';
      }
    })

    this.$refs.swInputMid2.addEventListener('focus', (e) => {
      this.range1.midRange2 = e.target.value.replace('%', '');
    })

    this.$refs.swInputMid2.addEventListener('blur', (e) => {
      if(e.target.value){
        this.range1.midRange2 = Number(e.target.value.replace('%', '')).toFixed(2)+'%';
      }else{
        this.range1.midRange2 = '0%';
      }
    })

    this.$refs.swInputMid2.addEventListener('input', (e) => {
      var text = e.target.value.replace('%', '');
      var value = Number(text);
      var str = Number(text).toString();
      if (Number(value) > 99) {
        this.range1.midRange2 =  (str.slice(0, str.length - 1)).toString();
      }else{
        this.range1.midRange1 = (100 - value).toFixed(2).toString()+'%';
      }
    })
  },
  updated(){
    putPercentage();
  },
  methods:{
    setActiveTab:function(tab){
      console.log(tab);
      this.activeTab = tab;
    }
  }
};
</script>
<style lang="">
</style>