<template>
  <section class="main-section mt-0 historical-mainSection marginTopNavbar">
    <div class="reviewProgressMainDiv py-5 HistoricalPositionStatic">
      <ul class="mt-1 review-progress" id="reviewProgress">
        <li class="done"><router-link :to="`/scenario-details/${this.$route.params.scenario}`" class="nav-link p-0">Scenario Details</router-link></li>
        <li class="done"><router-link :to="`/illustration-data/${this.$route.params.scenario}`" class="nav-link p-0">Illustration Data</router-link></li>
        <li class="done"><router-link :to="`/comparative-vehicles/${this.$route.params.scenario}`" class="nav-link p-0">Comparative Vehicles</router-link></li>
        <li class="active"><router-link to="" class="nav-link p-0">Historical Simulations</router-link></li>
      </ul>
      <router-link to="/">
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
            <div class="form-wrapper">
              <p class="historicalTopPara1">Add Historical Simulations?</p>
              <p class="historicalTopPara2">OPTIONALS</p>
              <div class="d-flex align-items-center justify-content-center mt-3">
                <router-link :to="`/historical-simulations-after-yes/${this.$route.params.scenario}`">
                  <div class="historical-yesNo-mainDiv">
                    <div class="historical-yes-div">
                      <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="34.8984" y="1.41406" width="33.0695" height="2" rx="1"  transform="rotate(135 34.8984 1.41406)" fill="#0E6651" />
                        <rect x="11.3867" y="24.7969" width="16.1041" height="2" rx="1"  transform="rotate(-135 11.3867 24.7969)" fill="#0E6651" />
                      </svg>
                    </div>
                    <p class="historicalYesNoTxt">Yes
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.41797" y="0.00146484" width="8" height="2.00096" rx="1.00048"  transform="rotate(45 1.41797 0.00146484)" fill="black" />
                        <rect x="7.07422" y="5.76904" width="8" height="2.00318" rx="1.00159"  transform="rotate(135 7.07422 5.76904)" fill="black" />
                      </svg>
                    </p>
                  </div>
                </router-link>
                <router-link :to="`/historical-simulations-after-no/${this.$route.params.scenario}`">
                  <div class="historical-yesNo-mainDiv ms-4">
                    <div class="historical-no-div">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="29.8516" y="1.56641" width="40" height="2" rx="1"  transform="rotate(135 29.8516 1.56641)" fill="#0E6651" />
                        <rect x="28.4375" y="29.8516" width="40" height="2" rx="1"  transform="rotate(-135 28.4375 29.8516)" fill="#0E6651" />
                      </svg>
                    </div>
                    <p class="historicalYesNoTxt">No
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.41797" y="0.00146484" width="8" height="2.00096" rx="1.00048"  transform="rotate(45 1.41797 0.00146484)" fill="black" />
                        <rect x="7.07422" y="5.76904" width="8" height="2.00318" rx="1.00159"  transform="rotate(135 7.07422 5.76904)" fill="black" />
                      </svg>
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="text-center mt-30">
                <span class="d-block mb-2"></span>
                <router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link btn form-back-btn fs-14" disabled="true">
                  <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
