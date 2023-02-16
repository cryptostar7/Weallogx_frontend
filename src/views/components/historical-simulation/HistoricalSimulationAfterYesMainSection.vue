<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/create-new-scenario/${this.$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${this.$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${this.$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link :to="`/historical-simulations/${this.$route.params.scenario}`" class="nav-link p-0">Historical Simulations</router-link></li>
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
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                      <label class="historical-paraCheckBox" for="scheduleTemplateCheckbox">Historical Simulations</label>
                      <div class="form-check form-switch custom-switch ms-2">
                        <input class="form-check-input" type="checkbox" role="switch" id="scheduleTemplateCheckbox" checked>
                      </div>
                    </div>
                    <div>
                      <p class="hisToprghtpara fs-14">OPTIONAL</p>
                    </div>
                  </div>
                  <div class="after-yes-middle-div my-2">
                    <p class="afterYesMdlPara">How would you like to build your Index Strategy Allocation?</p>
                    <div class="twoBtnSwtchMainDiv nav nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <div class="active" id="v-pills-scratch-tab" data-bs-toggle="pill" data-bs-target="#v-pills-scratch" type="button" role="tab" aria-controls="v-pills-scratch" aria-selected="true">Create from Scratch</div>
                      <div id="v-pills-indexStrategy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-indexStrategy" type="button" role="tab" aria-controls="v-pills-indexStrategy" aria-selected="false">Use Existing Index Strategy Allocation</div>
                    </div>
                    <div class="tab-content mt-5" id="v-pills-tabContent">
                      <div class="tab-pane fade show active" id="v-pills-scratch" role="tabpanel" aria-labelledby="v-pills-scratch-tab">
                      </div>
                      <div class="tab-pane fade" id="v-pills-indexStrategy" role="tabpanel"  aria-labelledby="v-pills-indexStrategy-tab">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-8 offset-md-2 strategyAllocation">
                              <form action="javascript:void(0)">
                                <div class="form-group less">
                                  <div class="d-flex justify-content-between align-items-center mt-4 mb-1">
                                    <label for="existingComparativeVehiclePortfolio" class="fs-14 bold-fw">Choose
                                      Existing Index Strategy Allocation</label>
                                  </div>
                                  <div class="p-relative">
                                    <input type="text" id="existingComparativeVehiclePortfolio" placeholder="Select"
                                      class="form-control pe-5 autocomplete">
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
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-30">
                    <router-link :to="`/historical-simulations-from-scratch/${this.$route.params.scenario}`" class="nav-link btn form-next-btn active fs-14" id="nextBtnVsblOnSlct">Next</router-link>
                    <span class="d-block mb-3"></span>
                    <router-link :to="`/historical-simulations/${this.$route.params.scenario}`" class="nav-link btn form-back-btn fs-14">
                    <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back</router-link>
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
    components:{RouterLink},
}
</script>
<style lang="">
    
</style>