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
        <div class="col-sm-12 col-lg-10 col-xxl-9">
          <div class="main-form-div">
            <scenario-label-component />
            <div class="form-wrapper">
              <p class="historicalTopPara1">Add Historical Simulations?</p>
              <p class="historicalTopPara2">OPTIONALS</p>
              <div class="d-flex align-items-center justify-content-center mt-3">
                <router-link :to="doNotShowAgreement ? `/historical-index-strategy-allocation/${this.$route.params.scenario}` : ''"  :data-bs-toggle="doNotShowAgreement ? '' : 'modal'" :data-bs-target="doNotShowAgreement ? '' : '#disclosureAgreementModal'">
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
                <router-link :to="`/scenario-complete/${this.$route.params.scenario}`">
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
                <router-link :to="`/comparative-vehicles/${$route.params.scenario}`" class="nav-link btn d-inline-block form-back-btn fs-14" disabled="true">
                  <img src="@/assets/images/icons/chevron-left-grey.svg" class="img-fluid" alt="Chevron" width="6"> Back
                </router-link>
              </div>
              <div class="text-center mt-30">
                <router-link :to="`/review-summary/${$route.params.scenario}`" class="nav-link btn d-inline-block form-back-btn fs-14" disabled="true">Return to Review</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="modal fade common-modal" id="disclosureAgreementModal" tabindex="-1" aria-labelledby="DeleteComparativeCvModalLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-md">
          <div class="modal-content">
            <div class="modal-header justify-content-center p-relative">
              <h6 class="bold-fw fs-14 pt-2 line-thick">Historical Simulations Disclosure and Agreement</h6>
              <button type="button" class="btn-close right-pos" data-bs-dismiss="modal" aria-label="Close">
                <img src="/src/assets/images/icons/cross-grey.svg" class="img-fluid" alt="Close Modal"></button>
            </div>
            <div class="modal-body pt-0">
              <section class="disclosure-content-sect fs-10">
                  <p>In using this module, you understand that the results can be significantly higher than the official carrier illustration. However, you understand that the results are simulated with the benefit of hindsight and are not part of the official carrier illustration. You will not present the results as a product of the carrier. In some cases, certain indexes include simulated data before the index was “live”. You acknowledge that this is a weakness of those particular indexes. You understand that the results from the historical simulations herein use a proxy asset called a Theoretical Synthetic Asset (TSA), not the actual insurance policy. The TSA is not a real asset and cannot be purchased in the real world. You will present it as such and not as the actual insurance policy and use every effort to ensure the public understands this. You will not use parameters, such as cap rates, participation rates, floors, margins/spreads, etc., in simulating the TSA that are more favorable than the policy’s current parameters. In using this module, you further agree that you are in compliance with the carrier’s sales and marketing standards. You will ensure that the disclosures utilized are also in compliance with the carrier, industry, local, state, and federal laws and standards. You acknowledge that this is expressly your responsibility as a producer or agent. 
                   <br><br>

                  You understand that WealthLogix™, its owners, directors, employees, contractors and other interested parties have used good faith and made every reasonable effort to ensure the accuracy of the module, and will hold WealthLogix™, its owners, directors, employees, contractors and other interest parties harmless. You will not hold WealthLogix™ liable or responsible for misuse of this or any module of its platform. Past performance is not an indicator of future performance. The real world results can, and likely will be, materially different from the simulated historical results of the TSA herein.</p>
                </section>
                <div class="disclosure-radios mt-3 d-flex flex-column align-items-center">
                  <div class="mb-1">
                    <input hidden id="confirmAndAgree" type="checkbox">
                    <label for="confirmAndAgree"  class="fs-14 semi-bold-fw cursor-pointer"> I Confirm and Agree</label>
                  </div>
                  <div>
                    <input hidden id="doNotShowAgain" type="checkbox">
                    <label for="doNotShowAgain" class="fs-14 semi-bold-fw cursor-pointer" @click="hideAgreement()"> Do Not Show Again</label>
                  </div>
                </div>
                <div class="d-inline-flex justify-content-center w-100 flex-wrap gap-24 pt-2 mt-2 pb-2">
                  <button type="button" class="btn modal-cancel-btn" data-bs-dismiss="modal">Do Not Agree & Go Back</button>
                  <router-link :to="`/historical-index-strategy-allocation/${this.$route.params.scenario}`" type="button" id="continueBtn" class="btn yes-delete-btn disabled" disabled>Continue</router-link>
                </div>
              </div>
            </div>
          </div>
      </div>
  </section>
</template>
<script>
import HistoricalSimulationSteps from "../common/HistoricalSimulationSteps.vue";
import ScenarioLabelComponent from "../common/ScenarioLabelComponent.vue";
import { get, patch } from "../../../network/requests.js";
import { getUrl } from "../../../network/url.js";
import {
  authHeader,
} from "../../../services/helper";

export default {
  components: { HistoricalSimulationSteps, ScenarioLabelComponent },
  data() {
    return {
      doNotShowAgreement: false,
      user: 0,
    };
  },
  mounted() {
    const confirmAndAgree = document.getElementById("confirmAndAgree");
    const continueBtn = document.getElementById("continueBtn");
    confirmAndAgree.addEventListener("click", e => {
      if (e.currentTarget.checked) {
        continueBtn.classList.remove("disabled");
        continueBtn.removeAttribute("disabled");
      } else {
        continueBtn.classList.add("disabled");
        continueBtn.setAttribute("disabled", true);
      }
    });

    continueBtn.addEventListener("click", e => {
      if (!e.currentTarget.classList.contains("disabled")) {
        const modalBackDrop = document.querySelector(".modal-backdrop");
        modalBackDrop.remove();
        document.body.removeAttribute("style");
      }
    });

    this.checkAgreement();
  },

  methods: {
    hideAgreement: function() {
      this.doNotShowAgreement = true;
      const data = { historical_disclosure_agreement: true };
      patch(`${getUrl("user")}${this.user}/`, data, authHeader());
    },
    checkAgreement: function() {
      get(`${getUrl("scenario")}${this.$route.params.scenario}/`, authHeader())
      .then(response => {
        console.log(response.data.data)
        this.doNotShowAgreement = response.data.data.user.historical_disclosure_agreement
        this.user = response.data.data.user.id
      })
      .catch(error => {
        if (
          error.code === "ERR_BAD_RESPONSE" ||
          error.code === "ERR_NETWORK"
        ) {
          this.$toast.error(error.message);
        }
        this.$store.dispatch("loader", false);
      });
    }
  },
};
</script>
