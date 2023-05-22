<template>
  <section class="main-section mt-0 historical-mainSection">
    <div class="reviewProgressMainDiv py-4 HistoricalPositionStatic mb-3">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>
      <router-link to="/" class="btn mt-1 ms-1">
        <img src="@/assets/images/icons/cross.svg" alt="cross" class="ReviewCrossBtn">
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center form-row mt-0">
        <div class="col-md-9">
          <div class="main-form-div mb-0">
            <scenario-label-component />
            <div class="form-wrapper">
              <p class="historicalAllSetPara">Your Scenario is all set!</p>
              <div class="text-center mt-30">
                <router-link :to="`/review-summary/${$route.params.scenario}`" class="nav-link d-inline-block btn form-next-btn fs-14 active">Review</router-link>
                <span class="d-block mb-2"></span>
                <router-link :to="`/select-historical-simulations/${$route.params.scenario}`" class="nav-link btn form-back-btn fs-14 active"><img
                    src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back</router-link>
                    <br>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </section>
</template>
<script>
import ScenarioLabelComponent from '../common/ScenarioLabelComponent.vue';
export default {
    components:{ScenarioLabelComponent},
}
</script>
<style lang="">
    
</style>