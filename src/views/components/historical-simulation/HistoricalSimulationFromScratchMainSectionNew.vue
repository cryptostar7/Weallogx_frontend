<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>
      <router-link to="/" class="btn mt-1 ms-1"> 
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn" /> 
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row">
        <div class="col-sm-12 col-xxl-10">
          <div class="main-form-div">
            <scenario-label-component />
            <div class="form-wrapper form-wrapper-responsive">
              <div class="container containerWidth">
                <div class="row justify-content-center">
                  <div class="col-sm-12 col-lg-11 col-xl-9">
                    <div class="d-flex align-items-center"> <label for="scheduleTemplateCheckbox"
                        class="historical-paraCheckBox">Historical Simulations</label>
                      <div class="form-check form-switch custom-switch ms-2">
                         <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked /> </div>
                    </div>
                      <global-parameters /> 
                      <index-strategy-parameters />
                    <div class="text-center mt-30"> 
                      <router-link to="" class="nav-link btn d-inline-block form-next-btn active fs-14" id="nextBtnVsblOnSlct" @click="submitHandler()">{{$route.query.review === 'true' ? 'Save & Review':'Review' }}</router-link> 
                      <!-- <router-link to="" class="nav-link btn d-inline-block form-next-btn active fs-14 mx-2" id="nextBtnVsblOnSlct" @click="submitHandler()">Save & Return Review</router-link>  -->
                      <span class="d-block mb-3"></span>
                      <div class="d-flex position-relative mb-5"> 
                        <router-link :to="`/${$route.query.review === 'true' ? 'review-summary':'select-historical-index-strategy-allocation'}/${$route.params.scenario}`" class="nav-link btn form-back-btn px-4 fs-14 backHistoricalBtn">
                          <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid me-1" style="position: relative; top: 0px;" alt="Chevron" width="6" />Back
                        </router-link> 
                        <router-link :to="`/review-summary/${$route.params.scenario}`" class=" nav-link btn form-back-btn fs-14 skipHistoricalBtn "> Skip Historical Simulations</router-link> 
                        <a href="javascript:void(0)" class="nav-link btn form-back-btn fs-14 skipScenarioBtn" v-if="$route.query.report" @click="submitHandler(false, true)">Save & Return to Current Report</a> 
                        <router-link to="" class="nav-link btn form-back-btn fs-14 skipScenarioBtn" v-if="!$route.query.report" @click="submitHandler(true)">Save Scenario as Draft</router-link> 
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
import { RouterLink } from "vue-router";
import GlobalParameters from "./GlobalParameters.vue";
import IndexStrategyParameters from "./IndexStrategyParameters.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";

export default {
  components: {
    RouterLink,
    GlobalParameters,
    IndexStrategyParameters,
    ScenarioLabelComponent,
  },
};
</script>
<style lang="">
</style>