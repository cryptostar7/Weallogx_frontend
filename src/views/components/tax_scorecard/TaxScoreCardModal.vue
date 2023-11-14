<template lang="">

  <div class="modal fade common-modal preview-modal-backdrop p-0" id="taxScorecardModal" tabindex="-1"
    aria-labelledby="taxScorecardModalLabel" aria-hidden="true">

    <a type="button" data-bs-dismiss="modal" class="preview-modal-close" ref="modalCloseRef">
      <svg width="45" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1974" filter="url(#filter0_d_346_5079)">
          <rect id="Rectangle 174" width="49.4476" height="5.7055" rx="2.85275"
            transform="matrix(0.707099 0.707114 -0.707099 0.707114 7.03516 0.000488281)" fill="#0E6651" />
          <rect id="Rectangle 175" width="49.4476" height="5.7055" rx="2.85275"
            transform="matrix(-0.707099 0.707114 -0.707099 -0.707114 42 4.03442)" fill="#0E6651" />
        </g>
        <defs>
          <filter id="filter0_d_346_5079" x="0.181641" y="1.18164" width="44.6367" height="46.6367"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="6" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_346_5079" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_346_5079" result="shape" />
          </filter>
        </defs>
      </svg>

    </a>

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable tax-score-preview-modal">
      <div class="modal-content bg-none">
        <div class="modal-body p-0 bg-none">

          <div class="index-strategy-content-div p-0 border-0 bg-none">

            <div class="index-strategy-content-inner-div withBoxShadow">

              <tax-score-card-component ref="taxScorecard"/>

              <tax-score-card-form-buttons
                :runButtonEnabled="validation.form_valid"
                @run="generateTaxScorecard"
                @reset="resetForm"
              />
              
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<script>

import { mapState } from "vuex"
import TaxScoreCardComponent from "./TaxScoreCardComponent.vue"
import TaxScoreCardFormButtons from "./TaxScoreCardFormButtons.vue"

export default {

  components: {
    TaxScoreCardComponent,
    TaxScoreCardFormButtons
  },

  computed: {
    ...mapState({
        validation: state => state.data.tax_scorecard.validation
    })
  },

  methods: {
    generateTaxScorecard: function () {
      this.$refs.taxScorecard.generateTaxScorecard()
      this.$refs.modalCloseRef.click()
    },
    resetForm: function () {
      this.$refs.taxScorecard.resetForm()
    }
  }
}

</script>
