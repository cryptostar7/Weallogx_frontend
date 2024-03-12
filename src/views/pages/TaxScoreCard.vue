<template>
  <div>
    <navbar-component />
     <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
            <div class="right-area-inner p-relative rightInnerDarkbg">
                <div class="right-area-wrapper pt-0 pb-5">
                    <!-- Inner Content Area Start -->
                    <section class="strategy-calc-main-section mt-3 pt-4">
                        <div class="strategy-calc-main-div shadow-none">
                          <div class="index-strategy-head-div tax-scorcard">
                              <h1>Tax Scorecard</h1>
                          </div>
                          <div class="index-strategy-content-div">
                            <div class="index-strategy-content-inner-div withBoxShadow">
                              <tax-score-card-component ref="taxScorecard" />
                            </div>
                          </div>
                          <tax-score-card-form-buttons
                             :runButtonEnabled="validation.form_valid"
                             @run="generateTaxScorecard"
                             @reset="resetForm"
                          />
                      </div>
                    </section>

                  <!-- Inner Content Area End -->
              </div>
            </div>
          </main>
      </div>
    </section>
  </div>
</template>

<script>

import { mapState } from "vuex"
import NavbarComponent from "./../components/common/NavbarComponent.vue"
import LeftSidebarComponent from "./../components/common/LeftSidebarComponent.vue"
import TaxScoreCardComponent from "../components/tax_scorecard/TaxScoreCardComponent.vue"
import TaxScoreCardFormButtons from "../components/tax_scorecard/TaxScoreCardFormButtons.vue"

export default {

  components: {
    NavbarComponent,
    LeftSidebarComponent,
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
    },

    resetForm: function () {
      this.$refs.taxScorecard.resetForm()
    }
  }

};

</script>
