<template>
  <div>
    <navbar-component />
     <section class="main-section">
      <div class="inner-section">
        <LeftSidebarComponent />
        <main class="right-area">
            <div class="right-area-inner p-relative rightInnerDarkbg">
                <div class="right-area-wrapper">
                    <!-- Inner Content Area Start -->
                    <section class="strategy-calc-main-section pb-4">
                        <div class="strategy-calc-main-div shadow-none">
                            <div class="index-strategy-head-div tax-scorcard">
                                <h1>Tax Scorecard</h1>
                            </div>

                            <tax-score-card-component ref="taxScorecard" />
                            <tax-score-card-form-buttons @run="generateTaxScorecard" @reset="resetForm"/>

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
        inputs: state => state.data.tax_scorecard.inputs,
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
